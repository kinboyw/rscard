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
    
    effect()
    window.onscroll = function(){
        if(scrollY > 60){
            topNavBar.classList.add("scroll");
        } 
        if(scrollY <= 60){
            topNavBar.classList.remove("scroll");
        }
       effect() 
    }
    function effect(){
        let datax = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i = 0;i < datax.length;i++){
            if(Math.abs(datax[i].offsetTop - window.scrollY) < Math.abs(datax[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        var id = datax[minIndex].id
        var menu = document.querySelector('a[href="#' + id + '"]').parentNode
        var active = document.querySelector('nav.menu > ul > li.highlight')
        if(active)active.classList.remove('highlight')
        menu.classList.add('highlight')

        datax[minIndex].classList.remove('offset')
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
            var top = e.clientY - offset.top + scrollY + 'px'
            var left = e.clientX - offset.left + 'px'
            var mask = icon.querySelector('.mask')
            mask.style.top = top
            mask.style.left = left
            icon.classList.add('active')
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
    var titles = document.querySelectorAll(".topNavBar nav > ul > li > a");
    for(let i = 0;i < titles.length;i++){
        var title = titles[i];
        title.addEventListener("click",(e)=>{
            e.preventDefault();
            var top = document.querySelector(e.currentTarget.getAttribute("href")).offsetTop;
            var targetTop = top - 80;
            var currentTop = window.scrollY;
            var coords = { y: currentTop };
    var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, 500) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() {
            window.scrollTo(0,coords.y)
        })
        .start(); 
        })
    }
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    let liTags = document.querySelectorAll('nav.menu > ul > li')
    for(let i=0; i<liTags.length; i++){
      liTags[i].onmouseenter = function(x){
        x.currentTarget.classList.add('active')
      }
      liTags[i].onmouseleave = function(x){
        x.currentTarget.classList.remove('active')
      }
    } 
    let datax = document.querySelectorAll('[data-x]')
    for(let i = 0;i< datax.length;i++){
        datax[i].classList.add('offset')
    }
}