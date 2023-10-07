//Recuperer la division screen (element ou balise)
const divScreen = document.querySelector('.screen');//Rechercher dans le document(le html) la premiere balise qui a la classe screen



// const n = Math.random() //Generer un nombre aleatoire entre 0 et 1
// const n = Math.random() * 10 //Generer un nombre aleatoire entre 0 et 10
const n = Math.floor(Math.random() * 10) //Generer un nombre aleatoire entre 0 et 10 sans virgule


for (let i = 0; i < 2500; i++) {
        divScreen.innerHTML += 
        '<div class="pixel" onmouseover="pixelHovered(this)" style="background-color:inherit"></div>'
}

function pixelHovered(pixel){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    pixel.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}
//Explicaitions:
// Functions
// un ensemble de lignes de code qui a pour but de faire un traitement
// function sayHi(){
//     console.log('Hello');
// }

// function televisionLG(){
//     console.log('Faire passer un film');
// }

// // Il faut faire un appel de fonction 
// sayHi();


//Events
// recuperer le bouton:
// const btn = document.querySelector('button');
//Ajouter au btn l'event CLICK

// btn.addEventListener('click',clickedFunc)
// btn.addEventListener('click',function(){
//     alert('clicked!')
// })


// //Une fonction qui permet d'afficher le message: Clicked!
function clickedFunc(){
    console.log('You have clicked the button');
}