const passport = require('passport'),
	mongoose = require('mongoose'),
	GoogleStrategy = require('passport-google-oauth20'),
	keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(foundUser => {
		done(null, foundUser);
	});
});

const googleOauthOptions = {
	clientID: keys.GOOGLE_CLIENT_ID,
	clientSecret: keys.GOOGLE_CLIENT_SECRET,
	callbackURL: '/auth/google/callback',
	proxy: true
};

passport.use(
	new GoogleStrategy(
		googleOauthOptions,
		async (accessToken, refreshToken, profile, done) => {
			const foundUser = await User.findOne({ googleId: profile.id });
			if (foundUser) {
				return done(null, foundUser);
			}
			const { given_name, family_name, picture, email } = profile._json;
			const user = await new User({
				googleId: profile.id,
				firstName: given_name,
				lastName: family_name,
				email: email,
				picture: picture
			}).save();
			done(null, user);
		}
	)
);
