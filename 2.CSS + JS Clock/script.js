console.log('Js Loded...');

const secondhand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourhand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondhand.style.transform = 'rotate('+secondsDegrees+'deg)';
   // console.log(seconds);

   const mins = now.getMinutes();
   const minsDegrees = ((mins / 60) * 360) + 90;
   minhand.style.transform = 'rotate('+minsDegrees+'deg)';
   console.log(mins);

   const hours = now.getHours();
   const hoursDegrees = ((hours / 12) * 360) + 90;
   hourhand.style.transform = 'rotate('+hoursDegrees+'deg)';
}

setInterval(setDate, 1000);