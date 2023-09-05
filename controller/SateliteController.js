const Planet = require('../models/planets');
const Satelites = require('../models/satelites');

module.exports = {

    async  insert(req,res){

        const { planetId } = req.params;
        const { name, serial_number } = req.body;

        try {

            let planet = await Planet.findByPk(planetId);
            if(!planet) res.json({message: "Planeta não encontrado"});

            await Satelites.create({ name, serial_number, planetId });
            planet = await Planet.findByPk(planetId, { include: Satelites });
            
            res.status(200).json(planet);

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async find(req,res){

        const { planetId , id } = req.params;

        try {

            const planet = await Planet.findByPk(planetId, {include: { model: Satelites, where: { id } }});
            if(!planet) res.json({message: "Planeta não encontrado"});
            
            res.status(200).json(planet);

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async findAll(req, res){
        
        const { planetId } = req.params;

        try {

            const planet = await Planet.findByPk(planetId, { include: Satelites }); // podemos passar o model direto como include ou um object de optionsInclude
            if(!planet) res.json({message: "Planeta não encontrado"});
            
            res.status(200).json(planet);

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async update(req,res){

        const { planetId, id } = req.params;
        const { name, serial_number } = req.body;

        try {
            
            let planet = await Planet.findByPk(planetId);
            if(!planet) res.json({message: "Planeta não encontrado"});
        
            const affectedLines = await Satelites.update({name,serial_number}, {where: { id }});
            
            planet = await Planet.findByPk(id, { include: {model: Satelites, where: { id }} }) || {};
            res.status(200).json({ planet, message: `Sucesso ao atualizar satelite(s). ${affectedLines} linha(s) afetada(s).` });

        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },

    async remove(req, res){

        const { planetId, id } = req.params;

        try {

            let planet = await Planet.findByPk(planetId);
            if(!planet) res.json({message: "Planeta não encontrado"});

            const sateliteRemoved = await Satelites.findByPk(id) || {};
            const affectedLines = await Satelites.destroy({where: { id }});
            planet = await Planet.findByPk(planetId, {include: Satelites});

            res.status(200).json({ planet, sateliteRemoved,  message: `Sucesso ao deletar satelite(s). ${affectedLines} linha(s) afetada(s).` });
            
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }

}