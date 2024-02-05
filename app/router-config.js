import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PingPongPlayersController } from "./controllers/PingPongPlayersController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PingPongPlayersController],
    // NOTE turn view into empty string (no spaces) if you don't want to dynamically draw pages
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])