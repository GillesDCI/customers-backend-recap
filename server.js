import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = dotenv.config().parsed;

import customerRoutes from './routes/customerRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
// .then(() => {console.log("we are connected to the database.")})
// .catch((error) => { console.log('an error occurred while connecting ot the db', error)})
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("We are connected to the database.");
  })
  .catch((error) => {
    console.log("An error occurred while connecting ot the db", error);
  });

//declare endpoint with customerRoutes
//this endpoint is available for clients to access. 
app.use('/api/customers', customerRoutes);

app.listen(3001, () => {
    console.log("The server is listening for requests");
});