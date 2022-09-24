const ataques = document.querySelector('.ataques');

ataques.addEventListener('click', () => {
    const at = document.getElementById('at');
    const fondo = document.getElementById('ficha');
    const contador = document.querySelector('.contador');

    contador.classList.toggle('desaparecer');


    at.classList.toggle('mover');

    fondo.classList.toggle('blur');

})

/* botones contador  */

const incrementar = (cantidad = 1) => {
    const num = document.getElementById('num');
    num.innerHTML = Number(num.innerHTML) + cantidad;
}

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    incrementar(-1);
})

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    incrementar(1);
})


/* Rasgos */

const rasgos = document.querySelector('.rasgos');

rasgos.addEventListener('click', () => {
    const ras = document.getElementById('ras');
    const fondo = document.getElementById('ficha');
    const contador = document.querySelector('.contador');

    contador.classList.toggle('desaparecer');


    ras.classList.toggle('mover2');

    fondo.classList.toggle('blur');

})

/* Magia */

const magia = document.querySelector('.hechizos');

magia.addEventListener('click', () => {
    const mag = document.getElementById('magia');
    const contador = document.querySelector('.contador');

    contador.classList.toggle('desaparecer');

    mag.classList.toggle('movermagia');
})