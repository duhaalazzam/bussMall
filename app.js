'use strict';
let maximumClicks = 25;
let attempts = 0;
let leftImageElement = document.getElementById('leftImage');
let middleImageElement = document.getElementById('midleImage');
let rightImageElement = document.getElementById('rightImage');
let containerEl = document.getElementById('container');
let button= document.getElementById('result');
let arrOfObjects = [];
function Product(name, source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.showen=0;
  arrOfObjects.push(this);
}
new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.png');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water-can','img/water-can.jpg');
new Product('win-glass','img/wine-glass.jpg');
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
function renderThreeRandomImages(){
  leftImageIndex = generateRandomIndex();
  middleImageIndex =generateRandomIndex();
  rightImageIndex = generateRandomIndex();
  while((leftImageIndex === rightImageIndex)||(leftImageIndex=== middleImageIndex)||(rightImageIndex === middleImageIndex))
  {
    leftImageIndex = generateRandomIndex();
    middleImageIndex= generateRandomIndex();
    rightImageIndex=generateRandomIndex();
  }
  arrOfObjects[leftImageIndex].showen ++;
  arrOfObjects[middleImageIndex].showen ++;
  arrOfObjects[rightImageIndex].showen ++;
  leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source);
  middleImageElement.setAttribute('src',arrOfObjects[middleImageIndex].source);
  rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);
}
renderThreeRandomImages();
function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * arrOfObjects.length);
  return randomIndex;
}
function handleClicking(event){
  attempts++;
  if(attempts <= maximumClicks){
    if(event.target.id === 'leftImage'){
      arrOfObjects[leftImageIndex].votes++;
    }else if(event.target.id === 'rightImage'){
      arrOfObjects[rightImageIndex].votes++;
    }else {
      arrOfObjects[middleImageIndex].votes++;
    }
    renderThreeRandomImages();
  }
  else{
    containerEl.removeEventListener('click', handleClicking);
    button.addEventListener('click',resultFun);
  }
}
containerEl.addEventListener('click', handleClicking);
function resultFun()
{
  let unorderdList = document.getElementById('unList');
  let li;
  for(let i = 0 ; i < arrOfObjects.length; i++){
    li = document.createElement('li');
    unorderdList.appendChild(li);
    li.textContent = `${arrOfObjects[i].name} it has ${arrOfObjects[i].votes} Votes. and also it had been showen  ${arrOfObjects[i].showen} times.`
  }
  button.removeEventListener('click', resultFun);
}
