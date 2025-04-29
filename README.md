# 📋 Attendance Record System (MVC Architecture)

## 📝 Overview

The **Attendance Record System** is a simple application designed using the **MVC (Model-View-Controller)** architecture. It allows users (e.g., teachers or admins) to manage student attendance efficiently. The application separates data handling (Model), user interface (View), and application logic (Controller) to ensure scalability and maintainability.

---

## 🏗️ Architecture: MVC

- **Model**: Handles data-related logic (e.g., students, attendance records, database operations).
- **View**: Manages the presentation layer (HTML, CSS, frontend).
- **Controller**: Receives user input and updates the Model and View accordingly.

---

## 🔧 Features

- Add and manage students.
- Mark daily attendance.
- View attendance records by date/student.
- Edit or delete attendance entries.

---

## 🚀 Technologies Used

- **Frontend (View)**: HTML, CSS, JavaScript (optionally with frameworks like Bootstrap)
- **Backend (Controller)**: PHP / Java / Python / Node.js (based on implementation)
- **Database (Model)**: MySQL / PostgreSQL / MongoDB (based on implementation)

---

## 📁 Project Structure (Example)

```
attendance-system/
├── model/
│   └── AttendanceModel.java / attendance_model.py / attendance_model.php
├── view/
│   └── index.html / attendance_view.php
├── controller/
│   └── AttendanceController.java / attendance_controller.py
├── database/
│   └── schema.sql
├── public/
│   └── css/, js/, images/
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/hareem09/attendance-mvc
   ```

2. **Access the app**
   - Open a browser and go to `http://localhost:3000` or your configured port.

   ## Terminal Commands
   ```
   npm init -y

   npm i express mongoose
   ```
