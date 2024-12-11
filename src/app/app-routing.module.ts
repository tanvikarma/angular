import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { UsersComponent } from './routes/users/users.component';
import { HelpComponent } from './routes/help/help.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { HomeComponent } from './routes/home/home.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { authGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', 
    children: [
      {path: '', component : UsersComponent},
      {path: 'contactus', component : ContactUsComponent}
    ]
   },
  { path: 'help', component: HelpComponent ,canActivate : [authGuardGuard]},
  // { path: '', redirectTo: '/users', pathMatch: 'full' }, //default route
  { path: '**', component: PageNotFoundComponent}, //if any error occurs
  { path: 'department/:id', component: HelpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())  
  ]
})
export class AppRoutingModule { }
