//i get the input temperature in celcius and farenheight
const celcius = document.getElementById('celcius')
const farenheigth = document.getElementById('farenheigth')


// i get a means to convert from one temperature measurement to the other
document.getElementById('celciusButton').addEventListener('click',()=>{
    let celciusValue = parseFloat(celcius.value)
    let farenheitValue = (celciusValue *1.8 ) + 32


//i get a means to output the converted temperature 

    document.getElementById('celciusOutput').textContent = `${celciusValue}C to farenheight is: ${farenheitValue}F`
    console.log(farenheitValue);
    
})


document.getElementById('farenheigthButton').addEventListener('click',()=>{
    let farenheigthValue = parseFloat(farenheigth.value)
    let  celciusValue  = (farenheigthValue - 32 ) / 1.8

    //i get a means to output the converted temperature 

    document.getElementById('farenheithOutput').textContent = `${farenheigthValue}F to farenheight is: ${celciusValue}C`
    console.log(celciusValue);
    
})
