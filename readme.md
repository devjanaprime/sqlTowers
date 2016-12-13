JEN Stack Template
==================

Basic JQuery, Node, Express template. Connects a client to a server on port 8080. Basic routes are set up for the index.html on the base url, as well as a 'testGet' route and a 'testPost' route which fire on button clicks.

Setup:
-----
* fork/clone this repo
* npm install in the folder into which you have cloned
* run 'npm start' to spin up the server
* check localhost://8080 in your browser
* test the button clicks and check for your output in the console

Completing the project:
----------------------
* display info from testGet call on the DOM
* add input fields for a new event: eventName, athleteName, award
* change the testPost button to get this user input and create a new object with this data
* change the test post to send this object to the server
* log out the req.body on the server side (should be this user input)
* create an array of events on the server side and push new objects to it
* have the server respond with a new object that has this array within
* log out that array in the browser console when received
* display those awards on the DOM
