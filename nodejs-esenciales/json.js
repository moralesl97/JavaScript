class Persona{
    constructor(nombre, apPaterno, apMaterno, email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;

    }

    imprimePersona = function () {
        console.log(this);
    }
}

let persona = new Persona("Luis", "Morales", "Ramos", "morales@gmail.com");
persona.imprimePersona();
let persona2 = new Persona("Eduardo", "Morales", "Ramos", "eduardo@gmail.com");
persona.imprimePersona();
let persona3 = new Persona("Juan", "Perez", "Hernandez", "juanhernandez@gmail.com");
persona.imprimePersona();

let personas = [];
personas.push(persona);
personas.push(persona2);
personas.push(persona3);

console.log(JSON.stringify(personas));