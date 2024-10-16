import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnroleComponent } from './details-enrole.component';

describe('DetailsEnroleComponent', () => {
  let component: DetailsEnroleComponent;
  let fixture: ComponentFixture<DetailsEnroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEnroleComponent]
    });
    fixture = TestBed.createComponent(DetailsEnroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
