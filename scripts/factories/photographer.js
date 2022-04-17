function photographerFactory(data) {
const { name, portrait, city, country, tagline, price, id } = data;
const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    const h2 = document.createElement('h2');
    h2.textContent = name;

    //add city & country
    const hCity = document.createElement('h3');
    hCity.classList.add('city');
    hCity.textContent = `${city}, ${country}`; 

    //Add tagline
    const ptagline = document.createElement('p');
    ptagline.classList.add('tagline');
    ptagline.innerHTML = tagline;

    //add price 
    const tjmprice = document.createElement('span');
    ptagline.classList.add('price');
    tjmprice.innerHTML=`${price}/par jours`;

    article.appendChild(img);
    
    article.appendChild(h2);
    article.appendChild(hCity);
    article.appendChild(ptagline);
    article.appendChild(tjmprice);

    return (article);
  }
  return { name, picture, getUserCardDOM }
}