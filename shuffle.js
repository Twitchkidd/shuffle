import path from 'path';
import fs from 'fs';
import os from 'os';
import { nanoid } from 'nanoid';

const EXTNAME = '.mp3';
const HOME = os.homedir();
const SHUFFLE_FOLDER = `${HOME}/Music/mp3-player`;
const RANDOM_NUMBER = 7;

fs.readdir(SHUFFLE_FOLDER, (err, files) => {
	if (err) {
		console.error('Could not list the directory.', err);
		process.exit(1);
	}

	files.forEach((file, index) => {
		// Make one pass and make the file complete
		const fromPath = path.join(SHUFFLE_FOLDER, file);
		const toPath = path.join(
			SHUFFLE_FOLDER,
			nanoid(RANDOM_NUMBER) + '-' + file
		);

		fs.rename(fromPath, toPath, function (error) {
			if (error) {
				console.error('File moving error.', error);
			} else {
				console.log("Moved file '%s' to '%s'.", fromPath, toPath);
			}
		});
	});
});
