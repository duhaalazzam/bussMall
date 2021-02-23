/* eslint-disable indent */
'use strict';
let maximumClicks = 25;
let attempts = 0;
let leftImageElement = document.getElementById('leftImage');
let middleImageElement = document.getElementById('midleImage');
let rightImageElement = document.getElementById('rightImage');
let containerEl = document.getElementById('container');
let button= document.getElementById('result');
let arrOfObjects = [];
let pre=[];
let list=[];
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
  while(leftImageIndex === rightImageIndex||leftImageIndex=== middleImageIndex||rightImageIndex === middleImageIndex||pre.includes(leftImageIndex)||pre.includes(middleImageIndex)||pre.includes(rightImageIndex))
  {
    leftImageIndex = generateRandomIndex();
    middleImageIndex= generateRandomIndex();
    rightImageIndex=generateRandomIndex();
  }
  pre[0]=leftImageIndex;pre[1]=middleImageIndex;pre[2]=rightImageIndex;
  arrOfObjects[leftImageIndex].showen ++;
  arrOfObjects[middleImageIndex].showen ++;
  arrOfObjects[rightImageIndex].showen ++;
  leftImageElement.setAttribute('src', arrOfObjects[leftImageIndex].source);
  middleImageElement.setAttribute('src',arrOfObjects[middleImageIndex].source);
  rightImageElement.setAttribute('src', arrOfObjects[rightImageIndex].source);
}
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
    saveProducts();
  }
}
function resultFun()
{
  getProducts();
  if(list){
  let unorderdList = document.getElementById('unList');
  unorderdList.innerHTML='';
  let li;
  for(let i = 0 ; i < list.length; i++){
    li = document.createElement('li');
    unorderdList.appendChild(li);
  li.textContent = `${list[i].name} it has ${list[i].votes} Votes.and also it had been showen  ${list[i].showen} times.`;
  }
  }
}

function saveProducts(){
  localStorage.clear();
  let products = JSON.stringify(arrOfObjects);
  localStorage.setItem('AllProducts', products);
}
function getProducts(){
  let gettingProducts = localStorage.getItem('AllProducts');
  list = JSON.parse(gettingProducts);
  }

renderThreeRandomImages();
containerEl.addEventListener('click', handleClicking);
button.addEventListener('click',resultFun);



