import { Cat } from './models/Cat.js';
import { router } from './router-config.js';

class App {

  router = router

}



const app = new App()
// @ts-ignore
window.app = app
const cat1 = new Cat('georgie', 9)
const cat2 = new Cat('gopher', 3)
console.log('cat 1', cat1);
console.log('cat 2', cat2);