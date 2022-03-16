// WASH BUTTONS
const washCarBtn = document.getElementById('wash-car-btn')
const mowLawnBtn = document.getElementById('mow-lawn-btn')
const pullWeedsBtn = document.getElementById('pull-weeds-btn')

// WASH OUTPUTS
const washCarOutput = document.getElementById('wash-car')
const mownLawnOutput = document.getElementById('mow-lawn')
const pullWeedsOutput = document.getElementById('pull-weeds')

let payMessage = document.getElementById('pay-message')

let totalAmountEl = document.getElementById('total-amount')

const services = [
    {
        serviceWashCar: "Wash Car",
        priceWashCar: 10
    },

    {
        serviceMowLawn: "Mow Lawn",
        priceMowLawn: 20
    },

    {
        servicePullWeeds: "Pull Weeds",
        pricePullWeeds: 30
    }
]

let service1 = 0;
let service2 = 0;
let service3 = 0;

let totalAmount = service1 + service2 + service3;
totalAmountEl.innerHTML = `$${totalAmount}`

// WASH CAR OUTPUT
washCarBtn.addEventListener('click', () =>{
    washCarOutput.innerHTML = 
      `
      <h3>${services[0].serviceWashCar}</h3>
      <button onclick="closeCarWash()">Remove</button>
      <h2><span>$</span>${services[0].priceWashCar}</h2>
      `
        service1 = 0;
        service1 += services[0].priceWashCar
        totalAmount = service1 + service2 + service3
        totalAmountEl.innerHTML = `$${totalAmount}`
    }
)
// WASH CAR REMOVE
function closeCarWash(){
    washCarOutput.innerHTML = ``;
    totalAmount -= services[0].priceWashCar
    totalAmountEl.innerHTML = `$${totalAmount}`
}







// MOW LAWN OUTPUT
mowLawnBtn.addEventListener('click', () =>{
    mownLawnOutput.innerHTML =
      `
      <h3>${services[1].serviceMowLawn}</h3>
      <button onclick="closeMowLawn()">Remove</button>
      <h2><span>$</span>${services[1].priceMowLawn}</h2>
      `
      service2 = 0;
      service2 += services[1].priceMowLawn
      totalAmount = service1 + service2 + service3
      totalAmountEl.innerHTML = `$${totalAmount}`
    }
)
// MOW LAWN REMOVE
function closeMowLawn(){
    mownLawnOutput.innerHTML = ``;
    totalAmount -= services[1].priceMowLawn
    totalAmountEl.innerHTML = `$${totalAmount}`
}





// PULL WEED OUTPUT
pullWeedsBtn.addEventListener('click', () =>{
    pullWeedsOutput.innerHTML = 
      `
      <h3>${services[2].servicePullWeeds}</h3>
      <button onclick="closePullWeeds()">Remove</button>
      <h2><span>$</span>${services[2].pricePullWeeds}</h2>
      `
      service3 = 0;
      service3 += services[2].pricePullWeeds
      totalAmount = service1 + service2 + service3
      totalAmountEl.innerHTML = `$${totalAmount}`
    }
)
// PULL WEED REMOVE
function closePullWeeds(){
    pullWeedsOutput.innerHTML = ``;
    totalAmount -= services[2].pricePullWeeds
    totalAmountEl.innerHTML = `$${totalAmount}`
}
