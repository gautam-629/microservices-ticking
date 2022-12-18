import express, { json } from 'express';
import "express-async-errors";
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middleware/error-handler';
import { currentUserRouter} from './routes/current-user';
import { signupRouter } from './routes/signup';

import  cookieSession from 'cookie-session';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
const app=express()

app.use(express.urlencoded({extended:false}))
app.use(json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
  });

  app.use(errorHandler);

  export {app};