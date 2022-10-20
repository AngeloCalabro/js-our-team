const team = [
    {
        'name': 'Wayne',
        'surname': 'Branett',
        'role': 'Founder & CO',
        'photo': '<img src="./img/wayne-barnett-founder-ceo.jpg" alt=""></img>'
    },
    {
        'name': 'Angela',
        'surname': 'Caroll',
        'role': 'Chief Editor',
        'photo': '<img src="./img/angela-caroll-chief-editor.jpg" alt="">'
    },
    {
        'name': 'Walter',
        'surname': 'Gordon',
        'role': 'Office Manager',
        'photo': '<img src="./img/walter-gordon-office-manager.jpg" alt="">'
    },
    {
        'name': 'Angela',
        'surname': 'Lopez',
        'role': 'Social Media Manager',
        'photo': '<img src="./img/angela-lopez-social-media-manager.jpg" alt="">'
    },
    {
        'name': 'Scott',
        'surname': 'Estrada',
        'role': 'Developer',
        'photo': '<img src="./img/scott-estrada-developer.jpg" alt="">'
    },
    {
        'name': 'Barbara',
        'surname': 'Ramos',
        'role': 'Graphic Developer',
        'photo': '<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">'
    }
];

// stampare il team in console
for (let element of team) {
    for (let key in element) {
        console.log(`${key}: ${element[key]}`)
    }
};

// prendo il .my-container e gli appendo il div con le carte
const container = document.querySelector('.my-container');
const cards = addElementClassHTML('div', 'cards', container);//Funzione in libreria

for (let element of team) {
    addComponent(element);
}

//funzione che aggiunge un nuovo componente
function addComponent(element) {
    const card = addElementClassHTML('div', 'item', cards);
    for (let key in element) {
        if (key == 'name') {
            const innerCardName = addElementClassHTML('div', 'name', card);
            innerCardName.classList.add('text-center');
            innerCardName.innerHTML = `${element[key]}`;
        } else if (key == 'surname') {
            const innerCardSurname = addElementClassHTML('div', 'surname', card);
            innerCardSurname.classList.add('text-center');
            innerCardSurname.innerHTML = ` ${element[key]}`;
        } else if (key == 'role') {
            const innerCardRole = addElementClassHTML('div', 'role', card);
            innerCardRole.innerHTML = `${element[key]}`;
        } else if (key == 'photo') {
            const innerCardPhoto = document.createElement('div');
            innerCardPhoto.classList.add('photo');
            innerCardPhoto.innerHTML = `${element[key]}`;
            card.prepend(innerCardPhoto);
        }
    }
}