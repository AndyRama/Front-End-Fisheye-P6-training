//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographersById() {
  let photographers = [];
  let medias = [];
  let paramsUrlProfile = new URLSearchParams(window.location.search);
  let id = paramsUrlProfile.get('id');

  await fetch("data/photographers.json")
  .then(reponse => reponse.json())
  .then((data) => (photographers = data.photographers))
  
  let photographerObject = photographers.find(photographe => photographe.id == id);
    await fetch("data/photographers.json")
    .then(reponse => reponse.json())
    .then((data) => (medias = data.media))

    return {photographers: photographerObject}
    
  }

  async function displayDataPhotographe(photographer) {
    const photographerModel = profileFactories(photographer);
    photographerModel.fillPagePhotographe();
  };

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographersById();
};

init();
    