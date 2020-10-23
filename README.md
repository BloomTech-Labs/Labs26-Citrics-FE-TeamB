# Citrics - A City Metrics app

A city metrics collation app to help find the perfect city for you!

You can find the deployed project at [Citrics](https://citrics.netlify.app/).

### Key Features

- View useful metrics, including weather patterns, housing prices, job market, demographics, and more!
- Currently features information on the `100` largest US cities, with more to come
- Select up to three cities to compare side-by-side
- Dig into detailed historical information, trends, and future predictions
- Glance at future predeictions for specific statistics
- Complete an Advanced Search to filter cities with specific requirements


### 🔮 Future Feature Ideas

- Provide a more complete list/suggestions for an unsuccessful search
- Determine additional types of data can be shown e.g.: Demographics (age, religion, etc), access to activities (hiking trails, bars, restaurants, etc)
- After looking at a city, I can click on a 'See cities similar to this' feature
- User can search for a city by Zip code
- Styling: model the home page to be more useful. Instead of side bar and 'Get Started' button, incorporate the search bar like this [similar app](https://www.areavibes.com/)

### Front end deployed to `Netlify`

### [Backend](https://b-ds.citrics.dev) built using FastAPI:

Our Data Science team collated a variety of metrics and created predictive models. See [their repo](https://github.com/labs26-citrics/Labs26-Citrics-DS-TeamB) for more information

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.13.1-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Contributors

|                                                      [Rachele Edwards](https://github.com/berachele)                                                       |                                                       [David Horstman](https://github.com/ddhorstman)                                                        |                                                      [Alan Lee](https://github.com/alanblee)                                                       |                                                       [Lyndsi Williams](https://github.com/lyndsiWilliams)                                                        |                                                       [Bhavani Rajan](https://github.com/Bhavani-Rajan)                                                        |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://i.imgur.com/UR0sA0t.png" width = "200" />](https://github.com/berachele) | [<img src="https://i.imgur.com/jF51x65.png" width = "200" />](https://github.com/ddhorstman) | [<img src="https://i.imgur.com/ueHbN2x.png" width = "200" />](https://github.com/alanblee) | [<img src="https://i.imgur.com/KpOZXeg.png" width = "200" />](https://github.com/lyndsiWilliams) | [<img src="https://i.imgur.com/9TcokzL.png" width = "200" />](https://github.com/Bhavani-Rajan) |
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/berachele)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ddhorstman)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/alanblee)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lyndsiWilliams)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Bhavani-Rajan)                           |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/berachele/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-horstman/)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/alanlee321/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/lyndsiwilliams/)                 |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bhavani-rajan/)                 |




# APIs

## Google Places API

We used the [Google Places API](https://developers.google.com/places/web-service/photos) to dynamically retrieve the most appropriate cover images for each city in our database.

To use this API, you must provide a valid API key in the environment variable `REACT_APP_PLACES_API_KEY`, either using a `.env` file or in the configuration of your deployment.

You can find instructions on getting an API key in [this Medium article](https://codeburst.io/adding-city-images-to-your-react-app-14c937df2db2).

## Open Weather API

We used the [Open Weather API](https://openweathermap.org/api/one-call-api) to retrieve and display the current weather for each city in our database.

To use this API, you must provide a valid API key in the environment variable `REACT_APP_OPEN_WEATHER_API`, either using a `.env` file or in the configuration of your deployment.

You can find instructions on getting an API key in [this article](https://openweathermap.org/appid).

## Backend APIs
See [Backend Documentation](https://github.com/labs26-citrics/Labs26-Citrics-DS-TeamB) for more information on the APIs used by our Data Science team.

## Other Sources
[<b>User Flowchart</b>](https://whimsical.com/341zvP6EuiJdMGJt3neFJa)<br />
[<b>Wireframe</b>](https://whimsical.com/T5VcCfKv8TwyKzgjfUnAeE)<br />
[<b>Engineering Architecture Flowchart</b>](https://whimsical.com/BFjY6RQpD7YD67d7UukiSx)<br />
<b>Icons:</b> We got out icons from [Icons8](https://icons8.com/). Small icons are 48px, Large is 96px.

# Installation Instructions
Run the following in your shell of choice:

    git clone https://github.com/Lambda-School-Labs/Labs26-Citrics-FE-TeamB
    cd Labs26-Citrics-FE-TeamB
    npm i
    npm start
You will then see the App running in your browser at [http://localhost:3000/](http://localhost:3000/)

## Other Scripts


    * build - creates a production-ready build
    * test - run unit tests in __tests__ directory

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](https://b-ds.citrics.dev/#/) for details on the backend of our project.
