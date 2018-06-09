
let iterableArray=[
    'some value 1',
    2,
    3,
    '4 - it is 4 value',
    5
];

let iterableObject = {
    title: 'Title 1',
    text:  'Text 1'
};

let testSpread = (a1, a2, a3, a4) => {
    console.log('a1 =', a1);
    console.log('a1 =', a4);
};


testSpread(...iterableArray);
// testSpread([...iterableObj, 'someString']);



let [a, b, ...c] = [1, 2, 3, 4, 5];

console.log('a=', a);
console.log('b=', b);
console.log('c=', c);