//los meses y los dias de la semana empiezan en cero 

//ejemplo dia 0 es domingo y dia lunes es 1

//meses el 0 es enero


//creacion de fecha actual

var actual = new Date();

console.log(actual)

//creemos fechas con cadenas
//IGNORA SI EL DIA DE LA SEMANA ESTA MAL O LOS PARENTESIS 
var d1 = new Date('Wed Mar 29 2020 09:23:34 GMT +0100 (w. Europe Standart Time)')

//SEGUNDA OPCION
var d2 = new Date('October 10 , 1996 10:30:00');

//version 3

var d3 = new Date('January 25 2020')
var d3_1 = new Date('Jan 25 2020')

//podemos separarla por comas dentro de la misma cadena y esta com ase ignoran arriba

var d4 = new Date('2020-10-10') // YYYY / MM /DD

var d5 = new Date('2020/07/10') // YYYY / MM / DD --- DD/MM/YYYY
var d6 = new Date('2016') // LE PASAMOS MES Y AÑO Y EL DIA SE SUSTITUYE POR UNO 
//SI LE PASAMOS SOLO AÑO EL DIA Y EL MES SE SUTITUYEN POR UNO

console.log(d1)
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
console.log(d6)


//como crear fechas con mili segundos
var dms =new Date(8640000000000)
console.log('FECHA EN MILISEGUNDO : ' + dms)

//creacion de fecha con numero

var fechaLarga = new Date(2020 , 10, 10)
console.log(fechaLarga)