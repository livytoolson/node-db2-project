const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
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

function update(id, car) {
    return db('cars').where({ id }).update(car)
}

function remove(id) {
    return db('cars').where({ id }).del()
}