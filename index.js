const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';
const DATE = moment().subtract(2, 'd').format();

const data = { date: DATE };

jsonfile.writeFile(FILE_PATH, data, { spaces: 2 }, (err) => {
    if (err) console.error('Error writing file:', err);
    else {
        simpleGit()
            .add([FILE_PATH])
            .commit(DATE, { '--date': DATE })
            .push()
            .then(() => console.log('Commit successful!'))
            .catch(err => console.error('Git error:', err));
    }
});
