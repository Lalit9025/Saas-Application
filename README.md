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

### Frontend Deployment

#### Setup EC2 Instances Environment

1. **Connect to new Created Instances:**

   ```bash
   ssh -i "your-key-pair.pem" ubuntu@your-ec2-public-ip
   ```

2. **Update the package lists:**

   ```bash
   sudo apt-get update
   ```

3. **Install curl:**

   ```bash
   sudo apt-get install curl
   ```

4. **Setup Node.js environment:**

   ```bash
   curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

5. **Check installed Node.js and npm:**

   ```bash
   node -v
   npm -v
   ```

6. **Install Nginx:**

   ```bash
   sudo apt-get install nginx -y
   ```

7. **Check installed Nginx version:**

   ```bash
   nginx -v
   ```

8. **Navigate to the HTML folder & clone repo:**

   ```bash
   cd /var/www/html/
   ```

9. **Update security group settings:**

   - Go to your EC2 instances Dashboard.
   - Click on the security group link.
   - Edit inbound rules.
   - Add rules for HTTP (port 80) and custom TCP (port 3000 ) with source set to Anywhere (0.0.0.0/0).

10. **Open your instance's public IP in a browser to see the Nginx welcome page.**

#### Install React and Run Forever

1. **Clone a React application:**
   
2. **Start the React application:**

   ```bash
   npm start
   ```

3. **Install pm2 globally to run the app forever:**

   ```bash
   sudo npm install pm2 -g
   pm2 start npm --name "react-app" -- start
   pm2 save
   pm2 startup systemd
   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
   ```

### Backend Deployment

1. **Navigate to your backend project directory and install dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Set up MySQL database:**

   - Secure your MySQL installation:

     ```bash
     sudo mysql_secure_installation
     ```

   - Log in to MySQL and create the database and user:

     ```bash
     sudo mysql -u root -p
     CREATE DATABASE saasapplication;
     CREATE USER 'root'@'localhost' IDENTIFIED BY 'password';
     GRANT ALL PRIVILEGES ON saasapplication.* TO 'root'@'localhost';
     FLUSH PRIVILEGES;
     EXIT;
     ```

3. **Run the backend server using pm2:**

   ```bash
   pm2 start npm --name "backend" -- start
   pm2 save
   pm2 startup systemd
   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
   ```

## Additional Information

- **Deployed URL:** [http://43.205.42.95:3000]

