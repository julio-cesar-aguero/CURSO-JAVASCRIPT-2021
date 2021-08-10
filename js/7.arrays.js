console.log("Arrays")
/* 
    Arrays

    Son estructuras que nos permiten almacenar datos y agruparlos
    ->  Son estructuras que nos permiten almacenar varios datos y agruparlos
    ->  Se declaran con corchetes []
    ->  Se pueden mezclar los tipos de datos pero no es recomendable
    ->  Pueden declararse vacíos o con un contenido
    ->  Pueden añadirse o elminarse elementos en el momento que queramos


        let array   =  []          //Array vacío
        let numeros =  [1,2,3,4,5] //Array incializado

*/
let array = [1,2,3,4,5,1];
let palabras= ['hola','estamos', 'en','youtube']
console.log(array);
console.log(array[2]);
console.log(array[0]+array[1]);
console.log(palabras.length);
console.log(`la palabra ${palabras[3]} tiene ${palabras[3].length} letras`);

/*
    Arrays - Propiedad
        Array.length - devuelve el número de posiciones que contiene el array
*/
console.log(array.length);
/*
    Arrays - Métodos
        Array.isArray() - Devuelve true si la variable es un array.
*/
let number = 4;
console.log(Array.isArray(array));
/*
        Eliminar un elemento
            .shift() - Elimina el primer  elemento del array y devuelve ese elemento.
            .pop()   - Elimina el último elemento de un array y devuelve el elemnto.
*/
console.log(array);
array.shift();
console.log(array);
array.pop();
console.log(array);
/*
        Añadir elementos
            .push(element1, element2,...)   - Añade uno o más elementos al final del array
            y devuelve  la nueva longitud.
            .unshit(element1, element2,...) - Añade uno o más elementos al comienzo del array
            y devuelve  la nueva longitud.
*/
let element = 5
array.push(element)
console.log(array);
array.unshift(1);
console.log(array);
/*
        .indexOf() - Devuelve el primer índice del elemento que coincida con el valor  especificado
        ,  o -1 si nínguno es encontrado.
*/
array.push(1);
console.log(array.indexOf(1));
/*
        .lastIndexOf() - Devuelve el último índice del elemento  que coincida con el valor  especificado
        ,  o -1 si nínguno es encontrado.
*/

console.log(array.lastIndexOf(1));
/*
        .reverse() Invierte el orden de los elementos del Array.
*/
console.log(array.reverse());
/*
        .join(separador) - Devuelve un string con el separador que indiquemos,
        por defecto son comas.
*/ 
console.log(array.join("!"));
/*
        .splice(a,b,ítems) - Cambia el contenido de un array eliminando 
        elementos existentes y/o agregando nuevos elementos.
            a - Indice de inicio
            b - Número de elementos
            ítems - Elementos a añadir en el caso de que se añadan.
*/
console.log(array);
//array.splice(3); - Elimina desde la posición 3 hasta el final
//array.splice(2,2); - Elimina desde la posicion a el número valores que le indiquemos
//array.splice(2,2,10); - Si b es un  valor distinto de 0 elimina el número de valores que indiquemos en b 
//y añade los valores de ítems apartir de la posicion a
// si b vale 0 no elimina nínguno
console.log(array);
/*
        .slice(a,b,ítems) /*- Cambia el contenido de un array eliminando
        elementos existentes y/o agregando nuevos elementos.
            a - Indice de inicio
            b - Número de elementos
            ítems - Elementos a añadir en el caso de que se añadan.
*/
let newNumbers = array.slice(2,5);
console.log(array);
console.log(newNumbers);
