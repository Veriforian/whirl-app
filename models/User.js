const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: { type: String, required: true },
	email: String,
	firstName: String,
	lastName: String,
	picture: String,
	createdAt: { type: Date, default: new Date().toDateString() }
});

mongoose.model('users', userSchema);
