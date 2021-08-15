/* 
    BUCLE FOR OF / FOR IN
        Simplifica el bucle for tradicional sin tener que darle un
        número de vueltas ni realizar un incremento.
    for(let variable of estrcutura){
        Código a ejecutar
    }

        Palabras reservadas de bucles
            
            break - Rompe el bucle
            continue - Salta el ciclo


*/
    let names = ['Paco', 'José','Paula','María'];

    for (const dato in names) {
        console.log(dato);
    }

    