## SocialMediaApplication

Here i have created a Social Media Application for university students named Chirrup. It allows students to create an account and login to engage with other students via post's. 
This consists of a frontend and a backend which run Jointly. This is only the front end. The backend repository is on my Github.

#### Head straight down to ImportantInfo & Installation&Usage if you want to run this jointly with the backend. 

## Table of Contents
- [Overview] (#Overview)
- [Video walkthrough of the application] (#Walkthrough)
- [Video walkthrough on how to install and use this on your local machine] (#HowToUseVideo)
- [ImportantInfo] (#ImportantInfo)
- [Installation&Usage] (#installation&Usage)
  

## Overview

I programmed a Full Stack Application which is a social media application named Chirrup. Here you can follow users, create posts and engage with people's posts by liking them, updating them and many more. 

I did this in Javascript with the help of using the NodeJs framework and libraries from the NodeJS framework like express, Joi for validation and SQLite for database management. 

I used the VUE framework for my front end and used the bootstrap style framework for the UX - User Experience.

This was programmed to a predefined specification which is here https://app.swaggerhub.com/apis/MMU-SE/Chirrup/1.0.0/#/

I used the RESTful API for communications between the front end and the backend. Using the fetch library to handle API requests in the frontend.

For the backend I interacted with the database using the SQLite DB library. I structred this using the MVC structure pattern to make it look more proffesional, seperating the backend into three interconnected elements view, controller and model.

With the help of the Joi Library and access tokens i handled authentication and authorization. This ensured only logged in users can create posts, edit posts and enage with other people like follow them or like their posts.
I implemented profanity filters on the backend for posts to ensure any offensive language does not make it into the application.


🛠️ Tech Stack
Backend:
-Node.js
-Express.js
-SQLite
-Joi (validation)
-CORS
-Morgan
-Body-parser

Frontend:
-Vue.js
-Vite
-Bootstrap 5
-Font Awesome
-HTML5, CSS3

Architecture:
-MVC pattern
-RESTful API


## Walkthrough

https://www.youtube.com/watch?v=e2Op1XRsc7Q&list=PL9IcuQG2EKM1SyWShtdSMBJAEPEviD7Ti&index=1&t=6s


## HowToUseVideo

https://www.youtube.com/watch?v=aOoWgRKTkuA&list=PL9IcuQG2EKM1SyWShtdSMBJAEPEviD7Ti&index=2&t=13s

## ImportantInfo
Before installing and running this application locally, there are a few things you should know:

Once it's up and running, you'll be able to create an account and log in. Passwords must be 8–30 characters long and include at least one uppercase letter, one number, and one special character.

After logging in, the dashboard will only show posts from you and your followers. Since a newly created account has no followers, your feed will appear empty at first.

To help you explore the app’s features, I’ve pre-created an account with existing followers — feel free to use it to view and interact with their posts.




Username: TLee527
Password: Popotetez&2!

## Installation&Usage
Instructions - Refer to the ##HowToUseVideo if you are having difficulty.

Ensure the backend server is currently running. The backend repository is on my Github with instructions on how to run it.

Create a folder 

cd into that folder in your IDE'S terminal

git clone https://github.com/JerryA01/SocialMediaApplicationFrontEnd.git

cd into the SocialMediaApplicationFrontEnd folder

cd into the vue-project folder in your terminal

type "npm install"

type "npm run dev" to run the Vite application

Click the localhost link to view the application

Login with Username: TLee527 Password: Popotetez&2! & Make some friends!




