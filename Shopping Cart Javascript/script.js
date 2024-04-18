// Deklaracija globalne varijable koja je potrebna za racunanje ukupne cijene u više elemenata.
let allTotal = 0;

function addToCart(button) {
    // Deklariranje svih potrebnih varijabli;
    let mainElement = button.closest('.single-item');
    let name = mainElement.querySelector('h3').innerText;
    let cijena = mainElement.querySelector('p').innerText;
    let kolicina = mainElement.querySelector('input').value;

    // Parsiranje varijabli u integere za daljne operacije;
    cijena = cijena.substring(1);
    cijena = parseInt(cijena);
    kolicina = parseInt(kolicina);

    // Funkcionalnost programa;

    if(kolicina > 0) {
        // Deklariranje varijable total za pojedinacan izracun cijene.
        let total = kolicina * cijena;
        allTotal += total;
        document.querySelector('.cart-items').innerHTML +=  `<div class="cart-single-item">
                                                                <h3>${name}</h3>
                                                                <p>$${cijena} x ${kolicina} = $<span>${total}</span></p>
                                                                <button onClick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                                            </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;
        
        button.innerText = 'Dodano';
        button.disabled = true;

    } else {
        alert('Morate unijeti količinu proizvoda');
    }
}

function removeFromCart(element) {
    let mainElement = element.closest('.cart-single-item');
    let price = mainElement.querySelector('p span').innerText;
    let name = mainElement.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt(price);

    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainElement.remove();

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;
        if(itemName === name) {
            vege.querySelector('.actions input'). value = 0;
            vege.querySelector('.actions button').innerText = 'Dodaj';
            vege.querySelector('.actions button').disabled = false;
        }
    });
}