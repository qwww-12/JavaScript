let myObj = {
    var1: 89,
    var2: 'hello',
    var3: ['a', 78, 'array'],
    var4: false
};

myObj.var1 = 90;

myObj['var2'] = 'new string';

console.log(myObj['var4']);

myObj.newVar = 21;

console.log(myObj.newVar);

delete myObj.var1;

console.log('value is: ' +
    myObj.var1); // undefined





let newObj = {
    fmethod: function() { // anon function
        console.log('first method');
    },
    smethod: () => { // arrow function
        console.log('second method');
    },
    lmethod() {
        console.log('last method');
    },
    emetho: function test() {
            console.log('work?');
        }
        // function testt() {
        //     console.log('not work');
        // }
};

newObj.lmethod();
newObj.emetho();

let nobj = {
    o: {
        name: "bob"
    },
    h: {
        name: "sif"
    },
    arrayOfobj: [{ name1: 'v', name2: 'g' }, { name1: 'c' }]
};

console.log(nobj.o.name);
console.log(nobj.h.name);
console.log(nobj.arrayOfobj[0].name1);
console.log(nobj.arrayOfobj[1].name1);