console.log("Ejemplo práctica de git")
let cine={
    nombre:"Cine-mira-mucho",
    productos:[
        {
            nombre:"palomitas",
            tamaño:["pequeño","mediano","grande"],
            precio:5
        },
        {
            nombre:"refresco",
            precio:3
        },
        {
            nombre:"entrada",
            precio:8
        },
        {
            nombre:"gafas3D",
            precio:3
        }
    ]
}
//Crea una función para comprar palomitas y refrescos
function comprar(cine, cantidad,producto_pedido){
    let total=0
    for(let cada_producto of cine.productos){
        if(cada_producto.nombre=="palomitas"){
            console.log("Otros tamaños incluyen:")
            for(let cada_tamaño of cada_producto.tamaño){
                console.log("Tamaño "+cada_tamaño)

            }
        }
        if(cada_producto.nombre==producto_pedido){
            total=cada_producto.precio*cantidad
        }
    }
    return total
}
console.log(comprar(cine,2,"palomitas"))//Devuelve el total a pagar