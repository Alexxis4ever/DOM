// 1. Selecciona el elemento id “titulo” y cambia el contenido a “Nuevo titulo”
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo titulo";

// 2. Selecciona todos los elementos p con la clase párrafo, te
// cambia su contenido a texto actualizado y su color a rojo
const elementosParrafo = document.querySelectorAll("p.parrafo");

elementosParrafo.forEach(elemento => {
  elemento.innerHTML = "Texto actualizado";
  elemento.style.color = "red";
});

// 3. Selecciona el primer elemento h2 y añade “ – Editado” a su contenido actual
const h2 = document.querySelectorAll("h2")
if (h2.length > 0) {
    h2[0].textContent = "-Editado"
}

// 4. Selecciona todos los elementos li dentro de un ul y añade un número consecutivo a su contenido
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    const elemento = li[i];
    elemento.textContent = `${i + 1}`;
}

// 5. Selecciona tosos los elementos span que esten dentro de un div y cambia su contenido a “Nuevo texto”
const span = document.querySelectorAll("div span");
span.forEach(elemento => {
    elemento.innerHTML = "Nuevo texto";
});

// 6. Selecciona el ultimo elemento p y añade el texto “Ultimo parrafo”
const pUltimo = document.querySelectorAll("p")
pUltimo[3].textContent = "Ultimo parrafo"


// 7. Selecciona todos los elementos p que tengan al menos una clase y añade un borde punteado de 1px de color naranja.
const elementosPConClase = document.querySelectorAll('p[class]');

elementosPConClase.forEach(elemento => {
    elemento.style.border = '1px dotted orange';
});


// 8. Selecciona todos los elementos de tipo input con un atributo "type" de "text" y cambia su borde a 2px sólido verde.
const elements = document.querySelectorAll("input[type='text']");

elements.forEach(elemento => {
    elemento.style.border = "2px solid green";
});

// 9. Selecciona todos los elementos div que sean hijos directos de un div con la clase "padre" y añade un margen de 10px
const divsHijosDePadre = document.querySelectorAll('.padre > div');

divsHijosDePadre.forEach(div => {
    div.style.margin = '10px';
    div.style.border = '2px solid black'
});
