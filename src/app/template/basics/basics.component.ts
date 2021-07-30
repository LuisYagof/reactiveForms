import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm

  initForm = {
    product: '',
    price: 0,
    stock: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  // save(myForm: NgForm) {
  //   console.log(myForm.value);
  // }

  save() {
    console.log(this.myForm);

    this.myForm.resetForm({
      price: 0,
      stock: 0
    })
  }

  nameIsValid(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched
  }

  priceIsValid(): boolean {
    return this.myForm?.controls.price?.invalid && this.myForm?.controls.price?.touched
  }

  stockIsValid(): boolean {
    return this.myForm?.controls.stock?.invalid && this.myForm?.controls.stock?.touched
  }
}
