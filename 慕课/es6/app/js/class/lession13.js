// Promise 
{
	let time = 0;
	let timer = setInterval(function() {
		time += 1;
		console.log('time', time);
		if (time == 10) {
			clearInterval(timer);
		};
	},1000)
}

{
	let ajax = function () {
		console.log('ajax 执行 1');
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve();
			},1000)
		})
	}

	ajax().then(function() {
		console.log('promise1', 'timeout2');
	});
}

{
	let ajax = function (){
		console.log('ajax 执行 2');
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve();
			},1000)
		})	
	}
	ajax()
	.then(function (){
		return new Promise(function(resolve, reject) {
			setTimeout(function(){
				resolve();
			},2000)
		})	
	})
	.then(function(){
		console.log('ajax3','promise3');
	})
}

{
	// 异常捕获
	let ajax = function(num) {
		console.log('异常捕获ajax');
		return new Promise(function(resolve, reject) {
			if (num >= 5) {
				resolve(num);
			} else {
				throw  new Error('参数不能小于5');
			}
		})
	}

	ajax(6).then(function(num){
		console.log('没有捕获异常num', num);
	}).catch(function(err){
		console.log('成功捕获异常err', err);
	})

	ajax(3).then(function(num){
		console.log('没有捕获异常num', num);
	}).catch(function(err){
		console.log('成功捕获异常err', err);
	})
}

{
	// 所有图片加载完在添加到页面
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}

	function showImgs(imgs) {
		imgs.forEach( function(element) {
			document.body.appendChild(element);
		});
	}
	// Promise.all 把里面 resolve的 数组 返回整合成一个 resolve
	Promise.all([
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_62.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_58.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_37.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_64.jpg'),
	]).then(showImgs);
}

{
	// Promise.race([]).then(); 哪个先完成就选取哪个
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}

	function showImg(img) {
		let p = document.createElement('p');
		console.log(img);
		p.appendChild(img);
		document.body.appendChild(p);
	}

	Promise.race([
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_62.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_58.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_37.jpg'),
		loadImg('http://s0.static.duoqu.com/www/v2/img/global/game_photo_64.jpg'),
	]).then(showImg);
}