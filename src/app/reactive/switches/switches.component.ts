import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['B', Validators.required],
    notifications: [false, Validators.required],
    terms: [false, Validators.requiredTrue]
  })

  person = {
    gender: 'G',
    notifications: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.myForm.reset(this.person)
    // this.myForm.reset({...this.person, terms:true})
    this.myForm.reset({ ...this.person })

    // ESTO PARA SUSCRIBIRSE Y REACCIONAR A LOS CAMBIOS EN CUALQUIER CAMPO DEL FORM. PUEDE SERVIR PARA GUARDAR CADA VEZ QUE CAMBIA UN CAMPO SUS VALORES MODIFICADOS EN OTRO OBJETO. EN ESTE CASO QUITANDO UN CAMPO
    this.myForm.valueChanges.subscribe(form => {
      console.log(form);
      delete form.terms;
      this.person = form
    })

    // TAMBIÉN SE PODRÍA PRESCINDIR DE ESTE CAMPO CON EL OPERADOR REST Y DESCTRUCTURANDO
    // this.myForm.valueChanges.subscribe(({terms, ...rest}) => {
    //   this.person = rest
    // })

    // AQUÍ NOS SUSCRIBIMOS A LOS CAMBIOS EN UN CAMPO ESPECÍFICO
    this.myForm.get('terms')?.valueChanges.subscribe(newValue => {
      console.log(newValue);
    })
  }

  submitForm() {
    const formValue = { ...this.myForm.value };
    delete formValue.terms;

    this.person = formValue

  }

}
