import queryString from "query-string";
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URL
}   from "../../config.js";

export const authParams = queryString.stringify({
    client_id       : GOOGLE_CLIENT_ID,
    redirect_uri    : REDIRECT_URL,
    response_type   : 'code',
    scope           : 'openid profile email',
    access_type     : 'offline',
    state           : 'standard_oauth',
    prompt          : 'consent',
});

export const getTokenParams = (code) => {
    return {
        client_id       : GOOGLE_CLIENT_ID,
        client_secret   : GOOGLE_CLIENT_SECRET,
        grant_type      : 'authorization_code',
        redirect_uri    : REDIRECT_URL,
        code,
    };
};

export const mockedAccounts = {
    12345 : {
        id          : 12345,
        firstName   : 'Lorem',
        lastName    : 'Ipsum',
        address     : 'Lorem Ipsum 33g',
        creationDate: new Date(),
        isPaid      : true
    }
}