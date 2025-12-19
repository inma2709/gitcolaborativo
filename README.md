# gitcolaborativo
Ejercicio de Git colaborativo


una vez en tu rama creas el archivo PRUEBA.html por ejemplo
ahora subes los archivos a tu rama
<<<<<<< HEAD
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

 

 
=======
        git add .
Comitea con mensaje
        git commit -m "cambios"
Empujas a tu rama
        git push

Cambiamos a la rama Develop para compartir cambios 
        git checkout develop
Nos traemos los cambios de nuestra rama a la rama develop
        git pull
Fusionamos los cambios en la rama Develop, de nuestra rama
        git merge JuanMa -m "Nuevos cambios"

Si da error hacemos commit nuevamente y push:

Nos cambiamos a nuestra rama 
        git checkout JuanMa
Empujamos los cambios de la rama Origen
        git push origin develop

>>>>>>> JuanMa
