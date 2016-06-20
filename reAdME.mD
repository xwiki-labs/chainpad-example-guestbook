# ChainPad Example

This example will help you get started building apps with ChainPad Realtime Synchronization Engine.
This example uses the ChainPad List/Map plugin to export a realtime-synchronized Javascript native
object. In www/main.js you can see that the object is modified when you sign the guestbook and
when someone else signs the guestbook, it creates an event which re-renders the page based on the
new Realtime JSON.

To run this demo (you must have nodejs, npm and bower on your system):

    npm install
    bower install
    node ./server.js
    ## Navigate your browser to http://localhost:3000/
