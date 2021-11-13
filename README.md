This website is a project to manage the drinks administration for the youth center in Hainstadt, Germany.

NodeJS is used for this.

Install instruction:

clone repository

apt update && apt full-upgrade
apt install nodejs, npm, mysql-server

npm init

npm install express
npm install express-handlebars@^5.3.4
npm install dotenv
npm install body-parser
npm install nodemon

add line "start" : "nodemon app.js" inside the script part of package.json

add .env file inside root directory
add mysql data

start mysql server, change root password, create database

to start server run 
npm start
