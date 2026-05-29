const express = require('express');
// const nodemailer = require('nodemailer');

const CrewInquiry = require('../models/CrewInquiry');

const router = express.Router();

// ==============================
// HOME ROUTE
// ==============================
router.get('/', (req, res) => {
  res.send('Welcome to the Inquiry API!');
});

// ==============================
// TEST ROUTE
// ==============================
router.get('/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🚀 API is working successfully',
    serverTime: new Date(),
  });
});

// ==============================
// NODEMAILER SETUP
// ==============================
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// ==============================
// CREATE INQUIRY ROUTE
// ==============================
// router.post('/inquiries', async (req, res) => {
//   try {
//     console.log('Frontend Data:', req.body);

//     const {
//       companyName,
//       whatsappNumber,
//       corporateEmail,
//       propertyType,
//       workforceGrade,
//       shiftType,
//       expectedStart,
//       latitude,
//       longitude,
//       trades,
//       estimatedDailyCost,
//     } = req.body;

//     // Validation
//     if (!companyName || !whatsappNumber || !corporateEmail) {
//       return res.status(400).json({
//         success: false,
//         message: 'Company, WhatsApp, and Email are required.',
//       });
//     }

//     // Total Crew Count
//     let totalCrewSize = 0;

//     if (trades) {
//       totalCrewSize = Object.values(trades).reduce(
//         (sum, qty) => sum + (parseInt(qty) || 0),
//         0
//       );
//     }

//     // Cost Calculation
//     const dailyCostVal = parseFloat(estimatedDailyCost) || 0;
//     const computedMonthlyCost = dailyCostVal * 26;

//     // Save to MongoDB
//     const newInquiry = new CrewInquiry({
//       companyName,
//       whatsappNumber,
//       corporateEmail,
//       propertyType,
//       workforceGrade,
//       shiftType,
//       expectedStart,
//       latitude,
//       longitude,
//       trades,
//       totalCrewSize,
//       estimatedDailyCost: dailyCostVal,
//       estimatedMonthlyCost: computedMonthlyCost,
//     });

//     const savedInquiry = await newInquiry.save();

//     // Email HTML
//     const emailHtmlContent = `
//       <h2>New Inquiry Received</h2>

//       <p><strong>Company:</strong> ${companyName}</p>
//       <p><strong>Email:</strong> ${corporateEmail}</p>
//       <p><strong>WhatsApp:</strong> ${whatsappNumber}</p>

//       <p><strong>Property Type:</strong> ${propertyType}</p>
//       <p><strong>Workforce Grade:</strong> ${workforceGrade}</p>
//       <p><strong>Shift Type:</strong> ${shiftType}</p>

//       <p><strong>Total Crew:</strong> ${totalCrewSize}</p>

//       <p><strong>Daily Cost:</strong> AED ${dailyCostVal}</p>
//       <p><strong>Monthly Cost:</strong> AED ${computedMonthlyCost}</p>

//       <p>
//         <a href="https://www.google.com/maps?q=${latitude},${longitude}">
//           Open Location
//         </a>
//       </p>
//     `;

//     // Send Email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'gktechnical555@gmail.com, vishalnishad0809@gmail.com',
//       subject: `🚨 New Inquiry from ${companyName}`,
//       html: emailHtmlContent,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log('❌ Email Error:', err.message);
//       } else {
//         console.log('✅ Email Sent:', info.response);
//       }
//     });

//     // Success Response
//     res.status(201).json({
//       success: true,
//       message: 'Inquiry saved successfully',
//       data: savedInquiry,
//     });

//   } catch (error) {
//     console.log('❌ Server Error:', error.message);

//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//       error: error.message,
//     });
//   }
// });

// ==============================
// EXPORT ROUTER
// ==============================
module.exports = router;