const colors = ['red', 'green', 'rgba(3,1,252)' , '#f003fc'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomNumber = getRandomNumber();
  document.body.style.background = colors[randomNumber];
  color.innerText =  colors[randomNumber];
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}