// esta funcion viene siendo una clase donde se crean los objetos de tipo animal
export function Animal(id, name, sex, registerNumber, type) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.registerNumber = registerNumber;
    this.type = type;
}