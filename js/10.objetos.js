/* 
        OBJETOS
    
    
    Son estructuras de datos que representan propiedades, valores y acciones
    que puede realizar el objeto



*/
const person = {
    name: 'Juan',
    age: 24,
    sons: ['zoe','gerum','Pepe','Rosa','Tomas']
}

/*
for(const key in person){
    console.log(person[key])
}

for(const son of person.sons){
    console.log(son);
}
*/
console.log(`hola ${person.name}. Tienes ${person.age} años y tus
hijos se llaman ${person.sons.join(' , ')}`)
