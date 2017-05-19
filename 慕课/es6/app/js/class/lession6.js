{
	/**
	 * Array.of(n,n1); {Array} 把参数添加到空数组中并返回 , 如果参数为空返回空数组
	 */
	let arr = Array.of(1,3,5,7,9,11);
	console.log('arr', arr);

	let empty = Array.of();
	console.log('empty', empty);
}

{
	/**
	 * Array.from(n1) {Array} 参数只有一个的时候 就是把集合 变成数组
	 * Array.from(n1,function()) 两个参数的时候 , 第二个函数相当于 map
	 */
	let arrP = document.querySelectorAll('p');
	arrP = Array.from(arrP);
	arrP.forEach( function(element, index) {
		console.log(element.textContent);
	});

	let arr = document.querySelectorAll('p');
	Array.from(arr,(item) => item.innerText = item.innerText + 'xiao');
}

{
	/** 填充数组
	 * Aarray.fill(n,start,end) 把数组中的每一项都变成 n
	 */
	console.log('n', [1,2,3,5,undefined].fill('n'));
	console.log('n-r', [1,23,3,4,5,6,61,131,].fill('n',1));
}

{
	/**
	 * Aarry.keys() {Array} 返回数组的下标数组
	 * Aarry.values() {Array} 返回数组的值数组
	 */
	for (let index of [1,2,3,4].keys()) {
		console.log('keys', index);
	}
	for (let value of [1,2,3,4].values()) {
		console.log('values', value);
	}
	for (let [index,value] of [1,2,3,4].entries()){
		console.log(`index${index} value${value}`);
	}	
}

{
	/**
	 * Aarry.copyWithin(Tstart,start,end); 参数 1 为被替换开始的位置 
	 * start 是替换开始的位置 end 是结束的位置
	 */
	console.log([1,2,3,4,5,6,7,8,9].copyWithin(0,3,6));
}

{
	/**
	 * Array.find(func) 返回符合函数的数组元素
	 * Array.findIndex(func) 返回符合函数的数组下标 
	 */
	console.log([1,2,3,5,6,7].find((item) => item > 3));
	console.log([1,2,3,5,6,7].findIndex( (item) => item > 3));
}

{
	/**
	 * Aarry.includes(n) {boolean} 返回 数组中是否包含元素N
	 */
	console.log('number',[1,2,NaN].includes(1));
	console.log('number',[1,2,NaN].includes(NaN));
}