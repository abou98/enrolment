import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroleComponent } from './enrole.component';

describe('EnroleComponent', () => {
  let component: EnroleComponent;
  let fixture: ComponentFixture<EnroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnroleComponent]
    });
    fixture = TestBed.createComponent(EnroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
