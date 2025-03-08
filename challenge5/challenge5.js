//i define the interest rate through an input
const interestRate = document.getElementById('interestRate')
const principalAmount = document.getElementById('principalAmount')
const timeInYears = document.getElementById('timeInYears')


//i use the simple interest formula to calculate simple interest
document.getElementById('calculateButton').addEventListener('click',()=>{
    const interest = (parseFloat(principalAmount.value )* parseFloat(interestRate.value) * parseFloat(timeInYears.value)) / 100
    document.getElementById('interest').innerHTML = `Simple Interest: ${interest}`
    document.getElementById('interest').style.color = 'green'
    document.getElementById('interest').style.fontSize = '20px'
    document.getElementById('interest').style.fontWeight = 'bold'
 
})

//i use a click action to display the calculated simple interest at the given interest rate.