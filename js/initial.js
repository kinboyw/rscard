!function(){
    prop1.onclick = function() {
        portfolioBar.className = "bar state1"
      }
    prop2.onclick = function() {
        portfolioBar.className = "bar state2"
      }
    prop3.onclick = function() {
        portfolioBar.className = "bar state3"
      }

    //下沉
    let datax = document.querySelectorAll('[data-x]')
    for(let i = 0;i< datax.length;i++){
        datax[i].classList.add('offset')
    }
}.call()