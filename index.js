import {from} from 'rxjs';
import {distinctUntilKeyChanged} from "rxjs/operators";
import {subFunc} from "./helper";

const source$ = from([{a:1}, {a: 2}, {a:2}, {a:3}, {a:3}, {a:2}, {a:4}, {a:5}]);

const delayedArrayItem$ = source$
    .pipe(
        distinctUntilKeyChanged('a') // skips if prev and current value are the same
    );

delayedArrayItem$.subscribe(subFunc('list'))


