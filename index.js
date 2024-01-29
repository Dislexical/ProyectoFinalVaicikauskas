// Calculadora
const historial = [];

class Operacion {
    constructor(simbolo, numeroA, numeroB, resultado) {
        this.simbolo = simbolo;
        this.numeroA = numeroA;
        this.numeroB = numeroB;
        this.resultado = resultado;
    }
}

// Funciones
function guardarHistorial() {
    localStorage.setItem('historial', JSON.stringify(historial));
}

function cargarHistorial() {
    const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(...historialGuardado);
}

function mostrarHistorial() {
    historialContainer.innerHTML = '<h1>Historial de Cálculos</h1>';
    historial.forEach((operacion) => {
        historialContainer.innerHTML += `<p>${operacion.numeroA} ${operacion.simbolo} ${operacion.numeroB} = ${operacion.resultado}</p>`;
    });
}

function sumar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer número"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA));

    do {
        numeroB = parseFloat(prompt("Ingrese el otro número"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB));

    const resultado = numeroA + numeroB;
    alert(`${numeroA} + ${numeroB} = ${resultado}`);

    const operacion = new Operacion("+", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
}

function restar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer número"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA));

    do {
        numeroB = parseFloat(prompt("Ingrese el otro número"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB));

    const resultado = numeroA - numeroB;
    alert(`${numeroA} - ${numeroB} = ${resultado}`);

    const operacion = new Operacion("-", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
}

function multiplicar() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer número"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA));

    do {
        numeroB = parseFloat(prompt("Ingrese el otro número"));
        if (isNaN(numeroB)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroB));

    const resultado = numeroA * numeroB;
    alert(`${numeroA} * ${numeroB} = ${resultado}`);

    const operacion = new Operacion("*", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
}

function dividir() {
    let numeroA;
    let numeroB;

    do {
        numeroA = parseFloat(prompt("Ingrese primer número"));
        if (isNaN(numeroA)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroA));

    do {
        numeroB = parseFloat(prompt("Ingrese el otro número"));
        if (isNaN(numeroB) || numeroB === 0) {
            alert("Por favor, ingrese un número válido y diferente de cero.");
        }
    } while (isNaN(numeroB) || numeroB === 0);

    const resultado = numeroA / numeroB;
    alert(`${numeroA} / ${numeroB} = ${resultado}`);

    const operacion = new Operacion("/", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
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
    alert(`${numeroA} ^ ${numeroB} = ${resultado}`);

    const operacion = new Operacion("^", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
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
    alert(`√${numeroA} = ${resultado}`);

    const operacion = new Operacion("√", numeroA, null, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
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
    alert(`${numeroB}% de ${numeroA} = ${resultado}`);

    const operacion = new Operacion("%", numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
}

function verHistorial(){
    // Esta función se ha integrado en el evento del botón correspondiente.
}

function obtenerCuadradosDeResultados() {
    const cuadrados = historial.map((operacion) => operacion.resultado * operacion.resultado);
    alert("Cuadrados de resultados en el historial: " + cuadrados.join(', '));
}

function sumarResultados() {
    const sumaTotal = historial.reduce((acumulador, operacion) => acumulador + operacion.resultado, 0);
    alert("La suma total de todos los resultados en el historial es: " + sumaTotal);
}

// Obtener referencias a elementos del DOM
const operacionSelect = document.getElementById('operacionSelect');
const numeroAInput = document.getElementById('numeroA');
const numeroBInput = document.getElementById('numeroB');
const calcularBtn = document.getElementById('calcularBtn');
const verHistorialBtn = document.getElementById('verHistorialBtn');
const borrarHistorialBtn = document.getElementById('borrarHistorialBtn');
const historialContainer = document.getElementById('historialContainer');

// Evento al hacer clic en el botón "Calcular"
calcularBtn.addEventListener('click', () => {
    const selectedOperation = operacionSelect.value;
    const numeroA = parseFloat(numeroAInput.value);
    const numeroB = parseFloat(numeroBInput.value);

    // Validaciones
    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    let resultado;

    // Realizar operación seleccionada
    switch (selectedOperation) {
        case 'sumar':
            resultado = numeroA + numeroB;
            break;
        // ... (resto de los casos)
    }

    // Mostrar resultado en el historial
    const operacion = new Operacion(selectedOperation, numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
});

// Evento al hacer clic en el botón "Ver Historial"
verHistorialBtn.addEventListener('click', mostrarHistorial);

// Evento al hacer clic en el botón "Borrar Historial"
borrarHistorialBtn.addEventListener('click', () => {
    historial.length = 0;
    guardarHistorial();
    mostrarHistorial();
});

// Cargar historial al inicio
cargarHistorial();