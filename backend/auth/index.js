import dotenv from "dotenv";
dotenv.config();
import { Strategy, ExtractJwt } from "passport-jwt";

export default function setupJWTStrategy(passport) {
  passport.use(
    new Strategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY,
      },
      function (payload, done) {
        try {
          return done(null, {
            id: payload.id,
            fullName: payload.fullName,
            completed: payload.completed,
            createdAt: payload.createdAt,
            updatedAt: payload.updatedAt,
            email: payload.email,
          });
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
}
