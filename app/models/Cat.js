const catPojo = {
  name: 'Gopher',
  age: 3
}


export class Cat {
  // name = ''

  constructor (catName, catAge) {
    console.log('Name before constructor assigns value', this.name);
    this.name = catName
    this.age = catAge
  }
}

// NOTE never appears in console, because module is not loaded into App
// const cat = new Cat()
// console.log('cat name', cat.name);
