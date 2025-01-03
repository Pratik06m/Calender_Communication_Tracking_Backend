# Calendar Application for Communication Tracking - Backend

### Live Backend Link: https://calendar-application-for-communication.onrender.com/ 

## Overview
This repository contains the backend code for the Calendar Application for Communication Tracking. The backend provides the necessary API endpoints and services to manage companies, communications, and user interactions. It serves as the foundation for the React-based frontend application.

## Table of Contents
1. Features
2. Technologies
3. Installation
4. Configuration
5. API Endpoints
6. Testing
7. Deployment
8. Contributing
9. License

### Features
Company Management: Add, edit, and delete companies, including details such as name, location, LinkedIn profile, emails, phone numbers, and communication periodicity.

Communication Method Management: Create and manage communication methods (e.g., LinkedIn Post, Email, Phone Call), and set mandatory flags and sequences.

Communication Logging: Log performed communications with notes, type, and date.

User Notifications: Notify users of overdue or upcoming communications.

Authentication & Authorization: Basic authentication to restrict access to admin routes.
Technologies

Node.js for server-side JavaScript execution.

Express.js for building the REST API.

SQL for database storage of companies, communication methods, and logs.

SQL server for object relational modeling (ORM) with SQL.

JWT (JSON Web Tokens) for user authentication.

Nodemailer for sending email notifications (optional feature).

Cors for handling cross-origin resource sharing.

### Installation
Clone the backend repository:

git clone https://github.com/your-username/calendar-communication-tracking-backend.git
cd calendar-communication-tracking-backend

Install dependencies:


npm install
Set up your database:

Install MySQL or use an existing MySQL instance.
Create a new database for the project, for example: calendar_db.
Create a .env file in the root directory with the following environment variables:
DB_HOST: Database host (default: localhost).
DB_USER: Database username (e.g., root).
DB_PASSWORD: Database password.
DB_NAME: Database name (e.g., calendar_db).
PORT: Port number to run the server (default is 5000).
JWT_SECRET: Secret key for JWT authentication.
EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS (optional for email notifications).
Run database migrations: Sequelize is used for database interaction, and migrations need to be run to set up the database tables.

Create the tables and relationships by running:

npx sequelize-cli db:migrate
Run the backend server:

 
 
npm start
The backend server will run on http://localhost:5000 by default.

Configuration
You can configure the backend by modifying the .env file with the following parameters:

DB_HOST: MySQL host for your database connection.
DB_USER: MySQL username.
DB_PASSWORD: MySQL password.
DB_NAME: The name of the database.
PORT: Port number for the API to run (default is 5000).
JWT_SECRET: Secret key used for JWT token generation.
EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS: Credentials for sending email notifications (optional).
API Endpoints
Authentication
POST /api/auth/login
Logs in a user and generates a JWT token.
Request body: { "username": "admin", "password": "password" }
Response: JWT token
Company Management
GET /api/companies

Fetches all companies.
Response: Array of company objects.
POST /api/companies

Creates a new company.
Request body:
json
 
{
  "name": "Company Name",
  "location": "Location",
  "linkedin": "LinkedIn URL",
  "emails": ["email1@example.com", "email2@example.com"],
  "phoneNumbers": ["1234567890"],
  "comments": "Notes about the company",
  "communicationPeriodicity": "2 weeks"
}
Response: Newly created company object.
PUT /api/companies/:id

Updates a company's information.
Request body: Same as POST request.
Response: Updated company object.
DELETE /api/companies/:id

Deletes a company.
Response: Success message.
Communication Method Management
GET /api/communications-methods

Fetches all communication methods.
Response: Array of communication method objects.
POST /api/communications-methods

Creates a new communication method.
Request body:
json
 
{
  "name": "LinkedIn Post",
  "description": "Post on LinkedIn",
  "sequence": 1,
  "mandatory": true
}
Response: Newly created communication method object.
PUT /api/communications-methods/:id

Updates a communication method.
Response: Updated communication method object.
DELETE /api/communications-methods/:id

Deletes a communication method.
Response: Success message.
Communication Logging
POST /api/communications
Logs a new communication.
Request body:
json
 
{
  "companyId": "company-id",
  "type": "LinkedIn Post",
  "date": "2025-01-01",
  "notes": "Notes about the communication"
}
Response: Success message or logged communication object.
Notifications
GET /api/notifications
Fetches overdue and upcoming communications.
Response: Array of notifications.
Testing
To ensure the API works correctly:

Write unit and integration tests for each endpoint.
Use tools like Jest and Supertest for testing routes and database operations.
Run tests using:
 
 
npm test

### Deployment
Push the code to a GitHub repository.
Deploy the application using Heroku, AWS, or any other platform that supports Node.js.
Set up the production environment (e.g., MySQL, JWT secrets, and email credentials).
Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request. Be sure to follow the project's coding standards and include tests for your changes.

### License
This project is licensed under the MIT License - see the LICENSE file for details.