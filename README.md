---

# Portfolio REST API

This project is a **RESTful API** built with **Express.js** and **MongoDB**. It serves as the backend for the portfolio website built using **React.js**. The API allows storing and retrieving data related to various sections of the portfolio, such as the About section, Contact details, Skills, Projects, and more.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Store and retrieve portfolio data** (about, skills, projects, etc.).
- **CRUD operations** for all components of the portfolio.
- **CORS enabled** for cross-origin requests.
- **Error handling** for invalid routes and server issues.
- **Secure headers** with Helmet for security.

---

## Tech Stack
- **Node.js** with **Express.js** - Backend framework
- **MongoDB** with Mongoose - Database and ORM
- **dotenv** - For environment variables
- **Cors** - To allow cross-origin requests
- **Helmet** - For security enhancements

---

## Installation
Follow these steps to run the project locally.

### Prerequisites
- **Node.js** installed (v14+ recommended)
- **MongoDB** running locally or via a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps
1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```bash
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   NODE_ENV=development
   ```

4. **Start the server**:
   ```bash
   npm start
   ```
   The server will run at: `http://localhost:5000`

---

## Environment Variables
The following environment variables are required:
- `PORT`: The port where the server runs.
- `MONGO_URI`: MongoDB connection string.
- `NODE_ENV`: Set to `development` or `production`.

---

## Project Structure
```
├── routes
│   ├── aboutRoutes.js
│   ├── contactRoutes.js
│   ├── educationRoutes.js
│   ├── experienceRoutes.js
│   ├── footerRoutes.js
│   ├── headerRoutes.js
│   ├── homeRoutes.js
│   ├── projectRoutes.js
│   ├── resumeRoutes.js
│   └── skillRoutes.js
├── models
│   └── user.js
├── .env
├── index.js
├── package.json
└── README.md
```

---

## Routes
Below is a summary of the API routes:

| Route                  | Method | Description                  |
|------------------------|--------|------------------------------|
| `/api/about`           | GET    | Fetch the about section data |
| `/api/about`           | POST   | Add or update about data     |
| `/api/contact`         | GET    | Fetch contact information    |
| `/api/contact`         | POST   | Add or update contact info   |
| `/api/education`       | GET    | Fetch education details      |
| `/api/education`       | POST   | Add or update education      |
| `/api/experience`      | GET    | Fetch experience details     |
| `/api/experience`      | POST   | Add or update experience     |
| `/api/skill`           | GET    | Fetch skills                 |
| `/api/skill`           | POST   | Add or update skills         |
| `/api/project`         | GET    | Fetch project details        |
| `/api/project`         | POST   | Add or update projects       |
| `/api/home`            | GET    | Fetch home section content   |
| `/api/footer`          | GET    | Fetch footer data            |
| `/api/resume`          | GET    | Fetch resume link or data    |

---

## Usage
Once the server is running, you can use **Postman** or **curl** to test the endpoints.

**Example GET request using curl**:
```bash
curl http://localhost:5000/api/about
```

**Example POST request using curl**:
```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"email": "example@example.com", "phone": "1234567890"}'
```

---

## Error Handling
The API includes proper error handling middleware:

1. **404 - Route Not Found**:  
   If a non-existent route is accessed, the API responds with:
   ```json
   { "message": "Route not found" }
   ```

2. **500 - Internal Server Error**:  
   If something goes wrong on the server, it responds with:
   ```json
   { "message": "Something went wrong!" }
   ```

---

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`feature/my-new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Open a Pull Request.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## Acknowledgments
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---