const form=document.querySelector('form')
const bill=document.querySelector('#bill')
const tip=document.querySelector('#tip')
const total=document.querySelector('.total')

form.addEventListener('submit', (e)=>{
e.preventDefault()
let numbers=bill.value
let percentage=tip.value
let all=numbers/100*percentage
console.log(all);
total.innerHTML=`Total: <span class="font-sans font-bold text-2xl">${all}</span>`
})