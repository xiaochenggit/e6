// Decorator 修改类的函数

{
	// 修饰器函数
	let readonly = function(target,name,descriptor) {
		descriptor.writable = false;
		return descriptor;
	}

	class Text{
		@readonly
		time() {
			return '时间2017-05-22'
		}
	}

	let text = new Text();
	console.log('time', text.time());

	// 重新赋值
	// text.time = 1; 会报错。 不允许被修改
	text.type = 1;
	console.log('type', text.type);
}


{
	// 类的修饰
	let typename = function(target,name,descriptor) {
		target.myname = 'xiao';
	}
	@typename
	class Test{

	}
	console.log('类的修饰', Test.myname);
	// 第三方js库 core-decorators , npm install core-decorators
}

{
	// 日志系统
	let log = (type) => {
		return function(target,name,descriptor) {
			let src_method = descriptor.value;
			descriptor.value = (...arg) => {
				src_method.apply(target,arg);
				console.info(`log ${type}`);
			}
		}
	}

	class AD{
		@log('show')
		show() {
			console.log('ad is show');
		}
		@log('click')
		click() {
			console.log('ad is click');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}