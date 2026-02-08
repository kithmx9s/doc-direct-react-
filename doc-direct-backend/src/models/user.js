
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password by default
    },
    role: {
      type: String,
      enum: ['patient', 'doctor', 'admin'],
      default: 'patient',
    },
    profile: {
      fullName: {
        type: String,
        required: [true, 'Full name is required'],
      },
      phone: {
        type: String,
        required: [true, 'Phone number is required'],
      },
      // Patient-specific fields
      dateOfBirth: Date,
      bloodGroup: String,
      address: String,
      area: String,
      emergencyContact: String,
      allergies: String,
      
      // Doctor-specific fields
      specialty: String,
      qualifications: String,
      experience: Number,
      hospital: String,
      licenseNumber: String,
      consultationFee: Number,
      availableSlots: Number,
      maxAppointments: Number,
      about: String,
      languages: [String],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
