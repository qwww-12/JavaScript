const arr = [12, 34, 'k', 67, 21, 212];

var res = arr.every(el => {
    return (el == 12);
})

console.log(res);

res = arr.every(function(el) {
    return (el == 'k');
})

console.log(res);

const method = function(el) {
    return (el <= 90);
}

res = arr.every(method);

console.log(res);