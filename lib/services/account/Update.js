import { mockedAccounts }   from "../utils/mappers.js";

const UpdateAccount = async function UpdateAccount({ body }) {
    try {
        console.log('before - mockedAccounts', mockedAccounts);
        console.log('body', body);

        mockedAccounts[ body.id ] =  { 
            ...mockedAccounts[ body.id ],
            ...body
        };
        console.log('after - mockedAccounts', mockedAccounts);

        return { data: 'mocked update response' };

    } catch ( error ) {
        throw error;
    }
};

export default UpdateAccount;
