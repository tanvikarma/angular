import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOneComponent } from './file-one.component';

describe('FileOneComponent', () => {
  let component: FileOneComponent;
  let fixture: ComponentFixture<FileOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileOneComponent]
    });
    fixture = TestBed.createComponent(FileOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
