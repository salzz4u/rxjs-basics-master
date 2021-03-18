import {interval} from 'rxjs';
import {distinctUntilChanged, map, take} from "rxjs/operators";

const subFunc = (msg, next = true, complete = true) => {
    return {
        next: value => next ? console.log(value) : null,
        complete: () => complete ? console.log('completed: ' + msg) : null
    }
}

const array = [1, 2, 2, 3, 3, '3', 4, 5];

const delayedArrayItem$ = interval(500)
    .pipe(
        take(array.length),
        map(i => array[i]),
        distinctUntilChanged()
    );

delayedArrayItem$.subscribe(subFunc('array'))


