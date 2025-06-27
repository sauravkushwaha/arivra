# Arivra – Learn, Build, Evolve 🚀

*Arivra* is a full-stack MERN application designed as a developer learning platform. It empowers users to explore tutorials, dive into web development concepts, and evolve their skills with a clean, responsive, and interactive interface.

---

## 🔥 Features

- 💻 *MERN Stack*: MongoDB, Express, React, Node.js
- ✍ *Admin Tutorial Posting* (secured with JWT auth)
- 🔍 *Search Functionality* (Global search for tutorials & courses)
- 🌙 *Dark/Light Mode Toggle*
- 📱 *Fully Responsive Design* (Mobile-first)
- 📚 *Course Section* with dynamic routing (/courses/:coursename)
- 📎 *Tutorial Accordion UI* (Collapsible Q&A)
- 📋 *Copy Code Button* for quick code copying

---

## 📁 Folder Structure
```
Arivra/
├── backend/         # Express + MongoDB backend (APIs, Auth, Models, Controllers)
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   └── server.js`enter code here`
│
├── public/          # Static assets (React)
│
├── src/             # React frontend (components, pages, routes)
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json     # Vite + frontend dependencies
├── vite.config.js
├── .env         # Environment variables (not committed)
└── README.md        # Project documentation
```
---

## 🔐 Authentication

- Secure JWT-based login and signup
- Protected admin routes for tutorial creation

---

## 🧠 Tech Stack

- *Frontend*: React, TailwindCSS, React Router, Framer Motion
- *Backend*: Express.js, Node.js, MongoDB, JWT
- *Deployment*: Vercel (Frontend) & Render (Backend)

---

## 🚀 Live Preview

🔗 [Visit Arivra](https://arivra.vercel.app/)

---

## 🛠 Local Setup

```bash
# Clone the repo
git clone https://github.com/sauravkushwaha/arivra.git
cd arivra

# Navigate to frontend
npm install
npm run dev

# Navigate to backend
cd backend
npm install
npm start
```

---
## 👤 Author

- *Saurav Kushwaha*
- 💼 [Linkedin](https://www.linkedin.com/in/sauravkushwaha/)
- 🐱 [GitHub](https://github.com/sauravkushwaha)


---

> Designed and built with ❤️ by *Saurav Kushwaha* 
