//Recuperer la division screen (element ou balise)
const divScreen = document.querySelector('.screen');//Rechercher dans le document(le html) la premiere balise qui a la classe screen



// const n = Math.random() //Generer un nombre aleatoire entre 0 et 1
// const n = Math.random() * 10 //Generer un nombre aleatoire entre 0 et 10
const n = Math.floor(Math.random() * 10) //Generer un nombre aleatoire entre 0 et 10 sans virgule
console.log('n = '+n)



for (let i = 0; i < 2500; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

        divScreen.innerHTML += 
        '<div class="pixel" style="background-color:rgb('+r+', '+g+', '+b+')"></div>'

}

