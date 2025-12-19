# gitcolaborativo
Ejercicio de Git colaborativo


una vez en tu rama creas el archivo PRUEBA.html por ejemplo
ahora subes los archivos a tu rama
git add .
git commit -m "cambios"
git push
 

 
ahora vamos a intentar fusionar los cambios en una rama comun
nos movemos a la rama destino
git checkout develop
 
ahora nos traemos los cambios de la rama develop
git pull
 
ya ahora fusionamos los cambios en la rama develop subiendo los cambios propios
git merge monica2
 
 
git push origin develop

 
git merge monica2 -m "Integramos el archivo monica.html en develop"

 

 