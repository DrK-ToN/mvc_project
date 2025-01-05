const userModel = require("../models/User");

function renderUsers(req, res) {
    const users = userModel.getUsers();
    res.render("lista", { users });
}

module.exports = {
    renderUsers,
};
