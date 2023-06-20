const num = document.querySelector("#num")
const length = document.querySelector(".length p")
const volume = document.querySelector(".volume p")
const mass = document.querySelector(".mass p")
const meterToFeet = 3.3
const feetToMeter = 0.3
const litreToGallon = 0.26
const gallonToLitre = 3.8
const kiloToPound = 2.2
const poundToKilo = 0.45
num.addEventListener("click",()=>{
    num.value = ""
})
num.addEventListener("input",()=>{
    length.textContent = 
    `${num.value} meters = ${(num.value*meterToFeet).toFixed(3)} feet | ${num.value} feet = 
    ${(num.value*feetToMeter).toFixed(3)} meters`

    volume.textContent = 
    `${num.value} litres = ${(num.value*litreToGallon).toFixed(3)} gallons | ${num.value} gallons = 
    ${(num.value*gallonToLitre).toFixed(3)} litres`

    mass.textContent = 
    `${num.value} kilos = ${(num.value*kiloToPound).toFixed(3)} pounds | ${num.value} pounds = 
    ${(num.value*poundToKilo).toFixed(3)} kilos`
})