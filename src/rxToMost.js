import { create } from 'most';

export function rxToMost(rxSubject) {
  return create((add, end, error) => {
    const subscription = rxSubject.subscribe(add, error, end);
    return () => subscription.complete();
  });
}
