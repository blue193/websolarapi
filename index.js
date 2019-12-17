var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

 
var childArgs = [
  path.join(__dirname, 'cookie.js')
]
 
childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  console.log("execFileSTDOUT:", JSON.stringify(stdout))
})