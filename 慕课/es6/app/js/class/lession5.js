{
	console.log('10进制',0b111110111);
	console.log('8进制',0o767);
}

{
	/**
	 * Number.isFinite(n) {boolean} 判断 n 是不是非无穷大
	 */
	 console.log('15', Number.isFinite(15));
	 console.log('NaN', Number.isFinite(NaN));
	 console.log('1/0', Number.isFinite('true'/0));
	 console.log('NaN', Number.isNaN(NaN));
	 console.log('0', Number.isNaN(0));
}

{
	/**
	 * Number.isInteger(n) {boolean} 判断 n 是不是整数
	 */
	console.log('25', Number.isInteger(25));
	console.log('25.0', Number.isInteger(25.0));
	console.log('25.1', Number.isInteger(25.1));
	console.log('25', Number.isInteger('25'));
}

{
	/**
	 * Number 区间
	 * Number.isSafeInteger(n) {boolean} 判断 n 是不是在安全范围内
	 */

	console.log(`最大区间${Number.MAX_SAFE_INTEGER}`);
	console.log(`最小区间${Number.MIN_SAFE_INTEGER}`);
	console.log('10', Number.isSafeInteger(10));
	console.log('a', Number.isSafeInteger('a'));
}

{
	/**
	 * Math.trunc(n) {Number} 取整
	 */
	console.log('4.1', Math.trunc(4.1));
	console.log('4.9', Math.trunc(4.9));
}

{
	/**
	 * Math.sign(n) {Number} 1 为正数 -1 为负数 0 为 0   
	 * 当 '50' 为字符串的时候会先转成数字在判断 所以会返回1
	 * 当 'foo' 字符串无法转换成数字时 返回 NaN
	 */

	console.log('5', Math.sign(5));
	console.log('0', Math.sign(0));
	console.log('-5', Math.sign(-5));
	console.log('50str', Math.sign('50'));
	console.log('foo', Math.sign('foo'));
}