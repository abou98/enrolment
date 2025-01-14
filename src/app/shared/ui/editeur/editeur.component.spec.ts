import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditeurComponent } from './editeur.component';

describe('EditeurComponent', () => {
  let component: EditeurComponent;
  let fixture: ComponentFixture<EditeurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
