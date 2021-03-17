import {from, fromEvent} from 'rxjs';
import {mapTo, pluck} from "rxjs/operators";

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const source$ = fromEvent(document, 'keyup');

const pluck$ = source$.pipe(pluck('code'));
const mapTo$ = source$.pipe(mapTo('code'));

// pluck$.subscribe(console.log);
mapTo$.subscribe(console.log);
