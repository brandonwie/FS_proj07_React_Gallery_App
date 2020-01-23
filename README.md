# React Gallery App v1

[![npm version](https://badgen.net/badge/npm/v6.13.6/green?icon=npm)](https://www.npmjs.com/) [![build](https://badgen.net/badge/build/launched/green?icon=libraries)](https://github.com/brandonwie) [![version](https://badgen.net/badge/version/v1.0.0/green?icon=kofi)](https://github.com/brandonwie)

> A single-page gallery app build with React
> [Check it NOW](https://brandonwie-react-galley-app.netlify.com/)

- Routing: [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Fetching Data: [axios](https://www.npmjs.com/package/axios)
- API: [flickr](https://www.flickr.com/)

## Installation

Mac OS:

```sh
npm install
npm start
```

## Skills

- JavaScript, React
- Fetch and parse data using axios
- Dynamic route setting (React Router 4)
- Using 3rd party API

## Release History

- 1.0.0

  - Live-link: [netlify](https://www.netlify.com/)
  - FIX: fetching history issue using `withRouter` (thanks to @John Nguyen, Treehouse student on [Slack](https://slack.com/))

- 0.1.0

  - CHANGE: create components, build hierarchy between those (parent-child)

- 0.0.1
  - Set up with create-react-app

## Exceed Expectation Features

- Add a loading indicator that displays each time the app fetches new data

  - `app.js` line 60

- If no matches are found by the search, display a friendly user message to tell the user there are no matches

  - `NotFound.js` - component
  - `PhotoList.js` line 17

- Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route
  - `PageNotFound.js` - component
  - `App.js` line 71

> ## README context from React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
