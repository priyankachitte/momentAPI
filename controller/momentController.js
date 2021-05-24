const db = require("../model");
const Moments = db.moments;

const createMoment = (req, res) => {
    const { body } = req;

    body.createdAt = new Date();
    const moments = new Moments(body);
    
    moments.save(moments)
        .then(data => res.send(data))
        .catch(error => {
            res.status(500).send({
                message:
                error.message || "Some error occurred while creating the User."
            });
        });
};

const updateMoment = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Moments.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot update moment with id=${id}. Maybe moment was not found!`
            });
        } else res.send({ message: "Moment was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating moment with id=" + id
        });
    });
};


const deleteMoment = (req, res) => {
    const id = req.params.id;

    Moments.findByIdAndRemove(id)
        .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete moment with id=${id}. Maybe moment was not found!`
            });
        } else {
            res.send({
                message: "Moment was deleted successfully!"
            });
        }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete moment with id=" + id
            });
        });
};

const getMomentByUser = (req, res) => {
    const userId = req.params.userId;

    Moments.find({ userId })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving moments."
            });
        });
};
 
module.exports = {
    createMoment,
    updateMoment,
    deleteMoment,
    getMomentByUser
};
