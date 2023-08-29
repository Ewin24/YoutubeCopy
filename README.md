Youtube Copy
===
- Authors:  `Edwin Trigos Guevara`

## Directory Hierarchy
```
```
## Code Details

### estilos:

- las tarjetas de youtube no tienen borde por la propiedad "<div class="card mt-2 border-white">"
  tambien puede usarse "tranparent"

- los videos son responsivos por la propiedad grid de bootstrap, en su defecto tambien puede usarse 
  grid-template-columns y un auto-fill

- por el momento no se encuentra integrado el sidebar con la propiedad para ocultar

### codigo JS:

- en el archivo main se encuentra una funcion llamada fetchApi, la cual hace una peticion y retorna
  la respuesta completa en formato JSON, o un error por consola y un JSON local.

- el retorno de la funcion fetchApi es usado para construir el Front de la pagina, pero tambien se 
  deja en la raiz del proyecto un archivo test.json, el cual muestra la misma carga en caso de no conexion a internet o respuesta equivocada del servidor

