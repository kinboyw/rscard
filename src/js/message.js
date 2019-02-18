!function () {
  var module = Module({resourceName:'Message'})
  var view = View('section.message')
  var controller = Controller({
    messageList:null,
    form:null,
    init:function(view,module){
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.loadMessage()
    },
    bindEvents:function(){
      this.form.addEventListener('submit',(e)=>{
        e.preventDefault()
        this.saveMessage()
      })
    },
    loadMessage:function(){
      this.module.fetch().then(
        (message)=>{
          let arr = message.map(item=>item.attributes)
          arr.forEach(item=>{
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.appendChild(li)
          })
        }
      )
    },
    saveMessage:function(){
      let myform = document.querySelector('form')
      let content = myform.querySelector('input[name=content]').value
      let name = myform.querySelector('input[name=name]').value
      this.module.save({
        'name':name,
        'content':content
      }).then((object)=>{
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          myForm.querySelector('input[name=content]').value = ''
        }
      )
    },
  })

  controller.init(view,module)
}.call()
