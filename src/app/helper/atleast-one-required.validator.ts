import { FormGroup } from "@angular/forms";


export function atLeastOneRequired(element1: string, element2: string){
  return (formGroup: FormGroup) => {
    const control1 = formGroup.controls[element1];
    const control2 = formGroup.controls[element2];

    if(control1.value || control2.value){
      if(control1.value && control1.errors){
        return;
      }
      if(control2.value && control2.errors){
        return;
      }
      control1.setErrors(null);
      control2.setErrors(null);
    }
    else{
      control1.setErrors({required: true});
      control2.setErrors({required: true});
    }
    
  }
}