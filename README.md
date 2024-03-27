SocialMediaApplication

Here i have created a Social Media Application for university students named Chirrup. It allows students to create an account and login to engage with other students via post's. 
This consists of a frontend and a backend which run Jointly. This is only the front end. The backend repository is on my Github.

## Table of Contents
- [Overview]  (#Overview)
- [Video walkthrough of the application] (#Walkthrough)
- [Video walkthrough on how to install and use this on your local machine] (#HowToUseVideo)
- [ImportantInfo] (#ImportantInfo)
- [Installation&Usage] (#installation&Usage)
- 

##Overview
I programmed a Full Stack Application which is a social media application named Chirrup. Here you can follow users, create posts and engage with people's posts by liking them, updating them and many more. 
I did this in Javascript with the help of using the NodeJs framework and libraries from the NodeJS framework like express, Joi for validation and SQLite for database management. 
I also used the VUE framework for my front end and used the bootstrap style framework for the UX - User Experience.
This was programmed to a predefined specification which is here https://app.swaggerhub.com/apis/MMU-SE/Chirrup/1.0.0/#/
I used the RESTful API for communications between the front end and the backend. Using the fetch library to handle API requests in the frontend.
For the backend I interacted with the database using the SQLite DB library. I structred this using the MVC structure pattern to make it look more proffesional, seperating the backend into three interconnected elements view, controller and model.
With the help of the Joi Library and access tokens i handled authentication and authorization. This ensured only logged in users can create posts, edit posts and enage with other people like follow them or like their posts.
I implemented profanity filters on the backend for posts to ensure any offensive language does not make it into the application.




## Walkthrough
https://www.youtube.com/watch?v=e2Op1XRsc7Q&list=PL9IcuQG2EKM1SyWShtdSMBJAEPEviD7Ti&index=1&t=6s

##HowToUseVideo
https://www.youtube.com/watch?v=aOoWgRKTkuA&list=PL9IcuQG2EKM1SyWShtdSMBJAEPEviD7Ti&index=2&t=13s

#ImportantInfo
So, before you install and use this on your local machine there are some thing's you need to know:
Once the application is running on your local machine, you'll be able to create an account and login with that account. The password must be from 8 characters to 30 characters, one capital letter, one number and one special character.
However once you're in the dashboard you will not see any feed/posts from followers. 
This is because i have coded it in a way where once you're logged in you only see the feed/posts from yourself or your followers. As you're creating a new account you will have no followers so no feed.
So, I have already made an account for you which has some followers so you'll be able to interact with their posts.
Username: Slogan2204
Password: Popotetez&2

##installation&Usage
Instructions - Refer to the ##HowToUseVideo if you are having difficulty.
Ensure the backend server is currently running. The backend repository is on my Github with instructions on how to run it.
Create a folder 
cd into that folder in your IDE'S terminal
git init - to create a new repository
git clone https://github.com/JerryA01/SocialMediaApplicationFrontEnd.git
cd into the SocialMediaApplicationFrontEnd folder
cd into the vue-project folder in your terminal
type "npm install vite --save-dev"
type "npm run" to run the Vite application
Click the localhost link to view the application
Make some friends!




