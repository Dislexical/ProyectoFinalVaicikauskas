// funciones y array

const historial = [];

class Operacion{
    constructor(simbolo, numeroA, numeroB, resultado){
        this.simbolo = simbolo;
        this.numeroA = numeroA;
        this.numeroB = numeroB;
        this.resultado = resultado
    }    
}

function sumar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer numero"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA)); 

    do {
        numeroB = parseFloat(prompt("Ingrese el otro numero"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB)); 

    const resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado);

    const operacion = new Operacion("+", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function restar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer numero"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA)); 

    do {
        numeroB = parseFloat(prompt("Ingrese el otro numero"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB)); 

    const resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado);

    const operacion = new Operacion("-", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function multiplicar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer numero"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA)); 

    do {
        numeroB = parseFloat(prompt("Ingrese el otro numero"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB)); 

    const resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado);

    const operacion = new Operacion("*", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function dividir() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer numero"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA) || numeroA === 0);

    do {
        numeroB = parseFloat(prompt("Ingrese el otro numero"));
        if (isNaN(numeroB) || numeroB === 0) {
            alert("Por favor, ingrese un número válido y diferente de cero.");
        }
    } while (isNaN(numeroB) || numeroB === 0);

    const resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado);

    const operacion = new Operacion("/", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function potenciar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese la base"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA)); 

    do {
        numeroB = parseFloat(prompt("Ingrese el exponente"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB)); 

    const resultado = Math.pow(numeroA, numeroB);
    alert(numeroA + " ^ " + numeroB + " = " + resultado);

    const operacion = new Operacion("^", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function raizCuadrada() {
    let numeroA;

    do {
        numeroA = parseFloat(prompt("Ingrese el número"));
        if (isNaN(numeroA) || numeroA < 0) {
            alert("Por favor, ingrese un número válido y no negativo.");
        }
    } while (isNaN(numeroA) || numeroA < 0);

    const resultado = Math.sqrt(numeroA);
    alert("√" + numeroA + " = " + resultado);

    const operacion = new Operacion("√", numeroA, null, resultado);
    historial.push(operacion);
}

function porcentaje() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese el número"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA));

    do {
        numeroB = parseFloat(prompt("Ingrese el porcentaje"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB));

    const resultado = (numeroA * numeroB) / 100;
    alert(numeroB + "% de " + numeroA + " = " + resultado);

    const operacion = new Operacion("%", numeroA, numeroB, resultado);
    historial.push(operacion);
}

function verHistorial(){
    const simbolo = prompt("Elija un simbolo para filtrar historial: \n + sumas \n - restas \n * multipliciones \n / divisiones \n ^ potenciaciones \n √ raízes cuadradas \n % porcentajes");

    const filtrado = historial.filter((elemento) => {
        return elemento.simbolo === simbolo;
    });

    if (filtrado.length === 0) {
        alert("No hay operaciones para el símbolo seleccionado.");
        return;
    }

    let mensaje = '';
    filtrado.forEach((operacion) => {
        mensaje = mensaje + operacion.numeroA + operacion.simbolo + operacion.numeroB + " = " + operacion.resultado + '\n';
    });

    alert(mensaje);
}

function mapear(lista, funcionTransformacion) {
    return lista.map(funcionTransformacion);
}

function obtenerCuadradosDeResultados() {
    const cuadrados = mapear(historial, (operacion) => operacion.resultado * operacion.resultado);
    alert("Cuadrados de resultados en el historial: " + cuadrados.join(', '));
}

function reducir(lista, funcionReduccion, valorInicial) {
    return lista.reduce(funcionReduccion, valorInicial);
}

function sumarResultados() {
    const sumaTotal = reducir(historial, (acumulador, operacion) => acumulador + operacion.resultado, 0);
    alert("La suma total de todos los resultados en el historial es: " + sumaTotal);
}

// variables.
let opcion = parseInt(prompt("Elija una opción: \n 1-ssumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-potenciar \n 6-raiz cuadrada \n 7-porcentaje \n 8-obtener cuadrados \n 9-sumar resultados \n 10-ver historial \n 11-salir "));

while (opcion !== 9) {
    switch (opcion) {
        case 1:
            sumar();
            break;
        case 2:
            restar();
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            dividir();
            break;
        case 5:
            potenciar();
            break;
        case 6:
            raizCuadrada();
            break;
        case 7:
            porcentaje();
            break;
        case 8:
            obtenerCuadradosDeResultados();
            break;
        case 9:
            sumarResultados();
            break;
        case 10:
            verHistorial();
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }

    opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-potenciar \n 6-raiz cuadrada \n 7-porcentaje \n 8-obtener cuadrados \n 9-sumar resultados \n 10-ver historial \n 11-salir "));
}

alert("Finalizando programa, enter para cerrar");