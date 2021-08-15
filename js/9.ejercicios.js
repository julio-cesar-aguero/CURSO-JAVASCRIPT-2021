/* 
    1.- Solicita un nombre, la edad y muestra por consola
    el mensaje "Hola ______, tienes ____ años y el año que
    viene tendrás _____ años".
    Realiza el ejercicio con prompt(mensaje) y haz uso de los
    template strings.
*/
/*
    SOLUCIÓN 1

let nombre = prompt('Introduzca su nombre');
let edad = parseInt(prompt('Introduzca su edad'));

    console.log(`Hola ${nombre}. Tienes ${edad} años. y el año viene
                y el año que viene tendrás${edad=edad+1}`)

/*  
    2. Escribe un programa que pueda calcular el área de 3 figuras
    geométricas, triángulo, rectangulo y círculo. En primer lugar pregunta
    de que figura se quiere calcular el área, despues solicita los datos que necesites 
    para calcularlo.
        triagulo = b * h/2
        rectangulo = b* h
        circulo = pi * radio al cuadrado

    SOLUCIÓN 2
*/
/*
let figure = prompt('Introduce la figura de la que quieres saber el area: triangle, rectangle, circle');

let base;
let height;
let radius;
let area;

    switch(figure){
        case 'triangle':
            base = parseInt(prompt('Introduzca la base del triangulo'));
            height = parseInt(prompt('Introduzca la altura del triangulo'));
            area=(base*height)/2;
            console.log("el area es:"+area);
        break
        case 'rectangle':
            base = parseInt(prompt('Introduzca la base del rectangulo'));
            height = parseInt(prompt('Introduzca la altura del rectangulo'));
            area=(base*height);
            console.log("el area es:"+area);
        break
        case 'circle':
            radius = parseInt(prompt('Introduzca el radio del círculo'));
            area=Math.PI*Math.pow(radius,2);
            console.log("el area es:"+area);
        break
        default: console.log('la figura no es valida');

    
    }
*//*
    SOLUCIÓN 3

    3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta
    ese número con el mensaje "es par" o "es impar"
        si el número es 5 el resultado será:

        1 - es impar
        2 - es par
        3 - es impar
        4 - es par 
        5 - es impar

let numero = parseInt(prompt('Ingresa un número'))

for(let i=1;i<=numero;i++){
    if(i%2==0){
        console.log("Es par "+i);
    }else{
        console.log("Es impar "+i);
    }
}

    SOLUCION 4

    4 - Escribe un programa que pida un número entero mayor que 1
    y que escriba si el número primo o no.
        Un número primo es aquel que solo es divisible por si mismo y la unidad


let numero = parseInt(prompt('Ingresa un número'))
let divisores = 0
if(numero == 1) console.log("El número no es valido")
else{
for(let i = 2; i < numero ; i++){
    if(numero%i==0){
        console.log(`${numero} / ${i} = ${numero/i} No es primo`)
        divisores++
        break
    }
}
}
if(divisores==0) console.log(num+" Es Primo") 

    SOLUCION 5

    5. Escribe un programa que pida un número entero mayor que cero y
    calcule su factorial.
        El factorial es el resultado de multiplicar ese número por
        sus anteriores hasta la unidad

        !5 = 5*4*3*2*1 = 120




let factorial = parseInt(prompt('Ingrese el número que desee saber su factorial'))

for(let i=factorial-1;i>0;i--){
    factorial*=i;
    console.log(`${i} factorial ${factorial}`);
}

    SOLUCION 6

    6. Escribe un programa que permita ir introduciendo una serie de indeterminados números 
    mientras su suma no supere 50. Cuando esto ocurra 
    se debe mostrar el total acumulado y el contador de cuantos números se han introducido

    
        
        let suma = 0;
        let cont = 0;
    
        while(suma<50){
            suma += parseInt(prompt('Introduzca un numero'))
            cont++;
        }
        console.log(suma)
        console.log(cont)

    SOLUCION 7 

    Crea 3 arrays. el primero tendra 5 números y el
    segundo se llamará pares y el tercero impares,
    ambos estaran vacíos. Despues multiplica cada uno
    de los números del primer array por un número  aleatorio
    entre 1 y 10, si el resultado es par 
    guarda ese número en el array de pares y si es impar
    en el array de impares. Muestra por consola:

        - la multiplicación que se produce junto con su resultado
        con el formato 2 x 3 = 6
        - el array de pares e impares



const numeros = [3,43,21,20,56]
let pares = []
let impares = []

for(const number of numeros){
    let random = Math.round(Math.random() * 10 + 1)
    const result = number * random
    console.log(`${number} x ${random} = ${number*random}`)
    if(result%2 == 0){
        pares.push(result);
    }else{
        impares.push(result);
    }
}
console.log(pares)
console.log(impares)


    SOLUCION 8
    8 .- Dado un  array de letras, solicita un número de DNI y calcula que
    letra le corresponde. El número no puede ser negativo ni tener más de 8
    digitos. la posicion de la letra es el resultado del módulo del número
    introducido entre 23


    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','8','N','J','Z','S','Q','V','H','L','C','K','E','T']

    const dni = prompt('Introduce tu dni')
    
    if(dni.length == 8 && parseInt(dni)>0){
        console.log(`Tu dni completo es: ${dni}${letras[dni%23]}`)
    }

    SOLUCION 9

    9 .- Solicitar al usuario una palabra y mostrar por consola el número de consonantes
    vocales y longitud de la palabra
    
const palabra = prompt('palabra').toLowerCase();

let consonantes = 0
let vocales = 0

for (const letra of palabra) {
    if(letra == 'a' || letra == 'e' || letra == 'i'|| letra == 'o'||letra == 'u'){
        console.log("vocal:"+letra)
        vocales++
    }else consonantes++
}
console.log("vocales:     "+vocales);
console.log("consonantes: "+consonantes);

    SOLUCION 10

    10 .- Dado un  array que contiene ["azul","amarillo", "rojo", "verde", "rosa"]
    determinar si un color introducido por el usuario a través de un promt se encuentra dentro del array o no. 

    const colors  = ["azul","amarillo", "rojo", "verde", "rosa"]
    const color = prompt('introduce un color').toLowerCase()
    if(colors.indexOf(color) !== -1 ){
    console.log('Tu color se encuentra');
    }else{
        console.log('Tu color no se encuentra');
    }
*/