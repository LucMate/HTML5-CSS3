const menu = () => {
    if (window.innerWidth <= 480){
        const menuButton = document.querySelector("[data-menu-button]");
        const itemsMenu = document.querySelector("[data-menu-items]");


        menuButton.onclick = () => {
            if(itemsMenu.getBoundingClientRect().left < 0){
                itemsMenu.style.left = "0%"
            }else if(itemsMenu.getBoundingClientRect().left === 0) {
                itemsMenu.style.left = "-100%"
                
            }
    }
        itemsMenu.onclick = () => {
            if(itemsMenu.getBoundingClientRect().left === 0){
                setTimeout(() => {
                    itemsMenu.style.left = "-100%"
                }, 500)
            }
        }
    }
}

window.onload = () => {
    menu()
}
window.onresize = () => {
    menu()
}