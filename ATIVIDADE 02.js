const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
const existePalavraInv = palavras.some((valor) => {
    return valor.length > 5;
});
if (existePalavraInv) {
    console.log(`existe palavra inválida`);
} else {
    console.log(`validado`);
};