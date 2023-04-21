function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hr = agora.getHours()

    msg.innerHTML = `Agora são ${hr} horas`

    if (hr >= 0 && hr <= 12) {
        img.src = 'imagem/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hr >= 12 && hr <= 18) {
        img.src = 'imagem/fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagem/fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}