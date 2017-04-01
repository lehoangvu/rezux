import Dropbox from 'dropbox';
import env from './../global/env';

let dx = new Dropbox({ clientId: env.DROPBOX_CLIENT_ID });

export default dx;