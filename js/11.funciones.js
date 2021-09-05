/* 
    
    
    


    // Reciben Valores
let parametro1 = 1,parametro2= 2;

function nombreFuncionViejo(){
    // Codigo a ejecutar
}

const nombreFuncion = (parametro1,parametro2) => {
    // Codigo a ejecutar

}

    //Devuelven Valores

function nombreFuncionViejo(parametro1,parametro2){
    return parametro1+parametro2;
}
const nombreFuncion = (parametro1,parametro2) => parametro2+parametro2


const saludar = (user) => console.log(`Hola ${user}`)

saludar("Sergio");
saludar("Gerum");

const suma = (num1,num2) => {
    if(num1 == num2){
        return num1+num2
    }
    console.log("No se ejecuta")
    return num1;
}

console.log(suma(7,3))
*/

const suma = (num1, num2) => num1+num2

let resultado = suma(3,6);
console.log(resultado)