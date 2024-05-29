import ERRORS from './constants/error_codes.js';

export function serviceRunner( serviceFunction, callback  ) {
    return function runService ( req, res ) {
        const reqCollection = {
            body:       req.body,
            params:     req.params,
            query:      req.query
        };

        serviceFunction( reqCollection )
            .then(({ data }) => {
                if ( callback ) {
                    callback( res, data );
                } else {
                    res.status(200).send({ data });
                }
            })
            .catch(( error ) => {
                console.log(' === ERROR', error );

                let responseStatus ;
                const responseError = {
                    status : 0,
                    error  : {}
                };
                switch( error.flag ) {
                    case 'custom':
                        responseError.error = {
                            code    : error.code,
                            message : error.description
                        };
                        responseStatus = error.status;
                        break;
                    default:
                        responseError.error = {
                            code    : ERRORS.serverError.code,
                            message : 'Internal server error',
                            custom  :  error?.response?.data ? error.response.data : JSON.stringify( error )

                        };
                        responseStatus = 500;
                        break;
                }

                res.status( responseStatus ).send( responseError.error );
            });
    };
};

export default serviceRunner;
