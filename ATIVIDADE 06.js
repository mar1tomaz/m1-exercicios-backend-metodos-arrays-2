const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];
const cidadesValidas = cidades.filter((nome) => {
    return nome.length <= 8;
})
console.log(cidadesValidas);
