import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesSelecaoTipoNotaComponent } from './botoes-selecao-tipo-nota.component';

describe('BotoesSelecaoTipoNotaComponent', () => {
  let component: BotoesSelecaoTipoNotaComponent;
  let fixture: ComponentFixture<BotoesSelecaoTipoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotoesSelecaoTipoNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesSelecaoTipoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
