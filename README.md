# Job-Portal-Web-site
Created By Shivani Singh on 10-10-2024

#Description
The Job Portal Website is a comprehensive platform built using the MERN stack (MongoDB, Express, React, and Node.js) that connects job seekers with employers. The website allows users to register, log in, and create personalized profiles. Job seekers can browse job listings, filter them based on various categories (such as location, job type, and company), and apply directly through the platform. Employers can post job openings and manage applications. The platform also includes features like user authentication (using JWT) and role-based access (admin, employer, and user). A clean and user-friendly interface ensures smooth navigation for all users.

![3](https://github.com/user-attachments/assets/f11d726d-401f-4516-9732-001e0feba84f)

![4](https://github.com/user-attachments/assets/f19c4600-e689-4108-8e50-2b502a6de59d)

![5](https://github.com/user-attachments/assets/2e33b2cf-6643-4c18-8f68-de3eeec0df79)

![6](https://github.com/user-attachments/assets/9c306c1e-b493-4af8-988b-808a69cd5c0f)

![7](https://github.com/user-attachments/assets/96872064-9dbb-4eb6-b2f5-bf0eee88c905)

![9](https://github.com/user-attachments/assets/0c57e0b3-adff-4552-b59f-aec15a87d2c2)

![8](https://github.com/user-attachments/assets/8a584842-33ef-4d37-8333-58a36d5a1fcd)

![10](https://github.com/user-attachments/assets/c3b875e4-0dd9-49e6-a712-3be752d923b2)

![1](https://github.com/user-attachments/assets/e9d2e2f6-981d-4978-8fa0-5d5c1154f9d1)

![2](https://github.com/user-attachments/assets/3307c24d-8947-4885-9377-6106b7d80021)


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







