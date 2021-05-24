const db = require("../model");
const Users = db.users;
let crypto = require('crypto');
var shasum = crypto.createHash('sha1');

sha1 = (data) => {
    return crypto.createHash("sha1").update(data, "binary").digest("hex");
}

const registerUser = (req, res) => {
    const { body } = req;

    Users.find({ email: body.email })
        .then(userData => {
            if(userData) {
                res.status(403).send({
                    message: "Email address already registered!"
                });
            }

            body.createdAt = new Date();
            body.password = sha1(body.password);
            const user = new Users(body);
            user.save(user)
                .then(data => res.send(data))
                .catch(error => {
                    res.status(500).send({
                        message:
                            error.message || "Some error occurred while creating the User."
                    });
                });
        });
};

const login = (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    Users.find({ email: email, password: sha1(password) })
        .then(data => {
            if (data.length == 0) {
                res.status(404).send({ message: "Invalid email or password" })
            }
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Some error occurred while retrieving the User."
            });
        });
};

module.exports = {
    registerUser,
    login
};
