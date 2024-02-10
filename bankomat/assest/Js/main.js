let content = document.querySelector('.content'),
    first = document.querySelector('.first'),
    second = document.querySelector('.second'),
    send = document.querySelector('.send'),
    send_2 = document.querySelector('.send-2'),
    input = document.querySelector('.input'),
    input_2 = document.querySelector('.input-2'),
    pulYechish = document.querySelector('.pul-yechish'),
    pulYechish_2 = document.querySelector('.pul-yechish-2'),
    back = document.querySelector('.back'),
    back_2 = document.querySelector('.back-2'),
    back_3 = document.querySelector('.back-3'),
    balance = document.querySelector('.balans'),
    balanceValue = document.querySelector('.balance-value'),
    balance_2 = document.querySelector('.balance-2'),
    yuz = document.querySelector('.yuz'),
    ikkiyuz = document.querySelector('.ikkiyuz'),
    uchyuz = document.querySelector('.uchyuz'),
    btns = document.querySelector('.btns')

second.style.display = 'none'
btns.style.display = 'none'

balanceValue.value = 500

balanceValue.innerHTML = balanceValue.value

balanceValue.style.display = 'none'

pulYechish_2.style.display = 'none'


send.addEventListener('click', () => {
    if(input.value == 123456) {
        second.style.display = 'block'
        first.style.display = 'none'
    } else {
        alert("Karta raqamni kiritishingiz shart!!!")
    }
    input.value = ''
    input_2.value = ''
})

send_2.addEventListener('click', () => {
    if(input_2.value == 20112106){
        btns.style.display = 'block'
        second.style.display = 'none'
    } else {
        alert("Parolni kiritishingiz shart!!!")
    }
    input.value = ''
    input_2.value = ''
})

back.addEventListener('click', () => {
    first.style.display = 'block'
    btns.style.display = 'none'
})

back_2.addEventListener('click', () => {
    btns.style.display = 'block'
    balanceValue.style.display = 'none'
    balance_2.style.display = 'none'
})

back_3.addEventListener('click', () => {
    btns.style.display = 'block'
    pulYechish_2.style.display = 'none'
})

balance.addEventListener('click', () => {
    balanceValue.style.display = 'block'
    balance_2.style.display = 'block'
    btns.style.display = 'none'
})

balance_2.style.display = 'none'

pulYechish.addEventListener('click', () =>{
    pulYechish_2.style.display = 'block'
    btns.style.display = 'none'
})

yuz.addEventListener('click', () => {
    alert("Hisobingizdan 100 so'm yechib olindi")
    balanceValue.innerHTML = balanceValue.value - 100
})

ikkiyuz.addEventListener('click', () => {
    alert("Hisobingizdan 200 so'm yechib olindi")
    balanceValue.innerHTML = balanceValue.value - 200
})