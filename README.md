<span>[![Generic badge](https://img.shields.io/badge/Front%20End-Developed-brightgreen.svg?logo=react)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/REST%20API-Developed-brightgreen.svg?logo=Node.js)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/Database-Developed-brightgreen.svg?logo=MongoDB)](https://shields.io/)</span>

# Music Player

- [Inside](#inside)

  -[Tech](#tech)

- [Install](#install)

- [Run Locally](#local-run)

- [Run Production build](#prod-run)

This is a simple to use music player, where you can play, pause, remove or add your tracks.

## <a name="Inside">Inside</a>

Inside of my repo, you will find an node.js express server as well as the frontend app, created with React.js.

This music player is connected to a MongoDB database where you can perform CRUD statements to fetch, post or delete music track records.

### <a name="tech">Tech</a>

This music player is built on a MERN tech stack

- MongoDB

* Express.js

- React.js for the frontend

* Node.js

## <a name="install">Install</a>

To get started and install all the dependency for this app please ensure you can these requirements.

[![Generic badge](https://img.shields.io/badge/Node-v9.11.2-bright.svg)](https://shields.io/)

- node - V9.11.2 (if you have nvm installed on your machine you can perform `nvm use` which will use the folders `.nvmrc` file)

Once you're on node v9.11.2 please run `npm install` inside the top folder then perform `cd ./frontend` and run `npm install` once again ensure you've installed the backend and frontend dependencies.

## <a name="local-run">Run locally</a>

To run this app locally you can choose to run either there server, app or both the server & app at the same time. the commands are as followed:

Please note you must run these commands in the very top level of this folder.

- local server - (port: 3001 from .env or 3000)

```

npm run server

```

- local app (without an server) - (port: 3000)

```

npm run app

```

- local server & app - (port: 3001 for API and port: 3000 for the APP)

```

npm run start-local

```

## <a name="prod-run">Run Production build</a>

To run a production build or to build a production-ready build please use the following commands.

- Build production code

```

npm run build-prod

```

- To serve your production FE build only (port 3000)

```

npm run prod-build

```

- To run a production-ready build with the server (This will run on port 3001)

```

npm run start-prod

```
