# MERN Backend Application (Node.js + Express + TypeScript)

This repository contains **ONLY the Backend** part of a **production-grade MERN application**, built with **Node.js, Express, MongoDB, and TypeScript**.
This code deployed on Render : https://ecommerce-nodeserver.onrender.com/
The frontend (React) is maintained in a **separate repository**. This backend follows **enterprise-level standards**, clean architecture, and **Git peer/team collaboration rules**.

---

##  Backend Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **Multer** (file uploads)
* **Cloudinary** (media storage – optional)
* **JWT** (authentication – optional)
* **dotenv** (environment configuration)

##  Environment Variables

Create a `.env` file in the **root of this backend repo**:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017
```

>  Do NOT commit `.env` files. Always use `.env.example` for reference.

---

##  Architecture & Project Structure

### Architecture Overview

This backend follows a **layered architecture pattern** with clear separation of concerns:

```
Controllers → Services/Utilities → Models → Database
     ↓
  Middlewares (Auth, Error Handling, File Upload)
     ↓
  Routes (Express Routing)
```

### Project Structure

```
Ecommerce-nodeServer/
├── src/
│   ├── app.ts                 # Express app configuration
│   ├── controllers/           # Route handlers & business logic
│   │   ├── user.ts           # User management APIs
│   │   ├── product.ts        # Product CRUD APIs
│   │   ├── order.ts          # Order management APIs
│   │   ├── payment.ts        # Payment processing APIs
│   │   └── stats.ts          # Statistics & analytics APIs
│   ├── routes/               # API route definitions
│   │   ├── user.ts
│   │   ├── products.ts
│   │   ├── order.ts
│   │   ├── payment.ts
│   │   └── stats.ts
│   ├── models/               # MongoDB Mongoose schemas
│   │   ├── user.ts
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── coupon.ts
│   ├── middlewares/          # Express middlewares
│   │   ├── auth.ts           # Authentication/JWT validation
│   │   ├── error.ts          # Centralized error handling
│   │   └── multer.ts         # File upload configuration
│   ├── types/                # TypeScript type definitions
│   │   └── types.ts
│   ├── utils/                # Utility functions & helpers
│   │   ├── features.ts       # Reusable feature functions
│   │   └── utility-class.ts  # Utility class methods
│   └── package.json
├── tsconfig.json             # TypeScript configuration
├── .env                       # Environment variables (not committed)
└── README.md
```

### Data Flow

1. **Request** → Express Route
2. **Middleware** → Auth, Validation, File Upload
3. **Controller** → Business Logic Handler
4. **Utils/Features** → Reusable utilities & database operations
5. **Models** → MongoDB Mongoose Schema
6. **Response** → JSON Response to Client

---

## 🛠 Backend Setup

```bash
npm install
npm run dev
```

Server will run on:

```text
http://localhost:8000

after deploy in render
https://ecommerce-nodeserver.onrender.com/
```

---

##  Git Branching Strategy (Peer / Team Standard)

This backend repository follows a **feature-based branching workflow**.

### Permanent Branches

* `main` → Production-ready backend code
* `develop` → Active backend development

### Feature Branches (Backend-specific)

```text
feature/auth-backend
feature/product-crud-backend
feature/order-api
feature/multer-upload
```

### Bug Fix Branches

```text
fix/mongoose-connection
fix/multer-formdata-issue
```

### Hotfix Branches

```text
hotfix/production-crash
```

---

##  Backend Development Workflow

1. Create a feature branch from `develop`

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/product-crud-backend
   ```

2. Commit with meaningful messages

   ```bash
   git commit -m "feat: add product create API"
   ```

3. Push branch

   ```bash
   git push origin feature/product-crud-backend
   ```

4. Create Pull Request → `develop`

5. **Peer Review is mandatory** (no direct pushes to `main`)

---

##  Commit Message Convention

```text
feat: add product update API
fix: resolve multer upload issue
refactor: optimize product controller
chore: update dependencies
```

---

##  Code Standards (Backend)

* TypeScript strict mode enabled
* No `any` unless absolutely required
* Centralized error handling
* Reusable middlewares
* Proper HTTP status codes
* Clean separation of concerns

---

##  Build & Run for Production

```bash
npm run build
npm start
```

---

##  Security Best Practices

* Validate all request payloads
* Sanitize file uploads
* Secure MongoDB connection
* Use CORS & Helmet
* Never expose secrets in code

---

##  Contribution Guidelines (Backend)

* Follow branch naming rules
* Keep PRs small and focused
* Add meaningful commit messages
* Ensure APIs are tested before PR

---
