import gulp from 'gulp';
import gulpif from 'gulp-if'; // 做 if 判断的
import concat from 'gulp-concat'; // 文件拼接
import webpack from 'webpack'; // 文件打包
import gulpWebpack from 'webpack-stream'; 
import named from 'vinyl-named'; // 文件重命名
import livereload from 'gulp-livereload'; // 热更新,文件修改自动刷新
import plumber from 'gulp-plumber'; // 文件信息流
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // css js 文件压缩的
import {log, colors} from 'gulp-util'; // 命令行输出
import args from './util/args'; // 自己写的命令行脚本解析的包

// 创建脚本编译的任务
gulp.task('scripts', ()=> {
	// 打开首页
	return gulp.src(['app/js/index.js'])
	// 集中处理错误
	.pipe(plumber({
		errorHandle: function() {

		}
	}))
	// 重命名
	.pipe(named())
	// 编译
	.pipe(gulpWebpack({
		module: {
			loaders: [{
				test: /\.js$/,
				loader: 'babel'
			}]
		}
	}), null, (err, stats) => {
		log(`Finished ${colors.cyan('scripts')}`, stats.toString({
			chunks: false
		}))
	})
	// 放在什么位置
	.pipe(gulp.dest('server/public/js'))
	.pipe(rename({
		basename: 'cp',
		extname: '.min.js'
	}))
	// 压缩
	.pipe(uglify({
		compress: {
			properties: false
		},
		output: {
			'quote_keys': true
		}
	}))
	// 存储
	.pipe(gulp.dest('server/public/js'));
	// 监听刷新
	.pipe(gulpif(args.watch, livereload()))
})