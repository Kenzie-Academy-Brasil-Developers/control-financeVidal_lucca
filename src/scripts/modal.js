function handleModal() {
    const button = document.querySelector('.register')
    const modalController = document.querySelector('.modal__controller')
    const closeButton = document.querySelector('.modal__close');
    button.addEventListener('click', function () {
        modalController.showModal()
    })

    closeButton.addEventListener('click', function () {
        modalController.close();

    });


}

handleModal()

function ativarBotao(button) {
    console.log(button)
    button.classList.add('active');

    console.log(button.id)

    if (button.id == 'entry') {
        const exitButton = document.querySelector('#exit')
        exitButton.classList.remove('active')
    } else if (button.id == 'exit') {
        const entryButton = document.querySelector('#entry')
        entryButton.classList.remove('active')
    }
}


