window.Controller = function(options){
    var init = options.init

    let object = {
        view:null,
        module:null,
        init:function(view,module){
            this.view = view
            this.module = module
            this.module.init()
            init.call(this,view,module)
            this.bindEvents.call(this)
        }
    }

    for(let key in options){
        if(key!='init'){
            object[key] = options[key]
        }
    }
    return object
}