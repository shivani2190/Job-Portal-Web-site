# Job-Portal-Web-site
Created By Shivani Singh on 10-10-2024

#Description
The Job Portal Website is a comprehensive platform built using the MERN stack (MongoDB, Express, React, and Node.js) that connects job seekers with employers. The website allows users to register, log in, and create personalized profiles. Job seekers can browse job listings, filter them based on various categories (such as location, job type, and company), and apply directly through the platform. Employers can post job openings and manage applications. The platform also includes features like user authentication (using JWT) and role-based access (admin, employer, and user). A clean and user-friendly interface ensures smooth navigation for all users.

#Project Structure

/job-portal
│
├── /backend
│   ├── /config
│   │   └── config.env
│   ├── /controllers
│   │   ├── applicationController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── /database
│   │   └── dbConnection.js
│   ├── /middlewares
│   │   ├── auth.js
│   │   ├── catchAsyncError.js
│   │   └── error.js
│   ├── /models
│   │   ├── applicationSchema.js
│   │   ├── jobSchema.js
│   │   └── userSchema.js
│   ├── /routes
│   │   ├── applicationRouter.js
│   │   ├── jobRouter.js
│   │   └── userRouter.js
│   ├── /utils
│   │   └── jwtToken.js
│   ├── .gitignore
│   ├── app.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
└── /frontend
    ├── /public
    │   ├── heroS.jpg
    │   ├── JobZee-logo.png
    │   ├── login.png
    │   ├── register.png
    │   └── notfound.png
    ├── /src
    │   ├── /components
    │   │   ├── /Application
    │   │   │   ├── Application.jsx
    │   │   │   ├── MyApplication.jsx
    │   │   │   └── ResumeModal.jsx
    │   │   ├── /Auth
    │   │   │   ├── Login.jsx
    │   │   │   └── Register.jsx
    │   │   ├── /Home
    │   │   │   ├── HeroSection.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── HowItWorks.jsx
    │   │   │   ├── PopularCategories.jsx
    │   │   │   └── PopularCompanies.jsx
    │   │   ├── /Job
    │   │   │   ├── JobDetails.jsx
    │   │   │   ├── Jobs.jsx
    │   │   │   ├── MyJobs.jsx
    │   │   │   └── PostJob.jsx
    │   │   ├── /Layout
    │   │   │   ├── Footer.jsx
    │   │   │   └── Navbar.jsx
    │   │   ├── NotFound.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js







