init();


function init(){
    prop1.onclick = function() {
        portfolioBar.className = "bar state1"
      }
    prop2.onclick = function() {
        portfolioBar.className = "bar state2"
      }
    prop3.onclick = function() {
        portfolioBar.className = "bar state3"
      }
    window.onscroll = function(){
        if(scrollY > 60){
            topNavBar.classList.add("scroll");
        } 
        if(scrollY <= 60){
            topNavBar.classList.remove("scroll");
        }
    }
    window.onload = function(){
        var time = Math.random()*3000;
        setTimeout(() => {
            siteWelcome.classList.remove("active");
        }, time);
    }

    var iconbtns = document.querySelectorAll('footer.media a');
    for(let i = 0;i<iconbtns.length;i++){
        let icon = iconbtns[i]
        icon.addEventListener('mousedown',(e)=>{
            var offset = getOffset(e.currentTarget)
            var top = e.clientY - offset.top + 'px'
            var left = e.clientX - offset.left + 'px'
            var mask = icon.querySelector('.mask')
            mask.style.top = top
            mask.style.left = left
            icon.classList.add('active')
            console.log("iconbutton")
        })
        icon.addEventListener('transitionend',(e)=>{
            icon.classList.remove('active')
        })
    }
    function getOffset(obj){
        var offset = {left:0,top:0}
        while(obj){
            offset.left += obj.offsetLeft
            offset.top += obj.offsetTop
            obj = obj.offsetParent
        }
        return offset
    }
}