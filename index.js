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
    const historialList = document.getElementById('historialList');
    historialList.innerHTML = '';
    historial.forEach((operacion, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${operacion.numeroA} ${operacion.simbolo} ${operacion.numeroB} = ${operacion.resultado}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', () => {
            deleteHistoryItem(index);
        });
        listItem.appendChild(deleteButton);
        historialList.appendChild(listItem);
    });
}

function deleteHistoryItem(index) {
    historial.splice(index, 1);
    guardarHistorial();
    mostrarHistorial();
}

let activeInput = 'numeroA';

function addToInput(num) {
    const input = document.getElementById(activeInput);
    input.value += num;
}

function clearInput() {
    const input = document.getElementById(activeInput);
    input.value = "";
}

function changeInput() {
    activeInput = activeInput === 'numeroA' ? 'numeroB' : 'numeroA';
}

// Obteneiene referencias de los elementos DOM
const operacionSelect = document.getElementById('operacionSelect');
const calcularBtn = document.getElementById('calcularBtn');
const verHistorialBtn = document.getElementById('verHistorialBtn');
const borrarHistorialBtn = document.getElementById('borrarHistorialBtn');
const historialContainer = document.getElementById('historialContainer');
const numeroAInput = document.getElementById('numeroA');
const numeroBInput = document.getElementById('numeroB');

// Evento al hacer clic en el botón "Calcular"
calcularBtn.addEventListener('click', () => {
    const selectedOperation = operacionSelect.value;
    const numeroA = parseFloat(numeroAInput.value);
    const numeroB = parseFloat(numeroBInput.value);


    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('Por favor, ingrese números válidos.');
        return;
    }

    let resultado;

    switch (selectedOperation) {
        case 'sumar':
            resultado = numeroA + numeroB;
            break;
        case 'restar':
            resultado = numeroA - numeroB;
            break;
        case 'multiplicar':
            resultado = numeroA * numeroB;
            break;
        case 'dividir':
            if (numeroB === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = numeroA / numeroB;
            break;
        case 'potenciar':
            resultado = Math.pow(numeroA, numeroB);
            break;
        case 'raizCuadrada':
            resultado = Math.sqrt(numeroA);
            break;
        case 'porcentaje':
            resultado = (numeroA * numeroB) / 100;
            break;
        default:
            alert('Operación no reconocida.');
            return;
    }

    // Muestra resultado en el historial
    const operacion = new Operacion(selectedOperation, numeroA, numeroB, resultado);
    historial.push(operacion);
    guardarHistorial();
    mostrarHistorial();
});

//ver el historial
verHistorialBtn.addEventListener('click', mostrarHistorial);

//borrar todo el historial
borrarHistorialBtn.addEventListener('click', () => {
    historial.length = 0;
    guardarHistorial();
    mostrarHistorial();
});

// Evento para cambiar los campos de entrada
document.getElementById('changeInputBtn').addEventListener('click', () => {
    changeInput();
});

// Cargar historial
cargarHistorial();