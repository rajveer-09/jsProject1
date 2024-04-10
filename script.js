const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id==='box1'){
            body.style.backgroundColor='#FF8080'
        }
        if(color.target.id==='box2'){
            body.style.backgroundColor='#79AC78'
            
        }
        if(color.target.id==='box3'){
            body.style.backgroundColor='#496989'
        }
        if(color.target.id==='box4'){
            body.style.backgroundColor='#BB8493'
        }
        if(color.target.id==='box5'){
            body.style.backgroundColor='#7BC9FF'
        }

    })
})