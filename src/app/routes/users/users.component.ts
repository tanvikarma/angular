import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  hero$:number = 0;
@Input()
set id(heroId: string) {
  this.hero$ = 24;
}
}
