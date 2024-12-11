import { Component } from '@angular/core';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent{
  constructor(private router: Router) {}
  

  navigateToHelp() {
    this.router.navigate(['/help']);
  }

  departments = [
    {"id" :1, "name": "angular1"},
    {"id" :2, "name": "angular2"},
    {"id" :3, "name": "angular3"},
    {"id" :4, "name": "angular4"},
    {"id" :5, "name": "angular5"},
  ]

  onSelect(department:any) {
    // this.router.navigate(['/users'], department.id)
    this.router.navigate(['/users'], { queryParams: { id: department.id } });
  }
}