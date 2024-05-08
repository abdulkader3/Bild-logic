let Display = document.querySelector('.Display')
let errorORsomething = document.querySelector('.errorORsomething')
let plyerOneName = document.querySelector('.plyerOneName')
let firstBT = document.querySelector('.firstBT')
let prothomNumber = document.querySelector('.prothomNumber')
let doinumber = document.querySelector('.doinumber')
let secondBT = document.querySelector('.secondBT')
let plyerTowName = document.querySelector('.plyerTowName')
let pTwo = document.querySelector('.pTwo')






firstBT.addEventListener('click', () => {
    Display.innerHTML = plyerOneName.value;
    prothomNumber.style = 'Display: none;'
    doinumber.style = 'Display: block;'


})



secondBT.addEventListener('click', () => {
    pTwo.innerHTML = plyerTowName.value;
    doinumber.style = 'Display: none;'


})