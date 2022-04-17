function verify(){
    var data = new Date()
    var year = data.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || fyear.value > year){
        window.alert('[ERROR] Verify the input and try again!')
    }else{
        var fgender = document.getElementsByName('radgender')
        var age =  year - fyear.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fgender[0].checked) {
            genero = 'male'
            if (age >=0 && age < 10) {
                //Child
                img.setAttribute('src', './img/baby_man.png')
            } else if ( age < 21) {
                //Youth
                img.setAttribute('src', './img/youth_man.png' )
            } else if ( age < 50) {
               //Adult
               img.setAttribute('src','./img/adult_man.png')
            } else {
                //Eldery
                img.setAttribute('src','./img/elderly_man.png')
            }
        } else if (fgender[1].checked) {
            genero = 'female'
            if (age >=0 && age < 10) {
                //Child
                img.setAttribute('src','./img/baby_woman.png')
            } else if ( age < 21) {
                //Youth
                img.setAttribute('src','./img/youth_women.png')
            } else if ( age < 50) {
               //Adult
               img.setAttribute('src','./img/adult_women.png')
            } else {
                //Elderly 
                img.setAttribute('src','./img/elderly_women.png')
            }
        }
        res.style.textAlign = 'center'
        
        res.innerHTML = `We detected ${genero} gender and the age ${age}.`
        res.appendChild(img)
    }
}