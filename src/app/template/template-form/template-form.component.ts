import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
gender = 'male';
about = '';
submited= false;
user = {
  name:'',
  email:'',
  phone:'',
  gender:''
}

@ViewChild('formexample') formValue!: NgForm;

checkData() {
  console.log(this.formValue,'in check data');
  
}

onFormSubmit() {
  this.submited = true;
  this.user.name = this.formValue.value.userFormData.name;
  this.user.email = this.formValue.value.userFormData.email;
  this.user.gender = this.formValue.value.gender;
  this.user.phone = this.formValue.value.number;
  this.formValue.reset();
  // console.log( this.user.name,this.user.email , this.user.gender,this.user.phone);
  
  // console.log('form has been submited successfully..', this.formValue);
}

fillValues() {
  this.formValue.form.setValue({
    userFormData: {
      email : 'tanvi@gamil.com',
      name  : 'tanvi',
    },
    gender : 'female',
    number : 122348789
  })
}

}
