
class Product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}


class ProductManager{
    static newId = 0
    constructor(){
        this.products = []
    }
    
    addProduct(newProduct){
        //Valido que estén todos los campos completos
        if(Object.values(newProduct).includes(" ") || Object.values(newProduct).includes(null)){
            console.log("Completar todos los campos")
        } else{
            //Valido que no se repita code
            const sameCode = this.products.find((prod) => prod.code === newProduct.code)
            if(sameCode){
                console.log(`Código ${sameCode.code} ya existe.`)
            }else{
                this.products.push({...newProduct, id: ++ProductManager.newId})
            }
        }
    }


    getProducts(){
        return this.products
    }

    getProductById(id){
        const buscarProduct = this.products.find(product => product.id === id)
        if(buscarProduct){
            return JSON.stringify(buscarProduct);
        }else{
            console.log("Not Found")
        }
    }
}

const producto1 = new ProductManager()

console.log(producto1)

//agrego un producto con todos los campos completos
producto1.addProduct({
    title: "Frutilla suave",
    description: "Sillón",
    price: 35000,
    thumbnail:  "https://firebasestorage.googleapis.com/v0/b/nube-lila.appspot.com/o/sirosa.png?alt=media&token=76bd52f6-874b-4def-9c42-767d6fcee391", //ruta
    code: 4,
    stock: 4
})


//faltan completar campos
producto1.addProduct({
    title: "Amor por los flamencos",
    description: " ",
    price: " ",
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/nube-lila.appspot.com/o/flamencos.png?alt=media&token=2a4551be-53f3-4663-926d-4b0e1e669a46",
    code: 32,
    stock: 5
})


//distinto producto pero mismo code
producto1.addProduct({
    title: "Velas de amor",
    description: "Deco navideña",
    price: 1200,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/nube-lila.appspot.com/o/velas.png?alt=media&token=a9eb87db-e00c-48e8-8652-761d0420b275",
    code: 22,
    stock: 10
})

producto1.addProduct({
    title: "Puffs divertidos",
    description: "Set de puffs",
    price: 15000,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/nube-lila.appspot.com/o/setpuffs.png?alt=media&token=cdff7e6e-fa93-41b2-bdf8-7047a9f3ee11",
    code: 22,
    stock: 15
})

console.log(producto1)

producto1.getProductById(1)
producto1.getProductById(2)
producto1.getProductById(3)

