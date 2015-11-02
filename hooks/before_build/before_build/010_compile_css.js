/**
 * Created by kris on 02/11/15.
 */

var gulp = require('gulp');
var path  = require('path');

var rootdir = process.argv[2];
var gulpfile = path.join(rootdir, 'gulpfile.js');

process.stdout.write('Compiling SCSS');

require(gulpfile);

//interaction
gulp.start('sass');
