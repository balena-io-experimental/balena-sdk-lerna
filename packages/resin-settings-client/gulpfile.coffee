path = require('path')
gulp = require('gulp')
mocha = require('gulp-mocha')
gutil = require('gulp-util')
coffeelint = require('gulp-coffeelint')
coffee = require('gulp-coffee')
ts = require('gulp-typescript')

OPTIONS =
	config:
		coffeelint: path.join(__dirname, '..', '..', 'coffeelint.json')
		typescript: path.join(__dirname, '..', '..', 'tsconfig.json')
	files:
		coffee: [ 'lib/**/*.coffee', 'tests/**/*.spec.coffee', 'gulpfile.coffee' ]
		app: 'lib/**/*.coffee'
		tests: [ 'tests/**/*.spec.coffee', 'tests/**/*.spec.js' ]

gulp.task 'typescript', ->
	gulp.src('lib/**/*.ts')
		.pipe(ts(require(OPTIONS.config.typescript).compilerOptions))
		.on('error', gutil.log)
		.js.pipe(gulp.dest('build/'))

gulp.task 'coffee', ->
	gulp.src(OPTIONS.files.app)
		.pipe(coffee(bare: true, header: true))
		.on('error', gutil.log)
		.pipe(gulp.dest('build/'))

gulp.task 'test', ->
	gulp.src(OPTIONS.files.tests, read: false)
		.pipe(mocha({
			reporter: 'min'
		}))

gulp.task 'lint', ->
	gulp.src(OPTIONS.files.coffee)
		.pipe(coffeelint({
			optFile: OPTIONS.config.coffeelint
		}))
		.pipe(coffeelint.reporter())

gulp.task 'build', [
	'lint'
	'typescript'
	'coffee'
]

gulp.task 'watch', [ 'build' ], ->
	gulp.watch(OPTIONS.files.coffee, [ 'build' ])
