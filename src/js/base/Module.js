

window.Module = function(options){
    let tableName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'yQWlOWjf17el47pQq0S3VX25-gzGzoHsz'
            var APP_KEY = '7na7s2F6YFcqmM8FxuXAEcRo'
            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch:function(){
            let message = new AV.Query(tableName)
            return message.find() // promise
        },
        save:function(object){
            var Message = AV.Object.extend(tableName)
            var message = new Message()
            return message.save(object)
        }
    }
}