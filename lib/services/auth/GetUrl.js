import { AUTH_URL }     from "../../config.js";
import { authParams }   from "../utils/mappers.js";

const GetUrl = async function GetUrl() {
    try {
        return { 
            data: { url: `${ AUTH_URL }?${ authParams }` }
        };

    } catch ( error ) {
        throw error;
    }
};

export default GetUrl;
