/**
 * es6 解构赋值
 */
{
	// 数组解构 1
	let a,b;
	[a,b] = [1,2];
	console.log(a,b);
}

{
	// 数组解构赋值 2
	let a, b, reset;
	[a, b, ...reset] = [1,2,3,4,5,6,7];
	console.log(a,b,reset);
}

{
	// 对象解构赋值
	let a, b;
	({a, b} = {a: 101, b: 201});
	console.log(a,b);
}

{
	// 对象解构赋值 有默认值
	let a, b, c;
	[a, b, c=3] = [1, 2];
	console.log(a, b, c)
}

{
	// 解构赋值
	let a = 'a-1';
	let b = 'b-1';
	[a, b] = [b, a];
	console.log(a, b);
}

{
	let a, b;
	function returnNum(){
		return ['f1','f2'];
	}
	[a, b] = returnNum();
	console.log(a, b);
}

{
	let a, b;
	function returnNum() {
		return [1,2,3,4,5,67,8,9];
	}
	[a,,,,...b] = returnNum();
	console.log(a, b);
}

{
	let o = {xiao: 'xiaocheng', zhao: 'zhaoqing'};
	let {xiao,zhao} = o;
	console.log(xiao,zhao);
}

{
	let {a=10,b=5} = {a:3};
	console.log(a, b);
}

{
	// 重点 对象嵌套赋值 
	let meteDate = {
		title: '解构',
		test: [{
			title:'数组解构',
			des: 'descript'
		},{
			title:'对象解构',
			des: 'descript'
		}]
	}
	let {title:esTitle, test:[{title: enTitle}]} = meteDate;
	console.log(esTitle,enTitle);
}