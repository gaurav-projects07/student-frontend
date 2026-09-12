Student Management System

A full-stack Student Management System built with React, Node.js, Express.js and MongoDB.

Features
User Registration
User Login
JWT Authentication
Student Dashboard
Add Student
View Student
Edit Student
Delete Student
MongoDB Atlas Database
Responsive UI
Tech Stack
Frontend
React
JavaScript
React Router
Vite
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
Project Structure

student-frontend/
├── public/
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── Dashboard.jsx
│ │ ├── AddStudent.jsx
│ │ ├── EditStudent.jsx
│ │ └── StudentDetails.jsx
│ ├── services/
│ │ └── api.js
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── package.json
├── package-lock.json
└── vite.config.js

Application Flow

React Frontend → REST API → Express.js Backend → JWT Authentication → MongoDB Atlas

Student Operations
Add Student — Create
View Student — Read
Edit Student — Update
Delete Student — Delete
Installation

git clone https://github.com/gaurav-projects07/student-frontend.git

cd student-frontend

npm install

npm run dev

The application runs on:

http://localhost:5173

Backend

Backend Repository:

https://github.com/gaurav-projects07/student-api

Future Improvements
Search and filtering
Pagination
Role-based authentication
Better form validation
Automated testing
Production deployment
Author

Gaurav Mishra
