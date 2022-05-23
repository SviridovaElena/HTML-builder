const path = require('path');
const fs = require('fs');

const secretFolderPath = path.join(__dirname, 'secret-folder');

fs.readdir(secretFolderPath, {withFileTypes: true}, (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log('\nCurrent directory filenames:');
    files.forEach(file => {
      if (file.isFile()) {
        const filePath = path.join(secretFolderPath, file.name);
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
          console.log(`${path.parse(filePath).name} - ${path.extname(filePath).slice(1)} - ${Math.round(stats.size/1000)}kb`);
        });
      }
    });
  }
});