# 🚀 Categories API

A robust REST API for managing categories built with Node.js, Express, and MongoDB.

## 📋 Features

- RESTful API endpoints for categories
- MongoDB database integration
- Express middleware support
- Environment variables configuration
- Error handling

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## 🚦 Prerequisites

- Node.js (v14+ recommended)
- MongoDB installed and running
- Git

## ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/hosenmekawy/categories-using-nodejs-endpoints.git
```

2. **Install dependencies**
```bash
cd categories-api && npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```bash
touch .env
```

Add the following to your `.env`:
```env:.env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/categories-api
```

4. **Start MongoDB**
```bash
mongod
```

5. **Run the server**
```bash
npm start
```

## 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/categories | Get all categories |
| POST   | /api/categories | Create a new category |
| GET    | /api/categories/:id | Get a specific category |
| PUT    | /api/categories/:id | Update a category |
| DELETE | /api/categories/:id | Delete a category |

## 🎯 API Usage Examples

### Get all categories
```bash
curl http://localhost:3000/api/categories
```

### Create a category
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Electronics"}' http://localhost:3000/api/categories
```

## 📁 Project Structure

```
categories-api/
├── server.js          # Main application entry
├── routes/
│   └── categoryRoutes.js
├── models/
│   └── Category.js
├── .env              # Environment variables
└── README.md         # Documentation
```

## 🛟 Support

For support, email hussienmekawy38@gmail.com or open an issue in the repository.

## 📜 License

MIT License - feel free to use this project for your own purposes.

---
Made with ❤️ by HUSSIEN MEKAWY 🚀
