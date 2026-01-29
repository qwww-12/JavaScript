const arr = ['sif', 'logan', 'depth', 'anor londo', 'axe'];

var oindex = arr.findIndex(el => {
    return (el[0] == 'd');
});

console.log(`n of index: ${oindex}`);

var oindex = arr.findIndex(function(el) {
    return (el[1] == 'o');
});

console.log(`n of index: ${oindex}`);

function myfunction(el) {
    return (el === 'sif');
}

var oindex = arr.findIndex(myfunction);

console.log(`n of index: ${oindex}`);