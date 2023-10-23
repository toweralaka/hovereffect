const path = require('path');

module.exports = {
  entry: './js/step1.js', // Specify the entry point of your application.
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory for your bundled code.
    filename: 'bundle.js', // Specify the name of the bundled file.
  },
};
