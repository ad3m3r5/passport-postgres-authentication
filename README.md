# passport-postgres-authentication
A little concept program with authentication using NodeJS with Passport, PostgreSQL, and ExpressJS. It contains login, registration, and password updating functionality.

## Why?
I've built small applications with authentication using Passport with MongoDB, but not with Postgres. This gave me the opportunity to learn something new. Hopefully it can help someone else with their projects.

## Getting Started

 1. Clone the repository

 > git clone https://github.com/ad3m3r5/passport-postgres-authentication.git

 2. Install necessary packages
 
>  npm install

3. Create your database and table in PostgreSQL. This is the statement I used.

> CREATE TABLE users (  
	&nbsp;&nbsp;&nbsp;&nbsp;id UUID NOT NULL,  
	&nbsp;&nbsp;&nbsp;&nbsp;username TEXT NOT NULL UNIQUE,  
	&nbsp;&nbsp;&nbsp;&nbsp;password TEXT NOT NULL,  
	&nbsp;&nbsp;&nbsp;&nbsp;CONSTRAINT users_pkey PRIMARY KEY(id)  
)  
WITH (oids = false);

 4. Create the file .env, which will store database connection information. Add the following variables using your respective values.

> PGHOST=<postgres_host>  
PGPORT=<postgres_port>  
PGDATABASE=<database_name>  
PGUSER=<postgres_username>  
PGPASSWORD=<postgres_password>  

 5. Run the application

>  node server.js

## Tech/Software Used

 - [NodeJS](https://nodejs.org/en/)
 - [PostgreSQL](https://www.postgresql.org/)
 - [VS Code](https://code.visualstudio.com/)

Main Packages Used

 - [ExpressJS](https://expressjs.com/)
 - [EJS](https://ejs.co/)
 - [Passport](http://www.passportjs.org/)
 - [node-postgres](https://node-postgres.com/)
 - [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)


## Screenshots
User login
![Login Page](https://user-images.githubusercontent.com/11009228/72951557-d3ec8480-3d5c-11ea-8a76-8a133b21c073.png)
User registration
![Registration Page](https://user-images.githubusercontent.com/11009228/72951480-7a845580-3d5c-11ea-9a84-c68a0788a57b.png)
Update/change account password
![Account Page](https://user-images.githubusercontent.com/11009228/72951540-c0411e00-3d5c-11ea-9a73-230b40c12578.png)