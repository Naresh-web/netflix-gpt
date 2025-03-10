
export const checkValidData = (name, email, password) => {
    const isValidName = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isValidName) return 'Name is not valid'
    if(!isValidEmail) return "Email ID is not valid"
    if(!isValidPassword) return "Password is not valid"
    return null
}