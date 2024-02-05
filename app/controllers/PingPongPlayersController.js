import { AppState } from "../AppState.js";
import { pingPongPlayersService } from "../services/PingPongPlayersService.js";
import { setHTML, setText } from "../utils/Writer.js";


export class PingPongPlayersController {
  // NOTE always put constructor at top or bottom of class definition

  // NOTE this will load on page load if our router has this controller set up in one of its objects
  constructor () {
    console.log('PING PONG PLAYERS CONTROLLER LOADED!');
    this.drawPingPongPlayers()
  }


  // NOTE method
  drawPingPongPlayers() {
    console.log('DRAWING PLAYERS');
    const players = AppState.pingPongPlayers
    console.log('Here are the players', players);

    let htmlString = ''

    players.forEach(player => {
      // console.log(player.PlayerCardHTMLTemplate())
      htmlString += player.PlayerCardHTMLTemplate
    })

    // console.log('here is the html string', htmlString);
    // const playersElement = document.getElementById('players')
    // console.log(playersElement);

    setHTML('players', htmlString)
  }

  increasePlayerScore() {
    console.log('Increasing player score');
    pingPongPlayersService.increasePlayerScore()
  }
}
