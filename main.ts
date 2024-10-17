import { data } from './data.js';
import { Serie } from './serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;
let promedioTbody: HTMLElement = document.getElementById("promedio")!;
let tablaDatos: HTMLElement = document.getElementById("tabla-datos")!;
let containerCard: HTMLElement = document.getElementById("container-card")!;

tablaDatos.addEventListener("click", function (event) {
    const activeElement = event.target as HTMLElement;

    if (activeElement.tagName === "TH" || activeElement.tagName === "TD") {
        const fila = activeElement.parentElement as HTMLTableRowElement;
        const id = fila.cells[0].textContent;

        data.forEach((serie) => {
            if (id !== null && parseInt(id) === serie.id) {
                mostrarSerie(serie);
            }
        });
    }
});

function mostrarSerie(selectedSerie: Serie) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    let cardImage = document.createElement("img");
    cardImage.className = "card-img-top";
    cardImage.src = selectedSerie.image;
    cardImage.alt = selectedSerie.name;
    card.appendChild(cardImage);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = selectedSerie.name;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = selectedSerie.description;
    cardBody.appendChild(cardText);

    let cardLink = document.createElement("a");
    cardLink.href = selectedSerie.link;
    cardLink.target = "_blank";
    cardLink.textContent = selectedSerie.link;
    cardBody.appendChild(cardLink);

    card.appendChild(cardBody);

    containerCard.innerHTML = "";
    containerCard.appendChild(card);
}

function renderSeriesInTable(series: Serie[]): void {
    seriesTbody.innerHTML = '';
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        promedio += serie.seasons;

        trElement.innerHTML = `
            <th>${serie.id}</th>
            <td class="text-primary">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTbody.appendChild(trElement);
    });

    promedio /= series.length;
    promedioTbody.innerHTML = `Seasons average: ${Math.round(promedio)}`;
}

renderSeriesInTable(data);
