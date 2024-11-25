import Toast from "react-native-toast-message";

export const validateUsername = (username) => {
    if (!username.trim()) {
        showToast('Tên người dùng là bắt buộc', 'error');
        return false;
    }
    return true;
}

export const validateAddress = (username) => {
    if (!username.trim() || username == " ") {
        showToast('Địa chỉ là bắt buộ', 'error');
        return false;
    }
    return true;
}

export const validate_phone = (phone) => {
    if (!phone.trim() || phone == " ") {
        showToast('Số điện thoại là bắt buộc', 'error');
        return false;
    } else if (phone.length !== 10) {
        showToast('Số điện thoại phải có 10 chữ số', 'error');
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
        showToast('Mật khẩu là bắt buộc', 'error');
        return false;
    } else if (password.length < 8) {
        showToast('Mật khẩu phải có ít nhất 8 ký tự', 'error');
        return false;
    } else if (!isPassword(password)) {
        showToast('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt', 'error');
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
        showToast('Email là bắt buộc', 'error');
        return false;
    } else if (!isEmail(email)) {
        showToast('Email không hợp lệ', 'error');
        return false;
    }
    return true;
}

export function showToast(message, info) {
    Toast.show({
        text1: message,
        position: 'top',
        type: info, // Hoặc 'success', 'error', tùy theo loại thông báo
    });
}