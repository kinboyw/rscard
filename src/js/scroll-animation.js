!function(){   

    effect()

    //滚动距离大于60像素时触发导航栏样式改变
    window.onscroll = function(){
        if(scrollY > 60){
            topNavBar.classList.add("scroll");
        } 
        if(scrollY <= 60){
            topNavBar.classList.remove("scroll");
        }
       effect() 
    }
    //滚动时，对应菜单响应
    function effect(){
        let datax = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i = 0;i < datax.length;i++){
            if(Math.abs(datax[i].offsetTop - window.scrollY) < Math.abs(datax[minIndex].offsetTop - window.scrollY)){
                minIndex = i
            }
        }
        var id = datax[minIndex].id
        //按钮高亮效果
        var menu = document.querySelector('a[href="#' + id + '"]').parentNode
        var active = document.querySelector('nav.menu > ul > li.highlight')
        if(active)active.classList.remove('highlight')
        menu.classList.add('highlight')

        //滚动上浮效果
        datax[minIndex].classList.remove('offset')
    }
}.call()