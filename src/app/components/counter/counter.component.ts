import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { counterStateSelector, counterStateValueSelector } from 'src/app/store/counter/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public value = 0;
  constructor(private readonly store: Store<AppState>) {
    this.store.select(counterStateValueSelector).subscribe((value) => this.value = value)
  }
}
