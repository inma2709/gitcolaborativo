# 🚀 Git Colaborativo - Guía Completa

**Flujo de trabajo: `main` (protegida) ← `develop` (abierta) ← ramas individuales**

## 📋 Tabla de Contenidos

- [🎯 Resumen del Flujo de Trabajo](#-resumen-del-flujo-de-trabajo)
- [🏗️ Configuración Inicial](#️-configuración-inicial)
- [👤 Trabajo Individual](#-trabajo-individual)
- [🔄 Integración en Develop](#-integración-en-develop)
- [🚀 Deploy a Main](#-deploy-a-main)
- [⚠️ Gestión de Conflictos](#️-gestión-de-conflictos)
- [📝 Chuleta de Comandos](#-chuleta-de-comandos)
- [🆘 Solución de Errores](#-solución-de-errores)
- [✅ Buenas Prácticas](#-buenas-prácticas)

---

## 🎯 Resumen del Flujo de Trabajo

Este proyecto sigue un **flujo de trabajo Git colaborativo** estructurado:

```
📦 main (protegida) ← solo administradores
    ↑
📦 develop (abierta) ← todos los colaboradores
    ↑
📦 rama-individual ← cada desarrollador
```

### 🔑 Principios Básicos
- ✅ Cada persona trabaja en **su propia rama**
- ✅ Todos integran cambios en **`develop`** (NO protegida)
- ✅ Solo administradores integran **`develop → main`** (SÍ protegida)
- ✅ **Nunca** trabajar directamente en `main` o `develop`

---

## 🏗️ Configuración Inicial

### 1️⃣ Crear Repositorio y Colaboradores

1. **Crear el repositorio** en GitHub
2. **Ir a Settings** → `Collaborators` / `Manage access`
3. **Añadir colaboradores** al equipo
4. **Cada colaborador debe aceptar** la invitación recibida por email

### 2️⃣ Clonar el Repositorio

📌 **Importante**: Todo el equipo debe clonar desde el principio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPO>
```

### 3️⃣ Configurar Protección de Ramas

**Proteger la rama `main`:**

1. Ir a **Settings** → `Branches` → `Branch protection rules`
2. Crear regla con pattern: `main`
3. Activar restricciones necesarias
4. En **Bypass list** añadir administradores del proyecto

---

## 👤 Trabajo Individual

### 1️⃣ Crear Tu Rama Personal

**Opción recomendada** (crear y cambiar en un comando):
```bash
git switch -c tu-nombre
```

**Opción clásica** (dos pasos):
```bash
git branch tu-nombre
git checkout tu-nombre
```

### 2️⃣ Crear y Modificar Archivos

Estando en tu rama, crea tu archivo correspondiente:
```bash
# Ejemplo: crear tu archivo HTML
touch tu-nombre.html
# Editarlo con tu editor favorito
```

### 3️⃣ Confirmar y Subir Cambios

```bash
# Añadir cambios al staging
git add .

# Crear commit con mensaje descriptivo
git commit -m "Añade archivo personal de [tu-nombre]"

# Subir la rama por primera vez
git push -u origin tu-nombre
```

✅ **En este punto**, tu rama ya está subida a GitHub con tus cambios

---

## 🔄 Integración en Develop

> ⚠️ **IMPORTANTE**: El merge siempre se hace **desde la rama destino**, nunca desde la rama personal

### 1️⃣ Cambiar a Develop y Actualizarla

```bash
# Cambiar a develop
git checkout develop (comprueba que estas en develop git branch)

# Traer los últimos cambios
git pull origin develop
```

### 2️⃣ Fusionar Tu Rama

```bash
# Fusionar tu rama en develop
git merge tu-nombre
Esto significa literalmente:

“Trae los cambios de tu-nombre dentro de develop”
```

📝 **Sobre el mensaje de merge**:
- Git genera el mensaje automáticamente
- Si se abre `MERGE_MSG`, simplemente **guarda y cierra** el archivo

### 3️⃣ Subir Develop Actualizado

```bash
git push origin develop
```

---

## 🚀 Deploy a Main

⚠️ **Solo para administradores del proyecto**

Este paso se hace cuando:
- ✅ `develop` está estable y probado
- ✅ No hay conflictos pendientes
- ✅ El trabajo está revisado y aprobado

```bash
# Cambiar a main
git checkout main

# Actualizar main
git pull origin main

# Fusionar develop rama origen desde tu propia rama
git merge develop

# Subir cambios rama destino 
git push origin main
```

---

## ⚠️ Gestión de Conflictos

### 🔍 Identificar Conflictos

Git avisará si hay conflictos durante el merge:
```bash
Auto-merging archivo.html
CONFLICT (content): Merge conflict in archivo.html
```

### 🛠️ Resolver Conflictos

1. **Abrir archivos en conflicto** con tu editor
2. **Buscar las marcas de conflicto**:
   ```
   <<<<<<< HEAD
   Tu código actual
   =======
   Código que intentas fusionar
   >>>>>>> rama-a-fusionar
   ```
3. **Elegir qué código mantener** o combinar ambos
4. **Eliminar las marcas** (`<<<<<<<`, `=======`, `>>>>>>>`)

### 🔄 Finalizar Resolución

```bash
# Marcar conflictos como resueltos
git add .

# Finalizar el merge
git commit
```

---

## 📝 Chuleta de Comandos

### 🔧 Comandos Básicos de Trabajo

**📁 Clonar y empezar**
```bash
git clone <url-del-repo>
cd <nombre-del-repo>
```

**🌿 Gestión de ramas**
```bash
# Ver ramas
git branch

# Crear y cambiar a nueva rama
git switch -c nombre-rama

# Cambiar de rama
git checkout nombre-rama
# o
git switch nombre-rama
```

**✏️ Trabajo con archivos**
```bash
# Ver estado del repositorio
git status

# Añadir archivos al staging
git add archivo.html
git add .  # todos los archivos

# Quitar archivo del staging
git restore --staged archivo.html
```

**💾 Commits**
```bash
# Crear commit
git commit -m "mensaje descriptivo"

# Commit rápido (solo archivos ya conocidos)
git commit -am "mensaje"
```

**⬆️ Subir cambios (push)**
```bash
# Primer push de una rama
git push -u origin nombre-rama

# Push habitual
git push
```

**⬇️ Traer cambios (pull/fetch)**
```bash
# Actualizar rama actual
git pull

# Actualizar rama específica
git pull origin develop

# Traer cambios sin fusionar
git fetch
```

**🔀 Fusionar ramas (merge)**
```bash
# Fusionar una rama en la actual
git merge nombre-rama
```

**🧭 Inspección y ayuda**
```bash
# Ver historial simple
git log --oneline

# Ver historial gráfico
git log --oneline --graph --decorate --all

# Ver diferencias
git diff
```

---

## 🆘 Solución de Errores

### 🔄 Se abre un editor raro (MERGE_MSG / COMMIT_EDITMSG)

**📌 Qué está pasando:**
Git está esperando que confirmes un mensaje de merge o commit.

**✅ Qué hacer:**
1. **NO borres nada**
2. **Guardar** el archivo (`Ctrl + S`)
3. **Cerrar** el editor

👉 El merge o commit se completa automáticamente.

### ❌ `no changes added to commit`

**📌 Qué significa:** Has modificado archivos pero no has hecho `git add`.

**✅ Solución:**
```bash
git add .
git commit -m "mensaje"
```

### ❌ `nothing to commit, working tree clean`

**📌 Qué significa:** No hay cambios nuevos desde el último commit.

**✅ Solución:**
- Modificar algún archivo o
- Comprobar que estás en la rama correcta: `git status`

### ❌ `failed to push some refs` / `non-fast-forward`

**📌 Qué significa:** Tu rama local está desactualizada respecto al remoto.

**✅ Solución:**
```bash
git pull origin develop
# resolver conflictos si los hay
git push
```

### ❌ Conflictos de merge

**✅ Pasos para solucionarlo:**
```bash
git status  # ver archivos en conflicto
# abrir y editar archivos manualmente
git add .   # marcar como resueltos
git commit  # finalizar merge
```

### ❌ He hecho cambios en la rama equivocada

**✅ Si NO has hecho commit:**
```bash
git stash                # guardar cambios temporalmente
git switch nombre-rama   # cambiar a rama correcta
git stash pop            # recuperar cambios
```

**✅ Si YA hiciste commit:**
```bash
git switch nombre-rama
git cherry-pick <hash-del-commit>
```

### 🆘 Comando de emergencia
Si no sabes qué está pasando:
```bash
git status
```

---

## ✅ Buenas Prácticas

### 📋 Rutina Diaria Recomendada

**🌅 Antes de empezar a trabajar:**
```bash
git checkout develop
git pull origin develop
git checkout tu-rama
git merge develop  # opcional: traer últimos cambios a tu rama
```

**🔄 Antes de fusionar a develop:**
```bash
git checkout develop
git pull origin develop
git merge tu-rama
git push origin develop
```

**❌ Si el push falla:**
```bash
git pull origin develop
# resolver conflictos si los hay
git push origin develop
```

### 🎯 Principios Clave

- 🔄 **Actualiza siempre antes de trabajar**: `git pull origin develop`
- 🎯 **Merge desde destino**: El merge se hace desde `develop`, no desde tu rama
- 💬 **Commits descriptivos**: Usa mensajes claros como "Añade formulario de contacto"
- 🚫 **Nunca trabajes en main**: Siempre usa ramas personales
- ⚡ **Resuelve conflictos pronto**: No los acumules

### 🎨 Mensajes de Commit Recomendados

```bash
# Buenos ejemplos
git commit -m "Añade página de contacto"
git commit -m "Corrige error en validación de formulario"
git commit -m "Actualiza estilos del header"
git commit -m "Elimina archivos temporales"

# Evitar
git commit -m "cambios"
git commit -m "fix"
git commit -m "wip"
```

### 🛡️ Riesgos de Develop No Protegido

**⚠️ Al no estar protegida, todos pueden hacer push directo a `develop`:**

- ❌ **Cambios sin revisión** previa
- ❌ **Errores** que afectan a todo el equipo
- ❌ **Conflictos** para otros colaboradores
- ❌ **Historial sucio** con merges innecesarios

**💡 Solución:** Seguir siempre el flujo `rama-personal → develop → main`

---

## 🎓 Frases Clave para Recordar

- 🔄 **"Modificar ≠ guardar en Git"** → hace falta `git add`
- 🎯 **"El merge se hace desde la rama destino"**
- ⬇️ **"Antes de trabajar o fusionar → `git pull`"**
- 💾 **"Si Git abre MERGE_MSG → guardar y cerrar"**
- 🆘 **"¿No sabes qué pasa? → `git status`"**

---

*✨ Recuerda: Git es una herramienta poderosa, pero también predecible. Con práctica y siguiendo estas guías, el trabajo colaborativo será mucho más fluido.*
