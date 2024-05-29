import axios                from 'axios';
import { TOKEN_URL }        from "../../config.js";
import ErrorHandler         from "../../error/ErrorHandler.js";
import ERRORS               from "../../constants/error_codes.js";
import { getTokenParams }   from "../utils/mappers.js";

import { 
    jwtSign,
    jwtDecode
}   from '../utils/helpers.js';

const GetToken = async function GetToken({ query }) {
    const { code } = query;

    if ( !code ) {
        throw new ErrorHandler( ERRORS.badRequest, 'Authorization code must be provided' );
    }

    try {
        const tokenParams = getTokenParams( code );
        const {
            data: { id_token },
        } = await axios.post(`${ TOKEN_URL }`, tokenParams);

        if ( !id_token ) {
            throw new ErrorHandler( ERRORS.badRequest, 'Auth error' );
        }

        const { email, name, picture } = jwtDecode( id_token );
        const user = { name, email, picture };

        const token = jwtSign( user );

        return { 
            data: {
                token,
                user
            } 
        };

    } catch ( error ) {
        throw error;
    }
};

export default GetToken;
