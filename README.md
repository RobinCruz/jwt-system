# JWT Authentication System with Node.js and MongoDB

This project is a cleanly architected JWT based authentication system built with Node.js and MongoDB. It handles user registration, login, token refreshing, and logout using access and refresh tokens. The application is organized following best practices with controllers, routes, services, data providers, and utility modules.

## Features

- **User Registration**: Register a new user with a username, email, and password.
- **User Login**: Authenticate users with email and password, returning an access token and refresh token.
- **Token Refresh**: Refresh the access token using a valid refresh token.
- **User Logout**: Invalidate the refresh token to log out the user.
- **Secure Authentication**: Passwords are hashed using `bcryptjs`, and JWTs are used for secure token-based authentication.

## Project Structure

```plaintext
/jwt-system
│
├── .env
├── index.js
├── controllers
│   └── controller.js
├── dataproviders
│   └── user_data_provider.js
├── models
│   └── User.js
├── routes
│   └── route.js
├── services
│   └── service.js
└── utils
    └── utils.js
