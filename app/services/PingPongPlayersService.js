import { AppState } from "../AppState.js";

class PingPongPlayersService {
  increasePlayerScore() {
    console.log('increasing player score, but in the service!');
    const players = AppState.pingPongPlayers
    console.log('players', players);
  }
}

export const pingPongPlayersService = new PingPongPlayersService()