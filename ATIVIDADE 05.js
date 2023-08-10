const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];
const filtrado = usuários.filter((usuario) => {
    return usuario.idade >= 18 && usuario.idade <= 65;
});
const todosHabilitados = filtrado.every((usuario) => {
    return usuario.habilitado === true;
})
if (todosHabilitados) {
    console.log("Todos habilitados");
} else {
    console.log("Todos precisam ser habilitados");
};