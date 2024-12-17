// import {sum} from "./01";
//
// test('sum should be correct', () => {
//     //data
//     let a = 1;
//     let b = 2;
//     let c = 3;
//
//     //action
//     const result = sum(a, b);
//
//     //expect result
//     expect(result).toBe(3);
// })

import {mult, sum} from "./01";

test('sum should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})


test('multiply should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})