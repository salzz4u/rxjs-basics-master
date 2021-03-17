import {interval} from 'rxjs';
import {filter, scan, shareReplay, take, tap} from "rxjs/operators";

const countDownNumber = 15;

const scanFunc = (x, y) => {
    return countDownNumber - y
}
const source$ = interval(1000).pipe(
    take(countDownNumber + 1),
    scan(scanFunc, countDownNumber),
    tap(() => console.log('...')),
    shareReplay());

const countDown$ = source$.pipe(filter(x => x > 0));
const takeOff$ = source$.pipe(filter(x => x === 0));
const mid$ = source$.pipe(filter(x => x === Math.round(countDownNumber / 2)));

countDown$.subscribe(console.log);
takeOff$.subscribe(() => console.log('takeoff!'));
mid$.subscribe(() => console.log('halfway!'));

