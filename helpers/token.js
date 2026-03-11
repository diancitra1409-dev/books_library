const jwt = require('jsonwebtoken');
const secret = 'secret'

const generateToken = (payload) => {
    const token = jwt.sign(payload, secret);
    return token
}

const verifyToken = async (payload) => {
    try{
    const decoded = jwt.verify(payload, secret)
    return decoded
        console.log(decoded)
    }catch(error){
        console.log(error)
    }
}


module.exports = { generateToken, verifyToken }