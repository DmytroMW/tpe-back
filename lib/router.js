import express          from 'express';
import controllers  from './controllers/index.js';

const checkSession = controllers.auth.verify;

const router = express.Router();

router.get('/', ( req, res ) => res.send( 'ok' ));

router.get('/auth/url',             controllers.auth.getUrl );
router.get('/auth/token',           controllers.auth.getToken );
router.get('/auth/is_logged_in',    controllers.auth.isLoggedIn );
router.post('/auth/logout',         controllers.auth.logout );

router.get('/account/:id', checkSession, controllers.account.get );
router.put('/account/:id', checkSession, controllers.account.update );

export default router;
