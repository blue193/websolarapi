const express =  require('express');
const app = express();
const port = 3000;

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

 
var childArgs = [
  path.join(__dirname, 'cookie.js')
]

app.get('/', (req, res) => {
    var data = {};
    childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        data = stdout;
        console.log(data);
        res.send({"data": data})
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));