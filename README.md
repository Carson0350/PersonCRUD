Im submitting this challenge at this point and in this state, as i feel its current condition is the best representation of my current abilities and what I was able to achieve without any help.

To start the project, open 2 terminals. In the first termianl cd into the inner 'person' file and run npm start

In the second terminal cd into the server file, run the command 'node index.js', this will start the server and connect you to a mySQL database. Then open a new tab in your browser and navigate to localhost:3000. Yay. From here you are in the application.

In the second termianl cd into the inner 'person' file and run npm start

1. What I have achieved
  - Ability to write code in a MVC framework with clear seperation of concerns between server, data, and UI elements
  - CRUD processes
  - Ability to write SQL statements
  - Ability to create a database
  - Ability to create a server
  - Ability to work independently
  - ability to send information from the front end to the database as displayed in the query string params
  - ability to retrieve infromation from the database
  - ability to edit information in database

2. what i did not achieve
  - a working poject
  - I was not able to actually get information into the database. Its weird because i have conformation in console log that my connection to the database is active and im pretty sure my sql is good.

  - because i was not able to get info into the db naturally i was not able to get information out
  - however im sure after i figure that out the put request; the get request will work like a charm.

3. what can be done better
  - I know i parse different parts of the server index.js file out into seprtate 'route' or 'controller' files.
  - If you can ever get data in the DB go ahead and uncomment the .map function in personList.jsx and it will render all the values in the DB

4. I seperated the different parts of the application in a pretty standadrd way. with UI elements in the src file and Server and DB in the server file.

5. Infromation is passed between layers by exporting function based react components and 'state'