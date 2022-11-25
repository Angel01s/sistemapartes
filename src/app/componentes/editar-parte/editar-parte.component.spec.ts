import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParteComponent } from './editar-parte.component';

describe('EditarParteComponent', () => {
  let component: EditarParteComponent;
  let fixture: ComponentFixture<EditarParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarParteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
