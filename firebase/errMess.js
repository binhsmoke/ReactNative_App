export const errMess = (authCode) => {
    switch (authCode) {
        case "Firebase: Error (auth/invalid-password).":
            return "Mật khẩu không đúng định dạng";

        case "Firebase: Error (auth/wrong-password).":
            return "Mật khẩu không đúng";

        case "Firebase: Error (auth/invalid-email).":
            return "Email không đúng định dạng";

        case "Firebase: Error (auth/email-already-in-use).":
            return "Email đã được sử dụng"
        case "Firebase: Error (auth/user-not-found).":
            return "Không tìm thấy người dùng"
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            return "Mật khẩu tối thiểu 6 kí tự"

        default:
            return authCode;
    }
}
