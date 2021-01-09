document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const newAnimal = document.querySelector('#new-animal-form');
    newAnimal.addEventListener('submit', handleNewAnimal);

    const deleteAllAnimals = document.querySelector('#delete-all');
    deleteAllAnimals.addEventListener('click', handleDeleteAllAnimals);

    const animalCounter = document.querySelector('#submit-button');
    let count = 0;
    animalCounter.onclick = () => {
        count ++;
        const animalText = document.querySelector('#animal-count');
        animalText.innerHTML = "Number of animals in list: " + count;
    };

});


const handleNewAnimal = (event) => {
    event.preventDefault();

    const animalListItem = createNewAnimal(event.target);
    const animalList = document.querySelector('#animal-list');
    animalList.appendChild(animalListItem);

    event.target.reset();
};

const createNewAnimal = (form) => {
    // Create the element
    // li element will contain all other elements from form
    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-info');

    // Create elements from form inputs to be added to li
    // Name
    const name = document.createElement('h4');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    // Species
    const species = document.createElement('p');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    // Continent
    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    animalListItem.appendChild(continent);

    // Conservation Level
    const conservation = document.createElement('p');
    conservation.textContent = form.conservation.value;
    animalListItem.appendChild(conservation);

    // Return element
    return animalListItem;
};

const handleDeleteAllAnimals = () => {
    const allAnimalListItems = document.querySelector('#animal-list');
    allAnimalListItems.innerHTML = '';

    // Reset counter
    const animalText = document.querySelector('#animal-count');
    animalText.innerHTML = "No animals have been added to the list yet."
    count = 0;
};



// // 1. Create the element
// const newListItem = document.createElement('li');

// // 2. Modify the element
// newListItem.textContent = "Purple";
// newListItem.classList.add('purple');

// // 3. Append the element to the DOM
// const list = document.querySelector ('ul');
// list.appendChild(newListItem);