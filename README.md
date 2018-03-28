# Simple React Template (Parcel)
Super simple, and easy to use, opinionated React template, with a bunch of features.

There is always room for improvement, so feel free to fork, make change and then make a PR.

## Features
- Uses ParcelJS
- Latest ES2017 syntax support
- Routing via React Router
- HMR (Hot Module Reloading)
- Development server
- Source Maps for easy development
- SCSS support
- Markdown file loading (For quick static sites)
- Redux (Persistant store + Redux Thunk for async actions)
- Handlebars templating

## Getting started
- Clone the project
- Run `npm install` inside the folder
- Run `npm run start` to start the development server
- Open the URL `http:\\localhost:1234`
- App is now running, so get to developing awesome stuff!

## Building production app
You simply run `npm run build`

After it's done, four new files with be in the `dist/` folder.

Upload the upload the contents of the `dist/` folder to your server, and your good to go!

NOTE: Please remember to route all URL's on your server to the `index.html` file, for best experience.

## Redux store persistence
Currently the template is setup to put the whole Redux store into `localStorage`, but you could easily expand it to only store the stuff you want persistent.