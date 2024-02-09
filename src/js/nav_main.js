
/* Main Nav kód */ 

function myFunction(x) {
    if (x.matches) { 
        document.querySelector('.header-and-navigation_main').innerHTML = '<header><span><a href="index.html" id="href_logo">ACME</a></span></header><ul><li><a href="./ceginformacio.html">Céginformáció</a></li><li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li><li><a href="./kapcsolat.html">Kapcsolat</a></li></ul>';
    } 
    else {
        document.querySelector('.header-and-navigation_main').innerHTML = '<header><span><a href="index.html" id="href_logo">ACME Inc.</a></span></header><ul><li><a href="./ceginformacio.html">Céginformáció</a></li><li><a href="./szolgaltatasok.html">Szolgáltatásaink</a></li><li><a href="./kapcsolat.html">Kapcsolat</a></li></ul>';
    }
  }
  
  var x = window.matchMedia("(max-width: 376px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
});
