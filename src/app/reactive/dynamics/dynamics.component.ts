import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  // myForm: FormGroup = this.fb.group({
  //   name: ['', [Validators.required, Validators.minLength(3)]],
  //   favorites: this.fb.array([
  //     this.fb.control('Gretsch', Validators.required),
  //     this.fb.control('Jazzmaster', Validators.required)
  //   ], Validators.required)
  // })

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ['Gretsch', Validators.required],
      ['Jazzmaster', Validators.required]
    ], Validators.required)
  })

  get favsArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  // newFav: FormControl = new FormControl('', Validators.required)
  newFav: FormControl = this.fb.control('', Validators.required)

  constructor(private fb: FormBuilder) { }

  fieldIsInvalid(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  addFav() {
    if (this.newFav.invalid) {
      return;
    }

    this.favsArr.push(new FormControl(this.newFav.value, Validators.required))
    // this.favsArr.push(this.fb.control(this.newFav.value, Validators.required))

    this.newFav.reset()
  }

  deleteFav(index: number) {
    this.favsArr.removeAt(index)
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
