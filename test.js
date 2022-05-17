const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 106.15 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const oneDollarEuroValue = 1 / 1.2
    const oneYenDollarValue = oneDollarEuroValue * 127.9
    const expected = oneYenDollarValue * 3.5
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected); //1 dolar son 113.67 yen, entonces 3.5 dolares deberian ser = (3.5 * 113.67)
})
test("1 yen should be 0.0064 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const oneYeneuroValue = 1 / 127.9 
    const oneYenPoundValue = oneYeneuroValue * 0.8
    const expected = oneYenPoundValue * 3.5
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(expected); //1 yen son 0.0065 dolar, entonces 3.5 dolares deberian ser = (3.5 * 0.0065)
})