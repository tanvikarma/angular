import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  genders = ['male','female'];
  signUpForm!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email': new FormControl(null,Validators.required),
        'gender': new FormControl('female'),
        'hobbies' : new FormArray([])
    })
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies'))?.controls
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies'))?.push(control)
  }
}
