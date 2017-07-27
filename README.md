# Application

## App Overview

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

- Command instructions of building the app:
  - Server:
    - npm init
    - npm install --save express
    - To run: node index.js
