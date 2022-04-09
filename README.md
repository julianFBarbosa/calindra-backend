# Calindra - Backend

The frontend of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The backend was made with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), containerized using [Docker](https://docker.com) and orchestrated using [Docker compose](https://docs.docker.com/compose/).

## Dependencies

This project requires that you have [Docker](https://docker.com) and [Docker compose](https://docs.docker.com/compose/) installed to run it properly, as well as [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

## Instalation

at the project's root run: `cp .env.example .env` or similar

## Available Scripts

In the project directory, you can run:

`docker-compose up (-d)`

_(-d is optional, if you want to run it detached from your terminal instance)_

It will create the container applications, install dependencies and run your frontend, backend and database.

After the installation, the frontend application will be avaliable at [http://localhost:3000](http://localhost:3000).
