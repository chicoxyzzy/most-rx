import tape from 'tape';
import { Observable } from 'rxjs/Rx';
import { iterate } from 'most';
import { rxToMost, mostToRx } from '../src';

tape('most to rx', t => {
  t.plan(3);
  let counter = 1;
  const mostObservable = iterate(x => x + 1, 1).take(3);
  mostToRx(mostObservable).subscribe(value => t.equal(value, counter++, `counter is ok`));
});

tape('rx to most', t => {
  t.plan(3);
  let counter = 1;
  const rxObservable = Observable.range(1, 3);
  rxToMost(rxObservable).observe(value => t.equal(value, counter++, `counter is ok`));
});
