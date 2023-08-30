import { homePage, loadVideo, wrapSuggestions } from "./getAll.js";

window.addEventListener('load', () => {
    loadVideo(window.location.search.slice(7, window.location.search.slice.length - 5));
});


let barraBusqueda = document.querySelector('#input-box');
barraBusqueda.addEventListener('keyup', () => {
    let elementoPadre = document.querySelector('#result-box')
    if (barraBusqueda.value === "" || barraBusqueda.value === " ") {
        document.querySelector('.result-box').style.display = 'none';
    }else{
        wrapSuggestions(barraBusqueda.value);
    }
}
)
homePage();