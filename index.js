import {interval} from 'rxjs';
import {reduce, scan, take} from "rxjs/operators";

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const reducerFunc = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const source$ = interval(1000);

const reduce$ = source$.pipe(take(3), scan(reducerFunc, 0))

reduce$.subscribe({next: console.log, complete: () => console.log('complete!')});
