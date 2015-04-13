'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var File = require('vinyl');

// consts
var PLUGIN_NAME = "gulp-airship";

/**
 * Prepend the timestamp of when this file has been deployed to Airship
 *   only if non-binary
 * @param  {String} timestamp  deploy date
 * @return {Stream}            through stream
 */
function timestampStream( timestamp ) {
  var stream = through();
  stream.write( timestamp );
  return stream;
}

function pushStream( file ) {
  var stream = through();
  // push stream to Airship
  // prepend the current timestamp
  return stream;
}

function gulpAirship( options ) {
  options = options || {};

  var stream = through.obj(function(file, enc, cb) {
    
    if (file.isBuffer()) {
      // push file.contents to Airship
    }

    if (file.isStream()) {
      var pusher = pushStream( file );
      // catch errors from the streamer and emit a gulp plugin error
      pusher.on('error', this.emit.bind(this, 'error'));
      
      file.contents = file.contents.pipe( pusher );
    }

    // make sure the file goes through the next gulp plugin
    this.push(file);
    // tell the stream engine that we are done with this file
    cb();
  });

  // returning the file stream
  return stream;
}

// exporting the plugin main function
module.exports = gulpAirship;