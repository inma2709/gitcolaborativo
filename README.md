hay que crear un repositorio 
añadir como colaboradores al resto del equipo les llega una invitacion que tienen que aceptar
todo el equipo debe tener el repositorio clonado desde el principio
las ramas nacen sin reglas; se modifican en setting y por pattern (patron) se busca la rama a la que vamos a aplicar las reglas. En bypass se indica quien está exento de estas reglas. 

cada colaborador se crea su rama o bien en git o bien en el terminal 
git branch nombre-rama      # Crear rama
git checkout nombre-rama    # Cambiar de rama

una vez en tu rama creas el archivo jesus.html por ejemplo
ahora subes los archivos a tu rama 
git add . 
git commit -m "cambios"
git push 



ahora vamos a intentar fusionar los cambios en una rama comun
nos movemos a la rama destino (develop)
git checkout develop

ahora nos traemos los cambios de la rama develop (estanos en la rama develop)
git pull

ya ahora fusionamos los cambios en la rama develop subiendo los cambios propios
git merge monica2 -m "Integramos el archivo monica.html en develop"

comiteamos los cambio una vez arreglados los conflictos (si no hay )

git commit -m 

empujamos los cambios 

git push origin develop



