console.log("Ejemplo práctica de git")
let cine={
    nombre:"Cine-mira-mucho",
    productos:[
        {
            nombre:"palomitas",
            precio:5
        },
        {
            nombre:"refresco",
            precio:3
        }
    ]
}
//Crea una función para comprar palomitas y refrescos
function comprar(cine, cantidad,producto_pedido){
    for(let cada_producto of cine.productos){
        console.log(cada_producto)
        if(cada_producto.nombre==producto_pedido){
            console.log(true)
        }
    }

}
console.log(comprar(cine,2,"palomitas"))