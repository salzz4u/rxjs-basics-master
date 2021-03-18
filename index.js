import {fromEvent} from 'rxjs';
import {map, sampleTime} from "rxjs/operators";
import {subFunc} from "./helper";

const source$ = fromEvent(document, 'click');

source$.pipe(
    sampleTime(4000),
    map(({clientX, clientY}) => ({
        clientX, clientY
    }))
).subscribe(subFunc('clicked'))

