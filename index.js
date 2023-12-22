// Calculadora

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

function sumar(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)

    const operacion = new Operacion("+" ,numeroA, numeroB, resultado)
    historial.push(operacion)
}

function restar(){ 
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
    
    const operacion = new Operacion("-" ,numeroA, numeroB, resultado)
    historial.push(operacion)
}

function multiplicar(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA * numeroB
    alert(numeroA + " * " + numeroB + " = " + resultado)
    
    const operacion = new Operacion("*" ,numeroA, numeroB, resultado)
    historial.push(operacion)
}

function dividir(){
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
    
    const operacion = new Operacion("/" ,numeroA, numeroB, resultado)
    historial.push(operacion)
}

function verHistorial(){
    const simbolo = prompt("Elija un simbolo para filtrar historial: \n + sumas \n - restas \n * multipliciones \n / divisiones")

    const filtrado = historial.filter((elemento)=>{
        return elemento.simbolo == simbolo
    })


    let mensaje = '';
    filtrado.forEach((operacion)=>{
        mensaje = mensaje + operacion.numeroA + operacion.simbolo + operacion.numeroB + " = " + operacion.resultado + '\n'
    })
    alert(mensaje);
}


// variables.

let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-ver historial \n 6-salir"));

while(opcion !== 6){
    switch(opcion){
        case 1:        
            sumar()
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break;
        case 4:
            dividir()
            break;
        case 5:
            verHistorial()
            break;
        default:
            alert("Opcion incorrecta")
            break;
    }

    opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-ver historial \n 6-salir"));

}

alert("Finalizando programa, enter para cerrar")