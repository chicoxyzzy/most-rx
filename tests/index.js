import tape from 'tape';
import Rx from 'rxjs/Rx';
import most from 'most';
import { rxToMost, mostToRx } from '../src';

tape('most to rx', t => {
  t.plan(3);
  let counter = 1;
  const mostObservable = most.iterate(x => x + 1, 1).take(3);
  const rxObservable = mostToRx(mostObservable).subscribe(value => counter < 4 ? t.equal(value, counter++) : rxObservable.unsubscribe());
});

tape('rx to most', t => {
  t.plan(3);
  let counter = 1;
  const rxSubject = new Rx.Subject();
  const mostObservable = rxToMost(rxSubject);
  mostObservable.observe(value => t.equal(value, counter));
  for (; counter < 4; counter++) {
    rxSubject.next(counter);
  }
  mostObservable();
});
