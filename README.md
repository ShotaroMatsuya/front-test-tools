[![cypress-api-request](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/yn1ycf/main&style=plastic&logo=cypress)](https://dashboard.cypress.io/projects/yn1ycf/runs)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `docker-compose up --build first-react first-server`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `docker-compose run --rm e2e --record --key 956f624b-309a-45ad-a885-67aebb8a6f31`

Launches the cypress test runner and output the reports to the cypress dashboard.

### `docker-compose up --build cypress`

Build a container and run the Cypress test in container

### `docker-compose up --abort-on-container-exit --exit-code-from e2e --build e2e`

Example running Cypress tests against Apache server via docker-compose

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
