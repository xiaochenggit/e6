/**
 * 正则对比
 */
{
	let regexp = new RegExp('xyz', 'i');
	let regexp2 = /xyz/i;
	console.log(regexp.test('xyz112'),regexp2.test('xyz112'));
	// es6 正则的第二个参数会覆盖掉 第一个参数中的 flags
	let regexp3 = new RegExp(/xyz/ig, 'i');
	console.log(regexp3.flags);
}

{
	// y
	let str = '_bbb_bb_b';
	let reg1 = /b+/g;
	let reg2 = /b+/y;
	// es6 中 flags 为Y 就是在开始的位置匹配 
	console.log("one",reg1.exec(str),reg2.exec(str));
	console.log("two",reg1.exec(str),reg2.exec(str));
	// es6 检验是否有Y属性
	console.log(reg1.sticky, reg2.sticky);
}

{
	// u 超过两个字节的字符就需要使用 u 了
	console.log('u-1',/^\uD830/.test('\uD830\uDC2A'));
	console.log('u-1',/^\uD830/u.test('\uD830\uDC2A'));
	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a')); // true
	console.log(`\u{20BB7}`);
	let str = '𠮷';
	console.log('u',/^.$/.test(str));
	console.log('u-1',/^.$/u.test(str));
	console.log('test1',/𠮷{2}/.test('𠮷𠮷'));
	console.log('test1',/𠮷{2}/u.test('𠮷𠮷'));
}