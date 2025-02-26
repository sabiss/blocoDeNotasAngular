import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesAcoesNotaComponent } from './botoes-acoes-nota.component';

describe('BotoesAcoesNotaComponent', () => {
  let component: BotoesAcoesNotaComponent;
  let fixture: ComponentFixture<BotoesAcoesNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotoesAcoesNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesAcoesNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
