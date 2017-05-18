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
	 */

	console.log(`最大区间${Number.MAX_SAFE_INTEGER}`);
	console.log(`最小区间${Number.MIN_SAFE_INTEGER}`);
}