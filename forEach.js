const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(el => {
    console.log(`I want to eat a ${el}`);
});

fruits.forEach(function(el) {
    console.log(`I want to eat a ${el}`);
});


function test(el) {
    console.log(`I want to eat a ${el}`);
}
fruits.forEach(test);