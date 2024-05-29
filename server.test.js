import request  from "supertest";
import app      from './app.js';

describe('GET /api/v1', () => {
  it('responds with "ok"', ( done ) => {
    request( app )
      .get('/api/v1')
      .expect( 200 )
      .expect( 'ok', done );
  });
});

const mockedUrl = "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=721184390757-pq8egnagqvkkj5tn9cisuut1ql68anvl.apps.googleusercontent.com&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fcallback&response_type=code&scope=openid%20profile%20email&state=standard_oauth";
describe('GET /api/v1/auth/url', () => {
  it('responds with url', ( done ) => {
    request( app )
      .get('/api/v1/auth/url')
      .expect( 200 )
      .expect({ 
        data: { url: mockedUrl } 
      }, done );
  });
});