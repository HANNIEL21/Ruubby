import nodemailer from "nodemailer";
import CryptoJS from "crypto-js";
import Otp from "../models/otp.js";

const transporter = nodemailer.createTransport({
    host: "smpt.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.AUTH_MAIL,
        pass: process.env.AUTH_PASS,
    },
});

const OTP_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds

const generateOTP = () => {
    return `${Math.floor(1000 + Math.random() * 9000)}`;
};

const createAndSaveOtp = async (userID, otp) => {
    const encryptedOtp = CryptoJS.AES.encrypt(otp, process.env.PASS_SEC).toString();
    const finalOtp = await new Otp({
        userID: userID,
        otp: encryptedOtp,
        createdAt: Date.now(),
        expiresAt: Date.now() + OTP_EXPIRATION_TIME,
    });

    await finalOtp.save();
};

const sendOtp = async ({ _id, email, firstName }, res) => {
    console.log(email);
    try {
        const otp = generateOTP();


        const mailOptions = {
            from: process.env.AUTH_MAIL,
            to: email,
            subject: 'Ruubby Email Verification',
            html: `
            <h1 style="color: blue;">Greetings ${firstName}</h1>
            <br/>
            <p>Below is your one-time passcode that you need to use to complete your registration.</p>
            <p>The verification code will be valid for 30 minutes.</p>
            <p><em>Do not share this code with anyone.</em></p> 
            <br /> 
            <br />
            <div style="background-color: blue; padding: 20px 40px; text-align: center; ">
                <p>${otp}</p>
            </div>
        `,

        };

        await createAndSaveOtp(_id, otp);
        await transporter.sendMail(mailOptions);

        res.json({
            status: "PENDING",
            message: "Verification OTP email sent",
            data: {
                userID: _id,
                email,
            }
        });
    } catch (error) {
        console.error(error);
        // Handle errors and return an error response to the client
        if (res) {
            res.status(500).json({
                status: "FAILED",
                message: 'Email sending failed.',
            });
        }
    }
};

// Define a function to generate email content


export default sendOtp;