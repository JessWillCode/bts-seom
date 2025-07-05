# BTS SEOM – Full-Stack Monorepo

This project is a full-stack web application that lets users explore, favorite, and track BTS songs and albums. Built as a monorepo to experiment with shared deployment patterns and streamline full-stack delivery for student and TA education.

---

## 📁 Project Structure
```
apps/
├── client/ → Vite + React frontend
└── server/ → Express + Prisma backend
```

- **Client:** Deployed separately on Render (static site)
- **Server:** Node/Express API with PostgreSQL (also on Render)

---

## 🧪 Tech Stack

**Frontend**
- React (Vite)
- Axios
- Tailwind CSS & DaisyUI

**Backend**
- Node.js + Express
- PostgreSQL + Prisma
- JWT Auth (WIP)

---

## 🚀 Deployments

| Service | URL |
|--------|-----|
| Frontend | [Live Site](https://bts-seom-frontend.onrender.com) |
| Backend  | [API Server](https://bts-seom-backend.onrender.com) |

> **Note:** VITE_API_BASE_URL is configured for API proxying during development.

---

## 🧩 Dev Setup

```bash
# Install both apps' dependencies
cd apps/client && npm install
cd ../server && npm install

# Run locally
cd ../server && npm run dev
cd ../client && npm run dev
```
---

## 🧩 Future Improvements

- Add user dashboard to view and manage favorite albums and songs
- Seed more detailed album and song data (tracklists, durations, etc.)
- Complete and secure authentication system (JWT register/login)
- Improve mobile responsiveness and UI polish
- Implement optimistic UI updates and error handling
- Write integration tests and seed tests

---

## 🧑‍💻 Author

**Jessica Williams**  
🌐 [GitHub: @JessWillCode](https://github.com/JessWillCode)  
✍️ [Medium Articles](https://medium.com/@jesswillcode)  
🎥 [YouTube: JessWillCode](https://www.youtube.com/@jesswillcode)
