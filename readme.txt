DESAFÍO ENTREGABLE - PROCESO DE TESTING: Clases con ECMAScript y ECMAScript avanzado
Se creará una instancia de la clase “ProductManager”
  const productManager = new ProductManager();

Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
  console.log(productManager.getProducts());

Se llamará al método “addProduct” con los campos:
  productManager.addProducts({
	title:'Producto Prueba',
	description:'Este es un Producto Prueba',
	price:200,
	thumbnail:'Sin imagen',
	code:'abc123',
	stock:25
})

El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
	console.log(productManager.getProducts());

Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManager.addProducts({
	title:'Producto Prueba',
	description:'Este es un Producto Prueba',
	price:200,
	thumbnail:'Sin imagen',
	code:'abc123',
	stock:25
})

Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo. En caso de no coincidir ningún id, mostrar en consola un error “Not found”. Por ejemplo, el id = 1
	console.log(productManager.getProductsById(1));