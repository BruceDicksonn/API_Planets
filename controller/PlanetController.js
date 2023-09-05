const Planet = require('../models/planets');
const Satelites = require('../models/satelites');

module.exports = {

    async insert(req,res){

        const { name, position } = req.body;

        try {
            const planet = await Planet.create({ name, position });
            res.status(200).json(planet);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async find(req,res){

        const { id } = req.params;

        try {
            const planet = await Planet.findByPk(id, { include: Satelites });
            res.status(200).json(planet);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async findAll(req, res){
        try {
            const planets = await Planet.findAll({include: Satelites});
            res.status(200).json(planets);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async update(req,res){

        const { id } = req.params;
        const { name, position } = req.body;

        try {
            const affectedLines = await Planet.update({name,position}, {where: { id }});
            const updated = await Planet.findByPk(id) || {};
            res.status(200).json({ planet: updated, message: `Sucesso ao atualizar planeta. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async remove(req, res){

        const { id } = req.params;

        try {
            const removed = await Planet.findByPk(id) || {};
            const affectedLines = await Planet.destroy({where: { id }});
            res.status(200).json({ planet: removed ,  message: `Sucesso ao deletar planeta. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}