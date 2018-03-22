const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const passport = require('passport');

//Setting up JWT login strategy
const { JWT_EXPIRY, JWT_SECRET } = require('./config');

const options = {
	secretOrKey: config.secret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
	algorithms: ['HS256']
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
	done(null, payload.user);
});

//JWT End
passport.use(jwtStrategy);
module.exports = jwtStrategy;
