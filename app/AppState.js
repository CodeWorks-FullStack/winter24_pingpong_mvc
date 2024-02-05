import { PingPongPlayer } from './models/PingPongPlayer.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  // NOTE creating place to store player data in our application. All pieces of data should be stored in the class definition itself for Observable AppState
  pingPongPlayers = [
    new PingPongPlayer('Jake', 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

    new PingPongPlayer('Jeremy', 'https://images.unsplash.com/photo-1516820612845-a13894592046?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),

    new PingPongPlayer('Mick', 'https://images.unsplash.com/photo-1615982513414-d287e6b70ad6?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
  ]

}

// NOTE this object contains all data for app, and can be imported as needed
export const AppState = createObservableProxy(new ObservableAppState())