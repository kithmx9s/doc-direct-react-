
const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Hospital name is required'],
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: [true, 'Registration number is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    area: {
      type: String,
      required: [true, 'Area is required'],
    },
    beds: {
      type: Number,
      required: [true, 'Number of beds is required'],
    },
    established: {
      type: Number,
      required: [true, 'Established year is required'],
    },
    website: String,
    specialties: [String],
    services: [String],
    features: [String],
    operatingHours: {
      type: String,
      default: '24/7 Emergency Services',
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'approved',
    },
    adminContact: {
      name: String,
      email: String,
      phone: String,
      position: String,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
