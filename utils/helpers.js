// Helper function to obfuscate user ID (e.g., show only the first 4 and last 4 characters of the user ID)
export const obfuscateUserId = (userId) => {
    if (userId.length >= 8) {
        const firstPart = userId.substr(0, 4);
        const lastPart = userId.substr(userId.length - 4, 4);
        return firstPart + '****' + lastPart;
    }
    return userId;
}

// Helper function to obfuscate email (e.g., show only the first three characters)
export const obfuscateEmail = (email) => {
    const parts = email.split('@');
    if (parts.length === 2) {
        return parts[0].substr(0, 3) + '***@' + parts[1];
    }
    return email;
}

// Helper function to obfuscate phone number (e.g., hide all but the last four digits)
export const obfuscatePhoneNumber = (phone) => {
    if (phone.length >= 4) {
        return '***-***-' + phone.substr(phone.length - 4);
    }
    return phone;
}
