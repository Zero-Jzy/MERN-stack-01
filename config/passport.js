const User = require('../models/User');

var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err || !user) {
        return done(err, false);
      }
      return done(null, user);
    });
  }));
} 