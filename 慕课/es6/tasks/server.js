import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动服务器
import args from './util/args';

gulp.task('server', (cb) => {
	if (!args.watch) return cb();

	var server = liveserver.new(['--harmoney','server/bin/www']);
	server.start();

	//监听
	gulp.watch(['server/public/**/*js','server/views/**/*.ejs'], function(file) {
		server.notify.apply(server,[file]);
	})

	// 重启
	gulp.watch(['server/routes/**/*js','server/app.js'], function() {
		server.start.bind(server)()	
	})
	
})