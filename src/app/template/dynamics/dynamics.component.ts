import { Component, OnInit } from '@angular/core';

interface Person {
  name: string,
  favs: Favorite[]
}

interface Favorite {
  id: number,
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  person: Person = {
    name: 'Luis',
    favs: [
      { id: 1, name: 'RDR2' },
      { id: 2, name: 'Bloodborne' },
    ],
  }

  newGame: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Submitted');
  }

  deleteFav(index: number) {
    this.person.favs.splice(index, 1)
  }

  addGame() {
    const newFav: Favorite = {
      id: this.person.favs.length + 1,
      name: this.newGame
    }

    this.person.favs.push({ ...newFav })
    this.newGame = ''
  }

  
}
