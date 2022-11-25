import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimirParteComponent } from './imprimir-parte.component';

describe('ImprimirParteComponent', () => {
  let component: ImprimirParteComponent;
  let fixture: ComponentFixture<ImprimirParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimirParteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimirParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
