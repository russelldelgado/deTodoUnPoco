//bucles foreach

var calistenis = ["basico" , 'intermedio  ', 'avanzado']

calistenis.forEach(function (datos){
    console.log(datos)
})


//es6

console.log('---------------------------------------------')

for (const iterator of calistenis) {
    console.log(iterator)
}

var numererologia = [1 , 2 ,3 ,4, 5 ,6 , 7 ,  8 , 9 ,10]

for (let numeros in numererologia) {
    console.log(numeros)
 }

 console.log('----------------------------------------')
 var deTodo = numererologia.concat(calistenis)
 deTodo = deTodo.concat(numererologia)

 

 for (let numeros in deTodo) {
    console.log(numeros)
 }

 console.log(calistenis.join('---'))
 console.log(calistenis)


 console.log(calistenis.pop())

 

