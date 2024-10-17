import { ToastAndroid } from "react-native";

export const validateUsername = (username) => {
    if (!username.trim()) {
        showToast('Username is required');
        return false;
    }
    return true;
}

export const validate_phone = (phone) => {
    if (!phone.trim()) {
        showToast('Phone number is required');
        return false;
    } else if (phone.length !== 10) {
        showToast('Phone number must be 10 digits');
        return false;
    }
    return true;
}

const isPassword = (password) => {
    // Định dạng mật khẩu: Ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

export const validatePassword = (password) => {
    if (!password.trim()) {
        showToast('Password is required');
        return false;
    } else if (password.length < 8) {
        showToast('Password must be at least 8 characters');
        return false;
    } else if (!isPassword(password)) {
        showToast('Password must be at least 8 characters, including uppercase, lowercase, numbers and special characters');
        return false;
    }
    return true;
}

const isEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const validateEmail = (email) => {
    if (!email.trim()) {
        showToast('Email is required');
        return false;
    } else if (!isEmail(email)) {
        showToast('Email is not valid');
        return false;
    }
    return true;
}

function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
}