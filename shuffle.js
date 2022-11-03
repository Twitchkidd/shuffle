const path = require('path');
const fs = require('fs');
const os = require('os');

const EXTNAME = '.mp3';

fs.readdir(`${os.homedir()}/Music`, (err, files) => {
	if (err) {
		console.error('Could not list the directory.', err);
		process.exit(1);
	}
	console.log(files);
});
