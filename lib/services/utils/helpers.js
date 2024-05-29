import jwt  from 'jsonwebtoken';
import { 
    TOKEN_SECRET,
    TOKEN_EXPIRATION
}   from "../../config.js";
 
export const jwtSign = function jwtSign( user ) {
    return jwt.sign({ user }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

export const jwtDecode = function jwtDecode( token ) {
    return jwt.decode( token );
};

export const jwtVerify = function jwtVerify( token ) {
    return jwt.verify( token, TOKEN_SECRET );
};