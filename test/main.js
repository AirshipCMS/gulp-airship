var plugin = require('../');
var should = require('should');
require('mocha');

describe('gulp-airship', function() {
  describe('plugin', function() {
    it('should throw when AIRSHIP_AUTH is missing', function () {
      plugin().should.throw('Missing AIRSHIP_AUTH env variable.');
    });

    it('should throw when AIRSHIP_AUTH is invalid', function (done) {
      plugin('INVALIDTOKEN').should.throw('AIRSHIP_AUTH is invalid.')
    });
  });

  describe('airship()', function() {
    var airship = plugin('VALIDTOKEN');
    it('should emit error on invalid file type', function (done) {
      
    });
  });

});