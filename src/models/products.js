const {readFileSync,writeFileSync,unlinkSync,existsSync} = require('fs');
const {resolve} = require('path');
const model = {
    file: resolve(__dirname , '../data','products.json'),
    read: () => readFileSync(model.file),
    list: () => JSON.parse(model.read()),
    convert: data => JSON.stringify(data, null, 2),
    write: data => writeFileSync(model.file,model.convert(data)),
    all: () => model.list().filter(producto => producto.stock > 0),
    filter: (propiedad, valor) => model.all().filter(producto => typeof valor !== "string" ? producto[propiedad] == valor : producto[propiedad].includes(valor)),
    match: (propiedad, valor) => model.all().find(producto => producto[propiedad] == valor),
    generate: data => Object({
        id: model.list().length > 0 ? model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0).pop().id + 1 : 1,
        name: data.name,
        description: data.description,
        price: Number(data.price),
        amount: Number(data.amount),
        stock: Number(data.stock),
        files: data.files && data.files.length > 0 ? data.files.map(file => file.filename): null 
    }),
    create: data => {
        let lista = model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0);
        lista.push(data);
        model.write(lista);
    },
    update: data => {
        let productos = model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0);
        productos = productos.map((producto) =>{
            if(producto.id == data.id){
                producto.name = data.name;
                producto.price = Number(data.price);
                producto.description = data.description;
                producto.amount = data.amount;
                producto.stock = Number(data.stock);
                producto.files = data.files && data.files.length > 0 ? data.files.map(file => file.filename): null
                return producto;
            }
            return producto;
        })
        model.write(productos);
    },
    trash: id => {
        let productos =model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0);
        model.write(productos.filter(producto => producto.id != id));
    }
}

module.exports = model;