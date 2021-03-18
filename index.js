import {fromEvent, interval} from 'rxjs';
import {sample, takeUntil, tap} from "rxjs/operators";
import {subFunc} from "./helper";

const source$ = fromEvent(document, 'click');
const stop$ = fromEvent(document, 'keyup');
const interval$ = interval(1000);

interval$.pipe(
    tap(e=>console.log('...' + e)),
    sample(source$),
    takeUntil(stop$)
).subscribe(subFunc('clicked'))

