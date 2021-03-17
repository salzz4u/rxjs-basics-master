import {fromEvent} from 'rxjs';
import {map} from "rxjs/operators";

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
    map(({target}) => calculateScrollPercent(target.scrollingElement))
);
const progressBar = document.querySelector('.progressBar');
progress$.subscribe(progress => progressBar.style.width = `${progress}%`);

