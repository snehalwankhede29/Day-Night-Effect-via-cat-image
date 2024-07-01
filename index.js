let bulbImageEl = document.getElementById("bulbImage")
let catImageEl = document.getElementById("catImage")
let switch1 = document.getElementById("switch")
let onBtn = document.getElementById("onBtn")
let offBtn = document.getElementById("offBtn")

function OnFunction(){
    bulbImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switch1.textContent = "Switch On"
    onBtn.style.background = "grey"
    offBtn.style.background = "red"
}

function OffFunction(){
    bulbImageEl.src = " https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    catImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switch1.textContent = "Switch off"
    onBtn.style.background = "green"
    offBtn.style.background = "blue"
}