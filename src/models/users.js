const {readFileSync,writeFileSync,unlinkSync,existsSync} = require('fs');
const {hashSync,compareSync} = require('bcrypt');
const {resolve} = require('path');
const model = {
    file: resolve(__dirname , '../data','users.json'),
    read: () => readFileSync(model.file),
    list: () => JSON.parse(model.read()),
    convert: data => JSON.stringify(data, null, 2),
    write: data => writeFileSync(model.file,model.convert(data)),
    generate: data => Object({
        id: model.list().length > 0 ? model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0).pop().id + 1 : 1,
        name: data.name,
        userName: data.userName,
        email: data.email,
        password: hashSync(data.password, 10),
        telephone: data.telephone,
        birthDate: data.birthDate,
        address: data.address,
        files: data.files && data.files.length > 0 ? data.files.map(file => file.filename): null 
    }),
    create: data => {
        let lista = model.list().sort((a,b) => a.id < b.id ? -1 :a.id > b.id ? 1 : 0);
        lista.push(data);
        model.write(lista);
    },
 }

 module.exports = model;