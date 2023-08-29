import { homePage,loadVideo } from "./getAll.js";

window.addEventListener('load', () => {
    loadVideo(window.location.search.slice(7, window.location.search.slice.length -5));
    console.log(window.location.search.slice(5));
});



homePage();
// loadThumbnails();