# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dockerized React App

This is a Dockerized React app that runs inside a Docker container. This setup is useful for creating a portable development environment that can be easily shared with others.

# Prerequisites

Before you can run this app, you'll need to have the following software installed on your machine:

Docker (version 18.09 or higher)

## Getting Started

To get started, clone this repository to your local machine:
git clone https://github.com/kennethoyahebholo/FE-TP.git

### Next, navigate into the project directory:

cd FE-TP

### Next, navigate into the bin directory:

cd bin

### start the dockerized app in development by running this shell command

Runs the app in the development mode.\

#### ./deploy.sh dev up

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any errors in the console.

#### stop the dockerized app in development by running this shell command

Runs the app in the development mode.\
CTRL C
Stops the app running in [http://localhost:3000](http://localhost:3000)

#### remove the dockerized app in development by running this shell command

./deploy.sh dev down

### start the dockerized app in production by running this shell command

Runs the app in the development mode.\
./deploy.sh prod up
This build the app into a build directory

#### remove the dockerized app in development by running this shell command

./deploy.sh prod down

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
