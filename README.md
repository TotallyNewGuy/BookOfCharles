# BookOfCharles
A website record stories from different people
## 1. Quickly set up
### (a). Clone this repository to local folder
```
git clone https://github.com/TotallyNewGuy/BookOfCharles.git
```

### (b). Setup Node.js backend project
- go to **server** folder, install all dependencies, run this project
```
$ cd BookOfCharles/server
$ npm install
$ npm start
```
- Open .env.example and edit server port and MongoDB URL to configure your database
```
PORT = 'Port'
CONNECTION_URL = 'MongoDB_URL'
```
- Save it, then run your backend project. It will run at your **localhost:"your modified port"**
```
npm start
```
- Done! 👍

### (c). Setup React frontend project
- go to **client** folder, install all dependencies, run this project
```
$ cd BookOfCharles/client
$ npm install
$ npm start
```
- It will run at localhost:3000 and open in browser automatically! Done! 👍

