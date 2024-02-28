const {TimeModel} = require("../../db.js");

const getAllTimes = async (req, res) => {
    try {
      const times = await TimeModel.findAll();
      res.json(times);
    } catch (error) {
      console.error('Error al obtener los horarios:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = getAllTimes;