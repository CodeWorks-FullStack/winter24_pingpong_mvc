import { AppState } from "../AppState.js";

class PingPongPlayersService {

  increasePlayerScore(playerName) {
    console.log('increasing player score, but in the service!', playerName);
    const players = AppState.pingPongPlayers
    console.log('players', players);

    const foundPlayer = players.find(player => player.name == playerName)
    console.log('here is the player', foundPlayer);
    foundPlayer.score++
  }

  decreasePlayerScore(playerName) {
    const players = AppState.pingPongPlayers
    const foundPlayer = players.find(player => player.name == playerName)
    foundPlayer.score--
  }
}

export const pingPongPlayersService = new PingPongPlayersService()