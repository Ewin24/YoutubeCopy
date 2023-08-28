Youtube Copy
===
- Authors:  `Edwin Trigos Guevara`

## Directory Hierarchy
```
|—— assets
|    |—— hq720.webp
|    |—— icons
|        |—— advertencia.png
|        |—— ayudar.png
|        |—— banderas.png
|        |—— bell-regular-24.png
|        |—— cast.png
|        |—— configuraciones.png
|        |—— consola.png
|        |—— en-vivo.png
|        |—— history-regular-24.png
|        |—— home-solid-24 (1).png
|        |—— home.svg
|        |—— icons8-youtube.png
|        |—— idea.png
|        |—— library.png
|        |—— like-regular-24.png
|        |—— menu-regular-36.png
|        |—— nota-musical.png
|        |—— periodico.png
|        |—— search.png
|        |—— share.png
|        |—— Shorts.png
|        |—— show-more.png
|        |—— suscription.png
|        |—— tendencias.png
|        |—— trofeo.png
|        |—— user-account.png
|        |—— video-plus-regular-24.png
|        |—— voice-search.png
|        |—— watch-later.png
|        |—— yourvideos.png
|        |—— youtube-kids-removebg-preview.png
|        |—— Youtube-Music-Logo.png
|        |—— youtube-studio-removebg-preview.png
|        |—— YouTubeLogo.png
|        |—— Youtube_logo.png
|    |—— img
|        |—— auron.png
|        |—— freeCode.png
|        |—— soyDalto.png
|        |—— theLateLateShow.png
|        |—— tonigthShow.png
|        |—— video.mp4
|    |—— unnamed.jpg
|—— bootstrap-5.3.1-dist
|    |—— css
|        |—— bootstrap-grid.css
|        |—— bootstrap-grid.css.map
|        |—— bootstrap-grid.min.css
|        |—— bootstrap-grid.min.css.map
|        |—— bootstrap-grid.rtl.css
|        |—— bootstrap-grid.rtl.css.map
|        |—— bootstrap-grid.rtl.min.css
|        |—— bootstrap-grid.rtl.min.css.map
|        |—— bootstrap-reboot.css
|        |—— bootstrap-reboot.css.map
|        |—— bootstrap-reboot.min.css
|        |—— bootstrap-reboot.min.css.map
|        |—— bootstrap-reboot.rtl.css
|        |—— bootstrap-reboot.rtl.css.map
|        |—— bootstrap-reboot.rtl.min.css
|        |—— bootstrap-reboot.rtl.min.css.map
|        |—— bootstrap-utilities.css
|        |—— bootstrap-utilities.css.map
|        |—— bootstrap-utilities.min.css
|        |—— bootstrap-utilities.min.css.map
|        |—— bootstrap-utilities.rtl.css
|        |—— bootstrap-utilities.rtl.css.map
|        |—— bootstrap-utilities.rtl.min.css
|        |—— bootstrap-utilities.rtl.min.css.map
|        |—— bootstrap.css
|        |—— bootstrap.css.map
|        |—— bootstrap.min.css
|        |—— bootstrap.min.css.map
|        |—— bootstrap.rtl.css
|        |—— bootstrap.rtl.css.map
|        |—— bootstrap.rtl.min.css
|        |—— bootstrap.rtl.min.css.map
|    |—— js
|        |—— bootstrap.bundle.js
|        |—— bootstrap.bundle.js.map
|        |—— bootstrap.bundle.min.js
|        |—— bootstrap.bundle.min.js.map
|        |—— bootstrap.esm.js
|        |—— bootstrap.esm.js.map
|        |—— bootstrap.esm.min.js
|        |—— bootstrap.esm.min.js.map
|        |—— bootstrap.js
|        |—— bootstrap.js.map
|        |—— bootstrap.min.js
|        |—— bootstrap.min.js.map
|—— index.html
|—— js
|    |—— main.js
|—— styles.css
|—— test.json
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

