import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PingPongPlayersController } from "./controllers/PingPongPlayersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    // NOTE the controllers property of this object is the controllers you want loaded when the page loads
    controllers: [PingPongPlayersController],
    // NOTE turn view into empty string (no spaces) if you don't want to dynamically draw pages (write inside the main of the index.html)
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])