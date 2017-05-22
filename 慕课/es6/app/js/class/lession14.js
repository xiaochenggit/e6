// Iterator for...of 循环

{
	// 数组自带 
	let arr = ['hello1','world'];
	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());
}

{
	// obj 自定义 Iterator 
	let obj = {
		start: [1,3,2],
		end: [7,8,9],
		[Symbol.iterator](){
			let self = this;
			let index = 0;
			let arr = self.start.concat(self.end);
			let len = arr.length;
			return {
				next() {
					if (index < len) {
						return {
							value: arr[index ++],
							done: false
						}
					} else {
						return {
							value: arr[index ++],
							done: true
						}
					}
				}
			}
		}
	}
	console.log('obj', obj);
	for (let key of obj) {
		console.log('key', key);
	}
}

{
	// for of  方法
	let arr = ['hello1','world'];
	for (let value of arr) {
		console.log('value', value);
	}
}