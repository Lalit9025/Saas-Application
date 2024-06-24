# SaaS User Management System

## Overview

This project is a full-stack SaaS application for user registration, login, and profile viewing. It is built using React for the frontend, Node.js with Express for the backend, and MySQL for data storage. The application is deployed on AWS EC2.

## Frontend

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/Lalit9025/Saas-Application.git]
   cd saas
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of your frontend project and add the following:

```
REACT_APP_BACKEND_URL
```

### Running the Application

To start the development server:

```bash
npm start
```

To build the application for production:

```bash
npm run build
```
## Backend

### Installation

1. **Clone the repository:**

   ```bash
    git clone [https://github.com/Lalit9025/Saas-Application.git]
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of your backend project and add the following:

```
PORT=8080
JWT_SECRET
DB_HOST
DB_USER
DB_PASSWORD
DB_DATABASE
```

### Running the Application

To start the server:

```bash
npm start
```
## Deployment

### AWS EC2

1. **Set up EC2 instances for both the frontend and backend.**
2. **Deploy the frontend application on one EC2 instance.**
3. **Deploy the backend application on another EC2 instance.**
4. **Ensure that the security groups for the EC2 instances allow traffic on the necessary ports (e.g., port 80 for HTTP and port 8080 for the backend API).**

## Additional Information

- **Frontend URL:** [http://43.205.42.95:3000]

