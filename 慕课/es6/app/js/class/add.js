// Map . Array 的增删改查
{
	let map = new Map();
	let array = [];
	map.set('t',1);
	array.push({t: 1});
	console.info('Map - Array', map, array);

	// 查

	let map_exist = map.has('t');
	let array_exist = array.find( (item) => item.t);
	console.log('map_exist', map_exist, 'array_exist', array_exist);

	// 改
	map.set('t', 2);
	array.forEach( (item) => item.t ? item.t = 2: '');
	console.info('Map - Array', map, array);

	// 删除
	map.delete('t');
	let index = array.findIndex( (item) => item.t);
	array.splice(index, 1);
	console.info('Map - Array', map, array);
}

{
	// Set Aarry 
	let set = new Set();
	let array = [];

	// 增

	set.add({t: 1});
	array.push({t: 1});
	console.info('Set-Array', set, array);

	// 查

	let set_exist = set.has({t: 1});
	let array_exist = array.find((item) => item.t);
	console.info('Set-Array', set_exist, array_exist);

	// 改

	set.forEach((item) => item.t ? item.t = 2 : '');
	array.forEach((item) => item.t ? item.t = 2 : '');
	console.info('Set-Array', set, array);

	// 删

	set.forEach((item) => item.t ? set.delete(item) : '');
	let index = array.findIndex((item) => item.t);
	array.splice(index, 1);
	console.info('Set-Array', set, array);
}

{
	// Set Map Object
	let item = {t : 1};
	// 初始化
	let map = new Map();
	let set = new Set();
	let obj = {};

	// 增加

	map.set('t', 1);
	set.add(item);
	obj['t'] = 1;
	console.log('Map-Set-Objeact', map, set, obj);

	// 查

	console.log({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	})

	// 改

	map.set('t', 2);
	item.t = 2;
	obj['t'] = 2;
	console.log('Map-Set-Objeact', map, set, obj);

	// 删除
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('Map-Set-Objeact', map, set, obj);
}