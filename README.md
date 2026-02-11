
 <!-- TODO Backend (Express + MongoDB + JWT) -->

 <!-- Setup -->

1. Install dependencies:
npm install

2. Create ".env` file

MONGO_URI= your mongodb URI
JWT_SECRET=  any secret key
PORT=5001

3. Run:
npm start  or nodemon server.js


 <!-- APIs details -->

1. Authentication
POST /api/auth/register 
POST /api/auth/login    

2. Todos CRUD Operations 
POST /api/todos
GET /api/todos
GET /api/todos/:id
PUT /api/todos/:id
DELETE /api/todos/:id
