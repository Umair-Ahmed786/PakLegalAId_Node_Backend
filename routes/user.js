const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const { requireAuth } = require('@clerk/clerk-sdk-node');
const bodyParser = require('body-parser');
// const { Webhook } = require('svix');
// const dotenv = require('dotenv').config();



// const CLERK_WEBHOOK_SECRET = 'sk_test_qttgRKQd3sY9KYIPl4YovumEAxfuey7BcopQYHk7Gz';

//try to get more
router.post('/', bodyParser.raw({ type: 'application/json' }), async function (req, res) {
    try {

      console.log('Headers:', req.headers);
      console.log('Raw body:', req.body);

      // Extract payload data
    const payload = req.body;
    const userData = payload.data;

    const email = userData.email_addresses?.[0]?.email_address || null;
    const username = userData.username;
    const clerkUserId = userData.id;

    // Print extracted details
    console.log('Extracted User Data:');
    console.log(`Email: ${email}`);
    console.log(`Username: ${username}`);
    console.log(`Clerk User ID: ${clerkUserId}`);

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is missing in the payload' });
    }

     // Check if user already exists in the database
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       console.log(`User with email ${email} already exists.`);
       return res.status(200).json({ success: true, message: 'User already exists' });
     }
 
     // Create a new user
     const newUser = new User({
       clerkUserId,
       name: username,
       email,
     });
 
     await newUser.save();
     console.log('New user created:', newUser);
 
     res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
   
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
  }
}
)

  
module.exports = router;
