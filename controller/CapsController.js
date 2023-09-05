const Caps = require('../models/caps');
const Spaceships = require('../models/spaceships');

module.exports = {

    async insert(req,res){

        const { name, registerNumber } = req.body;

        try {
            const caps = await Caps.create({ name, registerNumber });
            res.status(200).json(caps);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async find(req,res){

        const { id } = req.params;

        try {
            const caps = await Caps.findByPk(id, { include: { model: Spaceships, as: "spaceships" } });
            res.status(200).json(caps);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async findAll(req, res){

        try {
            const caps = await Caps.findAll({ include: { model: Spaceships, as: "spaceships"} });
            res.status(200).json(caps);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }

    },

    async update(req,res){

        const { id } = req.params;
        const { name, registerNumber } = req.body;

        try {
            const affectedLines = await Caps.update({name,registerNumber}, {where: { id }});
            const updated = await Caps.findByPk(id) || {};
            res.status(200).json({ caps: updated, message: `Sucesso ao atualizar capitão. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async remove(req, res){

        const { id } = req.params;

        try {
            const removed = await Caps.findByPk(id) || {};
            const affectedLines = await Caps.destroy({where: { id }});
            res.status(200).json({ caps: removed ,  message: `Sucesso ao deletar capitão. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}