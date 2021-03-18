import {fromEvent, timer} from 'rxjs';
import {filter, scan, shareReplay, take, takeUntil} from "rxjs/operators";

const countDownNumber = 10;
const speed = 1000;

const scanFunc = (x, y) => {
    return countDownNumber - y
}
const subFunc = (msg, next = true, complete = true) => {
    return {
        next: value => next ? console.log(value) : null,
        complete: () => complete ? console.log('completed: ' + msg) : null
    }
}
// click stream
const click$ = fromEvent(document, 'click');

const source$ = timer(0, speed).pipe(
    take(countDownNumber + 1),
    takeUntil(click$),
    scan(scanFunc, countDownNumber),
    // tap(() => console.log('...')),
    shareReplay());


const countDown$ = source$.pipe(filter(x => x > 0));
const takeOff$ = source$.pipe(filter(x => x === 0));
const mid$ = source$.pipe(filter(x => x === Math.round(countDownNumber / 2)), take(1));

countDown$.subscribe(subFunc('countDown'));
takeOff$.subscribe(subFunc('takeOff!', null));
mid$.subscribe(subFunc('halfway!', null));

