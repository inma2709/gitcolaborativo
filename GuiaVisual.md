# 🤝 Ejercicio de Git Colaborativo

Esta guía explica **paso a paso** cómo trabajar con Git de forma colaborativa, añadiendo aclaraciones, ejemplos y elementos visuales para que sea **fácil de entender y agradable de leer**.

---

## 🧩 1. Crear y trabajar en tu propia rama

📌 **Objetivo:** Trabajar de forma segura sin afectar el trabajo de otras personas.

👉 Primero, asegúrate de estar en **tu rama personal** (por ejemplo: `JuanMa`).

```bash
git checkout JuanMa
```

📝 **Ahora crea un archivo nuevo**, por ejemplo:

* `PRUEBA.html`

🧠 *Cada desarrollador trabaja en su propia rama para evitar conflictos.*

---

## 📦 2. Guardar cambios (add + commit)

🖼️ **Flujo visual:**

```
Archivo ➜ Área de preparación ➜ Historial de Git
```

### 🔹 Añadir archivos al área de preparación

```bash
git add .
```

### 🔹 Crear un commit con mensaje

```bash
git commit -m "cambios"
```

✏️ **Consejo:** Usa mensajes claros como:

* `"Añadido PRUEBA.html"`

---

## 🚀 3. Subir los cambios a tu rama remota

📤 Envía tus cambios al repositorio remoto:

```bash
git push
```

🎯 *Hasta aquí, los cambios solo están en tu rama.*

---

## 🔄 4. Cambiar a la rama Develop

📌 **Objetivo:** Compartir tu trabajo con el resto del equipo.

```bash
git checkout develop
```

🧠 *La rama `develop` suele ser la rama común donde se integran los cambios.*

---

## ⬇️ 5. Actualizar la rama Develop

Antes de fusionar, asegúrate de que `develop` esté actualizada:

```bash
git pull
```

🛡️ *Esto evita conflictos con cambios de otros compañeros.*

---

## 🔀 6. Fusionar tu rama con Develop

📌 Fusionamos los cambios de tu rama personal a `develop`:

```bash
git merge JuanMa -m "Nuevos cambios"
```

🖼️ **Esquema visual:**

```
JuanMa ───▶ Develop
```

---

## ⚠️ 7. ¿Qué hacer si hay errores o conflictos?

😵 **Si ocurre un error durante el merge:**

### 🔁 Repite el proceso desde Develop

```bash
git add .
git commit -m "cambios"
git push
```

📌 *Aunque los cambios sean tuyos, ahora se suben desde `develop`.*

---

## 🔄 8. Sincronizar nuevamente si sigue fallando

Si el error persiste, puede que alguien más haya subido cambios.

```bash
git pull
git push
```

🧠 *Esto sincroniza la rama `develop` con el repositorio remoto.*

---

## 🔁 9. Forma alternativa de subir los cambios

📌 Otra manera válida de completar el proceso:

### 🔹 Volver a tu rama

```bash
git checkout JuanMa
```

### 🔹 Empujar directamente a Develop

```bash
git push origin develop
```

🚀 Esto sube el **merge commit** al repositorio remoto.

---

## ✅ Resumen final

✔️ Trabaja siempre en tu rama
✔️ Usa `add`, `commit` y `push`
✔️ Cambia a `develop` para fusionar
✔️ Haz `pull` antes de hacer `merge`
✔️ No tengas miedo a los errores: Git está hecho para solucionarlos 😉

---

🎉 **¡Listo!** Ya sabes cómo trabajar con Git de forma colaborativa y ordenada.
