const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    create
};

function getAll() {
    return db('cars');
}

function getById(id) {
    return db('cars').where({ id }).first()
}

function create(car) {
    return db('cars').insert(car)
    .then((id) => {
        return db('cars').where({id}).first()
    })
}