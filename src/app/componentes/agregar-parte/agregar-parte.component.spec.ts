import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarParteComponent } from './agregar-parte.component';

describe('AgregarParteComponent', () => {
  let component: AgregarParteComponent;
  let fixture: ComponentFixture<AgregarParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ AgregarParteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
