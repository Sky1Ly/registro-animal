//Clase Padre
class Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._imag = imag
        this._comentarios = comentarios
        this._sonido = sonido
    }

    get nombre() {
        return this._nombre
    }

    get edad() {
        return this._edad
    }

    get imag() {
        return this._imag
    }

    set comentarios(newComentario) {
        this._comentarios = newComentario
    }

    get sonido() {
        return this._sonido
    }
}

//Clases animales que extienden de Animal
class Leon extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Rugir() {

    }
}

class Lobo extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Aullar() {

    }
}

class Oso extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Grunir() {

    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    sisear() {

    }
}

class Aguila extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Chillar() {

    }
}

//Función IIFE para cambiar imagen segun el select
let imagenAnimal = (() => {
    //Selecciona recuadro de imagen
    let imagen = document.querySelector("#preview")

    return {
        agregaImagen(selected) {
            //Evento para detectar cambios en la selección
            selected.addEventListener("change", function () {
                let selectedOption = this.options[this.selectedIndex]
                imagen.innerHTML = `<img src="./assets/imgs/${selectedOption.value}.png" style="object-fit: cover; width: 100%">`
            })
        }
    }
})()

//Selecion de objetos del formulario
let btnAgregar = document.querySelector("#btnRegistrar")
let selected = document.querySelector("#animal")
let edad = document.querySelector("#edad")
let comentarios = document.querySelector("#comentarios")

//Llamado función IIFE
imagenAnimal.agregaImagen(selected)

//Validación de registro
btnAgregar.addEventListener("click", function () {
    let isValid = false

    //Valida cada parámetro que contenga los datos
    if (selected.selectedIndex != 0) {
        if (edad.selectedIndex != 0) {
            if (comentarios.value != "") {
                isValid = true
            }
        }
    }

    //si isValid continua falso, es porque no pasó algun parametro
    if (isValid) {
        alert("Datos Correctos")
    } else {
        alert("Debe de completar los datos para poder agregar al animal")
    }
})