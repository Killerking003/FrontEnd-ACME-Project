/*Footer content kód */ 

document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector('.footer-content')) {
        document.querySelector('.footer-content').innerHTML = '<div><span>ACME</span></div>';
    }
});

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

/* Main Nav kód - sajnos még nem lettem kész vele! -van egy nav_footer.js:39 Uncaught TypeError: Cannot set properties of null - majd javítani fogom, de a működést nem befolyásolja*/ 

function myFunction(x) {
    if (x.matches) { 
        document.querySelector('.header-and-navigation_main').innerHTML = '<header><span><a href="index.html" id="href_logo">ACME</a></span></header><ul><li><a href="./ceginformacio.html">Céginformáció</a></li><li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li><li><a href="./kapcsolat.html">Kapcsolat</a></li></ul>';
    } 
    else {
        document.querySelector('.header-and-navigation_main').innerHTML = '<header><span><a href="index.html" id="href_logo">ACME Inc.</a></span></header><ul><li><a href="./ceginformacio.html">Céginformáció</a></li><li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li><li><a href="./kapcsolat.html">Kapcsolat</a></li></ul>';
    }
  }
  
  var x = window.matchMedia("(max-width: 372px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
});






