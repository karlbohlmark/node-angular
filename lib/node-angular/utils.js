
/**
 * @class utils
 */

var utils = module.exports = {};

/**
 * reqs
 */

var fs = require('fs')
  , util = require('util')
  , path = require('path')
  , colors = require('colors');

/**
 * @class utils
 * @method copyFileToApp
 * @param {String} to Filename to copy to
 * @param {String} from Path and file to copy from
 * @param {String} project Project name
 * @param {Function} callback Callback function to apply on success
 */

utils.copyFileToApp = function(file, project) {
  var toWriteStream = fs.createWriteStream(path.normalize(process.cwd() + '/' + project + '/' + file));     
  var fromReadStream = fs.createReadStream(path.normalize(__dirname + '/../node-angular/templates/' + file)); 
  toWriteStream.once('open', function(fd) {
    require('util').pump(fromReadStream, toWriteStream);
    console.log('create'.green + ' ' + '/' + project + '/' + file);
  });
};

/* EOF */