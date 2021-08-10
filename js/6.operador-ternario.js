console.log("Operador ternario")

/*      
    Operador ternario
        
        
        (condicion) ? true : false

        (condicion) ? 
            (primera sentencia,
            segunda sentencia)
            :
            (primera sentencia,
            segunda sentencia)
*/
let num = 3;
    
    (num % 2 == 0) ? 
    (
        console.log(`${num} es par`) ,
        console.log(`${num} es par 2`)
    )
        : 
    (
        console.log(`${num} es inpar`) ,
        console.log(`${num} es inpar 2`)
    )
