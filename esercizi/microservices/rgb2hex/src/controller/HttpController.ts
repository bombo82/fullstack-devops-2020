import {convert} from '../service/Service';
import {Express} from 'express';
import {TtfHex, TtfRgb} from '../../../commons/src/model/Color'

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color as string) as TtfRgb;
            const convertedColor: TtfHex = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
