import gulp from 'gulp';
import del from 'del'; // 删除
import args from './util/args';

gulp.task('clean', () => {
	return del(['server/public','server/views']);
})