/**
 * 字符串
 */
{
	console.log('a',`\u0061`);
	console.log('s',`\u20887`); // 0xFFFF
	console.log('s',`\u{20887}`);
	let str = '𠢇';
}

{
	let str = '𠢇';
	console.log('length', str.length);
	console.log('0', str.charAt(0));
	console.log('1', str.charAt(1));
	console.log('at0', str.charCodeAt(0));
	console.log('at1', str.charCodeAt(1));


	let str1 = '𠢇a';
	console.log('length', str1.length);

	console.log('code0', str1.codePointAt(0));
	console.log('code0', str1.codePointAt(0).toString(16));
	console.log('code1', str1.codePointAt(1));
	console.log('code2', str1.codePointAt(2));
}

{
	console.log(String.fromCharCode('0x20bb7'));
	console.log(String.fromCodePoint('0x20bb7'));
}

{
	let str = '\u{20bb7}abc';

	for (let i = 0; i < str.length ; i++) {
		console.log('es5', str[i]);
	}

	for (let code of str) {
		console.log('es6', code);
	}
}

{
	/**
	 * string.includes return {boolean} 判断字符串包不包含某个字符
	 * string.startsWith('xxx') {boolean} 判断某个字符串是不是以 xxx 开头
	 * string.endsWith('xxx') {boolean} 判断某个字符串是不是以 xxx 结尾
	 */
	let str = 'string';
	console.log('includes', str.includes('r')); 
	console.log('startsWith', str.startsWith('stre'));
	console.log('endsWith', str.endsWith('ng'));
}

{
	/**
	 * string.repeat(n) {string} 返回 string 复制 n 次的结果
	 */
	let str = 'abc';
	console.log(str.repeat(4));
}

{
	let name = 'xiao';
	let say = 'Hello Word';
	let m = `I am ${name}, I say ${say}`;
	console.log(m);
}

{
	/**
	 * string.padStart(length,string1) {string} 在开头用 str1 补齐到 length 长度
	 * string.padEnd(length,string1) {string} 在结尾用 str2 补齐到 length 长度
	 */
	console.log('1'.padStart(2,'0'));
	console.log('1'.padEnd(2,'a'));
}

{
	let user = {
		name : 'xiaocheng',
		say: 'Hello Word'
	}
	console.log(abc`I am ${user.name},${user.say}`);
	function abc(s,v1,v2) {
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}

{
	/**
	 * String.raw 为里面的字符转义了, 可以原封不动的输出
	 */
	console.log(String.raw`hello\nxiao`);
	console.log(`hello\nxiao`);
}