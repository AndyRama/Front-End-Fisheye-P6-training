function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image, likes} = photographeObject;
  const thumbs = `assets/photographers/${portrait}`;
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;

  // let newArray = []; 

  function fillPagePhotographe() {    

    //Thumbs    
    const img = document.getElementById('thumbs');
    img.setAttribute("src", thumbs);      

    // Name
    const title = document.querySelector('.profile-title');
    title.innerHTML = name;

    // city
    const location = document.querySelector('.location');
    location.innerHTML = `${city}, ${country}`;

    // catchword 
    const slogan = document.querySelector('.slogan');
    slogan.innerHTML = tagline;

    // price 
    const tjm = document.getElementById('price');
    tjm.innerHTML =`${price} €/ jours`;

    // FullName
    const fullName = document.getElementById('fullName');
    fullName.innerHTML = name;
    
    // Gallery Images
    displayMedias(medias);
    
    let nblike = 0;
    // sum likes
    medias.map(media => {
      nblike += media.likes;
    })
    document.getElementById('nblikes').innerText = nblike;    
  }  
  // DROPDOWN ORDER BY
  return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}

function displayMedias(medias) {
  //creer un nouveau tableau
  medias.map( media => {
    // Recupere le container
    const cardContainer = document.querySelector(".card-container");
    let photoToDisplay;
    let elementToDisplay;
    let type;
    
    // type de contenue (image/video)
    if(media.image) {
      photoToDisplay = media.image;
      type = "image";
      elementToDisplay = `<img src="./assets/photos/${photoToDisplay}" alt="${media.title}" class="card-img">`;
    } else {
      photoToDisplay = media.video;
      type = "video";
      elementToDisplay = `<video src="./assets/photos/${photoToDisplay}" class="card-video" alt="${media.title}"></video>`;
    }
    
    // cookies timestamp for one clic
    let mediaLike = media.likes;
    let cookie = localStorage.getItem(media.id);
    if(cookie != null ) {
      mediaLike++
    }
   

    // creation d'un model de card, interpoler les datas pour chaque gallery
    const mediaCardImage = `
      <div class="cards" >      
        <a class="card" href="#" data-id="${media.id}" alt="${media.title} data-title="${media.title}" data-url="${photoToDisplay}" data-type="${type}">
          ${elementToDisplay}
        </a>
        <div class="card-content">
          <h4 class="card-title">${media.title}</h4>              
          <div class="card_btn">
            <span id="${media.id}" onclick="incrementLike(this)" class="card-counter"><span>${mediaLike}</span><i class="card-like heart fas fa-heart"></i></span>
          </div>
        </div>
      </div>
    `
    cardContainer.innerHTML = cardContainer.innerHTML + mediaCardImage;
  })
}

//increment value like
function incrementLike(e) {
  
  const id = e.id;
  const cookie = localStorage.getItem(id);

  if(cookie == null) {
    e.firstElementChild.innerText = parseInt(e.firstElementChild.innerText) +1;
    document.getElementById("nblikes").innerText = parseInt(document.getElementById("nblikes").innerText)+1;
    localStorage.setItem(id,"click");
  }
}


