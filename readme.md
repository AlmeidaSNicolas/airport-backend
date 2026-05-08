✈️ Airport Management System - Backend
Airport management system developed for Software Engineering study purposes. This project focuses on architectural best practices, security, and relational database manipulation.

🛠️ Tech Stack
Node.js with TypeScript

Express (Web Framework)

PostgreSQL (Relational Database)

Bcrypt (Password encryption)

JWT (JSON Web Token) (Authentication & Security)

🏗️ Project Structure
src/config: Database and authentication configurations.

src/models: Interfaces defining system entities (User, Flight, AirPlane).

src/controllers: Business logic and database communication.

src/middlewares: Security layer (token validation).

src/routes: Definition of public and private routes.

✅ Implemented Features
Authentication:

User registration with hashed passwords (bcrypt).

Login generating a 1-day JWT.

Security:

Route protection middleware (only authenticated users can register data).

Airport Management:

Aircraft Registration (model, prefix, capacity, maintenance).

Flight Registration and Listing (origin, destination, schedules, gate, status).
