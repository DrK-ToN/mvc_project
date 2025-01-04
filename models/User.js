const users = [
    { nome: "Everton", email: "everton@email.com" },
    { nome: "João", email: "joao@email.com" },
    { nome: "Maria", email: "maria@email.com" },
    { nome: "Pedro", email: "pedro@email.com" },
    { nome: "Lucas", email: "lucas@email.com" },
];

function addUser(nome, email) {
    const user = { nome, email };
    users.push(user);
    return user;
}

function getUsers() {
    return users;
}

module.exports = {
    addUser,
    getUsers,
};
