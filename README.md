# BookOfCharles
A website record stories from different people

This project is my first website after I learn about web development. It was used create-react-app as a frame, and a popular javascript stack MERN(MongoDB, express, react and node.js) from backend to frontend. The frontend deposit on netlify and backend deposit on heroku.

## Quickly set up
### (a). Clone this repository to local folder
```
git clone https://github.com/TotallyNewGuy/BookOfCharles.git
```

### (b). Setup Node.js backend project
- Go to **server** folder then install all dependencies
```
$ cd CSGO-U/server
$ npm install
```
- Open .env.example and edit server port and MongoDB URL to configure your database
```
PORT = 'Port'
CONNECTION_URL = 'MongoDB_URL'
```
- **IMPORTANT!** After save changes, also change the name of **.env.example** to **.env**
- Run your backend project. It will run at your **localhost:"your modified port"**
```
npm start
```
- Done! 👍

### (c). Setup React frontend project
- Go to **client** folder, install all dependencies, run this project
```
$ cd BookOfCharles/client
$ npm install
$ npm start
```
- It will run at localhost:3000 and open in browser automatically! Done! 👍

## (Optional) Depoly frontend server
- Login or signup for https://www.heroku.com/
- Create a new site in Netlify
- build your code in **client** folder
```
npm run build
```
- Submit your built codes to Netlify and it will help you deploy.
- Then you can change your website URL to any name you like.
- Share its unique link with others and have fun! 😀

## (Optional) Depoly backend server
- Login or signup for https://www.netlify.com/
- Create a new app in Heroku
- Download and install Heroku CLI(or other tools) based on its docs.
- Bind your Heroku accont within your backend project
- Submit your codes to Heroku and it will help you build it automatically.
- Now you can change your api URL into Heroku URL you created.
