import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { IAppState } from './store/index';
import { INCREMENT, DECREMENT } from './actions/counter.actions';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>{{ (counter$ | async).value }}</h1>
      <button (click)="decrement()">-</button>
      <button (click)="increment()">+</button>
      <button (click)="odd()">ODD</button>
    </div>
  `
})
export class AppComponent {
  @select('counter') public counter$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  odd() {
    //if odd inc with 1
  }
}
