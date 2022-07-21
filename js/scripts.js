const generaElement = document.querySelector('input[name="genera"]');

let sconto = 0,
prezzoBase,
prezzoFinale;


if(generaElement != null) {
    generaElement.addEventListener('click', function() {
        const nome = document.querySelector('.ticket-form .name').value;
        const distanza = parseFloat(document.querySelector('.ticket-form .distanza').value);
        const eta = document.querySelector('select[name="eta"]').value;
        const priceTableElement = document.querySelector('.ticket-info__table tbody');
        const nameElement = document.querySelector('.ticket-price .user .name');

        var matches = nome.match(/\d+/g);
        
        if (matches != null) {
            alert('Il campo Nome e Cognome non deve contenere numeri');
        } else if(isNaN(distanza)) {
            console.log(distanza);
            alert('Il campo Chilometri da percorrere deve essere un numero');
        } else {
            prezzoBase = 0.21 * distanza;
            if(eta === 'minorenne') {
                sconto = prezzoBase * 0.2;
            } else if(eta === 'oversessantacinque') {
                sconto = prezzoBase * 0.4;
            }
            nameElement.append(nome);
            prezzoFinale = prezzoBase - sconto;
            priceTableElement.innerHTML +=
            `<tr>
                <td>Biglietto standard</td>
                <td>5</td>
                <td>92911</td>
                <td class="price">${prezzoFinale} €</td>
            </tr>`
        }
    });
}
