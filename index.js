const express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	cookieSession = require('cookie-session'),
	keys = require('./config/keys');

require('./models/User');
require('./services/passport');

//App setup
const app = express();
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.COOKIE_KEY]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

//Route Setup
require('./routes/authRoutes')(app);
//React Route Setup
if (process.env.NODE_ENV === 'production') {
	//Serve js and css files if requested
	app.use(express.static('client/build'));
	//Serve html file for any front end requests not recognized by api server
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//DB Setup
const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
};
mongoose.connect(keys.DB_URL || 'mongodb://localhost:27017/WhirlDB', dbOptions);

//Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
	if (err) {
		console.log(err);
	}
	console.log(`Express server listening on port ${PORT}`);
});
