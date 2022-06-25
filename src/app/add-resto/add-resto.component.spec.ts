import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestoComponent } from './add-resto.component';

describe('AddRestoComponent', () => {
  let component: AddRestoComponent;
  let fixture: ComponentFixture<AddRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check component name',()=>{
    expect(component.componentName).toBe('user')
  })
  it('check component function',()=>{
    expect(component.numb).toBe(100)
  })
  it('check component function',()=>{
    expect(component.add(30,40)).toBe(100)
  })
  it('check html element',()=>{
    const collection=fixture.nativeElement
    expect(collection.querySelector('.heading').textContent).toContain('Add Restaurant Details')
  
  })

});
