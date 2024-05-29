import { mockedAccounts }   from "../utils/mappers.js";

const GetAccount = async function GetAccount({ params }) {
    try {
        const data =  mockedAccounts[ params.id ];

        return { data };

    } catch ( error ) {
        throw error;
    }
};

export default GetAccount;
