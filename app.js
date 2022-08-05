class Producto {
    constructor(nombre, precio, id, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.img = img
    }
}
const productos = [];
productos.push(new Producto("Remera", 300, 1,"https://media.istockphoto.com/photos/happy-smiling-man-portrait-picture-id183870483?k=20&m=183870483&s=612x612&w=0&h=n7JfQX0rL9ZnftW2b3e24wENmcAqIMYFSoHesvWWMug="))
productos.push(new Producto("Pantalon", 500, 2, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34e88b84-bd8d-40c2-9348-0e753d1ce070/pants-dri-fit-retro-fly-t1gvkv.png'))
productos.push(new Producto("Camisa", 400, 3, 'https://media.revistagq.com/photos/62b0210c64f1d59a3bd596cd/3:4/w_1290,h_1720,c_limit/mejores%20camisas%20de%20rayas%20hombre.jpg'))
productos.push(new Producto("Campera", 600, 4, 'https://assets.adidas.com/images/w_600,f_auto,q_auto/02f61aebd295495389f1ad1a01057311_9366/Campera_Presentacion_Tiro_River_Plate_Gris_GU9639_21_model.jpg' ))
const listaProductos = document.getElementById('seccion-productos')
for (const producto of productos) {
    const article = document.createElement('article')
    article.className = 'item'
    article.innerHTML = `<p> ${producto.nombre} ${producto.precio} pesos</p>
                        <div> <img class="imagen" src = ${producto.img} alt = " " </div>`
listaProductos.append(article)
}
