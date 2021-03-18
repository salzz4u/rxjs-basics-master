import {asyncScheduler, fromEvent} from 'rxjs';
import {map, tap, throttleTime} from "rxjs/operators";

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

function calculateScrollPercent(elem) {
    const {clientHeight, scrollTop, scrollHeight} = elem;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    throttleTime(30, asyncScheduler, {
        leading: false, trailing: true
    }),
    map(({target}) => calculateScrollPercent(target.scrollingElement)),
    tap(console.log)
);
const progressBar = document.querySelector('.progressBar');
progress$.subscribe(progress => progressBar.style.width = `${progress}%`);

