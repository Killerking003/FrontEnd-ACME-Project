/*Landing nav kód */ 

document.addEventListener("DOMContentLoaded", function () {
     // Kiválasztjuk a nav elemet
     var navElement = document.querySelector('.header-and-navigation');
     // Ellenőrizzük, hogy találtuk-e a nav elemet
     if (navElement) {
         // Kiírjuk a tartalmát ha van
         console.log(navElement.innerHTML);
         document.querySelector('.header-and-navigation').innerHTML = '<h1><span>ACME Inc.</span></h1><div id="border-line"></div><ul><li><a href="./ceginformacio.html">Céginformáció</a></li><li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li><li><a href="./kapcsolat.html">Kapcsolat</a></li></ul>';
     }
 });






