import serviceRunner        from '../serviceRunner.js';
import ErrorHandler         from "../error/ErrorHandler.js";
import ERRORS               from "../constants/error_codes.js";
import { TOKEN_EXPIRATION } from "../config.js";
import GetToken             from "../services/auth/GetToken.js";
import GetUrl               from "../services/auth/GetUrl.js";
import { 
    jwtSign,
    jwtVerify
}   from '../services/utils/helpers.js';

export default {
    verify( req, res, next ) {
        try {
            const token = req.cookies.token
            if ( !token ) {
                throw new ErrorHandler( ERRORS.unauthorized, 'JWT required' );
            }

            jwtVerify( token )

            return next()

        } catch ( error ) {
            const responseError = {
                status : 0,
                error  : {
                    code    : error.code || ERRORS.serverError.code,
                    message : error.description || 'Internal server error',
                    custom  : error?.response?.data ? error.response.data : JSON.stringify( error )
                }
            };
            const responseStatus = error.status || 500;
            
            res.status( responseStatus ).send( responseError.error );
        }
    },
    isLoggedIn( req, res ) {
        try {
            const token = req.cookies.token;
            if ( !token ) {
                return res.json({ data: { isLoggedIn: false }})
            }

            const { user } = jwtVerify( token );
            const newToken = jwtSign( user );

            res.cookie('token', newToken, { maxAge: TOKEN_EXPIRATION, httpOnly: true });
            res.json({ data: { isLoggedIn: true, user }});

        } catch ( error ) {
            console.log('isLoggedIn - error: ', error);
            res.json({ data: { isLoggedIn: false }})
        }
    },
    logout( _, res ) {
        res.clearCookie('token').json({ data: { message: 'Logged out' }})
    },
    getToken: serviceRunner( GetToken, ( res, { token, user } ) => {
        res.cookie('token', token, { maxAge: TOKEN_EXPIRATION, httpOnly: true });
        res.send({ data: user });
    }),
    getUrl: serviceRunner( GetUrl ),
};