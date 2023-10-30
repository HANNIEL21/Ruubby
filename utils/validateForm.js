export function validateSignup(req, res, next) {
    const { firstName, lastName, email, password, phoneNumber, userType } = req.body;

    if (!firstName || !lastName || !email || !password || !phoneNumber || !userType) {
        return res.status(400).json({
            status: "FAILED",
            message: "All fields are required!",
        });
    }

    if (!/^[a-zA-Z]*$/.test(firstName) || !/^[a-zA-Z]*$/.test(lastName)) {
        return res.status(400).json({
            status: "FAILED",
            message: "Invalid name entered",
        });
    }

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        return res.status(400).json({
            status: "FAILED",
            message: "Invalid email entered",
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            status: "FAILED",
            message: "Please use a stronger password (at least 8 characters)",
        });
    }

    // If all validation checks pass, proceed to the next middleware
    next();
}
