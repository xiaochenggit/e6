// 函数
{
	// 函数的默认参数
	function text(name,say = 'hello world'){
		console.log(name,say);
	}
	text('xiao');
	text('xiao','kill me');
}	

{
	let x = 'test';
	// 此时 y 的取值 是函数里的 x
	function text(x, y=x) {
		console.log(x,y);
	}
	text('xiao');
}

{
	function text(...arg) {
		for (let v of arg) {
			console.log('...arg', v);
		}
	}
	text(1,2,3,4,5,6);
}

{
	console.log(...[1,2,3,4]);
}