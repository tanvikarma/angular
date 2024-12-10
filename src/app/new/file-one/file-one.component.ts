import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FileTwoComponent } from '../file-two/file-two.component';

@Component({
  selector: 'app-file-one',
  templateUrl: './file-one.component.html',
  styleUrls: ['./file-one.component.scss']
})
export class FileOneComponent implements AfterViewInit{
  name: string = '';

  ngAfterViewInit(): void {
    console.log(this.childData.name);
    
    // this.childData.name = "Sakshi";
  }

  @ViewChild('child') childData!: FileTwoComponent;

  accessMethod() {
    this.childData.calling();
  }
}
