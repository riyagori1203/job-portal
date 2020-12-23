# Video based job portal

## Frontend
Framework: ReactJS  
State Management: [Zustand](https://github.com/pmndrs/zustand)

### Steps to run
- Enter the `/frontend` directory
- Run `yarn` to install all dependencies
- Run `yarn start` to start the server

### Authorization using Backend
Every page apart from Login and Register will need an authorization token. The token is obtained from either logging in or registering and stored in the
state inside the user variable.  
**Important:** For each api call, along with the data you need to set the **Authorization** header in axios to the **token** which should be set in the state.  

All responses are in JSON.

### Current State of frontend in this project
The **Home**, **Login** and **Register** pages are functional. The functionality for login and register has been implemented and the **token** & **username** is saved in state.  
Note that you need to explicitly call the api to get full user info, using the auth token.  
You can access the state at `/src/store/index.js`.
