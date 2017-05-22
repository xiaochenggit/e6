// Generator 异步编程的方式 相对 Promise 更高级一些

{
	/**
	 * Generator 基本定义
	 */
	let tell = function*() {
		yield 'a';
		yield 'b';
		return 'c'
	};
	let k = tell();
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
}

{
	let obj = {};
	obj[Symbol.iterator] = function* (){
		yield 1;
		yield 2;
		yield 3;
	}
	for (let value of obj) {
		console.log('key', value);
	}
}

{
	let state = function*() {
		while (true) {
			yield 'A';
			yield 'B';
			yield 'c';
		}
	}

	let status = state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}

// {
// 	// async 是 Generator 的语法糖
// 	let state = async function() {
// 		while (true) {
// 			await '1';
// 			await '2';
// 			await '3';
// 		}
// 	}

// 	let status = state();
// 	console.log(status.next());
// 	console.log(status.next());
// 	console.log(status.next());
// 	console.log(status.next());
// 	console.log(status.next());
// 	console.log(status.next());
// 	console.log(status.next());
// }

{
	// 抽奖次数限制
	let draw = function(count) {
		// 具体抽奖逻辑 忽略
		console.log(`剩余${count}次`);
	}

	let residue = function* (count) {
		while ( count > 0) {
			count --;
			yield draw(count);
		}
	}

	let star = residue(5);

	let btn = document.createElement('button');
	btn.id = 'start';
	btn.textContent = '抽奖';
	document.body.appendChild(btn);
	document.getElementById('start').addEventListener('click', function() {
		star.next();
	},false)
}

{
	// 长轮询
	let ajax = function*() {
		yield new Promise(function(resolve, reject) {
			// 模拟请求延迟
			setTimeout(function() {
				resolve({code: 0});
			}, 200)
		})
	}

	let pull = function() {
		let genertaor = ajax();
		let step = genertaor.next();
		step.value.then(function(d) {
			if (d.code != 0) {
				setTimeout( function() {
					console.log('wait');
					pull();
				}, 1000);
			} else {
				console.info(d);
			}
		})
	}
	pull();
}