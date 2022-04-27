function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image, likes} = photographeObject;
  const thumbs = `assets/photographers/${portrait}`;
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;

  let newArray = []; 

  function fillPagePhotographe() {    
    //Thumbs    
    const img = document.getElementById('thumbs');
    img.setAttribute("src", thumbs);      

    //FullName
    const title = document.querySelector('.profile-title');
    title.innerHTML = name;

    //city
    const location = document.querySelector('.location');
    location.innerHTML = `${city}, ${country}`;

    //catchword 
    const slogan = document.querySelector('.slogan');
    slogan.innerHTML = tagline;

    //price 
    const tjm = document.getElementById('price');
    tjm.innerHTML =`${price} €/ jours`;

    //fullName
    const fullName =document.getElementById('fullName');
    fullName.innerHTML = name;

    //sum likes
    let nblike = 0;

    // displayMedias(medias);
    medias.map(media => {
      nblike += media.likes;
    })
    console.log(nblike);

    document.getElementById('nblikes').innerHTML = nblike;    
    }  

    return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}
