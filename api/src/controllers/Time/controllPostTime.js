const {TimeModel} = require('../../db.js');

const createNewTime = async (req, res) => {
    const { dia, hora, cupo } = req.body;
  
    try {
      const newTime = await TimeModel.create({ dia, hora, cupo });
      res.status(201).json(newTime);
    } catch (error) {
      console.error('Error al crear un nuevo horario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };


  module.exports = createNewTime;       