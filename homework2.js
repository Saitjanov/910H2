let aa = 'aaa@bbb@ccc'

console.log(
    aa.slice(0,3) + '!',
    aa.slice(4,7) + '!',
    aa.slice(8,11)
);



let str = 'HELLOWORLD'
console.log(
    str.slice(str.search('H'), str.search('H') + 1).toUpperCase() +
    str.slice(str.search('ELLO'), str.search('ELLO') +4).toLowerCase() + 
    str.slice(str.search('WORLD'), str.search('WORLD') +9).toLowerCase()
);

let txt = 'Hello, it is HTML'

console.log(
    txt.slice(txt.search('Hello, it is'), txt.search('Hello, it is') + 13) + 'not Js'
);


let a = 'alex'

console.log(
    a.slice(0,1).toUpperCase() + 'lex'
);



let c = Math.random()
c = c.toString()
console.log(
    c.slice(0,3)
);
