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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
