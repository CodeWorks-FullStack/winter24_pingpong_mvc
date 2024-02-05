import { AppState } from "../AppState.js";


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
  }
}
