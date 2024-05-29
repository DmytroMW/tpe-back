import serviceRunner        from '../serviceRunner.js';
import GetAccount           from "../services/account/Get.js";
import UpdateAccount        from "../services/account/Update.js";

export default {
    get: serviceRunner( GetAccount ),
    update: serviceRunner( UpdateAccount ),
};