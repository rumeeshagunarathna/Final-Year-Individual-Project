# Green-Grow
This is  a Agri Connect &amp; Fertilizer Distribution Tracking Platform. It's a web application for farmers to track the fertilizer distribution system and any user who loves farming or cultivation. 

# Install Dependencies and run the project


**For Frontend** - `cd frontend` `npm i` `npm start`

**For admin Dashboard** - `cd admin` `npm i` `npm start`

**For Backend** - `cd backend` `npm i` `npm start`



# Technologies Used:

**Frontend**: React.js

**Backend**: Node.js, Express.js

**Database**: MongoDB

**Testing**: Jest, Cypress

**Containerization**: Docker


# File structure:


```
.
└── Final-Project-Green-Grow-main
    |
    ├──.github\work
    |     ├──docker-compose-image.yml   // Docker Compose file for building Docker images
    |     └──testing.yml                // Testing workflow configuration file
    |
    ├── frontend                       // Frontend directory for the client-side application
    |   ├── cypress                    // Directory for end-to-end testing using Cypress
    |   ├── public                     // Public assets and static files
    |   |  
    |   ├── src 
    |   |    ├──components             // Frontend components (e.g., Navbar, Footer)
    |   |    ├──Images                 // Images used in the frontend
    |   |    └──pages                  // Frontend pages
    |   |
    |   ├── cypress.congig             // Cypress configuration file
    |   ├── Dockerfile                 // Docker configuration file for building the client image
    |   ├── jest.config.js             // Jest configuration file for frontend testing
    |   ├── package-lock.json
    |   ├── package.json
    |   └──.gitignore                  // Gitignore file to specify files and directories to be ignored by Git
    |
    ├── admin                          // Admin dashboard directory
    |   ├── public
    |   ├── src
    |   |    ├──components             // Components for the admin dashboard
    |   |    └──pages                  // Admin dashboard pages
    |   |    
    |   ├── Dockerfile                 // Docker configuration file for building the dashboard image
    |   ├── .gitignore                 // Gitignore file for the dashboard
    |   ├── package-lock.json
    |   └── package.json
    |    
    |   
    ├── backend                        // Backend server directory
    |   ├── models                     // Database models
    |   ├── routes                     // API routes
    |   ├── test                       // Test files for server testing
    |   ├── .dockerignore              // Dockerignore file for excluding files from Docker build
    |   ├── .gitignore                 // Gitignore file for the server
    |   ├── app.js                     // Main application file
    |   ├── Dockerfile                 // Docker configuration file for building the server image
    |   ├── server.js                  // Server entry point
    |   ├── package-lock.json
    |   └── package.json
    |   
    |
    |
    ├── docker-compose.yml             // Docker Compose file for defining services, networks, and volumes
    └── README.md                       // Readme file providing information about 
```
