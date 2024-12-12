import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecylementhdsegComponent } from './components/lifecylementhdseg/lifecylementhdseg.component';
import { ParentComponent } from './components/parent/parent.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { FileOneComponent } from './new/file-one/file-one.component';
import { FileTwoComponent } from './new/file-two/file-two.component';
import { DirectiveNameDirective } from './directive-name.directive';
import { HostComponent } from './component/host/host.component';
import { BindingComponent } from './component/binding/binding.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './routes/home/home.component';
import { HelpComponent } from './routes/help/help.component';
import { UsersComponent } from './routes/users/users.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { FormExampleComponent } from './forms/form-example/form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template/template-form/template-form.component';
import { ReactiveFormComponent } from './template/reactive-form/reactive-form.component';
import { ObservableEgComponent } from './Observable/observable-eg/observable-eg.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecylementhdsegComponent,
    ParentComponent,
    FirstComponent,
    SecondComponent,
    FileOneComponent,
    FileTwoComponent,
    DirectiveNameDirective,
    HostComponent,
    BindingComponent,
    HighlightDirective,
    HomeComponent,
    HelpComponent,
    UsersComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    FormExampleComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ObservableEgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
