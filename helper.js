export const subFunc = (msg, next = true, complete = true) => {
    return {
        next: value => next ? console.log(value) : null,
        complete: () => complete ? console.log('completed: ' + msg) : null
    }
}
