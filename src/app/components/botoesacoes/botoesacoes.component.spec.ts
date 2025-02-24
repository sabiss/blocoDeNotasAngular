import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesacoesComponent } from './botoesacoes.component';

describe('BotoesacoesComponent', () => {
  let component: BotoesacoesComponent;
  let fixture: ComponentFixture<BotoesacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotoesacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
