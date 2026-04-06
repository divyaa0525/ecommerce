# 🛒 E-Commerce Full Stack Application

A full-stack e-commerce web application built using React (TypeScript), Spring Boot, and MySQL.  
This project simulates a real-world online shopping experience with authentication, product browsing, cart management, and payment flow.

---

## 📌 Project Overview

This application allows users to:

- Register and login
- Browse products with images
- Search for products
- Add/remove items from cart
- Update product quantity
- Proceed to payment
- Choose payment methods (Card, UPI, Net Banking)
- Place order and view success page

The system follows a **real e-commerce checkout workflow** similar to platforms like Amazon or Flipkart.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Logout functionality
- Session management using localStorage

### 🏠 Home Page
- Hero banner with auto slider
- Animated text
- Featured categories
- Popular product preview

### 📦 Product Module
- Product listing (grid view)
- Product images
- Search functionality
- Wishlist toggle (UI feature)
- Ratings display
- Add to cart button

### 🛒 Cart Module
- View cart items
- Increase / decrease quantity (+ / -)
- Remove item from cart
- Automatic total calculation
- Clean UI layout

### 💳 Payment Module
- Order summary display
- Multiple payment methods:
  - Card (with form inputs)
  - UPI
  - Net Banking (bank selection)
- Dynamic UI based on selection

### ✅ Order Module
- Place order
- Store order details (amount + payment method)
- Redirect to success page

### 🎉 Success Page
- Payment confirmation
- Navigation back to home

---

## 🏗️ System Architecture

The application follows a **3-tier architecture**:

User → Frontend (React) → Backend (Spring Boot) → Database (MySQL)


### Layers:
- **Presentation Layer** → React UI
- **Application Layer** → Spring Boot REST APIs
- **Data Layer** → MySQL Database

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- TypeScript
- React Router
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- REST API
- Swagger (API testing)

### Database
- MySQL

---

## 📂 Project Structure


ecommerce/
│
├── backend/ # Spring Boot application
│ ├── controller/
│ ├── service/
│ ├── repository/
│ └── model/
│
├── frontend/ # React application
│ ├── components/
│ ├── api/
│ └── styles/
│
└── README.md


---

## ⚙️ Setup Instructions

---

### 🔹 Backend Setup (Spring Boot)

1. Navigate to backend folder:

cd backend


2. Run application:

mvn spring-boot:run


3. Backend will run at:

http://localhost:8080


---

### 🔹 Frontend Setup (React)

1. Navigate to frontend folder:

cd frontend


2. Install dependencies:

npm install


3. Start application:

npm run dev


4. Frontend runs at:

http://localhost:5173


---

## 🗄️ Database Design

### User Table
| Field     | Type    |
|----------|--------|
| id       | Long   |
| username | String |
| email    | String |
| password | String |

---

### Product Table
| Field        | Type    |
|-------------|--------|
| id          | Long   |
| name        | String |
| price       | Double |
| description | String |
| imageUrl    | String |

---

### Cart Table
| Field      | Type |
|-----------|-----|
| id        | Long|
| productId | Long|
| quantity  | int |

---

### Order Table
| Field          | Type      |
|---------------|----------|
| id            | Long     |
| totalAmount   | Double   |
| paymentMethod | String   |
| orderDate     | DateTime |

---

## 🔗 API Endpoints

### Authentication
- POST `/auth/register`
- POST `/auth/login`

### Products
- GET `/products`

### Cart
- GET `/cart`
- POST `/cart/add`
- DELETE `/cart/remove/{id}`
- PUT `/cart/update/{id}?quantity=value`

### Orders
- POST `/order`

---

## 🖥️ UI Screens


### 🔐 Login Page
<img width="1864" height="854" alt="image" src="https://github.com/user-attachments/assets/74f6adac-eb9b-4c7b-9e01-037d21fa9c81" />

<img width="1858" height="842" alt="image" src="https://github.com/user-attachments/assets/4baf8d88-429a-4ea4-a85c-c8f026050577" />

### 🏠 Home Page
<img width="1871" height="940" alt="image" src="https://github.com/user-attachments/assets/2b4307bf-ab7d-4399-a302-9b09370d9285" />

<img width="1860" height="809" alt="image" src="https://github.com/user-attachments/assets/b1c1bc16-ce28-4629-ac3a-c39f0e8ab8e9" />


### 📦 Product Page
<img width="1869" height="854" alt="image" src="https://github.com/user-attachments/assets/a53cdd6b-41a5-4e33-99d0-9936abc49d59" />


### 🛒 Cart Page
<img width="1886" height="896" alt="image" src="https://github.com/user-attachments/assets/290d47bf-694a-4d5c-8430-9f373189a619" />


### 💳 Payment Page
<img width="1877" height="922" alt="image" src="https://github.com/user-attachments/assets/73988f1e-0299-42ac-b9b6-1b815665bff8" />


### ✅ Success Page
<img width="1900" height="853" alt="image" src="https://github.com/user-attachments/assets/6e671bb8-f8c1-4a8d-ada1-2b03839a46f7" />


---



