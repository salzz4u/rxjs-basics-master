import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, pluck} from "rxjs/operators";
import {subFunc} from "./helper";

const input = document.getElementById('demo');
const source$ = fromEvent(input, 'keyup');

source$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(subFunc('type'))

