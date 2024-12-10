import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { ApiService } from 'src/app/api.service';
import { MailService } from 'src/app/mail.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements AfterViewInit{
 msg: string = '';

  constructor(private api: ApiService,private mailtext : MailService){}
  
  @ViewChild('childComponent') childComponent!: SecondComponent
  
  ngAfterViewInit(): void {
    this.msg = this.childComponent.childData;
    this.childComponent.childData = 'hello there ! i have changed this msg...'
    
  }

  calling() {
    this.mailtext.msg('shriffle')
  }

  accessChildMethod() {
     this.childComponent?.sendDataToParent();
     console.log('childComponent',this.childComponent.childData);  
  }

  test(){
    this.api.colorChange()
  }
}
