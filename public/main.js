document.addEventListener("DOMContentLoaded", function () {
    const ingresarBtn = document.getElementById("ingresarBtn");
    const numeroInput = document.getElementById("numeroInput");

    ingresarBtn.addEventListener("click", function () {
        const numeroSeleccionado = numeroInput.value;
        if (numeroSeleccionado) {
            const nuevaVentana = window.open("escritorio.html");
            nuevaVentana.addEventListener("load", function () {
                nuevaVentana.document.getElementById("numeroSeleccionado").textContent = numeroSeleccionado;
            });
        }
    });

    generarTicketsBtn.addEventListener("click", function () {
        const nuevaVentana = window.open("ticket.html");

    });

    pantallaPublicaBtn.addEventListener("click", function () {
        const nuevaVentana = window.open("pantallaPublica.html");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const generarTicketNum = document.getElementById("generarTicketNum");
    let numeroTicket = 1;

    generarTicketNum.addEventListener("click", function () {
        guardarTicket(numeroTicket);
        mostrarNumeroTicket(numeroTicket);
        numeroTicket++;
    });
});

function guardarTicket(numeroTicket) {
    const data = JSON.parse(localStorage.getItem("tickets")) || [];
    data.push(numeroTicket);
    localStorage.setItem("tickets", JSON.stringify(data));
}

function mostrarNumeroTicket(numeroTicket) {
    const numeroTicketElement = document.getElementById("numeroTicket");
    numeroTicketElement.textContent = `${numeroTicket}`;
}

const socket = io();

const generarTicketNum = document.querySelector('#generarTicketNum')

socket.on('connect', () => {
    console.log("En linea");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('saluden', (data) => {
    console.log(data);

});

btnEnviar.addEventListener('click', () => {
    const mensaje = {
        nombre: txtNombre.value,
    }

    socket.emit('saludar', mensaje,(msg) => {

        console.log(msg);
    });
});

btnDia.addEventListener('click', () => {
    

    socket.emit('devuelvaFecha',(msg) => {

        console.log(msg);
    });
});

function upload(files) {

}