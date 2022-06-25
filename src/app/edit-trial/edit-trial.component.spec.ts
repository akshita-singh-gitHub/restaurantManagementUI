import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrialComponent } from './edit-trial.component';

describe('EditTrialComponent', () => {
  let component: EditTrialComponent;
  let fixture: ComponentFixture<EditTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
