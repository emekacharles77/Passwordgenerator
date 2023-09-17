const passwordbox=document.getElementById('password');
const button=document.querySelector('.Generate')
const copy=document.querySelector('.take')
// console.log(passwordbox, button, copy)
const max=10;
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const number='0123456789';
const symbol='/@#$%^&*()?><{}_+~';

const Allpassword=upperCase + lowerCase + number + symbol;

    

        button.addEventListener('click',()=>{
    function createpassword(){
        let password='';
        // password +=upperCase[Math.floor(Math.random()*upperCase.length)];
        // password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
        // password +=number[Math.floor(Math.random()*number.length)];
        // password +=symbol[Math.floor(Math.random()*symbol.length)];
        while(max >password.length){
            password +=Allpassword[Math.floor(Math.random()*Allpassword.length)];
        }
        passwordbox.value=password;
    }
    createpassword()
})


copy.addEventListener('click', ()=>{
    function copyPassword(){
        passwordbox.select();
        document.execCommand('copy')
    }
    copyPassword()
})