const generaElement = document.querySelector('input[name="genera"]');

let sconto = 0,
prezzoBase,
prezzoFinale;


if(generaElement != null) {
    generaElement.addEventListener('click', function() {
        const nome = document.querySelector('.ticket-form .name').value;
        const distanza = parseFloat(document.querySelector('.ticket-form .distanza').value);
        const eta = document.querySelector('select[name="eta"]').value;
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
            prezzoFinale = prezzoBase - sconto;
        }
    });
}
