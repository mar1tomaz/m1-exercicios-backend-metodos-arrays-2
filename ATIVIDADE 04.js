const numeros = [0, 122, 4, 6, 7, 8, 44];
const validacaoArray = numeros.every((valor) => {
    return valor % 2 === 0;
})
if (validacaoArray) {
    console.log(`Valido`)
} else {
    console.log(`Invalido`)
}