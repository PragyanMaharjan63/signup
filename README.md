# MERN Authentication 🚀

A simple **Signup, Login & Logout authentication system** built with the **MERN stack**.  
I implemented the full **backend from scratch** with JWT-based auth, cookies, and password hashing, along with a clean React + TailwindCSS frontend.

---

## 🔑 Features

- User Signup & Login
- Secure password hashing with **bcryptjs**
- **JWT Authentication** with cookie sessions
- Logout & protected routes

---

## 🛠️ Tech Stack

**Frontend** ⚡

- React
- React Router DOM
- React Hook Form
- Axios
- TailwindCSS

**Backend** ⚙️

- Express.js
- Mongoose (MongoDB)
- bcryptjs
- jsonwebtoken
- cookie-parser & cors

---

## 💾 Installation

1. Clone the repo

   ```
   git clone https://github.com/PragyanMaharjan63/signup.git
   cd mern-auth

   ```

2. Install node package for both of the folders

   ```
   npm install

   ```

3. Setup the .env file in the following format
   ```
   MONGODB_URI=
   JWT_SECRET_KEY=
   NODE_ENV="devlopment"
   ```
4. Run backend
   ```
   nodemon server.js
   ```
5. Run frontend
   ```
   npm run dev
   ```

And you are good to go!
