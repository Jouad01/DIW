import { Animal } from '../modelo/animal.js';

// la funcion devuelve el array de animales en el que definimos cada atributo 
export function GetAnimals() {
    const animal1 = new Animal(1, "Firulais", "M", null, "Perro");
    const animal2 = new Animal(2, "Tigreton", "F", 1124, "Tigre");
    const animal3 = new Animal(3, "Piolin", "M", 415, "Pajaro");
    const animal4 = new Animal(4, "Porky", "M", 341, "Cerdo");
    const animal5 = new Animal(5, "Garfield", "M", null, "Gato");
    const animal6 = new Animal(6, "Silvestre", "M", 551, "Gato");
    const animal7 = new Animal(7, "Pato Lucas", "M", 1334, "Pajaro");

    return [animal1, animal2, animal3, animal4, animal5, animal6, animal7];
}

// getanimal la utilizamos para obtener el animal que queremos mostrar en el detalle
export function getAnimal(idAnimal) {
    const animals = GetAnimals();
    // array.forEach(element => {
    //     if (element.id == idAnimal) {
    //         return element;
    //     }
    // });

    return animals.find(animal => animal.id === idAnimal);
}

// esta es irrelevante, solo fue una prueba
export function getDogs(){
    const animals = GetAnimals();
    return animals.filter(animal => animal.type == "Perro");
}
