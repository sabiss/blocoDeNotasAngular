import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TelaService {
  constructor() {}

  telaPequena() {
    const tamanhoDaTela = window.innerWidth;
    return tamanhoDaTela < 1280;
  }
}
