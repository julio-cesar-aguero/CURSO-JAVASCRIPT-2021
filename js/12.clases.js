/* 
    Programación Orientada a Objetos
    Clases

    


*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    }
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

const juan = new Persona('Juan', 'García', 25)
const marta = new Persona('Marta', 'García', 25)

console.log(juan)
console.log(juan.saludar())