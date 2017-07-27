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

- Command instructions of building the app:
  - npm init
  - npm install --save express
