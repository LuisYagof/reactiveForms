import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // PARA QUE ESTE FORMGROUP NO CREZCA DEMASIADO, SE IMPORTA EL SERVICIO FORMBUILDER
  // myForm: FormGroup = new FormGroup({
  //   'product': new FormControl('Gretsch Pro Jet'),
  //   'price': new FormControl('500'),
  //   'stock': new FormControl('10')
  // })

  // FORMGROUP CON FORMBUILDER PERO SIN EL NG-ONINIT
  // myForm: FormGroup = this.fb.group({
  //   product: ['Fender Jaguar', [Validators.required, Validators.minLength(3)],],
  //   price: [580, [Validators.required, Validators.minLength(0)]],
  //   stock: [3, [Validators.required, Validators.minLength(0)]],
  // })

  myForm: FormGroup = this.fb.group({
    product: [, [Validators.required, Validators.minLength(3)],],
    price: [, [Validators.required, Validators.minLength(0)]],
    stock: [, [Validators.required, Validators.minLength(0)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      product: 'Fender Jazzmaster',
      price: 610,
      stock: 5,
    })

    // EN VEZ DE RESET PUEDE USARSE SETVALUES, PROBLEMA: SI HAY INCONSISTENCIA DE CAMPOS REVIENTA. NO CON RESET
  }

  fieldIsInvalid(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  submitForm() {
    console.log(this.myForm.value);

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    this.myForm.reset()
  }

}
