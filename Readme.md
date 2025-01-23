# Twitter Clone - MERN Stack 

This is a full-stack Twitter clone built using the **MERN (MongoDB, Express, React, Node.js)** stack. The app allows users to create posts, comment, like, follow others, edit their profile, and more. It also includes user authentication with JWT, notifications, and image uploads using Cloudinary. The app utilizes **React Query** for data fetching and mutations to handle API requests efficiently. t


## Features 🚀

- **Authentication with JSON Web Tokens (JWT)** 🔑  
  Secure user authentication and authorization.

- **React Query** ⚛️  
  Used with **mutations** for efficient data fetching and caching.

- **Post CRUD Operations** ✍️  
  Users can create, edit, delete, and like posts.

- **Follow System** 👥  
  Suggested users to follow based on the existing network.

- **Commenting on Posts** 💬  
  Interact with posts by commenting.

- **Profile Management** 🖼️  
  Edit profile info, including profile image and cover image.

- **Image Upload** 📸  
  Upload profile and cover images using Cloudinary.

- **Notifications** 🔔  
  Get real-time notifications for actions such as likes and comments.

---

## Tech Stack 🛠️

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-FFD100?style=for-the-badge&logo=cloudinary&logoColor=black)

- **Frontend**: React.js ⚛️, TailwindCSS 🖌️
- **Backend**: Node.js 🌐, Express.js 🛠️
- **Database**: MongoDB 🗃️
- **Authentication**: JSON Web Tokens (JWT) 🔑
- **Image Hosting**: Cloudinary 📷
- **Real-time Communication**: Socket.io ⚡
- **State Management**: React Query 🔄 (used for fetching and caching data)
- **Styling**: TailwindCSS 🖌️

---

## Installation 🛠️

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (local or cloud database)
- Cloudinary account (for image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/twitter-clone.git
cd twitter-clone
```
### 2. Set up the .env file
Create a .env file in the root directory of the project and add the following variables:
```bash
MONGO_URI=your_mongo_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
### Build the app
```bash
npm run build
```
### Start the app
```bash
npm start
```

---
## Future Additions 🔮

Here are some **future additions** planned for the project:

1. **Sign-up and Authentication with Google, Facebook, and Microsoft** 🔐  
   - Users will be able to sign up and log in using **Google**, **Facebook**, and **Microsoft** authentication providers for a smoother login experience.
   
2. **Improved Recommendation System for Posts** 🧠  
   - The recommendation system will be enhanced using machine learning or collaborative filtering to provide users with better personalized post recommendations.

3. **Real-time Chat/Direct Messaging** 💬  
   - Add a feature to allow users to send direct messages to each other in real time.

4. **Profile Verification** ✔️  
   - Introduce a system for verifying user profiles to give them a "verified" status similar to how Twitter verifies celebrities, businesses, and influencers.

5. **Hashtags and Trending Topics** 📈  
   - Implement support for **hashtags** and a **trending topics** feature that shows the most popular discussions on the platform.

6. **Improved Post Media** 🎥  
   - Support for **GIFs** and **videos** in posts to make the platform more engaging.
---

## Contributing 🤝

Feel free to fork the repository and create pull requests for new features or improvements. If you find any bugs, please open an issue.
