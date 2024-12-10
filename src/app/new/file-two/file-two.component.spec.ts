import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTwoComponent } from './file-two.component';

describe('FileTwoComponent', () => {
  let component: FileTwoComponent;
  let fixture: ComponentFixture<FileTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileTwoComponent]
    });
    fixture = TestBed.createComponent(FileTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
