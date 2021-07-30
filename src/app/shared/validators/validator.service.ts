import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  public emailPatteru: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  // public passPattern: string = '(?=.*[A-Za-z])(?=.*\d)[A-Za-z\\d]{6,}'
  // public passPattern: string = '(?=[^A-Z]*[A-Z])(?=[^0-9]*[0-9]).{6,}'
  // public passPattern: string = '^(?=.*[A-Z])(?=.*[0-9]).{6,12}$'
  // public passPattern: string = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$'
  // public passPattern: string = '^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{6,12}$'

  // NO SE TRAGA EXPRESIONES REGULARES BIEN
  // P.EJ, PARA LA CONTRASEÑA, SOLO FUNCIONA LA SIGUIENTE PERO OBLIGA A QUE VAYAN PRIMERO Nº LUEGO LETRAS
  public passPattern: string = '^(?=.[0-9])(?=.*[a-zA-Z]).{6,}$'
  // public passPatteru: string = '^(?=.*[A-Z])(?=.*[0-9]).{6,}$'
  // public passPatters: RegExp = /^(?=[^A-Z]*[A-Z])(?=\D*\d).{6,}$/

  constructor() { }

  validateUsername(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();
    if (value === 'luis') {
      return {
        equalsRealName: true
      }
    }
    return null;
  }

  equalPasswords(field1: string, field2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(field2)?.setErrors({ unequal: true });
        return { unequal: true }
      }
      formGroup.get(field2)?.setErrors(null);
      return null

    }

  }
}
