import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = 0;
var promedioTbody = document.getElementById("promedio");
var tablaDatos = document.getElementById("tabla-datos");
var containerCard = document.getElementById("container-card");
tablaDatos.addEventListener("click", function (event) {
    var activeElement = event.target;
    if (activeElement.tagName === "TH" || activeElement.tagName === "TD") {
        var fila = activeElement.parentElement;
        var id_1 = fila.cells[0].textContent;
        data.forEach(function (serie) {
            if (id_1 !== null && parseInt(id_1) === serie.id) {
                mostrarSerie(serie);
            }
        });
    }
});
function mostrarSerie(selectedSerie) {
    var card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    var cardImage = document.createElement("img");
    cardImage.className = "card-img-top";
    cardImage.src = selectedSerie.image;
    cardImage.alt = selectedSerie.name;
    card.appendChild(cardImage);
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = selectedSerie.name;
    cardBody.appendChild(cardTitle);
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = selectedSerie.description;
    cardBody.appendChild(cardText);
    var cardLink = document.createElement("a");
    cardLink.href = selectedSerie.link;
    cardLink.target = "_blank";
    cardLink.textContent = selectedSerie.link;
    cardBody.appendChild(cardLink);
    card.appendChild(cardBody);
    containerCard.innerHTML = "";
    containerCard.appendChild(card);
}
function renderSeriesInTable(series) {
    seriesTbody.innerHTML = '';
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        promedio += serie.seasons;
        trElement.innerHTML = "\n            <th>".concat(serie.id, "</th>\n            <td class=\"text-primary\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        seriesTbody.appendChild(trElement);
    });
    promedio /= series.length;
    promedioTbody.innerHTML = "Seasons average: ".concat(Math.round(promedio));
}
renderSeriesInTable(data);
