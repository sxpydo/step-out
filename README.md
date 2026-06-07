# Step Out 👟

**Step Out** is a full-stack MERN web application designed to improve personal safety for people walking alone - whether commuting at night, travelling to an unknown area, or simply wanting peace of mind.

The app connects users with **guardians**, trusted contacts who are available to communicate when someone feels unsafe. Users can either seek a guardian for support, or be a guardian for others.

🌐 **Live App:** [step-out-0121.vercel.app](https://step-out-0121.vercel.app)

---

## The Problem

Feeling unsafe whilst walking alone is a widespread issue. According to the UK Office for National Statistics:

- 1 in 2 women and 1 in 5 men felt unsafe walking alone after dark in a busy public place
- 4 in 5 women and 2 in 5 men felt unsafe walking alone after dark in a park or open space
- 6 out of 10 people who reported feeling unsafe during the day had altered their behaviour as a result

Many people already call friends or family when walking alone just to feel safer, but what if those people aren't available? Step Out aims to solve that.

---

## Features

- User registration and login
- Guardian system, users can register as a guardian or find one
- Calendar to manage guardian availability
- Settings to manage your profile
- Responsive design across desktop and mobile

---

## Future Plans

- **Live GPS location sharing:** so users can share their journey with guardians without needing a phone call, similar to sharing an Uber journey
- **NOW feature:** one tap to send a message, live GPS location, and an SOS call to selected guardians in an emergency
- **Chatbot fallbac:k** if all guardians are unavailable, a chatbot can keep the user company and log the conversation, which can be sent directly to emergency services if needed

---

## Tech Stack

- **MongoDB** - Database
- **Express.js** - Backend framework
- **React.js** - Frontend framework
- **Node.js** - Runtime environment
- **Axios** - HTTP requests
- **React Router** - Client-side routing
- **dotenv** - Environment variable management
- **Render** - Backend deployment
- **Vercel** - Frontend deployment

The codebase was designed with reusability and efficiency in mind, using React components, API controllers and concise Mongoose models.

---

## Project Structure

```
step-out/
├── client/               # React frontend
│   └── src/
│       ├── components/   # React components (SignUp, LogIn, Home, Dashboard, etc.)
│       ├── images/       # Local image assets
│       ├── styles/       # CSS stylesheets
│       ├── services/     # API service functions
│       └── App.js
├── server/               # Express backend
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js installed
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account with a cluster set up

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sxpydo/step-out.git
cd step-out
```

2. Install all dependencies (root + client):

```bash
npm run dev-install
```

3. Create a `.env` file in the root directory:

```
DATABASE_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database_name>?retryWrites=true&w=majority
PORT=8080
```

4. Create a `.env` file in the `client` directory:

```
REACT_APP_API_URL=http://localhost:8080
```

  5. Start the development servers:

```bash
# In one terminal - frontend on http://localhost:3000
cd client && npm start
 
# In another terminal - backend on http://localhost:8080
cd server && node index.js

---

## Deployment

The app is split across two platforms:
 
| Part | Platform | URL |
|------|----------|-----|
| Frontend | Vercel | [step-out-0121.vercel.app](https://step-out-0121.vercel.app) |
| Backend | Render | https://step-out-esw0.onrender.com |

---

## About

Built by [@sxpydo](https://github.com/sxpydo) as a personal project for the **Black CodHer** bootcamp, a programme supporting women from underrepresented backgrounds into tech careers.
```
