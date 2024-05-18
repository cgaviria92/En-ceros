# Angular: administracion-usuarios

====================================

Su objetivo es:

- Construir una aplicación en Angular consumiendo los servicios fake api [https://reqres.in/](https://reqres.in/)\*\*
- Usar la librería gráfica [h8k-design](https://h8k-design.vercel.app/demo.html) y diseñar su aplicación de tal manera que sea responsive.\*\*
- En el código fuente se encontrará con indicaciones que serán primordiales para el desarrollo prueba, entre ellas encontra que los ID de los elementos no pueden modificarse o que hay métodos que no se les debe cambiar el nombre. Estas instrucciones las encontrará como comentarios en cada uno de los archivos que debe modificar.\*\*
- Intente entender la estructura y adaptarte a ella, ya existen clases y archivos creados que te irán guiando como desarrollar los requirimientos (la arquitectura usada es esta https://angular.io/guide/styleguide#overall-structural-guidelines)

**Los requerimientos que debe desarrollar son los siguientes**

# 1. Login

Se requiere un login que permita ingresar correo y contraseña

    1.  Debe tener 3 validaciones “Email is required” , “Password is required” y “The minimum of characters will be 8” estos mensajes deben aparecer al lado del input cuando este sea invalido.
    2.  Debe almacenar el token en el localStorage con el nombre “token”.
    3.  Si el token no está almacenado, debe redirigir inmediatamente login. (Usar Guard)
    4.  El token debe enviarse en cada petición siguiente al api en un header llamado “Authorization”

# 2. NavBar: 

Se requiere un navbar por la cual moverse dentro de la aplicación (crear y listar usuario), además desde este se debe poder cerrar sesión.

    1.  Cuando se cierre la sesión debe limpiar los elementos del localStorage  y redirigir al login

# 3. List User:

Se requiere listar los usuarios en una tabla para esto se debe usar la api con el servicio de list

    1.  Se debe mostrar correo, nombre, imagen de la persona y botón de eliminar.
    2.  Cada vez que elimine un usuario debe levantar una alerta de notificación con el nombre de usuario que eliminó (usar el api con el servicio de delete).
    4.  Se requiere un campo para poder buscar por nombre, este debe implementar un pipe que haga dicho filtro

# 5. Create User: 

Se requiere crear usuarios mediante un formulario (para esto se debe usar el servicio post de crear)

    1.  Debe tener 2 validaciones “Name is required” y “Job is required” estos mensajes deben aparecer al lado del input cuando este sea invalido
    2.  El botón de crear debe estar deshabilitado si todos los campos son inválidos
    3.  Una vez creado un usuario debe levantar una alerta con el nombre de este, y redirigir al listado de usuarios

# 6. Opcional pero valorable

    1. Realizar pruebas unitarias a los componentes, servicios, pipes, etc. Estas pruebas deben tener el patron AAA
    2. En caso de que una clase o método no necesite prueba unitaria ya que no aporta valor, no la haga, pero tiene que sustentar el porqué
    3. realizar pruebas funcionales e2e

**Importante: toda la asincronía de la prueba se debe construir con promesas y asyn/await. De esta manera se califica en las pruebas automatizadas.**

###### **Conceptos a evaluar**

- **Cumpliento de los requerimientos**: para esto hay 14 pruebas automatizadas en la carpeta *hacker-rank/test* , las cuales son las encargadas de validar que usted cumpla con cada uno de los requerimientos. Estas pruebas se encuentran fallando y su objetivo es hacerlas funcionar correctamente. Usted puede irlas ejecutando e ir validando que vaya cumpliendo los requerimientos.

Asegurese que al momento de enviar el código la tarea Test y Build de Npm ejecutan correctamente, esta es la manera de evaluar la prueba. Además cuando termine la prueba, ejecute la tarea Run Test desde hackerrank.\*\*

- **Código limpio: valoramos que su código sea mantenible y con principios de código limpio.**
- **Arquitectura: valoramos que su arquitectura propuesta demuestre una correcta separación de responsabilidades.**
- **Te recomendamos hacer uso del principio de responsabilidad única**
- **Pruebas unitarias y funcionales automatizadas (deseable): valoramos si logra construir pruebas unitarias y funcionales a su lógica de negocio**
- **Si el sistema identifica que la prueba no ha sido desarrollada por usted inmediatamente se cancela el proceso de selección**

**Nota importante:**

- Estos archivos no podrán ser modificados por usted, son archivos de solo lectura  
  **hacker-rank/test**: en esta carpeta se encuentran las pruebas automatizadas encargadas de calificar la prueba, usted podrá ir ejecutando estas pruebas para ir verificando el avance y completitud de la solución. Pero no podrá modificar nada de esta clase.

**Tecnologias a usar:**

- Angular17

### Software Instructions

- Angular CLI Version: 17.0.2
- Angular Core Version: 17.0.2
- Node Version: v18(LTS)
- Default Port: 8000
