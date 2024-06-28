

function copiarTexto() {

    let input = document.getElementById("emailInput")
    input.select()
    input.setSelectionRange(0, 99999)

    document.execCommand('copy')

    window.getSelection().removeAllRanges()
    alert("correo electronico copiado")
}