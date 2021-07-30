import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  person = {
    gender: 'G',
    notifications: true,
  }
  
  terms:boolean = false

  save() {
    console.log('submit');

  }

}
