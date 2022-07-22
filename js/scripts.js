const generaElement = document.querySelector('input[name="genera"]');
const annullaElement = document.querySelector('input[name="annulla"]');
const nomeElement = document.querySelector('.ticket-form .name');
const distanzaElement = document.querySelector('.ticket-form .distanza');
const etaElement = document.querySelector('select[name="eta"]');

if(generaElement != null) {
    generaElement.addEventListener('click', function() {
        const nome = nomeElement.value;
        const distanza = parseFloat(distanzaElement.value);
        const eta = etaElement.value;
        const priceTableElement = document.querySelector('.ticket-info__table tbody');
        const nameElement = document.querySelector('.ticket-price .user .name');

        let sconto = 0,
            prezzoBase,
            prezzoFinale,
            tipoBiglietto = 'Biglietto standard';

        let matches = nome.match(/\d+/g);
        
        if (matches != null) {
            alert('Il campo Nome e Cognome non deve contenere numeri');
        } else if(isNaN(distanza)) {
            console.log(distanza);
            alert('Il campo Chilometri da percorrere deve essere un numero');
        } else {
            prezzoBase = 0.21 * distanza;
            if(eta === 'minorenne') {
                sconto = prezzoBase * 0.2;
                tipoBiglietto = 'Biglietto ridotto minori';
            } else if(eta === 'oversessantacinque') {
                sconto = prezzoBase * 0.4;
                tipoBiglietto = 'Biglietto ridotto over 65';
            }
            nameElement.innerHTML=nome;
            prezzoFinale = prezzoBase - sconto;
            priceTableElement.innerHTML +=
            `<tr>
                <td>${tipoBiglietto}</td>
                <td>5</td>
                <td>92911</td>
                <td class="price">${prezzoFinale.toFixed(2, 0)} €</td>
            </tr>`
        }
    });
}
if(annullaElement != null) {
    annullaElement.addEventListener('click', function() {
        // azzerro campi input
        nomeElement.value = "";
        distanzaElement.value = "";
        etaElement.value = "maggiorenne";
    });
}