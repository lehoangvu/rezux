import Dropbox from 'dropbox';

const CLIENT_ID = 'g048eqdv71saczl';

let dx = new Dropbox({ clientId: CLIENT_ID });

export default dx;