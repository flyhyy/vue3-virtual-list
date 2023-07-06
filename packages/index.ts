import  VirtualList  from './virtual-list/src/index.vue'

export  {VirtualList}

const   components = [VirtualList]

const  install = (app,options)=>{
    components.forEach((item)=>{
        app.component(item.name,item)
    })
}
export  default  {
  install
}