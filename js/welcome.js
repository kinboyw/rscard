!function(){    //加载动画
    window.onload = function(){
        setTimeout(() => {
            siteWelcome.classList.remove("active");
            document.querySelectorAll('[data-x]')[0].classList.remove("offset");//第一板块自动上浮
        },0);
    }
}.call()
