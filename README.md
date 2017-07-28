# Application


- **Order**:
  - Someone uses start up owner's app/service
  - Startup owner wants feedback
  - Send customer an email requesting feedback
  - Get tabulation of results
  - Make app/service better with feedback!


- **App User flow and Tech Stack:**
  - User signs up via Google OAuth
    - Express server + MongoDB + PassportJS
  - User pays for email credits via stripe
    - Stripe + MongoDB
  - User creates a new 'campaign'
    - React + Redux
  - User enters list of emails to send survey to
    - React + Redux + Redux Form
  - We send email to list of surveyees
    - Email Provider
  - Surveyees click on link in email to provide feedback
    - Email Provider + Express + Mongo
  - We tabulate feeback
    - Mongo?
  - User can see report of all survey responses
    - Mongo + React + Redux

--------
## App Diagrams
- Front End: Client setup, Auth on client, Add survey stuff on client
- Back End: Server setup, Authentication flow, Add survey API's on server
- Order:
  - Server setup
  - Authentication flow
  - Client setup
  - Auth on client
  - Add survey API's on server
  - Add survey stuff on client
-------

- Node:
  - Javascript runtime used to execute code outside of the browser
- Express:
  - Library that runs in the node runtime. has helpers to make dealing with HTTP traffic easier

- Deployment Checklist
  - Dynamic Port Binding:
    - Heroku tells us which port our app will use, so we need to make sure we listen to the port they tell us to
  - Specify Node Environment:
    - We want to use a specific version of node, so we need to tell Heroku which version we want
  - Specify start script:
    - Instruct Heroku what command to run to start our server running
  - Create .gitignore file:
    - We don't want to include dependencies, Heroku will do that for us

- First Time Deploy:
  - Create Heroku account
  - Commit our code base to git
  - Install Heroku CLI and Create App
  - Deploy App with Git
  - Heroku deploys project
- Subsequent Deploys:
  - Commit code base with git
  - Deploy App with Git

- OAuth Flow
  - Client:
    - User clicks 'Login'
    > Direct to localhost: 5000/auth/google --> Server
  - Server:
    - Forward users's request to Google
    > google.com/auth?appId=123
  - Google:
    - Ask user if they grant permission
    - User grants permission
    > Direct to localhost:5000/auth/google/callback?code=456
  - Server:
    - Put user on hold, take the 'code' from the URL
    - Send request to google with 'code' included
  - Google:
    - Google sees 'code' in URL, replies with details about this user
    > response back to Server
  - Server:
    - Get user details, create new record in database
    - Set user ID in cookie for this user
    > Kick user back to localhost:5000 to Client
  - Client:
    - Logged in!
    - I need some resources from the API
    > Cookie automatically included, to Server
  - Server: Ah, this request has a cookie with user id equal to 123


- Passport Library Components:
  - Passport: General helpers for handling auth in Express apps
  - Passport strategy: Helpers for authenticating with one very specific method (email/password, Google, FaceBook, etc)

- ClientId: Public token - we can share this with the public
- ClienSecret: Private token - we don't want anyone to see this!

-----

## Server
- Index.js: Helper modules and business logic
  - Config: Protected API keys and settings
  - Routes: All route handlers, grouped by purpose
  - Services: helper modules and business logic

------

- Mongoose: a Model Class which allow to create a collection of users in MongoDB

-----

## Cookie flow order

- Request: either comes in or sent to route handler
- Cookie-Session: Extracts cookie data
- Passport: Pulls user id out of cookie data
- deserialize User: Function we write tot turn user id into a user
- User model instance added to req object as 'req.user'

----
## Keys (2 sets of Keys)
- Dev (on my laptop): MongoDB, Google API, Cookie Key
- Prod (on Heroku environment): MongoDB, Google API, Cookie Key

-----

## 2 Servers
- Make 2 Server to work together nicely
- React Server(js stuff): Button.js, App.js, Header.js
- Express Server(json stuff): MongoDB

- Use : npm install --save concurrently
- modified the package.json's scripts:
```js
{
  scripts":{
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
}
- Run: npm run dev
```
------
## Test promise in the browser (Json package)
- fetch(): Returns a promise
- .then(res => res.json()): Fetch resolves its promise with an object representing the request.
  - You can get the real json response by calling'.json(). This returns \*another\* promise.
- .then(json => console.log(json)): After getting the json, console log it.

```js
// Write a funciton to retrieve a blob of json
// make an ajax request! Use the 'fetch' function
// http://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
  fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();
```

- New ES6 syntax (same feature)

```js
async function fetchAlbums() {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()
  console.log(json);
}

fetchAlbums();
```

- Can be refactor to:

```js
const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()
  console.log(json);
}

fetchAlbums();
```

--------
### Client Side
- index.js: Data layer control (Redux)
- App.js: Rendering layer control (React Router)
- Order:
  - index
    - App
      - landing
      - Header
      - Dashboard
        - SurveyList
          - ...
      - Surveynew
        - SurveyField
---------


- Command instructions of building the app:
  - Server:
    - npm init
    - npm install --save express
    - To run: node index.js
    - npm install --save passport passport-google-oauth20
    - npm install --save nodemon
      - Add: `"dev": "nodemon index.js"` under "scripts" to **package.json**
      - run: `npm run dev`
    - npm install --save mongoose
    - npm install --save cookie-session
    - npm install --save concurrently
  - Client:
    - create-react-app client
    - npm install --save redux react-redux react-router-dom
