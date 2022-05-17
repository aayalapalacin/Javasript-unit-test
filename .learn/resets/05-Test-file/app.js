const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

const fromDollarToYen= (cantidadDeYenes) => {
    let dollarValue = 1.2
    let operatoria = dollarValue * cantidadDeYenes
    return operatoria
}
console.log(fromDollarToYen(5));

//fromEuroToDollar-----------------------------------------
const fromEuroToDollar = (cantidadDeEuros) => {
    let euroValue = 904.84 
    let operatoria = euroValue * cantidadDeEuros
    return operatoria
}
//console.log(fromEuroToDollar(10));

//fromYenToPound------------------------------------------
const fromYenToPound= (cantidadDePound) => {
    let yenValue = 127.9
    let operatoria = yenValue * cantidadDePound
    return operatoria
}
//console.log(fromYenToPound(2));
module.exports = { fromYenToPound,fromDollarToYen, sum, fromEuroToDollar };