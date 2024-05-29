class ErrorHandler extends Error {
    constructor( errorObject, message, flag = 'custom' ) {
        super( message );
        
        this.status = errorObject.status;
        this.code = errorObject.code;
        this.description=message;
        this.flag=flag
    }

}

export default ErrorHandler;
