function randColor()
{
     const color1 = Math.floor(Math.random()*256)
     const color2 = Math.floor(Math.random()*256)
     const color3 = Math.floor(Math.random()*256)
     return `rgb(${color1},${color2},${color3})`;
}
const letters = document.querySelectorAll('.letter')
setInterval(function(){
    for (let letter of letters)
    {
        letter.style.color = randColor()
    }
    
}, 1000);
/*const h = document.querySelector('h1');
h.style.textAlign="center";
h.style.position="fixed";
h.style.top="50%";
h.style.left="50%";*/