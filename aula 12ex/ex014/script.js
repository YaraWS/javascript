function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var data = new Date()
//var hora = data.getHours()
//var minutes = data.getMinutes()
var hora = 23
var minutes = 10
msg.innerHTML = `<strong> Now is ${hora}:${minutes} </strong>`
if(hora >= 0 && hora < 12) {
    //Good morning
    img.src = 'goodmorning.png'
    document.body.style.background = '#fcd67e'
    
}else if (hora >= 12 && hora < 18) {
    //Good afternoon
    img.src='goodafternoon.png'
    document.body.style.background = '#e9926a'
    document.getElementById("title").style.color = "#fcf8e6"
} else {
    //Good evening
    img.src='goodnight2.png'
    document.body.style.background = '#046961'
    document.getElementById("title").style.color = "#f4edcd";
}

}

