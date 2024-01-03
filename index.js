function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function yes()
{
    const gif = document.getElementById("gifff");
    gif.src = "https://www.icegif.com/wp-content/uploads/2023/09/icegif-504.gif";
    const textt = document.getElementById("text");
    textt.innerHTML = "YAY :D";
    document.getElementsByClassName("buttons")[0].style.display = "none";
}

function no()
{
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const _button = document.getElementById("two");
    _button.style.top = getRandomInt(windowH - 40) + 'px';
    _button.style.left = getRandomInt(windowW - 100) + 'px';
}

window.onload = function()
{
   document.getElementById("two").addEventListener("mouseover", no, false); 
   document.getElementById("two").addEventListener("click", no, false); 
}