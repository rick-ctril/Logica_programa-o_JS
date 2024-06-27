/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressôes precisam ser verdadeiras para retornar true
|| _-> OR -> OU -> Só retorna false se todas as expressões forem false
! -> NOT -> NÃO
*/

//const expressaoAnd = true && true && false && true;
//const expressaoOr = false || true || false || true;
//console.log(expressaoAnd)

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                            True                False
const vaiLogar = usuario === 'Luiz' && senha === '1234567';
console.log(vaiLogar)
