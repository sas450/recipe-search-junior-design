# recipe-search
1) git clone my repo 
https://github.com/sas450/recipe-search-junior-design


2) download node.js and npm LTS
https://nodejs.org/en/download/

enter the following commands from the main project directory to download all dependencies
2a) npm run install-client
2b) npm install 

3) open up two seperate terminal windows and navigate to the project directory in both

4a) in one terminal type npm run client to start client 
    this will automatically run on localhost:3000

4b) in the other terminal type num run server 

5) one tab should be opened to localhost:3000 for client, another tab should be opened to localhost:8080 for server



Understanding the project structure

/api - for all server related info
    /models - database schema definition
    /routes - restul api routes
    
/data - used for scraping and parsing the related data
    /build - for deployment to heroku
    /node-modules - client dependencies
    /src
        /components - custom components like search box and grid for UI 

/frontend - used for all react files 
/node_modules - used for all server side dependencies
.env - mongo db password
app.js and server.js boiler place for creating a server on port 8080

 



