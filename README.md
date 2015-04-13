# gulp-airship [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
### An Airship propeller development plugin for gulp

## Usage

First, install `gulp-airship` as a development dependency:

```shell
npm install -D gulp-airship
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require('gulp');
var gutil = require('gulp-util');
var airship = require('gulp-airship')(process.env.AIRSHIP_AUTH);

// push layouts and templates to airship
gulp.task('airship-markup', function () {
  gulp.src('./src/layouts/**/*')
    .pipe(airship()).on('error', gutil.log))
    .pipe(gulp.dest('./deployed/layouts/'));

  gulp.src('./src/templates/**/*')
    .pipe(airship()).on('error', gutil.log))
    .pipe(gulp.dest('./deployed/templates/'));
});

// compile sass and push it to airship
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/scss/*.scss')
    .pipe(sass()).on('error', gutil.log))
    .pipe(airship()).on('error', gutil.log))
    .pipe(gulp.dest('./deployed/styles'));
});

// compile coffee and push it to airship
var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src('./src/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./deployed/scripts/'))
});
```

You must obtain an `AIRSHIP_AUTH` token,

authenticate yourself here: https://airshipcms.io/gulp-airship/access

or via cli:

````
curl -s https://airshipcms.io/gulp-airship/access -X 'POST' \
  -d '{ "domain" : "YOURAIRSHIPDOMAIN", "auth" : { "username" : "YOURUSERNAME", "password" : "yourPassword" } }' \
  -H "Content-Type: application/json" | python -m json.tool
````

example response:

````
{
  "domain" : "YOURAIRSHIPDOMAIN",
  "AIRSHIP_AUTH" : "__YOURAIRSHIPAUTHTOKEN__"
}
````

Run gulp with the `AIRSHIP_AUTH` token set in your envirnment vars

````
AIRSHIP_AUTH="__YOURAIRSHIPAUTHTOKEN__" gulp
````

## API

_no options yet_


[travis-url]: http://travis-ci.org/AirshipCMS/gulp-airship
[travis-image]: https://secure.travis-ci.org/AirshipCMS/gulp-airship.svg?branch=master
[npm-url]: https://npmjs.org/package/gulp-airship
[npm-image]: https://badge.fury.io/js/gulp-airship.svg