const pegarThumbnail = () => {
    const txtURL = document.querySelector("section div.formulario input")
    const btnBuscar = document.querySelector("section div.formulario button")
    const divBaixar = document.querySelector("section div.baixar")
    let id
    btnBuscar.onclick = () => {
        if(txtURL.value != ""){
            id = (txtURL.value).split("=")
            id = id[1]

            divBaixar.innerHTML = 
            `
                <img src="https://i3.ytimg.com/vi/${id}/maxresdefault.jpg">
            `
        } else{
            alert("Preencha a URL!")
        }
    }
}

window.onload = () =>  {
    pegarThumbnail()
}