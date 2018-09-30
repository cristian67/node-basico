const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 100
        }
    })
    .help()
    .argv;

const color = require('colors');

const { CrearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('Crear');
        CrearArchivo(argv.base)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no admitido');
        break;
}



//let parametro = argv2[2];
//castear el valor del arreglo. {base=, 5 }
// let base = parametro.split('=')[1];
// console.log(base);