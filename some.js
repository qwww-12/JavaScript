const arr = [12, 34, 'k', 67, 21, 212];

var res = arr.some(el => {
    return (el > 7);
})

console.log(res);

res = arr.some(function(el) {
    return (el > 67);
})

console.log(res);

res = arr.some(method);

function method(el) {
    return (el === 0);
}

console.log(res);