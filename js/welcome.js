!function(){    //加载动画
    window.onload = function(){
        var time = Math.random()*2000;
        setTimeout(() => {
            siteWelcome.classList.remove("active");
            document.querySelectorAll('[data-x]')[0].classList.remove("offset");//第一板块自动上浮
        }, time);
    }
}.call()