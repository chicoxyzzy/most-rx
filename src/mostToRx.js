import Rx from 'rxjs/Rx';

export function mostToRx(mostObservable) {
  return Rx.Observable.create(observer => mostObservable.observe(value => observer.next(value)));
}
