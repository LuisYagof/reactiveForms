import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// PARA LA OPCIÓN COMENTADA --> NO USANDO SERVICIO, SINO FUNCIONES IMPORTADAS DE ESTE FICHERO
import { emailPattern, nameSurnamePattern, validateUsername } from 'src/app/shared/validators/validations';

import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  // ASÍ IMPORTANDO DESDE SHARED/VALIDATIONS.TS
  // myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.pattern(nameSurnamePattern)],],
  //   // email: ['', [Validators.required, Validators.email]],
  //   email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //   username: ['', [Validators.required, validateUsername]],
  //   password: ['', Validators.required],
  // })


  // ASÍ ES CON SERVICIO INYECTADO DESDE SHARED
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.nameSurnamePattern)],],
    // email: ['', [Validators.required, Validators.email]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.validateUsername]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.vs.passPattern)]],
    password2: ['', Validators.required],
  }, {
    validators: [this.vs.equalPasswords('password', 'password2')]
  })

  get emailErrorMsg(): string {

    const errors = this.myForm.get('email')?.errors;
    if (errors?.required) {
      return "Email is required"
    } else if (errors?.pattern) {
      return "That ain't no email 😒"
    } else if (errors?.alreadyExists) {
      return "Email already taken"
    }
    return ''
  }

  get passErrorMsg(): string {

    const errors = this.myForm.get('password')?.errors;
    if (errors?.required) {
      return "Password is required"
    } else if (errors?.minlength) {
      return "Password must be at least 6 characters long"
    } else if (errors?.pattern) {
      return "Minimum six characters, at least one letter and one number"
    }
    return ''
  }

  constructor(private fb: FormBuilder, private vs: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {

    this.myForm.reset({
      name: 'Luis Yago',
      email: 'luisyagofdez@gmail.com',
      username: 'LuisYagoF',
      password: '123456',
      password2: '123456',
    })

  }

  fieldIsInvalid(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  // emailRequired() {
  //   return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched
  // }

  // emailFormat() {
  //   return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched
  // }

  // emailTaken() {
  //   return this.myForm.get('email')?.errors?.alreadyExists && this.myForm.get('email')?.touched
  // }

  submitForm() {
    this.myForm.markAllAsTouched()

  }

}
