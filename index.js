// ===============================
// 1) "Base de datos" en memoria
// ===============================
// Aquí guardamos los alumnos en un array de objetos.
// Cada objeto tiene:
// - name: el nombre que se verá en la tarjeta
// - slug: el nombre "limpio" que usaremos para construir el enlace a su página (pedro.html, ana.html, etc.)
const students = [
  { name: "Marta", slug: "marta" },
  { name: "Carla", slug: "ana" },
  { name: "Jesús", slug: "jesus" },
  { name: "Roberto", slug: "roberto" },
  { name: "Juanma", slug: "juanma" },
  { name: "Miguel", slug: "miguel" },
  { name: "Rodrigo", slug: "rodrigo" },
  { name: "Jaime", slug: "jaime" },
  { name: "Mónica", slug: "monica" },
  { name: "Rubén", slug: "ruben" },
  { name: "Victor", slug: "victor" },
  { name: "Pablo", slug: "pablo" }
];

// ===============================
// 2) Capturamos elementos del HTML
// ===============================
// Con document.getElementById buscamos en el DOM (la página HTML ya cargada)
// los elementos donde vamos a pintar la info y donde el usuario va a escribir.
//
// - grid: el contenedor (div) donde se crean las tarjetas
// - q: el input de búsqueda
// - empty: el mensaje "No hay resultados", que se muestra/oculta según el filtro
const grid = document.getElementById("grid");
const q = document.getElementById("q");
const empty = document.getElementById("empty");

// ===============================
// 3) Función render(list)
// ===============================
// Esta es la función "clave": recibe una lista de alumnos (list) y dibuja
// las tarjetas correspondientes en el contenedor grid.
//
// Importante: NO dibujamos el HTML a mano en index.html.
// Lo generamos con JavaScript, así:
// - el index no se llena de código repetido
// - si cambias students, se actualiza solo
// - es más fácil para un proyecto colaborativo (Git) porque cada alumno
//   solo crea su archivo, y el index se gestiona desde el array.
function render(list) {
  // 3.1) Limpiamos el contenedor para volver a pintar desde cero.
  // Esto evita duplicados cuando buscas o actualizas la lista.
  grid.innerHTML = "";

  // 3.2) Mostramos/ocultamos el mensaje "No hay resultados".
  // - Si list está vacío => mostramos empty (hidden = false)
  // - Si list tiene elementos => ocultamos empty (hidden = true)
  empty.hidden = list.length !== 0;

  // 3.3) Recorremos cada alumno de la lista (list) y creamos una tarjeta <a>.
  // Usamos forEach porque queremos ejecutar una acción por cada elemento.
  //
  // s  = alumno actual (student)
  // i  = posición (0, 1, 2...) -> la usamos para crear el número visible (i + 1)
  list.forEach((s, i) => {
    // 3.4) Creamos un elemento <a> (enlace).
    // ¿Por qué <a> y no <div>?
    // Porque la tarjeta debe ser clicable y llevar a la página del alumno.
    const a = document.createElement("a");

    // 3.5) Le ponemos una clase CSS para que tenga estilo de tarjeta.
    a.className = "student-card";

    // 3.6) Construimos el enlace a la página del alumno usando el slug.
    // Si slug = "pedro" -> href = "pedro.html"
    // Si slug = "ana"   -> href = "ana.html"
    a.href = `alumnos/${s.slug}.html`;

    // 3.7) Definimos el contenido interno de la tarjeta con innerHTML.
    // Incluimos:
    // - un círculo con el número del alumno
    // - el nombre del alumno
    // - una descripción breve
    a.innerHTML = `
      <div class="student-number">${i + 1}</div>
      <h3>${s.name}</h3>
      <p>Perfil profesional y enlaces</p>
    `;

    // 3.8) Añadimos la tarjeta ya completa dentro del grid.
    grid.appendChild(a);
  });
}

// ===============================
// 4) Búsqueda en tiempo real (filtro)
// ===============================
// Escuchamos el evento "input" del buscador.
// Este evento se dispara cada vez que el usuario escribe, borra o pega texto.
//
// El objetivo es filtrar el array students y volver a renderizar
// SOLO los alumnos cuyo nombre incluye el término de búsqueda.
q.addEventListener("input", () => {
  // 4.1) Leemos el texto del input y lo pasamos a minúsculas
  // para que la búsqueda no dependa de mayúsculas/minúsculas.
  const term = q.value.toLowerCase();

  // 4.2) Filtramos el array original (students).
  // Nos quedamos con los alumnos cuyo nombre contiene "term".
  //
  // includes(term) devuelve true si term está dentro del nombre.
  // Ej: "Pedro".toLowerCase() = "pedro"
  // "pedro".includes("pe") -> true
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(term)
  );

  // 4.3) Dibujamos SOLO los resultados filtrados
  render(filtered);
});

// ===============================
// 5) Render inicial
// ===============================
// Al cargar la página, pintamos las 12 tarjetas (la lista completa).
render(students);
