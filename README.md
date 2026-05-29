# ✈️ SkyBook Airline Reservation System

A modern full-stack airline reservation web application built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

# 📖 Project Overview

The **SkyBook Airline Reservation System** is a web-based platform developed to modernize and simplify airline ticket booking and reservation management.

Many airline companies and travel agencies still rely on outdated systems or manual reservation processes that cause delays, booking errors, poor customer experience, and inefficient management.

SkyBook solves these problems by providing:

* Online flight search
* Airplane ticket reservation
* Secure payment processing
* Booking management
* Electronic ticket generation
* Administrative dashboards and reporting

The system is designed for both **Passengers** and **Administrators**.

---

# 🎯 Main Objectives

* Simplify airplane ticket reservation processes
* Allow customers to book flights online
* Reduce manual booking errors
* Provide secure online payments
* Improve reservation tracking and reporting
* Enhance customer experience

---

# 👥 System Users

## Passenger (Customer)

Passengers can:

* Create accounts
* Login securely
* Search flights
* View schedules and prices
* Book tickets
* Make payments
* Download tickets
* Cancel reservations
* View booking history

---

## Administrator

Administrators can:

* Manage flights
* Manage airplane schedules
* Manage destinations
* Monitor reservations
* Manage users
* Generate reports
* Update pricing

---

# 🚀 Features

## 🔐 Authentication Module

* User registration
* User login
* JWT authentication
* Password encryption
* Role-based access control

---

## ✈️ Flight Management Module

* Create flights
* Update flights
* Delete flights
* Manage schedules
* Manage destinations
* Seat allocation

---

## 🎫 Reservation Module

* Ticket booking
* Reservation updates
* Reservation cancellation
* Booking history

---

## 💳 Payment Module

* Online payments
* Payment verification
* Electronic receipts
* Booking confirmation

---

## 📊 Reporting Module

* Reservation reports
* Revenue reports
* Passenger statistics
* Daily/monthly analytics

---

# 🧰 Technologies Used

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Nodemon

---

# 📂 Professional Folder Structure

```bash id="s3tk87"
skybook-airline-reservation/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── logos/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── passenger/
│   │   │   └── admin/
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── passenger/
│   │   │   ├── admin/
│   │   │   └── errors/
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── context/
│   │   │
│   │   ├── hooks/
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── styles/
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
│
├── backend/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validations/
│   │   ├── utils/
│   │   ├── uploads/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── nodemon.json
│
│
├── docs/
│   ├── ERD/
│   ├── API/
│   ├── screenshots/
│   └── reports/
│
├── .gitignore
├── README.md
└── LICENSE
```

---

# 🌿 Git Branch Structure

```bash id="v7gpr3"
main
develop
frontend-dev
backend-dev
```

---

# 🔄 Git Workflow

## `main`

Stable production-ready branch.

---

## `develop`

Testing and integration branch.

---

## `frontend-dev`

Frontend development branch.

Handled by:

* React developer
* UI/UX work
* TailwindCSS
* Components
* Pages

---

## `backend-dev`

Backend development branch.

Handled by:

* Express server
* MongoDB
* APIs
* Authentication
* Business logic

---

# ⚙️ Installation Guide

## 1. Clone Repository

```bash id="l47d9x"
git clone https://github.com/your-username/skybook-airline-reservation.git
```

---

# 2. Frontend Setup

```bash id="b7apw7"
cd frontend
npm install
```

---

# 3. Backend Setup

```bash id="v6h3mo"
cd backend
npm install
```

---

# 🔐 Environment Variables

## Backend `.env`

```env id="a6j6nh"
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# ▶️ Running The Project

## Start Backend

```bash id="3jlwmw"
cd backend
npm run dev
```

Backend runs on:

```bash id="30mngf"
http://localhost:5000
```

---

## Start Frontend

```bash id="6u9ecm"
cd frontend
npm run dev
```

Frontend runs on:

```bash id="qejr2d"
http://localhost:5173
```

---

# 🔗 API Example

## Login Endpoint

```bash id="00jlwm"
POST /api/auth/login
```

---

# 📦 Planned System Modules

* Authentication Module
* Flight Management Module
* Reservation Module
* Payment Module
* Reporting Module

---

# 📈 Future Improvements

* QR Code Tickets
* Real-Time Seat Availability
* AI Flight Recommendations
* Flight Delay Notifications
* Multi-language Support
* Mobile Application Integration

---

# 👨‍💻 Team Collaboration Rules

* Never push directly to `main`
* Always pull latest changes before coding
* Use feature branches
* Make small commits
* Create Pull Requests before merging
* Avoid editing same files simultaneously

---

# 📝 Recommended Commit Messages

```bash id="rqmm7i"
feat: add login API
fix: resolve authentication bug
style: improve navbar design
docs: update README
```

---

# 📜 License

This project is for educational purposes.

---

# 👥 Developers

* Sengabo Jr.
* Robert Ribbon

---

# ⭐ Contribution

Contributions, improvements, and suggestions are welcome.

---

# 📧 Support

For project collaboration or support, contact the project maintainers.

---

# 🔥 Project Status

🚧 In Development
