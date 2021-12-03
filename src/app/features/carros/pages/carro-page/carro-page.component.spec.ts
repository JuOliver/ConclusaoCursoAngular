import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroPageComponent } from './carro-page.component';

describe('CarroPageComponent', () => {
  let component: CarroPageComponent;
  let fixture: ComponentFixture<CarroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
