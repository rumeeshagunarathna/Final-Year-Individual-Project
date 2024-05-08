# SocialSphere
Socialsphere is a social news aggregation, content rating, and forum social network.This is a platform for people with similar interests can come together and share news,information,educational content and discuss problems.Main goal of this web application platform is to encourage open and honest discussions within online users.People can discuss current events, entertainment,and amusement, or, this platform can be used for various forms of crowdsourcing, including solving complex problems, conducting research, and seeking advice on their personal and professional matters while been anonymous.

# Install Dependencies and run the project


**For socialsphere** - `cd socialsphere` `npm i` `npm run dev`

**For admindashboard** - `cd admindashboard` `npm i` `npm run dev`


# Technologies Used:

**Frontend/Backend**: Next.js,Typescript,Chakra UI, Tailwind CSS, Recoil,Node.js

**Database**: Firebase/Firestore

**Testing**: Jest

**Containerization**: Docker


# File structure:


```
.
└── Final-Year-Individual-Project
    |
    ├──.github\workflows
    |     ├──docker-compose-image.yml   
    |     └──testing.yml                
    |
    ├── admindashboard                                          
    |   ├── public                     
    |   |  
    |   ├── src 
    |   |    ├──app
    |   |    ├──components              
    |   |    ├──pages                
    |   |    └──styles                  
    |   |
    |   ├── .eslintrc.json
    |   ├── .gitignore
    |   ├── Dockerfile 
    |   ├── index.js
    |   ├── next.config.mjs
    |   ├── package-lock.json
    |   ├── package.json
    |   ├── postcss.config.js              
    |   ├── postcss.config.mjs                 
    |   ├── README.md             
    |   ├── tailwind.config.js
    |   ├── tailwind.config.ts
    |   └── tsconfig.json                  
    |
    ├── admin                          
    |   ├── __mocks__
    |   ├── _test_
    |   ├── functions
    |   |    ├── src
    |   |    |     └── index.js
    |   |    ├── .gitignore
    |   |    ├── package.json
    |   |    └── tsconfig.json
    |   | 
    |   ├── public
    |   |    └── images
    |   |
    |   ├── src
    |   |    ├──components             
    |   |    └──pages                  
    |   |    
    |   ├── Dockerfile                 
    |   ├── .gitignore                 
    |   ├── package-lock.json
    |   └── package.json
    |    
    |   
    |
    |   
    |
    |
    ├── docker-compose.yml             // Docker Compose file for defining services, networks, and volumes
    └── README.md                       // Readme file providing information about 
```
