jwt = require('jsonwebtoken');
require('dotenv').config();

let Utils = {
    generateAccessToken: (userId) => {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        });
      },
      generateRefreshToken: (userId) => {
        return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
          expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        });
      },
      verifyAccessToken: (token) => {
        try {
          return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
          return null;
        }
      },
      verifyRefreshToken: (token) => {
        try {
          return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        } catch (err) {
          return null;
        }
      }
}

module.exports = Utils;