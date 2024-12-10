import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecylementhdsegComponent } from './lifecylementhdseg.component';

describe('LifecylementhdsegComponent', () => {
  let component: LifecylementhdsegComponent;
  let fixture: ComponentFixture<LifecylementhdsegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecylementhdsegComponent]
    });
    fixture = TestBed.createComponent(LifecylementhdsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
