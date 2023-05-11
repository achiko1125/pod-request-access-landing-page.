
let form=document.getElementById('form')
let mail=document.getElementById('email')
let errortext=document.getElementById('errortext')
form.addEventListener('submit' , function(event){
    event.preventDefault()
    if(!mail.value.match( /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        errortext.style.display='flex'
    }
    if(mail.value.match( /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        errortext.style.display='none'
    }
})