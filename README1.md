keypulse/
│
├── frontend/               # React App (UI)
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/        # Static images, fonts
│   │
│   ├── src/
│   │   ├── api/            # Functions to call backend APIs
│   │   │   └── snippetApi.js
│   │   │   └── userApi.js
│   │   │
│   │   ├── assets/         # Images, logos, icons
│   │   │   ├── images/
│   │   │   └── fonts/
│   │   │
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Timer.jsx
│   │   │   └── StatsBar.jsx
│   │   │
│   │   ├── pages/          # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── TypingTest.jsx
│   │   │   ├── Result.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── context/        # React Context API for auth, theme, or typing state
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useTyping.js
│   │   │
│   │   ├── styles/         # Tailwind or CSS files
│   │   │   └── globals.css
│   │   │
│   │   ├── utils/          # Helper functions (calculating WPM, accuracy)
│   │   │   └── calculateStats.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── routes.jsx      # React Router configuration
│   │
│   └── package.json
│
├── backend/                # Node.js + Express App (API)
│   ├── config/             # Configuration files
│   │   └── db.js           # MongoDB / MySQL connection
│   │
│   ├── controllers/        # API logic
│   │   ├── authController.js
│   │   ├── snippetController.js
│   │   └── resultController.js
│   │
│   ├── middleware/         # Authentication, error handling
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   │
│   ├── models/             # Database models
│   │   ├── User.js
│   │   ├── Snippet.js
│   │   └── Result.js
│   │
│   ├── routes/             # Express routes
│   │   ├── authRoutes.js
│   │   ├── snippetRoutes.js
│   │   └── resultRoutes.js
│   │
│   ├── utils/              # Helper functions (WPM calculation, random snippet picker)
│   │   └── statsUtils.js
│   │
│   ├── server.js           # Main Express server file
│   └── package.json
│
├── database/               # Optional: SQL scripts / MongoDB seeds
│   ├── seedSnippets.js
│   └── seedUsers.js
│
├── .gitignore
├── README.md
└── package.json            # Optional root package.json if using yarn workspaces
