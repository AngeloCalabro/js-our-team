// x MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto 

// BONUS 3:
// Aggiungere attraverso un form un membro al team

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

const team = [
    {
        'name': 'Wayne',
        'surname': 'Branett',
        'role': 'Founder & CO',
        foto: '<img src="./img/wayne-barnett-founder-ceo.jpg" alt=""></img>'
    },
    {
        'name': 'Angela',
        'surname': 'Caroll',
        'role': 'Chief Editor',
        foto: '<img src="./img/angela-caroll-chief-editor.jpg" alt="">'
    },
    {
        'name': 'Walter',
        'surname': 'Gordon',
        'role': 'Office Manager',
        foto: '<img src="./img/walter-gordon-office-manager.jpg" alt="">'
    },
    {
        'name': 'Angela',
        'surname': 'Lopez',
        'role': 'Social Media Manager',
        foto: '<img src="./img/angela-lopez-social-media-manager.jpg" alt="">'
    },
    {
        'name': 'Scott',
        'surname': 'Estrada',
        'role': 'Developer',
        foto: '<img src="./img/scott-estrada-developer.jpg" alt="">'
    },
    {
        'name': 'Brabara',
        'surname': 'Ramos',
        'role': 'Graphic Developer',
        foto: '<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">'
    }
];

for (let value of team) {
    console.log('nome: ' + value.name + 'cognome: ' + value.surname + ' ruolo: ' + value.role + ', foto: ' + value.foto);
}