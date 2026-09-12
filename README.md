# Student Management System

A full-stack Student Management System developed using React, Node.js, Express.js, and MongoDB. The application allows authenticated users to manage student records through a responsive web interface.

## Live Demo

https://github.com/gaurav-projects07/student-frontend.git

## Features

* User registration
* User login
* JWT authentication
* Protected dashboard
* Add students
* View student details
* Edit student details
* Delete students
* Student statistics
* Responsive user interface
* MongoDB Atlas integration

## Technologies Used

* React
* JavaScript (ES6)
* React Router
* Vite
* CSS
* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)

## Project Structure

```text
student-frontend/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AddStudent.jsx
│   │   ├── EditStudent.jsx
│   │   └── StudentDetails.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
Application Architecture
React Frontend
       │
       ▼
REST API
       │
       ▼
Express.js Backend
       │
       ▼
JWT Authentication
       │
       ▼
MongoDB Atlas
Student Management

The application provides complete CRUD operations for managing student records.

Create — Add a new student
Read — View student information
Update — Edit student information
Delete — Remove a student record
Getting Started
Clone the Repository
git clone https://github.com/gaurav-projects07/student-frontend.git
Install Dependencies
cd student-frontend
npm install
Run the Project
npm run dev

The application will normally run at:

http://localhost:5173
Backend Repository

https://github.com/gaurav-projects07/student-api

Environment Configuration

If environment variables are required, create a .env file in the project root.

Do not commit .env files or sensitive credentials to GitHub.

Future Improvements
Student search
Filtering and sorting
Pagination
Role-based authorization
Improved form validation
Automated testing
Production deployment
Author

Gaurav

Computer Science Undergraduate passionate about Software Development, Web Development, and Data Structures & Algorithms.

GitHub: https://github.com/gaurav-projects07

License

This project is open source and available under the MIT License.
