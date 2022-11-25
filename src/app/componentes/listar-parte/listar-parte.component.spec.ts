import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParteComponent } from './listar-parte.component';

describe('ListarParteComponent', () => {
  let component: ListarParteComponent;
  let fixture: ComponentFixture<ListarParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarParteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
