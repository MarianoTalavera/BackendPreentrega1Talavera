class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1;
    }
    addProducts({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id
    }) {
        id = this.id;
        const verificarCode = this.products.some((product) => {
            return product.code === code;
        });
        if (verificarCode) {
            console.log("El código está repetido")
        } else if (
            title != "" &&
            description != "" &&
            price != "" &&
            thumbnail != "" &&
            stock != "" &&
            code != "" && 
            title != undefined &&
            description != undefined &&
            price != undefined &&
            thumbnail != undefined &&
            stock != undefined &&
            code != undefined
        ) {
            console.log("Producto OK!");
            this.products.push({
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id,
            } );
            this.id = this.id + 1;
        } else {
            console.log("Faltan campos para completar");
        }
    }
    getProducts() {
        return this.products
    }
    getProductsById(id) {
        const encontroId = this.products.find(e => e.id === id)
        if (encontroId) {
            return encontroId
        }
        else {
            return "Not Found"
        }}}