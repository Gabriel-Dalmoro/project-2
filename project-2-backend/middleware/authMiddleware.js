import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { User } from '../models/userModels.js';

export const protect = asyncHandler(async (req, res, next) => {
  // Initialized a token
  let token;
  // Check for the token in the headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      // .split split it into array
      token = req.headers.authorization.split(' ')[1];
      // Verify token
      // This takes the jwt secret in the environment variable
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      // -password exclude the password from the data that's return for this user
      req.user = await User.findById(decoded.id).select('-password');

      // Calling the next middleware
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized');
    }
  }

  // Check if there is no token
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized');
  }
});
