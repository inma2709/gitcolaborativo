
### 2️⃣ Trabajo en equipo con Git
- Cada alumno trabaja **aislado** en su rama
- Los cambios se integran en `develop`
- Solo cuando todo funciona correctamente, se publica en `main`

---

## 🌿 ESTRUCTURA DE RAMAS (CLAVE DEL EJERCICIO)

Este proyecto utiliza un **flujo profesional simplificado**, muy habitual en empresas.

### 🔹 Rama `main`
- Es la **rama estable**
- Representa el producto final
- **NO se trabaja directamente aquí**
- Solo contiene código probado y funcional

👉 En proyectos reales, esta rama es la que está en producción.

---

### 🔹 Rama `develop`
- Es la **rama de integración**
- Aquí se juntan los trabajos de todo el equipo
- Puede cambiar muchas veces durante el desarrollo

👉 Es donde aparecen errores y conflictos.

---

### 🔹 Ramas personales (`nombre` o `feature/nombre`)
- Cada alumno tiene su propia rama
- Aquí se trabaja libremente
- Los errores no afectan al resto del equipo

---

## ❓ ¿QUIÉN CREA LA RAMA `develop`?

👉 **La crea el profesor o el alumno designado como MASTER del proyecto.**

Esto se hace **una sola vez**, al inicio:

```bash
git checkout -b develop
git push -u origin develop
````

A partir de ese momento:

* `develop` ya existe
* Nadie más la crea
* Todo el alumnado parte siempre de `develop`

---

## 👥 ROLES EN EL PROYECTO

### 👨‍🏫 MASTER / MAINTAINER (1 persona)

Es la persona responsable del proyecto.

Funciones:

* Crear la rama `develop`
* Revisar los cambios del equipo
* Aceptar o rechazar *Pull Requests*
* Resolver conflictos de merge
* Hacer el **merge final de `develop` a `main`**

👉 Es la **única persona que puede trabajar sobre `main`**.

---

### 👩‍💻 DESARROLLADORES (RESTO DEL ALUMNADO)

Funciones:

* Crear su rama personal
* Trabajar solo en esa rama
* Subir cambios a `develop`
* Nunca hacer *merge* directo a `main`

---

## 🛠️ QUÉ TIENE QUE HACER CADA ALUMNO (PASO A PASO)

### ✅ Paso 1: Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPO>
```

---

### ✅ Paso 2: Cambiar a `develop` y actualizar

```bash
git checkout develop
git pull origin develop
```

👉 **Siempre se empieza desde `develop`.**

---

### ✅ Paso 3: Crear tu rama personal

Usa tu nombre en minúsculas y sin espacios:

```bash
git checkout -b pedro
```

Esto crea una rama llamada `pedro` **a partir de `develop`**.

---

### ✅ Paso 4: Crear tu página personal

Dentro de la carpeta:

```
/alumnos/tu-nombre.html
```

Ejemplo:

```
/alumnos/pedro.html
```

Haz tu página libremente

⚠️ **NO modifiques**:

* `index.html`
* `styles.css`
* `index.js`
  (salvo que el profesor lo indique)

---

### ✅ Paso 5: Guardar cambios

```bash
git add alumnos/pedro.html
git commit -m "Añade página personal de Pedro"
```

---

### ✅ Paso 6: Subir tu rama al repositorio

```bash
git push -u origin pedro
```

---

### ✅ Paso 7: Subir tu trabajo a `develop`

En GitHub:

* Crear un **Pull Request**
* Rama origen: `pedro`
* Rama destino: `develop`

👉 El *merge* lo hace el **master**, no tú.

---

## 📦 CONCEPTO CLAVE: ÁREA DE SUBIDA

* Tu **rama personal** → tu zona de trabajo
* `develop` → zona común de pruebas
* `main` → producto final

👉 **Nunca trabajes directamente en `main`.**

---

## ⚔️ SEGUNDA FASE: CONFLICTOS DE MERGE (TRABAJO EN EQUIPO)

Para entender los problemas reales del trabajo en equipo:

### 👥 Equipo A

* Dos equipos modifican **el mismo bloque de `index.html`**

### 👥 Equipo B

* Dos equipos modifican **las mismas reglas de `styles.css`**

Todos:

* trabajan desde `develop`
* usan ramas distintas

Resultado:

* aparecen conflictos
* se analizan
* se resuelven en clase

👉 Esto ocurre constantemente en proyectos reales.

---

## 🧾 CHULETA DE COMANDOS GIT (BÁSICA)

```bash
git status          # Ver estado de los archivos
git branch          # Ver ramas
git checkout rama   # Cambiar de rama
git checkout -b x   # Crear nueva rama
git add .           # Preparar cambios
git commit -m "msg" # Guardar cambios
git push            # Subir cambios
git pull            # Traer cambios
```

---

## 🧭 ESQUEMA DEL FLUJO DE RAMAS

```
            main
              ▲
              │
          (merge final)
              │
           develop
        ▲     ▲     ▲
        │     │     │
     pedro   ana   lucia
```

* Nadie trabaja en `main`
* Todos trabajan en su rama
* Todo pasa por `develop`

---

## 📌 NORMA DE ORO

> **Nunca trabajes directamente en `main`.**
> En un proyecto real, eso significa romper producción.



## 🚀 CONCLUSIÓN

Este ejercicio no es solo una práctica técnica.

Es una **simulación real de cómo se trabaja en desarrollo web profesional en equipo**.

Si entiendes este flujo, **entiendes Git en equipo**.

```


