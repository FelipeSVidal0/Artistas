const containerCard = document.getElementById("container-cards")
containerCard.innerHTML += "<p>Ops! Ocorreu algum erro.</p>";

const obrasMock = [
    { name: "Obra 1", author: "Author da obra", data: "14/10/2025", mediaEstrelas: "5,0" },
    { name: "Obra 2", author: "Author da obra", data: "14/10/2025", mediaEstrelas: "5,0" },
    { name: "Obra 3", author: "Author da obra", data: "14/10/2025", mediaEstrelas: "5,0" },
    { name: "Obra 4", author: "Author da obra", data: "14/10/2025", mediaEstrelas: "5,0" },
    { name: "Obra 5", author: "Author da obra", data: "14/10/2025", mediaEstrelas: "5,0" },
]


function showObras() {
    containerCard.innerHTML = "";

    obrasMock.forEach(o => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <p>${o.name} | ${o.author} | ${o.data} | ${o.mediaEstrelas}</p>
        `

        containerCard.appendChild(card)
    })
}


const btnShowObras = document.getElementById("btnShowObras")
btnShowObras.addEventListener("click", () => showObras())

