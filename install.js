var fs = require('fs');
var os = require('os');
var path = require('path');
var mkdir = require('mkdirp');
var nugget = require('nugget');
var unzip = require('unzip');

var filename = 'sounds.zip';
var tmpdir = path.join(os.tmpdir(), 'kakapo-sounds-tmp-download-' + process.pid + '-' + Date.now());

mkdir(tmpdir, function(err) {
  if (err) {
    return console.log(err);
  }

  var nuggetOpts = {
    filename: filename,
    dir: tmpdir,
    resume: true,
    verbose: true
  };

  nugget('http://data.kakapo.co/' + filename, nuggetOpts, function(err) {
    if (err) {
      return console.log(err);
    }

    fs.createReadStream(path.join(tmpdir, filename))
      .pipe(unzip.Extract({ path: './' }));
  });
});
