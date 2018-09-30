//Require
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    let dato = '';
    for (let i = 1; i <= limite; i++) {
        console.log(dato += (`${base} * ${i} = ${base*i} \n`.green));
    }

}

let CrearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es numero, longi ql');
            return;
        }

        let dato = '';
        for (let i = 1; i <= 10; i++) {
            dato += (`${base} * ${i} = ${base*i} \n`);
        }

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`./tablas/tabla_de_${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla_de_${base}.txt`);
        });

    });
}

module.exports = {
    CrearArchivo,
    listarTabla
}