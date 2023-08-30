const channelId = 'UC8fkwsjcI_MhralEX1g4OBw';

let fetchApi = async () => {
    const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65ad5ad44bmsh773a97a88fa6da5p1534e5jsn00dec9fa147b',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.error('carga de datos exitosa');
        return result;
    } catch (error) {
        console.error('carga de datos fallida: ' + error);
        const response = await fetch('test.json');
        const result = await response.json();
        return result;
    }
}


let homePage = async () => {
    //let response = await fetchApi(); //garantiza que la variable se tome luego de que la promesa finalice
    let data = await fetch('../data/channelVideos.json');
    let dataJson = await data.json();
    let elementoPadre = document.querySelector('#row');
    let videos = `
    ${dataJson.contents.map((value) => `
        <a class="col-12 col-lg-4 col-md-6 col-sm-12" href="../video.html?id='${value.video.videoId}'">
            <div id="card">
                <div class="card mt-2 border-white">
                    <div class="card-overlay" style="display:none;">
                        <img src="${value.video.movingThumbnails == null ? '' : value.video.movingThumbnails[0].url}" alt="">
                    </div>
                    <img class="card-img-top" src="${value.video.thumbnails[3].url}" alt="Title">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="d-flex justify-content-start">
                                <div class="me-3">
                                    <img class="rounded-5 thumbnail" src="../assets/img/creativeCode.jpg" alt="">
                                </div>
                                <div>
                                    <p class="card-title fw-bold mt-2">${value.video.title}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-start align-items-center">
                            <div class="col">
                                <p class="card-text">CreativeCode</p>
                            </div>
                        </div>
                        <div class="row justify-content-center align-items-center">
                            <div class="col">
                                <p class="card-text">${value.video.stats.views} visualizaciones</p>
                            </div>
                            <div class="col">
                                <p class="card-text"> hace 5 dias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        
    `).join(" ")}
    `;
    elementoPadre.insertAdjacentHTML("beforeend", videos);

};


// let loadThumbnails = () => {
//     const videoCards = [...document.querySelectorAll('.card')];
//     console.log(videoCards.map);
//     videoCards.forEach((card) => {
//         console.log(card);
//         card.addEventListener('mouseover', (e) => {
//             console.log(e);
//             card.style.display = 'block';
//         });
//     });
// }


let loadVideo = async (id) => {
    //let response = await fetchApi(); //garantiza que la variable se tome luego de que la promesa finalice
    let elementoPadre = document.querySelector('#video');
    let videos = `

    <iframe width="1280" height="720" 
        src="https://www.youtube.com/embed/${id}?si=1HNZAdjym_e6hwO1&autoplay=1" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>

    `;
    elementoPadre.insertAdjacentHTML("beforeend", videos);
};


let wrapSuggestions = async (query) => {
    // const url = `https://youtube138.p.rapidapi.com/channel/search/?id=${channelId}&q=${query}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65ad5ad44bmsh773a97a88fa6da5p1534e5jsn00dec9fa147b',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch('../data/channelVideos.json');
        const result = await response.json();
        let elementoPadre = document.querySelector('#result-box');
        let elementoSugerencias = `
        ${result.contents.map((value) =>
            `
           <a href="../video.html?id='${value.video.vizdeoId}'">
               <li>
                   ${value.video.title}
               </li>
           </a>
       `).join(" ")} 
       `;
        elementoPadre.innerHTML = '';
        document.querySelector('.result-box').style.display = 'block';
        elementoPadre.insertAdjacentHTML('beforeend', elementoSugerencias);
    } catch (error) {
        console.error(error);
    }
}

//TODO: hacer el menu de busquedas 
//TODO: hacer que el menu de suscripciones sea funcional
//TODO: hacer que al dar clic al video redireccione a una nueva pagina con video


export {
    homePage,
    wrapSuggestions,
    loadVideo
    // loadThumbnails
};