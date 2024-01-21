//calculadora
const historial = [];

class Operacion {
    constructor(simbolo, numeroA, numeroB, resultado) {
        this.simbolo = simbolo;
        this.numeroA = numeroA;
        this.numeroB = numeroB;
        this.resultado = resultado;
    }
}
// funciones
function guardarHistorial() {
    localStorage.setItem('historial', JSON.stringify(historial));
}

function cargarHistorial() {
    const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(...historialGuardado);
}

function actualizarUI(resultado) {

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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
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
    actualizarUI(resultado);
}

function verHistorial(){
    const simbolo = prompt("Elija un símbolo para filtrar historial: \n + sumas \n - restas \n * multiplicaciones \n / divisiones \n ^ potenciaciones \n √ raíces cuadradas \n % porcentajes");

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

function obtenerCuadradosDeResultados() {
    const cuadrados = historial.map((operacion) => operacion.resultado * operacion.resultado);
    alert("Cuadrados de resultados en el historial: " + cuadrados.join(', '));
}

function sumarResultados() {
    const sumaTotal = historial.reduce((acumulador, operacion) => acumulador + operacion.resultado, 0);
    alert("La suma total de todos los resultados en el historial es: " + sumaTotal);
}

// combierte las function para que se hagan botones
const sumarBtn = document.getElementById('sumarBtn');
sumarBtn.addEventListener('click', sumar);

const restarBtn = document.getElementById('restarBtn');
restarBtn.addEventListener('click', restar);

const multiplicarBtn = document.getElementById('multiplicarBtn');
multiplicarBtn.addEventListener('click', multiplicar);

const dividirBtn = document.getElementById('dividirBtn');
dividirBtn.addEventListener('click', dividir);

const potenciarBtn = document.getElementById('potenciarBtn');
potenciarBtn.addEventListener('click', potenciar);

const raizCuadradaBtn = document.getElementById('raizCuadradaBtn');
raizCuadradaBtn.addEventListener('click', raizCuadrada);

const porcentajeBtn = document.getElementById('porcentajeBtn');
porcentajeBtn.addEventListener('click', porcentaje);

const verHistorialBtn = document.getElementById('verHistorialBtn');
verHistorialBtn.addEventListener('click', verHistorial);

const obtenerCuadradosBtn = document.getElementById('obtenerCuadradosBtn');
obtenerCuadradosBtn.addEventListener('click', obtenerCuadradosDeResultados);

const sumarResultadosBtn = document.getElementById('sumarResultadosBtn');
sumarResultadosBtn.addEventListener('click', sumarResultados);

// carga el historial
cargarHistorial();