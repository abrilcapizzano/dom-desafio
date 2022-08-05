class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}
const productos = [];
productos.push(new Producto("Remera", 300, 1))
productos.push(new Producto("Pantalon", 500, 2))
productos.push(new Producto("Camisa", 400, 3))
productos.push(new Producto("Campera", 600, 4))
const listaProductos = document.getElementById('seccion-productos')
for (const producto of productos) {
    const article = document.createElement('article')
    article.className = 'item'
    const p = document.createElement('p')
    p.className = 'titulo'
    p.innerText = producto.nombre + ' ' + producto.precio + ' pesos'
    const div = document.createElement('div')
    div.className = 'div'
    div.innerHTML = '<div> <img src="./img/productos.jpg"  width="200px" alt=""></div>'
    article.append(p, div)
    listaProductos.append(article)
}
