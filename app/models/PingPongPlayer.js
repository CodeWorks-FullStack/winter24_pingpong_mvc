
export class PingPongPlayer {
  // name = ''
  // imgUrl = ''
  // score = 0

  // NOTE constructor runs whenever a class is created (instantiated)
  constructor (pingPongPlayerName, pingPongPlayerImgUrl) {
    this.name = pingPongPlayerName
    this.imgUrl = pingPongPlayerImgUrl
    this.score = 0
  }

  get PlayerCardHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="card">
        <img class="card-img-top player-img"
          src="${this.imgUrl}"
          alt="">
        <div class="p-3">
          <h2>${this.name}</h2>
          <h3>Player Score: ${this.score}</h3>
          <div>
            <button onclick="app.PingPongPlayersController.increasePlayerScore('${this.name}')" type="button">
              Score Goes Up
            </button>
            <button onclick="app.PingPongPlayersController.decreasePlayerScore('${this.name}')" type="button">Score Goes Down</button>
          </div>

        </div>
      </div>
    </div>
    `
  }
}


// const jake = new PingPongPlayer('Jake', 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
// const jeremy = new PingPongPlayer('Jeremy', 'https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

// jeremy.name // 'jeremy'
// jake.name // 'jake'
// jake.score // 0