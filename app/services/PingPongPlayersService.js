import { AppState } from "../AppState.js";

// NOTE we should only change data in the appstate in our service
class PingPongPlayersService {

  increasePlayerScore(playerName) {
    console.log('increasing player score, but in the service!', playerName);

    // NOTE creates a reference to the array stored in the appstate
    const players = AppState.pingPongPlayers
    console.log('players', players);

    // NOTE creates a reference to the single player object we want to change
    const foundPlayer = players.find(player => player.name == playerName)
    console.log('here is the player', foundPlayer);

    // NOTE increments
    foundPlayer.score++
  }

  decreasePlayerScore(playerName) {
    const players = AppState.pingPongPlayers
    const foundPlayer = players.find(player => player.name == playerName)
    foundPlayer.score--
  }
}

export const pingPongPlayersService = new PingPongPlayersService()