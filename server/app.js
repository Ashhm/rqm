import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

//routes
import twitterRouter from './routes/twitter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(cors("*"));


app.use('/twitter', twitterRouter);

const server = app.listen(process.env.PORT || 3000,
  console.log(`Server is running`));