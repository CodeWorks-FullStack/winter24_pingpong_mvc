import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  // NOTE creating place to store player data in our application. All pieces of data should be stored in the class definition itself for Observable AppState
  pingPongPlayers = []

}

// NOTE this object contains all data for app, and be imported as needed
export const AppState = createObservableProxy(new ObservableAppState())