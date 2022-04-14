import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('REST API test suite description', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    testData.forEach((test) => {
        it(`test case description`, (done) => {
            chai.request(url)
                .get('/')
                .query(`color=${JSON.stringify(test.input)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.expected);
                    done();
                });
        });
    });
});
