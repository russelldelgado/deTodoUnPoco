var numeros = [2 , 2, 3 , 4 ,54 , 345, 323]

 max = (...numeros) =>{

    if(numeros.length ==0){
            return 0;
    }

    let max = numeros[0];

    for (let index = 1; index < numeros.length; index++) {

        if(numeros[index] > max){

            max= numeros[index]
        }
    }
    return max;

}


console.log(max(5 , 4 ,4 ,543235, 4,5,2,  34,5,2 ,  45, 4))