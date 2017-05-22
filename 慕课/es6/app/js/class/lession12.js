/**
 * 类的概念
 * 基本语法 、类的继承、静态方法、静态属性、getter、setter
 */

{
	/**
	 * 基本定义和生成实例
	 */
	class Parent{
		constructor(name='xiaocheng'){
			this.name = name;
		}
	}
	let v_parent = new Parent('zhaoqiang');
	console.log('构造函数', v_parent);
}

{
	/** 
	 * 继承 class Child extends Parent {} 
	 */
	class Parent {
		constructor(name='xiao') {
			this.name = name;
		}
	}

	class Child extends Parent{

	}

	let v_child = new Child();
	console.log('继承', v_child);
}

{
	/** 
	 * 继承传递 super()
	 */
	class Parent {
		constructor(name='xiao') {
			this.name = name;
		}
	}

	class Child extends Parent{
		constructor(name = 'child') {
			super(name);
			this.type = 'childType'; // 一定要在 super() 之后
		}
	}

	let v_child = new Child();
	console.log('继承', v_child);
}

{
	/**
	 * getter 
	 * setter
	 */

	class Parent {
		constructor(name='xiao') {
			this.name = name;
		}

		get loogName() {
			return 'mk ' + this.name;			
		}

		set loogName(value) {
			this.name = value;
		}

	}

	let v_parent = new Parent();
	console.log('Parent', v_parent);
	console.log('getter', v_parent.loogName);
	v_parent.loogName = '肖成';
	console.log('getter', v_parent.loogName);

}

{
	/**
	 * 静态方法 static xxx() 调用需要类调用,并不是类的实例
	 */

	class Parent{
		constructor(name = 'Parent') {
			this.name = name;
		}

		static tell() {
			console.log('tell')
		}
	}

	Parent.tell();
}

{
	// 静态方法
	class Parent{
		constructor(name = 'Parent') {
			this.name = name;
		}

		static tell() {
			console.log('tell')
		}
	}
	Parent.type = 'test';
	console.log('静态属性', Parent.type);
}