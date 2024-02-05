import { AppState } from "../AppState.js";
import { pingPongPlayersService } from "../services/PingPongPlayersService.js";
import { setHTML, setText } from "../utils/Writer.js";

// NOTE responsible for drawing and taking user input
export class PingPongPlayersController {
  // NOTE always put constructor at top or bottom of class definition

  // NOTE this will load on page load if our router has this controller set up in one of its objects
  constructor () {
    console.log('PING PONG PLAYERS CONTROLLER LOADED!');
    // NOTE this refers to the method inside of the class
    this.drawPingPongPlayers()
  }

  // ANCHOR methods accessible to HTML

  drawPingPongPlayers() {
    console.log('DRAWING PLAYERS');
    // NOTE access the data in the AppState
    const players = AppState.pingPongPlayers
    console.log('Here are the players', players);

    // NOTE placeholder string to add HTML strings to
    let htmlString = ''

    players.forEach(player => {
      // console.log(player.PlayerCardHTMLTemplate())
      htmlString += player.PlayerCardHTMLTemplate
    })

    // console.log('here is the html string', htmlString);
    // const playersElement = document.getElementById('players')
    // console.log(playersElement);

    // NOTE setHtml is a function that takes in an HTML id as the first argument, and a string of HTML to inject as the second
    setHTML('players', htmlString)
  }

  increasePlayerScore(playerName) {
    console.log('Increasing player score', playerName);
    // NOTE about to change data in the appstate, no longer the controllers job
    pingPongPlayersService.increasePlayerScore(playerName)
    this.drawPingPongPlayers()
  }

  decreasePlayerScore(playerName) {
    console.log('decreasing score', playerName);
    pingPongPlayersService.decreasePlayerScore(playerName)
    this.drawPingPongPlayers()
  }
}
