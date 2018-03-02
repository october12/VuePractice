class Vue {
  constructor(options) {
	this.$options = options
	this._data = options.data
	observer(options.data, this._update)
	this._update
  }
  _update() {
	this.$options.render()
  }
}
function observer(value, cb){
	Object.keys(value).forEach((key) => defineReactive(value, key, value[key], cb))
}

function defineReactive(obj, key, val, cb) {
	Object.defineProperty(obj, key, {
		enumberable: true,
		configurable: true,
		get: ()=>{},
		set: newVal=>{
			cb()
		}
	})
}

modules.exports = Vue