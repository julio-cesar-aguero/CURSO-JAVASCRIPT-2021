/*Métodos y propiedades de los String

    método: es todo aquello que la cadena puede hacer. Ej: convertirse en mayusculas.
    propiedad: Son las características que la cadena tiene por ser cadena.

        se emplea la nomenclatura .
        
            cadena.método()
            cadena.propiedad
*/
        let cadena = "Hola mundo";
        console.log(cadena);

/*
    Propiedades

        length -> Devuelve la longitud de la cadena
*/
console.log(cadena.length);
/*

    Métodos
    
        Todos los métdos devuelven una cadena nueva, la cadena
        original no será modificada.

        toUpperCase() -> Devuelve la cadena a mayúsculas
*/
console.log(cadena.toUpperCase());
/*
        indexOf(string) -> Devuelve la posición en la que se
        encuentra el string, sí no lo encuentra devuelve -1
*/
console.log(cadena.indexOf('m'));

/*
        replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de 
        la cadena que le digamos y pone el valor nuevo
*/
console.log(cadena.replace('mundo','youtube'));
/* 
        substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin
        (el final no se incluye)

        Si no se incuye un final extrae hasta el final
*/
console.log(cadena.substring(3,6));
/* 
        slice(inicio [,fin]) -> Igual que substring pero admite valores negativos,
        si ponemos valores negativos comenzara desde atras

        Si no se incluye el final extrae hasta el final

            (2, -4) -> empieza a contar en el tercer caracter y los
            4 ultimos no los considera
*/
console.log(cadena.slice(-3));
console.log(cadena.slice(0,-3));
/*
        trim() -> Elimina los espacios al inicio y al final de la cadena

*/
let cadena2 = "    Hola youtube estamos trabajando con cadenas";
console.log(cadena2);
console.log(cadena2.trim());
/* 
                -- ES6 --
        
        startsWith(valor, [, longitud]) -> Sirve para saber si la cadena
        empieza con ese valor. Devuelve true o false
*/
console.log(cadena.startsWith('H'))
/*
        endsWith(valor, [, longitud]) -> Sirve para saber si la cadena
        termina con ese valor. Devuelve true o false
*/
console.log(cadena.endsWith('o'))
/*
        includes(valor, [,inicio]) -> Igual que IndexOf pero devuelve
        true or false
*/
console.log(cadena.includes('n'));
/*
        repeat(valor) -> Repite el string el número de veces que le 
        indiquemos.
*/

let cadena3 = "Hola"
console.log(cadena3.repeat(3))
/*
        template strings
*/
let nombre = "julio cesar";
let apellido = "Agüero Gómez";
let edad = 23;

console.log("Hola " + nombre + " " + apellido+". Tienes " + edad + " años. ");
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad+1} años.`);
