// provide a means to chose a definite time
const show = document.getElementById('show')//this is the reference to the button
const display = document.getElementById('display')
const countdown = document.getElementById('countdown')

show.addEventListener('click', function(){
   const chosenDate =  document.getElementById('input').value
   let pickedDate = new Date(chosenDate).getTime()//the getTime method converts the time to millisecond thereby allowing for comparison


   //provide a means to define that time i.e birthday, going to church etc
   const purposeDetail = document.getElementById('purpose').value
   // console.log(purposeDetail);

   //getting the current time and comparing the two times
   let now = new Date().getTime()
   console.log(now);

   //providing conditions that ensure that the user time is in the future
   if (pickedDate > now){
    console.log('hey');

   let count = 1000// because 1000ms makes 1sec
   const intervalID = setInterval(() => {

                           count--
                           pickedDate -= count 
                           let countDown = new Date(pickedDate).getTime()

                           pickedDate = new Date(pickedDate).getTime()
                           now = new Date().getTime()
                           // console.log('this is the countdown'+countDown);
                          countdown.innerText = new Date(pickedDate).
                           if((pickedDate + 1000 || pickedDate - 1000) <= now){
                              clearInterval(intervalID)
                           console.log(`yipee!!! it's time for :  ${purposeDetail}`)
                           return
                           }
                        }, 1000);
   }else{
    console.log('hello');
    
   }
   

   

})




// proving a means to count down to when it coincides with the real time





