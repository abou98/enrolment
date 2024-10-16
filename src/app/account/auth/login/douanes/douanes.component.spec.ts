import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DouanesComponent } from './douanes.component';

describe('DouanesComponent', () => {
  let component: DouanesComponent;
  let fixture: ComponentFixture<DouanesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DouanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DouanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
