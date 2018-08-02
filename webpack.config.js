const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        before(app){
            app.get('/some/path', function(req, res) {
              res.json({ custom: 'response' });
            });
        },
        after(app){
            // do fancy stuff
        },
        allowedHosts: [
            'host.com',
            'subdomain.host.com',
            'subdomain2.host.com',
            'host2.com'
        ],
        bonjour: false
    }
};
