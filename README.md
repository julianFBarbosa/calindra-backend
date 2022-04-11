# Calindra - Backend

This project was made with [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), containerized using [Docker](https://docker.com), using [Axios](https://axios-http.com/) as http client and orchestrated using [Docker compose](https://docs.docker.com/compose/).

## Dependencies

This project requires that you have [Docker](https://docker.com) and [Docker compose](https://docs.docker.com/compose/) installed to run it properly, as well as [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

## Instalation

first of all, at the project root you need to run `npm install` or similar, to install the project dependencies.
after that, run: `cp .env.example .env` or similar to generate a valid `.env` file

## How can i get a Google API Key?

it's simply! go to [https://developers.google.com/maps/documentation/geocoding/start](https://developers.google.com/maps/documentation/geocoding/start) and follow the instructions, after this, you need to activate the Geocoding and Geolocalization APIs at [https://console.cloud.google.com/marketplace/product/google/geocoding-backend.googleapis.com](https://console.cloud.google.com/marketplace/product/google/geocoding-backend.googleapis.com) and [https://console.cloud.google.com/apis/library/geolocation.googleapis.com](https://console.cloud.google.com/apis/library/geolocation.googleapis.com)

_warning: you must have a developer account at google and have created a project to activate it properly_

## Available Scripts

In the project directory, you can run:

`docker-compose up (-d)`

_(-d is optional, if you want to run it detached from your terminal instance)_

It will create the container applications, install dependencies and run your dockerized application.

After the installation, the frontend application will be avaliable at [http://localhost:3001](http://localhost:3001).
