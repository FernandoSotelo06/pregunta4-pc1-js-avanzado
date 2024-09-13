
let actividades = [
    { nombre: "Actividad-1", completado: false },
    { nombre: "Actividad-2", completado: false },
    { nombre: "Actividad-3", completado: false },
    { nombre: "Actividad-4", completado: false },
    { nombre: "Actividad-5", completado: false },
    { nombre: "Actividad-6", completado: false },
    { nombre: "Actividad-7", completado: false },
    { nombre: "Actividad-8", completado: false },
    { nombre: "Actividad-9", completado: false },
    { nombre:"Actividad-10", completado: false }
];


function agregarActividad() {
    const input = document.getElementById('nuevaActividad');
    const nombre = input.value.trim();

    if (nombre) {
        actividades.push({ nombre: nombre, completado: false });
        input.value = '';
        mostrarActividades();
    }
}


function marcarComoCompletada(index) {
    actividades[index].completado = !actividades[index].completado;
    mostrarActividades();
}


function mostrarActividades() {
    const container = document.getElementById('actividadContainer');
    container.innerHTML = ''; 

    actividades.forEach((actividad, index) => {
        const div = document.createElement('div');
        div.classList.add('actividad');
        
        const texto = document.createElement('span');
        texto.textContent = actividad.nombre;
        if (actividad.completado) {
            texto.classList.add('completada');
        }

        const boton = document.createElement('button');
        boton.textContent = actividad.completado ? 'Desmarcar' : 'Completar';
        boton.onclick = () => marcarComoCompletada(index);

        div.appendChild(texto);
        div.appendChild(boton);
        container.appendChild(div);
    });
}

mostrarActividades();
