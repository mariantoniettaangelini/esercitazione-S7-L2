// FORM NOME
const formTag = document.getElementsByTagName("form")[0];

const save = function() {
    const textAreaTag = document.getElementById('content')
    const textAreaContent = textAreaTag.value
    console.log(textAreaContent)
    localStorage.setItem('name-input', textAreaContent)
    let result = document.getElementById('risultato');
    result.textContent = 'Il tuo nome è ' + localStorage.getItem('name-input')
}

const cancella = function() {
    localStorage.removeItem('name-input')
    //Cancella il nome stampato in console
    let result = document.getElementById('risultato');
    result.textContent = ''
}




// CONTATORE

function updateContatore() {
    if (sessionStorage.getItem('contatore')) {
        let valueContatore = parseInt(sessionStorage.getItem('contatore'));
        valueContatore++;
        sessionStorage.setItem('contatore', valueContatore);
        document.getElementById('contatore').innerHTML = valueContatore;
    } else {
        sessionStorage.setItem('contatore', 0);
        document.getElementById('contatore').innerHTML = 0;
    }
}

function startContatore() {
    updateContatore();
    setInterval(updateContatore, 1000)
}

document.addEventListener('DOMContentLoaded', startContatore)

