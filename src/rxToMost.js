import subject from 'most-subject';

export function rxToMost(rxSubject) {
  const { sink, stream } = subject();
  rxSubject.subscribe(
    x => sink.add(x),
    e => { throw new Error(e); },
    () => sink.end()
  );
  const dispose = () => {
    rxSubject.complete();
  };
  dispose.observe = stream.observe.bind(stream);
  return dispose;
}
