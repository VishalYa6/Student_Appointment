const Availability = require('../models/availability');

exports.addAvailability = async (req, res) => {
  if (req.user.role !== 'professor') return res.status(403).send('Only professors can add availability');
  
  const { startTime, endTime } = req.body;
  
  const availability = new Availability({
    professorId: req.user.userId,
    startTime,
    endTime
  });
  await availability.save();
  res.status(201).send('Availability added');
};

exports.getAvailability = async (req, res) => {
  const { professorId } = req.params;
  const availability = await Availability.find({ professorId });
  res.json(availability);
};
