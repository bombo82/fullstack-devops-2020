import chai from 'chai';
import {convert} from './Service';
import {rgb2hexTestData} from '../../../commons/src/test-data/colors'

chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
    rgb2hexTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.rgbValue).should.deep.equal(test.hexValue);
        });
    });
});
