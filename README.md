# Blog App with AI Content Suggestions
This is a full-stack blog application with an AI content suggestion feature integrated into the frontend using EJS templates. The app allows users to create, edit, and view blog posts, with automatic content suggestions provided by AI to assist with writing.     
        
## Features          
- User Authentication: Secure login and registration for users.
- Blog Post Creation: Users can create and edit blog posts with a rich text editor.
- AI Content Suggestions: The app uses AI to suggest content or phrases based on the current writing to improve or enhance blog posts.
- EJS Templates: The frontend uses EJS for dynamic rendering and templating.
- Post Management: Users can view, edit, and delete their own blog posts.
- Responsive Design: The app is optimized for both mobile and desktop views

## Technologies Used
### Backend:
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework for Node.js to handle routing and server logic.
- MongoDB: NoSQL database for storing blog posts and user data.
- Mongoose: ORM for MongoDB to interact with the database.
- JWT: JSON Web Tokens for secure authentication.

## Frontend:
- EJS (Embedded JavaScript): Templating engine to render HTML dynamically with data from the backend.
- AI Integration: The AI model is integrated into the content creation page to suggest writing content dynamically.

## Other Libraries:
- Axios: For making API requests.
- BCrypt: For password hashing and secure storage.
- Dotenv: For managing environment variables.

## Getting Started
### Prerequisites
Make sure you have the following installed on your local    machine:  

- Node.js (v14 or later)
- MongoDB
#### Installation
1. Clone the repository:
 ```
 git clone https://github.com/yourusername/blog-app-ai.git
cd blog-app-ai
```
2. Install the dependencies:
```
npm install
```
3. Set up environment variables: Create a .env file in the root directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
```
4. Start the MongoDB server: Make sure MongoDB is running locally or remotely connected.

5. Run the development server:

6. Open your browser and visit http://localhost:3000 to view   the app.

## Frontend (EJS Templates)
The frontend uses EJS to render blog pages dynamically. You can find all the template files in the views folder. Here's how it works:

- views/layout.ejs: The main layout for the app.
- views/index.ejs: The homepage with a list of blog posts.
- views/createPost.ejs: The page where users create and edit blog posts, integrated with AI suggestions.

## AI Integration
The AI content suggestion feature is triggered as users write content. When typing into the editor, the AI model provides automatic suggestions that can be clicked to insert into the text.

To customize AI integration:

1. Go to routes/ai.js for the AI API integration logic.
2. Use the provided API key to connect to your AI provider.
3. AI suggestions are handled through an API call and displayed within the text editor.

## Contributing
If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch-name
3. Make your changes.
4. Push to the branch: git push origin feature-branch-name
5. Submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

