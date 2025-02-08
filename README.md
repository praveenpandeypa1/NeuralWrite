# Blog App
A simple and user-friendly blog application built with Node.js, Express, MongoDB Atlas, and JWT Authentication. This project demonstrates how to create a blog platform where users can create, read, and manage blog posts, with secure authentication using JSON Web Tokens (JWT).

## Features     
- User Authentication: Secure login and registration using JWT.     
- Blog Post Management: Create, edit, and view blog posts.
- MongoDB Atlas: Cloud database for storing user and post data.   
EJS Templating: Dynamic HTML rendering for the front-end using EJS.   
Environment Configuration: Secure configuration using .env file.
Technologies Used
Node.js: JavaScript runtime for building the server-side application.
Express.js: Web framework for building RESTful APIs and server-side logic.
MongoDB Atlas: Cloud-based NoSQL database to store user data and blog posts.
JWT (JSON Web Tokens): Secure token-based authentication for user sessions.
EJS (Embedded JavaScript): Templating engine for rendering dynamic HTML content.
dotenv: Secure management of environment variables.
Installation
Prerequisites
Make sure you have the following installed on your machine:

Node.js: Download Node.js
MongoDB Atlas account: Create a free MongoDB Atlas account
Git: Download Git
Steps to Set Up
Clone the Repository

Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/yourusername/blog_app.git
Install Dependencies

Navigate to the project folder and install the required dependencies:

bash
Copy code
cd blog_app
npm install
Set Up Environment Variables

Create a .env file in the root of the project and add the following environment variables:

env
Copy code
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string with the connection URI from MongoDB Atlas, and your_jwt_secret_key with a secure random string used for JWT signing.

Start the Application

Run the app with the following command:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Sign Up / Log In

Users can create an account or log in with existing credentials. After successful authentication, users will receive a JWT token for session management.

Create a Blog Post

After logging in, users can create a new blog post with a title and content.

View Blog Posts

All blog posts will be displayed on the dashboard page. Each post shows the title, content, and the author.

Logout

Users can log out, which invalidates their session.

Directory Structure
bash
Copy code
/blog_app
├── /models               # Mongoose models for User and Post
├── /routes               # Express route handlers for authentication and posts
├── /views                # EJS templates for frontend views
│   ├── index.ejs         # Home page template
│   ├── dashboard.ejs     # Dashboard page for viewing posts
│   └── login.ejs         # Login page template
├── .env                  # Environment configuration
├── .gitignore            # Git ignore file
├── index.js              # Main entry point for the server
├── package.json          # Project dependencies and scripts
└── README.md             # Project README file
Contributing
Feel free to fork the repository and contribute by opening pull requests. You can improve features, fix bugs, or suggest changes.

Steps to Contribute:
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m "Added feature").
Push to your forked repository (git push origin feature-branch).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

This README includes sections for the project description, features, installation instructions, usage, directory structure, and contribution guidelines. It is designed to provide a clear understanding of the project and make it easy for users and developers to set it up and contribute.

Let me know if you need more information or adjustments!






