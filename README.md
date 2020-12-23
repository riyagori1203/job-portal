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

## Backend
The backend is based on **Firebase**. It is a NodeJS server running as a **Firebase Cloud Function**, utilizing **Firestore** as the document-based database and Authentication using **Firebase Authentication** (with Email and password).

The cloud function is already deployed and LIVE at `https://asia-east2-videointerview-c5b52.cloudfunctions.net/api`. The firebase project is currently owned by [@neelansh15](https://github.com/neelansh15).   

However, for development it is possible to run the cloud functions locally and still use remote Firestore and Auth. Note that you need access to the project from your own firebase account. This can be configured in the Project Settings.
#### Running firebase functions locally
- Install firebase tools globally via npm: `npm install -g firebase-tools`
- Run `firebase login` and login with your firebase credentials.
- cd into `/cloud-functions/functions` and run `npm install`
- cd back into `/cloud-functions` and run `firebase serve`  
- The server should run and the api should be available at `http://localhost:5000/api`
  
*Note: If you encounter any auth errors, check if you have permission to READ, CREATE and DELETE in your firebase account. The other issue could be that you need to login
with gcloud as well, for which you can install the gcloud cli*

### API Endpoints
The API endpoints available and their description.  Prefix the api url `https://asia-east2-videointerview-c5b52.cloudfunctions.net/api` before each endpoint.  
The body of each POST request should be a Raw JS Object, sent in the form of JSON using `JSON.stringify(object)`.  
Appropriate header: `Content-Type": "application/json`  

### POST: /login `Login`  
Request Body (Example):
```json
{
    "email": "user@gmail.com",
    "password": "123456"
}
```

Request Response (On Success):  
```json
{
    "token": "eyJhbGciO...Very_Large_String_Here_...iJSUzI1Ni"
}
```
Request Response (On User not found):  
```json
{
    "error": "auth/user-not-found"
}
```
Request Response (On Incorrect password):  
```json
{
    "error": "auth/wrong-password"
}
```  

### POST: /signup `Signup`  
This does two things:
- Create user in Firebase Auth
- Create a new document for user in the `users` collection in Firestore  

Request Body (Example):
```json
{
    "email": "user@gmail.com",
    "username": "user",
    "password": "123456"
}
```

Request Response (On Success):
```json
{
    "token": "eyJhbGciO...Very_Large_String_Here_...iJSUzI1Ni"
}
```
Request Response (On Weak Password, should be more than 6 characters):
```json
{
    "error": "auth/weak-password"
}
```


### POST: /user `Update User Details`  
If either one of `bio` or `location` is specified, then that one will be updated. If both are specified, both of them will be updated.  

Request Body (Example):
```json
{
    "bio": "Hello there! This is my new Bio! YAY!",
    "location": "Panvel, Navi Mumbai, India"
}
```
Request Header:  `Authorization: AUTH_TOKEN_HERE`  

Request Response:  
```json
{
    "message": "Details updated successfully "
}
```  

### GET: /user `Get User Details`  
Request Body: **None**
Request Header:  `Authorization: AUTH_TOKEN_HERE`  
Request Response (Example):  
```json
{
    "username": "user",
    "role": 1,
    "userId": "btUKywe3r2YsgW010Clb6KzXEYF3",
    "location": "Panvel, Navi Mumbai, India",
    "bio": "Hello there! This is my new Bio! YAY!",
    "email": "user@gmail.com"
}
```  

### GET: /interviews `Get scheduled interviews`
Request Body: **None**
Request Header:  `Authorization: AUTH_TOKEN_HERE`  
Request Response (Example):
```json
[
    {
        "id": 1794686,
        "date": "24-12-2020 09:00PM",
        "interviewer": "user",
        "interviewee": "user2",
        "completed": false
    },
    {
        "interviewee": "user2",
        "id": 5896089,
        "interviewer": "user",
        "completed": true,
        "date": "22-07-2020 06:00PM"
    },
]
```  

### POST: /interview `Post a new interview`  
Request Body (Example):  
```json
{
    "interviewee": "user2",
    "date": "24-12-2020 09:00PM"
}
```  

Request Header:  `Authorization: AUTH_TOKEN_HERE`  
Request Response:
```json
{
    "message": "Interview scheduled."
}
```

### PATCH: /interview `Update an interview`  

Field **id** is required. Either one of `completed` or `date` if specified will be updated.  
**Note:** Only users with role 1 (Admin) can send PATCH requests to this route.  

Request Body (Example):  
```json
{
    "id": 7551044,
    "completed": true,
    "date": "25-12-2020 09:00PM"
}
```  
Request Header:  `Authorization: AUTH_TOKEN_HERE` 
Request Response:  
```json
{
    "message": "Interview updated successfully"
}
```

### DELETE: /interview `Delete an interview`  
Specify the id of the interview to be deleted. User must have a role of 1 (Admin).  

Request Body (Example):
```json
{
    "id": 7273163
}
```  
Request Response:  
```json
{
    "message": "Interview deleted"
}
```
