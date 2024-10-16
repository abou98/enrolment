import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MsasComponent } from './msas.component';

describe('MsasComponent', () => {
  let component: MsasComponent;
  let fixture: ComponentFixture<MsasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MsasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
