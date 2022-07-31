// target all dom
const subtraction = document.querySelector('.decrement img');
const addition = document.querySelector('.increment img');
const resetImg = document.querySelector('.reset-item img');
const incrementValue = document.querySelector('.increment');
const decrementValue = document.querySelector('.decrement');
const resetValue = document.querySelector('.reset-item');
const currentValue = document.querySelectorAll('.result-output');
let initialValue = 0;
console.log(currentValue);
// change image src when a user hover on
// change image src when a user hover out
function changeImg(){
  subtraction.addEventListener('mouseover', (event) => {
    hoverImage(event, subtraction);
  });
  subtraction.addEventListener('mouseleave', (event) => {
   hoverOut(event, subtraction)
  });

  addition.addEventListener('mouseover', (event) => {
    hoverImage(event,addition);
  });
  addition.addEventListener('mouseleave', (event) => {
    hoverOut(event, addition)
   });
   resetImg.addEventListener('mouseover', (event) => {
    hoverImage(event, resetImg);
   })
   resetImg.addEventListener('mouseleave', (event) => {
    hoverOut(event, resetImg);
   })


}
// hover in
const hoverImage = (event,element) => {
// checking which element user hovered
if(element.alt.includes('subtraction')){
   event.path[0].src = './assets/subtractbtnpress.png';
   
}
else if(element.alt.includes('reset')){
  event.path[0].src = './assets/resetbtnpress.png';
}
else{
 event.path[0].src = './assets/addbtnpress.png'
}
}
// hover out
const hoverOut = (event,element) => {
    console.dir(element);
    if(element.alt.includes('subtraction')){
      event.path[0].src = './assets/subtractbtn.png';
    }else if(element.alt.includes('reset')){
      event.path[0].src = './assets/resetbtn.png';
    }
    else{
      event.path[0].src = './assets/addbtn.png';
      event.path[0].style.height = '100%';
    }
}


function changeOutPut(initvalue){
  for(let x = 0; x < currentValue.length; x++){
    currentValue[x].innerText = initvalue;
   }
}

// increment current value
incrementValue.addEventListener('click', () => {
  initialValue++;
  changeOutPut(initialValue)
})
decrementValue.addEventListener('click', () => {
  initialValue--;
  initialValue = initialValue < 0 || !initialValue || initialValue === Infinity ? 0 : initialValue;
  changeOutPut(initialValue)
})

resetValue.addEventListener('click', () => {
  initialValue = 0;
  changeOutPut(initialValue)
})

window.addEventListener('load', () => {
  changeImg();
})