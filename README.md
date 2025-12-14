# MERN Backend Application (Node.js + Express + TypeScript)

This repository contains **ONLY the Backend** part of a **production-grade MERN application**, built with **Node.js, Express, MongoDB, and TypeScript**.

The frontend (React) is maintained in a **separate repository**. This backend follows **enterprise-level standards**, clean architecture, and **Git peer/team collaboration rules**.

---

## 🚀 Backend Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **Multer** (file uploads)
* **Cloudinary** (media storage – optional)
* **JWT** (authentication – optional)
* **dotenv** (environment configuration)

## 🔐 Environment Variables

Create a `.env` file in the **root of this backend repo**:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017
```

> ⚠️ Do NOT commit `.env` files. Always use `.env.example` for reference.

---

## 🛠 Backend Setup

```bash
npm install
npm run dev
```

Server will run on:

```text
http://localhost:8000
```

---

## 🌿 Git Branching Strategy (Peer / Team Standard)

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

## 🔁 Backend Development Workflow

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

## ✅ Commit Message Convention

```text
feat: add product update API
fix: resolve multer upload issue
refactor: optimize product controller
chore: update dependencies
```

---

## 🧪 Code Standards (Backend)

* TypeScript strict mode enabled
* No `any` unless absolutely required
* Centralized error handling
* Reusable middlewares
* Proper HTTP status codes
* Clean separation of concerns

---

## 🧼 Linting & Formatting

```bash
npm run lint
npm run format
```

---

## 📦 Build & Run for Production

```bash
npm run build
npm start
```

---

## 🔐 Security Best Practices

* Validate all request payloads
* Sanitize file uploads
* Secure MongoDB connection
* Use CORS & Helmet
* Never expose secrets in code

---

## 🤝 Contribution Guidelines (Backend)

* Follow branch naming rules
* Keep PRs small and focused
* Add meaningful commit messages
* Ensure APIs are tested before PR

---

## 📄 License

MIT License

---

## ✨ Notes

This repository intentionally contains **only backend code** for a MERN application.

Frontend (React) is handled separately and communicates with this backend via REST APIs.

---

Happy Backend Coding 🚀
