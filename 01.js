const app=new Vue({
el: '#app',
data:{
titulos:"Hola mundo con vue",
frutas [
{nombre:'pera', cantidad:5},
{nombre:'manzana', cantidad:3},
{nombre:'platano', cantidad:5},
{nombre:'durazno', cantidad:0}
],

nuevafruta: ''
},

methods:{
  agregarfruta (){
     this.frutas.push({
        nombre:this.nuevafruta, cantidad:0
     })

  }

}

}

})