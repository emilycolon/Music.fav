# GA WDI Project 2 - Express App - music.fav

## Final Application

https://music-fav-2018.herokuapp.com/

## Description

This application allows a user to track their favorite musicians, albums, and songs.

## Brief Example

### Homepage

![Homepage](/planning/homepage.jpg)

### View by Artist page

![View All By Artist page](/planning/pageview.jpg)

## List of Features / User Stories

This app allows a user to track their favorite musicians and view a list of all favorite artists. They can also add songs and albums and then view all favorited songs, or all songs (sorted by album) for each favorited artist.

When planning, my Bronze level included allowing the user to track artists and songs. Silver included the ability to track albums. My Gold level project was to also incorporate playback of favorited songs/artists/albums via Spotify. I utilized wire framing, an ERD model, and Trello to handle planning and project management. Documents can be viewed [here](https://git.generalassemb.ly/emilycolon/project-2/tree/master/planning).

The deployed app is currently at Silver level. I was able to include basic code to allow my personal Spotify account to recognize the app/web browser as a "device" and remotely control playback through the opened browser. Further Gold level development would include allowing control of the playback in the app itself as well as the ability to see selected songs/artists/albums and have those available for playback.

## List of Technologies Used

Languages: HTML, CSS, JavaScript

Frameworks, Libraries, etc: NodeJS, body-parser, ejs, express, method-override, pg, pg-hstore, and sequelize

## Installation Instructions / Getting Started

In order to run this app locally, you will need for fork and clone this repo to your local machine. You will also need [Node.js](https://nodejs.org/en/) in order to install and run the various modules needed to properly run this app.

Once cloned down to your local machine, run the following npm install command in the project directoy:

```
$ npm install body-parser ejs express method-override pg pg-hstore sequelize
```

This will install all of the neccessary dependencies. You will then want to migrate and seed the provided data.

```
node db/migrate.js
```

then

```
node db/seed.js
```

Once migrated and seeded, you can start an instance of a local server by entering

```
node index.js
```

In your web browser, go to `localhost:3000`. This will load the application!

## Contribution Guidelines

The project repo is located [here](https://git.generalassemb.ly/emilycolon/project-2).

Issues can be submitted [here](https://git.generalassemb.ly/emilycolon/project-2/issues).
