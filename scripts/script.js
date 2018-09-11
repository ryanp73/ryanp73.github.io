let expand = document.querySelectorAll(".collapsible")

expand.forEach((el) => {
    el.addEventListener("click", (event) => {
        let data = event.path[1].querySelector(".collapsible-data")
        if (event.target.children[0].innerText == "expand_more") {
            event.target.children[0].innerText = "expand_less"
        } else {
            event.target.children[0].innerText = "expand_more"
        }
        data.classList.toggle("open")
        data.classList.toggle("hidden")
    })
})