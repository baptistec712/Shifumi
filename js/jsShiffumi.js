const boutons = document.querySelectorAll('button')

for(let i = 0; i< boutons.length; i++){
    boutons[i].addEventListener("click", () =>{
        const player = boutons[i].innerHTML
        const IA = boutons[Math.floor(Math.random() * boutons.length)].innerHTML
        let result ="";

        if(player === IA){
            result = "Égalité"
        }
        else if(player === "Pierre" && IA === "Ciseaux"){
            result = "Gagné"
        }
        else if(player === "Ciseaux" && IA === "Feuille"){
            result = "Gagné"
        }
        else if(player === "Feuille" && IA === "Pierre"){
            result = "Gagné"
        }
        else{
            result = "Perdu"
        }
        document.querySelector(".resultat").innerHTML =`
        Joueur = ${player} </br>
        IA = ${IA} </br>
        Résultat : ${result} 
        `

    })
}






