
# Doc Direct Backend - Testing Guide

## Start MongoDB
Make sure MongoDB is running:
```bash
# Windows (if installed as service, it's already running)
# Or manually start:
mongod
```

## Start the Server
```bash
cd doc-direct-backend
npm run dev
```

You should see:
```
🚀 Server running in development mode on port 5000
📡 API URL: http://localhost:5000
🎯 Client URL: http://localhost:5173
MongoDB Connected: localhost
Database Name: docdirect
```

## Test the API

### 1. Health Check
```bash
# Browser or terminal:
http://localhost:5000/

# Should return:
{
  "message": "Doc Direct API is running",
  "version": "1.0.0",
  "timestamp": "2026-02-08..."
}
```

### 2. Register a Patient
```bash
# Using curl (in terminal):
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "patient@test.com",
    "password": "test123",
    "role": "patient",
    "profile": {
      "fullName": "John Doe",
      "phone": "0771234567",
      "dateOfBirth": "1990-01-15",
      "bloodGroup": "O+",
      "area": "Colombo"
    }
  }'

# Should return:
{
  "_id": "...",
  "email": "patient@test.com",
  "role": "patient",
  "profile": {...},
  "token": "eyJhbGc..."
}
```

### 3. Register a Doctor
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "doctor@test.com",
    "password": "test123",
    "role": "doctor",
    "profile": {
      "fullName": "Dr. Amal Silva",
      "phone": "0771234567",
      "specialty": "Cardiology",
      "qualifications": "MBBS, MD",
      "experience": 15,
      "hospital": "National Hospital",
      "licenseNumber": "SLMC/12345"
    }
  }'
```

### 4. Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "patient@test.com",
    "password": "test123"
  }'

# Save the token from response
```

### 5. Get Current User (Protected Route)
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Using Postman (Easier)

1. Open Postman
2. Create new request
3. Set method to POST
4. URL: http://localhost:5000/api/auth/register
5. Go to Body tab → Select raw → Select JSON
6. Paste the registration JSON
7. Click Send

## Next Steps

Once authentication is working, we'll add:
- Doctor routes
- Hospital routes
- Appointment routes
- Medical records routes
- Admin routes