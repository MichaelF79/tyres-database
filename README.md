Tyre listing web application built with the MERN Stack.

The aim was to produce a web application with the following specifications:

(1) Create a Tyres collection database featuring:

 - Brand
 - Title
 - Size
 - Price
 - Description
 - Image

(2) Using NodeJS, MongoDB and React.js:

- Create an API for providing tyre information
  - The API can accept pagination request (Optional)
   - limit - (how many tyres per page)
   - page - (for page number)

- Create a listing web page to connect to the API
 - Add some filters such as title, size, brand
 - Add pagination (Optional)

Backend: 

The backend of the app was set up using Nodejs and Express. 

The database was manually added and hosted in the cloud using MongoDB Atlas.
The server interacts with the database using the native MongoDB JavaScript library instead of the Mongoose library.

Frontend:

The React frontend was set up as a single page application using Create React App and I used Bootstrap for styling.

API:

The API was tested in Postman.

http://localhost:5000/api/v1/tyres

Running the application:

The server is restarted using nodemon: tyres-database/backend -> command: nodemon server -> http://localhost:5000/

The frontend is rendered with the 'npm start' command: (tyres-database/frontend -> command: npm start -> http://localhost:3000/tyres-database


