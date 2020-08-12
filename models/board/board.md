Start game check during start up procedure

Given that board has buttons
Given that buttons can be pressed
Given that button pressed causes a routine to execute
Given that routine is executed in context of current state
Given that current state is a memory accessible to the routines
Then game can be started

Start game
Given that game has players (players != null, players = [], players.length > 0)
And given that players are on their positions (STARTING_POSITION = (x: 0, y:0), for player in players, player.position == STARTING_POSITION)

