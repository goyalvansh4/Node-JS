const fs = require('fs');
const args = process.argv.slice(2);
const command = args[0];
const fileName = args[1];
const content = args.slice(2).join(' ');

if (!command) {
  console.error('❌ Error: No command provided! Use: read/write/delete/allFiles <filename> <content>');
  process.exit(1); // Exit with an error code
}

switch (command) {
  case 'read':
    if (!fileName) {
      console.error('❌ Error: No filename provided for read operation.');
      process.exit(1);
    }
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) return console.error(`❌ No such file exists with name: ${fileName}`);
      console.log(`📖 File Content:\n${data}`);
    });
    break;

  case 'write':
    if (!fileName || !content) {
      console.error('❌ Error: Provide filename and content to write.');
      process.exit(1);
    }
    fs.writeFile(fileName, content, (err) => {
      if (err) return console.error(`❌ Error writing file: ${err.message}`);
      console.log('✅ File was written successfully.');
    });
    break;

  case 'delete':
    if (!fileName) {
      console.error('❌ Error: No filename provided for delete operation.');
      process.exit(1);
    }
    fs.unlink(fileName, (err) => {
      if (err) return console.error(`❌ Error deleting file: ${err.message}`);
      console.log('🗑️ File was deleted.');
    });
    break;

  case 'allFiles':
    fs.readdir(__dirname, (err, files) => {
      if (err) return console.error(`❌ Error reading directory: ${err.message}`);
      console.log(`📂 Found ${files.length} files:`, files);
    });
    break;

  default:
    console.error('❌ Error: Invalid command! Use: read/write/delete/allFiles <filename> <content>');
    process.exit(1);
}
