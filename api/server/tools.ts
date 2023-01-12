import jwt from 'jsonwebtoken'

export const generateAccessToken = (payload:any) => {
    return jwt.sign(payload, `secret-to-change`, {expiresIn: '5s'})
}

export const generateRefreshToken = (payload:any) => {
    return jwt.sign(payload, `secret-to-change`, {expiresIn: '30d'})
}