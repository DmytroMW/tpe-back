const ERRORS = {
    badRequest : {
        status : 400,
        code   : 'BAD_REQUEST'
    },
    unauthorized : {
        status : 401,
        code   : 'UNAUTHORIZED'
    },
    forbidden: {
        status : 403,
        code   : 'FORBIDDEN'
    },
    notFound : {
        status : 404,
        code   :'NOT_FOUND'
    },
    conflict: {
        status : 409,
        code   : 'CONFLICT'
    },
    unprocessableEntity : {
        status : 422,
        code   : 'UNPROCESSABLE_ENTITY'
    },
    serverError : {
        status : 500,
        code   : 'SERVER_ERROR'
    }
};

export default ERRORS;
