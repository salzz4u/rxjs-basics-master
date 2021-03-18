import {fromEvent} from 'rxjs';
import {filter, first, map, take} from "rxjs/operators";


const source$ = fromEvent(document, 'click')
    .pipe(
        map((e) =>  ({x:e.clientX, y:e.clientY})) // object destructuring
    );

const first$ = source$.pipe(
    filter(e => e.y > 100),
    take(3)
);

first$.subscribe({
    next: console.log,
    complete: () => console.log('completed!')
});
