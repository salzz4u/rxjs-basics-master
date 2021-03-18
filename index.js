import {fromEvent} from 'rxjs';
import {filter, first, map, take, takeWhile} from "rxjs/operators";


const source$ = fromEvent(document, 'click')
    .pipe(
        map((e) =>  ({x:e.clientX, y:e.clientY})) // object destructuring
    );

const first$ = source$.pipe(
   takeWhile(({y}) => y <= 400, true)
);

first$.subscribe({
    next: console.log,
    complete: () => console.log('completed!')
});
