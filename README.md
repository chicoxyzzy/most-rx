# Most-RX

The [RxJS 5](https://github.com/ReactiveX/RxJS) and [Most](https://github.com/mweststrate/mobservable) interop

## You may not need this package anymore

With latest versions of RxJS and Most you can just
```
import Rx from 'rxjs/Rx';
import { from } from 'most';

const RxObservable = Rx.Observable.from(SomeMostObservable);
const MostObservable = from(SomeRxObservable);
```

### Installation

```
npm install --save most-rx
```

### Usage

For usage examples see [tests](/tests/index.js).
