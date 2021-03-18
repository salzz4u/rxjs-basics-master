import {fromEvent, interval} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    sampleTime,
    shareReplay,
    takeUntil,
    tap,
    throttleTime
} from "rxjs/operators";
import {subFunc} from "./helper";

const intervalForNext = 4000;
const intervalDuration = 1000;
let counter;

const stop$ = fromEvent(document, 'keyup');

// separate interval to check how many second elapsed after each click event
interval(1000).pipe(takeUntil(stop$)).subscribe(ctr => counter = ctr);

const click$ = fromEvent(document, 'click').pipe(
    map(e => e.clientY),
    distinctUntilChanged(),
    tap(e => console.log('...' + counter, e)),
    takeUntil(stop$),
    shareReplay()
);


const interval$ = interval(intervalDuration).pipe(
    tap(e => console.log('...' + e)),
    takeUntil(stop$),
    shareReplay()
);

// replace click$ with interval$ for a steady stream of inputs
click$.pipe(sampleTime(intervalForNext)).subscribe(subFunc('sampleTime'))
click$.pipe(throttleTime(intervalForNext)).subscribe(subFunc('throttleTime'))
click$.pipe(debounceTime(intervalForNext)).subscribe(subFunc('debounceTime'))

