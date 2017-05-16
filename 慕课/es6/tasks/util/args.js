import yargs from 'yargs';

const args = yargs

	// 区分开发环境还是线上环境

	.option('production',{
		boolrean: true,
		default: false,
		describe: 'min all scripts'
	})

	// 监听文件变化

	.option('watch',{
		boolrean: true,
		default: false,
		describe: 'watch all file'
	})

	// 是否输出日志

	option('verbose',{
		boolrean: true,
		default: false,
		describe: 'log'
	})

	// 强制生成 sourcemaps 

	option('sourcemaps',{
		describe: 'force the creation of sroucemaps'
	})

	// 端口

	option('port',{
		string: true,
		default: 8080,
		describe: 'server port'
	})

	.argv