const categorias = [
    {
        name:"Home",
        link:"/home"
    },
    {
        name:"Primes",
        link:"/Primes"
    },
    {
        name:"Warframes",
        link:"/Warframes"
    },
    {
        name:"Weapons",
        link:"/Weapons"
    },
    {
        name:"contact",
        link:"/contact"
    },
]

const programadores = [
    {
        name:"Erwin",
        rol:"desarrollador frontend",
        img:"data:image/jpeg;base64,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",
    },
    {
        name:"Christian",
        rol:"desarrollador PHP",
        img:"data:image/jpeg;base64,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",
    },
    {
        name:"Francisco",
        rol:"desarrollador Javascript",
        img:"data:image/jpeg;base64,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",
    },
]

const navHtml = document.getElementById("nav-list");
const programadoresHtml = document.getElementById("programadores-contenedor");


categorias.forEach((categoria,index) => {
    const a = document.createElement("a");
    a.text = categoria.name;
    a.href = categoria.link;
    a.classList.add("nav-link")
    navHtml.appendChild(a);
})




const URL_API = 'rickandmortyapi.com/api';
const divisasHtml = document.getElementById("divisas");
let personajes;

fetch(`https://${URL_API}/character`)
.then( async (resp) => {
    personajes = (await resp.json()).results

    console.log(personajes)
    personajes.forEach((personaje,index)=>{
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.width = "18rem";
    
        cardDiv.innerHTML = `
            <img src="${personaje.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <p class="card-text">${personaje.species}</p>
            <a href="#" class="btn btn-primary">VER DETALLES</a>
        ` 
    
        programadoresHtml.appendChild(cardDiv)
    })
} )




/*
.then(resp => resp.json())
.then((data) => {
  alert(`10 GBP = ${data.rates.USD} USD`);
});


*/

