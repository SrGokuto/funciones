//Declaramos la primera función, la cual en este caso, lo clasificará según su peso y especie. Dando por hecho que todos los animales son de engorde
function clasificarPesoEsp(animal) {
    if (animal.especie == "cerdo") {
        if (animal.peso < 80){
            return "ligero"
        } else if (animal.peso >= 80 && animal.peso < 140){
            return "pesado"
        } else {
            return "muy pesado"
        }
    } else if (animal.especie == "pollo"){
        if (animal.peso < 1.5){
            return "ligero"
        } else if (animal.peso >= 1.5 && animal.peso < 3){
            return "pesado"
        } else {
            return "muy pesado"
        }
    } else if (animal.especie == "bobino"){
        if (animal.peso < 350){
            return "ligero"
        } else if (animal.peso >= 350 && animal.peso < 500){
            return "pesado"
        } else {
            return "muy pesado"
        }
    }
}

//Ahora declaramos la segunda función, la cual determinara la alimentación del animal dependiendo su tipo de peso, el cual se determinará usando la función anterior
function tipoAlimentacion(animal) {
    switch (clasificarPesoEsp(animal)) {
        case "ligero":
            return "El animal debe comer más! tiene muy poco peso!";
        case "pesado":
            return "El animal está bien alimentado!";
        case "muy pesado":
            return "El animal está comiendo demasiado! se debe bajar su tasa de alimentación!"
    }
}
//Y como ultima función, hagamos una sencilla que llamaŕa a las anteriores para "calcular" la alimentación de dicho animal
function calcular(animal) {
    console.log("Nombre del animal: " + animal.nombre);
    console.log("Especie del animal: " + animal.especie);
    console.log("Clasificación por peso del animal: " + clasificarPesoEsp(animal))
    console.log("Recomendación de alimentación: " + tipoAlimentacion(animal));
}
//Declaramos las variables a utilizar, en este caso, un object con toda la información del animal
let animal = {
    nombre: "Becky",
    especie: "cerdo", //en el caso de la especie, solo soporta cerdo, pollo y bobino por ahora
    peso: 120,
}

//Ahora, llamamos a la función para calcular, la cual debería devolver todos los datos!

calcular(animal);
