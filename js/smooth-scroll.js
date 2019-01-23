!function(){    //非线性滚动效果
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
}.call()