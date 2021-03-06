! function (t) {
	var e = {};

	function n(i) {
		if (e[i]) return e[i].exports;
		var o = e[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = t, n.c = e, n.d = function (t, e, i) {
		n.o(t, e) || Object.defineProperty(t, e, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, n.r = function (t) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t.default
		} : function () {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 42)
}([function (t, e, n) {
	/* @preserve
	 * Leaflet 1.3.1, a JS library for interactive maps. http://leafletjs.com
	 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
	 */
	! function (t) {
		"use strict";
		var e = Object.freeze;

		function n(t) {
			var e, n, i, o;
			for (n = 1, i = arguments.length; n < i; n++)
				for (e in o = arguments[n]) t[e] = o[e];
			return t
		}
		Object.freeze = function (t) {
			return t
		};
		var i = Object.create || function () {
			function t() {}
			return function (e) {
				return t.prototype = e, new t
			}
		}();

		function o(t, e) {
			var n = Array.prototype.slice;
			if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
			var i = n.call(arguments, 2);
			return function () {
				return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
			}
		}
		var r = 0;

		function a(t) {
			return t._leaflet_id = t._leaflet_id || ++r, t._leaflet_id
		}

		function s(t, e, n) {
			var i, o, r, a;
			return a = function () {
				i = !1, o && (r.apply(n, o), o = !1)
			}, r = function () {
				i ? o = arguments : (t.apply(n, arguments), setTimeout(a, e), i = !0)
			}
		}

		function l(t, e, n) {
			var i = e[1],
				o = e[0],
				r = i - o;
			return t === i && n ? t : ((t - o) % r + r) % r + o
		}

		function c() {
			return !1
		}

		function h(t, e) {
			var n = Math.pow(10, void 0 === e ? 6 : e);
			return Math.round(t * n) / n
		}

		function u(t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		}

		function d(t) {
			return u(t).split(/\s+/)
		}

		function p(t, e) {
			for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
			return t.options
		}

		function f(t, e, n) {
			var i = [];
			for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
			return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
		}
		var m = /\{ *([\w_-]+) *\}/g;

		function _(t, e) {
			return t.replace(m, function (t, n) {
				var i = e[n];
				if (void 0 === i) throw new Error("No value provided for variable " + t);
				return "function" == typeof i && (i = i(e)), i
			})
		}
		var g = Array.isArray || function (t) {
			return "[object Array]" === Object.prototype.toString.call(t)
		};

		function v(t, e) {
			for (var n = 0; n < t.length; n++)
				if (t[n] === e) return n;
			return -1
		}
		var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

		function b(t) {
			return window["webkit" + t] || window["moz" + t] || window["ms" + t]
		}
		var x = 0;

		function w(t) {
			var e = +new Date,
				n = Math.max(0, 16 - (e - x));
			return x = e + n, window.setTimeout(t, n)
		}
		var k = window.requestAnimationFrame || b("RequestAnimationFrame") || w,
			P = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function (t) {
				window.clearTimeout(t)
			};

		function z(t, e, n) {
			if (!n || k !== w) return k.call(window, o(t, e));
			t.call(e)
		}

		function T(t) {
			t && P.call(window, t)
		}
		var M = (Object.freeze || Object)({
			freeze: e,
			extend: n,
			create: i,
			bind: o,
			lastId: r,
			stamp: a,
			throttle: s,
			wrapNum: l,
			falseFn: c,
			formatNum: h,
			trim: u,
			splitWords: d,
			setOptions: p,
			getParamString: f,
			template: _,
			isArray: g,
			indexOf: v,
			emptyImageUrl: y,
			requestFn: k,
			cancelFn: P,
			requestAnimFrame: z,
			cancelAnimFrame: T
		});

		function C() {}
		C.extend = function (t) {
			var e = function () {
					this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
				},
				o = e.__super__ = this.prototype,
				r = i(o);
			for (var a in r.constructor = e, e.prototype = r, this) this.hasOwnProperty(a) && "prototype" !== a && "__super__" !== a && (e[a] = this[a]);
			return t.statics && (n(e, t.statics), delete t.statics), t.includes && (function (t) {
				if ("undefined" != typeof L && L && L.Mixin) {
					t = g(t) ? t : [t];
					for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
				}
			}(t.includes), n.apply(null, [r].concat(t.includes)), delete t.includes), r.options && (t.options = n(i(r.options), t.options)), n(r, t), r._initHooks = [], r.callInitHooks = function () {
				if (!this._initHooksCalled) {
					o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
					for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this)
				}
			}, e
		}, C.include = function (t) {
			return n(this.prototype, t), this
		}, C.mergeOptions = function (t) {
			return n(this.prototype.options, t), this
		}, C.addInitHook = function (t) {
			var e = Array.prototype.slice.call(arguments, 1),
				n = "function" == typeof t ? t : function () {
					this[t].apply(this, e)
				};
			return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this
		};
		var E = {
			on: function (t, e, n) {
				if ("object" == typeof t)
					for (var i in t) this._on(i, t[i], e);
				else
					for (var o = 0, r = (t = d(t)).length; o < r; o++) this._on(t[o], e, n);
				return this
			},
			off: function (t, e, n) {
				if (t)
					if ("object" == typeof t)
						for (var i in t) this._off(i, t[i], e);
					else
						for (var o = 0, r = (t = d(t)).length; o < r; o++) this._off(t[o], e, n);
				else delete this._events;
				return this
			},
			_on: function (t, e, n) {
				this._events = this._events || {};
				var i = this._events[t];
				i || (i = [], this._events[t] = i), n === this && (n = void 0);
				for (var o = {
						fn: e,
						ctx: n
					}, r = i, a = 0, s = r.length; a < s; a++)
					if (r[a].fn === e && r[a].ctx === n) return;
				r.push(o)
			},
			_off: function (t, e, n) {
				var i, o, r;
				if (this._events && (i = this._events[t]))
					if (e) {
						if (n === this && (n = void 0), i)
							for (o = 0, r = i.length; o < r; o++) {
								var a = i[o];
								if (a.ctx === n && a.fn === e) return a.fn = c, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(o, 1)
							}
					} else {
						for (o = 0, r = i.length; o < r; o++) i[o].fn = c;
						delete this._events[t]
					}
			},
			fire: function (t, e, i) {
				if (!this.listens(t, i)) return this;
				var o = n({}, e, {
					type: t,
					target: this,
					sourceTarget: e && e.sourceTarget || this
				});
				if (this._events) {
					var r = this._events[t];
					if (r) {
						this._firingCount = this._firingCount + 1 || 1;
						for (var a = 0, s = r.length; a < s; a++) {
							var l = r[a];
							l.fn.call(l.ctx || this, o)
						}
						this._firingCount--
					}
				}
				return i && this._propagateEvent(o), this
			},
			listens: function (t, e) {
				var n = this._events && this._events[t];
				if (n && n.length) return !0;
				if (e)
					for (var i in this._eventParents)
						if (this._eventParents[i].listens(t, e)) return !0;
				return !1
			},
			once: function (t, e, n) {
				if ("object" == typeof t) {
					for (var i in t) this.once(i, t[i], e);
					return this
				}
				var r = o(function () {
					this.off(t, e, n).off(t, r, n)
				}, this);
				return this.on(t, e, n).on(t, r, n)
			},
			addEventParent: function (t) {
				return this._eventParents = this._eventParents || {}, this._eventParents[a(t)] = t, this
			},
			removeEventParent: function (t) {
				return this._eventParents && delete this._eventParents[a(t)], this
			},
			_propagateEvent: function (t) {
				for (var e in this._eventParents) this._eventParents[e].fire(t.type, n({
					layer: t.target,
					propagatedFrom: t.target
				}, t), !0)
			}
		};
		E.addEventListener = E.on, E.removeEventListener = E.clearAllEventListeners = E.off, E.addOneTimeEventListener = E.once, E.fireEvent = E.fire, E.hasEventListeners = E.listens;
		var S = C.extend(E);

		function A(t, e, n) {
			this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
		}
		var O = Math.trunc || function (t) {
			return t > 0 ? Math.floor(t) : Math.ceil(t)
		};

		function I(t, e, n) {
			return t instanceof A ? t : g(t) ? new A(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new A(t.x, t.y) : new A(t, e, n)
		}

		function D(t, e) {
			if (t)
				for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
		}

		function Z(t, e) {
			return !t || t instanceof D ? t : new D(t, e)
		}

		function B(t, e) {
			if (t)
				for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++) this.extend(n[i])
		}

		function N(t, e) {
			return t instanceof B ? t : new B(t, e)
		}

		function j(t, e, n) {
			if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
			this.lat = +t, this.lng = +e, void 0 !== n && (this.alt = +n)
		}

		function R(t, e, n) {
			return t instanceof j ? t : g(t) && "object" != typeof t[0] ? 3 === t.length ? new j(t[0], t[1], t[2]) : 2 === t.length ? new j(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new j(t, e, n)
		}
		A.prototype = {
			clone: function () {
				return new A(this.x, this.y)
			},
			add: function (t) {
				return this.clone()._add(I(t))
			},
			_add: function (t) {
				return this.x += t.x, this.y += t.y, this
			},
			subtract: function (t) {
				return this.clone()._subtract(I(t))
			},
			_subtract: function (t) {
				return this.x -= t.x, this.y -= t.y, this
			},
			divideBy: function (t) {
				return this.clone()._divideBy(t)
			},
			_divideBy: function (t) {
				return this.x /= t, this.y /= t, this
			},
			multiplyBy: function (t) {
				return this.clone()._multiplyBy(t)
			},
			_multiplyBy: function (t) {
				return this.x *= t, this.y *= t, this
			},
			scaleBy: function (t) {
				return new A(this.x * t.x, this.y * t.y)
			},
			unscaleBy: function (t) {
				return new A(this.x / t.x, this.y / t.y)
			},
			round: function () {
				return this.clone()._round()
			},
			_round: function () {
				return this.x = Math.round(this.x), this.y = Math.round(this.y), this
			},
			floor: function () {
				return this.clone()._floor()
			},
			_floor: function () {
				return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
			},
			ceil: function () {
				return this.clone()._ceil()
			},
			_ceil: function () {
				return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
			},
			trunc: function () {
				return this.clone()._trunc()
			},
			_trunc: function () {
				return this.x = O(this.x), this.y = O(this.y), this
			},
			distanceTo: function (t) {
				var e = (t = I(t)).x - this.x,
					n = t.y - this.y;
				return Math.sqrt(e * e + n * n)
			},
			equals: function (t) {
				return (t = I(t)).x === this.x && t.y === this.y
			},
			contains: function (t) {
				return t = I(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
			},
			toString: function () {
				return "Point(" + h(this.x) + ", " + h(this.y) + ")"
			}
		}, D.prototype = {
			extend: function (t) {
				return t = I(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
			},
			getCenter: function (t) {
				return new A((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
			},
			getBottomLeft: function () {
				return new A(this.min.x, this.max.y)
			},
			getTopRight: function () {
				return new A(this.max.x, this.min.y)
			},
			getTopLeft: function () {
				return this.min
			},
			getBottomRight: function () {
				return this.max
			},
			getSize: function () {
				return this.max.subtract(this.min)
			},
			contains: function (t) {
				var e, n;
				return (t = "number" == typeof t[0] || t instanceof A ? I(t) : Z(t)) instanceof D ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
			},
			intersects: function (t) {
				t = Z(t);
				var e = this.min,
					n = this.max,
					i = t.min,
					o = t.max,
					r = o.x >= e.x && i.x <= n.x,
					a = o.y >= e.y && i.y <= n.y;
				return r && a
			},
			overlaps: function (t) {
				t = Z(t);
				var e = this.min,
					n = this.max,
					i = t.min,
					o = t.max,
					r = o.x > e.x && i.x < n.x,
					a = o.y > e.y && i.y < n.y;
				return r && a
			},
			isValid: function () {
				return !(!this.min || !this.max)
			}
		}, B.prototype = {
			extend: function (t) {
				var e, n, i = this._southWest,
					o = this._northEast;
				if (t instanceof j) e = t, n = t;
				else {
					if (!(t instanceof B)) return t ? this.extend(R(t) || N(t)) : this;
					if (e = t._southWest, n = t._northEast, !e || !n) return this
				}
				return i || o ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), o.lat = Math.max(n.lat, o.lat), o.lng = Math.max(n.lng, o.lng)) : (this._southWest = new j(e.lat, e.lng), this._northEast = new j(n.lat, n.lng)), this
			},
			pad: function (t) {
				var e = this._southWest,
					n = this._northEast,
					i = Math.abs(e.lat - n.lat) * t,
					o = Math.abs(e.lng - n.lng) * t;
				return new B(new j(e.lat - i, e.lng - o), new j(n.lat + i, n.lng + o))
			},
			getCenter: function () {
				return new j((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
			},
			getSouthWest: function () {
				return this._southWest
			},
			getNorthEast: function () {
				return this._northEast
			},
			getNorthWest: function () {
				return new j(this.getNorth(), this.getWest())
			},
			getSouthEast: function () {
				return new j(this.getSouth(), this.getEast())
			},
			getWest: function () {
				return this._southWest.lng
			},
			getSouth: function () {
				return this._southWest.lat
			},
			getEast: function () {
				return this._northEast.lng
			},
			getNorth: function () {
				return this._northEast.lat
			},
			contains: function (t) {
				t = "number" == typeof t[0] || t instanceof j || "lat" in t ? R(t) : N(t);
				var e, n, i = this._southWest,
					o = this._northEast;
				return t instanceof B ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng
			},
			intersects: function (t) {
				t = N(t);
				var e = this._southWest,
					n = this._northEast,
					i = t.getSouthWest(),
					o = t.getNorthEast(),
					r = o.lat >= e.lat && i.lat <= n.lat,
					a = o.lng >= e.lng && i.lng <= n.lng;
				return r && a
			},
			overlaps: function (t) {
				t = N(t);
				var e = this._southWest,
					n = this._northEast,
					i = t.getSouthWest(),
					o = t.getNorthEast(),
					r = o.lat > e.lat && i.lat < n.lat,
					a = o.lng > e.lng && i.lng < n.lng;
				return r && a
			},
			toBBoxString: function () {
				return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
			},
			equals: function (t, e) {
				return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
			},
			isValid: function () {
				return !(!this._southWest || !this._northEast)
			}
		}, j.prototype = {
			equals: function (t, e) {
				if (!t) return !1;
				t = R(t);
				var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
				return n <= (void 0 === e ? 1e-9 : e)
			},
			toString: function (t) {
				return "LatLng(" + h(this.lat, t) + ", " + h(this.lng, t) + ")"
			},
			distanceTo: function (t) {
				return H.distance(this, R(t))
			},
			wrap: function () {
				return H.wrapLatLng(this)
			},
			toBounds: function (t) {
				var e = 180 * t / 40075017,
					n = e / Math.cos(Math.PI / 180 * this.lat);
				return N([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
			},
			clone: function () {
				return new j(this.lat, this.lng, this.alt)
			}
		};
		var U, W = {
				latLngToPoint: function (t, e) {
					var n = this.projection.project(t),
						i = this.scale(e);
					return this.transformation._transform(n, i)
				},
				pointToLatLng: function (t, e) {
					var n = this.scale(e),
						i = this.transformation.untransform(t, n);
					return this.projection.unproject(i)
				},
				project: function (t) {
					return this.projection.project(t)
				},
				unproject: function (t) {
					return this.projection.unproject(t)
				},
				scale: function (t) {
					return 256 * Math.pow(2, t)
				},
				zoom: function (t) {
					return Math.log(t / 256) / Math.LN2
				},
				getProjectedBounds: function (t) {
					if (this.infinite) return null;
					var e = this.projection.bounds,
						n = this.scale(t),
						i = this.transformation.transform(e.min, n),
						o = this.transformation.transform(e.max, n);
					return new D(i, o)
				},
				infinite: !1,
				wrapLatLng: function (t) {
					var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng,
						n = this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat,
						i = t.alt;
					return new j(n, e, i)
				},
				wrapLatLngBounds: function (t) {
					var e = t.getCenter(),
						n = this.wrapLatLng(e),
						i = e.lat - n.lat,
						o = e.lng - n.lng;
					if (0 === i && 0 === o) return t;
					var r = t.getSouthWest(),
						a = t.getNorthEast(),
						s = new j(r.lat - i, r.lng - o),
						l = new j(a.lat - i, a.lng - o);
					return new B(s, l)
				}
			},
			H = n({}, W, {
				wrapLng: [-180, 180],
				R: 6371e3,
				distance: function (t, e) {
					var n = Math.PI / 180,
						i = t.lat * n,
						o = e.lat * n,
						r = Math.sin((e.lat - t.lat) * n / 2),
						a = Math.sin((e.lng - t.lng) * n / 2),
						s = r * r + Math.cos(i) * Math.cos(o) * a * a,
						l = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
					return this.R * l
				}
			}),
			F = {
				R: 6378137,
				MAX_LATITUDE: 85.0511287798,
				project: function (t) {
					var e = Math.PI / 180,
						n = this.MAX_LATITUDE,
						i = Math.max(Math.min(n, t.lat), -n),
						o = Math.sin(i * e);
					return new A(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
				},
				unproject: function (t) {
					var e = 180 / Math.PI;
					return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
				},
				bounds: (U = 6378137 * Math.PI, new D([-U, -U], [U, U]))
			};

		function V(t, e, n, i) {
			if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
			this._a = t, this._b = e, this._c = n, this._d = i
		}

		function q(t, e, n, i) {
			return new V(t, e, n, i)
		}
		V.prototype = {
			transform: function (t, e) {
				return this._transform(t.clone(), e)
			},
			_transform: function (t, e) {
				return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
			},
			untransform: function (t, e) {
				return e = e || 1, new A((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
			}
		};
		var G = n({}, H, {
				code: "EPSG:3857",
				projection: F,
				transformation: function () {
					var t = .5 / (Math.PI * F.R);
					return q(t, .5, -t, .5)
				}()
			}),
			K = n({}, G, {
				code: "EPSG:900913"
			});

		function Y(t) {
			return document.createElementNS("http://www.w3.org/2000/svg", t)
		}

		function J(t, e) {
			var n, i, o, r, a, s, l = "";
			for (n = 0, o = t.length; n < o; n++) {
				for (a = t[n], i = 0, r = a.length; i < r; i++) s = a[i], l += (i ? "L" : "M") + s.x + " " + s.y;
				l += e ? Tt ? "z" : "x" : ""
			}
			return l || "M0 0"
		}
		var X = document.documentElement.style,
			Q = "ActiveXObject" in window,
			$ = Q && !document.addEventListener,
			tt = "msLaunchUri" in navigator && !("documentMode" in document),
			et = Ct("webkit"),
			nt = Ct("android"),
			it = Ct("android 2") || Ct("android 3"),
			ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
			rt = nt && Ct("Google") && ot < 537 && !("AudioNode" in window),
			at = !!window.opera,
			st = Ct("chrome"),
			lt = Ct("gecko") && !et && !at && !Q,
			ct = !st && Ct("safari"),
			ht = Ct("phantom"),
			ut = "OTransition" in X,
			dt = 0 === navigator.platform.indexOf("Win"),
			pt = Q && "transition" in X,
			ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !it,
			mt = "MozPerspective" in X,
			_t = !window.L_DISABLE_3D && (pt || ft || mt) && !ut && !ht,
			gt = "undefined" != typeof orientation || Ct("mobile"),
			vt = gt && et,
			yt = gt && ft,
			bt = !window.PointerEvent && window.MSPointerEvent,
			xt = !(!window.PointerEvent && !bt),
			wt = !window.L_NO_TOUCH && (xt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
			Lt = gt && at,
			kt = gt && lt,
			Pt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
			zt = !!document.createElement("canvas").getContext,
			Tt = !(!document.createElementNS || !Y("svg").createSVGRect),
			Mt = !Tt && function () {
				try {
					var t = document.createElement("div");
					t.innerHTML = '<v:shape adj="1"/>';
					var e = t.firstChild;
					return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
				} catch (t) {
					return !1
				}
			}();

		function Ct(t) {
			return navigator.userAgent.toLowerCase().indexOf(t) >= 0
		}
		var Et = (Object.freeze || Object)({
				ie: Q,
				ielt9: $,
				edge: tt,
				webkit: et,
				android: nt,
				android23: it,
				androidStock: rt,
				opera: at,
				chrome: st,
				gecko: lt,
				safari: ct,
				phantom: ht,
				opera12: ut,
				win: dt,
				ie3d: pt,
				webkit3d: ft,
				gecko3d: mt,
				any3d: _t,
				mobile: gt,
				mobileWebkit: vt,
				mobileWebkit3d: yt,
				msPointer: bt,
				pointer: xt,
				touch: wt,
				mobileOpera: Lt,
				mobileGecko: kt,
				retina: Pt,
				canvas: zt,
				svg: Tt,
				vml: Mt
			}),
			St = bt ? "MSPointerDown" : "pointerdown",
			At = bt ? "MSPointerMove" : "pointermove",
			Ot = bt ? "MSPointerUp" : "pointerup",
			It = bt ? "MSPointerCancel" : "pointercancel",
			Dt = ["INPUT", "SELECT", "OPTION"],
			Zt = {},
			Bt = !1,
			Nt = 0;

		function jt(t, e, n, i) {
			return "touchstart" === e ? function (t, e, n) {
				var i = o(function (t) {
					if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
						if (!(Dt.indexOf(t.target.tagName) < 0)) return;
						ie(t)
					}
					Ht(t, e)
				});
				t["_leaflet_touchstart" + n] = i, t.addEventListener(St, i, !1), Bt || (document.documentElement.addEventListener(St, Rt, !0), document.documentElement.addEventListener(At, Ut, !0), document.documentElement.addEventListener(Ot, Wt, !0), document.documentElement.addEventListener(It, Wt, !0), Bt = !0)
			}(t, n, i) : "touchmove" === e ? function (t, e, n) {
				var i = function (t) {
					(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Ht(t, e)
				};
				t["_leaflet_touchmove" + n] = i, t.addEventListener(At, i, !1)
			}(t, n, i) : "touchend" === e && function (t, e, n) {
				var i = function (t) {
					Ht(t, e)
				};
				t["_leaflet_touchend" + n] = i, t.addEventListener(Ot, i, !1), t.addEventListener(It, i, !1)
			}(t, n, i), this
		}

		function Rt(t) {
			Zt[t.pointerId] = t, Nt++
		}

		function Ut(t) {
			Zt[t.pointerId] && (Zt[t.pointerId] = t)
		}

		function Wt(t) {
			delete Zt[t.pointerId], Nt--
		}

		function Ht(t, e) {
			for (var n in t.touches = [], Zt) t.touches.push(Zt[n]);
			t.changedTouches = [t], e(t)
		}
		var Ft = bt ? "MSPointerDown" : xt ? "pointerdown" : "touchstart",
			Vt = bt ? "MSPointerUp" : xt ? "pointerup" : "touchend",
			qt = "_leaflet_";

		function Gt(t, e, n) {
			var i, o, r = !1,
				a = 250;

			function s(t) {
				var e;
				if (xt) {
					if (!tt || "mouse" === t.pointerType) return;
					e = Nt
				} else e = t.touches.length;
				if (!(e > 1)) {
					var n = Date.now(),
						s = n - (i || n);
					o = t.touches ? t.touches[0] : t, r = s > 0 && s <= a, i = n
				}
			}

			function l(t) {
				if (r && !o.cancelBubble) {
					if (xt) {
						if (!tt || "mouse" === t.pointerType) return;
						var n, a, s = {};
						for (a in o) n = o[a], s[a] = n && n.bind ? n.bind(o) : n;
						o = s
					}
					o.type = "dblclick", e(o), i = null
				}
			}
			return t[qt + Ft + n] = s, t[qt + Vt + n] = l, t[qt + "dblclick" + n] = e, t.addEventListener(Ft, s, !1), t.addEventListener(Vt, l, !1), t.addEventListener("dblclick", e, !1), this
		}

		function Kt(t, e) {
			var n = t[qt + Ft + e],
				i = t[qt + Vt + e],
				o = t[qt + "dblclick" + e];
			return t.removeEventListener(Ft, n, !1), t.removeEventListener(Vt, i, !1), tt || t.removeEventListener("dblclick", o, !1), this
		}

		function Yt(t, e, n, i) {
			if ("object" == typeof e)
				for (var o in e) Qt(t, o, e[o], n);
			else
				for (var r = 0, a = (e = d(e)).length; r < a; r++) Qt(t, e[r], n, i);
			return this
		}
		var Jt = "_leaflet_events";

		function Xt(t, e, n, i) {
			if ("object" == typeof e)
				for (var o in e) $t(t, o, e[o], n);
			else if (e)
				for (var r = 0, a = (e = d(e)).length; r < a; r++) $t(t, e[r], n, i);
			else {
				for (var s in t[Jt]) $t(t, s, t[Jt][s]);
				delete t[Jt]
			}
			return this
		}

		function Qt(t, e, n, i) {
			var o = e + a(n) + (i ? "_" + a(i) : "");
			if (t[Jt] && t[Jt][o]) return this;
			var r = function (e) {
					return n.call(i || t, e || window.event)
				},
				s = r;
			xt && 0 === e.indexOf("touch") ? jt(t, e, r, o) : !wt || "dblclick" !== e || !Gt || xt && st ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === e || "mouseleave" === e ? (r = function (e) {
				e = e || window.event, de(t, e) && s(e)
			}, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1)) : ("click" === e && nt && (r = function (t) {
				! function (t, e) {
					var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
						i = le && n - le;
					i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? oe(t) : (le = n, e(t))
				}(t, s)
			}), t.addEventListener(e, r, !1)) : "attachEvent" in t && t.attachEvent("on" + e, r) : Gt(t, r, o), t[Jt] = t[Jt] || {}, t[Jt][o] = r
		}

		function $t(t, e, n, i) {
			var o = e + a(n) + (i ? "_" + a(i) : ""),
				r = t[Jt] && t[Jt][o];
			if (!r) return this;
			xt && 0 === e.indexOf("touch") ? function (t, e, n) {
				var i = t["_leaflet_" + e + n];
				"touchstart" === e ? t.removeEventListener(St, i, !1) : "touchmove" === e ? t.removeEventListener(At, i, !1) : "touchend" === e && (t.removeEventListener(Ot, i, !1), t.removeEventListener(It, i, !1))
			}(t, e, o) : !wt || "dblclick" !== e || !Kt || xt && st ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r) : Kt(t, o), t[Jt][o] = null
		}

		function te(t) {
			return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, ue(t), this
		}

		function ee(t) {
			return Qt(t, "mousewheel", te), this
		}

		function ne(t) {
			return Yt(t, "mousedown touchstart dblclick", te), Qt(t, "click", he), this
		}

		function ie(t) {
			return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
		}

		function oe(t) {
			return ie(t), te(t), this
		}

		function re(t, e) {
			if (!e) return new A(t.clientX, t.clientY);
			var n = e.getBoundingClientRect(),
				i = n.width / e.offsetWidth || 1,
				o = n.height / e.offsetHeight || 1;
			return new A(t.clientX / i - n.left - e.clientLeft, t.clientY / o - n.top - e.clientTop)
		}
		var ae = dt && st ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;

		function se(t) {
			return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ae : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
		}
		var le, ce = {};

		function he(t) {
			ce[t.type] = !0
		}

		function ue(t) {
			var e = ce[t.type];
			return ce[t.type] = !1, e
		}

		function de(t, e) {
			var n = e.relatedTarget;
			if (!n) return !0;
			try {
				for (; n && n !== t;) n = n.parentNode
			} catch (t) {
				return !1
			}
			return n !== t
		}
		var pe, fe, me, _e, ge, ve = (Object.freeze || Object)({
				on: Yt,
				off: Xt,
				stopPropagation: te,
				disableScrollPropagation: ee,
				disableClickPropagation: ne,
				preventDefault: ie,
				stop: oe,
				getMousePosition: re,
				getWheelDelta: se,
				fakeStop: he,
				skipped: ue,
				isExternalTarget: de,
				addListener: Yt,
				removeListener: Xt
			}),
			ye = De(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
			be = De(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
			xe = "webkitTransition" === be || "OTransition" === be ? be + "End" : "transitionend";

		function we(t) {
			return "string" == typeof t ? document.getElementById(t) : t
		}

		function Le(t, e) {
			var n = t.style[e] || t.currentStyle && t.currentStyle[e];
			if ((!n || "auto" === n) && document.defaultView) {
				var i = document.defaultView.getComputedStyle(t, null);
				n = i ? i[e] : null
			}
			return "auto" === n ? null : n
		}

		function ke(t, e, n) {
			var i = document.createElement(t);
			return i.className = e || "", n && n.appendChild(i), i
		}

		function Pe(t) {
			var e = t.parentNode;
			e && e.removeChild(t)
		}

		function ze(t) {
			for (; t.firstChild;) t.removeChild(t.firstChild)
		}

		function Te(t) {
			var e = t.parentNode;
			e.lastChild !== t && e.appendChild(t)
		}

		function Me(t) {
			var e = t.parentNode;
			e.firstChild !== t && e.insertBefore(t, e.firstChild)
		}

		function Ce(t, e) {
			if (void 0 !== t.classList) return t.classList.contains(e);
			var n = Oe(t);
			return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
		}

		function Ee(t, e) {
			if (void 0 !== t.classList)
				for (var n = d(e), i = 0, o = n.length; i < o; i++) t.classList.add(n[i]);
			else if (!Ce(t, e)) {
				var r = Oe(t);
				Ae(t, (r ? r + " " : "") + e)
			}
		}

		function Se(t, e) {
			void 0 !== t.classList ? t.classList.remove(e) : Ae(t, u((" " + Oe(t) + " ").replace(" " + e + " ", " ")))
		}

		function Ae(t, e) {
			void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
		}

		function Oe(t) {
			return void 0 === t.className.baseVal ? t.className : t.className.baseVal
		}

		function Ie(t, e) {
			"opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
				var n = !1,
					i = "DXImageTransform.Microsoft.Alpha";
				try {
					n = t.filters.item(i)
				} catch (t) {
					if (1 === e) return
				}
				e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
			}(t, e)
		}

		function De(t) {
			for (var e = document.documentElement.style, n = 0; n < t.length; n++)
				if (t[n] in e) return t[n];
			return !1
		}

		function Ze(t, e, n) {
			var i = e || new A(0, 0);
			t.style[ye] = (pt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
		}

		function Be(t, e) {
			t._leaflet_pos = e, _t ? Ze(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
		}

		function Ne(t) {
			return t._leaflet_pos || new A(0, 0)
		}
		if ("onselectstart" in document) pe = function () {
			Yt(window, "selectstart", ie)
		}, fe = function () {
			Xt(window, "selectstart", ie)
		};
		else {
			var je = De(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
			pe = function () {
				if (je) {
					var t = document.documentElement.style;
					me = t[je], t[je] = "none"
				}
			}, fe = function () {
				je && (document.documentElement.style[je] = me, me = void 0)
			}
		}

		function Re() {
			Yt(window, "dragstart", ie)
		}

		function Ue() {
			Xt(window, "dragstart", ie)
		}

		function We(t) {
			for (; - 1 === t.tabIndex;) t = t.parentNode;
			t.style && (He(), _e = t, ge = t.style.outline, t.style.outline = "none", Yt(window, "keydown", He))
		}

		function He() {
			_e && (_e.style.outline = ge, _e = void 0, ge = void 0, Xt(window, "keydown", He))
		}
		var Fe = (Object.freeze || Object)({
				TRANSFORM: ye,
				TRANSITION: be,
				TRANSITION_END: xe,
				get: we,
				getStyle: Le,
				create: ke,
				remove: Pe,
				empty: ze,
				toFront: Te,
				toBack: Me,
				hasClass: Ce,
				addClass: Ee,
				removeClass: Se,
				setClass: Ae,
				getClass: Oe,
				setOpacity: Ie,
				testProp: De,
				setTransform: Ze,
				setPosition: Be,
				getPosition: Ne,
				disableTextSelection: pe,
				enableTextSelection: fe,
				disableImageDrag: Re,
				enableImageDrag: Ue,
				preventOutline: We,
				restoreOutline: He
			}),
			Ve = S.extend({
				run: function (t, e, n, i) {
					this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = Ne(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
				},
				stop: function () {
					this._inProgress && (this._step(!0), this._complete())
				},
				_animate: function () {
					this._animId = z(this._animate, this), this._step()
				},
				_step: function (t) {
					var e = +new Date - this._startTime,
						n = 1e3 * this._duration;
					e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete())
				},
				_runFrame: function (t, e) {
					var n = this._startPos.add(this._offset.multiplyBy(t));
					e && n._round(), Be(this._el, n), this.fire("step")
				},
				_complete: function () {
					T(this._animId), this._inProgress = !1, this.fire("end")
				},
				_easeOut: function (t) {
					return 1 - Math.pow(1 - t, this._easeOutPower)
				}
			}),
			qe = S.extend({
				options: {
					crs: G,
					center: void 0,
					zoom: void 0,
					minZoom: void 0,
					maxZoom: void 0,
					layers: [],
					maxBounds: void 0,
					renderer: void 0,
					zoomAnimation: !0,
					zoomAnimationThreshold: 4,
					fadeAnimation: !0,
					markerZoomAnimation: !0,
					transform3DLimit: 8388608,
					zoomSnap: 1,
					zoomDelta: 1,
					trackResize: !0
				},
				initialize: function (t, e) {
					e = p(this, e), this._initContainer(t), this._initLayout(), this._onResize = o(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(R(e.center), e.zoom, {
						reset: !0
					}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = be && _t && !Lt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Yt(this._proxy, xe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
				},
				setView: function (t, e, i) {
					if (e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(R(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) {
						void 0 !== i.animate && (i.zoom = n({
							animate: i.animate
						}, i.zoom), i.pan = n({
							animate: i.animate,
							duration: i.duration
						}, i.pan));
						var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
						if (o) return clearTimeout(this._sizeTimer), this
					}
					return this._resetView(t, e), this
				},
				setZoom: function (t, e) {
					return this._loaded ? this.setView(this.getCenter(), t, {
						zoom: e
					}) : (this._zoom = t, this)
				},
				zoomIn: function (t, e) {
					return t = t || (_t ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
				},
				zoomOut: function (t, e) {
					return t = t || (_t ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
				},
				setZoomAround: function (t, e, n) {
					var i = this.getZoomScale(e),
						o = this.getSize().divideBy(2),
						r = t instanceof A ? t : this.latLngToContainerPoint(t),
						a = r.subtract(o).multiplyBy(1 - 1 / i),
						s = this.containerPointToLatLng(o.add(a));
					return this.setView(s, e, {
						zoom: n
					})
				},
				_getBoundsCenterZoom: function (t, e) {
					e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
					var n = I(e.paddingTopLeft || e.padding || [0, 0]),
						i = I(e.paddingBottomRight || e.padding || [0, 0]),
						o = this.getBoundsZoom(t, !1, n.add(i));
					// Zoom 0 vue lointaine
					// Zoom 4 vue pr??cise
					if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
						center: t.getCenter(),
						zoom: o
					};
					var r = i.subtract(n).divideBy(2),
						a = this.project(t.getSouthWest(), o),
						s = this.project(t.getNorthEast(), o),
						l = this.unproject(a.add(s).divideBy(2).add(r), o);
					return {
						center: l,
						zoom: o
					}
				},
				fitBounds: function (t, e) {
					if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
					var n = this._getBoundsCenterZoom(t, e);
					return this.setView(n.center, n.zoom, e)
				},
				fitWorld: function (t) {
					return this.fitBounds([
						[-90, -180],
						[90, 180]
					], t)
				},
				panTo: function (t, e) {
					return this.setView(t, this._zoom, {
						pan: e
					})
				},
				panBy: function (t, e) {
					if (t = I(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
					if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
					if (this._panAnim || (this._panAnim = new Ve, this._panAnim.on({
							step: this._onPanTransitionStep,
							end: this._onPanTransitionEnd
						}, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
						Ee(this._mapPane, "leaflet-pan-anim");
						var n = this._getMapPanePos().subtract(t).round();
						this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
					} else this._rawPanBy(t), this.fire("move").fire("moveend");
					return this
				},
				flyTo: function (t, e, n) {
					if (!1 === (n = n || {}).animate || !_t) return this.setView(t, e, n);
					this._stop();
					var i = this.project(this.getCenter()),
						o = this.project(t),
						r = this.getSize(),
						a = this._zoom;
					t = R(t), e = void 0 === e ? a : e;
					var s = Math.max(r.x, r.y),
						l = s * this.getZoomScale(a, e),
						c = o.distanceTo(i) || 1,
						h = 1.42,
						u = h * h;

					function d(t) {
						var e = t ? -1 : 1,
							n = t ? l : s,
							i = l * l - s * s + e * u * u * c * c,
							o = 2 * n * u * c,
							r = i / o,
							a = Math.sqrt(r * r + 1) - r,
							h = a < 1e-9 ? -18 : Math.log(a);
						return h
					}

					function p(t) {
						return (Math.exp(t) - Math.exp(-t)) / 2
					}

					function f(t) {
						return (Math.exp(t) + Math.exp(-t)) / 2
					}
					var m = d(0);

					function _(t) {
						return s * (f(m) * (p(e = m + h * t) / f(e)) - p(m)) / u;
						var e
					}
					var g = Date.now(),
						v = (d(1) - m) / h,
						y = n.duration ? 1e3 * n.duration : 1e3 * v * .8;
					return this._moveStart(!0, n.noMoveStart),
						function n() {
							var r = (Date.now() - g) / y,
								l = function (t) {
									return 1 - Math.pow(1 - t, 1.5)
								}(r) * v;
							r <= 1 ? (this._flyToFrame = z(n, this), this._move(this.unproject(i.add(o.subtract(i).multiplyBy(_(l) / c)), a), this.getScaleZoom(s / function (t) {
								return s * (f(m) / f(m + h * t))
							}(l), a), {
								flyTo: !0
							})) : this._move(t, e)._moveEnd(!0)
						}.call(this), this
				},
				flyToBounds: function (t, e) {
					var n = this._getBoundsCenterZoom(t, e);
					return this.flyTo(n.center, n.zoom, e)
				},
				setMaxBounds: function (t) {
					return (t = N(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
				},
				setMinZoom: function (t) {
					var e = this.options.minZoom;
					return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
				},
				setMaxZoom: function (t) {
					var e = this.options.maxZoom;
					return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
				},
				panInsideBounds: function (t, e) {
					this._enforcingBounds = !0;
					var n = this.getCenter(),
						i = this._limitCenter(n, this._zoom, N(t));
					return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this
				},
				invalidateSize: function (t) {
					if (!this._loaded) return this;
					t = n({
						animate: !1,
						pan: !0
					}, !0 === t ? {
						animate: !0
					} : t);
					var e = this.getSize();
					this._sizeChanged = !0, this._lastCenter = null;
					var i = this.getSize(),
						r = e.divideBy(2).round(),
						a = i.divideBy(2).round(),
						s = r.subtract(a);
					return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
						oldSize: e,
						newSize: i
					})) : this
				},
				stop: function () {
					return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
				},
				locate: function (t) {
					if (t = this._locateOptions = n({
							timeout: 1e4,
							watch: !1
						}, t), !("geolocation" in navigator)) return this._handleGeolocationError({
						code: 0,
						message: "Geolocation not supported."
					}), this;
					var e = o(this._handleGeolocationResponse, this),
						i = o(this._handleGeolocationError, this);
					return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
				},
				stopLocate: function () {
					return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
				},
				_handleGeolocationError: function (t) {
					var e = t.code,
						n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
					this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
						code: e,
						message: "Geolocation error: " + n + "."
					})
				},
				_handleGeolocationResponse: function (t) {
					var e = t.coords.latitude,
						n = t.coords.longitude,
						i = new j(e, n),
						o = i.toBounds(t.coords.accuracy),
						r = this._locateOptions;
					if (r.setView) {
						var a = this.getBoundsZoom(o);
						this.setView(i, r.maxZoom ? Math.min(a, r.maxZoom) : a)
					}
					var s = {
						latlng: i,
						bounds: o,
						timestamp: t.timestamp
					};
					for (var l in t.coords) "number" == typeof t.coords[l] && (s[l] = t.coords[l]);
					this.fire("locationfound", s)
				},
				addHandler: function (t, e) {
					if (!e) return this;
					var n = this[t] = new e(this);
					return this._handlers.push(n), this.options[t] && n.enable(), this
				},
				remove: function () {
					if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
					try {
						delete this._container._leaflet_id, delete this._containerId
					} catch (t) {
						this._container._leaflet_id = void 0, this._containerId = void 0
					}
					var t;
					for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), Pe(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
					for (t in this._panes) Pe(this._panes[t]);
					return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
				},
				createPane: function (t, e) {
					var n = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
						i = ke("div", n, e || this._mapPane);
					return t && (this._panes[t] = i), i
				},
				getCenter: function () {
					return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
				},
				getZoom: function () {
					return this._zoom
				},
				getBounds: function () {
					var t = this.getPixelBounds(),
						e = this.unproject(t.getBottomLeft()),
						n = this.unproject(t.getTopRight());
					return new B(e, n)
				},
				getMinZoom: function () {
					return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
				},
				getMaxZoom: function () {
					return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
				},
				getBoundsZoom: function (t, e, n) {
					t = N(t), n = I(n || [0, 0]);
					var i = this.getZoom() || 0,
						o = this.getMinZoom(),
						r = this.getMaxZoom(),
						a = t.getNorthWest(),
						s = t.getSouthEast(),
						l = this.getSize().subtract(n),
						c = Z(this.project(s, i), this.project(a, i)).getSize(),
						h = _t ? this.options.zoomSnap : 1,
						u = l.x / c.x,
						d = l.y / c.y,
						p = e ? Math.max(u, d) : Math.min(u, d);
					return i = this.getScaleZoom(p, i), h && (i = Math.round(i / (h / 100)) * (h / 100), i = e ? Math.ceil(i / h) * h : Math.floor(i / h) * h), Math.max(o, Math.min(r, i))
				},
				getSize: function () {
					return this._size && !this._sizeChanged || (this._size = new A(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
				},
				getPixelBounds: function (t, e) {
					var n = this._getTopLeftPoint(t, e);
					return new D(n, n.add(this.getSize()))
				},
				getPixelOrigin: function () {
					return this._checkIfLoaded(), this._pixelOrigin
				},
				getPixelWorldBounds: function (t) {
					return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
				},
				getPane: function (t) {
					return "string" == typeof t ? this._panes[t] : t
				},
				getPanes: function () {
					return this._panes
				},
				getContainer: function () {
					return this._container
				},
				getZoomScale: function (t, e) {
					var n = this.options.crs;
					return e = void 0 === e ? this._zoom : e, n.scale(t) / n.scale(e)
				},
				getScaleZoom: function (t, e) {
					var n = this.options.crs;
					e = void 0 === e ? this._zoom : e;
					var i = n.zoom(t * n.scale(e));
					return isNaN(i) ? 1 / 0 : i
				},
				project: function (t, e) {
					return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(R(t), e)
				},
				unproject: function (t, e) {
					return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(I(t), e)
				},
				layerPointToLatLng: function (t) {
					var e = I(t).add(this.getPixelOrigin());
					return this.unproject(e)
				},
				latLngToLayerPoint: function (t) {
					var e = this.project(R(t))._round();
					return e._subtract(this.getPixelOrigin())
				},
				wrapLatLng: function (t) {
					return this.options.crs.wrapLatLng(R(t))
				},
				wrapLatLngBounds: function (t) {
					return this.options.crs.wrapLatLngBounds(N(t))
				},
				distance: function (t, e) {
					return this.options.crs.distance(R(t), R(e))
				},
				containerPointToLayerPoint: function (t) {
					return I(t).subtract(this._getMapPanePos())
				},
				layerPointToContainerPoint: function (t) {
					return I(t).add(this._getMapPanePos())
				},
				containerPointToLatLng: function (t) {
					var e = this.containerPointToLayerPoint(I(t));
					return this.layerPointToLatLng(e)
				},
				latLngToContainerPoint: function (t) {
					return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(t)))
				},
				mouseEventToContainerPoint: function (t) {
					return re(t, this._container)
				},
				mouseEventToLayerPoint: function (t) {
					return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
				},
				mouseEventToLatLng: function (t) {
					return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
				},
				_initContainer: function (t) {
					var e = this._container = we(t);
					if (!e) throw new Error("Map container not found.");
					if (e._leaflet_id) throw new Error("Map container is already initialized.");
					Yt(e, "scroll", this._onScroll, this), this._containerId = a(e)
				},
				_initLayout: function () {
					var t = this._container;
					this._fadeAnimated = this.options.fadeAnimation && _t, Ee(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (Pt ? " leaflet-retina" : "") + ($ ? " leaflet-oldie" : "") + (ct ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
					var e = Le(t, "position");
					"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
				},
				_initPanes: function () {
					var t = this._panes = {};
					this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Be(this._mapPane, new A(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ee(t.markerPane, "leaflet-zoom-hide"), Ee(t.shadowPane, "leaflet-zoom-hide"))
				},
				_resetView: function (t, e) {
					Be(this._mapPane, new A(0, 0));
					var n = !this._loaded;
					this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
					var i = this._zoom !== e;
					this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load")
				},
				_moveStart: function (t, e) {
					return t && this.fire("zoomstart"), e || this.fire("movestart"), this
				},
				_move: function (t, e, n) {
					void 0 === e && (e = this._zoom);
					var i = this._zoom !== e;
					return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)
				},
				_moveEnd: function (t) {
					return t && this.fire("zoomend"), this.fire("moveend")
				},
				_stop: function () {
					return T(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
				},
				_rawPanBy: function (t) {
					Be(this._mapPane, this._getMapPanePos().subtract(t))
				},
				_getZoomSpan: function () {
					return this.getMaxZoom() - this.getMinZoom()
				},
				_panInsideMaxBounds: function () {
					this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
				},
				_checkIfLoaded: function () {
					if (!this._loaded) throw new Error("Set map center and zoom first.")
				},
				_initEvents: function (t) {
					this._targets = {}, this._targets[a(this._container)] = this;
					var e = t ? Xt : Yt;
					e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), _t && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
				},
				_onResize: function () {
					T(this._resizeRequest), this._resizeRequest = z(function () {
						this.invalidateSize({
							debounceMoveend: !0
						})
					}, this)
				},
				_onScroll: function () {
					this._container.scrollTop = 0, this._container.scrollLeft = 0
				},
				_onMoveEnd: function () {
					var t = this._getMapPanePos();
					Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
				},
				_findEventTargets: function (t, e) {
					for (var n, i = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, s = !1; r;) {
						if ((n = this._targets[a(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
							s = !0;
							break
						}
						if (n && n.listens(e, !0)) {
							if (o && !de(r, t)) break;
							if (i.push(n), o) break
						}
						if (r === this._container) break;
						r = r.parentNode
					}
					return i.length || s || o || !de(r, t) || (i = [this]), i
				},
				_handleDOMEvent: function (t) {
					if (this._loaded && !ue(t)) {
						var e = t.type;
						"mousedown" !== e && "keypress" !== e || We(t.target || t.srcElement), this._fireDOMEvent(t, e)
					}
				},
				_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
				_fireDOMEvent: function (t, e, i) {
					if ("click" === t.type) {
						var o = n({}, t);
						o.type = "preclick", this._fireDOMEvent(o, o.type, i)
					}
					if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
						var r = i[0];
						"contextmenu" === e && r.listens(e, !0) && ie(t);
						var a = {
							originalEvent: t
						};
						if ("keypress" !== t.type) {
							var s = r.getLatLng && (!r._radius || r._radius <= 10);
							a.containerPoint = s ? this.latLngToContainerPoint(r.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = s ? r.getLatLng() : this.layerPointToLatLng(a.layerPoint)
						}
						for (var l = 0; l < i.length; l++)
							if (i[l].fire(e, a, !0), a.originalEvent._stopped || !1 === i[l].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)) return
					}
				},
				_draggableMoved: function (t) {
					return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
				},
				_clearHandlers: function () {
					for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
				},
				whenReady: function (t, e) {
					return this._loaded ? t.call(e || this, {
						target: this
					}) : this.on("load", t, e), this
				},
				_getMapPanePos: function () {
					return Ne(this._mapPane) || new A(0, 0)
				},
				_moved: function () {
					var t = this._getMapPanePos();
					return t && !t.equals([0, 0])
				},
				_getTopLeftPoint: function (t, e) {
					var n = t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
					return n.subtract(this._getMapPanePos())
				},
				_getNewPixelOrigin: function (t, e) {
					var n = this.getSize()._divideBy(2);
					return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
				},
				_latLngToNewLayerPoint: function (t, e, n) {
					var i = this._getNewPixelOrigin(n, e);
					return this.project(t, e)._subtract(i)
				},
				_latLngBoundsToNewLayerBounds: function (t, e, n) {
					var i = this._getNewPixelOrigin(n, e);
					return Z([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
				},
				_getCenterLayerPoint: function () {
					return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
				},
				_getCenterOffset: function (t) {
					return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
				},
				_limitCenter: function (t, e, n) {
					if (!n) return t;
					var i = this.project(t, e),
						o = this.getSize().divideBy(2),
						r = new D(i.subtract(o), i.add(o)),
						a = this._getBoundsOffset(r, n, e);
					return a.round().equals([0, 0]) ? t : this.unproject(i.add(a), e)
				},
				_limitOffset: function (t, e) {
					if (!e) return t;
					var n = this.getPixelBounds(),
						i = new D(n.min.add(t), n.max.add(t));
					return t.add(this._getBoundsOffset(i, e))
				},
				_getBoundsOffset: function (t, e, n) {
					var i = Z(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
						o = i.min.subtract(t.min),
						r = i.max.subtract(t.max),
						a = this._rebound(o.x, -r.x),
						s = this._rebound(o.y, -r.y);
					return new A(a, s)
				},
				_rebound: function (t, e) {
					return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
				},
				_limitZoom: function (t) {
					var e = this.getMinZoom(),
						n = this.getMaxZoom(),
						i = _t ? this.options.zoomSnap : 1;
					return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
				},
				_onPanTransitionStep: function () {
					this.fire("move")
				},
				_onPanTransitionEnd: function () {
					Se(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
				},
				_tryAnimatedPan: function (t, e) {
					var n = this._getCenterOffset(t)._trunc();
					return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e), 0))
				},
				_createAnimProxy: function () {
					var t = this._proxy = ke("div", "leaflet-proxy leaflet-zoom-animated");
					this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
						var e = ye,
							n = this._proxy.style[e];
						Ze(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
					}, this), this.on("load moveend", function () {
						var t = this.getCenter(),
							e = this.getZoom();
						Ze(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
					}, this), this._on("unload", this._destroyAnimProxy, this)
				},
				_destroyAnimProxy: function () {
					Pe(this._proxy), delete this._proxy
				},
				_catchTransitionEnd: function (t) {
					this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
				},
				_nothingToAnimate: function () {
					return !this._container.getElementsByClassName("leaflet-zoom-animated").length
				},
				_tryAnimatedZoom: function (t, e, n) {
					if (this._animatingZoom) return !0;
					if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
					var i = this.getZoomScale(e),
						o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
					return !(!0 !== n.animate && !this.getSize().contains(o) || (z(function () {
						this._moveStart(!0, !1)._animateZoom(t, e, !0)
					}, this), 0))
				},
				_animateZoom: function (t, e, n, i) {
					this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, Ee(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
						center: t,
						zoom: e,
						noUpdate: i
					}), setTimeout(o(this._onZoomTransitionEnd, this), 250))
				},
				_onZoomTransitionEnd: function () {
					this._animatingZoom && (this._mapPane && Se(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), z(function () {
						this._moveEnd(!0)
					}, this))
				}
			}),
			Ge = C.extend({
				options: {
					position: "topright"
				},
				initialize: function (t) {
					p(this, t)
				},
				getPosition: function () {
					return this.options.position
				},
				setPosition: function (t) {
					var e = this._map;
					return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
				},
				getContainer: function () {
					return this._container
				},
				addTo: function (t) {
					this.remove(), this._map = t;
					var e = this._container = this.onAdd(t),
						n = this.getPosition(),
						i = t._controlCorners[n];
					return Ee(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this
				},
				remove: function () {
					return this._map ? (Pe(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
				},
				_refocusOnMap: function (t) {
					this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
				}
			}),
			Ke = function (t) {
				return new Ge(t)
			};
		qe.include({
			addControl: function (t) {
				return t.addTo(this), this
			},
			removeControl: function (t) {
				return t.remove(), this
			},
			_initControlPos: function () {
				var t = this._controlCorners = {},
					e = "leaflet-",
					n = this._controlContainer = ke("div", e + "control-container", this._container);

				function i(i, o) {
					var r = e + i + " " + e + o;
					t[i + o] = ke("div", r, n)
				}
				i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right")
			},
			_clearControlPos: function () {
				for (var t in this._controlCorners) Pe(this._controlCorners[t]);
				Pe(this._controlContainer), delete this._controlCorners, delete this._controlContainer
			}
		});
		var Ye = Ge.extend({
				options: {
					collapsed: !0,
					position: "topright",
					autoZIndex: !0,
					hideSingleBase: !1,
					sortLayers: !1,
					sortFunction: function (t, e, n, i) {
						return n < i ? -1 : i < n ? 1 : 0
					}
				},
				initialize: function (t, e, n) {
					for (var i in p(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[i], i);
					for (i in e) this._addLayer(e[i], i, !0)
				},
				onAdd: function (t) {
					this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
					for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
					return this._container
				},
				addTo: function (t) {
					return Ge.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
				},
				onRemove: function () {
					this._map.off("zoomend", this._checkDisabledLayers, this);
					for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
				},
				addBaseLayer: function (t, e) {
					return this._addLayer(t, e), this._map ? this._update() : this
				},
				addOverlay: function (t, e) {
					return this._addLayer(t, e, !0), this._map ? this._update() : this
				},
				removeLayer: function (t) {
					t.off("add remove", this._onLayerChange, this);
					var e = this._getLayer(a(t));
					return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
				},
				expand: function () {
					Ee(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
					var t = this._map.getSize().y - (this._container.offsetTop + 50);
					return t < this._form.clientHeight ? (Ee(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : Se(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
				},
				collapse: function () {
					return Se(this._container, "leaflet-control-layers-expanded"), this
				},
				_initLayout: function () {
					var t = "leaflet-control-layers",
						e = this._container = ke("div", t),
						n = this.options.collapsed;
					e.setAttribute("aria-haspopup", !0), ne(e), ee(e);
					var i = this._form = ke("form", t + "-list");
					n && (this._map.on("click", this.collapse, this), nt || Yt(e, {
						mouseenter: this.expand,
						mouseleave: this.collapse
					}, this));
					var o = this._layersLink = ke("a", t + "-toggle", e);
					o.href = "#", o.title = "Layers", wt ? (Yt(o, "click", oe), Yt(o, "click", this.expand, this)) : Yt(o, "focus", this.expand, this), n || this.expand(), this._baseLayersList = ke("div", t + "-base", i), this._separator = ke("div", t + "-separator", i), this._overlaysList = ke("div", t + "-overlays", i), e.appendChild(i)
				},
				_getLayer: function (t) {
					for (var e = 0; e < this._layers.length; e++)
						if (this._layers[e] && a(this._layers[e].layer) === t) return this._layers[e]
				},
				_addLayer: function (t, e, n) {
					this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
						layer: t,
						name: e,
						overlay: n
					}), this.options.sortLayers && this._layers.sort(o(function (t, e) {
						return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
					}, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
				},
				_update: function () {
					if (!this._container) return this;
					ze(this._baseLayersList), ze(this._overlaysList), this._layerControlInputs = [];
					var t, e, n, i, o = 0;
					for (n = 0; n < this._layers.length; n++) i = this._layers[n], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, o += i.overlay ? 0 : 1;
					return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
				},
				_onLayerChange: function (t) {
					this._handlingClick || this._update();
					var e = this._getLayer(a(t.target)),
						n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
					n && this._map.fire(n, e)
				},
				_createRadioElement: function (t, e) {
					var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
						i = document.createElement("div");
					return i.innerHTML = n, i.firstChild
				},
				_addItem: function (t) {
					var e, n = document.createElement("label"),
						i = this._map.hasLayer(t.layer);
					t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers", i), this._layerControlInputs.push(e), e.layerId = a(t.layer), Yt(e, "click", this._onInputClick, this);
					var o = document.createElement("span");
					o.innerHTML = " " + t.name;
					var r = document.createElement("div");
					n.appendChild(r), r.appendChild(e), r.appendChild(o);
					var s = t.overlay ? this._overlaysList : this._baseLayersList;
					return s.appendChild(n), this._checkDisabledLayers(), n
				},
				_onInputClick: function () {
					var t, e, n = this._layerControlInputs,
						i = [],
						o = [];
					this._handlingClick = !0;
					for (var r = n.length - 1; r >= 0; r--) t = n[r], e = this._getLayer(t.layerId).layer, t.checked ? i.push(e) : t.checked || o.push(e);
					for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
					for (r = 0; r < i.length; r++) this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
					this._handlingClick = !1, this._refocusOnMap()
				},
				_checkDisabledLayers: function () {
					for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1; o >= 0; o--) t = n[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom
				},
				_expandIfNotCollapsed: function () {
					return this._map && !this.options.collapsed && this.expand(), this
				},
				_expand: function () {
					return this.expand()
				},
				_collapse: function () {
					return this.collapse()
				}
			}),
			Je = Ge.extend({
				options: {
					position: "topleft",
					zoomInText: "+",
					zoomInTitle: "Zoom in",
					zoomOutText: "&#x2212;",
					zoomOutTitle: "Zoom out"
				},
				onAdd: function (t) {
					var e = "leaflet-control-zoom",
						n = ke("div", e + " leaflet-bar"),
						i = this.options;
					return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
				},
				onRemove: function (t) {
					t.off("zoomend zoomlevelschange", this._updateDisabled, this)
				},
				disable: function () {
					return this._disabled = !0, this._updateDisabled(), this
				},
				enable: function () {
					return this._disabled = !1, this._updateDisabled(), this
				},
				_zoomIn: function (t) {
					!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
				},
				_zoomOut: function (t) {
					!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
				},
				_createButton: function (t, e, n, i, o) {
					var r = ke("a", n, i);
					return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), ne(r), Yt(r, "click", oe), Yt(r, "click", o, this), Yt(r, "click", this._refocusOnMap, this), r
				},
				_updateDisabled: function () {
					var t = this._map,
						e = "leaflet-disabled";
					Se(this._zoomInButton, e), Se(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && Ee(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && Ee(this._zoomInButton, e)
				}
			});
		qe.mergeOptions({
			zoomControl: !0
		}), qe.addInitHook(function () {
			this.options.zoomControl && (this.zoomControl = new Je, this.addControl(this.zoomControl))
		});
		var Xe = Ge.extend({
				options: {
					position: "bottomleft",
					maxWidth: 100,
					metric: !0,
					imperial: !0
				},
				onAdd: function (t) {
					var e = ke("div", "leaflet-control-scale"),
						n = this.options;
					return this._addScales(n, "leaflet-control-scale-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
				},
				onRemove: function (t) {
					t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
				},
				_addScales: function (t, e, n) {
					t.metric && (this._mScale = ke("div", e, n)), t.imperial && (this._iScale = ke("div", e, n))
				},
				_update: function () {
					var t = this._map,
						e = t.getSize().y / 2,
						n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
					this._updateScales(n)
				},
				_updateScales: function (t) {
					this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
				},
				_updateMetric: function (t) {
					var e = this._getRoundNum(t),
						n = e < 1e3 ? e + " m" : e / 1e3 + " km";
					this._updateScale(this._mScale, n, e / t)
				},
				_updateImperial: function (t) {
					var e, n, i, o = 3.2808399 * t;
					o > 5280 ? (e = o / 5280, n = this._getRoundNum(e), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(o), this._updateScale(this._iScale, i + " ft", i / o))
				},
				_updateScale: function (t, e, n) {
					t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e
				},
				_getRoundNum: function (t) {
					var e = Math.pow(10, (Math.floor(t) + "").length - 1),
						n = t / e;
					return e * (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1)
				}
			}),
			Qe = Ge.extend({
				options: {
					position: "bottomright",
					prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
				},
				initialize: function (t) {
					p(this, t), this._attributions = {}
				},
				onAdd: function (t) {
					for (var e in t.attributionControl = this, this._container = ke("div", "leaflet-control-attribution"), ne(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
					return this._update(), this._container
				},
				setPrefix: function (t) {
					return this.options.prefix = t, this._update(), this
				},
				addAttribution: function (t) {
					return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
				},
				removeAttribution: function (t) {
					return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
				},
				_update: function () {
					if (this._map) {
						var t = [];
						for (var e in this._attributions) this._attributions[e] && t.push(e);
						var n = [];
						this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
					}
				}
			});
		qe.mergeOptions({
			attributionControl: !0
		}), qe.addInitHook(function () {
			this.options.attributionControl && (new Qe).addTo(this)
		}), Ge.Layers = Ye, Ge.Zoom = Je, Ge.Scale = Xe, Ge.Attribution = Qe, Ke.layers = function (t, e, n) {
			return new Ye(t, e, n)
		}, Ke.zoom = function (t) {
			return new Je(t)
		}, Ke.scale = function (t) {
			return new Xe(t)
		}, Ke.attribution = function (t) {
			return new Qe(t)
		};
		var $e = C.extend({
			initialize: function (t) {
				this._map = t
			},
			enable: function () {
				return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
			},
			disable: function () {
				return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
			},
			enabled: function () {
				return !!this._enabled
			}
		});
		$e.addTo = function (t, e) {
			return t.addHandler(e, this), this
		};
		var tn, en = {
				Events: E
			},
			nn = wt ? "touchstart mousedown" : "mousedown",
			on = {
				mousedown: "mouseup",
				touchstart: "touchend",
				pointerdown: "touchend",
				MSPointerDown: "touchend"
			},
			rn = {
				mousedown: "mousemove",
				touchstart: "touchmove",
				pointerdown: "touchmove",
				MSPointerDown: "touchmove"
			},
			an = S.extend({
				options: {
					clickTolerance: 3
				},
				initialize: function (t, e, n, i) {
					p(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n
				},
				enable: function () {
					this._enabled || (Yt(this._dragStartTarget, nn, this._onDown, this), this._enabled = !0)
				},
				disable: function () {
					this._enabled && (an._dragging === this && this.finishDrag(), Xt(this._dragStartTarget, nn, this._onDown, this), this._enabled = !1, this._moved = !1)
				},
				_onDown: function (t) {
					if (!t._simulated && this._enabled && (this._moved = !1, !Ce(this._element, "leaflet-zoom-anim") && !(an._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (an._dragging = this, this._preventOutline && We(this._element), Re(), pe(), this._moving)))) {
						this.fire("down");
						var e = t.touches ? t.touches[0] : t;
						this._startPoint = new A(e.clientX, e.clientY), Yt(document, rn[t.type], this._onMove, this), Yt(document, on[t.type], this._onUp, this)
					}
				},
				_onMove: function (t) {
					if (!t._simulated && this._enabled)
						if (t.touches && t.touches.length > 1) this._moved = !0;
						else {
							var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
								n = new A(e.clientX, e.clientY),
								i = n.subtract(this._startPoint);
							(i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (ie(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Ne(this._element).subtract(i), Ee(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ee(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, T(this._animRequest), this._lastEvent = t, this._animRequest = z(this._updatePosition, this, !0)))
						}
				},
				_updatePosition: function () {
					var t = {
						originalEvent: this._lastEvent
					};
					this.fire("predrag", t), Be(this._element, this._newPos), this.fire("drag", t)
				},
				_onUp: function (t) {
					!t._simulated && this._enabled && this.finishDrag()
				},
				finishDrag: function () {
					for (var t in Se(document.body, "leaflet-dragging"), this._lastTarget && (Se(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), rn) Xt(document, rn[t], this._onMove, this), Xt(document, on[t], this._onUp, this);
					Ue(), fe(), this._moved && this._moving && (T(this._animRequest), this.fire("dragend", {
						distance: this._newPos.distanceTo(this._startPos)
					})), this._moving = !1, an._dragging = !1
				}
			});

		function sn(t, e) {
			if (!e || !t.length) return t.slice();
			var n = e * e;
			return t = function (t, e) {
				var n = t.length,
					i = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
				i[0] = i[n - 1] = 1,
					function t(e, n, i, o, r) {
						var a, s, l, c = 0;
						for (s = o + 1; s <= r - 1; s++)(l = dn(e[s], e[o], e[r], !0)) > c && (a = s, c = l);
						c > i && (n[a] = 1, t(e, n, i, o, a), t(e, n, i, a, r))
					}(t, i, e, 0, n - 1);
				var o, r = [];
				for (o = 0; o < n; o++) i[o] && r.push(t[o]);
				return r
			}(t = function (t, e) {
				for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++) a = t[i], s = t[o], l = s.x - a.x, c = s.y - a.y, l * l + c * c > e && (n.push(t[i]), o = i);
				var a, s, l, c;
				return o < r - 1 && n.push(t[r - 1]), n
			}(t, n), n)
		}

		function ln(t, e, n) {
			return Math.sqrt(dn(t, e, n, !0))
		}

		function cn(t, e, n, i, o) {
			var r, a, s, l = i ? tn : un(t, n),
				c = un(e, n);
			for (tn = c;;) {
				if (!(l | c)) return [t, e];
				if (l & c) return !1;
				a = hn(t, e, r = l || c, n, o), s = un(a, n), r === l ? (t = a, l = s) : (e = a, c = s)
			}
		}

		function hn(t, e, n, i, o) {
			var r, a, s = e.x - t.x,
				l = e.y - t.y,
				c = i.min,
				h = i.max;
			return 8 & n ? (r = t.x + s * (h.y - t.y) / l, a = h.y) : 4 & n ? (r = t.x + s * (c.y - t.y) / l, a = c.y) : 2 & n ? (r = h.x, a = t.y + l * (h.x - t.x) / s) : 1 & n && (r = c.x, a = t.y + l * (c.x - t.x) / s), new A(r, a, o)
		}

		function un(t, e) {
			var n = 0;
			return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
		}

		function dn(t, e, n, i) {
			var o, r = e.x,
				a = e.y,
				s = n.x - r,
				l = n.y - a,
				c = s * s + l * l;
			return c > 0 && ((o = ((t.x - r) * s + (t.y - a) * l) / c) > 1 ? (r = n.x, a = n.y) : o > 0 && (r += s * o, a += l * o)), s = t.x - r, l = t.y - a, i ? s * s + l * l : new A(r, a)
		}

		function pn(t) {
			return !g(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
		}

		function fn(t) {
			return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), pn(t)
		}
		var mn = (Object.freeze || Object)({
			simplify: sn,
			pointToSegmentDistance: ln,
			closestPointOnSegment: function (t, e, n) {
				return dn(t, e, n)
			},
			clipSegment: cn,
			_getEdgeIntersection: hn,
			_getBitCode: un,
			_sqClosestPointOnSegment: dn,
			isFlat: pn,
			_flat: fn
		});

		function _n(t, e, n) {
			var i, o, r, a, s, l, c, h, u, d = [1, 4, 2, 8];
			for (o = 0, c = t.length; o < c; o++) t[o]._code = un(t[o], e);
			for (a = 0; a < 4; a++) {
				for (h = d[a], i = [], o = 0, c = t.length, r = c - 1; o < c; r = o++) s = t[o], l = t[r], s._code & h ? l._code & h || ((u = hn(l, s, h, e, n))._code = un(u, e), i.push(u)) : (l._code & h && ((u = hn(l, s, h, e, n))._code = un(u, e), i.push(u)), i.push(s));
				t = i
			}
			return t
		}
		var gn = (Object.freeze || Object)({
				clipPolygon: _n
			}),
			vn = {
				project: function (t) {
					return new A(t.lng, t.lat)
				},
				unproject: function (t) {
					return new j(t.y, t.x)
				},
				bounds: new D([-180, -90], [180, 90])
			},
			yn = {
				R: 6378137,
				R_MINOR: 6356752.314245179,
				bounds: new D([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
				project: function (t) {
					var e = Math.PI / 180,
						n = this.R,
						i = t.lat * e,
						o = this.R_MINOR / n,
						r = Math.sqrt(1 - o * o),
						a = r * Math.sin(i),
						s = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - a) / (1 + a), r / 2);
					return i = -n * Math.log(Math.max(s, 1e-10)), new A(t.lng * e * n, i)
				},
				unproject: function (t) {
					for (var e, n = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, r = Math.sqrt(1 - o * o), a = Math.exp(-t.y / i), s = Math.PI / 2 - 2 * Math.atan(a), l = 0, c = .1; l < 15 && Math.abs(c) > 1e-7; l++) e = r * Math.sin(s), e = Math.pow((1 - e) / (1 + e), r / 2), c = Math.PI / 2 - 2 * Math.atan(a * e) - s, s += c;
					return new j(s * n, t.x * n / i)
				}
			},
			bn = (Object.freeze || Object)({
				LonLat: vn,
				Mercator: yn,
				SphericalMercator: F
			}),
			xn = n({}, H, {
				code: "EPSG:3395",
				projection: yn,
				transformation: function () {
					var t = .5 / (Math.PI * yn.R);
					return q(t, .5, -t, .5)
				}()
			}),
			wn = n({}, H, {
				code: "EPSG:4326",
				projection: vn,
				transformation: q(1 / 180, 1, -1 / 180, .5)
			}),
			Ln = n({}, W, {
				projection: vn,
				transformation: q(1, 0, -1, 0),
				scale: function (t) {
					return Math.pow(2, t)
				},
				zoom: function (t) {
					return Math.log(t) / Math.LN2
				},
				distance: function (t, e) {
					var n = e.lng - t.lng,
						i = e.lat - t.lat;
					return Math.sqrt(n * n + i * i)
				},
				infinite: !0
			});
		W.Earth = H, W.EPSG3395 = xn, W.EPSG3857 = G, W.EPSG900913 = K, W.EPSG4326 = wn, W.Simple = Ln;
		var kn = S.extend({
			options: {
				pane: "overlayPane",
				attribution: null,
				bubblingMouseEvents: !0
			},
			addTo: function (t) {
				return t.addLayer(this), this
			},
			remove: function () {
				return this.removeFrom(this._map || this._mapToAdd)
			},
			removeFrom: function (t) {
				return t && t.removeLayer(this), this
			},
			getPane: function (t) {
				return this._map.getPane(t ? this.options[t] || t : this.options.pane)
			},
			addInteractiveTarget: function (t) {
				return this._map._targets[a(t)] = this, this
			},
			removeInteractiveTarget: function (t) {
				return delete this._map._targets[a(t)], this
			},
			getAttribution: function () {
				return this.options.attribution
			},
			_layerAdd: function (t) {
				var e = t.target;
				if (e.hasLayer(this)) {
					if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
						var n = this.getEvents();
						e.on(n, this), this.once("remove", function () {
							e.off(n, this)
						}, this)
					}
					this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
						layer: this
					})
				}
			}
		});
		qe.include({
			addLayer: function (t) {
				if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
				var e = a(t);
				return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
			},
			removeLayer: function (t) {
				var e = a(t);
				return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
					layer: t
				}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
			},
			hasLayer: function (t) {
				return !!t && a(t) in this._layers
			},
			eachLayer: function (t, e) {
				for (var n in this._layers) t.call(e, this._layers[n]);
				return this
			},
			_addLayers: function (t) {
				for (var e = 0, n = (t = t ? g(t) ? t : [t] : []).length; e < n; e++) this.addLayer(t[e])
			},
			_addZoomLimit: function (t) {
				!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t, this._updateZoomLevels())
			},
			_removeZoomLimit: function (t) {
				var e = a(t);
				this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
			},
			_updateZoomLevels: function () {
				var t = 1 / 0,
					e = -1 / 0,
					n = this._getZoomSpan();
				for (var i in this._zoomBoundLayers) {
					var o = this._zoomBoundLayers[i].options;
					t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
				}
				this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
			}
		});
		var Pn = kn.extend({
				initialize: function (t, e) {
					var n, i;
					if (p(this, e), this._layers = {}, t)
						for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n])
				},
				addLayer: function (t) {
					var e = this.getLayerId(t);
					return this._layers[e] = t, this._map && this._map.addLayer(t), this
				},
				removeLayer: function (t) {
					var e = t in this._layers ? t : this.getLayerId(t);
					return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
				},
				hasLayer: function (t) {
					return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
				},
				clearLayers: function () {
					return this.eachLayer(this.removeLayer, this)
				},
				invoke: function (t) {
					var e, n, i = Array.prototype.slice.call(arguments, 1);
					for (e in this._layers)(n = this._layers[e])[t] && n[t].apply(n, i);
					return this
				},
				onAdd: function (t) {
					this.eachLayer(t.addLayer, t)
				},
				onRemove: function (t) {
					this.eachLayer(t.removeLayer, t)
				},
				eachLayer: function (t, e) {
					for (var n in this._layers) t.call(e, this._layers[n]);
					return this
				},
				getLayer: function (t) {
					return this._layers[t]
				},
				getLayers: function () {
					var t = [];
					return this.eachLayer(t.push, t), t
				},
				setZIndex: function (t) {
					return this.invoke("setZIndex", t)
				},
				getLayerId: function (t) {
					return a(t)
				}
			}),
			zn = Pn.extend({
				addLayer: function (t) {
					return this.hasLayer(t) ? this : (t.addEventParent(this), Pn.prototype.addLayer.call(this, t), this.fire("layeradd", {
						layer: t
					}))
				},
				removeLayer: function (t) {
					return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Pn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
						layer: t
					})) : this
				},
				setStyle: function (t) {
					return this.invoke("setStyle", t)
				},
				bringToFront: function () {
					return this.invoke("bringToFront")
				},
				bringToBack: function () {
					return this.invoke("bringToBack")
				},
				getBounds: function () {
					var t = new B;
					for (var e in this._layers) {
						var n = this._layers[e];
						t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
					}
					return t
				}
			}),
			Tn = C.extend({
				options: {
					popupAnchor: [0, 0],
					tooltipAnchor: [0, 0]
				},
				initialize: function (t) {
					p(this, t)
				},
				createIcon: function (t) {
					return this._createIcon("icon", t)
				},
				createShadow: function (t) {
					return this._createIcon("shadow", t)
				},
				_createIcon: function (t, e) {
					var n = this._getIconUrl(t);
					if (!n) {
						if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
						return null
					}
					var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
					return this._setIconStyles(i, t), i
				},
				_setIconStyles: function (t, e) {
					var n = this.options,
						i = n[e + "Size"];
					"number" == typeof i && (i = [i, i]);
					var o = I(i),
						r = I("shadow" === e && n.shadowAnchor || n.iconAnchor || o && o.divideBy(2, !0));
					t.className = "leaflet-marker-" + e + " " + (n.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
				},
				_createImg: function (t, e) {
					return (e = e || document.createElement("img")).src = t, e
				},
				_getIconUrl: function (t) {
					return Pt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
				}
			}),
			Mn = Tn.extend({
				options: {
					iconUrl: "marker-icon.png",
					iconRetinaUrl: "marker-icon-2x.png",
					shadowUrl: "marker-shadow.png",
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					tooltipAnchor: [16, -28],
					shadowSize: [41, 41]
				},
				_getIconUrl: function (t) {
					return Mn.imagePath || (Mn.imagePath = this._detectIconPath()), (this.options.imagePath || Mn.imagePath) + Tn.prototype._getIconUrl.call(this, t)
				},
				_detectIconPath: function () {
					var t = ke("div", "leaflet-default-icon-path", document.body),
						e = Le(t, "background-image") || Le(t, "backgroundImage");
					return document.body.removeChild(t), e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
				}
			}),
			Cn = $e.extend({
				initialize: function (t) {
					this._marker = t
				},
				addHooks: function () {
					var t = this._marker._icon;
					this._draggable || (this._draggable = new an(t, t, !0)), this._draggable.on({
						dragstart: this._onDragStart,
						predrag: this._onPreDrag,
						drag: this._onDrag,
						dragend: this._onDragEnd
					}, this).enable(), Ee(t, "leaflet-marker-draggable")
				},
				removeHooks: function () {
					this._draggable.off({
						dragstart: this._onDragStart,
						predrag: this._onPreDrag,
						drag: this._onDrag,
						dragend: this._onDragEnd
					}, this).disable(), this._marker._icon && Se(this._marker._icon, "leaflet-marker-draggable")
				},
				moved: function () {
					return this._draggable && this._draggable._moved
				},
				_adjustPan: function (t) {
					var e = this._marker,
						n = e._map,
						i = this._marker.options.autoPanSpeed,
						o = this._marker.options.autoPanPadding,
						r = L.DomUtil.getPosition(e._icon),
						a = n.getPixelBounds(),
						s = n.getPixelOrigin(),
						l = Z(a.min._subtract(s).add(o), a.max._subtract(s).subtract(o));
					if (!l.contains(r)) {
						var c = I((Math.max(l.max.x, r.x) - l.max.x) / (a.max.x - l.max.x) - (Math.min(l.min.x, r.x) - l.min.x) / (a.min.x - l.min.x), (Math.max(l.max.y, r.y) - l.max.y) / (a.max.y - l.max.y) - (Math.min(l.min.y, r.y) - l.min.y) / (a.min.y - l.min.y)).multiplyBy(i);
						n.panBy(c, {
							animate: !1
						}), this._draggable._newPos._add(c), this._draggable._startPos._add(c), L.DomUtil.setPosition(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = z(this._adjustPan.bind(this, t))
					}
				},
				_onDragStart: function () {
					this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
				},
				_onPreDrag: function (t) {
					this._marker.options.autoPan && (T(this._panRequest), this._panRequest = z(this._adjustPan.bind(this, t)))
				},
				_onDrag: function (t) {
					var e = this._marker,
						n = e._shadow,
						i = Ne(e._icon),
						o = e._map.layerPointToLatLng(i);
					n && Be(n, i), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
				},
				_onDragEnd: function (t) {
					T(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
				}
			}),
			En = kn.extend({
				options: {
					icon: new Mn,
					interactive: !0,
					draggable: !1,
					autoPan: !1,
					autoPanPadding: [50, 50],
					autoPanSpeed: 10,
					keyboard: !0,
					title: "",
					alt: "",
					zIndexOffset: 0,
					opacity: 1,
					riseOnHover: !1,
					riseOffset: 250,
					pane: "markerPane",
					bubblingMouseEvents: !1
				},
				initialize: function (t, e) {
					p(this, e), this._latlng = R(t)
				},
				onAdd: function (t) {
					this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
				},
				onRemove: function (t) {
					this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
				},
				getEvents: function () {
					return {
						zoom: this.update,
						viewreset: this.update
					}
				},
				getLatLng: function () {
					return this._latlng
				},
				setLatLng: function (t) {
					var e = this._latlng;
					return this._latlng = R(t), this.update(), this.fire("move", {
						oldLatLng: e,
						latlng: this._latlng
					})
				},
				setZIndexOffset: function (t) {
					return this.options.zIndexOffset = t, this.update()
				},
				setIcon: function (t) {
					return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
				},
				getElement: function () {
					return this._icon
				},
				update: function () {
					if (this._icon && this._map) {
						var t = this._map.latLngToLayerPoint(this._latlng).round();
						this._setPos(t)
					}
					return this
				},
				_initIcon: function () {
					var t = this.options,
						e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
						n = t.icon.createIcon(this._icon),
						i = !1;
					n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), Ee(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
						mouseover: this._bringToFront,
						mouseout: this._resetZIndex
					});
					var o = t.icon.createShadow(this._shadow),
						r = !1;
					o !== this._shadow && (this._removeShadow(), r = !0), o && (Ee(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane("shadowPane").appendChild(this._shadow)
				},
				_removeIcon: function () {
					this.options.riseOnHover && this.off({
						mouseover: this._bringToFront,
						mouseout: this._resetZIndex
					}), Pe(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
				},
				_removeShadow: function () {
					this._shadow && Pe(this._shadow), this._shadow = null
				},
				_setPos: function (t) {
					Be(this._icon, t), this._shadow && Be(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
				},
				_updateZIndex: function (t) {
					this._icon.style.zIndex = this._zIndex + t
				},
				_animateZoom: function (t) {
					var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
					this._setPos(e)
				},
				_initInteraction: function () {
					if (this.options.interactive && (Ee(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Cn)) {
						var t = this.options.draggable;
						this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Cn(this), t && this.dragging.enable()
					}
				},
				setOpacity: function (t) {
					return this.options.opacity = t, this._map && this._updateOpacity(), this
				},
				_updateOpacity: function () {
					var t = this.options.opacity;
					Ie(this._icon, t), this._shadow && Ie(this._shadow, t)
				},
				_bringToFront: function () {
					this._updateZIndex(this.options.riseOffset)
				},
				_resetZIndex: function () {
					this._updateZIndex(0)
				},
				_getPopupAnchor: function () {
					return this.options.icon.options.popupAnchor
				},
				_getTooltipAnchor: function () {
					return this.options.icon.options.tooltipAnchor
				}
			}),
			Sn = kn.extend({
				options: {
					stroke: !0,
					color: "#3388ff",
					weight: 3,
					opacity: 1,
					lineCap: "round",
					lineJoin: "round",
					dashArray: null,
					dashOffset: null,
					fill: !1,
					fillColor: null,
					fillOpacity: .2,
					fillRule: "evenodd",
					interactive: !0,
					bubblingMouseEvents: !0
				},
				beforeAdd: function (t) {
					this._renderer = t.getRenderer(this)
				},
				onAdd: function () {
					this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
				},
				onRemove: function () {
					this._renderer._removePath(this)
				},
				redraw: function () {
					return this._map && this._renderer._updatePath(this), this
				},
				setStyle: function (t) {
					return p(this, t), this._renderer && this._renderer._updateStyle(this), this
				},
				bringToFront: function () {
					return this._renderer && this._renderer._bringToFront(this), this
				},
				bringToBack: function () {
					return this._renderer && this._renderer._bringToBack(this), this
				},
				getElement: function () {
					return this._path
				},
				_reset: function () {
					this._project(), this._update()
				},
				_clickTolerance: function () {
					return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
				}
			}),
			An = Sn.extend({
				options: {
					fill: !0,
					radius: 10
				},
				initialize: function (t, e) {
					p(this, e), this._latlng = R(t), this._radius = this.options.radius
				},
				setLatLng: function (t) {
					return this._latlng = R(t), this.redraw(), this.fire("move", {
						latlng: this._latlng
					})
				},
				getLatLng: function () {
					return this._latlng
				},
				setRadius: function (t) {
					return this.options.radius = this._radius = t, this.redraw()
				},
				getRadius: function () {
					return this._radius
				},
				setStyle: function (t) {
					var e = t && t.radius || this._radius;
					return Sn.prototype.setStyle.call(this, t), this.setRadius(e), this
				},
				_project: function () {
					this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
				},
				_updateBounds: function () {
					var t = this._radius,
						e = this._radiusY || t,
						n = this._clickTolerance(),
						i = [t + n, e + n];
					this._pxBounds = new D(this._point.subtract(i), this._point.add(i))
				},
				_update: function () {
					this._map && this._updatePath()
				},
				_updatePath: function () {
					this._renderer._updateCircle(this)
				},
				_empty: function () {
					return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
				},
				_containsPoint: function (t) {
					return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
				}
			}),
			On = An.extend({
				initialize: function (t, e, i) {
					if ("number" == typeof e && (e = n({}, i, {
							radius: e
						})), p(this, e), this._latlng = R(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
					this._mRadius = this.options.radius
				},
				setRadius: function (t) {
					return this._mRadius = t, this.redraw()
				},
				getRadius: function () {
					return this._mRadius
				},
				getBounds: function () {
					var t = [this._radius, this._radiusY || this._radius];
					return new B(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
				},
				setStyle: Sn.prototype.setStyle,
				_project: function () {
					var t = this._latlng.lng,
						e = this._latlng.lat,
						n = this._map,
						i = n.options.crs;
					if (i.distance === H.distance) {
						var o = Math.PI / 180,
							r = this._mRadius / H.R / o,
							a = n.project([e + r, t]),
							s = n.project([e - r, t]),
							l = a.add(s).divideBy(2),
							c = n.unproject(l).lat,
							h = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(c * o)) / (Math.cos(e * o) * Math.cos(c * o))) / o;
						(isNaN(h) || 0 === h) && (h = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(n.getPixelOrigin()), this._radius = isNaN(h) ? 0 : l.x - n.project([c, t - h]).x, this._radiusY = l.y - a.y
					} else {
						var u = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
						this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(u).x
					}
					this._updateBounds()
				}
			}),
			In = Sn.extend({
				options: {
					smoothFactor: 1,
					noClip: !1
				},
				initialize: function (t, e) {
					p(this, e), this._setLatLngs(t)
				},
				getLatLngs: function () {
					return this._latlngs
				},
				setLatLngs: function (t) {
					return this._setLatLngs(t), this.redraw()
				},
				isEmpty: function () {
					return !this._latlngs.length
				},
				closestLayerPoint: function (t) {
					for (var e, n, i = 1 / 0, o = null, r = dn, a = 0, s = this._parts.length; a < s; a++)
						for (
							var l = this._parts[a], c = 1, h = l.length; c < h; c++) {
							e = l[c - 1], n = l[c];
							var u = r(t, e, n, !0);
							u < i && (i = u, o = r(t, e, n))
						}
					return o && (o.distance = Math.sqrt(i)), o
				},
				getCenter: function () {
					if (!this._map) throw new Error("Must add layer to map before using getCenter()");
					var t, e, n, i, o, r, a, s = this._rings[0],
						l = s.length;
					if (!l) return null;
					for (t = 0, e = 0; t < l - 1; t++) e += s[t].distanceTo(s[t + 1]) / 2;
					if (0 === e) return this._map.layerPointToLatLng(s[0]);
					for (t = 0, i = 0; t < l - 1; t++)
						if (o = s[t], r = s[t + 1], n = o.distanceTo(r), (i += n) > e)
							return a = (i - e) / n, this._map.layerPointToLatLng([r.x - a * (r.x - o.x), r.y - a * (r.y - o.y)])
				},
				getBounds: function () {
					return this._bounds
				},
				addLatLng: function (t, e) {
					return e = e || this._defaultShape(), t = R(t), e.push(t), this._bounds.extend(t), this.redraw()
				},
				_setLatLngs: function (t) {
					this._bounds = new B, this._latlngs = this._convertLatLngs(t)
				},
				_defaultShape: function () {
					return pn(this._latlngs) ? this._latlngs : this._latlngs[0]
				},
				_convertLatLngs: function (t) {
					for (var e = [], n = pn(t), i = 0, o = t.length; i < o; i++) n ? (e[i] = R(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
					return e
				},
				_project: function () {
					var t = new D;
					this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
					var e = this._clickTolerance(),
						n = new A(e, e);
					this._bounds.isValid() && t.isValid() && (t.min._subtract(n), t.max._add(n), this._pxBounds = t)
				},
				_projectLatlngs: function (t, e, n) {
					var i, o, r = t[0] instanceof j,
						a = t.length;
					if (r) {
						for (o = [], i = 0; i < a; i++) o[i] = this._map.latLngToLayerPoint(t[i]), n.extend(o[i]);
						e.push(o)
					} else
						for (i = 0; i < a; i++) this._projectLatlngs(t[i], e, n)
				},
				_clipPoints: function () {
					var t = this._renderer._bounds;
					if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
						if (this.options.noClip) this._parts = this._rings;
						else {
							var e, n, i, o, r, a, s, l = this._parts;
							for (e = 0, i = 0, o = this._rings.length; e < o; e++)
								for (s = this._rings[e], n = 0, r = s.length; n < r - 1; n++)(a = cn(s[n], s[n + 1], t, n, !0)) && (l[i] = l[i] || [], l[i].push(a[0]), a[1] === s[n + 1] && n !== r - 2 || (l[i].push(a[1]), i++))
						}
				},
				_simplifyPoints: function () {
					for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) t[n] = sn(t[n], e)
				},
				_update: function () {
					this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
				},
				_updatePath: function () {
					this._renderer._updatePoly(this)
				},
				_containsPoint: function (t, e) {
					var n, i, o, r, a, s, l = this._clickTolerance();
					if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
					for (n = 0, r = this._parts.length; n < r; n++)
						for (s = this._parts[n], i = 0, a = s.length, o = a - 1; i < a; o = i++)
							if ((e || 0 !== i) && ln(t, s[o], s[i]) <= l) return !0;
					return !1
				}
			});
		In._flat = fn;
		var Dn = In.extend({
				options: {
					fill: !0
				},
				isEmpty: function () {
					return !this._latlngs.length || !this._latlngs[0].length
				},
				getCenter: function () {
					if (!this._map) throw new Error("Must add layer to map before using getCenter()");
					var t, e, n, i, o, r, a, s, l, c = this._rings[0],
						h = c.length;
					if (!h) return null;
					for (r = a = s = 0, t = 0, e = h - 1; t < h; e = t++) n = c[t], i = c[e], o = n.y * i.x - i.y * n.x, a += (n.x + i.x) * o, s += (n.y + i.y) * o, r += 3 * o;
					return l = 0 === r ? c[0] : [a / r, s / r], this._map.layerPointToLatLng(l)
				},
				_convertLatLngs: function (t) {
					var e = In.prototype._convertLatLngs.call(this, t),
						n = e.length;
					return n >= 2 && e[0] instanceof j && e[0].equals(e[n - 1]) && e.pop(), e
				},
				_setLatLngs: function (t) {
					In.prototype._setLatLngs.call(this, t), pn(this._latlngs) && (this._latlngs = [this._latlngs])
				},
				_defaultShape: function () {
					return pn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
				},
				_clipPoints: function () {
					var t = this._renderer._bounds,
						e = this.options.weight,
						n = new A(e, e);
					if (t = new D(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
						if (this.options.noClip) this._parts = this._rings;
						else
							for (var i, o = 0, r = this._rings.length; o < r; o++)(i = _n(this._rings[o], t, !0)).length && this._parts.push(i)
				},
				_updatePath: function () {
					this._renderer._updatePoly(this, !0)
				},
				_containsPoint: function (t) {
					var e, n, i, o, r, a, s, l, c = !1;
					if (!this._pxBounds.contains(t)) return !1;
					for (o = 0, s = this._parts.length; o < s; o++)
						for (e = this._parts[o], r = 0, l = e.length, a = l - 1; r < l; a = r++) n = e[r], i = e[a], n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (c = !c);
					return c || In.prototype._containsPoint.call(this, t, !0)
				}
			}),
			Zn = zn.extend({
				initialize: function (t, e) {
					p(this, e), this._layers = {}, t && this.addData(t)
				},
				addData: function (t) {
					var e, n, i, o = g(t) ? t : t.features;
					if (o) {
						for (e = 0, n = o.length; e < n; e++)((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
						return this
					}
					var r = this.options;
					if (r.filter && !r.filter(t)) return this;
					var a = Bn(t, r);
					return a ? (a.feature = Hn(t), a.defaultOptions = a.options, this.resetStyle(a), r.onEachFeature && r.onEachFeature(t, a), this.addLayer(a)) : this
				},
				resetStyle: function (t) {
					return t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
				},
				setStyle: function (t) {
					return this.eachLayer(function (e) {
						this._setLayerStyle(e, t)
					}, this)
				},
				_setLayerStyle: function (t, e) {
					"function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
				}
			});

		function Bn(t, e) {
			var n, i, o, r, a = "Feature" === t.type ? t.geometry : t,
				s = a ? a.coordinates : null,
				l = [],
				c = e && e.pointToLayer,
				h = e && e.coordsToLatLng || Nn;
			if (!s && !a) return null;
			switch (a.type) {
				case "Point":
					return n = h(s), c ? c(t, n) : new En(n);
				case "MultiPoint":
					for (o = 0, r = s.length; o < r; o++) n = h(s[o]), l.push(c ? c(t, n) : new En(n));
					return new zn(l);
				case "LineString":
				case "MultiLineString":
					return i = jn(s, "LineString" === a.type ? 0 : 1, h), new In(i, e);
				case "Polygon":
				case "MultiPolygon":
					return i = jn(s, "Polygon" === a.type ? 1 : 2, h), new Dn(i, e);
				case "GeometryCollection":
					for (o = 0, r = a.geometries.length; o < r; o++) {
						var u = Bn({
							geometry: a.geometries[o],
							type: "Feature",
							properties: t.properties
						}, e);
						u && l.push(u)
					}
					return new zn(l);
				default:
					throw new Error("Invalid GeoJSON object.")
			}
		}

		function Nn(t) {
			return new j(t[1], t[0], t[2])
		}

		function jn(t, e, n) {
			for (var i, o = [], r = 0, a = t.length; r < a; r++) i = e ? jn(t[r], e - 1, n) : (n || Nn)(t[r]), o.push(i);
			return o
		}

		function Rn(t, e) {
			return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [h(t.lng, e), h(t.lat, e), h(t.alt, e)] : [h(t.lng, e), h(t.lat, e)]
		}

		function Un(t, e, n, i) {
			for (var o = [], r = 0, a = t.length; r < a; r++) o.push(e ? Un(t[r], e - 1, n, i) : Rn(t[r], i));
			return !e && n && o.push(o[0]), o
		}

		function Wn(t, e) {
			return t.feature ? n({}, t.feature, {
				geometry: e
			}) : Hn(e)
		}

		function Hn(t) {
			return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
				type: "Feature",
				properties: {},
				geometry: t
			}
		}
		var Fn = {
			toGeoJSON: function (t) {
				return Wn(this, {
					type: "Point",
					coordinates: Rn(this.getLatLng(), t)
				})
			}
		};

		function Vn(t, e) {
			return new Zn(t, e)
		}
		En.include(Fn), On.include(Fn), An.include(Fn), In.include({
			toGeoJSON: function (t) {
				var e = !pn(this._latlngs),
					n = Un(this._latlngs, e ? 1 : 0, !1, t);
				return Wn(this, {
					type: (e ? "Multi" : "") + "LineString",
					coordinates: n
				})
			}
		}), Dn.include({
			toGeoJSON: function (t) {
				var e = !pn(this._latlngs),
					n = e && !pn(this._latlngs[0]),
					i = Un(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
				return e || (i = [i]), Wn(this, {
					type: (n ? "Multi" : "") + "Polygon",
					coordinates: i
				})
			}
		}), Pn.include({
			toMultiPoint: function (t) {
				var e = [];
				return this.eachLayer(function (n) {
					e.push(n.toGeoJSON(t).geometry.coordinates)
				}), Wn(this, {
					type: "MultiPoint",
					coordinates: e
				})
			},
			toGeoJSON: function (t) {
				var e = this.feature && this.feature.geometry && this.feature.geometry.type;
				if ("MultiPoint" === e) return this.toMultiPoint(t);
				var n = "GeometryCollection" === e,
					i = [];
				return this.eachLayer(function (e) {
					if (e.toGeoJSON) {
						var o = e.toGeoJSON(t);
						if (n) i.push(o.geometry);
						else {
							var r = Hn(o);
							"FeatureCollection" === r.type ? i.push.apply(i, r.features) : i.push(r)
						}
					}
				}), n ? Wn(this, {
					geometries: i,
					type: "GeometryCollection"
				}) : {
					type: "FeatureCollection",
					features: i
				}
			}
		});
		var qn = Vn,
			Gn = kn.extend({
				options: {
					opacity: 1,
					alt: "",
					interactive: !1,
					crossOrigin: !1,
					errorOverlayUrl: "",
					zIndex: 1,
					className: ""
				},
				initialize: function (t, e, n) {
					this._url = t, this._bounds = N(e), p(this, n)
				},
				onAdd: function () {
					this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ee(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
				},
				onRemove: function () {
					Pe(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
				},
				setOpacity: function (t) {
					return this.options.opacity = t, this._image && this._updateOpacity(), this
				},
				setStyle: function (t) {
					return t.opacity && this.setOpacity(t.opacity), this
				},
				bringToFront: function () {
					return this._map && Te(this._image), this
				},
				bringToBack: function () {
					return this._map && Me(this._image), this
				},
				setUrl: function (t) {
					return this._url = t, this._image && (this._image.src = t), this
				},
				setBounds: function (t) {
					return this._bounds = N(t), this._map && this._reset(), this
				},
				getEvents: function () {
					var t = {
						zoom: this._reset,
						viewreset: this._reset
					};
					return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
				},
				setZIndex: function (t) {
					return this.options.zIndex = t, this._updateZIndex(), this
				},
				getBounds: function () {
					return this._bounds
				},
				getElement: function () {
					return this._image
				},
				_initImage: function () {
					var t = "IMG" === this._url.tagName,
						e = this._image = t ? this._url : ke("img");
					Ee(e, "leaflet-image-layer"), this._zoomAnimated && Ee(e, "leaflet-zoom-animated"), this.options.className && Ee(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onload = o(this.fire, this, "load"), e.onerror = o(this._overlayOnError, this, "error"), this.options.crossOrigin && (e.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
				},
				_animateZoom: function (t) {
					var e = this._map.getZoomScale(t.zoom),
						n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
					Ze(this._image, n, e)
				},
				_reset: function () {
					var t = this._image,
						e = new D(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
						n = e.getSize();
					Be(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
				},
				_updateOpacity: function () {
					Ie(this._image, this.options.opacity)
				},
				_updateZIndex: function () {
					this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
				},
				_overlayOnError: function () {
					this.fire("error");
					var t = this.options.errorOverlayUrl;
					t && this._url !== t && (this._url = t, this._image.src = t)
				}
			}),
			Kn = Gn.extend({
				options: {
					autoplay: !0,
					loop: !0
				},
				_initImage: function () {
					var t = "VIDEO" === this._url.tagName,
						e = this._image = t ? this._url : ke("video");
					if (Ee(e, "leaflet-image-layer"), this._zoomAnimated && Ee(e, "leaflet-zoom-animated"), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = o(this.fire, this, "load"), t) {
						for (var n = e.getElementsByTagName("source"), i = [], r = 0; r < n.length; r++) i.push(n[r].src);
						this._url = n.length > 0 ? i : [e.src]
					} else {
						g(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
						for (var a = 0; a < this._url.length; a++) {
							var s = ke("source");
							s.src = this._url[a], e.appendChild(s)
						}
					}
				}
			}),
			Yn = kn.extend({
				options: {
					offset: [0, 7],
					className: "",
					pane: "popupPane"
				},
				initialize: function (t, e) {
					p(this, t), this._source = e
				},
				onAdd: function (t) {
					this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Ie(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Ie(this._container, 1), this.bringToFront()
				},
				onRemove: function (t) {
					t._fadeAnimated ? (Ie(this._container, 0), this._removeTimeout = setTimeout(o(Pe, void 0, this._container), 200)) : Pe(this._container)
				},
				getLatLng: function () {
					return this._latlng
				},
				setLatLng: function (t) {
					return this._latlng = R(t), this._map && (this._updatePosition(), this._adjustPan()), this
				},
				getContent: function () {
					return this._content
				},
				setContent: function (t) {
					return this._content = t, this.update(), this
				},
				getElement: function () {
					return this._container
				},
				update: function () {
					this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
				},
				getEvents: function () {
					var t = {
						zoom: this._updatePosition,
						viewreset: this._updatePosition
					};
					return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
				},
				isOpen: function () {
					return !!this._map && this._map.hasLayer(this)
				},
				bringToFront: function () {
					return this._map && Te(this._container), this
				},
				bringToBack: function () {
					return this._map && Me(this._container), this
				},
				_updateContent: function () {
					if (this._content) {
						var t = this._contentNode,
							e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
						if ("string" == typeof e) t.innerHTML = e;
						else {
							for (; t.hasChildNodes();) t.removeChild(t.firstChild);
							t.appendChild(e)
						}
						this.fire("contentupdate")
					}
				},
				_updatePosition: function () {
					if (this._map) {
						var t = this._map.latLngToLayerPoint(this._latlng),
							e = I(this.options.offset),
							n = this._getAnchor();
						this._zoomAnimated ? Be(this._container, t.add(n)) : e = e.add(t).add(n);
						var i = this._containerBottom = -e.y,
							o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
						this._container.style.bottom = i + "px", this._container.style.left = o + "px"
					}
				},
				_getAnchor: function () {
					return [0, 0]
				}
			}),
			Jn = Yn.extend({
				options: {
					maxWidth: 300,
					minWidth: 50,
					maxHeight: null,
					autoPan: !0,
					autoPanPaddingTopLeft: null,
					autoPanPaddingBottomRight: null,
					autoPanPadding: [5, 5],
					keepInView: !1,
					closeButton: !0,
					autoClose: !0,
					closeOnEscapeKey: !0,
					className: ""
				},
				openOn: function (t) {
					return t.openPopup(this), this
				},
				onAdd: function (t) {
					Yn.prototype.onAdd.call(this, t), t.fire("popupopen", {
						popup: this
					}), this._source && (this._source.fire("popupopen", {
						popup: this
					}, !0), this._source instanceof Sn || this._source.on("preclick", te))
				},
				onRemove: function (t) {
					Yn.prototype.onRemove.call(this, t), t.fire("popupclose", {
						popup: this
					}), this._source && (this._source.fire("popupclose", {
						popup: this
					}, !0), this._source instanceof Sn || this._source.off("preclick", te))
				},
				getEvents: function () {
					var t = Yn.prototype.getEvents.call(this);
					return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
				},
				_close: function () {
					this._map && this._map.closePopup(this)
				},
				_initLayout: function () {
					var t = "leaflet-popup",
						e = this._container = ke("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
						n = this._wrapper = ke("div", t + "-content-wrapper", e);
					if (this._contentNode = ke("div", t + "-content", n), ne(n), ee(this._contentNode), Yt(n, "contextmenu", te), this._tipContainer = ke("div", t + "-tip-container", e), this._tip = ke("div", t + "-tip", this._tipContainer), this.options.closeButton) {
						var i = this._closeButton = ke("a", t + "-close-button", e);
						i.href = "#close", i.innerHTML = "&#215;", Yt(i, "click", this._onCloseButtonClick, this)
					}
				},
				_updateLayout: function () {
					var t = this._contentNode,
						e = t.style;
					e.width = "", e.whiteSpace = "nowrap";
					var n = t.offsetWidth;
					n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
					var i = t.offsetHeight,
						o = this.options.maxHeight;
					o && i > o ? (e.height = o + "px", Ee(t, "leaflet-popup-scrolled")) : Se(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
				},
				_animateZoom: function (t) {
					var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
						n = this._getAnchor();
					Be(this._container, e.add(n))
				},
				_adjustPan: function () {
					if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
						var t = this._map,
							e = parseInt(Le(this._container, "marginBottom"), 10) || 0,
							n = this._container.offsetHeight + e,
							i = this._containerWidth,
							o = new A(this._containerLeft, -n - this._containerBottom);
						o._add(Ne(this._container));
						var r = t.layerPointToContainerPoint(o),
							a = I(this.options.autoPanPadding),
							s = I(this.options.autoPanPaddingTopLeft || a),
							l = I(this.options.autoPanPaddingBottomRight || a),
							c = t.getSize(),
							h = 0,
							u = 0;
						r.x + i + l.x > c.x && (h = r.x + i - c.x + l.x), r.x - h - s.x < 0 && (h = r.x - s.x), r.y + n + l.y > c.y && (u = r.y + n - c.y + l.y), r.y - u - s.y < 0 && (u = r.y - s.y), (h || u) && t.fire("autopanstart").panBy([h, u])
					}
				},
				_onCloseButtonClick: function (t) {
					this._close(), oe(t)
				},
				_getAnchor: function () {
					return I(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
				}
			});
		qe.mergeOptions({
			closePopupOnClick: !0
		}), qe.include({
			openPopup: function (t, e, n) {
				return t instanceof Jn || (t = new Jn(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
			},
			closePopup: function (t) {
				return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
			}
		}), kn.include({
			bindPopup: function (t, e) {
				return t instanceof Jn ? (p(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new Jn(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
					click: this._openPopup,
					keypress: this._onKeyPress,
					remove: this.closePopup,
					move: this._movePopup
				}), this._popupHandlersAdded = !0), this
			},
			unbindPopup: function () {
				return this._popup && (this.off({
					click: this._openPopup,
					keypress: this._onKeyPress,
					remove: this.closePopup,
					move: this._movePopup
				}), this._popupHandlersAdded = !1, this._popup = null), this
			},
			openPopup: function (t, e) {
				if (t instanceof kn || (e = t, t = this), t instanceof zn)
					for (var n in this._layers) {
						t = this._layers[n];
						break
					}
				return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
			},
			closePopup: function () {
				return this._popup && this._popup._close(), this
			},
			togglePopup: function (t) {
				return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
			},
			isPopupOpen: function () {
				return !!this._popup && this._popup.isOpen()
			},
			setPopupContent: function (t) {
				return this._popup && this._popup.setContent(t), this
			},
			getPopup: function () {
				return this._popup
			},
			_openPopup: function (t) {
				var e = t.layer || t.target;
				this._popup && this._map && (oe(t), e instanceof Sn ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
			},
			_movePopup: function (t) {
				this._popup.setLatLng(t.latlng)
			},
			_onKeyPress: function (t) {
				13 === t.originalEvent.keyCode && this._openPopup(t)
			}
		});
		var Xn = Yn.extend({
			options: {
				pane: "tooltipPane",
				offset: [0, 0],
				direction: "auto",
				permanent: !1,
				sticky: !1,
				interactive: !1,
				opacity: .9
			},
			onAdd: function (t) {
				Yn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
					tooltip: this
				}), this._source && this._source.fire("tooltipopen", {
					tooltip: this
				}, !0)
			},
			onRemove: function (t) {
				Yn.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
					tooltip: this
				}), this._source && this._source.fire("tooltipclose", {
					tooltip: this
				}, !0)
			},
			getEvents: function () {
				var t = Yn.prototype.getEvents.call(this);
				return wt && !this.options.permanent && (t.preclick = this._close), t
			},
			_close: function () {
				this._map && this._map.closeTooltip(this)
			},
			_initLayout: function () {
				var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
				this._contentNode = this._container = ke("div", t)
			},
			_updateLayout: function () {},
			_adjustPan: function () {},
			_setPosition: function (t) {
				var e = this._map,
					n = this._container,
					i = e.latLngToContainerPoint(e.getCenter()),
					o = e.layerPointToContainerPoint(t),
					r = this.options.direction,
					a = n.offsetWidth,
					s = n.offsetHeight,
					l = I(this.options.offset),
					c = this._getAnchor();
				"top" === r ? t = t.add(I(-a / 2 + l.x, -s + l.y + c.y, !0)) : "bottom" === r ? t = t.subtract(I(a / 2 - l.x, -l.y, !0)) : "center" === r ? t = t.subtract(I(a / 2 + l.x, s / 2 - c.y + l.y, !0)) : "right" === r || "auto" === r && o.x < i.x ? (r = "right", t = t.add(I(l.x + c.x, c.y - s / 2 + l.y, !0))) : (r = "left", t = t.subtract(I(a + c.x - l.x, s / 2 - c.y - l.y, !0))), Se(n, "leaflet-tooltip-right"), Se(n, "leaflet-tooltip-left"), Se(n, "leaflet-tooltip-top"), Se(n, "leaflet-tooltip-bottom"), Ee(n, "leaflet-tooltip-" + r), Be(n, t)
			},
			_updatePosition: function () {
				var t = this._map.latLngToLayerPoint(this._latlng);
				this._setPosition(t)
			},
			setOpacity: function (t) {
				this.options.opacity = t, this._container && Ie(this._container, t)
			},
			_animateZoom: function (t) {
				var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
				this._setPosition(e)
			},
			_getAnchor: function () {
				return I(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
			}
		});
		qe.include({
			openTooltip: function (t, e, n) {
				return t instanceof Xn || (t = new Xn(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
			},
			closeTooltip: function (t) {
				return t && this.removeLayer(t), this
			}
		}), kn.include({
			bindTooltip: function (t, e) {
				return t instanceof Xn ? (p(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new Xn(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
			},
			unbindTooltip: function () {
				return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
			},
			_initTooltipInteractions: function (t) {
				if (t || !this._tooltipHandlersAdded) {
					var e = t ? "off" : "on",
						n = {
							remove: this.closeTooltip,
							move: this._moveTooltip
						};
					this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), wt && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t
				}
			},
			openTooltip: function (t, e) {
				if (t instanceof kn || (e = t, t = this), t instanceof zn)
					for (var n in this._layers) {
						t = this._layers[n];
						break
					}
				return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (Ee(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
			},
			closeTooltip: function () {
				return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (Se(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
			},
			toggleTooltip: function (t) {
				return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
			},
			isTooltipOpen: function () {
				return this._tooltip.isOpen()
			},
			setTooltipContent: function (t) {
				return this._tooltip && this._tooltip.setContent(t), this
			},
			getTooltip: function () {
				return this._tooltip
			},
			_openTooltip: function (t) {
				var e = t.layer || t.target;
				this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
			},
			_moveTooltip: function (t) {
				var e, n, i = t.latlng;
				this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i)
			}
		});
		var Qn = Tn.extend({
			options: {
				iconSize: [12, 12],
				html: !1,
				bgPos: null,
				className: "leaflet-div-icon"
			},
			createIcon: function (t) {
				var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
					n = this.options;
				if (e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
					var i = I(n.bgPos);
					e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
				}
				return this._setIconStyles(e, "icon"), e
			},
			createShadow: function () {
				return null
			}
		});
		Tn.Default = Mn;
		var $n = kn.extend({
				options: {
					tileSize: 256,
					opacity: 1,
					updateWhenIdle: gt,
					updateWhenZooming: !0,
					updateInterval: 200,
					zIndex: 1,
					bounds: null,
					minZoom: 0,
					maxZoom: void 0,
					maxNativeZoom: void 0,
					minNativeZoom: void 0,
					noWrap: !1,
					pane: "tilePane",
					className: "",
					keepBuffer: 2
				},
				initialize: function (t) {
					p(this, t)
				},
				onAdd: function () {
					this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
				},
				beforeAdd: function (t) {
					t._addZoomLimit(this)
				},
				onRemove: function (t) {
					this._removeAllTiles(), Pe(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
				},
				bringToFront: function () {
					return this._map && (Te(this._container), this._setAutoZIndex(Math.max)), this
				},
				bringToBack: function () {
					return this._map && (Me(this._container), this._setAutoZIndex(Math.min)), this
				},
				getContainer: function () {
					return this._container
				},
				setOpacity: function (t) {
					return this.options.opacity = t, this._updateOpacity(), this
				},
				setZIndex: function (t) {
					return this.options.zIndex = t, this._updateZIndex(), this
				},
				isLoading: function () {
					return this._loading
				},
				redraw: function () {
					return this._map && (this._removeAllTiles(), this._update()), this
				},
				getEvents: function () {
					var t = {
						viewprereset: this._invalidateAll,
						viewreset: this._resetView,
						zoom: this._resetView,
						moveend: this._onMoveEnd
					};
					return this.options.updateWhenIdle || (this._onMove || (this._onMove = s(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
				},
				createTile: function () {
					return document.createElement("div")
				},
				getTileSize: function () {
					var t = this.options.tileSize;
					return t instanceof A ? t : new A(t, t)
				},
				_updateZIndex: function () {
					this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
				},
				_setAutoZIndex: function (t) {
					for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, r = n.length; o < r; o++) e = n[o].style.zIndex, n[o] !== this._container && e && (i = t(i, +e));
					isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
				},
				_updateOpacity: function () {
					if (this._map && !$) {
						Ie(this._container, this.options.opacity);
						var t = +new Date,
							e = !1,
							n = !1;
						for (var i in this._tiles) {
							var o = this._tiles[i];
							if (o.current && o.loaded) {
								var r = Math.min(1, (t - o.loaded) / 200);
								Ie(o.el, r), r < 1 ? e = !0 : (o.active ? n = !0 : this._onOpaqueTile(o), o.active = !0)
							}
						}
						n && !this._noPrune && this._pruneTiles(), e && (T(this._fadeFrame), this._fadeFrame = z(this._updateOpacity, this))
					}
				},
				_onOpaqueTile: c,
				_initContainer: function () {
					this._container || (this._container = ke("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
				},
				_updateLevels: function () {
					var t = this._tileZoom,
						e = this.options.maxZoom;
					if (void 0 !== t) {
						for (var n in this._levels) this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (Pe(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
						var i = this._levels[t],
							o = this._map;
						return i || ((i = this._levels[t] = {}).el = ke("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, o.getCenter(), o.getZoom()), i.el.offsetWidth, this._onCreateLevel(i)), this._level = i, i
					}
				},
				_onUpdateLevel: c,
				_onRemoveLevel: c,
				_onCreateLevel: c,
				_pruneTiles: function () {
					if (this._map) {
						var t, e, n = this._map.getZoom();
						if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
						else {
							for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
							for (t in this._tiles)
								if ((e = this._tiles[t]).current && !e.active) {
									var i = e.coords;
									this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
								}
							for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
						}
					}
				},
				_removeTilesAtZoom: function (t) {
					for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
				},
				_removeAllTiles: function () {
					for (var t in this._tiles) this._removeTile(t)
				},
				_invalidateAll: function () {
					for (var t in this._levels) Pe(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
					this._removeAllTiles(), this._tileZoom = void 0
				},
				_retainParent: function (t, e, n, i) {
					var o = Math.floor(t / 2),
						r = Math.floor(e / 2),
						a = n - 1,
						s = new A(+o, +r);
					s.z = +a;
					var l = this._tileCoordsToKey(s),
						c = this._tiles[l];
					return c && c.active ? (c.retain = !0, !0) : (c && c.loaded && (c.retain = !0), a > i && this._retainParent(o, r, a, i))
				},
				_retainChildren: function (t, e, n, i) {
					for (var o = 2 * t; o < 2 * t + 2; o++)
						for (var r = 2 * e; r < 2 * e + 2; r++) {
							var a = new A(o, r);
							a.z = n + 1;
							var s = this._tileCoordsToKey(a),
								l = this._tiles[s];
							l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n + 1 < i && this._retainChildren(o, r, n + 1, i))
						}
				},
				_resetView: function (t) {
					var e = t && (t.pinch || t.flyTo);
					this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
				},
				_animateZoom: function (t) {
					this._setView(t.center, t.zoom, !0, t.noUpdate)
				},
				_clampZoom: function (t) {
					var e = this.options;
					return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
				},
				_setView: function (t, e, n, i) {
					var o = this._clampZoom(Math.round(e));
					(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
					var r = this.options.updateWhenZooming && o !== this._tileZoom;
					i && !r || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e)
				},
				_setZoomTransforms: function (t, e) {
					for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e)
				},
				_setZoomTransform: function (t, e, n) {
					var i = this._map.getZoomScale(n, t.zoom),
						o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
					_t ? Ze(t.el, o, i) : Be(t.el, o)
				},
				_resetGrid: function () {
					var t = this._map,
						e = t.options.crs,
						n = this._tileSize = this.getTileSize(),
						i = this._tileZoom,
						o = this._map.getPixelWorldBounds(this._tileZoom);
					o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
				},
				_onMoveEnd: function () {
					this._map && !this._map._animatingZoom && this._update()
				},
				_getTiledPixelBounds: function (t) {
					var e = this._map,
						n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
						i = e.getZoomScale(n, this._tileZoom),
						o = e.project(t, this._tileZoom).floor(),
						r = e.getSize().divideBy(2 * i);
					return new D(o.subtract(r), o.add(r))
				},
				_update: function (t) {
					var e = this._map;
					if (e) {
						var n = this._clampZoom(e.getZoom());
						if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
							var i = this._getTiledPixelBounds(t),
								o = this._pxBoundsToTileRange(i),
								r = o.getCenter(),
								a = [],
								s = this.options.keepBuffer,
								l = new D(o.getBottomLeft().subtract([s, -s]), o.getTopRight().add([s, -s]));
							if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
							for (var c in this._tiles) {
								var h = this._tiles[c].coords;
								h.z === this._tileZoom && l.contains(new A(h.x, h.y)) || (this._tiles[c].current = !1)
							}
							if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
							else {
								for (var u = o.min.y; u <= o.max.y; u++)
									for (var d = o.min.x; d <= o.max.x; d++) {
										var p = new A(d, u);
										if (p.z = this._tileZoom, this._isValidTile(p)) {
											var f = this._tiles[this._tileCoordsToKey(p)];
											f ? f.current = !0 : a.push(p)
										}
									}
								if (a.sort(function (t, e) {
										return t.distanceTo(r) - e.distanceTo(r)
									}), 0 !== a.length) {
									this._loading || (this._loading = !0, this.fire("loading"));
									var m = document.createDocumentFragment();
									for (d = 0; d < a.length; d++) this._addTile(a[d], m);
									this._level.el.appendChild(m)
								}
							}
						}
					}
				},
				_isValidTile: function (t) {
					var e = this._map.options.crs;
					if (!e.infinite) {
						var n = this._globalTileRange;
						if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
					}
					if (!this.options.bounds) return !0;
					var i = this._tileCoordsToBounds(t);
					return N(this.options.bounds).overlaps(i)
				},
				_keyToBounds: function (t) {
					return this._tileCoordsToBounds(this._keyToTileCoords(t))
				},
				_tileCoordsToNwSe: function (t) {
					var e = this._map,
						n = this.getTileSize(),
						i = t.scaleBy(n),
						o = i.add(n),
						r = e.unproject(i, t.z),
						a = e.unproject(o, t.z);
					return [r, a]
				},
				_tileCoordsToBounds: function (t) {
					var e = this._tileCoordsToNwSe(t),
						n = new B(e[0], e[1]);
					return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
				},
				_tileCoordsToKey: function (t) {
					return t.x + ":" + t.y + ":" + t.z
				},
				_keyToTileCoords: function (t) {
					var e = t.split(":"),
						n = new A(+e[0], +e[1]);
					return n.z = +e[2], n
				},
				_removeTile: function (t) {
					var e = this._tiles[t];
					e && (rt || e.el.setAttribute("src", y), Pe(e.el), delete this._tiles[t], this.fire("tileunload", {
						tile: e.el,
						coords: this._keyToTileCoords(t)
					}))
				},
				_initTile: function (t) {
					Ee(t, "leaflet-tile");
					var e = this.getTileSize();
					t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = c, t.onmousemove = c, $ && this.options.opacity < 1 && Ie(t, this.options.opacity), nt && !it && (t.style.WebkitBackfaceVisibility = "hidden")
				},
				_addTile: function (t, e) {
					var n = this._getTilePos(t),
						i = this._tileCoordsToKey(t),
						r = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
					this._initTile(r), this.createTile.length < 2 && z(o(this._tileReady, this, t, null, r)), Be(r, n), this._tiles[i] = {
						el: r,
						coords: t,
						current: !0
					}, e.appendChild(r), this.fire("tileloadstart", {
						tile: r,
						coords: t
					})
				},
				_tileReady: function (t, e, n) {
					if (this._map) {
						e && this.fire("tileerror", {
							error: e,
							tile: n,
							coords: t
						});
						var i = this._tileCoordsToKey(t);
						(n = this._tiles[i]) && (n.loaded = +new Date, this._map._fadeAnimated ? (Ie(n.el, 0), T(this._fadeFrame), this._fadeFrame = z(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (Ee(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
							tile: n.el,
							coords: t
						})), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), $ || !this._map._fadeAnimated ? z(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
					}
				},
				_getTilePos: function (t) {
					return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
				},
				_wrapCoords: function (t) {
					var e = new A(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
					return e.z = t.z, e
				},
				_pxBoundsToTileRange: function (t) {
					var e = this.getTileSize();
					return new D(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
				},
				_noTilesToLoad: function () {
					for (var t in this._tiles)
						if (!this._tiles[t].loaded) return !1;
					return !0
				}
			}),
			ti = $n.extend({
				options: {
					minZoom: 0,
					maxZoom: 18,
					subdomains: "abc",
					errorTileUrl: "",
					zoomOffset: 0,
					tms: !1,
					zoomReverse: !1,
					detectRetina: !1,
					crossOrigin: !1
				},
				initialize: function (t, e) {
					this._url = t, (e = p(this, e)).detectRetina && Pt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), nt || this.on("tileunload", this._onTileRemove)
				},
				setUrl: function (t, e) {
					return this._url = t, e || this.redraw(), this
				},
				createTile: function (t, e) {
					var n = document.createElement("img");
					return Yt(n, "load", o(this._tileOnLoad, this, e, n)), Yt(n, "error", o(this._tileOnError, this, e, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
				},
				getTileUrl: function (t) {
					var e = {
						r: Pt ? "@2x" : "",
						s: this._getSubdomain(t),
						x: t.x,
						y: t.y,
						z: this._getZoomForUrl()
					};
					if (this._map && !this._map.options.crs.infinite) {
						var i = this._globalTileRange.max.y - t.y;
						this.options.tms && (e.y = i), e["-y"] = i
					}
					return _(this._url, n(e, this.options))
				},
				_tileOnLoad: function (t, e) {
					$ ? setTimeout(o(t, this, null, e), 0) : t(null, e)
				},
				_tileOnError: function (t, e, n) {
					var i = this.options.errorTileUrl;
					i && e.getAttribute("src") !== i && (e.src = i), t(n, e)
				},
				_onTileRemove: function (t) {
					t.tile.onload = null
				},
				_getZoomForUrl: function () {
					var t = this._tileZoom,
						e = this.options.maxZoom,
						n = this.options.zoomReverse,
						i = this.options.zoomOffset;
					return n && (t = e - t), t + i
				},
				_getSubdomain: function (t) {
					var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
					return this.options.subdomains[e]
				},
				_abortLoading: function () {
					var t, e;
					for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = c, e.onerror = c, e.complete || (e.src = y, Pe(e), delete this._tiles[t]))
				}
			});

		function ei(t, e) {
			return new ti(t, e)
		}
		var ni = ti.extend({
			defaultWmsParams: {
				service: "WMS",
				request: "GetMap",
				layers: "",
				styles: "",
				format: "image/jpeg",
				transparent: !1,
				version: "1.1.1"
			},
			options: {
				crs: null,
				uppercase: !1
			},
			initialize: function (t, e) {
				this._url = t;
				var i = n({}, this.defaultWmsParams);
				for (var o in e) o in this.options || (i[o] = e[o]);
				var r = (e = p(this, e)).detectRetina && Pt ? 2 : 1,
					a = this.getTileSize();
				i.width = a.x * r, i.height = a.y * r, this.wmsParams = i
			},
			onAdd: function (t) {
				this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
				var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
				this.wmsParams[e] = this._crs.code, ti.prototype.onAdd.call(this, t)
			},
			getTileUrl: function (t) {
				var e = this._tileCoordsToNwSe(t),
					n = this._crs,
					i = Z(n.project(e[0]), n.project(e[1])),
					o = i.min,
					r = i.max,
					a = (this._wmsVersion >= 1.3 && this._crs === wn ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","),
					s = L.TileLayer.prototype.getTileUrl.call(this, t);
				return s + f(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a
			},
			setParams: function (t, e) {
				return n(this.wmsParams, t), e || this.redraw(), this
			}
		});
		ti.WMS = ni, ei.wms = function (t, e) {
			return new ni(t, e)
		};
		var ii = kn.extend({
				options: {
					padding: .1,
					tolerance: 0
				},
				initialize: function (t) {
					p(this, t), a(this), this._layers = this._layers || {}
				},
				onAdd: function () {
					this._container || (this._initContainer(), this._zoomAnimated && Ee(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
				},
				onRemove: function () {
					this.off("update", this._updatePaths, this), this._destroyContainer()
				},
				getEvents: function () {
					var t = {
						viewreset: this._reset,
						zoom: this._onZoom,
						moveend: this._update,
						zoomend: this._onZoomEnd
					};
					return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
				},
				_onAnimZoom: function (t) {
					this._updateTransform(t.center, t.zoom)
				},
				_onZoom: function () {
					this._updateTransform(this._map.getCenter(), this._map.getZoom())
				},
				_updateTransform: function (t, e) {
					var n = this._map.getZoomScale(e, this._zoom),
						i = Ne(this._container),
						o = this._map.getSize().multiplyBy(.5 + this.options.padding),
						r = this._map.project(this._center, e),
						a = this._map.project(t, e),
						s = a.subtract(r),
						l = o.multiplyBy(-n).add(i).add(o).subtract(s);
					_t ? Ze(this._container, l, n) : Be(this._container, l)
				},
				_reset: function () {
					for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
				},
				_onZoomEnd: function () {
					for (var t in this._layers) this._layers[t]._project()
				},
				_updatePaths: function () {
					for (var t in this._layers) this._layers[t]._update()
				},
				_update: function () {
					var t = this.options.padding,
						e = this._map.getSize(),
						n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
					this._bounds = new D(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
				}
			}),
			oi = ii.extend({
				getEvents: function () {
					var t = ii.prototype.getEvents.call(this);
					return t.viewprereset = this._onViewPreReset, t
				},
				_onViewPreReset: function () {
					this._postponeUpdatePaths = !0
				},
				onAdd: function () {
					ii.prototype.onAdd.call(this), this._draw()
				},
				_initContainer: function () {
					var t = this._container = document.createElement("canvas");
					Yt(t, "mousemove", s(this._onMouseMove, 32, this), this), Yt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Yt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
				},
				_destroyContainer: function () {
					delete this._ctx, Pe(this._container), Xt(this._container), delete this._container
				},
				_updatePaths: function () {
					if (!this._postponeUpdatePaths) {
						for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
						this._redraw()
					}
				},
				_update: function () {
					if (!this._map._animatingZoom || !this._bounds) {
						this._drawnLayers = {}, ii.prototype._update.call(this);
						var t = this._bounds,
							e = this._container,
							n = t.getSize(),
							i = Pt ? 2 : 1;
						Be(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", Pt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
					}
				},
				_reset: function () {
					ii.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
				},
				_initPath: function (t) {
					this._updateDashArray(t), this._layers[a(t)] = t;
					var e = t._order = {
						layer: t,
						prev: this._drawLast,
						next: null
					};
					this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
				},
				_addPath: function (t) {
					this._requestRedraw(t)
				},
				_removePath: function (t) {
					var e = t._order,
						n = e.next,
						i = e.prev;
					n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
				},
				_updatePath: function (t) {
					this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
				},
				_updateStyle: function (t) {
					this._updateDashArray(t), this._requestRedraw(t)
				},
				_updateDashArray: function (t) {
					if (t.options.dashArray) {
						var e, n = t.options.dashArray.split(","),
							i = [];
						for (e = 0; e < n.length; e++) i.push(Number(n[e]));
						t.options._dashArray = i
					}
				},
				_requestRedraw: function (t) {
					this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || z(this._redraw, this))
				},
				_extendRedrawBounds: function (t) {
					if (t._pxBounds) {
						var e = (t.options.weight || 0) + 1;
						this._redrawBounds = this._redrawBounds || new D, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
					}
				},
				_redraw: function () {
					this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
				},
				_clear: function () {
					var t = this._redrawBounds;
					if (t) {
						var e = t.getSize();
						this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
					} else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
				},
				_draw: function () {
					var t, e = this._redrawBounds;
					if (this._ctx.save(), e) {
						var n = e.getSize();
						this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip()
					}
					this._drawing = !0;
					for (var i = this._drawFirst; i; i = i.next) t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
					this._drawing = !1, this._ctx.restore()
				},
				_updatePoly: function (t, e) {
					if (this._drawing) {
						var n, i, o, r, a = t._parts,
							s = a.length,
							l = this._ctx;
						if (s) {
							for (this._drawnLayers[t._leaflet_id] = t, l.beginPath(), n = 0; n < s; n++) {
								for (i = 0, o = a[n].length; i < o; i++) r = a[n][i], l[i ? "lineTo" : "moveTo"](r.x, r.y);
								e && l.closePath()
							}
							this._fillStroke(l, t)
						}
					}
				},
				_updateCircle: function (t) {
					if (this._drawing && !t._empty()) {
						var e = t._point,
							n = this._ctx,
							i = Math.max(Math.round(t._radius), 1),
							o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
						this._drawnLayers[t._leaflet_id] = t, 1 !== o && (n.save(), n.scale(1, o)), n.beginPath(), n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1), 1 !== o && n.restore(), this._fillStroke(n, t)
					}
				},
				_fillStroke: function (t, e) {
					var n = e.options;
					n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
				},
				_onClick: function (t) {
					for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
					n && (he(t), this._fireEvent([n], t))
				},
				_onMouseMove: function (t) {
					if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
						var e = this._map.mouseEventToLayerPoint(t);
						this._handleMouseHover(t, e)
					}
				},
				_handleMouseOut: function (t) {
					var e = this._hoveredLayer;
					e && (Se(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
				},
				_handleMouseHover: function (t, e) {
					for (var n, i, o = this._drawFirst; o; o = o.next)(n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
					i !== this._hoveredLayer && (this._handleMouseOut(t), i && (Ee(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
				},
				_fireEvent: function (t, e, n) {
					this._map._fireDOMEvent(e, n || e.type, t)
				},
				_bringToFront: function (t) {
					var e = t._order,
						n = e.next,
						i = e.prev;
					n && (n.prev = i, i ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
				},
				_bringToBack: function (t) {
					var e = t._order,
						n = e.next,
						i = e.prev;
					i && (i.next = n, n ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
				}
			});

		function ri(t) {
			return zt ? new oi(t) : null
		}
		var ai = function () {
				try {
					return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
						function (t) {
							return document.createElement("<lvml:" + t + ' class="lvml">')
						}
				} catch (t) {
					return function (t) {
						return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
					}
				}
			}(),
			si = {
				_initContainer: function () {
					this._container = ke("div", "leaflet-vml-container")
				},
				_update: function () {
					this._map._animatingZoom || (ii.prototype._update.call(this), this.fire("update"))
				},
				_initPath: function (t) {
					var e = t._container = ai("shape");
					Ee(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ai("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[a(t)] = t
				},
				_addPath: function (t) {
					var e = t._container;
					this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
				},
				_removePath: function (t) {
					var e = t._container;
					Pe(e), t.removeInteractiveTarget(e), delete this._layers[a(t)]
				},
				_updateStyle: function (t) {
					var e = t._stroke,
						n = t._fill,
						i = t.options,
						o = t._container;
					o.stroked = !!i.stroke, o.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = ai("stroke")), o.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, i.dashArray ? e.dashStyle = g(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (o.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = ai("fill")), o.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (o.removeChild(n), t._fill = null)
				},
				_updateCircle: function (t) {
					var e = t._point.round(),
						n = Math.round(t._radius),
						i = Math.round(t._radiusY || n);
					this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
				},
				_setPath: function (t, e) {
					t._path.v = e
				},
				_bringToFront: function (t) {
					Te(t._container)
				},
				_bringToBack: function (t) {
					Me(t._container)
				}
			},
			li = Mt ? ai : Y,
			ci = ii.extend({
				getEvents: function () {
					var t = ii.prototype.getEvents.call(this);
					return t.zoomstart = this._onZoomStart, t
				},
				_initContainer: function () {
					this._container = li("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = li("g"), this._container.appendChild(this._rootGroup)
				},
				_destroyContainer: function () {
					Pe(this._container), Xt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
				},
				_onZoomStart: function () {
					this._update()
				},
				_update: function () {
					if (!this._map._animatingZoom || !this._bounds) {
						ii.prototype._update.call(this);
						var t = this._bounds,
							e = t.getSize(),
							n = this._container;
						this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), Be(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
					}
				},
				_initPath: function (t) {
					var e = t._path = li("path");
					t.options.className && Ee(e, t.options.className), t.options.interactive && Ee(e, "leaflet-interactive"), this._updateStyle(t), this._layers[a(t)] = t
				},
				_addPath: function (t) {
					this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
				},
				_removePath: function (t) {
					Pe(t._path), t.removeInteractiveTarget(t._path), delete this._layers[a(t)]
				},
				_updatePath: function (t) {
					t._project(), t._update()
				},
				_updateStyle: function (t) {
					var e = t._path,
						n = t.options;
					e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
				},
				_updatePoly: function (t, e) {
					this._setPath(t, J(t._parts, e))
				},
				_updateCircle: function (t) {
					var e = t._point,
						n = Math.max(Math.round(t._radius), 1),
						i = Math.max(Math.round(t._radiusY), 1) || n,
						o = "a" + n + "," + i + " 0 1,0 ",
						r = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + o + 2 * n + ",0 " + o + 2 * -n + ",0 ";
					this._setPath(t, r)
				},
				_setPath: function (t, e) {
					t._path.setAttribute("d", e)
				},
				_bringToFront: function (t) {
					Te(t._path)
				},
				_bringToBack: function (t) {
					Me(t._path)
				}
			});

		function hi(t) {
			return Tt || Mt ? new ci(t) : null
		}
		Mt && ci.include(si), qe.include({
			getRenderer: function (t) {
				var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
				return e || (e = this._renderer = this.options.preferCanvas && ri() || hi()), this.hasLayer(e) || this.addLayer(e), e
			},
			_getPaneRenderer: function (t) {
				if ("overlayPane" === t || void 0 === t) return !1;
				var e = this._paneRenderers[t];
				return void 0 === e && (e = ci && hi({
					pane: t
				}) || oi && ri({
					pane: t
				}), this._paneRenderers[t] = e), e
			}
		});
		var ui = Dn.extend({
			initialize: function (t, e) {
				Dn.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
			},
			setBounds: function (t) {
				return this.setLatLngs(this._boundsToLatLngs(t))
			},
			_boundsToLatLngs: function (t) {
				return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
			}
		});
		ci.create = li, ci.pointsToPath = J, Zn.geometryToLayer = Bn, Zn.coordsToLatLng = Nn, Zn.coordsToLatLngs = jn, Zn.latLngToCoords = Rn, Zn.latLngsToCoords = Un, Zn.getFeature = Wn, Zn.asFeature = Hn, qe.mergeOptions({
			boxZoom: !0
		});
		var di = $e.extend({
			initialize: function (t) {
				this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
			},
			addHooks: function () {
				Yt(this._container, "mousedown", this._onMouseDown, this)
			},
			removeHooks: function () {
				Xt(this._container, "mousedown", this._onMouseDown, this)
			},
			moved: function () {
				return this._moved
			},
			_destroy: function () {
				Pe(this._pane), delete this._pane
			},
			_resetState: function () {
				this._resetStateTimeout = 0, this._moved = !1
			},
			_clearDeferredResetState: function () {
				0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
			},
			_onMouseDown: function (t) {
				if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
				this._clearDeferredResetState(), this._resetState(), pe(), Re(), this._startPoint = this._map.mouseEventToContainerPoint(t), Yt(document, {
					contextmenu: oe,
					mousemove: this._onMouseMove,
					mouseup: this._onMouseUp,
					keydown: this._onKeyDown
				}, this)
			},
			_onMouseMove: function (t) {
				this._moved || (this._moved = !0, this._box = ke("div", "leaflet-zoom-box", this._container), Ee(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
				var e = new D(this._point, this._startPoint),
					n = e.getSize();
				Be(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px"
			},
			_finish: function () {
				this._moved && (Pe(this._box), Se(this._container, "leaflet-crosshair")), fe(), Ue(), Xt(document, {
					contextmenu: oe,
					mousemove: this._onMouseMove,
					mouseup: this._onMouseUp,
					keydown: this._onKeyDown
				}, this)
			},
			_onMouseUp: function (t) {
				if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
					this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
					var e = new B(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
					this._map.fitBounds(e).fire("boxzoomend", {
						boxZoomBounds: e
					})
				}
			},
			_onKeyDown: function (t) {
				27 === t.keyCode && this._finish()
			}
		});
		qe.addInitHook("addHandler", "boxZoom", di), qe.mergeOptions({
			doubleClickZoom: !0
		});
		var pi = $e.extend({
			addHooks: function () {
				this._map.on("dblclick", this._onDoubleClick, this)
			},
			removeHooks: function () {
				this._map.off("dblclick", this._onDoubleClick, this)
			},
			_onDoubleClick: function (t) {
				var e = this._map,
					n = e.getZoom(),
					i = e.options.zoomDelta,
					o = t.originalEvent.shiftKey ? n - i : n + i;
				"center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
			}
		});
		qe.addInitHook("addHandler", "doubleClickZoom", pi), qe.mergeOptions({
			dragging: !0,
			inertia: !it,
			inertiaDeceleration: 3400,
			inertiaMaxSpeed: 1 / 0,
			easeLinearity: .2,
			worldCopyJump: !1,
			maxBoundsViscosity: 0
		});
		var fi = $e.extend({
			addHooks: function () {
				if (!this._draggable) {
					var t = this._map;
					this._draggable = new an(t._mapPane, t._container), this._draggable.on({
						dragstart: this._onDragStart,
						drag: this._onDrag,
						dragend: this._onDragEnd
					}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
				}
				Ee(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
			},
			removeHooks: function () {
				Se(this._map._container, "leaflet-grab"), Se(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
			},
			moved: function () {
				return this._draggable && this._draggable._moved
			},
			moving: function () {
				return this._draggable && this._draggable._moving
			},
			_onDragStart: function () {
				var t = this._map;
				if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
					var e = N(this._map.options.maxBounds);
					this._offsetLimit = Z(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
				} else this._offsetLimit = null;
				t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
			},
			_onDrag: function (t) {
				if (this._map.options.inertia) {
					var e = this._lastTime = +new Date,
						n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
					this._positions.push(n), this._times.push(e), this._prunePositions(e)
				}
				this._map.fire("move", t).fire("drag", t)
			},
			_prunePositions: function (t) {
				for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
			},
			_onZoomEnd: function () {
				var t = this._map.getSize().divideBy(2),
					e = this._map.latLngToLayerPoint([0, 0]);
				this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
			},
			_viscousLimit: function (t, e) {
				return t - (t - e) * this._viscosity
			},
			_onPreDragLimit: function () {
				if (this._viscosity && this._offsetLimit) {
					var t = this._draggable._newPos.subtract(this._draggable._startPos),
						e = this._offsetLimit;
					t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
				}
			},
			_onPreDragWrap: function () {
				var t = this._worldWidth,
					e = Math.round(t / 2),
					n = this._initialWorldOffset,
					i = this._draggable._newPos.x,
					o = (i - e + n) % t + e - n,
					r = (i + e + n) % t - e - n,
					a = Math.abs(o + n) < Math.abs(r + n) ? o : r;
				this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
			},
			_onDragEnd: function (t) {
				var e = this._map,
					n = e.options,
					i = !n.inertia || this._times.length < 2;
				if (e.fire("dragend", t), i) e.fire("moveend");
				else {
					this._prunePositions(+new Date);
					var o = this._lastPos.subtract(this._positions[0]),
						r = (this._lastTime - this._times[0]) / 1e3,
						a = n.easeLinearity,
						s = o.multiplyBy(a / r),
						l = s.distanceTo([0, 0]),
						c = Math.min(n.inertiaMaxSpeed, l),
						h = s.multiplyBy(c / l),
						u = c / (n.inertiaDeceleration * a),
						d = h.multiplyBy(-u / 2).round();
					d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), z(function () {
						e.panBy(d, {
							duration: u,
							easeLinearity: a,
							noMoveStart: !0,
							animate: !0
						})
					})) : e.fire("moveend")
				}
			}
		});
		qe.addInitHook("addHandler", "dragging", fi), qe.mergeOptions({
			keyboard: !0,
			keyboardPanDelta: 80
		});
		var mi = $e.extend({
			keyCodes: {
				left: [37],
				right: [39],
				down: [40],
				up: [38],
				zoomIn: [187, 107, 61, 171],
				zoomOut: [189, 109, 54, 173]
			},
			initialize: function (t) {
				this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
			},
			addHooks: function () {
				var t = this._map._container;
				t.tabIndex <= 0 && (t.tabIndex = "0"), Yt(t, {
					focus: this._onFocus,
					blur: this._onBlur,
					mousedown: this._onMouseDown
				}, this), this._map.on({
					focus: this._addHooks,
					blur: this._removeHooks
				}, this)
			},
			removeHooks: function () {
				this._removeHooks(), Xt(this._map._container, {
					focus: this._onFocus,
					blur: this._onBlur,
					mousedown: this._onMouseDown
				}, this), this._map.off({
					focus: this._addHooks,
					blur: this._removeHooks
				}, this)
			},
			_onMouseDown: function () {
				if (!this._focused) {
					var t = document.body,
						e = document.documentElement,
						n = t.scrollTop || e.scrollTop,
						i = t.scrollLeft || e.scrollLeft;
					this._map._container.focus(), window.scrollTo(i, n)
				}
			},
			_onFocus: function () {
				this._focused = !0, this._map.fire("focus")
			},
			_onBlur: function () {
				this._focused = !1, this._map.fire("blur")
			},
			_setPanDelta: function (t) {
				var e, n, i = this._panKeys = {},
					o = this.keyCodes;
				for (e = 0, n = o.left.length; e < n; e++) i[o.left[e]] = [-1 * t, 0];
				for (e = 0, n = o.right.length; e < n; e++) i[o.right[e]] = [t, 0];
				for (e = 0, n = o.down.length; e < n; e++) i[o.down[e]] = [0, t];
				for (e = 0, n = o.up.length; e < n; e++) i[o.up[e]] = [0, -1 * t]
			},
			_setZoomDelta: function (t) {
				var e, n, i = this._zoomKeys = {},
					o = this.keyCodes;
				for (e = 0, n = o.zoomIn.length; e < n; e++) i[o.zoomIn[e]] = t;
				for (e = 0, n = o.zoomOut.length; e < n; e++) i[o.zoomOut[e]] = -t
			},
			_addHooks: function () {
				Yt(document, "keydown", this._onKeyDown, this)
			},
			_removeHooks: function () {
				Xt(document, "keydown", this._onKeyDown, this)
			},
			_onKeyDown: function (t) {
				if (!(t.altKey || t.ctrlKey || t.metaKey)) {
					var e, n = t.keyCode,
						i = this._map;
					if (n in this._panKeys) {
						if (i._panAnim && i._panAnim._inProgress) return;
						e = this._panKeys[n], t.shiftKey && (e = I(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
					} else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
					else {
						if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
						i.closePopup()
					}
					oe(t)
				}
			}
		});
		qe.addInitHook("addHandler", "keyboard", mi), qe.mergeOptions({
			scrollWheelZoom: !0,
			wheelDebounceTime: 40,
			wheelPxPerZoomLevel: 60
		});
		var _i = $e.extend({
			addHooks: function () {
				Yt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
			},
			removeHooks: function () {
				Xt(this._map._container, "mousewheel", this._onWheelScroll, this)
			},
			_onWheelScroll: function (t) {
				var e = se(t),
					n = this._map.options.wheelDebounceTime;
				this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
				var i = Math.max(n - (+new Date - this._startTime), 0);
				clearTimeout(this._timer), this._timer = setTimeout(o(this._performZoom, this), i), oe(t)
			},
			_performZoom: function () {
				var t = this._map,
					e = t.getZoom(),
					n = this._map.options.zoomSnap || 0;
				t._stop();
				var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
					o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(i)))) / Math.LN2,
					r = n ? Math.ceil(o / n) * n : o,
					a = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
				this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) : t.setZoomAround(this._lastMousePos, e + a))
			}
		});
		qe.addInitHook("addHandler", "scrollWheelZoom", _i), qe.mergeOptions({
			tap: !0,
			tapTolerance: 15
		});
		var gi = $e.extend({
			addHooks: function () {
				Yt(this._map._container, "touchstart", this._onDown, this)
			},
			removeHooks: function () {
				Xt(this._map._container, "touchstart", this._onDown, this)
			},
			_onDown: function (t) {
				if (t.touches) {
					if (ie(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
					var e = t.touches[0],
						n = e.target;
					this._startPos = this._newPos = new A(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Ee(n, "leaflet-active"), this._holdTimeout = setTimeout(o(function () {
						this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
					}, this), 1e3), this._simulateEvent("mousedown", e), Yt(document, {
						touchmove: this._onMove,
						touchend: this._onUp
					}, this)
				}
			},
			_onUp: function (t) {
				if (clearTimeout(this._holdTimeout), Xt(document, {
						touchmove: this._onMove,
						touchend: this._onUp
					}, this), this._fireClick && t && t.changedTouches) {
					var e = t.changedTouches[0],
						n = e.target;
					n && n.tagName && "a" === n.tagName.toLowerCase() && Se(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
				}
			},
			_isTapValid: function () {
				return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
			},
			_onMove: function (t) {
				var e = t.touches[0];
				this._newPos = new A(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
			},
			_simulateEvent: function (t, e) {
				var n = document.createEvent("MouseEvents");
				n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
			}
		});
		wt && !xt && qe.addInitHook("addHandler", "tap", gi), qe.mergeOptions({
			touchZoom: wt && !it,
			bounceAtZoomLimits: !0
		});
		var vi = $e.extend({
			addHooks: function () {
				Ee(this._map._container, "leaflet-touch-zoom"), Yt(this._map._container, "touchstart", this._onTouchStart, this)
			},
			removeHooks: function () {
				Se(this._map._container, "leaflet-touch-zoom"), Xt(this._map._container, "touchstart", this._onTouchStart, this)
			},
			_onTouchStart: function (t) {
				var e = this._map;
				if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
					var n = e.mouseEventToContainerPoint(t.touches[0]),
						i = e.mouseEventToContainerPoint(t.touches[1]);
					this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Yt(document, "touchmove", this._onTouchMove, this), Yt(document, "touchend", this._onTouchEnd, this), ie(t)
				}
			},
			_onTouchMove: function (t) {
				if (t.touches && 2 === t.touches.length && this._zooming) {
					var e = this._map,
						n = e.mouseEventToContainerPoint(t.touches[0]),
						i = e.mouseEventToContainerPoint(t.touches[1]),
						r = n.distanceTo(i) / this._startDist;
					if (this._zoom = e.getScaleZoom(r, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && r < 1 || this._zoom > e.getMaxZoom() && r > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
						if (this._center = this._startLatLng, 1 === r) return
					} else {
						var a = n._add(i)._divideBy(2)._subtract(this._centerPoint);
						if (1 === r && 0 === a.x && 0 === a.y) return;
						this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
					}
					this._moved || (e._moveStart(!0, !1), this._moved = !0), T(this._animRequest);
					var s = o(e._move, e, this._center, this._zoom, {
						pinch: !0,
						round: !1
					});
					this._animRequest = z(s, this, !0), ie(t)
				}
			},
			_onTouchEnd: function () {
				this._moved && this._zooming ? (this._zooming = !1, T(this._animRequest), Xt(document, "touchmove", this._onTouchMove), Xt(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
			}
		});
		qe.addInitHook("addHandler", "touchZoom", vi), qe.BoxZoom = di, qe.DoubleClickZoom = pi, qe.Drag = fi, qe.Keyboard = mi, qe.ScrollWheelZoom = _i, qe.Tap = gi, qe.TouchZoom = vi;
		var yi = window.L;
		window.L = t, Object.freeze = e, t.version = "1.3.1", t.noConflict = function () {
			return window.L = yi, this
		}, t.Control = Ge, t.control = Ke, t.Browser = Et, t.Evented = S, t.Mixin = en, t.Util = M, t.Class = C, t.Handler = $e, t.extend = n, t.bind = o, t.stamp = a, t.setOptions = p, t.DomEvent = ve, t.DomUtil = Fe, t.PosAnimation = Ve, t.Draggable = an, t.LineUtil = mn, t.PolyUtil = gn, t.Point = A, t.point = I, t.Bounds = D, t.bounds = Z, t.Transformation = V, t.transformation = q, t.Projection = bn, t.LatLng = j, t.latLng = R, t.LatLngBounds = B, t.latLngBounds = N, t.CRS = W, t.GeoJSON = Zn, t.geoJSON = Vn, t.geoJson = qn, t.Layer = kn, t.LayerGroup = Pn, t.layerGroup = function (t, e) {
			return new Pn(t, e)
		}, t.FeatureGroup = zn, t.featureGroup = function (t) {
			return new zn(t)
		}, t.ImageOverlay = Gn, t.imageOverlay = function (t, e, n) {
			return new Gn(t, e, n)
		}, t.VideoOverlay = Kn, t.videoOverlay = function (t, e, n) {
			return new Kn(t, e, n)
		}, t.DivOverlay = Yn, t.Popup = Jn, t.popup = function (t, e) {
			return new Jn(t, e)
		}, t.Tooltip = Xn, t.tooltip = function (t, e) {
			return new Xn(t, e)
		}, t.Icon = Tn, t.icon = function (t) {
			return new Tn(t)
		}, t.DivIcon = Qn, t.divIcon = function (t) {
			return new Qn(t)
		}, t.Marker = En, t.marker = function (t, e) {
			return new En(t, e)
		}, t.TileLayer = ti, t.tileLayer = ei, t.GridLayer = $n, t.gridLayer = function (t) {
			return new $n(t)
		}, t.SVG = ci, t.svg = hi, t.Renderer = ii, t.Canvas = oi, t.canvas = ri, t.Path = Sn, t.CircleMarker = An, t.circleMarker = function (t, e) {
			return new An(t, e)
		}, t.Circle = On, t.circle = function (t, e, n) {
			return new On(t, e, n)
		}, t.Polyline = In, t.polyline = function (t, e) {
			return new In(t, e)
		}, t.Polygon = Dn, t.polygon = function (t, e) {
			return new Dn(t, e)
		}, t.Rectangle = ui, t.rectangle = function (t, e) {
			return new ui(t, e)
		}, t.Map = qe, t.map = function (t, e) {
			return new qe(t, e)
		}
	}(e)
}, function (t, e, n) {
	(function (e, n) {
		/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   v4.2.8+1e68dce6
		 */
		var i;
		i = function () {
			"use strict";

			function t(t) {
				return "function" == typeof t
			}
			var i = Array.isArray ? Array.isArray : function (t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				},
				o = 0,
				r = void 0,
				a = void 0,
				s = function (t, e) {
					f[o] = t, f[o + 1] = e, 2 === (o += 2) && (a ? a(m) : b())
				};
			var l = "undefined" != typeof window ? window : void 0,
				c = l || {},
				h = c.MutationObserver || c.WebKitMutationObserver,
				u = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
				d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

			function p() {
				var t = setTimeout;
				return function () {
					return t(m, 1)
				}
			}
			var f = new Array(1e3);

			function m() {
				for (var t = 0; t < o; t += 2) {
					(0, f[t])(f[t + 1]), f[t] = void 0, f[t + 1] = void 0
				}
				o = 0
			}
			var _, g, v, y, b = void 0;

			function x(t, e) {
				var n = this,
					i = new this.constructor(k);
				void 0 === i[L] && B(i);
				var o = n._state;
				if (o) {
					var r = arguments[o - 1];
					s(function () {
						return D(o, i, r, n._result)
					})
				} else O(n, i, t, e);
				return i
			}

			function w(t) {
				if (t && "object" == typeof t && t.constructor === this) return t;
				var e = new this(k);
				return C(e, t), e
			}
			u ? b = function () {
				return e.nextTick(m)
			} : h ? (g = 0, v = new h(m), y = document.createTextNode(""), v.observe(y, {
				characterData: !0
			}), b = function () {
				y.data = g = ++g % 2
			}) : d ? ((_ = new MessageChannel).port1.onmessage = m, b = function () {
				return _.port2.postMessage(0)
			}) : b = void 0 === l ? function () {
				try {
					var t = Function("return this")().require("vertx");
					return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function () {
						r(m)
					} : p()
				} catch (t) {
					return p()
				}
			}() : p();
			var L = Math.random().toString(36).substring(2);

			function k() {}
			var P = void 0,
				z = 1,
				T = 2;

			function M(e, n, i) {
				n.constructor === e.constructor && i === x && n.constructor.resolve === w ? function (t, e) {
					e._state === z ? S(t, e._result) : e._state === T ? A(t, e._result) : O(e, void 0, function (e) {
						return C(t, e)
					}, function (e) {
						return A(t, e)
					})
				}(e, n) : void 0 === i ? S(e, n) : t(i) ? function (t, e, n) {
					s(function (t) {
						var i = !1,
							o = function (t, e, n, i) {
								try {
									t.call(e, n, i)
								} catch (t) {
									return t
								}
							}(n, e, function (n) {
								i || (i = !0, e !== n ? C(t, n) : S(t, n))
							}, function (e) {
								i || (i = !0, A(t, e))
							}, t._label);
						!i && o && (i = !0, A(t, o))
					}, t)
				}(e, n, i) : S(e, n)
			}

			function C(t, e) {
				if (t === e) A(t, new TypeError("You cannot resolve a promise with itself"));
				else if (o = typeof (i = e), null === i || "object" !== o && "function" !== o) S(t, e);
				else {
					var n = void 0;
					try {
						n = e.then
					} catch (e) {
						return void A(t, e)
					}
					M(t, e, n)
				}
				var i, o
			}

			function E(t) {
				t._onerror && t._onerror(t._result), I(t)
			}

			function S(t, e) {
				t._state === P && (t._result = e, t._state = z, 0 !== t._subscribers.length && s(I, t))
			}

			function A(t, e) {
				t._state === P && (t._state = T, t._result = e, s(E, t))
			}

			function O(t, e, n, i) {
				var o = t._subscribers,
					r = o.length;
				t._onerror = null, o[r] = e, o[r + z] = n, o[r + T] = i, 0 === r && t._state && s(I, t)
			}

			function I(t) {
				var e = t._subscribers,
					n = t._state;
				if (0 !== e.length) {
					for (var i = void 0, o = void 0, r = t._result, a = 0; a < e.length; a += 3) i = e[a], o = e[a + n], i ? D(n, i, o, r) : o(r);
					t._subscribers.length = 0
				}
			}

			function D(e, n, i, o) {
				var r = t(i),
					a = void 0,
					s = void 0,
					l = !0;
				if (r) {
					try {
						a = i(o)
					} catch (t) {
						l = !1, s = t
					}
					if (n === a) return void A(n, new TypeError("A promises callback cannot return that same promise."))
				} else a = o;
				n._state !== P || (r && l ? C(n, a) : !1 === l ? A(n, s) : e === z ? S(n, a) : e === T && A(n, a))
			}
			var Z = 0;

			function B(t) {
				t[L] = Z++, t._state = void 0, t._result = void 0, t._subscribers = []
			}
			var N = function () {
				function t(t, e) {
					this._instanceConstructor = t, this.promise = new t(k), this.promise[L] || B(this.promise), i(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && S(this.promise, this._result))) : A(this.promise, new Error("Array Methods must be provided an Array"))
				}
				return t.prototype._enumerate = function (t) {
					for (var e = 0; this._state === P && e < t.length; e++) this._eachEntry(t[e], e)
				}, t.prototype._eachEntry = function (t, e) {
					var n = this._instanceConstructor,
						i = n.resolve;
					if (i === w) {
						var o = void 0,
							r = void 0,
							a = !1;
						try {
							o = t.then
						} catch (t) {
							a = !0, r = t
						}
						if (o === x && t._state !== P) this._settledAt(t._state, e, t._result);
						else if ("function" != typeof o) this._remaining--, this._result[e] = t;
						else if (n === j) {
							var s = new n(k);
							a ? A(s, r) : M(s, t, o), this._willSettleAt(s, e)
						} else this._willSettleAt(new n(function (e) {
							return e(t)
						}), e)
					} else this._willSettleAt(i(t), e)
				}, t.prototype._settledAt = function (t, e, n) {
					var i = this.promise;
					i._state === P && (this._remaining--, t === T ? A(i, n) : this._result[e] = n), 0 === this._remaining && S(i, this._result)
				}, t.prototype._willSettleAt = function (t, e) {
					var n = this;
					O(t, void 0, function (t) {
						return n._settledAt(z, e, t)
					}, function (t) {
						return n._settledAt(T, e, t)
					})
				}, t
			}();
			var j = function () {
				function e(t) {
					this[L] = Z++, this._result = this._state = void 0, this._subscribers = [], k !== t && ("function" != typeof t && function () {
						throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
					}(), this instanceof e ? function (t, e) {
						try {
							e(function (e) {
								C(t, e)
							}, function (e) {
								A(t, e)
							})
						} catch (e) {
							A(t, e)
						}
					}(this, t) : function () {
						throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
					}())
				}
				return e.prototype.catch = function (t) {
					return this.then(null, t)
				}, e.prototype.finally = function (e) {
					var n = this.constructor;
					return t(e) ? this.then(function (t) {
						return n.resolve(e()).then(function () {
							return t
						})
					}, function (t) {
						return n.resolve(e()).then(function () {
							throw t
						})
					}) : this.then(e, e)
				}, e
			}();
			return j.prototype.then = x, j.all = function (t) {
				return new N(this, t).promise
			}, j.race = function (t) {
				var e = this;
				return i(t) ? new e(function (n, i) {
					for (var o = t.length, r = 0; r < o; r++) e.resolve(t[r]).then(n, i)
				}) : new e(function (t, e) {
					return e(new TypeError("You must pass an array to race."))
				})
			}, j.resolve = w, j.reject = function (t) {
				var e = new this(k);
				return A(e, t), e
			}, j._setScheduler = function (t) {
				a = t
			}, j._setAsap = function (t) {
				s = t
			}, j._asap = s, j.polyfill = function () {
				var t = void 0;
				if (void 0 !== n) t = n;
				else if ("undefined" != typeof self) t = self;
				else try {
					t = Function("return this")()
				} catch (t) {
					throw new Error("polyfill failed because global object is unavailable in this environment")
				}
				var e = t.Promise;
				if (e) {
					var i = null;
					try {
						i = Object.prototype.toString.call(e.resolve())
					} catch (t) {}
					if ("[object Promise]" === i && !e.cast) return
				}
				t.Promise = j
			}, j.Promise = j, j
		}, t.exports = i()
	}).call(this, n(38), n(37))
}, function (t, e) {
	t.exports = function (t) {
		var e = [];
		return e.toString = function () {
			return this.map(function (e) {
				var n = function (t, e) {
					var n = t[1] || "",
						i = t[3];
					if (!i) return n;
					if (e && "function" == typeof btoa) {
						var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
							r = i.sources.map(function (t) {
								return "/*# sourceURL=" + i.sourceRoot + t + " */"
							});
						return [n].concat(r).concat([o]).join("\n")
					}
					var a;
					return [n].join("\n")
				}(e, t);
				return e[2] ? "@media " + e[2] + "{" + n + "}" : n
			}).join("")
		}, e.i = function (t, n) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var i = {}, o = 0; o < this.length; o++) {
				var r = this[o][0];
				"number" == typeof r && (i[r] = !0)
			}
			for (o = 0; o < t.length; o++) {
				var a = t[o];
				"number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
			}
		}, e
	}
}, function (t, e, n) {
	var i;
	void 0 === (i = function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function () {
			function t() {
				this.markers = {}, this.visible = !1
			}
			return t.create = function () {
				return new t
			}, t.prototype.addMarker = function (t) {
				this.markers[t.id] = t
			}, t.prototype.removeMarker = function (t) {
				delete this.markers[t.id]
			}, t.prototype.clear = function () {
				for (var t = Object.keys(this.markers), e = 0; e < t.length; ++e) {
					var n = this.markers[t[e]];
					n.clearCompletion(), this.removeMarker(n)
				}
			}, t.prototype.show = function () {
				var t = this;
				this.visible = !0, Object.keys(this.markers).forEach(function (e) {
					return t.markers[e].updateVisibility()
				})
			}, t.prototype.hide = function () {
				var t = this;
				this.visible = !1, Object.keys(this.markers).forEach(function (e) {
					return t.markers[e].updateVisibility()
				})
			}, t.prototype.isVisible = function () {
				return this.visible
			}, t.prototype.getMarker = function (t) {
				return this.markers[t]
			}, t.prototype.findMarkers = function (t) {
				var e = this;
				return Object.keys(this.markers).map(function (t) {
					return e.markers[t]
				}).filter(function (e) {
					return t.test(e.name)
				})
			}, t
		}();
		e.MarkerContainer = n
	}.apply(e, [n, e])) || (t.exports = i)
}, function (t, e, n) {
	var i, o, r = {},
		a = (i = function () {
			return window && document && document.all && !window.atob
		}, function () {
			return void 0 === o && (o = i.apply(this, arguments)), o
		}),
		s = function (t) {
			var e = {};
			return function (t) {
				if ("function" == typeof t) return t();
				if (void 0 === e[t]) {
					var n = function (t) {
						return document.querySelector(t)
					}.call(this, t);
					if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
						n = n.contentDocument.head
					} catch (t) {
						n = null
					}
					e[t] = n
				}
				return e[t]
			}
		}(),
		l = null,
		c = 0,
		h = [],
		u = n(20);

	function d(t, e) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n],
				o = r[i.id];
			if (o) {
				o.refs++;
				for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
				for (; a < i.parts.length; a++) o.parts.push(v(i.parts[a], e))
			} else {
				var s = [];
				for (a = 0; a < i.parts.length; a++) s.push(v(i.parts[a], e));
				r[i.id] = {
					id: i.id,
					refs: 1,
					parts: s
				}
			}
		}
	}

	function p(t, e) {
		for (var n = [], i = {}, o = 0; o < t.length; o++) {
			var r = t[o],
				a = e.base ? r[0] + e.base : r[0],
				s = {
					css: r[1],
					media: r[2],
					sourceMap: r[3]
				};
			i[a] ? i[a].parts.push(s) : n.push(i[a] = {
				id: a,
				parts: [s]
			})
		}
		return n
	}

	function f(t, e) {
		var n = s(t.insertInto);
		if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var i = h[h.length - 1];
		if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), h.push(e);
		else if ("bottom" === t.insertAt) n.appendChild(e);
		else {
			if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
			var o = s(t.insertInto + " " + t.insertAt.before);
			n.insertBefore(e, o)
		}
	}

	function m(t) {
		if (null === t.parentNode) return !1;
		t.parentNode.removeChild(t);
		var e = h.indexOf(t);
		e >= 0 && h.splice(e, 1)
	}

	function _(t) {
		var e = document.createElement("style");
		return void 0 === t.attrs.type && (t.attrs.type = "text/css"), g(e, t.attrs), f(t, e), e
	}

	function g(t, e) {
		Object.keys(e).forEach(function (n) {
			t.setAttribute(n, e[n])
		})
	}

	function v(t, e) {
		var n, i, o, r;
		if (e.transform && t.css) {
			if (!(r = e.transform(t.css)))
				return function () {};
			t.css = r
		}
		if (e.singleton) {
			var a = c++;
			n = l || (l = _(e)), i = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0)
		} else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
			var e = document.createElement("link");
			return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", g(e, t.attrs), f(t, e), e
		}(e), i = function (t, e, n) {
			var i = n.css,
				o = n.sourceMap,
				r = void 0 === e.convertToAbsoluteUrls && o;
			(e.convertToAbsoluteUrls || r) && (i = u(i));
			o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
			var a = new Blob([i], {
					type: "text/css"
				}),
				s = t.href;
			t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
		}.bind(null, n, e), o = function () {
			m(n), n.href && URL.revokeObjectURL(n.href)
		}) : (n = _(e), i = function (t, e) {
			var n = e.css,
				i = e.media;
			i && t.setAttribute("media", i);
			if (t.styleSheet) t.styleSheet.cssText = n;
			else {
				for (; t.firstChild;) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(n))
			}
		}.bind(null, n), o = function () {
			m(n)
		});
		return i(t),
			function (e) {
				if (e) {
					if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
					i(t = e)
				} else o()
			}
	}
	t.exports = function (t, e) {
		if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
		(e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
		var n = p(t, e);
		return d(n, e),
			function (t) {
				for (var i = [], o = 0; o < n.length; o++) {
					var a = n[o];
					(s = r[a.id]).refs--, i.push(s)
				}
				t && d(p(t, e), e);
				for (o = 0; o < i.length; o++) {
					var s;
					if (0 === (s = i[o]).refs) {
						for (var l = 0; l < s.parts.length; l++) s.parts[l]();
						delete r[s.id]
					}
				}
			}
	};
	var y, b = (y = [], function (t, e) {
		return y[t] = e, y.filter(Boolean).join("\n")
	});

	function x(t, e, n, i) {
		var o = n ? "" : i.css;
		if (t.styleSheet) t.styleSheet.cssText = b(e, o);
		else {
			var r = document.createTextNode(o),
				a = t.childNodes;
			a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r)
		}
	}
}, function (t, e, n) {
	var i;
	void 0 === (i = function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function () {
			function t(t) {
				this.key = t;
				var e = localStorage.getItem(t);
				this.data = e ? JSON.parse(e) : {}
			}
			return t.getStore = function (e, n) {
				var i = "maps-" + e + "-" + n;
				return t.instances[i] || (t.instances[i] = new t(i)), t.instances[i]
			}, t.getLegacyItem = function (t) {
				var e = localStorage.getItem(t);
				return e ? JSON.parse(e) : void 0
			}, t.prototype.getAllKeys = function () {
				return Object.keys(this.data)
			}, t.prototype.getItem = function (t) {
				return this.data[t]
			}, t.prototype.setItem = function (t, e) {
				this.data[t] = e, this.save()
			}, t.prototype.clear = function () {
				this.data = {}, this.save()
			}, t.prototype.save = function () {
				localStorage.setItem(this.key, JSON.stringify(this.data))
			}, t.instances = {}, t
		}();
		e.LocalStorage = n
	}.apply(e, [n, e])) || (t.exports = i)
}, function (t, e, n) {
	"use strict";
	n.r(e), n.d(e, "icon", function () {
		return le
	}), n.d(e, "noAuto", function () {
		return oe
	}), n.d(e, "config", function () {
		return I
	}), n.d(e, "toHtml", function () {
		return bt
	}), n.d(e, "layer", function () {
		return ue
	}), n.d(e, "text", function () {
		return ce
	}), n.d(e, "counter", function () {
		return he
	}), n.d(e, "library", function () {
		return ie
	}), n.d(e, "dom", function () {
		return ae
	}), n.d(e, "parse", function () {
		return se
	}), n.d(e, "findIconDefinition", function () {
		return ee
	});
	/*!
	 * Font Awesome Free 5.1.0-8 by @fontawesome - https://fontawesome.com
	 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	 */
	var i = function () {},
		o = {},
		r = {},
		a = null,
		s = {
			mark: i,
			measure: i
		};
	try {
		"undefined" != typeof window && (o = window), "undefined" != typeof document && (r = document), "undefined" != typeof MutationObserver && (a = MutationObserver), "undefined" != typeof performance && (s = performance)
	} catch (t) {}
	var l = (o.navigator || {}).userAgent,
		c = void 0 === l ? "" : l,
		h = o,
		u = r,
		d = a,
		p = s,
		f = !!u.documentElement && !!u.head && "function" == typeof u.addEventListener && "function" == typeof u.createElement,
		m = ~c.indexOf("MSIE") || ~c.indexOf("Trident/"),
		_ = 16,
		g = "data-fa-i2svg",
		v = "data-fa-pseudo-element",
		y = "data-prefix",
		b = "data-icon",
		x = "fontawesome-i2svg",
		w = ["HTML", "HEAD", "STYLE", "SCRIPT"],
		L = function () {
			try {
				return !0
			} catch (t) {
				return !1
			}
		}(),
		k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		P = k.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
		z = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
		T = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter"].concat(k.map(function (t) {
			return t + "x"
		})).concat(P.map(function (t) {
			return "w-" + t
		})),
		M = function (t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		},
		C = function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function (e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		E = Object.assign || function (t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
			}
			return t
		},
		S = function (t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n
			}
			return Array.from(t)
		},
		A = h.FontAwesomeConfig || {},
		O = E({
			familyPrefix: "fa",
			replacementClass: "svg-inline--fa",
			autoReplaceSvg: !0,
			autoAddCss: !0,
			autoA11y: !0,
			searchPseudoElements: !1,
			observeMutations: !0,
			keepOriginalSource: !0,
			measurePerformance: !1,
			showMissingIcons: !0
		}, A);
	O.autoReplaceSvg || (O.observeMutations = !1);
	var I = E({}, O);
	h.FontAwesomeConfig = I;
	var D = h || {};
	D.___FONT_AWESOME___ || (D.___FONT_AWESOME___ = {}), D.___FONT_AWESOME___.styles || (D.___FONT_AWESOME___.styles = {}), D.___FONT_AWESOME___.hooks || (D.___FONT_AWESOME___.hooks = {}), D.___FONT_AWESOME___.shims || (D.___FONT_AWESOME___.shims = []);
	var Z = D.___FONT_AWESOME___,
		B = [],
		N = !1;
	f && ((N = (u.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(u.readyState)) || u.addEventListener("DOMContentLoaded", function t() {
		u.removeEventListener("DOMContentLoaded", t), N = 1, B.map(function (t) {
			return t()
		})
	}));
	var j = _,
		R = {
			size: 16,
			x: 0,
			y: 0,
			rotate: 0,
			flipX: !1,
			flipY: !1
		};

	function U(t) {
		if (t && f) {
			var e = u.createElement("style");
			e.setAttribute("type", "text/css"), e.innerHTML = t;
			for (var n = u.head.childNodes, i = null, o = n.length - 1; o > -1; o--) {
				var r = n[o],
					a = (r.tagName || "").toUpperCase();
				["STYLE", "LINK"].indexOf(a) > -1 && (i = r)
			}
			return u.head.insertBefore(e, i), t
		}
	}
	var W = 0;

	function H() {
		return ++W
	}

	function F(t) {
		for (var e = [], n = (t || []).length >>> 0; n--;) e[n] = t[n];
		return e
	}

	function V(t) {
		return t.classList ? F(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function (t) {
			return t
		})
	}

	function q(t, e) {
		var n, i = e.split("-"),
			o = i[0],
			r = i.slice(1).join("-");
		return o !== t || "" === r || (n = r, ~T.indexOf(n)) ? null : r
	}

	function G(t) {
		return ("" + t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
	}

	function K(t) {
		return Object.keys(t || {}).reduce(function (e, n) {
			return e + (n + ": ") + t[n] + ";"
		}, "")
	}

	function Y(t) {
		return t.size !== R.size || t.x !== R.x || t.y !== R.y || t.rotate !== R.rotate || t.flipX || t.flipY
	}

	function J(t) {
		var e = t.transform,
			n = t.containerWidth,
			i = t.iconWidth;
		return {
			outer: {
				transform: "translate(" + n / 2 + " 256)"
			},
			inner: {
				transform: "translate(" + 32 * e.x + ", " + 32 * e.y + ") " + " " + ("scale(" + e.size / 16 * (e.flipX ? -1 : 1) + ", " + e.size / 16 * (e.flipY ? -1 : 1) + ") ") + " " + ("rotate(" + e.rotate + " 0 0)")
			},
			path: {
				transform: "translate(" + i / 2 * -1 + " -256)"
			}
		}
	}
	var X = {
			x: 0,
			y: 0,
			width: "100%",
			height: "100%"
		},
		Q = function (t) {
			var e = t.children,
				n = t.attributes,
				i = t.main,
				o = t.mask,
				r = t.transform,
				a = i.width,
				s = i.icon,
				l = o.width,
				c = o.icon,
				h = J({
					transform: r,
					containerWidth: l,
					iconWidth: a
				}),
				u = {
					tag: "rect",
					attributes: E({}, X, {
						fill: "white"
					})
				},
				d = {
					tag: "g",
					attributes: E({}, h.inner),
					children: [{
						tag: "path",
						attributes: E({}, s.attributes, h.path, {
							fill: "black"
						})
					}]
				},
				p = {
					tag: "g",
					attributes: E({}, h.outer),
					children: [d]
				},
				f = "mask-" + H(),
				m = "clip-" + H(),
				_ = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: {
							id: m
						},
						children: [c]
					}, {
						tag: "mask",
						attributes: E({}, X, {
							id: f,
							maskUnits: "userSpaceOnUse",
							maskContentUnits: "userSpaceOnUse"
						}),
						children: [u, p]
					}]
				};
			return e.push(_, {
				tag: "rect",
				attributes: E({
					fill: "currentColor",
					"clip-path": "url(#" + m + ")",
					mask: "url(#" + f + ")"
				}, X)
			}), {
				children: e,
				attributes: n
			}
		},
		$ = function (t) {
			var e = t.children,
				n = t.attributes,
				i = t.main,
				o = t.transform,
				r = K(t.styles);
			if (r.length > 0 && (n.style = r), Y(o)) {
				var a = J({
					transform: o,
					containerWidth: i.width,
					iconWidth: i.width
				});
				e.push({
					tag: "g",
					attributes: E({}, a.outer),
					children: [{
						tag: "g",
						attributes: E({}, a.inner),
						children: [{
							tag: i.icon.tag,
							children: i.icon.children,
							attributes: E({}, i.icon.attributes, a.path)
						}]
					}]
				})
			} else e.push(i.icon);
			return {
				children: e,
				attributes: n
			}
		},
		tt = function (t) {
			var e = t.children,
				n = t.main,
				i = t.mask,
				o = t.attributes,
				r = t.styles,
				a = t.transform;
			if (Y(a) && n.found && !i.found) {
				var s = {
					x: n.width / n.height / 2,
					y: .5
				};
				o.style = K(E({}, r, {
					"transform-origin": s.x + a.x / 16 + "em " + (s.y + a.y / 16) + "em"
				}))
			}
			return [{
				tag: "svg",
				attributes: o,
				children: e
			}]
		},
		et = function (t) {
			var e = t.prefix,
				n = t.iconName,
				i = t.children,
				o = t.attributes,
				r = t.symbol,
				a = !0 === r ? e + "-" + I.familyPrefix + "-" + n : r;
			return [{
				tag: "svg",
				attributes: {
					style: "display: none;"
				},
				children: [{
					tag: "symbol",
					attributes: E({}, o, {
						id: a
					}),
					children: i
				}]
			}]
		};

	function nt(t) {
		var e = t.icons,
			n = e.main,
			i = e.mask,
			o = t.prefix,
			r = t.iconName,
			a = t.transform,
			s = t.symbol,
			l = t.title,
			c = t.extra,
			h = t.watchable,
			u = void 0 !== h && h,
			d = i.found ? i : n,
			p = d.width,
			f = d.height,
			m = "fa-w-" + Math.ceil(p / f * 16),
			_ = [I.replacementClass, r ? I.familyPrefix + "-" + r : "", m].filter(function (t) {
				return -1 === c.classes.indexOf(t)
			}).concat(c.classes).join(" "),
			v = {
				children: [],
				attributes: E({}, c.attributes, {
					"data-prefix": o,
					"data-icon": r,
					class: _,
					role: "img",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 " + p + " " + f
				})
			};
		u && (v.attributes[g] = ""), l && v.children.push({
			tag: "title",
			attributes: {
				id: v.attributes["aria-labelledby"] || "title-" + H()
			},
			children: [l]
		});
		var y = E({}, v, {
				prefix: o,
				iconName: r,
				main: n,
				mask: i,
				transform: a,
				symbol: s,
				styles: c.styles
			}),
			b = i.found && n.found ? Q(y) : $(y),
			x = b.children,
			w = b.attributes;
		return y.children = x, y.attributes = w, s ? et(y) : tt(y)
	}

	function it(t) {
		var e = t.content,
			n = t.width,
			i = t.height,
			o = t.transform,
			r = t.title,
			a = t.extra,
			s = t.watchable,
			l = void 0 !== s && s,
			c = E({}, a.attributes, r ? {
				title: r
			} : {}, {
				class: a.classes.join(" ")
			});
		l && (c[g] = "");
		var h = E({}, a.styles);
		Y(o) && (h.transform = function (t) {
			var e = t.transform,
				n = t.width,
				i = void 0 === n ? _ : n,
				o = t.height,
				r = void 0 === o ? _ : o,
				a = t.startCentered,
				s = void 0 !== a && a,
				l = "";
			return l += s && m ? "translate(" + (e.x / j - i / 2) + "em, " + (e.y / j - r / 2) + "em) " : s ? "translate(calc(-50% + " + e.x / j + "em), calc(-50% + " + e.y / j + "em)) " : "translate(" + e.x / j + "em, " + e.y / j + "em) ", l += "scale(" + e.size / j * (e.flipX ? -1 : 1) + ", " + e.size / j * (e.flipY ? -1 : 1) + ") ", l += "rotate(" + e.rotate + "deg) "
		}({
			transform: o,
			startCentered: !0,
			width: n,
			height: i
		}), h["-webkit-transform"] = h.transform);
		var u = K(h);
		u.length > 0 && (c.style = u);
		var d = [];
		return d.push({
			tag: "span",
			attributes: c,
			children: [e]
		}), r && d.push({
			tag: "span",
			attributes: {
				class: "sr-only"
			},
			children: [r]
		}), d
	}
	var ot = function () {},
		rt = I.measurePerformance && p && p.mark && p.measure ? p : {
			mark: ot,
			measure: ot
		},
		at = 'FA "5.1.0-8"',
		st = function (t) {
			rt.mark(at + " " + t + " ends"), rt.measure(at + " " + t, at + " " + t + " begins", at + " " + t + " ends")
		},
		lt = {
			begin: function (t) {
				return rt.mark(at + " " + t + " begins"),
					function () {
						return st(t)
					}
			},
			end: st
		},
		ct = function (t, e, n, i) {
			var o, r, a, s = Object.keys(t),
				l = s.length,
				c = void 0 !== i ? function (t, e) {
					return function (n, i, o, r) {
						return t.call(e, n, i, o, r)
					}
				}(e, i) : e;
			for (void 0 === n ? (o = 1, a = t[s[0]]) : (o = 0, a = n); o < l; o++) a = c(a, t[r = s[o]], r, t);
			return a
		},
		ht = Z.styles,
		ut = Z.shims,
		dt = {},
		pt = {},
		ft = {};

	function mt(t, e) {
		return dt[t][e]
	}! function () {
		var t = function (t) {
			return ct(ht, function (e, n, i) {
				return e[i] = ct(n, t, {}), e
			}, {})
		};
		dt = t(function (t, e, n) {
			return t[e[3]] = n, t
		}), pt = t(function (t, e, n) {
			var i = e[2];
			return t[n] = n, i.forEach(function (e) {
				t[e] = n
			}), t
		});
		var e = "far" in ht;
		ft = ct(ut, function (t, n) {
			var i = n[0],
				o = n[1],
				r = n[2];
			return "far" !== o || e || (o = "fas"), t[i] = {
				prefix: o,
				iconName: r
			}, t
		}, {})
	}();
	var _t = Z.styles,
		gt = function () {
			return {
				prefix: null,
				iconName: null,
				rest: []
			}
		};

	function vt(t) {
		return t.reduce(function (t, e) {
			var n = q(I.familyPrefix, e);
			if (_t[e]) t.prefix = e;
			else if (n) {
				var i = "fa" === t.prefix ? ft[n] || {
					prefix: null,
					iconName: null
				} : {};
				t.iconName = i.iconName || n, t.prefix = i.prefix || t.prefix
			} else e !== I.replacementClass && 0 !== e.indexOf("fa-w-") && t.rest.push(e);
			return t
		}, gt())
	}

	function yt(t, e, n) {
		if (t && t[e] && t[e][n]) return {
			prefix: e,
			iconName: n,
			icon: t[e][n]
		}
	}

	function bt(t) {
		var e = t.tag,
			n = t.attributes,
			i = void 0 === n ? {} : n,
			o = t.children,
			r = void 0 === o ? [] : o;
		return "string" == typeof t ? G(t) : "<" + e + " " + function (t) {
			return Object.keys(t || {}).reduce(function (e, n) {
				return e + (n + '="') + G(t[n]) + '" '
			}, "").trim()
		}(i) + ">" + r.map(bt).join("") + "</" + e + ">"
	}
	var xt = function () {};

	function wt(t) {
		return "string" == typeof (t.getAttribute ? t.getAttribute(g) : null)
	}
	var Lt = {
		replace: function (t) {
			var e = t[0],
				n = t[1].map(function (t) {
					return bt(t)
				}).join("\n");
			if (e.parentNode && e.outerHTML) e.outerHTML = n + (I.keepOriginalSource && "svg" !== e.tagName.toLowerCase() ? "\x3c!-- " + e.outerHTML + " --\x3e" : "");
			else if (e.parentNode) {
				var i = document.createElement("span");
				e.parentNode.replaceChild(i, e), i.outerHTML = n
			}
		},
		nest: function (t) {
			var e = t[0],
				n = t[1];
			if (~V(e).indexOf(I.replacementClass)) return Lt.replace(t);
			var i = new RegExp(I.familyPrefix + "-.*");
			delete n[0].attributes.style;
			var o = n[0].attributes.class.split(" ").reduce(function (t, e) {
				return e === I.replacementClass || e.match(i) ? t.toSvg.push(e) : t.toNode.push(e), t
			}, {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = o.toSvg.join(" ");
			var r = n.map(function (t) {
				return bt(t)
			}).join("\n");
			e.setAttribute("class", o.toNode.join(" ")), e.setAttribute(g, ""), e.innerHTML = r
		}
	};

	function kt(t, e) {
		var n = "function" == typeof e ? e : xt;
		0 === t.length ? n() : (h.requestAnimationFrame || function (t) {
			return t()
		})(function () {
			var e = !0 === I.autoReplaceSvg ? Lt.replace : Lt[I.autoReplaceSvg] || Lt.replace,
				i = lt.begin("mutate");
			t.map(e), i(), n()
		})
	}
	var Pt = !1;
	var zt = null;
	var Tt = function (t) {
		var e = t.getAttribute("style"),
			n = [];
		return e && (n = e.split(";").reduce(function (t, e) {
			var n = e.split(":"),
				i = n[0],
				o = n.slice(1);
			return i && o.length > 0 && (t[i] = o.join(":").trim()), t
		}, {})), n
	};

	function Mt(t) {
		for (var e = "", n = 0; n < t.length; n++) {
			e += ("000" + t.charCodeAt(n).toString(16)).slice(-4)
		}
		return e
	}
	var Ct = function (t) {
			var e, n, i = t.getAttribute("data-prefix"),
				o = t.getAttribute("data-icon"),
				r = void 0 !== t.innerText ? t.innerText.trim() : "",
				a = vt(V(t));
			return i && o && (a.prefix = i, a.iconName = o), a.prefix && r.length > 1 ? a.iconName = (e = a.prefix, n = t.innerText, pt[e][n]) : a.prefix && 1 === r.length && (a.iconName = mt(a.prefix, Mt(t.innerText))), a
		},
		Et = function (t) {
			var e = {
				size: 16,
				x: 0,
				y: 0,
				flipX: !1,
				flipY: !1,
				rotate: 0
			};
			return t ? t.toLowerCase().split(" ").reduce(function (t, e) {
				var n = e.toLowerCase().split("-"),
					i = n[0],
					o = n.slice(1).join("-");
				if (i && "h" === o) return t.flipX = !0, t;
				if (i && "v" === o) return t.flipY = !0, t;
				if (o = parseFloat(o), isNaN(o)) return t;
				switch (i) {
					case "grow":
						t.size = t.size + o;
						break;
					case "shrink":
						t.size = t.size - o;
						break;
					case "left":
						t.x = t.x - o;
						break;
					case "right":
						t.x = t.x + o;
						break;
					case "up":
						t.y = t.y - o;
						break;
					case "down":
						t.y = t.y + o;
						break;
					case "rotate":
						t.rotate = t.rotate + o
				}
				return t
			}, e) : e
		},
		St = function (t) {
			return Et(t.getAttribute("data-fa-transform"))
		},
		At = function (t) {
			var e = t.getAttribute("data-fa-symbol");
			return null !== e && ("" === e || e)
		},
		Ot = function (t) {
			var e = F(t.attributes).reduce(function (t, e) {
					return "class" !== t.name && "style" !== t.name && (t[e.name] = e.value), t
				}, {}),
				n = t.getAttribute("title");
			return I.autoA11y && (n ? e["aria-labelledby"] = I.replacementClass + "-title-" + H() : e["aria-hidden"] = "true"), e
		},
		It = function (t) {
			var e = t.getAttribute("data-fa-mask");
			return e ? vt(e.split(" ").map(function (t) {
				return t.trim()
			})) : gt()
		},
		Dt = {
			iconName: null,
			title: null,
			prefix: null,
			transform: R,
			symbol: !1,
			mask: null,
			extra: {
				classes: [],
				styles: {},
				attributes: {}
			}
		};

	function Zt(t) {
		this.name = "MissingIcon", this.message = t || "Icon unavailable", this.stack = (new Error).stack
	}
	Zt.prototype = Object.create(Error.prototype), Zt.prototype.constructor = Zt;
	var Bt = {
			fill: "currentColor"
		},
		Nt = {
			attributeType: "XML",
			repeatCount: "indefinite",
			dur: "2s"
		},
		jt = {
			tag: "path",
			attributes: E({}, Bt, {
				d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
			})
		},
		Rt = E({}, Nt, {
			attributeName: "opacity"
		}),
		Ut = {
			tag: "g",
			children: [jt, {
				tag: "circle",
				attributes: E({}, Bt, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: [{
					tag: "animate",
					attributes: E({}, Nt, {
						attributeName: "r",
						values: "28;14;28;28;14;28;"
					})
				}, {
					tag: "animate",
					attributes: E({}, Rt, {
						values: "1;0;1;1;0;1;"
					})
				}]
			}, {
				tag: "path",
				attributes: E({}, Bt, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: [{
					tag: "animate",
					attributes: E({}, Rt, {
						values: "1;0;0;0;0;1;"
					})
				}]
			}, {
				tag: "path",
				attributes: E({}, Bt, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: E({}, Rt, {
						values: "0;0;1;1;0;0;"
					})
				}]
			}]
		},
		Wt = Z.styles,
		Ht = "fa-layers-text",
		Ft = /Font Awesome 5 (Solid|Regular|Light|Brands)/,
		Vt = {
			Solid: "fas",
			Regular: "far",
			Light: "fal",
			Brands: "fab"
		};

	function qt(t, e) {
		var n = {
			found: !1,
			width: 512,
			height: 512,
			icon: Ut
		};
		if (t && e && Wt[e] && Wt[e][t]) {
			var i = Wt[e][t];
			n = {
				found: !0,
				width: i[0],
				height: i[1],
				icon: {
					tag: "path",
					attributes: {
						fill: "currentColor",
						d: i.slice(4)[0]
					}
				}
			}
		} else if (t && e && !I.showMissingIcons) throw new Zt("Icon is missing for prefix " + e + " with icon name " + t);
		return n
	}

	function Gt(t) {
		var e = function (t) {
			var e = Ct(t),
				n = e.iconName,
				i = e.prefix,
				o = e.rest,
				r = Tt(t),
				a = St(t),
				s = At(t),
				l = Ot(t),
				c = It(t);
			return {
				iconName: n,
				title: t.getAttribute("title"),
				prefix: i,
				transform: a,
				symbol: s,
				mask: c,
				extra: {
					classes: o,
					styles: r,
					attributes: l
				}
			}
		}(t);
		return ~e.extra.classes.indexOf(Ht) ? function (t, e) {
			var n = e.title,
				i = e.transform,
				o = e.extra,
				r = null,
				a = null;
			if (m) {
				var s = parseInt(getComputedStyle(t).fontSize, 10),
					l = t.getBoundingClientRect();
				r = l.width / s, a = l.height / s
			}
			return I.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), [t, it({
				content: t.innerHTML,
				width: r,
				height: a,
				transform: i,
				title: n,
				extra: o,
				watchable: !0
			})]
		}(t, e) : function (t, e) {
			var n = e.iconName,
				i = e.title,
				o = e.prefix,
				r = e.transform,
				a = e.symbol,
				s = e.mask,
				l = e.extra;
			return [t, nt({
				icons: {
					main: qt(n, o),
					mask: qt(s.iconName, s.prefix)
				},
				prefix: o,
				iconName: n,
				transform: r,
				symbol: a,
				mask: s,
				title: i,
				extra: l,
				watchable: !0
			})]
		}(t, e)
	}

	function Kt(t) {
		if (f) {
			var e = lt.begin("searchPseudoElements");
			Pt = !0,
				function () {
					F(t.querySelectorAll("*")).filter(function (t) {
						return !(t.parentNode === document.head || ~w.indexOf(t.tagName.toUpperCase()) || t.getAttribute(v) || t.parentNode && "svg" === t.parentNode.tagName)
					}).forEach(function (t) {
						[":before", ":after"].forEach(function (e) {
							var n = F(t.children).filter(function (t) {
									return t.getAttribute(v) === e
								})[0],
								i = h.getComputedStyle(t, e),
								o = i.getPropertyValue("font-family").match(Ft);
							if (n && !o) t.removeChild(n);
							else if (o) {
								var r = i.getPropertyValue("content"),
									a = Vt[o[1]],
									s = mt(a, Mt(3 === r.length ? r.substr(1, 1) : r));
								if (!n || n.getAttribute(y) !== a || n.getAttribute(b) !== s) {
									n && t.removeChild(n);
									var l = Dt.extra;
									l.attributes[v] = e;
									var c = nt(E({}, Dt, {
											icons: {
												main: qt(s, a),
												mask: gt()
											},
											prefix: a,
											iconName: s,
											extra: l,
											watchable: !0
										})),
										d = u.createElement("svg");
									":before" === e ? t.insertBefore(d, t.firstChild) : t.appendChild(d), d.outerHTML = c.map(function (t) {
										return bt(t)
									}).join("\n")
								}
							}
						})
					})
				}(), Pt = !1, e()
		}
	}

	function Yt(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
		if (f) {
			var n = u.documentElement.classList,
				i = function (t) {
					return n.add(x + "-" + t)
				},
				o = function (t) {
					return n.remove(x + "-" + t)
				},
				r = Object.keys(Wt),
				a = ["." + Ht + ":not([" + g + "])"].concat(r.map(function (t) {
					return "." + t + ":not([" + g + "])"
				})).join(", ");
			if (0 !== a.length) {
				var s = F(t.querySelectorAll(a));
				if (s.length > 0) {
					i("pending"), o("complete");
					var l = lt.begin("onTree"),
						c = s.reduce(function (t, e) {
							try {
								var n = Gt(e);
								n && t.push(n)
							} catch (t) {
								L || t instanceof Zt && console.error(t)
							}
							return t
						}, []);
					l(), kt(c, function () {
						i("active"), i("complete"), o("pending"), "function" == typeof e && e()
					})
				}
			}
		}
	}

	function Jt(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
			n = Gt(t);
		n && kt([n], e)
	}
	var Xt = function () {
		var t = "svg-inline--fa",
			e = I.familyPrefix,
			n = I.replacementClass,
			i = 'svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n  .svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n  .svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n  .svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n  .svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n  .svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n  .svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n  .svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n  .svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n  .svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n  .svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n  .svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n  .svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n  .svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n  .svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n  .svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n  .svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n  .svg-inline--fa.fa-w-16 {\n    width: 1em; }\n  .svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n  .svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n  .svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n  .svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n  .svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n  .svg-inline--fa.fa-border {\n    height: 1.5em; }\n  .svg-inline--fa.fa-li {\n    width: 2em; }\n  .svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n  .fa-layers svg.svg-inline--fa {\n    -webkit-transform-origin: center center;\n            transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n';
		if ("fa" !== e || n !== t) {
			var o = new RegExp("\\.fa\\-", "g"),
				r = new RegExp("\\." + t, "g");
			i = i.replace(o, "." + e + "-").replace(r, "." + n)
		}
		return i
	};

	function Qt(t) {
		return {
			found: !0,
			width: t[0],
			height: t[1],
			icon: {
				tag: "path",
				attributes: {
					fill: "currentColor",
					d: t.slice(4)[0]
				}
			}
		}
	}

	function $t() {
		I.autoAddCss && !re && (U(Xt()), re = !0)
	}

	function te(t, e) {
		return Object.defineProperty(t, "abstract", {
			get: e
		}), Object.defineProperty(t, "html", {
			get: function () {
				return t.abstract.map(function (t) {
					return bt(t)
				})
			}
		}), Object.defineProperty(t, "node", {
			get: function () {
				if (f) {
					var e = u.createElement("div");
					return e.innerHTML = t.html, e.children
				}
			}
		}), t
	}

	function ee(t) {
		var e = t.prefix,
			n = void 0 === e ? "fa" : e,
			i = t.iconName;
		if (i) return yt(ie.definitions, n, i) || yt(Z.styles, n, i)
	}
	var ne, ie = new(function () {
			function t() {
				M(this, t), this.definitions = {}
			}
			return C(t, [{
				key: "add",
				value: function () {
					for (var t = this, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
					var o = n.reduce(this._pullDefinitions, {});
					Object.keys(o).forEach(function (e) {
						t.definitions[e] = E({}, t.definitions[e] || {}, o[e]),
							function t(e, n) {
								var i = Object.keys(n).reduce(function (t, e) {
									var i = n[e];
									return i.icon ? t[i.iconName] = i.icon : t[e] = i, t
								}, {});
								"function" == typeof Z.hooks.addPack ? Z.hooks.addPack(e, i) : Z.styles[e] = E({}, Z.styles[e] || {}, i), "fas" === e && t("fa", n)
							}(e, o[e])
					})
				}
			}, {
				key: "reset",
				value: function () {
					this.definitions = {}
				}
			}, {
				key: "_pullDefinitions",
				value: function (t, e) {
					var n = e.prefix && e.iconName && e.icon ? {
						0: e
					} : e;
					return Object.keys(n).map(function (e) {
						var i = n[e],
							o = i.prefix,
							r = i.iconName,
							a = i.icon;
						t[o] || (t[o] = {}), t[o][r] = a
					}), t
				}
			}]), t
		}()),
		oe = function () {
			I.autoReplaceSvg = !1, I.observeMutations = !1, zt && zt.disconnect()
		},
		re = !1,
		ae = {
			i2svg: function () {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (f) {
					$t();
					var e = t.node,
						n = void 0 === e ? u : e,
						i = t.callback,
						o = void 0 === i ? function () {} : i;
					I.searchPseudoElements && Kt(n), Yt(n, o)
				}
			},
			css: Xt,
			insertCss: function () {
				re || (U(Xt()), re = !0)
			},
			watch: function () {
				var t;
				I.autoReplaceSvg || (I.autoReplaceSvg = !0), I.observeMutations = !0, t = function () {
					Object.keys(Z.styles).length > 0 && pe(), I.observeMutations && "function" == typeof MutationObserver && function (t) {
						if (d) {
							var e = t.treeCallback,
								n = t.nodeCallback,
								i = t.pseudoElementsCallback;
							zt = new d(function (t) {
								Pt || F(t).forEach(function (t) {
									if ("childList" === t.type && t.addedNodes.length > 0 && !wt(t.addedNodes[0]) && (I.searchPseudoElements && i(t.target), e(t.target)), "attributes" === t.type && t.target.parentNode && I.searchPseudoElements && i(t.target.parentNode), "attributes" === t.type && wt(t.target) && ~z.indexOf(t.attributeName))
										if ("class" === t.attributeName) {
											var o = vt(V(t.target)),
												r = o.prefix,
												a = o.iconName;
											r && t.target.setAttribute("data-prefix", r), a && t.target.setAttribute("data-icon", a)
										} else n(t.target)
								})
							}), f && zt.observe(u.getElementsByTagName("body")[0], {
								childList: !0,
								attributes: !0,
								characterData: !0,
								subtree: !0
							})
						}
					}({
						treeCallback: Yt,
						nodeCallback: Jt,
						pseudoElementsCallback: Kt
					})
				}, f && (N ? setTimeout(t, 0) : B.push(t))
			}
		},
		se = {
			transform: function (t) {
				return Et(t)
			}
		},
		le = (ne = function (t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = e.transform,
				i = void 0 === n ? R : n,
				o = e.symbol,
				r = void 0 !== o && o,
				a = e.mask,
				s = void 0 === a ? null : a,
				l = e.title,
				c = void 0 === l ? null : l,
				h = e.classes,
				u = void 0 === h ? [] : h,
				d = e.attributes,
				p = void 0 === d ? {} : d,
				f = e.styles,
				m = void 0 === f ? {} : f;
			if (t) {
				var _ = t.prefix,
					g = t.iconName,
					v = t.icon;
				return te(E({
					type: "icon"
				}, t), function () {
					return $t(), I.autoA11y && (c ? p["aria-labelledby"] = I.replacementClass + "-title-" + H() : p["aria-hidden"] = "true"), nt({
						icons: {
							main: Qt(v),
							mask: s ? Qt(s.icon) : {
								found: !1,
								width: null,
								height: null,
								icon: {}
							}
						},
						prefix: _,
						iconName: g,
						transform: E({}, R, i),
						symbol: r,
						title: c,
						extra: {
							attributes: p,
							styles: m,
							classes: u
						}
					})
				})
			}
		}, function (t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = (t || {}).icon ? t : ee(t || {}),
				i = e.mask;
			return i && (i = (i || {}).icon ? i : ee(i || {})), ne(n, E({}, e, {
				mask: i
			}))
		}),
		ce = function (t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = e.transform,
				i = void 0 === n ? R : n,
				o = e.title,
				r = void 0 === o ? null : o,
				a = e.classes,
				s = void 0 === a ? [] : a,
				l = e.attributes,
				c = void 0 === l ? {} : l,
				h = e.styles,
				u = void 0 === h ? {} : h;
			return te({
				type: "text",
				content: t
			}, function () {
				return $t(), it({
					content: t,
					transform: E({}, R, i),
					title: r,
					extra: {
						attributes: c,
						styles: u,
						classes: [I.familyPrefix + "-layers-text"].concat(S(s))
					}
				})
			})
		},
		he = function (t) {
			var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = e.title,
				i = void 0 === n ? null : n,
				o = e.classes,
				r = void 0 === o ? [] : o,
				a = e.attributes,
				s = void 0 === a ? {} : a,
				l = e.styles,
				c = void 0 === l ? {} : l;
			return te({
				type: "counter",
				content: t
			}, function () {
				return $t(),
					function (t) {
						var e = t.content,
							n = t.title,
							i = t.extra,
							o = E({}, i.attributes, n ? {
								title: n
							} : {}, {
								class: i.classes.join(" ")
							}),
							r = K(i.styles);
						r.length > 0 && (o.style = r);
						var a = [];
						return a.push({
							tag: "span",
							attributes: o,
							children: [e]
						}), n && a.push({
							tag: "span",
							attributes: {
								class: "sr-only"
							},
							children: [n]
						}), a
					}({
						content: t.toString(),
						title: i,
						extra: {
							attributes: s,
							styles: c,
							classes: [I.familyPrefix + "-layers-counter"].concat(S(r))
						}
					})
			})
		},
		ue = function (t) {
			return te({
				type: "layer"
			}, function () {
				$t();
				var e = [];
				return t(function (t) {
					Array.isArray(t) ? t.map(function (t) {
						e = e.concat(t.abstract)
					}) : e = e.concat(t.abstract)
				}), [{
					tag: "span",
					attributes: {
						class: I.familyPrefix + "-layers"
					},
					children: e
				}]
			})
		},
		de = {
			noAuto: oe,
			config: I,
			dom: ae,
			library: ie,
			parse: se,
			findIconDefinition: ee,
			icon: le,
			text: ce,
			counter: he,
			layer: ue,
			toHtml: bt
		},
		pe = function () {
			f && I.autoReplaceSvg && de.dom.i2svg({
				node: u
			})
		}
}, function (t, e) {
	t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="
}, function (t, e) {
	t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII="
}, function (t, e) {
	t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"
}, function (t, e) {
	t.exports = function (t) {
		return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
	}
}, function (t, e, n) {
	var i = n(10);
	(t.exports = n(2)(!1)).push([t.i, "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t     -o-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t     -o-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + i(n(9)) + ");\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + i(n(8)) + ");\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url(" + i(n(7)) + ');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t     -o-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n', ""])
}, function (t, e, n) {
	(e = t.exports = n(2)(!1)).i(n(11), ""), e.push([t.i, "html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.leaflet-container {\n  background: #000000; }\n\n/* CONTROLS */\n.selectable {\n  cursor: pointer;\n  box-sizing: border-box;\n  transition: background-color .2s; }\n\n.selected {\n  background-color: rgba(0, 0, 0, 0.7);\n  border: 1px solid white; }\n\n.zd-control {\n  position: relative; }\n\n.leaflet-bar a,\n.leaflet-bar a:hover,\n.zd-control__button,\n.zd-control__content,\n.zd-legend {\n  background-color: rgba(0, 0, 0, 0.4);\n  color: white; }\n\n.leaflet-bar a.leaflet-disabled {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #bbb;\n  cursor: default; }\n\n.zd-control__button {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 22px;\n  text-align: center;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  background-clip: padding-box;\n  cursor: pointer; }\n\n.zd-control__content, .zd-legend {\n  font-size: 1.5em; }\n\n.zd-control__content {\n  position: absolute;\n  top: 0;\n  left: 34px;\n  width: 0;\n  overflow: hidden;\n  transition: width .2s; }\n\n.zd-control__content--open {\n  width: 300px; }\n\n.zd-search__searchbox {\n  box-sizing: border-box;\n  height: 34px;\n  width: 100%;\n  font-size: inherit; }\n\n.zd-search__results {\n  list-style: none;\n  margin: auto;\n  padding: 0; }\n\n.zd-search__result {\n  cursor: pointer;\n  padding-left: 50px;\n  background-repeat: no-repeat; }\n\n.zd-search__result + .zd-search__result {\n  border-top: 1px solid gray; }\n\n.zd-settings__setting {\n  height: 30px; }\n\n.zd-settings__label {\n  text-align: left; }\n\n.zd-settings__button {\n  width: 50px;\n  text-align: center; }\n\n/* LEGEND */\n.leaflet-top.leaflet-right {\n  height: 100%; }\n\n.leaflet-bottom.leaflet-right {\n  width: 100%;\n  max-height: 40%; }\n\n.leaflet-right .zd-legend {\n  margin-right: 0; }\n\n.leaflet-top .zd-legend {\n  margin-top: 0; }\n\n.leaflet-bottom .zd-legend {\n  margin-bottom: 0; }\n\n.zd-legend--portrait {\n  width: 100%;\n  text-align: center;\n  overflow: hidden; }\n\n.zd-legend--landscape {\n  display: none;\n  height: 100%;\n  width: 210px;\n  overflow: auto; }\n\n@media screen and (orientation: landscape) and (min-width: 768px) {\n  .zd-legend--landscape {\n    display: none; }\n  .zd-legend--portrait {\n    display: block; } }\n\n.zd-legend__header {\n  margin: 0;\n  width: 100%; }\n\n.zd-legend__categories {\n  list-style: none;\n  margin: auto;\n  padding: 5px; }\n\n.zd-legend--portrait .zd-legend__categories {\n  padding: 0px;\n  height: 0px;\n  overflow: scroll;\n  transition: height .2s; }\n\n.zd-legend--portrait .zd-legend__categories--show {\n  height: 190px; }\n\n.zd-legend--portrait li {\n  display: inline-block;\n  width: 180px;\n  box-sizing: border-box;\n  text-align: left; }\n\n.zd-legend__all, .zd-legend__none, .zd-legend__category {\n  height: 30px; }\n\n.zd-legend__all, .zd-legend__none {\n  display: inline-block;\n  width: 50%;\n  text-align: center; }\n\n.zd-legend__category {\n  /*    margin: -10px 0;\r\n    padding: 5px 0;*/\n  padding-left: 50px;\n  background-repeat: no-repeat; }\n\n/* LOCATION TEXT LABELS */\n.leaflet-tooltip-pane {\n  z-index: 550;\n  /* put location text labels underneath markers */ }\n\n.leaflet-tooltip.zd-location-label {\n  background-color: transparent;\n  border: transparent;\n  box-shadow: none; }\n\n.zd-map-botw .leaflet-tooltip.zd-location-label {\n  font-size: 24px;\n  color: #f8efae;\n  text-shadow: -2px -2px 0 #977f41, -2px -1px 0 #977f41, -2px 0px 0 #977f41, -2px 1px 0 #977f41, -2px 2px 0 #977f41, -1px -2px 0 #977f41, -1px -1px 0 #977f41, -1px 0px 0 #977f41, -1px 1px 0 #977f41, -1px 2px 0 #977f41, 0px -2px 0 #977f41, 0px -1px 0 #977f41, 0px 0px 0 #977f41, 0px 1px 0 #977f41, 0px 2px 0 #977f41, 1px -2px 0 #977f41, 1px -1px 0 #977f41, 1px 0px 0 #977f41, 1px 1px 0 #977f41, 1px 2px 0 #977f41, 2px -2px 0 #977f41, 2px -1px 0 #977f41, 2px 0px 0 #977f41, 2px 1px 0 #977f41, 2px 2px 0 #977f41; }\n\n.zd-map-la .leaflet-tooltip.zd-location-label {\n  font-size: 18px;\n  font-style: italic;\n  color: #fff6e6; }\n\n/* POPUPS */\n.zd-popup__loading-indicator {\n  text-align: center; }\n\n.zd-popup__controls {\n  text-align: center;\n  font-size: 18px; }\n\n.zd-popup__controls .zd-popup__control {\n  color: #b5b5b5; }\n\n.zd-popup__controls .zd-popup__control:hover {\n  color: #7f7f7f;\n  cursor: pointer; }\n\n.zd-popup__control + .zd-popup__control {\n  margin-left: 18px; }\n\n.zd-popup__control--uncomplete {\n  display: none; }\n\n.zd-popup__controls--completed .zd-popup__control--complete {\n  display: none; }\n\n.zd-popup__controls--completed .zd-popup__control--uncomplete {\n  display: inline-block;\n  margin-left: 0; }\n\n.zd-popup__controls--noedit .zd-popup__control--edit {\n  display: none; }\n\n.internal-link {\n  border-bottom: 1px dashed black;\n  cursor: pointer; }\n\n.zd-popup li.gallerybox {\n  display: block; }\n", ""])
}, function (t, e, n) {
	var i = n(12);
	"string" == typeof i && (i = [
		[t.i, i, ""]
	]);
	var o = {
		hmr: !0,
		transform: void 0,
		insertInto: void 0
	};
	n(4)(i, o);
	i.locals && (t.exports = i.locals)
}, function (t, e, n) {
	var i;
	void 0 === (i = function (t, e) {
		"use strict";
		var n;
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.params = (n = {}, window.location.href.slice(window.location.href.indexOf("?") + 1).split("&").forEach(function (t) {
			var e = t.split("=");
			n[e[0]] = decodeURI(e[1])
		}), n)
	}.apply(e, [n, e])) || (t.exports = i)
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z";
	e.definition = {
		prefix: "fas",
		iconName: "search",
		icon: [512, 512, i, "f002", o]
	}, e.faSearch = e.definition, e.prefix = "fas", e.iconName = "search", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f002", e.svgPathData = o
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z";
	e.definition = {
		prefix: "fas",
		iconName: "cog",
		icon: [512, 512, i, "f013", o]
	}, e.faCog = e.definition, e.prefix = "fas", e.iconName = "cog", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f013", e.svgPathData = o
}, function (t, e, n) {
	(function (i) {
		var o, r, a = this && this.__assign || Object.assign || function (t) {
				for (var e, n = 1, i = arguments.length; n < i; n++)
					for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			},
			s = this && this.__awaiter || function (t, e, n, o) {
				return new(n || (n = i))(function (i, r) {
					function a(t) {
						try {
							l(o.next(t))
						} catch (t) {
							r(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							r(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : new n(function (e) {
							e(t.value)
						}).then(a, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			l = this && this.__generator || function (t, e) {
				var n, i, o, r, a = {
					label: 0,
					sent: function () {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
					return this
				}), r;

				function s(r) {
					return function (s) {
						return function (r) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (n = 1, i && (o = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(o = o.call(i, r[1])).done) return o;
								switch (i = 0, o && (r = [0, o.value]), r[0]) {
									case 0:
									case 1:
										o = r;
										break;
									case 4:
										return a.label++, {
											value: r[1],
											done: !1
										};
									case 5:
										a.label++, i = r[1], r = [0];
										continue;
									case 7:
										r = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
											a = 0;
											continue
										}
										if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
											a.label = r[1];
											break
										}
										if (6 === r[0] && a.label < o[1]) {
											a.label = o[1], o = r;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(r);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								r = e.call(t, a)
							} catch (t) {
								r = [6, t], i = 0
							} finally {
								n = o = 0
							}
							if (5 & r[0]) throw r[1];
							return {
								value: r[0] ? r[1] : void 0,
								done: !0
							}
						}([r, s])
					}
				}
			};
		o = [n, e, n(5)], void 0 === (r = function (t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = "localhost" === location.hostname;
// format=json&action=query&meta=userinfo&origin=http://localhost:8080
// format=json&action=query&list=map_userdata&zdm_map=botw&origin=
			function o(t) {
				return t && t.error && void 0 != t.error.code
			}
			var r = function () {
				function t(t, e) {
					this.mapid = t, this.dialog = e, this.offline = !1, this.completionStore = n.LocalStorage.getStore(t, "completion")
				}
				return t.prototype.getLoggedInUser = function () {
					return s(this, void 0, void 0, function () {
						var t;
						return l(this, function (e) {
							switch (e.label) {
								case 0:
									return [4, this.callApi("action=query&meta=userinfo")];
								case 1:
									return 0 !== (t = e.sent()).query.userinfo.id && (this.user = t.query.userinfo), [2]
							}
						})
					})
				}, t.prototype.login = function () {
					window.open( "http://parisotandco.fr/zelda/wiki/index.php?title=Special:UserLogin&returnto=Zelda+" + {
						la: "Link%27s+Awakening",
						botw: "Breath+of+the+Wild"
					}[this.mapid] + "+Map",'_blank');
				}, t.prototype.logout = function () {
					return s(this, void 0, void 0, function () {
						return l(this, function (t) {
							switch (t.label) {
								case 0:
									return [4, this.postWithRetry("action=logout")];
								case 1:
									return t.sent(), location.reload(), [2]
							}
						})
					})
				}, t.prototype.getCompletedMarkers = function () {
					return s(this, void 0, void 0, function () {
						var t, e, n, i, o, r, a, s, c, h, u, d, p, f = this;
						return l(this, function (l) {
							switch (l.label) {
								case 0:
									return t = this.completionStore.getAllKeys().filter(function (t) {
										return !0 === f.completionStore.getItem(t)
									}), this.user ? [4, this.callApi("action=query&list=map_userdata&zdm_map=" + this.mapid)] : [2, t];
								case 1:
									return e = l.sent().query.map_userdata.completed, n = e ? e.split(",").map(function (t) {
										return t.replace("%2C", ",")
									}) : [], t.length > 0 && n.length > 0 ? (h = "Replace account data with local data", i = "Merge data to account", o = "Delete local data", u = "Logout and keep local data", r = 1 === t.length, a = 1 === n.length, [4, this.dialog.showDialog("This device has " + t.length + " completed marker" + (r ? "" : "s") + ", but your account already has " + n.length + " completed marker" + (a ? "" : "s") + ". Que souhaitez-vous faire avec les donn??es locales ? Si vous choisissez de vous d??connecter, vous pouvez vous connecter ?? tout moment ?? partir du menu de configuration sur la gauche.", [h, i, o, u])]) : [3, 7];
								case 2:
									return (p = l.sent()) !== u ? [3, 4] : [4, this.logout()];
								case 3:
									return l.sent(), [2, []];
								case 4:
									if (p === h && (n = t), p === i) {
										for (s = {}, c = 0; c < t.length; ++c) s[t[c]] = !0;
										for (c = 0; c < n.length; ++c)
											s[n[c]] = !0;
										n = Object.keys(s)
									}
									return p !== h && p !== i ? [3, 6] : [4, this.setCompletion(n)];
								case 5:
									l.sent(), l.label = 6;
								case 6:
									return this.completionStore.clear(), [2, n];
								case 7:
									return t.length > 0 ? (h = "Upload to account", u = "Logout and keep local data", d = 1 === t.length, [4, this.dialog.showDialog("This device has " + t.length + " completed marker" + (d ? "" : "s") + ". Would you like to upload " + (d ? "it" : "them") + " to your account? If you choose to logout, you can login anytime from the settings menu on the left.", [h, u])]) : [3, 12];
								case 8:
									return (p = l.sent()) !== u ? [3, 10] : [4, this.logout()];
								case 9:
									return l.sent(), [2, []];
								case 10:
									return [4, this.setCompletion(t)];
								case 11:
									return l.sent(), [2, t];
								case 12:
									return [2, n]
							}
						})
					})
				}, t.prototype.complete = function (t) {
					return s(this, void 0, void 0, function () {
						var e, n;
						return l(this, function (i) {
							switch (i.label) {
								case 0:
									return t=t.replace(",","%252C"),this.user?[2,this.postWithRetry("action=map_complete&map="+this.mapid+"&marker="+t)]:this.offline?[3,2]:(e="Login",n="Continue without logging in",[4,this.dialog.showDialog("En vous connectant ?? votre compte Zelda Wiki, vous pouvez acc??der ?? vos donn??es de remplissage ?? partir de n'importe quel appareil. Si vous choisissez de ne pas vous connecter maintenant, vous pouvez vous connecter ?? tout moment ?? partir du menu de param??tres sur la gauche.",[e,n])]);
								case 1:
									if(i.sent()===e)
										return this.login(),[2]; 
									this.offline=!0,i.label=2;
								case 2:
									return this.completionStore.setItem(t, !0), [2]
							}
						})
					})
				}, t.prototype.uncomplete = function (t) {
					return s(this, void 0, void 0, function () {
						return l(this, function (e) {
							return t = t.replace(",", "%252C"), this.user ? [2, this.postWithRetry("action=map_uncomplete&map=" + this.mapid + "&marker=" + t)] : (this.completionStore.setItem(t, !1), [2])
						})
					})
				}, t.prototype.clearCompletion = function () {
					return s(this, void 0, void 0, function () {
						return l(this, function (t) {
							switch (t.label) {
								case 0:
									return this.completionStore.clear(), this.user ? [4, this.setCompletion([])] : [3, 2];
								case 1:
									t.sent(), t.label = 2;
								case 2:
									return [2]
							}
						})
					})
				}, t.prototype.setCompletion = function (t) {
					return s(this, void 0, void 0, function () {
						return l(this, function (e) {
							return [2, this.postWithRetry("action=map_setcompletion&map=" + this.mapid + "&markers=" + (t.map(function (t) {
								return t.replace(",", "%252C")
							}).join(",") || "clear"))]
						})
					})
				}, t.prototype.query = function (t) {
					return s(this, void 0, void 0, function () {
						return l(this, function (e) {
							return [2, this.callApi(t)]
						})
					})
				}, t.prototype.postWithRetry = function (t) {
					return s(this, void 0, void 0, function () {
						var e, n;
						return l(this, function (i) {
							switch (i.label) {
								case 0:
									return this.csrf ? [4, this.post(t)] : [3, 2];
								case 1:
									if (!o(e = i.sent())) return [2];
									if ("badtoken" !== e.error.code) throw e;
									i.label = 2;
								case 2:
									return [4, this.getToken()];
								case 3:
									return i.sent(), [4, this.post(t)];
								case 4:
									if (o(n = i.sent())) throw n;
									return [2]
							}
						})
					})
				}, t.prototype.post = function (t) {
					return s(this, void 0, void 0, function () {
						return l(this, function (e) {
							return [2, this.callApi(t, {
								method: "POST",
								headers: {
									"Content-Type": "application/x-www-form-urlencoded"
								},
								body: "token=" + encodeURIComponent(this.csrf)
							})]
						})
					})
				}, t.prototype.callApi = function (t, e) {
					return s(this, void 0, void 0, function () {
						var n;
						return l(this, function (o) {
							switch (o.label) {
								case 0:
									return n = "/zelda/wiki/api.php?format=json&" + t, i && (n = "http://parisotandco.fr" + n + "&origin=http://localhost:8080"), [4, fetch(n, a(
									{
										credentials: i ? "include" : "same-origin"
									}, e))];
								case 1:
									return [2, o.sent().json()]
							}
						})
					})
				}, t.prototype.getToken = function () {
					return s(this, void 0, void 0, function () {
						var t;
						return l(this, function (e) {
							switch (e.label) {
								case 0:
									//return [4, this.callApi("action=query&meta=tokens&type=csrf")];
									return [4, this.callApi("action=query&list=")];
								case 1:
									return t = e.sent(), this.csrf = t.query.tokens.csrftoken, [2]
							}
						})
					})
				}, t
			}();
			e.WikiConnector = r
		}.apply(e, o)) || (t.exports = r)
	}).call(this, n(1).Promise)
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0), n(3)], void 0 === (o = function (t, e, n, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function (t) {
			function e(e, n) {
				return t.call(this, e, n) || this
			}
			return a(e, t), e.create = function (t, n, o, r) {
				var a = new e("maps/" + t + "/tiles/{z}/{x}_{y}.jpg", {
					tileSize: n,
					minZoom: 0,
					maxZoom: o,
					bounds: r,
					noWrap: !0
				});
				a.tileSize = n, a.maxZoom = o, a.tileMarkerContainers = [];
				for (var s = 0; s <= o; ++s) {
					a.tileMarkerContainers[s] = [];
					for (var l = 0; l < Math.pow(2, s); ++l) {
						a.tileMarkerContainers[s][l] = [];
						for (var c = 0; c < Math.pow(2, s); ++c) a.tileMarkerContainers[s][l][c] = i.MarkerContainer.create()
					}
				}
				return a.on("tileload", function (t) {
					a.tileMarkerContainers[t.coords.z][t.coords.x][t.coords.y].show()
				}), a.on("tileunload", function (t) {
					a.tileMarkerContainers[t.coords.z][t.coords.x][t.coords.y].hide()
				}), a
			}, e.prototype.registerMarkerWithTiles = function (t, e) {
				for (var n = 0; n <= this.maxZoom; ++n) {
					var i = Math.floor(e.x * Math.pow(2, n) / this.tileSize),
						o = Math.floor(e.y * Math.pow(2, n) / this.tileSize);
					this.tileMarkerContainers[n][i][o].addMarker(t), t.addToTileContainer(this.tileMarkerContainers[n][i][o])
				}
			}, e.prototype.getMarkerById = function (t) {
				return this.tileMarkerContainers[0][0][0].getMarker(t)
			}, e.prototype.findMarkers = function (t) {
				return this.tileMarkerContainers[0][0][0].findMarkers(t)
			}, e
		}(n.TileLayer);
		e.TileLayer = o
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0)], void 0 === (o = function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = function (t) {
			function e(e) {
				var i = t.call(this, e) || this;
				i.categories = [];
				var o = e && "bottomright" === e.position;
				if (i.container = n.DomUtil.create("div", "zd-control zd-legend zd-legend--" + (o ? "portrait" : "landscape")), n.DomEvent.disableClickPropagation(i.container), n.DomEvent.disableScrollPropagation(i.container), o) {
					var r = n.DomUtil.create("h3", "zd-legend__header", i.container);
					r.innerText = "Legend", n.DomEvent.addListener(r, "click", function () {
						n.DomUtil.hasClass(i.categoryList, "zd-legend__categories--show") ? n.DomUtil.removeClass(i.categoryList, "zd-legend__categories--show") : n.DomUtil.addClass(i.categoryList, "zd-legend__categories--show")
					})
				}
				i.categoryList = n.DomUtil.create("ul", "zd-legend__categories", i.container);
				var a = n.DomUtil.create("li", "", i.categoryList);
				return i.all = n.DomUtil.create("div", "zd-legend__all selectable selected", a), i.all.innerText = "Tous", i.none = n.DomUtil.create("div", "zd-legend__none selectable", a), i.none.innerText = "Aucun", n.DomEvent.addListener(i.all, "click", function () {
					n.DomUtil.hasClass(i.all, "selected") || (n.DomUtil.addClass(i.all, "selected"), n.DomUtil.removeClass(i.none, "selected"), i.categories.forEach(function (t) {
						n.DomUtil.removeClass(t.li, "selected"), t.category.resetVisibility()
					}))
				}), n.DomEvent.addListener(i.none, "click", function () {
					n.DomUtil.hasClass(i.none, "selected") || (n.DomUtil.addClass(i.none, "selected"), n.DomUtil.removeClass(i.all, "selected"), i.categories.forEach(function (t) {
						n.DomUtil.removeClass(t.li, "selected"), t.category.forceHide()
					}))
				}), i
			}
			return a(e, t), e.createPortrait = function () {
				return new e({
					position: "bottomright"
				})
			}, e.createLandscape = function () {
				return new e
			}, e.prototype.onAdd = function (t) {
				return this.container
			}, e.prototype.onRemove = function (t) {}, e.prototype.addCategory = function (t, e) {
				var i = this,
					o = n.DomUtil.create("li", "zd-legend__category selectable");
				o.setAttribute("data-position", "" + e), o.innerText = t.name, o.style.backgroundImage = "url(" + t.getIconUrl() + ")", o.style.backgroundPosition = (50 - t.getIconWidth()) / 2 + "px center", o.style.backgroundSize = t.getIconWidth() + "px", this.categories.push({
					category: t,
					li: o
				}), n.DomEvent.addListener(o, "click", function () {
					n.DomUtil.hasClass(o, "selected") ? (n.DomUtil.removeClass(o, "selected"), t.forceHide(), i.categories.every(function (t) {
						return !n.DomUtil.hasClass(t.li, "selected")
					}) && n.DomUtil.addClass(i.none, "selected")) : (n.DomUtil.addClass(o, "selected"), t.forceShow(), n.DomUtil.hasClass(i.all, "selected") && (n.DomUtil.removeClass(i.all, "selected"), i.categories.forEach(function (t) {
						n.DomUtil.hasClass(t.li, "selected") || t.category.forceHide()
					})), n.DomUtil.removeClass(i.none, "selected"))
				});
				for (var r = this.categoryList.children, a = 1; a < r.length && e >= Number(r[a].getAttribute("data-position"));) a++;
				a >= r.length ? this.categoryList.appendChild(o) : this.categoryList.insertBefore(o, r[a])
			}, e.prototype.reset = function () {
				this.all.click()
			}, e
		}(n.Control);
		e.Legend = i
	}.apply(e, i)) || (t.exports = o)
}, function (t, e) {
	t.exports = function (t) {
		var e = "undefined" != typeof window && window.location;
		if (!e) throw new Error("fixUrls requires window.location");
		if (!t || "string" != typeof t) return t;
		var n = e.protocol + "//" + e.host,
			i = n + e.pathname.replace(/\/[^\/]*$/, "/");
		return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
			var o, r = e.trim().replace(/^"(.*)"$/, function (t, e) {
				return e
			}).replace(/^'(.*)'$/, function (t, e) {
				return e
			});
			return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
		})
	}
}, function (t, e, n) {
	(t.exports = n(2)(!1)).push([t.i, '.leaflet-control-window-wrapper {\n  display: none;\n  opacity: 0;\n  -webkit-overflow-scrolling: touch;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.nonmodal {\n  z-index: 6000; }\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 7000;\n  background-color: rgba(0, 0, 0, 0.7); }\n\n.visible {\n  display: block;\n  opacity: 1; }\n\n.leaflet-control-window {\n  position: absolute;\n  z-index: 2000;\n  border-radius: 2px;\n  margin: 8px;\n  /** BOX SHADOW **/\n  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75); }\n\n.control-window {\n  background-color: #ffffff;\n  color: #353535;\n  font: 14px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif; }\n\n.leaflet-control-window .titlebar {\n  min-height: 38px;\n  cursor: grab;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  padding: 10px 45px 10px 10px; }\n\n.leaflet-control-window .close {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  font: 16px/14px Tahoma, Verdana, sans-serif;\n  cursor: pointer;\n  z-index: 30;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition-property: background;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  color: #e4e4e4;\n  font-size: 22pt;\n  text-align: center;\n  line-height: 0.9em; }\n\n.leaflet-control-window .close:hover {\n  background-color: rgba(0, 0, 0, 0.65); }\n\n.leaflet-control-window .content {\n  padding: 8px;\n  margin-top: -10px;\n  z-index: 29;\n  overflow: auto; }\n\n.leaflet-control-window .promptButtons {\n  text-align: right;\n  padding: 16px; }\n\n.leaflet-control-window button {\n  position: relative;\n  display: inline-block;\n  background-color: transparent;\n  color: inherit;\n  opacity: 0.5;\n  transition-property: opacity;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  cursor: pointer;\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: middle;\n  border: 0;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  padding: 8px;\n  margin: 12px 8px 0 8px; }\n\n.leaflet-control-window button:focus {\n  outline: 0; }\n\n.leaflet-control-window button:hover {\n  opacity: 1; }\n\n.disabled {\n  opacity: .5;\n  pointer-events: none; }\n', ""])
}, function (t, e, n) {
	var i = n(21);
	"string" == typeof i && (i = [
		[t.i, i, ""]
	]);
	var o = {
		hmr: !0,
		transform: void 0,
		insertInto: void 0
	};
	n(4)(i, o);
	i.locals && (t.exports = i.locals)
}, function (t, e) {
	L.Control.Window = L.Control.extend({
		includes: L.Evented.prototype || L.Mixin.Events,
		options: {
			element: "map",
			className: "control-window",
			visible: !1,
			title: void 0,
			closeButton: !0,
			content: void 0,
			prompt: void 0,
			maxWidth: 600,
			modal: !1,
			position: "center"
		},
		initialize: function (t, e) {
			t.hasOwnProperty("options") && (t = t.getContainer()), e.element = t, L.setOptions(this, e);
			var n = "nonmodal";
			this.options.modal && (n = "modal"), this._wrapper = L.DomUtil.create("div", n + " leaflet-control-window-wrapper", L.DomUtil.get(this.options.element)), this._container = L.DomUtil.create("div", "leaflet-control leaflet-control-window " + this.options.className, this._wrapper), this._container.setAttribute("style", "max-width:" + this.options.maxWidth + "px"), this._containerTitleBar = L.DomUtil.create("div", "titlebar", this._container), this.titleContent = L.DomUtil.create("h2", "title", this._containerTitleBar), this._containerContent = L.DomUtil.create("div", "content", this._container), this._containerPromptButtons = L.DomUtil.create("div", "promptButtons", this._container), this.options.closeButton && (this._closeButton = L.DomUtil.create("a", "close", this._containerTitleBar), this._closeButton.innerHTML = "&times;");
			var i = L.DomEvent.stopPropagation;
			if (L.DomEvent.on(this._wrapper, "contextmenu", i).on(this._wrapper, "click", i).on(this._wrapper, "mousedown", i).on(this._wrapper, "touchstart", i).on(this._wrapper, "dblclick", i).on(this._wrapper, "mousewheel", i).on(this._wrapper, "MozMousePixelScroll", i), this.options.closeButton) {
				var o = this._closeButton;
				L.DomEvent.on(o, "click", this.hide, this)
			}
			this.options.title && this.title(this.options.title), this.options.content && this.content(this.options.content), "object" == typeof this.options.prompt && this.prompt(this.options.prompt), this.options.visible && this.show()
		},
		disableBtn: function () {
			this._btnOK.disabled = !0, this._btnOK.className = "disabled"
		},
		enableBtn: function () {
			this._btnOK.disabled = !1, this._btnOK.className = ""
		},
		title: function (t) {
			if (void 0 == t) return this.options.title;
			this.options.title = t;
			var e = t || "";
			return this.titleContent.innerHTML = e, this
		},
		remove: function () {
			L.DomUtil.get(this.options.element).removeChild(this._wrapper);
			var t = L.DomEvent.stopPropagation;
			if (L.DomEvent.off(this._wrapper, "contextmenu", t).off(this._wrapper, "click", t).off(this._wrapper, "mousedown", t).off(this._wrapper, "touchstart", t).off(this._wrapper, "dblclick", t).off(this._wrapper, "mousewheel", t).off(this._wrapper, "MozMousePixelScroll", t), this._closeButton && this._close) {
				var e = this._closeButton;
				L.DomEvent.off(e, "click", this.close, this)
			}
			return this
		},
		mapResized: function () {},
		show: function (t) {
			t && (this.options.position = t), L.DomUtil.addClass(this._wrapper, "visible"), this.setContentMaxHeight();
			var e = this._container.offsetWidth,
				n = this._container.offsetHeight,
				i = L.DomUtil.get(this.options.element).getBoundingClientRect(),
				o = i.right - i.left || Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
				r = i.bottom - i.top || Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
				a = i.top,
				s = i.left;
			return "topLeft" == this.options.position ? this.showOn([s, a + 0]) : "left" == this.options.position ? this.showOn([s, a + r / 2 - n / 2 - 8 + 0]) : "bottomLeft" == this.options.position ? this.showOn([s, a + r - n - 16 - 0]) : "top" == this.options.position ? this.showOn([s + o / 2 - e / 2 - 8, a + 0]) : "topRight" == this.options.position ? this.showOn([s + o - e - 16, a + 0]) : "right" == this.options.position ? this.showOn([s + o - e - 16, a + r / 2 - n / 2 - 8 + 0]) : "bottomRight" == this.options.position ? this.showOn([s + o - e - 16, a + r - n - 16 - 0]) : "bottom" == this.options.position ? this.showOn([s + o / 2 - e / 2 - 8, a + r - n - 16 - 0]) : this.showOn([s + o / 2 - e / 2 - 8, a + a + r / 2 - n / 2 - 8 + 0]), this
		},
		showOn: function (t) {
			return this.setContentMaxHeight(), L.DomUtil.setPosition(this._container, L.point(Math.round(t[0]), Math.round(t[1]), !0)), new L.Draggable(this._container, this._containerTitleBar).enable(), L.DomUtil.addClass(this._wrapper, "visible"), this.fire("show"), this
		},
		hide: function (t) {
			return L.DomUtil.removeClass(this._wrapper, "visible"), this.fire("hide"), this
		},
		getContainer: function () {
			return this._containerContent
		},
		content: function (t) {
			return void 0 == t ? this.options.content : (this.options.content = t, this.getContainer().innerHTML = t, this)
		},
		prompt: function (t) {
			if (void 0 == t) return this.options.prompt;
			this.options.prompt = t, this.setPromptCallback(t.callback), this.setActionCallback(t.action);
			var e = this.options.prompt.buttonCancel || void 0,
				n = this.options.prompt.buttonOK || "OK",
				i = this.options.prompt.buttonAction || void 0;
			if (void 0 != i) {
				var o = L.DomUtil.create("button", "", this._containerPromptButtons);
				L.DomEvent.on(o, "click", this.action, this), o.innerHTML = i
			}
			var r = L.DomUtil.create("button", "", this._containerPromptButtons);
			if (L.DomEvent.on(r, "click", this.promptCallback, this), r.innerHTML = n, this._btnOK = r, void 0 != e) {
				var a = L.DomUtil.create("button", "", this._containerPromptButtons);
				L.DomEvent.on(a, "click", this.close, this), a.innerHTML = e
			}
			return this
		},
		container: function (t) {
			return void 0 == t ? this._container.innerHTML : (this._container.innerHTML = t, this.options.closeButton && (this._closeButton = L.DomUtil.create("a", "close", this._container), this._closeButton.innerHTML = "&times;", L.DomEvent.on(this._closeButton, "click", this.close, this)), this)
		},
		setPromptCallback: function (t) {
			var e = this;
			"function" != typeof t && (t = function () {
				console.warn("No callback function specified!")
			});
			return this.promptCallback = function () {
				e.close(), t()
			}, this
		},
		setActionCallback: function (t) {
			var e = this;
			"function" != typeof t && (t = function () {
				console.warn("No callback function specified!")
			});
			return this.action = function () {
				e.hide(), t()
			}, this
		},
		setContentMaxHeight: function () {
			var t = 68;
			this.options.title && (t += this._containerTitleBar.offsetHeight - 36), "object" == typeof this.options.prompt && (t += this._containerPromptButtons.offsetHeight - 20);
			var e = L.DomUtil.get(this.options.element).getBoundingClientRect(),
				n = e.bottom - e.top - t;
			this._containerContent.setAttribute("style", "max-height:" + n + "px")
		},
		close: function () {
			this.hide(), this.remove(), this.fire("close")
		}
	}), L.control.window = function (t, e) {
		return new L.Control.Window(t, e)
	}
}, function (t, e, n) {
	(function (i) {
		var o, r, a = this && this.__awaiter || function (t, e, n, o) {
				return new(n || (n = i))(function (i, r) {
					function a(t) {
						try {
							l(o.next(t))
						} catch (t) {
							r(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							r(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : new n(function (e) {
							e(t.value)
						}).then(a, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			s = this && this.__generator || function (t, e) {
				var n, i, o, r, a = {
					label: 0,
					sent: function () {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
					return this
				}), r;

				function s(r) {
					return function (s) {
						return function (r) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (n = 1, i && (o = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(o = o.call(i, r[1])).done) return o;
								switch (i = 0, o && (r = [0, o.value]), r[0]) {
									case 0:
									case 1:
										o = r;
										break;
									case 4:
										return a.label++, {
											value: r[1],
											done: !1
										};
									case 5:
										a.label++, i = r[1], r = [0];
										continue;
									case 7:
										r = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
											a = 0;
											continue
										}
										if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
											a.label = r[1];
											break
										}
										if (6 === r[0] && a.label < o[1]) {
											a.label = o[1], o = r;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(r);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								r = e.call(t, a)
							} catch (t) {
								r = [6, t], i = 0
							} finally {
								n = o = 0
							}
							if (5 & r[0]) throw r[1];
							return {
								value: r[0] ? r[1] : void 0,
								done: !0
							}
						}([r, s])
					}
				}
			};
		o = [n, e, n(0)], void 0 === (r = function (t, e, o) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), n(23), n(22);
			var r = function () {
				function t(t) {
					this.dialog = o.control.window(t, {
						modal: !0,
						closeButton: !1
					})
				}
				return t.prototype.showDialog = function (t, e) {
					return a(this, void 0, void 0, function () {
						var n;
						return s(this, function (r) {
							return n = this.dialog, [2, new i(function (i, r) {
								n.content("<p>" + t + "</p>" + e.map(function (t) {
									return '<button id="dialog-action-' + t.toLowerCase().replace(" ", "") + '">' + t + "</button><br />"
								}).join("")), e.forEach(function (t) {
									o.DomEvent.addListener(o.DomUtil.get("dialog-action-" + t.toLowerCase().replace(" ", "")), "click", function () {
										n.hide(), i(t)
									})
								}), n.show()
							})]
						})
					})
				}, t
			}();
			e.Dialog = r
		}.apply(e, o)) || (t.exports = r)
	}).call(this, n(1).Promise)
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0)], void 0 === (o = function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = "zd-control__content--open",
			o = function (t) {
				function e(e) {
					var o = t.call(this, e) || this;
					o.onOpenHandlers = [], o.onClosedHandlers = [], o.container = n.DomUtil.create("div", "zd-control");
					var r = n.DomUtil.create("div", "zd-control__button", o.container);
					return n.DomUtil.create("i", "fa fa-" + e.icon, r), n.DomEvent.disableClickPropagation(r), n.Browser.touch || n.DomEvent.disableScrollPropagation(r), o.content = n.DomUtil.create("div", "zd-control__content", o.container), n.DomEvent.disableClickPropagation(o.content), n.Browser.touch || n.DomEvent.disableScrollPropagation(o.content), o.content.appendChild(e.content), n.DomEvent.addListener(r, "click", function () {
						return n.DomUtil.hasClass(o.content, i) ? o.close() : o.open()
					}), o
				}
				return a(e, t), e.create = function (t) {
					return t.position = "topleft", new e(t)
				}, e.prototype.onAdd = function (t) {
					return this.container
				}, e.prototype.onRemove = function (t) {}, e.prototype.onOpen = function (t) {
					this.onOpenHandlers.push(t)
				}, e.prototype.onClosed = function (t) {
					this.onClosedHandlers.push(t)
				}, e.prototype.open = function () {
					this.onOpenHandlers.forEach(function (t) {
						return t()
					}), n.DomUtil.addClass(this.content, i)
				}, e.prototype.close = function () {
					this.onClosedHandlers.forEach(function (t) {
						return t()
					}), n.DomUtil.removeClass(this.content, i)
				}, e
			}(n.Control);
		e.Control = o
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	var i, o;
	i = [n, e, n(0)], void 0 === (o = function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.create = function (t, e) {
			var i = e / t,
				o = e / 2,
				r = n.Util.extend({}, n.CRS.Simple);
			return r.transformation = new n.Transformation(i, o, -i, o), r
		}
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	(function (i) {
		var o, r, a, s = this && this.__extends || (a = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
				},
				function (t, e) {
					function n() {
						this.constructor = t
					}
					a(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
				}),
			l = this && this.__awaiter || function (t, e, n, o) {
				return new(n || (n = i))(function (i, r) {
					function a(t) {
						try {
							l(o.next(t))
						} catch (t) {
							r(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							r(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : new n(function (e) {
							e(t.value)
						}).then(a, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			c = this && this.__generator || function (t, e) {
				var n, i, o, r, a = {
					label: 0,
					sent: function () {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
					return this
				}), r;

				function s(r) {
					return function (s) {
						return function (r) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (n = 1, i && (o = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(o = o.call(i, r[1])).done) return o;
								switch (i = 0, o && (r = [0, o.value]), r[0]) {
									case 0:
									case 1:
										o = r;
										break;
									case 4:
										return a.label++, {
											value: r[1],
											done: !1
										};
									case 5:
										a.label++, i = r[1], r = [0];
										continue;
									case 7:
										r = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
											a = 0;
											continue
										}
										if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
											a.label = r[1];
											break
										}
										if (6 === r[0] && a.label < o[1]) {
											a.label = o[1], o = r;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(r);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								r = e.call(t, a)
							} catch (t) {
								r = [6, t], i = 0
							} finally {
								n = o = 0
							}
							if (5 & r[0]) throw r[1];
							return {
								value: r[0] ? r[1] : void 0,
								done: !0
							}
						}([r, s])
					}
				}
			};
		o = [n, e, n(0), n(26), n(6), n(25), n(24), n(19), n(5), n(3), n(18), n(17), n(16), n(15), n(14)], void 0 === (r = function (t, e, n, i, o, r, a, h, u, d, p, f, m, _, g) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), o.library.add(_.faSearch, m.faCog), o.dom.watch();
			var v = function (t) {
				function e(e, n) {
					var i = t.call(this, e, n) || this;
					return i.taggedMarkers = {}, i
				}
				return s(e, t), e.create = function (t, o, r, s) {
					void 0 === s && (s = {});
					var l = Math.round(Math.log(o / r) * Math.LOG2E);
					void 0 == s.zoom && (s.zoom = l - 2);
					var c = Number(g.params.x);
					isNaN(c) && (c = Number(g.params.lat));
					var d = Number(g.params.y);
					isNaN(d) && (d = Number(g.params.lng)), isNaN(c) || isNaN(d) || (s.center = [c, d]);
					var m = i.create(o, r);
					s.crs = m;
					var _ = n.latLngBounds(m.pointToLatLng(n.point(0, o), l), m.pointToLatLng(n.point(o, 0), l));
					s.maxBounds = _.pad(.5);
					var v = p.TileLayer.create(t, r, l, _);
					s.layers = [v], s.zoomControl = !1, s.attributionControl = !1;
					var y = new e("map", s);
					return y.tileLayer = v, y.getContainer().classList.add("zd-map-" + t), s.tags || (s.tags = []), s.tags.push("Completed"), y.settingsStore = u.LocalStorage.getStore(t, "settings"), y.wiki = new f.WikiConnector(t, new a.Dialog(y)), y.initializeSearchControl(), y.initializeSettingsControl(s.tags), n.control.zoom({
						position: "topleft"
					}).addTo(y), y.legend = h.Legend.createPortrait().addTo(y), y.legendLandscape = h.Legend.createLandscape().addTo(y), y.on("click", function (t) {
						console.log(t.latlng), y.panTo(t.latlng)
					}), y
				}, e.prototype.initializeWikiConnector = function () {
					return l(this, void 0, void 0, function () {
						var t, e, n;
						return c(this, function (i) {
							switch (i.label) {
								case 0:return[4,this.wiki.getLoggedInUser()];
								// case 0:
									// for (t = i.sent(), e = 0; e < t.length; ++e)(n = this.tileLayer.getMarkerById(t[e])) && n.complete();
									// return [2]
								case 1:
									return i.sent(), this.loginFn && this.wiki.user && this.loginFn(this.wiki.user.name), [4, this.wiki.getCompletedMarkers()];
								case 2:
									for (t = i.sent(), e = 0; e < t.length; ++e)(n = this.tileLayer.getMarkerById(t[e])) && n.complete();
									return [2]
							}
						})
					})
				}, e.prototype.addCategory = function (t) {
					t.addToMap(this), void 0 != t.displayOrder && (this.legend.addCategory(t, t.displayOrder), this.legendLandscape.addCategory(t, t.displayOrder))
				}, e.prototype.addMarker = function (t) {
					var e = this;
					t.addToMap(this), this.tileLayer.registerMarkerWithTiles(t, this.project(t.getLatLng(), 0)), t.tags.forEach(function (n) {
						e.taggedMarkers[n] && e.taggedMarkers[n].addMarker(t)
					}), g.params.id === t.id && this.focusOn(t)
				}, e.prototype.navigateToMarkerById = function (t) {
					var e = this.tileLayer.getMarkerById(t);
					e && this.focusOn(e)
				}, e.prototype.initializeSearchControl = function () {
					var t = this,
						e = n.DomUtil.create("div", "zd-search"),
						i = n.DomUtil.create("input", "zd-search__searchbox", e);
					i.setAttribute("type", "text"), i.setAttribute("placeholder", "Search");
					var o = n.DomUtil.create("ul", "zd-search__results", e);
					this.searchControl = r.Control.create({
						icon: "search",
						content: e
					}).addTo(this);
					var a = "";
					n.DomEvent.addListener(i, "input", function (e) {
						n.DomUtil.empty(o);
						var r = i.value;
						if (r && r.length > 2 && (a !== r || "focus" === e.type)) {
							var s = new RegExp(r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
							t.tileLayer.findMarkers(s).forEach(function (e) {
								var i = n.DomUtil.create("li", "zd-search__result", o);
								i.innerText = e.name, i.style.backgroundImage = "url(" + e.getIconUrl() + ")", i.style.backgroundPosition = (50 - e.getIconWidth()) / 2 + "px center", n.DomEvent.addListener(i, "click", function () {
									t.searchControl.close(), t.focusOn(e)
								})
							})
						}
						a = r || ""
					}), this.searchControl.onOpen(function () {
						t.settingsControl.close(), i.focus()
					}), this.searchControl.onClosed(function () {
						i.blur()
					})
				}, e.prototype.initializeSettingsControl = function (t) {
					var e = this,
						i = n.DomUtil.create("table", "zd-settings"),
						o = n.DomUtil.create("tr", "zd-settings__setting", i),
						a = n.DomUtil.create("td", "", o);
					a.setAttribute("colspan", "3");
					var s=n.DomUtil.create("div","selectable",a);s.innerText="Login",n.DomEvent.addListener(s,"click",function(){
						e.wiki.login()}),this.loginFn=function(t){
							n.DomUtil.empty(a);
						var i=n.DomUtil.create("div","selectable",a);
						i.style.cssFloat = "right", i.innerText = "Logout", n.DomEvent.addListener(i, "click", function () {
							e.wiki.logout()
						}), n.DomUtil.create("div", "", a).innerText = t
					}, t.forEach(function (t) {
						e.taggedMarkers[t] = d.MarkerContainer.create();
						var o = n.DomUtil.create("tr", "zd-settings__setting", i),
							r = n.DomUtil.create("td", "zd-settings__button selectable", o);
						r.innerText = "Show";
						var a = n.DomUtil.create("td", "zd-settings__button selectable", o);
						a.innerText = "Hide", n.DomUtil.create("th", "zd-settings__label", o).innerText = t;
						var s = e.settingsStore.getItem("show-" + t);
						!1 === s || "Completed" === t && !0 !== s ? n.DomUtil.addClass(a, "selected") : (e.taggedMarkers[t].show(), n.DomUtil.addClass(r, "selected")), n.DomEvent.addListener(r, "click", function () {
							n.DomUtil.hasClass(r, "selected") || (n.DomUtil.removeClass(a, "selected"), n.DomUtil.addClass(r, "selected"), e.taggedMarkers[t].show(), e.settingsStore.setItem("show-" + t, !0))
						}), n.DomEvent.addListener(a, "click", function () {
							n.DomUtil.hasClass(a, "selected") || (n.DomUtil.removeClass(r, "selected"), n.DomUtil.addClass(a, "selected"), e.taggedMarkers[t].hide(), e.settingsStore.setItem("show-" + t, !1))
						})
					});
					var l = n.DomUtil.create("tr", "zd-settings__setting", i),
						c = n.DomUtil.create("td", "selectable", l);
						c.setAttribute("colspan", "3"),
						c.innerText="Vider les donn??es",n.DomEvent.addListener(c,"click",function(){
						confirm("Tous les point marqu?? serons ??ffac??s. Etes vous sur ?")&&(e.wiki.clearCompletion(),e.taggedMarkers.Completed.clear())
						}),
						this.settingsControl = r.Control.create({
						icon: "cog",
						content: i
					}).addTo(this), this.settingsControl.onOpen(function () {
						e.searchControl.close()
					})
				}, e.prototype.focusOn = function (t) {
					this.legend.reset(), this.legendLandscape.reset(), this.setView(t.getLatLng(), Math.max(t.getMinZoom(), this.getZoom())), t.openPopupWhenLoaded()
				}, e
			}(n.Map);
			e.Map = v
		}.apply(e, o)) || (t.exports = r)
	}).call(this, n(1).Promise)
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z";
	e.definition = {
		prefix: "fas",
		iconName: "undo",
		icon: [512, 512, i, "f0e2", o]
	}, e.faUndo = e.definition, e.prefix = "fas", e.iconName = "undo", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f0e2", e.svgPathData = o
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z";
	e.definition = {
		prefix: "fas",
		iconName: "link",
		icon: [512, 512, i, "f0c1", o]
	}, e.faLink = e.definition, e.prefix = "fas", e.iconName = "link", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f0c1", e.svgPathData = o
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z";
	e.definition = {
		prefix: "fas",
		iconName: "edit",
		icon: [576, 512, i, "f044", o]
	}, e.faEdit = e.definition, e.prefix = "fas", e.iconName = "edit", e.width = 576, e.height = 512, e.ligatures = i, e.unicode = "f044", e.svgPathData = o
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z";
	e.definition = {
		prefix: "fas",
		iconName: "circle-notch",
		icon: [512, 512, i, "f1ce", o]
	}, e.faCircleNotch = e.definition, e.prefix = "fas", e.iconName = "circle-notch", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f1ce", e.svgPathData = o
}, function (t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = [],
		o = "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z";
	e.definition = {
		prefix: "fas",
		iconName: "check",
		icon: [512, 512, i, "f00c", o]
	}, e.faCheck = e.definition, e.prefix = "fas", e.iconName = "check", e.width = 512, e.height = 512, e.ligatures = i, e.unicode = "f00c", e.svgPathData = o
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0), n(6), n(32), n(31), n(30), n(29), n(28)], void 0 === (o = function (t, e, n, i, o, r, s, l, c) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), i.library.add(o.faCheck, c.faUndo, s.faEdit, l.faLink, r.faCircleNotch), i.dom.watch();
		var h;
		! function (t) {
			t[t.Initial = 0] = "Initial", t[t.Loading = 1] = "Loading", t[t.Loaded = 2] = "Loaded"
		}(h || (h = {}));
		var u = function (t) {
			function e(e) {
				var i = t.call(this, e) || this;
				i.contentState = h.Initial, i.container = n.DomUtil.create("div", "zd-popup");
				var o = n.DomUtil.create("h3", "zd-popup__title", i.container);
				if (e.link) {
					var r = n.DomUtil.create("a", "", o);
					var strLink = e.link;
					strLink = strLink.replace("#", " - ");
					r.setAttribute("target", "_blank"), r.setAttribute("href", "https://www.qwant.com/?q=zelda+botw+" + encodeURIComponent(strLink)), r.innerText = e.name
				} else
					o.innerText = e.name;
				i.body = n.DomUtil.create("div", "zd-popup__body", i.container), i.controls = n.DomUtil.create("div", "zd-popup__controls", i.container);
				var a = n.DomUtil.create("a", "zd-popup__control zd-popup__control--complete", i.controls);
				n.DomUtil.create("i", "fas fa-check", a).title = "Mark completed", n.DomEvent.addListener(a, "click", function () {
					i.markCompleted(), e.complete()
				});
				var s = n.DomUtil.create("a", "zd-popup__control zd-popup__control--uncomplete", i.controls);
				if (n.DomUtil.create("i", "fas fa-undo", s).title = "Mark not completed", n.DomEvent.addListener(s, "click", function () {
						i.markUncompleted(), e.uncomplete()
					}), e.editLink) {
					var l = n.DomUtil.create("a", "zd-popup__control zd-popup__control--edit", i.controls);
					//l.setAttribute("target","_blank"),l.setAttribute("href","https://www.qwant.com/?q="+encodeURIComponent(e.editLink)),
					//n.DomUtil.create("i","fas fa-edit",l).title="Search"
				}
				var c = n.DomUtil.create("a", "zd-popup__control zd-popup__control--permalink", i.controls);
				return c.setAttribute("href", "?id=" + e.id), n.DomUtil.create("i", "fas fa-link", c).title = "Permalink", i.setContent(i.container), i
			}
			return a(e, t), e.create = function (t) {
					return void 0 == t.autoPan && (t.autoPan = !0), void 0 == t.minWidth && (t.minWidth = 100), void 0 == t.maxWidth && (t.maxWidth = 300), new e(t)
				}, e.prototype.markCompleted = function () {
					n.DomUtil.addClass(this.controls, "zd-popup__controls--completed")
				}, e.prototype.markUncompleted = function () {
					n.DomUtil.removeClass(this.controls, "zd-popup__controls--completed")
				}, e.prototype.loadContentFromSummary = function (t) {
					var e = this;
					this.contentState === h.Initial && (this.startLoading(), this.options.getWikiConnector().query("action=query&prop=pageprops&titles=" + encodeURIComponent(t)).then(function (t) {
						var n = Object.keys(t.query.pages)[0],
							i = t.query.pages[n];
						e.loadContent("-1" !== n && i.pageprops && i.pageprops.description ? "<p>" + i.pageprops.description + "</p>" : "")
					}))
				}, e.prototype.loadContentFromSection = function (t, e) {
					var n = this;
					if (this.contentState === h.Initial) {
						this.startLoading();
						var i = encodeURIComponent("{{#lst:" + t + "|" + e + "}}");
						this.options.getWikiConnector().query("action=parse&prop=text&contentmodel=wikitext&text=" + i).then(function (t) {
							var e = t.parse.text["*"];
							(e = e.replace(/\s*<!--[\s\S]*-->\s*/g, "")).match(/page does not exist/) && (e = e.replace(">" + name + "</a>", ">Create this article</a>")), n.loadContent(e)
						})
					}
				}, e.prototype.loadContentFromSubpage = function (t, e) {
					var n = e ? "Map/" + e : "Map";
					this.loadContentFromPage(t + "/" + n)
				}, e.prototype.loadContentFromPage = function (t) {
					var e = this;
					this.contentState === h.Initial && (this.startLoading(), this.options.getWikiConnector().query("action=parse&page=" + encodeURIComponent(t)).then(function (t) {
						e.loadContent(t.parse && t.parse.text["*"] || "")
					}))
				}, e.prototype.startLoading = function () {
					this.contentState = h.Loading;
					var t = n.DomUtil.create("div", "zd-popup__loading-indicator", this.body);
					//n.DomUtil.create("i","fas fa-circle-notch fa-spin fa-3x fa-fw",t)
				},
				e.prototype.loadContent = function (t) {
					var e = this;
					this.body.innerHTML = t;
					for (var i = this.body.getElementsByClassName("internal-link"), o = function (t) {
							var o = i[t];
							n.DomEvent.addListener(o, "click", function () {
								var t = o.getAttribute("data-target");
								t && e.options.linkClicked(t)
							})
						}, r = 0; r < i.length; ++r) o(r);
					this.setContent(this.container), this.contentState = h.Loaded
				}, e
		}(n.Popup);
		e.Popup = u
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0), n(33)], void 0 === (o = function (t, e, n, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function (t) {
			function e(e, n, i, o) {
				var r = t.call(this, i, {
					title: n,
					icon: o
				}) || this;
				return r.tileContainers = [], r.id = e, r.name = n, r
			}
			return a(e, t), e.fromJSON = function (t, o) {
				var r = o.icon || n.divIcon({
						className: "zd-void-icon"
					}),
					a = new e(t.id, t.name, t.coords, r);
				a.layer = o, a.tags = t.tags || [];
				var s = t.link ? t.link.split("#") : [],
					l = "" + ("summary" !== o.infoSource && "section" !== o.infoSource && o.infoSource ? "subpage" === o.infoSource && s[1] ? s[0] + "/Map/" + s[1] : "subpage" === o.infoSource ? s[0] + "/Map" : s[0] : s[0]);
				return o.icon ? (a.popup = i.Popup.create({
					id: t.id,
					name: t.name,
					link: t.link,
					editLink: l,
					getWikiConnector: function () {
						return a.map.wiki
					},
					complete: function () {
						a.map.wiki.complete(a.id), a.complete()
					},
					uncomplete: function () {
						a.map.wiki.uncomplete(a.id), a.map.taggedMarkers.Completed.removeMarker(a);
						var t = a.tags.indexOf("Completed");
						t > -1 && a.tags.splice(t, 1), a.updateVisibility()
					},
					linkClicked: function (t) {
						a.map.navigateToMarkerById(t)
					}
				}), a.bindPopup(a.popup), a.on("popupopen", function () {
					"summary" === o.infoSource ? a.popup.loadContentFromSummary(s[0]) : "section" === o.infoSource ? a.popup.loadContentFromSection(s[0], t.id.match(/^Seed\d{3}$/) ? t.id + "summary" : s[1] || "summary") : "subpage" === o.infoSource ? a.popup.loadContentFromSubpage(s[0], s[1]) : o.infoSource && a.popup.loadContentFromPage(o.infoSource)
				})) : a.bindTooltip(t.name, {
					permanent: !0,
					direction: "center",
					className: "zd-location-label"
				}).openTooltip(), t.path && (a.path = n.polyline(t.path, {
					color: "#ffffff"
				})), a
			}, e.prototype.addToTileContainer = function (t) {
				this.tileContainers.push(t), this.updateVisibility()
			}, e.prototype.addToMap = function (t) {
				this.map = t, this.updateVisibility()
			}, e.prototype.complete = function () {
				this.map.taggedMarkers.Completed.addMarker(this), this.tags.push("Completed"), this.popup.markCompleted(), this.updateVisibility()
			}, e.prototype.clearCompletion = function () {
				var t = this.tags.indexOf("Completed");
				t > -1 && this.tags.splice(t, 1), this.popup.markUncompleted(), this.updateVisibility()
			}, e.prototype.updateVisibility = function () {
				var t = this;
				this.layer && this.tileContainers.some(function (t) {
					return t.isVisible()
				}) && this.tags.every(function (e) {
					return !t.map.taggedMarkers[e] || t.map.taggedMarkers[e].isVisible()
				}) ? (this.addTo(this.layer), this.path && this.path.addTo(this.layer)) : this.layer && (this.layer.removeLayer(this), this.path && this.layer.removeLayer(this.path))
			}, e.prototype.openPopupWhenLoaded = function () {
				var t = this;
				if (this.layer.hasLayer(this) && this.layer.isVisible()) this.openPopup();
				else {
					var e = function () {
						t.off("add", e), t.layer.off("add", e), t.layer.hasLayer(t) ? t.layer.isVisible() ? t.openPopup() : t.layer.on("add", e) : t.on("add", e)
					};
					e()
				}
			}, e.prototype.getIconUrl = function () {
				return this.layer.getIconUrl()
			}, e.prototype.getIconWidth = function () {
				return this.layer.getIconWidth()
			}, e.prototype.getMinZoom = function () {
				return this.layer.getMinZoom()
			}, e
		}(n.Marker);
		e.Marker = o
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	var i, o, r, a = this && this.__extends || (r = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		},
		function (t, e) {
			function n() {
				this.constructor = t
			}
			r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
		});
	i = [n, e, n(0), n(34)], void 0 === (o = function (t, e, n, i) {
		"use strict";
		var o;
		Object.defineProperty(e, "__esModule", {
				value: !0
			}),
			function (t) {
				t[t.Off = 0] = "Off", t[t.On = 1] = "On", t[t.Default = 2] = "Default"
			}(o || (o = {}));
		var r = function (t) {
			function e() {
				var e = t.call(this) || this;
				return e.minZoom = 0, e.maxZoom = Number.MAX_VALUE, e.visibility = o.Default, e
			}
			return a(e, t), e.fromJSON = function (t, o) {
				var r = new e;
				return r.infoSource = o, t.icon && (r.icon = n.icon({
					iconUrl: "markers/" + t.icon.url,
					iconSize: [t.icon.width, t.icon.height]
				})), void 0 != t.minZoom && (r.minZoom = t.minZoom), void 0 != t.maxZoom && (r.maxZoom = t.maxZoom), r.markers = t.markers.map(function (t) {
					return i.Marker.fromJSON(t, r)
				}), r
			}, e.prototype.addToMap = function (t) {
				var e = this;
				this.map = t, this.updateVisibility(), t.on("zoom", function (t) {
					return e.updateVisibility()
				}), this.markers.forEach(function (e) {
					return t.addMarker(e)
				})
			}, e.prototype.getIconUrl = function () {
				return this.icon && this.icon.options.iconUrl || ""
			}, e.prototype.getIconWidth = function () {
				return this.icon && this.icon.options.iconSize[0] || 0
			}, e.prototype.getMinZoom = function () {
				return this.minZoom
			}, e.prototype.isVisible = function () {
				return this.map.hasLayer(this)
			}, e.prototype.forceShow = function () {
				this.setVisibility(o.On)
			}, e.prototype.forceHide = function () {
				this.setVisibility(o.Off)
			}, e.prototype.resetVisibility = function () {
				this.setVisibility(o.Default)
			}, e.prototype.setVisibility = function (t) {
				this.visibility = t, this.updateVisibility()
			}, e.prototype.updateVisibility = function () {
				var t = this.map.getZoom();
				this.visibility === o.On || this.visibility === o.Default && t >= this.minZoom && t <= this.maxZoom ? this.addTo(this.map) : this.removeFrom(this.map)
			}, e
		}(n.LayerGroup);
		e.Layer = r
	}.apply(e, i)) || (t.exports = o)
}, function (t, e, n) {
	var i, o;
	i = [n, e, n(35)], void 0 === (o = function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = function () {
			function t() {}
			return t.fromJSON = function (e) {
				var i = new t;
				return i.name = e.name, i.displayOrder = e.displayOrder, i.layers = e.layers.map(function (t) {
					return n.Layer.fromJSON(t, e.source)
				}), i
			}, t.prototype.addToMap = function (t) {
				this.layers.forEach(function (e) {
					return e.addToMap(t)
				})
			}, t.prototype.getIconUrl = function () {
				return this.layers[0].getIconUrl()
			}, t.prototype.getIconWidth = function () {
				return this.layers[0].getIconWidth()
			}, t.prototype.forceShow = function () {
				this.layers.forEach(function (t) {
					return t.forceShow()
				})
			}, t.prototype.forceHide = function () {
				this.layers.forEach(function (t) {
					return t.forceHide()
				})
			}, t.prototype.resetVisibility = function () {
				this.layers.forEach(function (t) {
					return t.resetVisibility()
				})
			}, t
		}();
		e.Category = i
	}.apply(e, i)) || (t.exports = o)
}, function (t, e) {
	var n;
	n = function () {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch (t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function (t, e) {
	var n, i, o = t.exports = {};

	function r() {
		throw new Error("setTimeout has not been defined")
	}

	function a() {
		throw new Error("clearTimeout has not been defined")
	}

	function s(t) {
		if (n === setTimeout) return setTimeout(t, 0);
		if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
		try {
			return n(t, 0)
		} catch (e) {
			try {
				return n.call(null, t, 0)
			} catch (e) {
				return n.call(this, t, 0)
			}
		}
	}! function () {
		try {
			n = "function" == typeof setTimeout ? setTimeout : r
		} catch (t) {
			n = r
		}
		try {
			i = "function" == typeof clearTimeout ? clearTimeout : a
		} catch (t) {
			i = a
		}
	}();
	var l, c = [],
		h = !1,
		u = -1;

	function d() {
		h && l && (h = !1, l.length ? c = l.concat(c) : u = -1, c.length && p())
	}

	function p() {
		if (!h) {
			var t = s(d);
			h = !0;
			for (var e = c.length; e;) {
				for (l = c, c = []; ++u < e;) l && l[u].run();
				u = -1, e = c.length
			}
			l = null, h = !1,
				function (t) {
					if (i === clearTimeout) return clearTimeout(t);
					if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
					try {
						i(t)
					} catch (e) {
						try {
							return i.call(null, t)
						} catch (e) {
							return i.call(this, t)
						}
					}
				}(t)
		}
	}

	function f(t, e) {
		this.fun = t, this.array = e
	}

	function m() {}
	o.nextTick = function (t) {
		var e = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
		c.push(new f(t, e)), 1 !== c.length || h || s(p)
	}, f.prototype.run = function () {
		this.fun.apply(null, this.array)
	}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (t) {
		return []
	}, o.binding = function (t) {
		throw new Error("process.binding is not supported")
	}, o.cwd = function () {
		return "/"
	}, o.chdir = function (t) {
		throw new Error("process.chdir is not supported")
	}, o.umask = function () {
		return 0
	}
}, , , , function (t, e, n) {
	(function (i) {
		var o, r, a = this && this.__awaiter || function (t, e, n, o) {
				return new(n || (n = i))(function (i, r) {
					function a(t) {
						try {
							l(o.next(t))
						} catch (t) {
							r(t)
						}
					}

					function s(t) {
						try {
							l(o.throw(t))
						} catch (t) {
							r(t)
						}
					}

					function l(t) {
						t.done ? i(t.value) : new n(function (e) {
							e(t.value)
						}).then(a, s)
					}
					l((o = o.apply(t, e || [])).next())
				})
			},
			s = this && this.__generator || function (t, e) {
				var n, i, o, r, a = {
					label: 0,
					sent: function () {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return r = {
					next: s(0),
					throw: s(1),
					return: s(2)
				}, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
					return this
				}), r;

				function s(r) {
					return function (s) {
						return function (r) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (n = 1, i && (o = i[2 & r[0] ? "return" : r[0] ? "throw" : "next"]) && !(o = o.call(i, r[1])).done) return o;
								switch (i = 0, o && (r = [0, o.value]), r[0]) {
									case 0:
									case 1:
										o = r;
										break;
									case 4:
										return a.label++, {
											value: r[1],
											done: !1
										};
									case 5:
										a.label++, i = r[1], r = [0];
										continue;
									case 7:
										r = a.ops.pop(), a.trys.pop();
										continue;
									default:
										if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
											a = 0;
											continue
										}
										if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
											a.label = r[1];
											break
										}
										if (6 === r[0] && a.label < o[1]) {
											a.label = o[1], o = r;
											break
										}
										if (o && a.label < o[2]) {
											a.label = o[2], a.ops.push(r);
											break
										}
										o[2] && a.ops.pop(), a.trys.pop();
										continue
								}
								r = e.call(t, a)
							} catch (t) {
								r = [6, t], i = 0
							} finally {
								n = o = 0
							}
							if (5 & r[0]) throw r[1];
							return {
								value: r[0] ? r[1] : void 0,
								done: !0
							}
						}([r, s])
					}
				}
			};
		o = [n, e, n(36), n(27), n(13)], void 0 === (r = function (t, e, n, i) {
			"use strict";
			var o = this;
			Object.defineProperty(e, "__esModule", {
				value: !0
			}), window.onload = function () {
				return a(o, void 0, void 0, function () {
					function t(t) {
						t.forEach(function (t) {
							return e.addCategory(n.Category.fromJSON(t))
						})
					}
					var e, o, r, a, l, c;
					return s(this, function (n) {
						switch (n.label) {
							case 0:
								return e = i.Map.create("botw", 24e3, 750, {
									center: [-3750, -1900],
									tags: ["Master Mode", "DLC"]
								}), o = fetch("markers/locations.json").then(function (t) {
									return t.json()
								}).then(t), r = fetch("markers/pins.json").then(function (t) {
									return t.json()
								}).then(t), a = fetch("markers/seeds.json").then(function (t) {
									return t.json()
								}).then(function (e) {
									var n = e[0].layers[0];
									n.markers = n.markers.map(function (t) {
										return {
											coords: t.coords[0],
											id: t.id,
											name: e[0].name,
											link: t.loc + "#" + t.id,
											path: t.coords.length > 1 ? t.coords : void 0
										}
									}), t(e)
								}), l = fetch("markers/treasures.json").then(function (t) {
									return t.json()
								}).then(t), c = fetch("markers/wiki.json").then(function (t) {
									return t.json()
								}).then(t), [4, o.catch(function () {})];
							case 1:
								return n.sent(), [4, r.catch(function () {})];
							case 2:
								return n.sent(), [4, a.catch(function () {})];
							case 3:
								return n.sent(), [4, l.catch(function () {})];
							case 4:
								return n.sent(), [4, c.catch(function () {})];
							case 5:
								return n.sent(), [4, e.initializeWikiConnector()];
							case 6:
								return n.sent(), [2]
						}
					})
				})
			}
		}.apply(e, o)) || (t.exports = r)
	}).call(this, n(1).Promise)
}]);
//# sourceMappingURL=bundle.js.map