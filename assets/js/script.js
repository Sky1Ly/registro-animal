//Selecion de objetos del formulario
let btnAgregar = document.querySelector("#btnRegistrar")
let selected = document.querySelector("#animal")
let edad = document.querySelector("#edad")
let comentarios = document.querySelector("#comentarios")
let animalesSelected = document.querySelector("#Animales")
let audio = document.querySelector("#audioAnimal")
let modalHTML = document.querySelector("#modal")

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
        return this.sonido
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Aullar() {
        return this.sonido
    }
}

class Oso extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Grunir() {
        return this.sonido
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Sisear() {
        return this.sonido
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, imag, comentarios, sonido) {
        super(nombre, edad, imag, comentarios, sonido)
    }

    Chillar() {
        return this.sonido
    }
}

//Función IIFE para cambiar imagen segun el select
let imagenAnimal = (() => {
    //Selecciona recuadro de imagen
    let imagen = document.querySelector("#previeww")

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

//Modal
function modalAnimal(animal, edad, comentario) {
    let modal =  `
    <div class="modal fade" id="staticBackdrop${animal}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="./assets/imgs/${animal}.png" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${animal}</h5>
                            <p class="card-text"><b>${comentario}</b></p>
                            <p class="card-text"><small class="text-body-secondary">Edad: ${edad}</small></p>
                        </div>
                        </div>
                    </div>
                </div> 

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    let modalContainer = document.createElement("div")
    modalContainer.innerHTML = modal

    modalHTML.appendChild(modalContainer)
}

//Card que muestra la imagen del animal
function cardAnimals(animal, sound) {
    return `
    <div class="card text-bg-dark m-3" style="max-width: 160px; z-index: 100">
        <img src="./assets/imgs/${animal}.png" class="card-img" data-bs-toggle="modal" data-bs-target="#staticBackdrop${animal}">
        <div class="card-footer bg-secondary border-success" id="audioAnimal">
            <img src="./assets/imgs/audio.svg" style="max-width: 30px;">
            <audio id="audio${animal}" src="./assets/sounds/${sound}"></audio>
        </div>
    </div>`
}

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
        let animalSelected = selected.value
        let edadAnimal = edad.value
        let comentAnimal = comentarios.value
        let soundAnimal

        switch (animalSelected) {
            case "Leon":
                let leon = new Leon(animalSelected, edadAnimal, "imagen", comentAnimal, "Rugido.mp3")
                soundAnimal = leon.Rugir()
                break;

            case "Lobo":
                let lobo = new Lobo(animalSelected, edadAnimal, "imagen", comentAnimal, "Aullido.mp3")
                soundAnimal = lobo.Aullar()
                break

            case "Oso":
                let oso = new Oso(animalSelected, edadAnimal, "imagen", comentAnimal, "Grunido.mp3")
                soundAnimal = oso.Grunir()
                break

            case "Serpiente":
                let serpiente = new Serpiente(animalSelected, edadAnimal, "imagen", comentAnimal, "Siseo.mp3")
                soundAnimal = serpiente.Sisear()
                break

            case "Aguila":
                let aguila = new Aguila(animalSelected, edadAnimal, "imagen", comentAnimal, "Chillido.mp3")
                soundAnimal = aguila.Chillar()
                break

            default:
                break;
        }

        let dataCard = cardAnimals(animalSelected, soundAnimal)
        modalAnimal(animalSelected, edadAnimal, comentAnimal)

        //Se crea un elemento para la tarjeta y se agrega
        let cardContainer = document.createElement("div")
        cardContainer.innerHTML = dataCard

        //Una vez creado el objeto, se agrega al div padre
        animalesSelected.appendChild(cardContainer)

    } else {
        alert("Debe de completar los datos para poder agregar al animal")
    }
})

// Event listener para reproducir el sonido al hacer clic en el div "audioAnimal"
document.addEventListener("click", function (event) {
    // Verifica si el clic ocurrió en un elemento con el ID "audioAnimal"
    if (event.target.id === "audioAnimal") {
        // Obtiene el audio correspondiente al animal
        let audioElement = event.target.querySelector("audio");
        if (audioElement) {
            // Reproduce el sonido
            audioElement.play();
        }
    }
});
