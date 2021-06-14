const message = {
    e1: document.getElementsByTagName("span")[0].innerText,
    e2: function () {
        const header = document.getElementsByTagName("h1")
        if (header.length < 1)
            return null
        return header[0].innerText
    }()
}

if (message.e1 === "We are down for maintenance." || message.e2 === "Unable to Process Request") {
    window.location.reload()
}