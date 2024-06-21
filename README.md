# User Management System with React and MongoDB 🚀

This repository contains a User Management System implemented using React.js and Bootstrap. The system allows users to view, search, and paginate through a list of users fetched from a backend API.

## Features 🌟

- Fetch data from MongoDB
- View and search users
- Pagination support
- Responsive and user-friendly interface built with React and Bootstrap
- Backend powered by Node.js and Express

## Getting Started 🛠️

Follow these steps to get the application up and running on your local machine.

### Prerequisites 📋

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running
- [Python](https://www.python.org/) installed (for data script)

### Installation Steps 📝

1. **Clone the repository:**

    ```bash
    git clone https://github.com/GiridharanS1729/mongo-react.git
    cd react-mongo
    ```

2. **Install dependencies for the client:**

    ```bash
    npm install
    npm run dev
    ```

3. **Open a new terminal and navigate to the `server` folder:**

    ```bash
    cd server
    npm install
    npm start
    ```

### Setting Up the Database 🗄️

1. **Create a new database:**

    - Database Name: `visitor`
    - Collection Name: `all`

2. **Add data to the database:**

    - You can add data manually or use the provided script.
    
    **Manual Method:**
    
    - Go to your MongoDB and connect to the `visitor` database.
    - On the top left corner, select `Add Data` > `Insert Document`.
    - Paste the JSON data inside and press `Insert`.

    **Script Method:**

    - In the `react-mongo` folder, run the following script to generate data:
    
      ```bash
      python data-json.py
      ```
      
    - Open the generated `data.json` file, press `Ctrl + A`, `Ctrl + C`.
    - Open MongoDB, connect to the `visitor` database, and on the top left corner, select `Add Data` > `Insert Document`.
    - Paste the copied data and press `Insert`.

3. **Launch the application:**

    - Open your browser and go to [http://localhost:5173/](http://localhost:5173/).

### Acknowledgements 🙏

   - Node.js
   - React.js
   - Express.js
   - MongoDB

## Project Structure 📁

```markdown
react-mongo/
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore file
├── data-json.py           # Python script to generate JSON data
├── index.html             # HTML entry point
├── LICENSE                # License file
├── package-lock.json      # Lock file for npm
├── package.json           # Project configuration and dependencies
├── public/                # Public assets
│   └── vite.svg           # Vite logo
├── README.md              # Project documentation
├── server/                # Node.js and Express server
│   ├── index.js           # Server entry point
│   ├── package-lock.json  # Lock file for server npm
│   └── package.json       # Server configuration and dependencies
├── src/                   # React client application
│   ├── App.css            # App-specific styles
│   ├── App.jsx            # Main App component
│   ├── assets/            # Asset files
│   │   └── react.svg      # React logo
│   ├── index.css          # Global styles
│   └── main.jsx           # Client entry point
└── vite.config.js         # Vite configuration
```
---

### Contributing 🤝
     Contributions, issues, and feature requests are welcome! Feel free to check the issues page. 

### License 📄
    This project is licensed under the MIT License - see the LICENSE file for details.
