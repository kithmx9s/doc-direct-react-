
const mongoose = require('mongoose');

const hospitalRequestSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: [true, 'Hospital name is required'],
    },
    registrationNumber: {
      type: String,
      required: [true, 'Registration number is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    area: {
      type: String,
      required: [true, 'Area is required'],
    },
    beds: Number,
    established: Number,
    website: String,
    specialties: [String],
    services: [String],
    facilities: [String],
    adminContact: {
      name: String,
      email: String,
      phone: String,
      position: String,
    },
    description: String,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    rejectionReason: String,
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    reviewedAt: Date,
  },
  {
    timestamps: true,
  }
);

const HospitalRequest = mongoose.model('HospitalRequest', hospitalRequestSchema);

module.exports = HospitalRequest;

