import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEgComponent } from './observable-eg.component';

describe('ObservableEgComponent', () => {
  let component: ObservableEgComponent;
  let fixture: ComponentFixture<ObservableEgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableEgComponent]
    });
    fixture = TestBed.createComponent(ObservableEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
