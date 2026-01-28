const arr = [1, 2, 3, 4, 5];

const write = onep => {
    for (let tmp of onep) {
        console.log(tmp);
    }
};

const mul = arr.map(el => {
    return (el * 2);
});

write(mul);

const mul1 = arr.map(function(mtd) {
    return (mtd * 3);
});

write(mul1);

function fc(mtd) {
    return (mtd * 4);
};
const mul2 = arr.map(fc);

write(mul2);