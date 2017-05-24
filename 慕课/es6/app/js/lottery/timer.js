
class Timer{
	/**
	 * countdown() 时间更新函数, end 是结束时间, update 时间更新的函数 、
	 * handle 时间结束的回调函数 
	 */
	countdown(end,update,handle) {
		const now = new Date().getTime();
		const self = this;
		if (now > end) {
			handle.call(this);
		} else {
			let last_time = end - now;
			// 天、时、分、秒 换算
			const px_d = 1000*60*60*24;
			const px_h = 1000*60*60;
			const px_m = 1000*60;
			const px_s = 1000*60;
			// 计算 天、时、分、秒
			let d = Math.floor(last_time / px_d);
			let h = Math.floor((last_time - d * px_d) / px_h);
			let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
			let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);
			// 添加数组模板
			let arrayHTML = [];
			if (d > 0) {
				arrayHTML.push(`<em>${d}</em>天`);
			}
			if (arrayHTML.length || h > 0) {
				arrayHTML.push(`<em>${h}</em>时`);
			}
			if (arrayHTML.length || m > 0) {
				arrayHTML.push(`<em>${m}</em>分`);
			}
			if (arrayHTML.length || s > 0) {
				arrayHTML.push(`<em>${s}</em>秒`);
			}
			self.last_time = arrayHTML.join('');
			update.call(self,arrayHTML.join(''));
			// 轮询
			setTimeout(function() {
				self.countdown(end,update,handle);
			}, 1000)
		}
	}
}

export default Timer;