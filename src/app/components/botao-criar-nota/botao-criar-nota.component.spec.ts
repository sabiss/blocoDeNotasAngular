import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCriarNotaComponent } from './botao-criar-nota.component';

describe('BotaoCriarNotaComponent', () => {
  let component: BotaoCriarNotaComponent;
  let fixture: ComponentFixture<BotaoCriarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoCriarNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCriarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
