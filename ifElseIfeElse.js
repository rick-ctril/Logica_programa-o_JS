/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
 */

// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

//const hora = 23;

//if (hora >= 0 && hora <= 11) {
//    console.log("Bom dia!")
//} else if (hora >= 12 && hora <= 17) {
//    console.log("Boa tarde!")
//} else if (hora >= 18 && hora <= 23) {
//    console.log("Boa noite!")
//} else {
//    console.log("Olá!")
//}

//const tenhoGrana = 'tenho';

//if (tenhoGrana) {
//    console.log('Vou sair de casa');
//} else {
//    console.log('Não vou sair de casa');
//}


const numero = 10;

// Se (numero >= 0 && numero  <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (número >= 9 && número <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número está entre 0 e 11.');
}
