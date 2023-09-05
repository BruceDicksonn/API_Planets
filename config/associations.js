const Planets = require('../models/planets');
const Satelites = require('../models/satelites');
const Caps = require('../models/caps');
const Spaceships = require('../models/spaceships');

Planets.hasMany(Satelites, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Satelites.belongsTo(Planets, {
    foreignKey: "planetId",
    as: "planets"
});

Caps.belongsToMany(Spaceships, {
    foreignKey: "capID", // coluna da tabela intermediaria que representa a foreignKey da model target
    through: "capSpaceships", // String name da tabela intermediária
    as: "spaceships" // coluna de ligação que será inserida na tabela com os dados da model passada como arg
});

Spaceships.belongsToMany(Caps, {
    foreignKey: "spaceshipID",
    through: "capSpaceships",
    as: "caps"
});

module.exports = { Planets, Satelites, Caps, Spaceships }