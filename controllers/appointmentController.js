const Appointment = require('../models/appointment');
const Availability = require('../models/availability');

exports.bookAppointment = async (req, res) => {
  const { professorId, startTime } = req.body;
  
  const availability = await Availability.findOne({ professorId, startTime });
  if (!availability) return res.status(404).send('No available slots for the professor at that time');
  
  const appointment = new Appointment({
    studentId: req.user.userId,
    professorId,
    startTime
  });
  await appointment.save();
  res.status(201).send('Appointment booked');
};

exports.cancelAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  
  const appointment = await Appointment.findById(appointmentId);
  if (!appointment) return res.status(404).send('Appointment not found');
  
  if (appointment.professorId.toString() !== req.user.userId) {
    return res.status(403).send('Only the professor can cancel the appointment');
  }
  
  appointment.status = 'cancelled';
  await appointment.save();
  res.send('Appointment cancelled');
};
