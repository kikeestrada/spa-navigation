(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _swDetecter = require('./modules/swDetecter');

var _topNav = require('./modules/topNav');

var _topNav2 = _interopRequireDefault(_topNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	(0, _swDetecter.swDetecter)();
	(0, _topNav2.default)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('page2')) {
		// functions here
	} else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();

},{"./modules/swDetecter":2,"./modules/topNav":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var swDetecter = exports.swDetecter = function swDetecter() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(function (reg) {
			return console.log('Registro de SW exitoso', reg);
		}).catch(function (err) {
			return console.warn('Error al tratar de registrar el sw', err);
		});
	}
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = function topNav() {
	var d = document,
	    headerBtn = d.querySelector('.hamburger'),
	    menu = d.querySelector('.top-nav__menu');
	headerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		headerBtn.classList.toggle('is-active'), menu.classList.toggle('is-active');
	});

	d.addEventListener('click', function (e) {
		if (e.target.matches('.top-nav__anchor')) {
			headerBtn.classList.remove('is-active'), menu.classList.remove('is-active');
		}
	});
};

exports.default = topNav;

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
