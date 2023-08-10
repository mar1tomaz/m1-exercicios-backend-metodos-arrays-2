const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const existeBebidaAlcoolica = palavras.some((valor) => {
    return valor === 'cerveja' || valor === 'cerveja';
});
if (existeBebidaAlcoolica) {
    console.log(`revise sua lista, joão. possui bebida com venda proibida!`);
} else {
    console.log(`liberado`);
};