const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

const fromDollarToYen= (dollar) => {
    const oneDollarEuroValue = 1 / 1.2
    const oneYenDollarValue = oneDollarEuroValue * 127.9
    return oneYenDollarValue * dollar 
}
console.log(fromDollarToYen(5));

//fromEuroToDollar-----------------------------------------
const fromEuroToDollar = (euros) => {
    let dollarValue = 1.2 
    let operator = dollarValue * euros
    return operator
}
//console.log(fromEuroToDollar(10));

//fromYenToPound------------------------------------------
const fromYenToPound= (Yen) => {
    const oneYeneuroValue = 1 / 127.9 
    const oneYenPoundValue = oneYeneuroValue * 0.8
    return oneYenPoundValue * Yen}
//console.log(fromYenToPound(2));
module.exports = { fromYenToPound,fromDollarToYen, sum, fromEuroToDollar };