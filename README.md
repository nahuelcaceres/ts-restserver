# Notas

* tsc --init 
    - Nos crea el tsconfig.json
    - Configuraciones minimas que no se bien para que son cada una

* tsc  
    - Esta ejecucion leera el tsconfig.json y actuara en consecuencia

* Luego ya podremos ejecutar con node, el archivo de js generado.

* Instalamos una dependencia de desarrollo
    - npm i tslint --save-dev
    - Instalar typescript de manera local (en modo dev) para que pueda utilizar el tslint del mismo.
    - Inicializamos el archivo de configuracion: ./node_module/.bin/tslint --init
    - Configuracion adicional minima: rules --> "no-console": false
    - npm i --save-dev @types/express  con esto obtenemos todo el tipado de express

* Como lanzar la app
    - tenemos que ejecutar tsc (para hacer la transpilacion)
    - ejecutamos nodemon apuntando al archivo transpilado (o seteamos el main en el package.json)
    - en otra consola, ejecutamos tsc --watch para que este a la escucha de cualquier cambio y compile.


* Mysql + Sequelize ORM
    - npm i --save sequelize
    - npm install --save mysql2