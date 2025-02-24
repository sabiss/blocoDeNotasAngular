import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavnotasComponent } from './navnotas.component';

describe('NavnotasComponent', () => {
  let component: NavnotasComponent;
  let fixture: ComponentFixture<NavnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavnotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
