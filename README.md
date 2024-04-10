
# MERN Stack Project

This repository contains the code for a MERN (MongoDB, Express.js, React.js, Node.js) stack project with separate backend and frontend directories.

## Backend

The backend directory contains the server-side code built with Node.js and Express.js.

### Setup

1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: `npm install`.
3. Create a `.env` file based on `.env.example` and provide the required environment variables.
4. Start the server: `npm start`.

### Dependencies

- Express.js
- Mongoose
- dotenv
- bcryptjs (for password hashing)
- jsonwebtoken (for authentication)

## Frontend

The frontend directory contains the client-side code built with React.js.

### Setup

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

### Dependencies

- React.js
- React Router (for routing)
- Axios (for HTTP requests)
- Material-UI (for UI components)

## Development Notes

- Backend API endpoints can be accessed at `http://localhost:5000`.
- Frontend development server runs at `http://localhost:3000`.
- Make sure MongoDB is running and accessible. Update MongoDB connection string in `.env` file if necessary.
- Both backend and frontend directories contain their respective README files for further details.

