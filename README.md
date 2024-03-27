# _**Noteify**_

## _**A Basic Sticky-notes app using React, Express, NodeJS and JSON db**_

### _**IMPORTANT NOTES**_ - 
This project does not have a database connection setup.
- Install the required node package as instructed below to process the environment.


## Getting Started
This repository aims to assist you in beginning work on a JERN stack application for web deployment with a solid file structure as a foundation. 

Since this project will hold both the client application and the server application there will be node modules in two different places. After downloading this project file extract the root folder, navigate to the path in terminal:
- Command Prompt for Windows
- Terminal for Mac
- Bash for Linux, or
- press _**Ctrl + `**_ in VScode to open its own terminal window.
   
run `npm install` from both the directives seperately and the node modules folder alongwith all other dependencies gets installed automatically.
Now run `npm start` from both the client and server to launch the development.


## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `yarn workspace server dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `yarn workspace client start`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `yarn workspace server start`

Runs just the server in development mode.<br>


### `yarn workspace server build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>


## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components
    - #### `utils` - These contains all necessary utility functions like loaders, actions and other misc ones
    - #### `App.css` - These contains all global css codes and selectors
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `.gitignore` - Tells git which files to ignore
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `handlers` - This holds our all and every action methods defined
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `utils` - This holds all of our error classes and validation methods defined
- #### `app.js` - Defines npm behaviors and packages for the client
- #### `extras` - An additional rough text file for storing info
- #### `stickynotes.json` - The data file for storing notes database
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Learn More
To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
