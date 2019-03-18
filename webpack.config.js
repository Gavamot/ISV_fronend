const path = require('path');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    mode: 'development',
    entry: {
        pageIndex: path.join(PATHS.source , 'index.js') ,
        pageAddOrUpdate: path.join(PATHS.source , 'addOrUpdate.js') 
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",
    
        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: true, // Open the page in browser
      },
};