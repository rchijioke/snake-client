# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

## Documentation

The following functions are currently implemented:

`client.js`: description
 connect function creates a connection to a server using the "net" module, sets the encoding to "utf8", and sends a message to the server with the name "ROY" when the connection is established, then returns the connection object.

`input.js`: description
This file defines two functions, "setupInput" and "handleUserInput," where "setupInput" sets up standard input to handle user input, and "handleUserInput" sends specific messages to the server depending on the user's input.

`play.js`: description
This file imports the "connect" and "setupInput" functions from separate files, creates a connection to the server using the "connect" function, and sets up standard input to handle user input using the "setupInput" function. It also logs a message to the console stating that it is attempting to connect to the server.

`constants.js`: description
This code exports an object containing the IP and port number of the server to be used by other modules or files that require this information.