# SocialSphere

Socialsphere is a social news aggregation, content rating, and forum social network.This is a platform for people with similar interests can come together and share news,information,educational content and discuss problems.Main goal of this web application platform is to encourage open and honest discussions within online users.People can discuss current events, entertainment,and amusement, or, this platform can be used for various forms of crowdsourcing, including solving complex problems, conducting research, and seeking advice on their personal and professional matters while been anonymous.


# Install Dependencies and run the project

*For SocialSphere* - ⁠ cd socialsphere ⁠ ⁠ npm i ⁠ ⁠ npm run dev⁠

*For Admin Dashboard* - ⁠ cd admindashboard ⁠ ⁠ npm i ⁠ ⁠ npm run dev ⁠


# Technologies Used:

*Frontend/Backend*: Next.js,Typescript,Chakra UI, Tailwind CSS, Recoil,Node.js

*Database*: Firebase/Firestore

*Testing*: Jest

*Containerization*: Docker



# File Structure:

.
└── Final-Year-Individual-Project
    ├── .github
    │   └── workflows
    │       ├── docker-compose-image.yml               // Docker Compose file for building Docker images
    │       └── testing.yml                            // Testing workflow configuration file
    ├── admindashboard                                 // Admin Dashboard Directory
    │   ├── public                                     // Public assets and static files
    │   ├── src                                        // Source code for admindashboard
    │   │    ├── app
    │   │    ├── components
    │   │    ├── pages 
    │   │    └── styles
    │   ├── .eslintrc.json                             // ESLint configuration file
    │   ├── .gitignore                                 // Specifies intentionally untracked files to ignore
    │   ├── Dockerfile                                 // Instructions to build Docker image
    │   ├── index.js                                   
    │   ├── next.config.mjs                            // Next.js configuration file
    │   ├── package-lock.json                          // Lock file for npm dependencies
    │   ├── package.json                               // Project metadata and dependencies
    │   ├── postcss.config.js                          // PostCSS configuration file
    │   ├── postcss.config.mjs                         // PostCSS configuration for ES Modules
    │   ├── README.md                                  // Information about the Admin Dashboard
    │   ├── tailwind.config.js                         // Tailwind CSS configuration file
    │   ├── tailwind.config.ts                         
    │   └── tsconfig.json                              // TypeScript configuration file         
    ├── socialsphere                                   // SocialSphere Directory
    │   ├── __mocks__                                  // Mock files for testing
    │   ├── __test__                                   // Test files
    │   ├── functions                                  // Firebase Cloud Functions
    │   │    ├── src                                   // Source code for functions
    │   │    │    └── index.ts                        
    │   │    ├── .gitignore                            // Specifies intentionally untracked files to ignore
    │   │    ├── package.json                          // Project metadata and dependencies
    │   │    └── tsconfig.json                         // TypeScript configuration file
    │   ├── public                                     // Public assets
    │   │      └── images                              // Image files
    │   ├── src                                        // Source code for socialsphere
    │   │    ├── atoms                                 // Atomic design components
    │   │    ├── chakrastyle                           // Chakra UI theme and styles
    │   │    ├── components                            // Reusable UI components
    │   │    ├── firebase                              // Firebase related files
    │   │    ├── hooks                                 // Custom Next.js hooks
    │   │    ├── pages                                 // Next.js pages
    │   │    └── styles                                // CSS stylesheets
    │   ├── .env.local                                 // Local environment variables
    │   ├── .env.template.local                        // Template for local environment variables
    │   ├── .eslintrc.json                             // ESLint configuration file
    │   ├── .firebaserc                                // Firebase configuration file
    │   ├── .gitignore                                 // Specifies intentionally untracked files to ignore
    │   ├── Dockerfile                                 // Instructions to build Docker image
    │   ├── firebase.json                              // Firebase configuration
    │   ├── jest.config.js                             // Jest configuration file
    │   ├── jest.setup.js                              // Jest setup file
    │   ├── moment.d.ts                                // TypeScript declaration file for Moment.js
    │   ├── next.config.mjs                            // Next.js configuration file
    │   ├── package-lock.json                          // Lock file for npm dependencies
    │   ├── package.json                               // Project metadata and dependencies
    │   ├── postcss.config.js                          // PostCSS configuration file
    │   ├── README.md                                  // Information about the socialsphere project
    │   ├── tailwind.config.js                         // Tailwind CSS configuration file
    │   ├── tsconfig.json                              // TypeScript configuration file
    │   └── yarn.lock                                  // Lock file for yarn dependencies
    ├── docker-compose.yml                             // Docker Compose file for defining services, networks, and volumes
    └── README.md                                      // Readme file providing information about the project
   ,,, 
