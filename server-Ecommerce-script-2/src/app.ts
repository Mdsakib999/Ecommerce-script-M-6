import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import { envVariables } from "./app/config/envConfig";
import "./app/config/passport";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes/router";

const app = express();

app.use(
  expressSession({
    secret: envVariables.EXPRESS_SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: envVariables.NOTEVIA_URL,
    credentials: true,
  }),
);

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Notevia backend",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
