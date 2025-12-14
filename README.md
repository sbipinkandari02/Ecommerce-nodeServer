# MERN Stack Application (TypeScript)

A **production-grade MERN (MongoDB, Express, React, Node.js)** application built using **TypeScript**, following **clean architecture**, **scalable folder structure**, and **Git peer/team best practices**.

This repository is designed for **real-world development**, collaboration, and long-term maintenance.

---

## 🚀 Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **Multer** (file uploads)
* **Cloudinary** (media storage – optional)
* **JWT** (authentication – optional)

### Frontend

* **React.js**
* **TypeScript**
* **Redux Toolkit** (state management)
* **React Router**
* **Axios**

### Tooling & Standards

* ESLint + Prettier
* Git (feature-based branching)
* Environment-based configuration
* REST API best practices


## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017
```

> ⚠️ Never commit `.env` files to Git. Use `.env.example` instead.

---

## 🛠 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server will start on:

```text
http://localhost:8000
```

---

## 🛠 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🌿 Git Branching Strategy (Peer / Team Standard)

We follow a **feature-based branching model**.

### Main Branches

* `main` → Production-ready code
* `develop` → Active development branch

### Feature Branches

```text
feature/auth-login
feature/product-crud
feature/cart-module
```

### Bug Fixes

```text
fix/multer-upload-issue
fix/mongoose-connection
```

### Hotfix (Production bugs)

```text
hotfix/payment-crash
```

---

## 🔁 Development Workflow

1. **Create feature branch from `develop`**

   ```bash
   git checkout develop
   git pull
   git checkout -b feature/product-crud
   ```

2. **Commit with clear messages**

   ```bash
   git commit -m "feat: add product create API"
   ```

3. **Push & raise Pull Request**

   ```bash
   git push origin feature/product-crud
   ```

4. **Peer Review Required**

   * Code review by at least **1 teammate**
   * No direct push to `main`

5. **Merge into `develop`**

---

## ✅ Commit Message Convention

```text
feat: add product update API
fix: resolve multer file i
```
