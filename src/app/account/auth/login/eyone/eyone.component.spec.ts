import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EyoneComponent } from './eyone.component';

describe('EyoneComponent', () => {
  let component: EyoneComponent;
  let fixture: ComponentFixture<EyoneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
