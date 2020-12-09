# Rideshare Comparison Tool

## Project Description 

As college students, we are always looking for ways to save some money and ridesharing seems to be the way we tend to travel as groups if we cannot expense a car. Trying to find the cheapest Uber ride or Lyft ride can be quite cumbersome since we have to navigate between apps and enter our destination address multiple times. We intend to combine Lyft and Uber’s API in a single Web application so we can, in real time, check the current rates for both ridesharing apps and see how much your trip would cost.

We intend to use Uber’s API to calculate Uber rates, but we will have to create a mock Lyft API using Google Maps API and calculate our own rates as close as possible to Lyft’s. Other technologies we intend to use for deployment and hosting on Firebase and a React app written in JavaScript.


## Local Setup 

1. Clone this repository locally 
1. Clone the [firebase functions](https://github.com/CSE115A/rideshare-firebase-functions) repository locally as well. Instructions on how to clone and run the functions locally can be found within that repository 
1. `cd` into this repository 
1. Install all dependencies by using the following command. They all do the same function of installing dependencies.
   * `yarn` or `yarn -i`  or `yarn install`
2. Setup a local `.env` file. The [`env.sample`](.env.sample) file denotes the environment variables needed for this react app.
3. Start a local server by running to see the current progress.
   * `yarn start`  

## Available Scripts 

* `yarn start` 
  * starts a local development server on `http://localhost:3000`
* `yarn lint` 
  * runs a linting suite to make sure that the JS files meet the linting requirements
* `yarn lint:css` 
  * runs `stylelint` on css modules 
* `yarn lint:js` 
  * runs `eslint` on all JS files
* `yarn build` 
  * creates a production build 