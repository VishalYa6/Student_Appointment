const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Availability = mongoose.model('Availability', availabilitySchema);

module.exports = Availability;
