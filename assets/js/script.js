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
(() => {
    //Selecciona recuadro de imagen
    let imagen = document.querySelector("#preview")

    //Selecciona el select del formulario
    let selected = document.querySelector("#animal")

    //Evento para detectar cambios en la selección
    selected.addEventListener("change", function () {
        let selectedOption = this.options[this.selectedIndex]
        imagen.innerHTML = `<img src="./assets/imgs/${selectedOption.value}.png" style="object-fit: cover; width: 100%">`
    })
})()

