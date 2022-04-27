//Page profil du photographe Aquisition des éléments 
async function getPhotographerById() {
	let photographers = [];
  let medias = [];
	let paramsUrlProfile = new URLSearchParams(window.location.search);
  let id = paramsUrlProfile.get('id');

	await fetch("./data/photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (photographers = data.photographers))
    
    let photographeObject = photographers.find(photographe => photographe.id == id)

    await fetch("./data/photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (medias = data.media))

    const mediaArray = medias.filter(media => media.photographerId == id)
    photographeObject.medias = mediaArray;

      
	return { photographer: photographeObject }
}

async function displayDataPhotograph(photographer) {
  const photographerModel = profileFactories(photographer);
  photographerModel.fillPagePhotographe();
};

async function init() {
	// Get datas of all photographers
	const { photographer } = await getPhotographerById();
	displayDataPhotograph(photographer);
};

init();