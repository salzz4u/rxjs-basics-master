import {from} from 'rxjs';
// import 'regenerator-runtime/runtime'

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
function* hello() {
    yield 'Hello';
    yield 'World';
}

const iterator = hello();

const df = from(iterator).subscribe(console.log);
