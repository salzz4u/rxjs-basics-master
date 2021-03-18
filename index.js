import {fromEvent} from 'rxjs';
import {throttleTime} from "rxjs/operators";
import {subFunc} from "./helper";

const source$ = fromEvent(document, 'click');

source$.pipe(
    throttleTime(3000),
).subscribe(subFunc('clicked'))

