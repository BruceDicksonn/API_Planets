const Caps = require('../models/caps');
const Spaceships = require('../models/spaceships');

module.exports = {

    async insert(req,res){

        const { capId } = req.params;
        const { name, capacity } = req.body;

        try {

            const cap = await Caps.findByPk(capId) || {};
            if(!cap) res.status(400).json({ cap, message: "Capitão não encontrado"});

            const [spaceships] = await Spaceships.findOrCreate({ where: { name, capacity} });
            await cap.addSpaceship(spaceships); // metodo que atualiza o array de spaceships associado a Caps e insere um dado na table intermediaria

            res.status(200).json(spaceships);

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async find(req,res){

        const { id } = req.params;

        try {
            const spaceships = await Spaceships.findByPk(id, { include: { association: "caps" } });
            res.status(200).json(spaceships);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async findAll(req, res){

        try {

            const spaceships = await Spaceships.findAll({include: { association: "caps" }});
            res.status(200).json(spaceships);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async update(req,res){

        const { capId, id } = req.params;
        const { name, capacity } = req.body;

        try {

            const cap = await Caps.findByPk(capId) || {};
            if(!cap) res.status(400).json({cap, message: "Capitão não encontrado"});

            const affectedLines = await Spaceships.update({name,capacity}, {where: { id }});
            const updated = await Spaceships.findByPk(id) || {};

            res.status(200).json({ spaceships: updated, message: `Sucesso ao atualizar capitão. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async remove(req, res){

        const { id } = req.params;

        try {
            const removed = await Spaceships.findByPk(id) || {};
            const affectedLines = await Spaceships.destroy({where: { id }});
            res.status(200).json({ spaceships: removed ,  message: `Sucesso ao deletar capitão. ${affectedLines} linha(s) afetada(s).` });
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}