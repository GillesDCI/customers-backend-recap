import express from 'express';

import Customer from './../models/Customer.js';

const router = express.Router();

//GET POST PUT/PATCH DELETE 

//GET request 
router.get('/list', async (req ,res) => {
    const customers = await Customer.find();

    return res.status(200).json(customers)
});

//POST 
router.post('/create', async (req, res) => {
    console.log("the body of our request is", req.body);

    try {
      //try some code 
      const resultCustomer = await Customer.create(req.body);
      return res.status(201).json({message:'Customer created', createdCustomer:resultCustomer}) 
    } catch (error) {
      //catch an error if the try code gives an error
      return res.status(500).json({message:'Error happened', error:error.toString()})
    }
})

export default router;