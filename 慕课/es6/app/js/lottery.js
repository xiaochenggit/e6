import 'babel-polyfill';
import Base from './lottery/base';
import Timer from './lottery/timer';
import Calculate from './lottery/calculate';
import Interface from './lottery/interface';
import $ from 'jquery';

/**
 * [copyProperties 深拷贝]
 * @param  {[type]} target [赋值对象]
 * @param  {[type]} source [原对象]
 * @return {[type]}        [description]
 */
// const copyProperties = function(target, source) {
// 	for (let key of Reflect.ownKeys(source)) {
// 		if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
// 			let desc = Object.getOwnPropertyDescriptor(source, key);
// 			Object.defineProperty(target, key, desc);
// 		}
// 	}
// }
	const copyProperties = function(target, source) {
		for(let key of Reflect.ownKeys(source)) {
			if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
				let desc = Object.getOwnPropertyDescriptor(source,key);
				Object.defineProperty(target,key, desc)
			}
		}
	}
/**
 * [mix 多重继承]
 * @param  {...[type]} mixins [description]
 * @return {[class]}           [返回一个多重继承之后的类]
 */
// const mix = function(...mixins) {
// 	class Mix {}
// 	for (let mixin in mixins) {
// 		copyProperties(Mix, mixin);
// 		copyProperties(Mix.prototype, mixin.prototype);
// 	}
// 	return Mix;
// }
	const mix = function (...mixins) {
		class Mix {};
		for ( let mixin of mixins) {
			copyProperties(Mix, mixin);
			copyProperties(Mix.prototype, mixin.prototype);
		}
		return Mix;
	}

class Lottery extends mix(Base, Calculate, Interface, Timer){
	constructor(name = 'syy', cname = '11选5', issue = '***', state = '***') {
		super();
		this.name = name;
		this.cname = cname;
		this.issue = issue;
		this.state = state;
		this.el = '';
		this.omit = new Map(); // 遗漏数据
		this.open_code = new Set(); // 开奖号码
		this.open_code_list = new Set(); // 开奖号码集合
		this.play_list = new Map() // 玩法
		this.number = new Set() // 号码合集
		this.issue_el = "#curr_issue";
		this.countdown_el = '#countdown';
		this.state_el = '.state_el';
		this.cart_el = '.codelist';
		this.omit_el = '';
		this.cur_play = 'r5';
		this.initPlayList();
		this.initNumber();
		this.updateState();
		this.initEvent();
	}
	/**
	 * [updateState 更新状态]
	 * @return {[type]} [description]
	 */
	updateState() {
		let self = this;
		this.getState().then(function(res){
			self.issue = res.issue;
			self.end_time = res.end_time;
			self.state = res.state;
			$(self.issue_el).text(res.issue);
			self.countdown(res.end_time, function(time) {
				$(self.countdown_el).html(time);
			}, function() {
				setTimeout(function() {
					self.updateState();
					self.getOmit(self.issue).then(function(){

					})
					self.getOpenCode(self.issue).then(function(){
						
					})
				}, 500)
			})
		})
	}
	/**
	 * [initEvent 初始化一些事件]
	 * @return {[type]} [description]
	 */
	initEvent() {
		let self = this;
		$('#plays').on('click', 'li', self.changePlayNav.bind(self));
		$('.boll-list').on('click', '.btn-boll', self.toggleCodeActive.bind(self));
		$('#confirm_sel_code').on('click', self.addCode.bind(self));
		$('.dxjo').on('click', 'li', self.assistHandle.bind(self));
		$('.qkmethod').on('click', '.btn-middle', self.getRandomCode.bind(self));
	}
}

export default Lottery;