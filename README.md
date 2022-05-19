# MyprimerRP 
Configuración Básica

Configurar Nombre que salen en los commits git config --global user.name "dasdo"

Configurar Email git config --global user.email dasdo1@gmail.com

Marco de colores para los comando git config --global color.ui true

Iniciando repositorio

Iniciamos GIT en la carpeta donde esta el proyecto git init

Clonamos el repositorio de github o bitbucket git clone

Añadimos todos los archivos para el commit git add .

Hacemos el primer commit git commit -m "Texto que identifique por que se hizo el commit"

subimos al repositorio git push origin master

GIT CLONE

Clonamos el repositorio de github o bitbucket git clone

Clonamos el repositorio de github o bitbucket ????? git clone git-demo

GIT ADD

Añadimos todos los archivos para el commit git add .

Añadimos el archivo para el commit git add

Añadimos todos los archivos para el commit omitiendo los nuevos git add --all

Añadimos todos los archivos con la extensión especificada git add *.txt

Añadimos todos los archivos dentro de un directorio y de una extensión especifica git add docs/*.txt

Añadimos todos los archivos dentro de un directorios git add docs/

GIT COMMIT

Cargar en el HEAD los cambios realizados git commit -m "Texto que identifique por que se hizo el commit"

Agregar y Cargar en el HEAD los cambios realizados git commit -a -m "Texto que identifique por que se hizo el commit"

De haber conflictos los muestra git commit -a

Agregar al ultimo commit, este no se muestra como un nuevo commit en los logs. Se puede especificar un nuevo mensaje git commit --amend -m "Texto que identifique por que se hizo el commit"

GIT PUSH

Subimos al repositorio git push

Subimos un tag git push --tags

GIT LOG

Muestra los logs de los commits git log

Muestras los cambios en los commits git log --oneline --stat

Muestra graficos de los commits git log --oneline --graph

GIT DIFF

Muestra los cambios realizados a un archivo git diff git diff --staged GIT HEAD

Saca un archivo del commit git reset HEAD

Devuelve el ultimo commit que se hizo y pone los cambios en staging git reset --soft HEAD^

Devuelve el ultimo commit y todos los cambios git reset --hard HEAD^

Devuelve los 2 ultimo commit y todos los cambios git reset --hard HEAD^^

Rollback merge/commit git log git reset --hard <commit_sha>

GIT REMOTE

Agregar repositorio remoto git remote add origin

Cambiar de remote git remote set-url origin

Remover repositorio git remote rm <name/origin>

Muestra lista repositorios git remote -v

Muestra los branches remotos git remote show origin

Limpiar todos los branches eliminados git remote prune origin

GIT BRANCH

Crea un branch git branch

Lista los branches git branch

Comando -d elimina el branch y lo une al master git branch -d

Elimina sin preguntar git branch -D GIT TAG

Muestra una lista de todos los tags git tag

Crea un nuevo tags git tag -a - m "esta es la versión x" GIT REBASE Los rebase se usan cuando trabajamos con branches esto hace que los branches se pongan al día con el master sin afectar al mismo Une el branch actual con el mastar, esto no se puede ver como un merge git rebase Cuando se produce un conflicto no das las siguientes opciones:

cuando resolvemos los conflictos --continue continua la secuencia del rebase donde se pauso git rebase --continue

Omite el conflicto y sigue su camino git rebase --skip

Devuelve todo al principio del rebase git reabse --abort

Para hacer un rebase a un branch en especifico git rebase

OTROS COMANDOS

Lista un estado actual del repositorio con lista de archivos modificados o agregados git status

Quita del HEAD un archivo y le pone el estado de no trabajado git checkout --

Crea un branch en base a uno online git checkout -b newlocalbranchname origin/branch-name

Busca los cambios nuevos y actualiza el repositorio git pull origin

Cambiar de branch git checkout <nameBranch/tagname>

Une el branch actual con el especificado git merge

Verifica cambios en el repositorio online con el local git fetch

Borrar un archivo del repositorio git rm

Fork

Descargar remote de un fork git remote add upstream

Merge con master de un fork git fetch upstream git merge upstream/master