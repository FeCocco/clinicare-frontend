# Clinic Management - Frontend

This is the frontend project for the Clinic Management platform, developed with **React** and **Vite**. The application features a complete landing page with information about services and specialists, as well as a dynamic and comprehensive user authentication system.

The Login/Registration system is the core of the application, featuring a multi-step **Stepper** component that intelligently guides the user through the flow of email verification, registration, login, and optional profile completion.

**Link to the GitHub Pages Deployment:** [https://fecocco.github.io/gestao-clinica-api-frontend/](https://fecocco.github.io/gestao-clinica-api-frontend/)

---

## Features

* **Complete Landing Page:** Showcasing services, staff, and contact information.
* **Intelligent Authentication Flow:** A single flow that adapts whether the user needs to log in or register.
* **Dynamic Stepper Component:** A visual indicator that shows the user's progress during the login (2 steps) or registration (3 steps) flows.
* **Stepper Navigation:** Allows users to click on completed steps to go back and correct previous information.
* **Profile Enrichment:** Encourages both new and existing users with incomplete profiles to provide optional data after logging in.
* **Validation and Feedback:** Integrated error and success messages in the UI for a seamless user experience.
* **Routing with `react-router-dom`:** Manages navigation between the landing page and the login screen.

---

## Tech Stack

* **React 18**
* **Vite**
* **React Router DOM**
* **JavaScript (ES6+)**
* **CSS3**

---

## Crucial Prerequisite: The Backend API

This is a **frontend-only** project. For the Login and Registration system to function, it is **essential** that the corresponding backend API is running locally on your machine.

The API is responsible for managing users, validating credentials, and storing data.

* **Link to the Backend Repository:** [**gestao-clinica-api**](https://fecocco.github.io/clinicare-frontend/)

Please follow the instructions in the backend's `README.md` to clone, set up the database, and start the server (usually on `http://localhost:8080`).

---

## How to Run the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FeCocco/gestao-clinica-api-frontend.git
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd gestao-clinica-api-frontend
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) (or the address shown in your terminal) in your browser.

---

## Available Scripts

* `npm run dev`: Starts the development server with Hot Reloading.
* `npm run build`: Compiles and optimizes the application for production in the `dist` folder.
* `npm run preview`: Starts a local server to preview the production build (after running `build`).
