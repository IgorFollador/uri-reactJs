const submitLoginFake = (event) => {
    event.preventDefault();
    let nameInput = document.getElementById('name');
    let gameInput = document.getElementById('game');
    
    if (nameInput.length == 0 || gameInput.length == 0) {
        alert('Preencha todos os campos do formulário.');
        return 0;
    } 

    document.getElementById('username').innerText = nameInput.value;
    nameInput.value = '';

    document.getElementById('gameName').innerText = gameInput.value;
    gameInput.value = '';

    // let parent = event.target;
    // parent.style.visibility = 'hidden';
    // parent.style.cssText = 'visibility: hidden; margin: 0;';
}

window.onload = () => {
    let form = document.getElementById('loginFake');
    form.addEventListener('submit', submitLoginFake);
}

