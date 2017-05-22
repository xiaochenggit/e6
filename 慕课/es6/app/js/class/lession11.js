// Proxy 和 Reflect
{
	let obj = {
		time: '2017-05-22',
		name: 'xiaocheng',
		_r: 123
	}

	// Proxy 代理
	let monitor = new Proxy(obj,{
		// 代理对象属性的读取
		get(target, key) {
			return target[key].replace('2017', '2018');
		},
		// 拦截对象设置属性 (只能设置 name 属性的值)
		set(target, key, value) {
			if (key == name) {
				return target[key] = value;
			} else {
				return target;
			}
		},
		// 拦截 key in Object 的操作
		has(target, key) {
			if (key === 'name') {
				return target[key];
			} else {
				return false;
			}
		},
		// 拦截 delete
		deleteProperty(target, key) {
			if (key.charAt(0) == '_') {
				delete target[key];
				return true;
			} else {
				return target[key];
			}
		},
		// 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
		ownKeys(target) {
			return Object.keys(target).filter((item) => item != 'time');
		}
	});
	console.log('get', monitor.time);
	monitor.time = '2019';
	monitor.name = 'zhaoqiang';
	console.log('set', monitor.time, monitor);
	console.log('has', 'name' in monitor, 'time' in monitor);
	delete monitor.time;
	console.log('delete', monitor);
	delete monitor._r;
	console.log('delete', monitor);

	console.log('ownKeys', Object.keys(monitor));
}

{
	// Reflect
	let obj = {
		time: '2017-05-22',
		name: 'xiaocheng',
		_r: 123
	}

	console.log('Reflect get', Reflect.get(obj, 'time'));
	console.log('Reflect set', Reflect.set(obj, 'name', 'zhaoqiang'), obj);
	console.log('Reflect has', Reflect.has(obj, 'name'), obj);
}

{
	// 校验
	function validator(target, validator) {
		return new Proxy(target, {
			_validator: validator,
			set(target, key, value, proxy) {
				if (target.hasOwnProperty(key)) {
					let va = this._validator[key];
					if (!!va(value)) {
						return Reflect.set(target, key, value, proxy);
					} else {
						throw Error(`不能设置 ${key} 到 ${value}`)
					}
				} else {
					throw Error(`${key} 不存在！`);
				}
			}
		})
	}

	const personValidators = {
		name(val) {
			return typeof val === 'string';
		},
		age(val) {
			return typeof val === 'number' && val > 18
		}
	}

	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
			return validator(this, personValidators);
		}
	}

	const  person = new Person('肖成', 24);
	console.info(person);
	person.name = 'zhaoqiang';
	console.info(person);
	person.age = 26;
	console.info(person);
}