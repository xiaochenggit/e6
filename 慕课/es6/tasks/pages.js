// 处理模板文件
import gulp from 'gulp';
import gulpif from 'gulp-if'; // 判断文件是否改动
import livereload from 'gulp-livereload'; // 热更新
import args from './util/args';

gulp.task('pages', () => {
	return gulp.src('app/**/*.ejs')
	// 复制
	.pipe(gulp.dest('server'))
	// 是否更新
	.pipe(gulpif(args.watch, livereload()))
})