let fetchApi = async () => {
    const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=US';
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
        return result;
    } catch (error) {
        console.error(error);
    }
}


let homePage = async () => {
    //let response = await fetchApi(); //garantiza que la variable se tome luego de que la promesa finalice
    let data = await fetch('test.json');
    let dataJson = await data.json();
    let elementoPadre = document.querySelector('#row');
    console.log(dataJson.contents[0].video.thumbnails[0].url);
    let videos = `
    ${dataJson.contents.map((value) => `
        <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <div class="card mt-2">
                <img class="card-img-top" src="${value.video.thumbnails[0].url}" alt="Title">
                <div class="card-body">
                    <div class="row justify-content-center align-items-center g-2">
                        <div class="col">
                            <img class="channel" src="${value.video.author.avatar[0].url}" alt="">
                        </div>
                        <div class="col">
                            <h4 class="card-title">${value.video.title}</h4>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center g-2">
                        <div class="col">
                            <p class="card-text">${value.video.author.title}</p>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center g-2">
                        <div class="col">
                            <p class="card-text">${value.video.stats.views} visualizaciones</p>
                        </div>
                        <div class="col">
                            <p class="card-text"> - hace x dias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join(" ")}
    `;

    elementoPadre.insertAdjacentHTML("beforeend", videos);

    //console.log(response);
};

homePage();