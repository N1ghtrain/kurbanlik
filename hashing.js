
exports.hash = async (password) => {
    try {
        const chars = password.split('');
        hashedPassword = [];

        for (let i = 0; i<chars.length; i++) {
            //console.log(chars)
            //console.log(chars[i].charCodeAt(0))
            hashedPassword[i] = chars[i].charCodeAt(0)+ 27;
            joinedHashedPassword=hashedPassword.join('-')
            //console.log(hashedPassword)
            //console.log(joinedHashedPassword)
        }
        return joinedHashedPassword;
    } catch (error) {
        console.log("hata-hashing")
    }
};