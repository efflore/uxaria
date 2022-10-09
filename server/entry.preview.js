'use strict';
var ma = (e, t, n) => {
	if (!t.has(e)) throw TypeError('Cannot ' + n);
};
var Z = (e, t, n) => (ma(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	st = (e, t, n) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	Te = (e, t, n, s) => (ma(e, t, 'write to private field'), s ? s.call(e, n) : t.set(e, n), n);
Object.defineProperties(exports, {
	__esModule: { value: !0 },
	[Symbol.toStringTag]: { value: 'Module' }
});
const ud = require('node:http'),
	dd = require('node:https'),
	fd = require('node:zlib'),
	Re = require('node:stream'),
	se = require('node:buffer'),
	Qe = require('node:util'),
	hd = require('node:url'),
	pd = require('node:net'),
	cs = (e) => (e && typeof e == 'object' && 'default' in e ? e : { default: e });
function md(e) {
	if (e && e.__esModule) return e;
	const t = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
	if (e) {
		for (const n in e)
			if (n !== 'default') {
				const s = Object.getOwnPropertyDescriptor(e, n);
				Object.defineProperty(t, n, s.get ? s : { enumerable: !0, get: () => e[n] });
			}
	}
	return (t.default = e), Object.freeze(t);
}
const Dn = cs(ud),
	yd = cs(dd),
	Nt = cs(fd),
	Ae = cs(Re);
/**
 * @license
 * @builder.io/qwik 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const Yn = (e) => e && typeof e.nodeType == 'number',
	dl = (e) => e && e.nodeType === 9,
	Kn = (e) => e.nodeType === 1,
	Zt = (e) => Yn(e) && (e.nodeType === 1 || e.nodeType === 111),
	Ve = (e) => e.nodeType === 111,
	fl = (e) => e.nodeType === 3,
	us = (e) => e.nodeType === 8,
	Gn = (e, ...t) => {
		const n = e instanceof Error ? e : new Error(e);
		return (
			typeof globalThis._handleError == 'function' && e instanceof Error
				? globalThis._handleError(e, t)
				: console.error('%cQWIK ERROR', '', n.message, ...bd(t), n.stack),
			n
		);
	},
	qo = (e, ...t) => Gn(e, ...t),
	bd = (e) => e,
	de = (e, ...t) => {
		const n = ds(e);
		return qo(n, ...t);
	},
	ds = (e) => `Code(${e})`,
	Co = (e) => {
		const t = Object.getPrototypeOf(e);
		return t === Object.prototype || t === null;
	},
	De = (e) => e && typeof e == 'object',
	ne = (e) => Array.isArray(e),
	Zn = (e) => typeof e == 'string',
	Ie = (e) => typeof e == 'function',
	Rt = 'q:slot',
	pe = (e) => e instanceof Promise,
	Ao = (e, t, n) => {
		try {
			const s = e();
			return pe(s) ? s.then(t, n) : t(s);
		} catch (s) {
			return n(s);
		}
	},
	z = (e, t) => (pe(e) ? e.then(t) : t(e)),
	Bn = (e) => (e.some(pe) ? Promise.all(e) : e),
	fo = (e) => e != null,
	$d = (e) =>
		new Promise((t) => {
			setTimeout(t, e);
		});
let In;
const Fr = () => {
		if (!In) {
			const e = typeof document < 'u' && document && document.__q_context__;
			return e ? (ne(e) ? (document.__q_context__ = pl(e)) : e) : void 0;
		}
		return In;
	},
	hl = () => {
		const e = Fr();
		if (!e) throw de(14);
		return e;
	},
	Po = () => {
		const e = hl();
		if (e.$event$ !== 'qRender') throw de(20);
		return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
	},
	lt = (e, t, ...n) => {
		const s = In;
		let i;
		try {
			(In = e), (i = t.apply(null, n));
		} finally {
			In = s;
		}
		return i;
	},
	gd = (e, t) => {
		const n = e.$waitOn$;
		if (n.length === 0) {
			const s = t();
			pe(s) && n.push(s);
		} else n.push(Promise.all(n).then(t));
	},
	pl = (e) => {
		const t = e[0];
		return Ye(void 0, t, e[1], e[2]);
	},
	Ye = (e, t, n, s) => ({
		$seq$: 0,
		$hostElement$: e,
		$element$: t,
		$event$: n,
		$url$: s,
		$qrl$: void 0,
		$props$: void 0,
		$renderCtx$: void 0,
		$subscriber$: void 0,
		$waitOn$: void 0
	}),
	ml = (e) => e.closest('[q\\:container]'),
	fs = (e) => (typeof document < 'u' ? document : e.nodeType === 9 ? e : e.ownerDocument),
	wd = (e) => De(e) && e[Symbol.toStringTag] === 'Module';
let Io = (() => {
	const e = new Map();
	return {
		isServer: !1,
		importSymbol(t, n, s) {
			const i = ((d, f, p) => {
					var b;
					const _ = d.baseURI,
						g = new URL((b = f.getAttribute('q:base')) != null ? b : _, _);
					return new URL(p, g);
				})(t.ownerDocument, t, n).toString(),
				a = new URL(i);
			(a.hash = ''), (a.search = '');
			const l = a.href,
				u = e.get(l);
			return u
				? u[s]
				: Promise.resolve()
						.then(() => md(require(l)))
						.then((d) => {
							return (f = d), (d = Object.values(f).find(wd) || f), e.set(l, d), d[s];
							var f;
						});
		},
		raf: (t) =>
			new Promise((n) => {
				requestAnimationFrame(() => {
					n(t());
				});
			}),
		nextTick: (t) =>
			new Promise((n) => {
				setTimeout(() => {
					n(t());
				});
			}),
		chunkForSymbol() {}
	};
})();
const _d = (e) => (Io = e),
	hs = () => Io,
	Jt = () => Io.isServer,
	Ue = [],
	it = {},
	te = (e, t, n = Ue) => ei(null, t, e, null, null, n, null),
	Oo = (e, t = {}) => {
		var f;
		let n = e.$symbol$,
			s = e.$chunk$;
		const i = (f = e.$refSymbol$) != null ? f : n,
			a = hs();
		if (a) {
			const p = a.chunkForSymbol(i);
			p && ((s = p[1]), e.$refSymbol$ || (n = p[0]));
		}
		if (!s) throw de(31, e);
		s.startsWith('./') && (s = s.slice(2));
		const l = [s, '#', n],
			u = e.$capture$,
			d = e.$captureRef$;
		if (d && d.length) {
			if (t.$getObjId$) {
				const p = d.map(t.$getObjId$);
				l.push(`[${p.join(' ')}]`);
			} else if (t.$addRefMap$) {
				const p = d.map(t.$addRefMap$);
				l.push(`[${p.join(' ')}]`);
			}
		} else u && u.length > 0 && l.push(`[${u.join(' ')}]`);
		return l.join('');
	},
	xo = (e, t) => {
		t.$element$;
		const n = { $element$: t.$element$, $addRefMap$: (s) => Sd(t.$refMap$, s) };
		return e.map((s) => Oo(s, n)).join(`
`);
	},
	ps = (e, t) => {
		const n = e.length,
			s = ya(e, 0, '#'),
			i = ya(e, s, '['),
			a = Math.min(s, i),
			l = e.substring(0, a),
			u = s == n ? s : s + 1,
			d = i,
			f = u == d ? 'default' : e.substring(u, d),
			p = i,
			_ = n,
			g = p === _ ? Ue : e.substring(p + 1, _ - 1).split(' '),
			b = ei(l, f, null, null, g, null, null);
		return t && b.$setContainer$(t), b;
	},
	ya = (e, t, n) => {
		const s = e.length,
			i = e.indexOf(n, t == s ? 0 : t);
		return i == -1 ? s : i;
	},
	Sd = (e, t) => {
		const n = e.indexOf(t);
		return n === -1 ? (e.push(t), e.length - 1) : n;
	},
	Ee = (e, t, n) => e.setAttribute(t, n),
	Fe = (e, t) => e.getAttribute(t),
	vd = /^(on|window:|document:)/,
	Lo = (e) => e.endsWith('$') && vd.test(e),
	Jn = (e, t) => {
		for (const n of t) {
			const s = n[0],
				i = n[1].$hash$;
			let a = !1;
			for (let l = 0; l < e.length; l++) {
				const u = e[l];
				if (u[0] === s && u[1].$hash$ === i) {
					e.splice(l, 1, n), (a = !0);
					break;
				}
			}
			a || e.push(n);
		}
	},
	Do = (e) => {
		if (e.length === 0) return Ue;
		if (e.length === 1) {
			const n = e[0];
			return [[n[0], [n[1]]]];
		}
		const t = [];
		for (let n = 0; n < e.length; n++) {
			const s = e[n][0];
			t.includes(s) || t.push(s);
		}
		return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
	},
	Bo = (e, t, n, s) => {
		t.endsWith('$'), (t = Kl(t.slice(0, -1)));
		const i = ne(n) ? n.map((a) => [t, ba(a, s)]) : [[t, ba(n, s)]];
		return Jn(e, i), t;
	},
	ba = (e, t) => (e.$setContainer$(t), e),
	Rd = (e, t) => {
		const n = e.$element$.attributes,
			s = [];
		for (let i = 0; i < n.length; i++) {
			const { name: a, value: l } = n.item(i);
			if (a.startsWith('on:') || a.startsWith('on-window:') || a.startsWith('on-document:')) {
				const u = l.split(`
`);
				for (const d of u) {
					const f = ps(d, t);
					f.$capture$ && Gl(f, e), s.push([a, f]);
				}
			}
		}
		return s;
	},
	Xt = () => {
		const e = Po(),
			t = e.$seq$,
			n = e.$hostElement$,
			s = oe(n),
			i = s.$seq$ ? s.$seq$ : (s.$seq$ = []);
		return e.$seq$++, { get: i[t], set: (a) => (i[t] = a), i: t, ctx: e };
	},
	Ed = (e, t) => yl(`on-${e}`, t),
	$a = (e, t) => yl(`document:on-${e}`, t),
	yl = (e, t) => {
		const n = Po(),
			s = oe(n.$hostElement$);
		Jn(s.li, [[Kl(e), t]]), (s.$needAttachListeners$ = !0);
	},
	v = (e, t, n) => {
		const s = n == null ? null : String(n);
		return new bl(e, t, s);
	};
class bl {
	constructor(t, n, s = null) {
		(this.type = t), (this.props = n), (this.key = s);
	}
}
const ms = (e) => e instanceof bl,
	Xn = (e) => e.children,
	No = Symbol('skip render'),
	$l = () => null,
	er = (e) => e.children,
	gl = () => null,
	Wo = (e) => e.replace(/([A-Z])/g, '-$1').toLowerCase(),
	ys = (e, t, n, s) => {
		e ? e.$operations$.push({ $operation$: ga, $args$: [t, n, s] }) : ga(t, n, s);
	},
	ga = (e, t, n) => {
		if (n == null || n === !1) e.removeAttribute(t);
		else {
			const s = n === !0 ? '' : String(n);
			Ee(e, t, s);
		}
	},
	St = (e, t, n, s) => {
		e ? e.$operations$.push({ $operation$: wa, $args$: [t, n, s] }) : wa(t, n, s);
	},
	wa = (e, t, n) => {
		try {
			e[t] = n;
		} catch (s) {
			Gn(ds(6), { node: e, key: t, value: n }, s);
		}
	},
	jo = (e, t, n) => (n ? e.createElementNS(Pl, t) : e.createElement(t)),
	zt = (e, t, n, s) => (e.$operations$.push({ $operation$: gs, $args$: [t, n, s || null] }), n),
	_a = (e, t, n) => (e.$operations$.push({ $operation$: Kr, $args$: [t, n] }), n),
	Sa = (e, t, n) => {
		const s = e.classList;
		s.remove(...t), s.add(...n);
	},
	kd = (e, t) => {
		const n = fs(e),
			s = n.documentElement === e,
			i = n.head,
			a = n.createElement('style');
		Ee(a, 'q:style', t.styleId), (a.textContent = t.content), s && i ? Kr(i, a) : gs(e, a, e.firstChild);
	},
	wl = (e, t) => {
		e.$operations$.push({ $operation$: Td, $args$: [t, e] });
	},
	Td = (e, t) => {
		const n = e.parentElement;
		if (n) {
			if (e.nodeType === 1 || e.nodeType === 111) {
				const s = t.$containerState$.$subsManager$;
				Ko(e, t, s, !0);
			}
			nf(n, e);
		}
	},
	_l = (e, t) => {
		const n = jo(e, 'q:template', !1);
		return Ee(n, Rt, t), Ee(n, 'hidden', ''), Ee(n, 'aria-hidden', 'true'), n;
	},
	qd = (e) => {
		for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
		Cd(e);
	},
	ho = (e) => Fe(e, 'q:key'),
	Xs = (e, t) => {
		t !== null && Ee(e, 'q:key', t);
	},
	Cd = (e) => {
		const t = e.$containerState$.$subsManager$;
		e.$rmSlots$.forEach((n) => {
			const s = ho(n),
				i = Nn(n, 'root');
			if (i.length > 0) {
				const a = n.getAttribute('q:sref'),
					l = e.$roots$.find((u) => u.$id$ === a);
				if (l) {
					const u = _l(e.$doc$, s),
						d = l.$element$;
					for (const f of i) Kr(u, f);
					gs(d, u, d.firstChild);
				} else Ko(n, e, t, !1);
			}
		}),
			e.$addSlots$.forEach(([n, s]) => {
				const i = ho(n),
					a = Array.from(s.childNodes).find((l) => Ol(l) && l.getAttribute(Rt) === i);
				a &&
					(Nn(a, 'root').forEach((l) => {
						Kr(n, l);
					}),
					a.remove());
			});
	};
class zo {
	constructor(t, n) {
		(this.open = t),
			(this.close = n),
			(this._qc_ = null),
			(this.nodeType = 111),
			(this.localName = ':virtual'),
			(this.nodeName = ':virtual');
		const s = (this.ownerDocument = t.ownerDocument);
		(this.template = jo(s, 'template', !1)),
			(this.attributes = ((i) => {
				if (!i) return new Map();
				const a = i.split(' ');
				return new Map(
					a.map((l) => {
						const u = l.indexOf('=');
						return u >= 0 ? [l.slice(0, u), ((d = l.slice(u + 1)), d.replace(/\+/g, ' '))] : [l, ''];
						var d;
					})
				);
			})(t.data.slice(3))),
			t.data.startsWith('qv '),
			(t.__virtual = this);
	}
	insertBefore(t, n) {
		const s = this.parentElement;
		if (s) {
			const i = n || this.close;
			s.insertBefore(t, i);
		} else this.template.insertBefore(t, n);
		return t;
	}
	remove() {
		const t = this.parentElement;
		if (t) {
			const n = Array.from(this.childNodes);
			this.template.childElementCount, t.removeChild(this.open), this.template.append(...n), t.removeChild(this.close);
		}
	}
	appendChild(t) {
		return this.insertBefore(t, null);
	}
	insertBeforeTo(t, n) {
		const s = Array.from(this.childNodes);
		t.insertBefore(this.open, n);
		for (const i of s) t.insertBefore(i, n);
		t.insertBefore(this.close, n), this.template.childElementCount;
	}
	appendTo(t) {
		this.insertBeforeTo(t, null);
	}
	removeChild(t) {
		this.parentElement ? this.parentElement.removeChild(t) : this.template.removeChild(t);
	}
	getAttribute(t) {
		var n;
		return (n = this.attributes.get(t)) != null ? n : null;
	}
	hasAttribute(t) {
		return this.attributes.has(t);
	}
	setAttribute(t, n) {
		this.attributes.set(t, n), (this.open.data = va(this.attributes));
	}
	removeAttribute(t) {
		this.attributes.delete(t), (this.open.data = va(this.attributes));
	}
	matches(t) {
		return !1;
	}
	compareDocumentPosition(t) {
		return this.open.compareDocumentPosition(t);
	}
	closest(t) {
		const n = this.parentElement;
		return n ? n.closest(t) : null;
	}
	querySelectorAll(t) {
		const n = [];
		return (
			Nn(this, 'elements').forEach((s) => {
				Zt(s) && (s.matches(t) && n.push(s), n.concat(Array.from(s.querySelectorAll(t))));
			}),
			n
		);
	}
	querySelector(t) {
		for (const n of this.childNodes)
			if (Kn(n)) {
				if (n.matches(t)) return n;
				const s = n.querySelector(t);
				if (s !== null) return s;
			}
		return null;
	}
	get firstChild() {
		if (this.parentElement) {
			const t = this.open.nextSibling;
			return t === this.close ? null : t;
		}
		return this.template.firstChild;
	}
	get nextSibling() {
		return this.close.nextSibling;
	}
	get previousSibling() {
		return this.open.previousSibling;
	}
	get childNodes() {
		if (!this.parentElement) return this.template.childNodes;
		const t = [];
		let n = this.open;
		for (; (n = n.nextSibling) && n !== this.close; ) t.push(n);
		return t;
	}
	get isConnected() {
		return this.open.isConnected;
	}
	get parentElement() {
		return this.open.parentElement;
	}
}
const va = (e) =>
		`qv ${((t) => {
			const n = [];
			return (
				t.forEach((s, i) => {
					var a;
					s ? n.push(`${i}=${((a = s), a.replace(/ /g, '+'))}`) : n.push(`${i}`);
				}),
				n.join(' ')
			);
		})(e)}`,
	Mo = (e) => {
		if (e == null) return null;
		if (us(e)) {
			const t = Hr(e);
			if (t) return t;
		}
		return e;
	},
	Hr = (e) => {
		const t = e.__virtual;
		if (t) return t;
		if (e.data.startsWith('qv ')) {
			const n = Sl(e);
			return new zo(e, n);
		}
		return null;
	},
	Sl = (e) => {
		let t = e.nextSibling,
			n = 1;
		for (; t; ) {
			if (us(t)) {
				if (t.data.startsWith('qv ')) n++;
				else if (t.data === '/qv' && (n--, n === 0)) return t;
			}
			t = t.nextSibling;
		}
		throw new Error('close not found');
	},
	Ur = (e) => (e == null ? null : Ve(e) ? e.open : e),
	en = (e) => (/^[\w/.-]+$/.test(e), Object.freeze({ id: Wo(e) })),
	Rn = (e, t) => {
		const { get: n, set: s, ctx: i } = Xt();
		if (n !== void 0) return;
		const a = i.$hostElement$,
			l = oe(a);
		let u = l.$contexts$;
		u || (l.$contexts$ = u = new Map()), u.set(e.id, t), s(!0);
	},
	bs = (e, t) => {
		const { get: n, set: s, ctx: i } = Xt();
		if (n !== void 0) return n;
		const a = vl(e, i.$hostElement$, i.$renderCtx$);
		if (a !== void 0) return s(a);
		if (t !== void 0) return s(t);
		throw de(13, e.id);
	},
	vl = (e, t, n) => {
		const s = e.id;
		if (n) {
			const i = n.$localStack$;
			for (let a = i.length - 1; a >= 0; a--) {
				const l = i[a];
				if (((t = l.$element$), l.$contexts$)) {
					const u = l.$contexts$.get(s);
					if (u) return u;
				}
			}
		}
		if (t.closest) {
			const i = Ad(t, s);
			if (i !== void 0) return i;
		}
	},
	Ad = (e, t) => {
		var s;
		let n = e;
		for (; n; ) {
			let i = n,
				a;
			for (; i && (a = Pd(i)); ) {
				const l = (s = Oe(a)) == null ? void 0 : s.$contexts$;
				if (l && l.has(t)) return l.get(t);
				i = a;
			}
			n = n.parentElement;
		}
	},
	Pd = (e) => {
		let t = e,
			n = 1;
		for (; (t = t.previousSibling); )
			if (us(t)) {
				if (t.data === '/qv') n++;
				else if (t.data.startsWith('qv ') && (n--, n === 0)) return Hr(t);
			}
		return null;
	},
	Id = en('qk-error'),
	Rl = (e, t, n) => {
		if (Jt()) throw e;
		{
			const s = vl(Id, t, n);
			if (s === void 0) throw e;
			s.error = e;
		}
	},
	Qr = (e, t) => {
		(t.$dirty$ = !1), (t.$mounted$ = !0), (t.$slots$ = []);
		const n = t.$element$,
			s = t.$componentQrl$,
			i = t.$props$,
			a = Fo(e, t),
			l = Ye(n, void 0, 'qRender'),
			u = (l.$waitOn$ = []);
		(a.$cmpCtx$ = t),
			(l.$subscriber$ = n),
			(l.$renderCtx$ = e),
			s.$setContainer$(e.$static$.$containerState$.$containerEl$);
		const d = s.getFn(l);
		return Ao(
			() => d(i),
			(f) =>
				u.length > 0
					? Promise.all(u).then(() => (t.$dirty$ ? Qr(e, t) : { node: f, rCtx: a }))
					: t.$dirty$
					? Qr(e, t)
					: { node: f, rCtx: a },
			(f) => (Rl(f, n, e), { node: No, rCtx: a })
		);
	},
	El = (e, t) => ({
		$static$: {
			$doc$: e,
			$containerState$: t,
			$hostElements$: new Set(),
			$operations$: [],
			$postOperations$: [],
			$roots$: [],
			$addSlots$: [],
			$rmSlots$: []
		},
		$cmpCtx$: void 0,
		$localStack$: []
	}),
	Fo = (e, t) => ({
		$static$: e.$static$,
		$cmpCtx$: e.$cmpCtx$,
		$localStack$: e.$localStack$.concat(t)
	}),
	kl = (e) => {
		if (Zn(e)) return e;
		if (De(e)) {
			if (ne(e)) return e.join(' ');
			{
				let t = '',
					n = !1;
				for (const s of Object.keys(e)) e[s] && (n && (t += ' '), (t += s), (n = !0));
				return t;
			}
		}
		return '';
	},
	Od = /\s/,
	po = (e) => (e ? e.split(Od) : Ue),
	Tl = (e) => {
		if (e == null) return '';
		if (typeof e == 'object') {
			if (ne(e)) throw de(0, e, 'style');
			{
				const t = [];
				for (const n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						const s = e[n];
						s && t.push(Wo(n) + ':' + s);
					}
				return t.join(';');
			}
		}
		return String(e);
	},
	$s = (e) => es(e.$static$.$containerState$.$elementIndex$++),
	mo = (e, t) => {
		const n = $s(e);
		(t.$id$ = n), t.$element$.setAttribute('q:id', n);
	},
	xd = [Rt, 'children'],
	ql = (e) => {
		const t = e.join(' ');
		if (t.length > 0) return t;
	},
	Ho = (e, t, n) => {
		const s = !t.$mounted$,
			i = t.$element$,
			a = e.$static$.$containerState$;
		return (
			a.$hostsStaging$.delete(i),
			a.$subsManager$.$clearSub$(i),
			z(Qr(e, t), (l) => {
				const u = e.$static$,
					d = l.rCtx,
					f = Ye(i);
				if ((u.$hostElements$.add(i), (f.$subscriber$ = i), (f.$renderCtx$ = d), s)) {
					if (t.$appendStyles$)
						for (const b of t.$appendStyles$)
							(_ = b),
								(p = u).$containerState$.$styleIds$.add(_.styleId),
								p.$postOperations$.push({
									$operation$: kd,
									$args$: [p.$containerState$.$containerEl$, _]
								});
					if (t.$scopeIds$) {
						const b = ql(t.$scopeIds$);
						b && i.setAttribute('q:sstyle', b);
					}
				}
				var p, _;
				const g = An(l.node, f);
				return z(g, (b) => {
					const m = Ld(i, b),
						$ = Cl(t);
					return z(zd(d, $, m, n), () => {
						t.$vdom$ = m;
					});
				});
			})
		);
	},
	Cl = (e) => (e.$vdom$ || (e.$vdom$ = Wn(e.$element$)), e.$vdom$);
class He {
	constructor(t, n, s, i) {
		(this.$type$ = t),
			(this.$props$ = n),
			(this.$children$ = s),
			(this.$key$ = i),
			(this.$elm$ = null),
			(this.$text$ = ''),
			(this.$signal$ = null);
	}
}
const Ld = (e, t) => {
		const n = t === void 0 ? Ue : ne(t) ? t : [t],
			s = new He(':virtual', {}, n, null);
		return (s.$elm$ = e), s;
	},
	An = (e, t) => {
		if (e != null && typeof e != 'boolean') {
			if (Dd(e)) {
				const n = new He('#text', it, Ue, null);
				return (n.$text$ = String(e)), n;
			}
			if (ms(e))
				return ((n, s) => {
					const i = n.key != null ? String(n.key) : null,
						a = n.type,
						l = n.props,
						u = l.children;
					let d = '';
					if (Zn(a)) d = a;
					else {
						if (a !== er) {
							if (Ie(a)) {
								const p = lt(s, a, l, n.key);
								return An(p, s);
							}
							throw de(25, a);
						}
						d = ':virtual';
					}
					let f = Ue;
					return u != null
						? z(An(u, s), (p) => (p !== void 0 && (f = ne(p) ? p : [p]), new He(d, l, f, i)))
						: new He(d, l, f, i);
				})(e, t);
			if (Le(e)) {
				const n = e.value,
					s = new He('#text', it, Ue, null);
				return (s.$text$ = String(n)), (s.$signal$ = e), s;
			}
			if (ne(e)) {
				const n = Bn(e.flatMap((s) => An(s, t)));
				return z(n, (s) => s.flat(100).filter(fo));
			}
			return pe(e) ? e.then((n) => An(n, t)) : e === No ? new He(':skipRender', it, Ue, null) : void 0;
		}
	},
	Dd = (e) => Zn(e) || typeof e == 'number',
	Ra = Symbol('ContainerState'),
	Vr = (e) => {
		let t = e[Ra];
		return t || (e[Ra] = t = Al(e)), t;
	},
	Al = (e) => {
		const t = {
			$containerEl$: e,
			$proxyMap$: new WeakMap(),
			$subsManager$: null,
			$opsNext$: new Set(),
			$watchNext$: new Set(),
			$watchStaging$: new Set(),
			$hostsNext$: new Set(),
			$hostsStaging$: new Set(),
			$renderPromise$: void 0,
			$hostsRendering$: void 0,
			$envData$: {},
			$elementIndex$: 0,
			$styleIds$: new Set()
		};
		return (t.$subsManager$ = Wd(t)), t;
	},
	Bd = (e, t) => {
		const n = e[0],
			s = t(e[1]);
		if (!s) return;
		let i = n + ' ' + s;
		if (e[0] === 0) e[2] && (i += ' ' + e[2]);
		else {
			const a = typeof e[3] == 'string' ? e[3] : Ea(t(e[3]));
			(i += ` ${Ea(t(e[2]))} ${a} ${e[4]}`), e[5] && (i += ` ${e[5]}`);
		}
		return i;
	},
	Nd = (e, t) => {
		const n = e.split(' '),
			s = parseInt(n[0], 10);
		n.length;
		const i = [s, t(n[1])];
		return s === 0 ? (n.length, i.push(n[2])) : (n.length === 5 || n.length, i.push(t(n[2]), t(n[3]), n[4], n[5])), i;
	},
	Wd = (e) => {
		const t = new Map();
		return {
			$createManager$: (n) => new jd(t, e, n),
			$clearSub$: (n) => {
				const s = t.get(n);
				if (s) {
					for (const i of s) i.$unsubGroup$(n);
					t.delete(n), (s.length = 0);
				}
			}
		};
	};
class jd {
	constructor(t, n, s) {
		(this.$groupToManagers$ = t), (this.$containerState$ = n), (this.$subs$ = s || []);
		for (const i of this.$subs$) this.$addToGroup$(i[1], this);
	}
	$addToGroup$(t, n) {
		let s = this.$groupToManagers$.get(t);
		s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n);
	}
	$unsubGroup$(t) {
		const n = this.$subs$;
		for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--);
	}
	$addSub$(t) {
		const n = this.$subs$,
			[s, i] = t,
			a = t[t.length - 1];
		(s === 0 && n.some(([l, u, d]) => l === s && u === i && d === a)) || (n.push(t), this.$addToGroup$(i, this));
	}
	$notifySubs$(t) {
		const n = this.$subs$;
		for (const s of n) {
			const i = s[s.length - 1];
			(t && i && i !== t) || of(s, this.$containerState$);
		}
	}
}
const Uo = (e, t) => {
		if (Ie(e)) return e(t);
		if (De(e)) {
			if ('current' in e) return (e.current = t);
			if ('value' in e) return (e.value = t);
		}
		throw de(32, e);
	},
	Ea = (e) => {
		if (e == null) throw Gn('must be non null', e);
		return e;
	},
	Pl = 'http://www.w3.org/2000/svg',
	Yr = [],
	zd = (e, t, n, s) => Qo(e, t, n, 'root', s),
	Qo = (e, t, n, s, i) => {
		t.$elm$;
		const a = n.$children$;
		if (a.length === 1 && a[0].$type$ === ':skipRender') return;
		const l = t.$elm$;
		t.$children$ === Yr && l.nodeName === 'HEAD' && ((s = 'head'), (i |= 2));
		const u = Md(t, s);
		return u.length > 0 && a.length > 0
			? Fd(e, l, u, a, i)
			: a.length > 0
			? xl(e, l, null, a, 0, a.length - 1, i)
			: u.length > 0
			? Vo(e.$static$, u, 0, u.length - 1)
			: void 0;
	},
	Md = (e, t) => {
		const n = e.$children$,
			s = e.$elm$;
		return n === Yr ? (e.$children$ = Il(s, t)) : n;
	},
	Fd = (e, t, n, s, i) => {
		let a = 0,
			l = 0,
			u = n.length - 1,
			d = n[0],
			f = n[u],
			p = s.length - 1,
			_ = s[0],
			g = s[p],
			b,
			m,
			$;
		const R = [],
			y = e.$static$;
		for (; a <= u && l <= p; )
			if (d == null) d = n[++a];
			else if (f == null) f = n[--u];
			else if (_ == null) _ = s[++l];
			else if (g == null) g = s[--p];
			else if (Dr(d, _)) R.push(En(e, d, _, i)), (d = n[++a]), (_ = s[++l]);
			else if (Dr(f, g)) R.push(En(e, f, g, i)), (f = n[--u]), (g = s[--p]);
			else if (Dr(d, g))
				d.$elm$, f.$elm$, R.push(En(e, d, g, i)), zt(y, t, d.$elm$, f.$elm$.nextSibling), (d = n[++a]), (g = s[--p]);
			else if (Dr(f, _))
				d.$elm$, f.$elm$, R.push(En(e, f, _, i)), zt(y, t, f.$elm$, d.$elm$), (f = n[--u]), (_ = s[++l]);
			else {
				if ((b === void 0 && (b = rf(n, a, u)), (m = b[_.$key$]), m === void 0)) {
					const T = jn(e, _, i);
					R.push(
						z(T, (E) => {
							zt(y, t, E, d == null ? void 0 : d.$elm$);
						})
					);
				} else if ((($ = n[m]), sf($, _.$type$)))
					R.push(En(e, $, _, i)), (n[m] = void 0), $.$elm$, zt(y, t, $.$elm$, d.$elm$);
				else {
					const T = jn(e, _, i);
					R.push(
						z(T, (E) => {
							zt(y, t, E, d == null ? void 0 : d.$elm$);
						})
					);
				}
				_ = s[++l];
			}
		if (l <= p) {
			const T = s[p + 1] == null ? null : s[p + 1].$elm$;
			R.push(xl(e, t, T, s, l, p, i));
		}
		let S = Bn(R);
		return (
			a <= u &&
				(S = z(S, () => {
					Vo(y, n, a, u);
				})),
			S
		);
	},
	eo = (e, t) => {
		const n = Ve(e) ? e.close : null,
			s = [];
		let i = e.firstChild;
		for (; (i = Mo(i)) && (t(i) && s.push(i), (i = i.nextSibling), i !== n); );
		return s;
	},
	Nn = (e, t) => {
		switch (t) {
			case 'root':
				return eo(e, Yd);
			case 'head':
				return eo(e, Vd);
			case 'elements':
				return eo(e, Zt);
		}
	},
	Il = (e, t) => Nn(e, t).map(Hd),
	Hd = (e) => {
		var t, n;
		return Kn(e) && (n = (t = Oe(e)) == null ? void 0 : t.$vdom$) != null ? n : Wn(e);
	},
	Wn = (e) => {
		if (Zt(e)) {
			const t = Ve(e) ? it : Ud(e),
				n = new He(e.localName, t, Yr, ho(e));
			return (n.$elm$ = e), n;
		}
		if (fl(e)) {
			const t = new He(e.nodeName, {}, Yr, null);
			return (t.$text$ = e.data), (t.$elm$ = e), t;
		}
		throw new Error('invalid node');
	},
	Ud = (e) => {
		const t = {},
			n = e.attributes,
			s = n.length;
		for (let i = 0; i < s; i++) {
			const a = n.item(i),
				l = a.name.toLowerCase();
			l.includes(':') || (t[l] = l === 'class' ? Qd(a.value) : a.value);
		}
		return t;
	},
	Qd = (e) =>
		po(e)
			.filter((t) => !t.startsWith('\u2B50\uFE0F'))
			.join(' '),
	Vd = (e) => {
		const t = e.nodeType;
		return t === 1 ? e.hasAttribute('q:head') : t === 111;
	},
	Ol = (e) => e.nodeName === 'Q:TEMPLATE',
	Yd = (e) => {
		const t = e.nodeType;
		if (t === 3 || t === 111) return !0;
		if (t !== 1) return !1;
		const n = e.nodeName;
		return n !== 'Q:TEMPLATE' && (n !== 'HEAD' || e.hasAttribute('q:head'));
	},
	En = (e, t, n, s) => {
		t.$type$, n.$type$;
		const i = t.$elm$,
			a = n.$type$,
			l = e.$static$,
			u = a === ':virtual',
			d = e.$cmpCtx$;
		if (((n.$elm$ = i), a === '#text')) {
			const $ = n.$signal$;
			return $ && tn(2, d.$element$, $, i, 'data'), void (t.$text$ !== n.$text$ && St(l, i, 'data', n.$text$));
		}
		let f = !!(1 & s);
		f || a !== 'svg' || ((s |= 1), (f = !0));
		const p = n.$props$,
			_ = u && 'q:renderFn' in p,
			g = oe(i);
		if ((l.$containerState$.$containerEl$, !_)) {
			const $ = d.li,
				R = g.li;
			if (
				((R.length = 0),
				(n.$props$ = Zd(l, g, d.$element$, t.$props$, p)),
				$.length > 0 && (Jn(R, $), ($.length = 0)),
				R.length > 0)
			) {
				const y = Do(R);
				for (const S of y) ys(l, i, S[0], xo(S[1], g));
			}
			return (
				f && n.$type$ === 'foreignObject' && ((s &= -2), (f = !1)),
				u && 'q:s' in p
					? (d.$slots$, void d.$slots$.push(n))
					: p[On] !== void 0 || (u && 'qonce' in p)
					? void 0
					: Qo(e, t, n, 'root', s)
			);
		}
		const b = p.props;
		let m = Nl(g, e, b);
		return (
			m ||
				g.$componentQrl$ ||
				g.$element$.hasAttribute('q:id') ||
				(mo(e, g), (g.$componentQrl$ = b['q:renderFn']), g.$componentQrl$, (m = !0)),
			m ? z(Ho(e, g, s), () => ka(e, g, n, s)) : ka(e, g, n, s)
		);
	},
	ka = (e, t, n, s) => {
		const i = n.$children$,
			a = e.$static$,
			l = ((f) => {
				var _;
				const p = {};
				for (const g of f) {
					const b = Dl(g);
					((_ = p[b]) != null ? _ : (p[b] = new He(':virtual', { 'q:s': '' }, [], b))).$children$.push(g);
				}
				return p;
			})(i),
			u = Fo(e, t),
			d = Bl(t);
		for (const f of Object.keys(d.slots))
			if (!l[f]) {
				const p = d.slots[f],
					_ = Il(p, 'root');
				if (_.length > 0) {
					const g = Oe(p);
					g && g.$vdom$ && (g.$vdom$.$children$ = []), Vo(a, _, 0, _.length - 1);
				}
			}
		for (const f of Object.keys(d.templates)) {
			const p = d.templates[f];
			p && ((l[f] && !d.slots[f]) || (wl(a, p), (d.templates[f] = void 0)));
		}
		return Bn(
			Object.keys(l).map((f) => {
				const p = l[f],
					_ = Ll(a, d, t.$element$, f),
					g = oe(_),
					b = Cl(g);
				return (g.$vdom$ = p), (p.$elm$ = _), Qo(u, b, p, 'root', s);
			})
		);
	},
	xl = (e, t, n, s, i, a, l) => {
		const u = [];
		let d = !1;
		for (; i <= a; ++i) {
			const f = s[i],
				p = jn(e, f, l);
			u.push(p), pe(p) && (d = !0);
		}
		if (d) return Promise.all(u).then((f) => Ta(e.$static$, t, f, n));
		Ta(e.$static$, t, u, n);
	},
	Ta = (e, t, n, s) => {
		for (const i of n) zt(e, t, i, s);
	},
	Vo = (e, t, n, s) => {
		for (; n <= s; ++n) {
			const i = t[n];
			i && (i.$elm$, wl(e, i.$elm$));
		}
	},
	Ll = (e, t, n, s) => {
		const i = t.slots[s];
		if (i) return i;
		const a = t.templates[s];
		if (a) return a;
		const l = _l(e.$doc$, s);
		return (
			((u, d, f) => {
				u.$operations$.push({ $operation$: gs, $args$: [d, f, d.firstChild] });
			})(e, n, l),
			(t.templates[s] = l),
			l
		);
	},
	Dl = (e) => {
		var t;
		return (t = e.$props$[Rt]) != null ? t : '';
	},
	jn = (e, t, n) => {
		const s = t.$type$,
			i = e.$static$.$doc$,
			a = e.$cmpCtx$;
		if (s === '#text') {
			const T = t.$signal$,
				E = ((C, I) => C.createTextNode(I))(i, t.$text$);
			return T && a && tn(2, a.$element$, T, E, 'data'), (t.$elm$ = E);
		}
		let l,
			u = !!(2 & n),
			d = !!(1 & n);
		d || s !== 'svg' || ((n |= 1), (d = !0));
		const f = s === ':virtual',
			p = t.$props$,
			_ = 'q:renderFn' in p,
			g = e.$static$;
		f
			? (l = ((T) => {
					const E = T.createComment('qv '),
						C = T.createComment('/qv');
					return new zo(E, C);
			  })(i))
			: s === 'head'
			? ((l = i.head), (n |= 2), (u = !0))
			: ((l = jo(i, s, d)), (n &= -3)),
			(t.$elm$ = l),
			d && s === 'foreignObject' && ((d = !1), (n &= -2));
		const b = oe(l);
		if (_) {
			Xs(l, t.$key$);
			const T = p['q:renderFn'];
			return (
				Nl(b, e, p.props),
				mo(e, b),
				(b.$componentQrl$ = T),
				z(Ho(e, b, n), () => {
					let E = t.$children$;
					if (E.length === 0) return l;
					E.length === 1 && E[0].$type$ === ':skipRender' && (E = E[0].$children$);
					const C = Fo(e, b),
						I = Bl(b),
						A = E.map((x) => jn(C, x, n));
					return z(Bn(A), () => {
						for (const x of E) x.$elm$, _a(g, Ll(g, I, l, Dl(x)), x.$elm$);
						return l;
					});
				})
			);
		}
		const m = f && 'q:s' in p,
			$ = !f && 'ref' in p,
			R = b.li;
		if (((t.$props$ = ef(g, b, a == null ? void 0 : a.$element$, p)), a && !f)) {
			const T = a.$scopeIds$;
			T &&
				T.forEach((E) => {
					l.classList.add(E);
				}),
				a.$needAttachListeners$ && (Jn(R, a.li), (a.$needAttachListeners$ = !1));
		}
		m
			? (a.$slots$, Xs(l, t.$key$), Ee(l, 'q:sref', a.$id$), a.$slots$.push(t), g.$addSlots$.push([l, a.$element$]))
			: Xs(l, t.$key$);
		{
			u && !f && Ee(l, 'q:head', ''), (R.length > 0 || $) && mo(e, b);
			const T = Do(R);
			for (const E of T) ys(g, l, E[0], xo(E[1], b));
		}
		if (p[On] !== void 0) return l;
		let y = t.$children$;
		if (y.length === 0) return l;
		y.length === 1 && y[0].$type$ === ':skipRender' && (y = y[0].$children$);
		const S = y.map((T) => jn(e, T, n));
		return z(Bn(S), () => {
			for (const T of y) T.$elm$, _a(e.$static$, l, T.$elm$);
			return l;
		});
	},
	Bl = (e) => {
		var a, l;
		const t = ((u) => u.$slots$ || (u.$element$.parentElement, (u.$slots$ = Kd(u))))(e),
			n = {},
			s = {},
			i = Array.from(e.$element$.childNodes).filter(Ol);
		for (const u of t) u.$elm$, (n[(a = u.$key$) != null ? a : ''] = u.$elm$);
		for (const u of i) s[(l = Fe(u, Rt)) != null ? l : ''] = u;
		return { slots: n, templates: s };
	},
	Kd = (e) =>
		((t, n, s) => {
			const i = ((u, d, f) =>
					u.ownerDocument.createTreeWalker(u, 128, {
						acceptNode(p) {
							const _ = Hr(p);
							return _ && Fe(_, 'q:sref') === f ? 1 : 2;
						}
					}))(t, 0, s),
				a = [];
			let l = null;
			for (; (l = i.nextNode()); ) a.push(Hr(l));
			return a;
		})(e.$element$.parentElement, 0, e.$id$).map(Wn),
	qa = (e, t, n, s) => (n in t && t[n] !== s && St(e, t, n, s), !0),
	kn = (e, t, n, s) => (ys(e, t, n.toLowerCase(), s), !0),
	On = 'dangerouslySetInnerHTML',
	Gd = {
		style: (e, t, n, s) => (St(e, t.style, 'cssText', Tl(s)), !0),
		class: (e, t, n, s, i) => {
			const a = po(i),
				l = po(s);
			return (
				((u, d, f, p) => {
					u ? u.$operations$.push({ $operation$: Sa, $args$: [d, f, p] }) : Sa(d, f, p);
				})(
					e,
					t,
					a.filter((u) => u && !l.includes(u)),
					l.filter((u) => u && !a.includes(u))
				),
				!0
			);
		},
		value: qa,
		checked: qa,
		href: kn,
		list: kn,
		form: kn,
		tabIndex: kn,
		download: kn,
		[On]: (e, t, n, s) => (On in t ? St(e, t, On, s) : 'innerHTML' in t && St(e, t, 'innerHTML', s), !0),
		innerHTML: () => !0
	},
	Zd = (e, t, n, s, i) => {
		var f;
		const a = Jd(s, i),
			l = {};
		if (a.length === 0) return l;
		const u = (f = i[xe]) != null ? f : it,
			d = t.$element$;
		for (let p of a) {
			if (p === 'ref') {
				Uo(i[p], d);
				continue;
			}
			let _ = Le(u[p]) ? u[p] : i[p];
			if (Lo(p)) {
				Bo(t.li, p, _, e.$containerState$.$containerEl$);
				continue;
			}
			p === 'className' && (p = 'class'),
				Le(_) && (tn(1, n, _, d, p), (_ = _.value)),
				p === 'class' && (i.class = _ = kl(_));
			const g = p.toLowerCase(),
				b = s[g];
			(l[g] = _), b !== _ && Yo(e, d, p, _, b);
		}
		return l;
	},
	Yo = (e, t, n, s, i) => {
		const a = Gd[n];
		(a && a(e, t, n, s, i)) || (n in t ? St(e, t, n, s) : ys(e, t, n, s));
	},
	Jd = (e, t) => {
		const n = Object.keys(t),
			s = n.map((a) => a.toLowerCase()),
			i = Object.keys(e);
		return n.push(...i.filter((a) => !s.includes(a))), n.filter((a) => a !== 'children');
	},
	Xd = (e, t, n) => {
		try {
			window.qwikevents && window.qwikevents.push(Vl(n));
		} catch {}
	},
	ef = (e, t, n, s) => {
		var d;
		const i = t.$element$,
			a = Object.keys(s),
			l = {};
		if (a.length === 0) return l;
		const u = (d = s[xe]) != null ? d : it;
		for (let f of a) {
			if (f === 'children') continue;
			if (f === 'ref') {
				Uo(s[f], i);
				continue;
			}
			let p = Le(u[f]) ? u[f] : s[f];
			Lo(f)
				? Xd(0, 0, Bo(t.li, f, p, e.$containerState$.$containerEl$))
				: (f === 'className' && (f = 'class'),
				  n && Le(p) && (tn(1, n, p, i, f), (p = p.value)),
				  f === 'class' && (p = kl(p)),
				  (l[f.toLowerCase()] = p),
				  Yo(e, i, f, p, void 0));
		}
		return l;
	},
	Nl = (e, t, n) => {
		const s = Object.keys(n);
		let i = e.$props$;
		i || (e.$props$ = i = _s({ [vt]: ts }, t.$static$.$containerState$));
		const a = Ff(i);
		if (s.length === 0) return !1;
		for (const l of s) xd.includes(l) || a.set(l, n[l]);
		return e.$dirty$;
	},
	Ko = (e, t, n, s) => {
		if (s && e.hasAttribute('q:s')) return void t.$rmSlots$.push(e);
		tf(e, n);
		const i = Nn(e, 'elements');
		for (const a of i) Ko(a, t, n, s);
	},
	tf = (e, t) => {
		const n = Oe(e);
		n && zf(n, t);
	},
	Kr = (e, t) => {
		Ve(t) ? t.appendTo(e) : e.appendChild(t);
	},
	nf = (e, t) => {
		Ve(t) ? t.remove() : e.removeChild(t);
	},
	gs = (e, t, n) => {
		Ve(t) ? t.insertBeforeTo(e, Ur(n)) : e.insertBefore(t, Ur(n));
	},
	rf = (e, t, n) => {
		const s = {};
		for (let i = t; i <= n; ++i) {
			const a = e[i].$key$;
			a != null && (s[a] = i);
		}
		return s;
	},
	Dr = (e, t) => e.$type$ === t.$type$ && e.$key$ === t.$key$,
	sf = (e, t) => e.$type$ === t,
	zn = () => {
		const e = hl();
		let t = e.$qrl$;
		if (t) t.$captureRef$;
		else {
			const n = e.$element$,
				s = ml(n),
				i = oe(n);
			(t = ps(decodeURIComponent(String(e.$url$)), s)), Yl(s), Gl(t, i);
		}
		return t.$captureRef$;
	},
	of = (e, t) => {
		if (e[0] === 0) {
			const n = e[1];
			Zt(n) ? af(n, t) : Go(n, t);
		} else lf(e, t);
	},
	af = (e, t) => {
		const n = Jt();
		n || Yl(t.$containerEl$);
		const s = oe(e);
		if ((s.$componentQrl$, !s.$dirty$))
			if (((s.$dirty$ = !0), t.$hostsRendering$ !== void 0)) t.$renderPromise$, t.$hostsStaging$.add(e);
			else {
				if (n) return;
				t.$hostsNext$.add(e), ws(t);
			}
	},
	lf = (e, t) => {
		t.$hostsRendering$ !== void 0 ? (t.$renderPromise$, t.$opsNext$.add(e)) : (t.$opsNext$.add(e), ws(t));
	},
	Go = (e, t) => {
		e.$flags$ & Mn ||
			((e.$flags$ |= Mn),
			t.$hostsRendering$ !== void 0 ? (t.$renderPromise$, t.$watchStaging$.add(e)) : (t.$watchNext$.add(e), ws(t)));
	},
	ws = (e) => (e.$renderPromise$ === void 0 && (e.$renderPromise$ = hs().nextTick(() => uf(e))), e.$renderPromise$),
	cf = () => {
		const [e] = zn();
		Go(e, Vr(ml(e.$el$)));
	},
	uf = async (e) => {
		const t = fs(e.$containerEl$);
		try {
			const n = El(t, e),
				s = n.$static$,
				i = (e.$hostsRendering$ = new Set(e.$hostsNext$));
			e.$hostsNext$.clear(),
				await ff(e),
				e.$hostsStaging$.forEach((l) => {
					i.add(l);
				}),
				e.$hostsStaging$.clear();
			const a = Array.from(i);
			pf(a);
			for (const l of a)
				if (!s.$hostElements$.has(l)) {
					const u = oe(l);
					if (u.$componentQrl$) {
						l.isConnected, s.$roots$.push(u);
						try {
							await Ho(n, u, df(l.parentElement));
						} catch {}
					}
				}
			if (
				(e.$opsNext$.forEach((l) =>
					((u, d) => {
						var _;
						const f = (_ = d[5]) != null ? _ : 'value',
							p = d[2][f];
						switch (d[0]) {
							case 1: {
								const g = d[4],
									b = d[3],
									m = Oe(b);
								let $;
								if (m && m.$vdom$) {
									const R = g.toLowerCase();
									($ = m.$vdom$.$props$[R]), (m.$vdom$.$props$[R] = p);
								}
								return Yo(u, b, g, p, $);
							}
							case 2:
								return St(u, d[3], 'data', p);
						}
					})(s, l)
				),
				e.$opsNext$.clear(),
				s.$operations$.push(...s.$postOperations$),
				s.$operations$.length === 0)
			)
				return void (await Ca(e, s));
			await hs().raf(
				() => (
					(({ $static$: l }) => {
						qd(l);
					})(n),
					Ca(e, s)
				)
			);
		} catch (n) {
			Gn(n);
		}
	},
	df = (e) => {
		let t = 0;
		return e && (e.namespaceURI === Pl && (t |= 1), e.tagName === 'HEAD' && (t |= 2)), t;
	},
	Ca = async (e, t) => {
		await hf(e, (n, s) => (n.$flags$ & Wl) != 0 && (!s || t.$hostElements$.has(n.$el$))),
			e.$hostsStaging$.forEach((n) => {
				e.$hostsNext$.add(n);
			}),
			e.$hostsStaging$.clear(),
			(e.$hostsRendering$ = void 0),
			(e.$renderPromise$ = void 0),
			e.$hostsNext$.size + e.$watchNext$.size + e.$opsNext$.size > 0 && ws(e);
	},
	ff = async (e) => {
		const t = e.$containerEl$,
			n = [],
			s = [],
			i = (l) => (l.$flags$ & jl) != 0,
			a = (l) => (l.$flags$ & mf) != 0;
		e.$watchNext$.forEach((l) => {
			i(l) && (s.push(z(l.$qrl$.$resolveLazy$(t), () => l)), e.$watchNext$.delete(l)),
				a(l) && (n.push(z(l.$qrl$.$resolveLazy$(t), () => l)), e.$watchNext$.delete(l));
		});
		do
			if (
				(e.$watchStaging$.forEach((l) => {
					i(l)
						? s.push(z(l.$qrl$.$resolveLazy$(t), () => l))
						: a(l)
						? n.push(z(l.$qrl$.$resolveLazy$(t), () => l))
						: e.$watchNext$.add(l);
				}),
				e.$watchStaging$.clear(),
				s.length > 0)
			) {
				const l = await Promise.all(s);
				yo(l), await Promise.all(l.map((u) => Gr(u, e))), (s.length = 0);
			}
		while (e.$watchStaging$.size > 0);
		if (n.length > 0) {
			const l = await Promise.all(n);
			yo(l), l.forEach((u) => Gr(u, e));
		}
	},
	hf = async (e, t) => {
		const n = [],
			s = e.$containerEl$;
		e.$watchNext$.forEach((i) => {
			t(i, !1) && (n.push(z(i.$qrl$.$resolveLazy$(s), () => i)), e.$watchNext$.delete(i));
		});
		do
			if (
				(e.$watchStaging$.forEach((i) => {
					t(i, !0) ? n.push(z(i.$qrl$.$resolveLazy$(s), () => i)) : e.$watchNext$.add(i);
				}),
				e.$watchStaging$.clear(),
				n.length > 0)
			) {
				const i = await Promise.all(n);
				yo(i), await Promise.all(i.map((a) => Gr(a, e))), (n.length = 0);
			}
		while (e.$watchStaging$.size > 0);
	},
	pf = (e) => {
		e.sort((t, n) => (2 & t.compareDocumentPosition(Ur(n)) ? 1 : -1));
	},
	yo = (e) => {
		e.sort((t, n) =>
			t.$el$ === n.$el$
				? t.$index$ < n.$index$
					? -1
					: 1
				: (2 & t.$el$.compareDocumentPosition(Ur(n.$el$))) != 0
				? 1
				: -1
		);
	},
	Wl = 1,
	jl = 2,
	Mn = 4,
	Aa = 8,
	mf = 16,
	yf = (e, t) => {
		const { get: n, set: s, ctx: i, i: a } = Xt();
		if (n) return;
		const l = i.$hostElement$,
			u = i.$renderCtx$.$static$.$containerState$,
			d = new Jr(Mn | jl, a, l, e, void 0),
			f = oe(l);
		s(!0),
			e.$resolveLazy$(u.$containerEl$),
			f.$watches$ || (f.$watches$ = []),
			f.$watches$.push(d),
			gd(i, () => Gr(d, u, i.$renderCtx$)),
			Jt() && Fl(d, t == null ? void 0 : t.eagerness);
	},
	bf = (e, t) => {
		var _;
		const { get: n, set: s, i, ctx: a } = Xt();
		if (n) return;
		const l = a.$hostElement$,
			u = new Jr(Wl, i, l, e, void 0),
			d = (_ = t == null ? void 0 : t.eagerness) != null ? _ : 'visible',
			f = oe(l),
			p = a.$renderCtx$.$static$.$containerState$;
		s(!0),
			f.$watches$ || (f.$watches$ = []),
			f.$watches$.push(u),
			Fl(u, d),
			Jt() || (e.$resolveLazy$(p.$containerEl$), Go(u, p));
	},
	zl = (e) => !!e.$resource$,
	Gr = async (e, t, n) => (e.$flags$, zl(e) ? $f(e, t) : gf(e, t, n)),
	$f = (e, t, n) => {
		(e.$flags$ &= ~Mn), Zr(e);
		const s = e.$el$,
			i = Ye(s, void 0, 'WatchEvent'),
			{ $subsManager$: a } = t;
		e.$qrl$.$captureRef$;
		const l = e.$qrl$.getFn(i, () => {
				a.$clearSub$(e);
			}),
			u = [],
			d = e.$resource$,
			f = vs(d),
			p = {
				track: (y, S) => {
					if (Ie(y)) {
						const E = Ye();
						return (E.$subscriber$ = e), lt(E, y);
					}
					const T = Ke(y);
					return T ? T.$addSub$([0, e, S]) : qo(ds(26), y), S ? y[S] : Le(y) ? y.value : y;
				},
				cleanup(y) {
					u.push(y);
				},
				previous: f.resolved
			};
		let _,
			g,
			b = !1;
		const m = (y, S) =>
			!b &&
			((b = !0),
			y
				? ((b = !0), (d.state = 'resolved'), (d.resolved = S), (d.error = void 0), _(S))
				: ((b = !0), (d.state = 'rejected'), (d.resolved = void 0), (d.error = S), g(S)),
			!0);
		lt(i, () => {
			(d.state = 'pending'),
				(d.resolved = void 0),
				(d.promise = new Promise((y, S) => {
					(_ = y), (g = S);
				}));
		}),
			(e.$destroy$ = Ss(() => {
				u.forEach((y) => y());
			}));
		const $ = Ao(
				() => z(n, () => l(p)),
				(y) => {
					m(!0, y);
				},
				(y) => {
					m(!1, y);
				}
			),
			R = f.timeout;
		return R
			? Promise.race([
					$,
					$d(R).then(() => {
						m(!1, 'timeout') && Zr(e);
					})
			  ])
			: $;
	},
	gf = (e, t, n) => {
		(e.$flags$ &= ~Mn), Zr(e);
		const s = e.$el$,
			i = Ye(s, void 0, 'WatchEvent'),
			{ $subsManager$: a } = t,
			l = e.$qrl$.getFn(i, () => {
				a.$clearSub$(e);
			}),
			u = [];
		e.$destroy$ = Ss(() => {
			u.forEach((f) => f());
		});
		const d = {
			track: (f, p) => {
				if (Ie(f)) {
					const g = Ye();
					return (g.$subscriber$ = e), lt(g, f);
				}
				const _ = Ke(f);
				return _ ? _.$addSub$([0, e, p]) : qo(ds(26), f), p ? f[p] : f;
			},
			cleanup(f) {
				u.push(f);
			}
		};
		return Ao(
			() => l(d),
			(f) => {
				Ie(f) && u.push(f);
			},
			(f) => {
				Rl(f, s, n);
			}
		);
	},
	Zr = (e) => {
		const t = e.$destroy$;
		if (t) {
			e.$destroy$ = void 0;
			try {
				t();
			} catch (n) {
				Gn(n);
			}
		}
	},
	Ml = (e) => {
		e.$flags$ & Aa ? ((e.$flags$ &= ~Aa), (0, e.$qrl$)()) : Zr(e);
	},
	Fl = (e, t) => {
		t === 'visible' ? Ed('qvisible', to(e)) : t === 'load' ? $a('qinit', to(e)) : t === 'idle' && $a('qidle', to(e));
	},
	to = (e) => {
		const t = e.$qrl$;
		return ei(t.$chunk$, '_hW', cf, null, null, [e], t.$symbol$);
	};
class Jr {
	constructor(t, n, s, i, a) {
		(this.$flags$ = t), (this.$index$ = n), (this.$el$ = s), (this.$qrl$ = i), (this.$resource$ = a);
	}
}
const wf = (e) => ({
		__brand: 'resource',
		promise: void 0,
		resolved: void 0,
		error: void 0,
		state: 'pending',
		timeout: e == null ? void 0 : e.timeout
	}),
	_f = {
		prefix: '',
		test: (e) => Zl(e),
		collect: (e, t, n) => {
			if (e.$captureRef$) for (const s of e.$captureRef$) X(s, t, n);
		},
		serialize: (e, t) => Oo(e, { $getObjId$: t }),
		prepare: (e, t) => ps(e, t.$containerEl$),
		fill: (e, t) => {
			e.$capture$ && e.$capture$.length > 0 && ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
		}
	},
	Sf = {
		prefix: '',
		test: (e) => {
			return De((t = e)) && t instanceof Jr;
			var t;
		},
		collect: (e, t, n) => {
			X(e.$qrl$, t, n), e.$resource$ && X(e.$resource$, t, n);
		},
		serialize: (e, t) =>
			((n, s) => {
				let i = `${es(n.$flags$)} ${es(n.$index$)} ${s(n.$qrl$)} ${s(n.$el$)}`;
				return zl(n) && (i += ` ${s(n.$resource$)}`), i;
			})(e, t),
		prepare: (e) =>
			((t) => {
				const [n, s, i, a, l] = t.split(' ');
				return new Jr(Ht(n), Ht(s), a, i, l);
			})(e),
		fill: (e, t) => {
			(e.$el$ = t(e.$el$)), (e.$qrl$ = t(e.$qrl$)), e.$resource$ && (e.$resource$ = t(e.$resource$));
		}
	},
	vf = {
		prefix: '',
		test: (e) => {
			return De((t = e)) && t.__brand === 'resource';
			var t;
		},
		collect: (e, t, n) => {
			X(e.promise, t, n), X(e.resolved, t, n);
		},
		serialize: (e, t) =>
			((n, s) => {
				const i = n.state;
				return i === 'resolved' ? `0 ${s(n.resolved)}` : i === 'pending' ? '1' : `2 ${s(n.error)}`;
			})(e, t),
		prepare: (e) =>
			((t) => {
				const [n, s] = t.split(' '),
					i = wf(void 0);
				return (
					(i.promise = Promise.resolve()),
					n === '0'
						? ((i.state = 'resolved'), (i.resolved = s))
						: n === '1'
						? ((i.state = 'pending'), (i.promise = new Promise(() => {})))
						: n === '2' && ((i.state = 'rejected'), (i.error = s)),
					i
				);
			})(e),
		fill: (e, t) => {
			if (e.state === 'resolved') (e.resolved = t(e.resolved)), (e.promise = Promise.resolve(e.resolved));
			else if (e.state === 'rejected') {
				const n = Promise.reject(e.error);
				n.catch(() => null), (e.error = t(e.error)), (e.promise = n);
			}
		}
	},
	Rf = {
		prefix: '',
		test: (e) => e instanceof URL,
		serialize: (e) => e.href,
		prepare: (e) => new URL(e),
		fill: void 0
	},
	Ef = {
		prefix: '',
		test: (e) => e instanceof Date,
		serialize: (e) => e.toISOString(),
		prepare: (e) => new Date(e),
		fill: void 0
	},
	kf = {
		prefix: '\x07',
		test: (e) => e instanceof RegExp,
		serialize: (e) => `${e.flags} ${e.source}`,
		prepare: (e) => {
			const t = e.indexOf(' '),
				n = e.slice(t + 1),
				s = e.slice(0, t);
			return new RegExp(n, s);
		},
		fill: void 0
	},
	Tf = {
		prefix: '',
		test: (e) => e instanceof Error,
		serialize: (e) => e.message,
		prepare: (e) => {
			const t = new Error(e);
			return (t.stack = void 0), t;
		},
		fill: void 0
	},
	qf = { prefix: '', test: (e) => dl(e), serialize: void 0, prepare: (e, t, n) => n, fill: void 0 },
	Xr = Symbol('serializable-data'),
	Cf = {
		prefix: '',
		test: (e) => Xf(e),
		serialize: (e, t) => {
			const [n] = e[Xr];
			return Oo(n, { $getObjId$: t });
		},
		prepare: (e, t) => {
			const n = e.indexOf('{'),
				s = n == -1 ? e : e.slice(0, n),
				i = ps(s, t.$containerEl$);
			return Be(i);
		},
		fill: (e, t) => {
			const [n] = e[Xr];
			n.$capture$ && n.$capture$.length > 0 && ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
		}
	},
	Zo = [
		_f,
		{
			prefix: '',
			test: (e) => e instanceof Fn,
			collect: (e, t, n) => (X(e.untrackedValue, t, n), n && Ql(e[at], t), e),
			serialize: (e, t) => t(e.untrackedValue),
			prepare: (e) => new Fn(e, null),
			subs: (e, t, n) => {
				e[at] = n.$subsManager$.$createManager$(t);
			},
			fill: (e, t) => {
				e.untrackedValue = t(e.untrackedValue);
			}
		},
		{
			prefix: '',
			test: (e) => e instanceof Vt,
			collect: (e, t, n) => (X(e.ref, t, n), e),
			serialize: (e, t) => `${t(e.ref)} ${e.prop}`,
			prepare: (e) => {
				const [t, n] = e.split(' ');
				return new Vt(t, n);
			},
			fill: (e, t) => {
				e.ref = t(e.ref);
			}
		},
		Sf,
		vf,
		Rf,
		Ef,
		kf,
		Tf,
		qf,
		Cf,
		{
			prefix: '',
			test: (e) => typeof e == 'function' && e.__qwik_serializable__ !== void 0,
			serialize: (e) => e.toString(),
			prepare: (e) => {
				const t = new Function('return ' + e)();
				return (t.__qwik_serializable__ = !0), t;
			},
			fill: void 0
		}
	],
	Af = Zo.filter((e) => e.collect),
	Hl = async (e, t) => {
		const n = Lf(t),
			s = [];
		for (const y of e) if (y.$watches$) for (const S of y.$watches$) Ml(S);
		for (const y of e) {
			const S = y.$element$,
				T = y.li;
			for (const E of T) {
				const C = E[0],
					I = E[1],
					A = I.$captureRef$;
				if (A) for (const x of A) X(x, n, !0);
				Kn(S) && s.push({ key: C, qrl: I, el: S, eventName: Vl(C) });
			}
		}
		if (s.length === 0) return { state: { ctx: {}, objs: [], subs: [] }, objs: [], listeners: [], mode: 'static' };
		let i;
		for (; (i = n.$promises$).length > 0; ) (n.$promises$ = []), await Promise.allSettled(i);
		const a = n.$elements$.length > 0;
		if (a) {
			for (const y of n.$elements$) Ul(Oe(y), n);
			for (const y of e) if ((y.$props$ && xf(y, n), y.$contexts$)) for (const S of y.$contexts$.values()) X(S, n, !1);
		}
		for (; (i = n.$promises$).length > 0; ) (n.$promises$ = []), await Promise.all(i);
		const l = new Map(),
			u = Array.from(n.$objSet$.keys()),
			d = new Map(),
			f = (y) => {
				let S = l.get(y);
				return (
					S === void 0 &&
						((S = ((T) => {
							const E = Oe(T);
							return E ? E.$id$ : null;
						})(y)),
						S ? (S = '#' + S) : console.warn('Missing ID', y),
						l.set(y, S)),
					S
				);
			},
			p = (y) => {
				let S = '';
				if (pe(y)) {
					const { value: E, resolved: C } = Nf(y);
					(y = E), (S += C ? '~' : '_');
				}
				if (De(y)) {
					const E = nn(y);
					if (E) (S += '!'), (y = E);
					else if (Zt(y)) {
						const C = f(y);
						return C ? C + S : null;
					}
				}
				const T = d.get(y);
				return T ? T + S : null;
			},
			_ = (y) => {
				const S = p(y);
				if (S === null) throw de(27, y);
				return S;
			},
			g = new Map();
		u.forEach((y) => {
			var C, I;
			const S = (C = Pf(y, t)) == null ? void 0 : C.$subs$;
			if (!S) return null;
			const T = (I = Yf(y)) != null ? I : 0,
				E = [];
			T > 0 && E.push(T);
			for (const A of S) {
				const x = A[1];
				(A[0] === 0 && Yn(x) && Ve(x) && !n.$elements$.includes(x)) || E.push(A);
			}
			E.length > 0 && g.set(y, E);
		}),
			u.sort((y, S) => (g.has(y) ? 0 : 1) - (g.has(S) ? 0 : 1));
		let b = 0;
		for (const y of u) d.set(y, es(b)), b++;
		if (n.$noSerialize$.length > 0) {
			const y = d.get(void 0);
			for (const S of n.$noSerialize$) d.set(S, y);
		}
		const m = [];
		for (const y of u) {
			const S = g.get(y);
			if (S == null) break;
			m.push(S.map((T) => (typeof T == 'number' ? `_${T}` : Bd(T, p))).filter(fo));
		}
		m.length, g.size;
		const $ = u.map((y) => {
				if (y === null) return null;
				const S = typeof y;
				switch (S) {
					case 'undefined':
						return '';
					case 'string':
					case 'number':
					case 'boolean':
						return y;
					default:
						const T = ((E, C, I) => {
							for (const A of Zo)
								if (A.test(E)) {
									let x = A.prefix;
									return A.serialize && (x += A.serialize(E, C, I)), x;
								}
						})(y, _, t);
						if (T !== void 0) return T;
						if (S === 'object') {
							if (ne(y)) return y.map(_);
							if (Co(y)) {
								const E = {};
								for (const C of Object.keys(y)) E[C] = _(y[C]);
								return E;
							}
						}
				}
				throw de(3, y);
			}),
			R = {};
		return (
			e.forEach((y) => {
				const S = y.$element$,
					T = y.$refMap$,
					E = y.$props$,
					C = y.$contexts$,
					I = y.$watches$,
					A = y.$componentQrl$,
					x = y.$seq$,
					Y = {},
					H = Ve(S) && n.$elements$.includes(S);
				let K = !1;
				if (T.length > 0) {
					const U = T.map(_).join(' ');
					U && ((Y.r = U), (K = !0));
				}
				if (a) {
					if ((H && E && ((Y.h = _(E) + ' ' + _(A)), (K = !0)), I && I.length > 0)) {
						const U = I.map(p).filter(fo).join(' ');
						U && ((Y.w = U), (K = !0));
					}
					if (H && x && x.length > 0) {
						const U = x.map(_).join(' ');
						(Y.s = U), (K = !0);
					}
					if (C) {
						const U = [];
						C.forEach((re, G) => {
							U.push(`${G}=${_(re)}`);
						});
						const ee = U.join(' ');
						ee && ((Y.c = ee), (K = !0));
					}
				}
				if (K) {
					const U = f(S);
					R[U] = Y;
				}
			}),
			{
				state: { ctx: R, objs: $, subs: m },
				objs: u,
				listeners: s,
				mode: a ? 'render' : 'listeners'
			}
		);
	},
	Pf = (e, t) => {
		if (!De(e)) return;
		if (e instanceof Fn) return Ke(e);
		const n = t.$proxyMap$.get(e);
		return n ? Ke(n) : void 0;
	},
	If = (e, t, n) => {
		if (!n.fill(e) && e && typeof e == 'object') {
			if (ne(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
			else if (Co(e)) for (const s of Object.keys(e)) e[s] = t(e[s]);
		}
	},
	Of = {
		'!': (e, t) => {
			var n;
			return (n = t.$proxyMap$.get(e)) != null ? n : Jo(e, t);
		},
		'~': (e) => Promise.resolve(e),
		_: (e) => Promise.reject(e)
	},
	xf = (e, t) => {
		var s;
		const n = e.$parent$;
		if (n && e.$props$ && t.$elements$.includes(n.$element$)) {
			const i = (s = Ke(e.$props$)) == null ? void 0 : s.$subs$,
				a = e.$element$;
			i && i.some((l) => l[0] === 0 && l[1] === a) && Bf(a, t);
		}
	},
	Lf = (e) => ({
		$containerState$: e,
		$seen$: new Set(),
		$objSet$: new Set(),
		$noSerialize$: [],
		$elements$: [],
		$promises$: []
	}),
	Df = (e, t) => {
		t.$elements$.includes(e) || t.$elements$.push(e);
	},
	Bf = (e, t) => {
		if (t.$elements$.includes(e)) return;
		const n = Oe(e);
		n && (t.$elements$.push(e), Ul(n, t));
	},
	Ul = (e, t) => {
		if ((e.$props$ && X(e.$props$, t, !1), e.$componentQrl$ && X(e.$componentQrl$, t, !1), e.$seq$))
			for (const n of e.$seq$) X(n, t, !1);
		if (e.$watches$) for (const n of e.$watches$) X(n, t, !1);
		if (e.$contexts$) for (const n of e.$contexts$.values()) X(n, t, !1);
	},
	Ql = (e, t) => {
		if (t.$seen$.has(e)) return;
		t.$seen$.add(e);
		const n = e.$subs$;
		for (const s of n) {
			const i = s[1];
			Yn(i) && Ve(i) ? s[0] === 0 && Df(i, t) : X(i, t, !0);
		}
	},
	bo = Symbol(),
	Nf = (e) => e[bo],
	X = (e, t, n) => {
		if (e !== null) {
			const i = typeof e;
			switch (i) {
				case 'function':
				case 'object': {
					const a = t.$seen$;
					if (a.has(e)) return;
					if ((a.add(e), !Vf(e))) return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
					const l = e,
						u = nn(e);
					if (u) {
						if (((e = u), a.has(e))) return;
						a.add(e), n && Ql(Ke(l), t);
					}
					if (
						((f, p, _) => {
							for (const g of Af) if (g.test(f)) return g.collect(f, p, _), !0;
							return !1;
						})(e, t, n)
					)
						return void t.$objSet$.add(e);
					if (pe(e))
						return void t.$promises$.push(
							((s = e),
							s.then(
								(f) => {
									const p = { resolved: !0, value: f };
									return (s[bo] = p), f;
								},
								(f) => {
									const p = { resolved: !1, value: f };
									return (s[bo] = p), f;
								}
							)).then((f) => {
								X(f, t, n);
							})
						);
					if (i === 'object') {
						if (Yn(e)) return;
						if (ne(e)) for (let f = 0; f < e.length; f++) X(e[f], t, n);
						else if (Co(e)) for (const f of Object.keys(e)) X(e[f], t, n);
					}
					break;
				}
			}
		}
		var s;
		t.$objSet$.add(e);
	},
	$o = (e) => Kn(e) && e.hasAttribute('q:container'),
	Wf = (e) => {
		const t = Mo(e);
		return !!Zt(t) && t.hasAttribute('q:id');
	},
	es = (e) => e.toString(36),
	Ht = (e) => parseInt(e, 36),
	Vl = (e) => {
		const t = e.indexOf(':');
		return e.slice(t + 1).replace(/-./g, (n) => n[1].toUpperCase());
	},
	Yl = (e) => {
		Fe(e, 'q:container') === 'paused' &&
			(((t) => {
				if (!$o(t)) return;
				let n = 0;
				const s = fs(t),
					i = ((g) => {
						let b = g.lastElementChild;
						for (; b; ) {
							if (b.tagName === 'SCRIPT' && Fe(b, 'type') === 'qwik/json') return b;
							b = b.previousElementSibling;
						}
					})(t === s.documentElement ? s.body : t);
				if (!i) return;
				i.remove();
				const a = Vr(t);
				((g, b) => {
					const m = g.ownerDocument.head;
					g.querySelectorAll('style[q\\:style]').forEach(($) => {
						b.$styleIds$.add(Fe($, 'q:style')), m.appendChild($);
					});
				})(t, a);
				const l = JSON.parse((i.textContent || '{}').replace(/\\x3C(\/?script)/g, '<$1')),
					u = new Map(),
					d = (g) =>
						((b, m, $, R) => {
							if ((typeof b == 'string' && b.length, b.startsWith('#'))) return m.has(b), m.get(b);
							const y = Ht(b);
							$.length;
							let S = $[y];
							for (let T = b.length - 1; T >= 0; T--) {
								const E = b[T],
									C = Of[E];
								if (!C) break;
								S = C(S, R);
							}
							return S;
						})(g, u, l.objs, a),
					f = s.createTreeWalker(t, 129, {
						acceptNode(g) {
							if (us(g)) {
								const b = g.data;
								if (b.startsWith('qv ')) {
									const m = Sl(g),
										$ = new zo(g, m),
										R = Fe($, 'q:id');
									R && ((oe($).$id$ = R), u.set('#' + R, $), (n = Math.max(n, Ht(R))));
								} else if (b.startsWith('t=')) {
									const m = b.slice(2);
									u.set(
										'#' + b.slice(2),
										(($) => {
											const R = $.nextSibling;
											if (fl(R)) return R;
											{
												const y = $.ownerDocument.createTextNode('');
												return $.parentElement.insertBefore(y, $), y;
											}
										})(g)
									),
										(n = Math.max(n, Ht(m)));
								}
								return 3;
							}
							return $o(g) ? 2 : g.hasAttribute('q:id') ? 1 : 3;
						}
					});
				let p = null;
				for (; (p = f.nextNode()); ) {
					const g = Fe(p, 'q:id'),
						b = oe(p);
					(b.$id$ = g), (b.$vdom$ = Wn(p)), u.set('#' + g, p), (n = Math.max(n, Ht(g)));
				}
				a.$elementIndex$ = ++n;
				const _ = ((g, b, m) => {
					const $ = new Map(),
						R = new Map();
					return {
						prepare(y) {
							for (const S of Zo) {
								const T = S.prefix;
								if (y.startsWith(T)) {
									const E = S.prepare(y.slice(T.length), b, m);
									return S.fill && $.set(E, S), S.subs && R.set(E, S), E;
								}
							}
							return y;
						},
						subs(y, S) {
							const T = R.get(y);
							return !!T && (T.subs(y, S, b), !0);
						},
						fill(y) {
							const S = $.get(y);
							return !!S && (S.fill(y, g, b), !0);
						}
					};
				})(d, a, s);
				((g, b) => {
					for (let m = 0; m < g.length; m++) {
						const $ = g[m];
						Zn($) && (g[m] = $ === '' ? void 0 : b.prepare($));
					}
				})(l.objs, _),
					((g, b, m, $, R) => {
						for (let y = 0; y < b.length; y++) {
							const S = g[y],
								T = b[y];
							if (T) {
								const E = [];
								let C = 0;
								for (const I of T) I.startsWith('_') ? (C = parseInt(I.slice(1), 10)) : E.push(Nd(I, m));
								C > 0 && (S[vt] = C), R.subs(S, E) || _s(S, $, E);
							}
						}
					})(l.objs, l.subs, d, a, _);
				for (const g of l.objs) If(g, d, _);
				for (const g of Object.keys(l.ctx)) {
					g.startsWith('#');
					const b = l.ctx[g],
						m = u.get(g),
						$ = oe(m),
						R = b.r,
						y = b.s,
						S = b.h,
						T = b.c,
						E = b.w;
					if (
						(R && (Kn(m), ($.$refMap$ = R.split(' ').map(d)), ($.li = Rd($, t))),
						y && ($.$seq$ = y.split(' ').map(d)),
						E && ($.$watches$ = E.split(' ').map(d)),
						T)
					) {
						$.$contexts$ = new Map();
						for (const C of T.split(' ')) {
							const [I, A] = C.split('=');
							$.$contexts$.set(I, d(A));
						}
					}
					if (S) {
						const [C, I] = S.split(' '),
							A = m.getAttribute('q:sstyle');
						($.$scopeIds$ = A ? A.split(' ') : null), ($.$mounted$ = !0), ($.$props$ = d(C)), ($.$componentQrl$ = d(I));
					}
				}
				Ee(t, 'q:container', 'resumed'),
					((g, b, m, $) => {
						g &&
							typeof CustomEvent == 'function' &&
							g.dispatchEvent(new CustomEvent('qresume', { detail: void 0, bubbles: !0, composed: !0 }));
					})(t);
			})(e),
			jf(e));
	},
	jf = (e) => {
		e.qwik = {
			pause: () =>
				(async (t, n) => {
					const s = fs(t),
						i = s.documentElement,
						a = dl(t) ? i : t;
					if (Fe(a, 'q:container') === 'paused') throw de(21);
					const l = a === s.documentElement ? s.body : a,
						u = await (async (f) => {
							const p = Vr(f),
								_ = ((g, b) => {
									b(g);
									const m = g.ownerDocument.createTreeWalker(g, 129, {
											acceptNode: (y) => ($o(y) ? 2 : b(y) ? 1 : 3)
										}),
										$ = [];
									let R = null;
									for (; (R = m.nextNode()); ) $.push(Mo(R));
									return $;
								})(f, Wf).map(Oe);
							return Hl(_, p);
						})(a),
						d = s.createElement('script');
					return (
						Ee(d, 'type', 'qwik/json'),
						(d.textContent = JSON.stringify(u.state, void 0, void 0).replace(/<(\/?script)/g, '\\x3C$1')),
						l.appendChild(d),
						Ee(a, 'q:container', 'paused'),
						u
					);
				})(e),
			state: Vr(e)
		};
	},
	Oe = (e) => e._qc_,
	oe = (e) => {
		let t = Oe(e);
		return (
			t ||
				(e._qc_ = t =
					{
						$dirty$: !1,
						$mounted$: !1,
						$needAttachListeners$: !1,
						$id$: '',
						$element$: e,
						$refMap$: [],
						li: [],
						$watches$: null,
						$seq$: null,
						$slots$: null,
						$scopeIds$: null,
						$appendStyles$: null,
						$props$: null,
						$vdom$: null,
						$componentQrl$: null,
						$contexts$: null,
						$parent$: null
					}),
			t
		);
	},
	zf = (e, t) => {
		var s;
		const n = e.$element$;
		(s = e.$watches$) == null ||
			s.forEach((i) => {
				t.$clearSub$(i), Ml(i);
			}),
			e.$componentQrl$ && t.$clearSub$(n),
			(e.$componentQrl$ = null),
			(e.$seq$ = null),
			(e.$watches$ = null),
			(e.$dirty$ = !1),
			(n._qc_ = void 0);
	},
	Pa = ['on', 'window:on', 'document:on'],
	Mf = ['on', 'on-window', 'on-document'],
	Kl = (e) => {
		let t = 'on';
		for (let n = 0; n < Pa.length; n++) {
			const s = Pa[n];
			if (e.startsWith(s)) {
				(t = Mf[n]), (e = e.slice(s.length));
				break;
			}
		}
		return t + ':' + (e.startsWith('-') ? Wo(e.slice(1)) : e.toLowerCase());
	},
	Ff = (e) => {
		const t = Ke(e),
			n = nn(e);
		return {
			set(s, i) {
				const a = n[s];
				(n[s] = i), a !== i && t.$notifySubs$(s);
			}
		};
	},
	Gl = (e, t) => (
		e.$capture$,
		(e.$captureRef$ = e.$capture$.map((n) => {
			const s = parseInt(n, 10),
				i = t.$refMap$[s];
			return t.$refMap$.length, i;
		}))
	),
	ts = 2,
	go = Symbol('proxy target'),
	vt = Symbol('proxy flags'),
	at = Symbol('proxy manager'),
	xe = Symbol('IMMUTABLE'),
	Jo = (e, t, n = 0) => t.$proxyMap$.get(e) || (n !== 0 && (e[vt] = n), _s(e, t, void 0));
class Fn {
	constructor(t, n) {
		(this.untrackedValue = t), (this[at] = n);
	}
	get value() {
		var n;
		const t = (n = Fr()) == null ? void 0 : n.$subscriber$;
		return t && this[at].$addSub$([0, t, void 0]), this.untrackedValue;
	}
	set value(t) {
		const n = this[at],
			s = this.untrackedValue;
		n && s !== t && ((this.untrackedValue = t), n.$notifySubs$());
	}
}
const Le = (e) => e instanceof Fn || e instanceof Vt,
	tn = (e, t, n, s, i) => {
		const a = n instanceof Vt ? [e, t, nn(n.ref), s, i, n.prop === 'value' ? void 0 : n.prop] : [e, t, n, s, i, void 0];
		Ke(n).$addSub$(a);
	},
	_s = (e, t, n) => {
		vs(e), t.$proxyMap$.has(e);
		const s = t.$subsManager$.$createManager$(n),
			i = new Proxy(e, new Hf(t, s));
		return t.$proxyMap$.set(e, i), i;
	};
class Hf {
	constructor(t, n) {
		(this.$containerState$ = t), (this.$manager$ = n);
	}
	get(t, n) {
		var f, p;
		if (typeof n == 'symbol') return n === go ? t : n === at ? this.$manager$ : t[n];
		let s;
		const i = (f = t[vt]) != null ? f : 0,
			a = Fr(),
			l = (1 & i) != 0,
			u = (i & ts) != 0;
		let d = t[n];
		if ((a && (s = a.$subscriber$), u)) {
			const _ = t['$$' + n];
			(n in t && !_ && !((p = t[xe]) != null && p[n])) || (s = null), _ && (d = _.value);
		}
		if (s) {
			const _ = ne(t);
			this.$manager$.$addSub$([0, s, _ ? void 0 : n]);
		}
		return l ? Uf(d, this.$containerState$) : d;
	}
	set(t, n, s) {
		var l;
		if (typeof n == 'symbol') return (t[n] = s), !0;
		const i = (l = t[vt]) != null ? l : 0;
		if ((i & ts) != 0) throw de(17);
		const a = (1 & i) != 0 ? vs(s) : s;
		return ne(t)
			? ((t[n] = a), this.$manager$.$notifySubs$(), !0)
			: (t[n] !== a && ((t[n] = a), this.$manager$.$notifySubs$(n)), !0);
	}
	has(t, n) {
		if (n === go) return !0;
		const s = Object.prototype.hasOwnProperty;
		return !!s.call(t, n) || !(typeof n != 'string' || !s.call(t, '$$' + n));
	}
	ownKeys(t) {
		let n = null;
		const s = Fr();
		return (
			s && (n = s.$subscriber$),
			n && this.$manager$.$addSub$([0, n, void 0]),
			Object.getOwnPropertyNames(t).map((i) => (i.startsWith('$$') ? i.slice(2) : i))
		);
	}
}
const Uf = (e, t) => {
		if (Zl(e)) return e;
		if (De(e)) {
			if (Object.isFrozen(e)) return e;
			const n = vs(e);
			return n !== e || Yn(n) ? e : Qf(n) ? t.$proxyMap$.get(e) || Jo(e, t, 1) : e;
		}
		return e;
	},
	Xo = new WeakSet(),
	Qf = (e) => (!De(e) && !Ie(e)) || !Xo.has(e),
	Vf = (e) => !Xo.has(e),
	Ss = (e) => (e != null && Xo.add(e), e),
	vs = (e) => {
		var t;
		return De(e) && (t = nn(e)) != null ? t : e;
	},
	nn = (e) => e[go],
	Ke = (e) => e[at],
	Yf = (e) => e[vt];
class Vt {
	constructor(t, n) {
		(this.ref = t), (this.prop = n);
	}
	get [at]() {
		return Ke(this.ref);
	}
	get value() {
		return this.ref[this.prop];
	}
	set value(t) {
		this.ref[this.prop] = t;
	}
}
const jr = (e, t) => {
		if (e instanceof Fn || e instanceof Vt) return e;
		const n = nn(e);
		if (n) {
			const s = n['$$' + t];
			return s || new Vt(e, t);
		}
		return e[t];
	},
	Zl = (e) => typeof e == 'function' && typeof e.getSymbol == 'function',
	ei = (e, t, n, s, i, a, l) => {
		let u;
		const d = (S) => {
				u || (u = S);
			},
			f = async (S) => {
				if ((S && d(S), n !== null)) return n;
				if (s !== null) return (n = s().then((T) => (n = T[t])));
				{
					if (!e) throw de(31, t);
					if (!u) throw de(30, e, t);
					const T = hs().importSymbol(u, e, t);
					return (n = z(T, (E) => (n = E)));
				}
			},
			p = (S) => (n !== null ? n : f(S)),
			_ =
				(S, T) =>
				(...E) => {
					const C = Jf(),
						I = p();
					return z(I, (A) => {
						if (Ie(A)) {
							if (T && T() === !1) return;
							const x = { ...g(S), $qrl$: R };
							return Gf(t, x.$element$, C), lt(x, A, ...E);
						}
						throw de(10);
					});
				},
			g = (S) => (S == null ? Ye() : ne(S) ? pl(S) : S),
			b = async function (...S) {
				return await _()(...S);
			},
			m = l != null ? l : t,
			$ = Kf(m),
			R = b;
		return Object.assign(b, {
			getSymbol: () => m,
			getHash: () => $,
			resolve: f,
			$resolveLazy$: p,
			$setContainer$: d,
			$chunk$: e,
			$symbol$: t,
			$refSymbol$: l,
			$hash$: $,
			getFn: _,
			$capture$: i,
			$captureRef$: a,
			$dev$: null
		});
	},
	Kf = (e) => {
		const t = e.lastIndexOf('_');
		return t > -1 ? e.slice(t + 1) : e;
	},
	Gf = (e, t, n) => {
		Zf('qsymbol', { detail: { symbol: e, element: t, reqTime: n } });
	},
	Zf = (e, t) => {
		Jt() || typeof document != 'object' || document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
	},
	Jf = () => (Jt() ? 0 : typeof performance == 'object' ? performance.now() : 0),
	Be = (e) => {
		function t(n, s) {
			const i = e.$hash$ + ':' + (s || '');
			return v(er, { 'q:renderFn': e, children: n.children, props: n }, i);
		}
		return (t[Xr] = [e]), t;
	},
	Xf = (e) => typeof e == 'function' && e[Xr] !== void 0,
	ti = (e) => {
		var n;
		const t = (n = e.name) != null ? n : '';
		return v(er, { 'q:s': '' }, t);
	},
	eh = async (e, t) => {
		var f;
		const n = t.containerTagName,
			s = wo(1).$element$,
			i = Al(s),
			a = El({ nodeType: 9 }, i),
			l = (f = t.beforeContent) != null ? f : [],
			u = {
				rCtx: a,
				$contexts$: [],
				projectedChildren: void 0,
				projectedContext: void 0,
				hostCtx: null,
				invocationContext: void 0,
				headNodes: n === 'html' ? l : [],
				$pendingListeners$: []
			},
			d = {
				...t.containerAttributes,
				'q:container': 'paused',
				'q:version': '0.10.0',
				'q:render': 'ssr',
				'q:base': t.base,
				children: n === 'html' ? [e] : [l, e]
			};
		(i.$envData$ = { url: t.url, ...t.envData }),
			(e = v(n, d)),
			(i.$hostsRendering$ = new Set()),
			(i.$renderPromise$ = Promise.resolve().then(() => th(e, u, t.stream, i, t))),
			await i.$renderPromise$;
	},
	th = async (e, t, n, s, i) => {
		const a = i.beforeClose;
		return (
			await ec(
				e,
				t,
				n,
				0,
				a
					? (l) => {
							const u = a(t.$contexts$, s);
							return Pe(u, t, l, 0, void 0);
					  }
					: void 0
			),
			t.rCtx.$static$
		);
	},
	Jl = (e, t, n, s, i, a, l) => {
		var b;
		const u = e.props,
			d = u['q:renderFn'];
		if (d) return (t.$componentQrl$ = d), rh(s, i, t, e, a, l);
		let f = '<!--qv' + nh(u);
		const p = 'q:s' in u,
			_ = e.key != null ? String(e.key) : null;
		if (
			(p && ((b = s.hostCtx) == null || b.$id$, (f += ' q:sref=' + s.hostCtx.$id$)),
			_ != null && (f += ' q:key=' + _),
			(f += '-->'),
			i.write(f),
			n)
		)
			for (const m of n) Xl(m.type, m.props, i);
		const g = tc(u.children, s, i, a);
		return z(g, () => {
			var $;
			if (!p && !l) return void i.write(Ia);
			let m;
			if (p) {
				const R = ($ = s.projectedChildren) == null ? void 0 : $[_];
				R && ((s.projectedChildren[_] = void 0), (m = Pe(R, s.projectedContext, i, a)));
			}
			return (
				l && (m = z(m, () => l(i))),
				z(m, () => {
					i.write(Ia);
				})
			);
		});
	},
	Ia = '<!--/qv-->',
	nh = (e) => {
		let t = '';
		for (const n of Object.keys(e)) {
			if (n === 'children') continue;
			const s = e[n];
			s != null && (t += ' ' + (s === '' ? n : n + '=' + s));
		}
		return t;
	},
	Xl = (e, t, n) => {
		if (
			(n.write(
				'<' +
					e +
					((i) => {
						let a = '';
						for (const l of Object.keys(i)) {
							if (l === 'dangerouslySetInnerHTML') continue;
							const u = i[l];
							u != null && (a += ' ' + (u === '' ? l : l + '="' + u + '"'));
						}
						return a;
					})(t) +
					'>'
			),
			!!sc[e])
		)
			return;
		const s = t.dangerouslySetInnerHTML;
		s != null && n.write(s), n.write(`</${e}>`);
	},
	rh = (e, t, n, s, i, a) => {
		const l = s.props;
		return (
			ih(e.rCtx, n, l.props),
			z(Qr(e.rCtx, n), (u) => {
				const d = n.$element$,
					f = u.rCtx,
					p = Ye(d, void 0);
				(p.$subscriber$ = d), (p.$renderCtx$ = f);
				const _ = { ...e, rCtx: f },
					g = {
						...e,
						projectedChildren: sh(l.children, e),
						projectedContext: _,
						rCtx: f,
						invocationContext: p
					},
					b = [];
				if (n.$appendStyles$) {
					const y = 4 & i ? e.headNodes : b;
					for (const S of n.$appendStyles$)
						y.push(v('style', { 'q:style': S.styleId, dangerouslySetInnerHTML: S.content }));
				}
				const m = $s(e.rCtx),
					$ = n.$scopeIds$ ? ql(n.$scopeIds$) : void 0,
					R = v(s.type, { 'q:sstyle': $, 'q:id': m, children: u.node }, s.key);
				return (
					(n.$id$ = m),
					e.$contexts$.push(n),
					(g.hostCtx = n),
					Jl(R, n, b, g, t, i, (y) => (n.$needAttachListeners$, a ? z(Oa(g, y), () => a(y)) : Oa(g, y)))
				);
			})
		);
	},
	Oa = (e, t) => {
		const n = e.projectedChildren;
		if (n) {
			const s = Object.keys(n).map((i) => {
				const a = n[i];
				if (a) return v('q:template', { [Rt]: i, hidden: '', 'aria-hidden': 'true', children: a });
			});
			return Pe(s, e, t, 0, void 0);
		}
	},
	sh = (e, t) => {
		var i;
		const n = nc(e, t);
		if (n === null) return;
		const s = {};
		for (const a of n) {
			let l = '';
			ms(a) && (l = (i = a.props[Rt]) != null ? i : '');
			let u = s[l];
			u || (s[l] = u = []), u.push(a);
		}
		return s;
	},
	wo = (e) => oe({ nodeType: e, _qc_: null }),
	ec = (e, t, n, s, i) => {
		var u, d;
		const a = e.type;
		if (typeof a == 'string') {
			const f = e.key,
				p = e.props,
				_ = (u = p[xe]) != null ? u : it,
				g = wo(1),
				b = g.$element$,
				m = a === 'head',
				$ = t.hostCtx;
			let R = '<' + a,
				y = !1;
			for (const A of Object.keys(p)) {
				if (A === 'children' || A === 'key' || A === 'class' || A === 'className' || A === 'dangerouslySetInnerHTML')
					continue;
				if (A === 'ref') {
					Uo(p[A], b);
					continue;
				}
				let x = Le(_[A]) ? _[A] : p[A];
				if (Lo(A)) {
					Bo(g.li, A, x, void 0);
					continue;
				}
				const Y = ah(A);
				if (Le(x)) {
					if ($) {
						const K = $.$element$;
						tn(1, K, x, b, Y), (y = !0);
					}
					x = x.value;
				}
				const H = lh(Y, x);
				H != null && (R += ' ' + (x === '' ? Y : Y + '="' + fh(H) + '"'));
			}
			const S = g.li,
				T = (d = p.class) != null ? d : p.className;
			let E = oh(T);
			if (
				($ &&
					($.$scopeIds$ && (E = $.$scopeIds$.join(' ') + ' ' + E),
					$.$needAttachListeners$ && (Jn(S, $.li), ($.$needAttachListeners$ = !1))),
				m && (s |= 1),
				ch[a] && (s |= 8),
				(E = E.trim()),
				E && (R += ' class="' + E + '"'),
				S.length > 0)
			) {
				const A = Do(S);
				for (const x of A) R += ' ' + x[0] + '="' + xo(x[1], g) + '"';
			}
			if ((f != null && (R += ' q:key="' + f + '"'), 'ref' in p || S.length > 0 || y)) {
				const A = $s(t.rCtx);
				(R += ' q:id="' + A + '"'), (g.$id$ = A), t.$contexts$.push(g);
			}
			if ((1 & s && (R += ' q:head'), (R += '>'), n.write(R), sc[a])) return;
			const C = p.dangerouslySetInnerHTML;
			if (C != null) return n.write(String(C)), void n.write(`</${a}>`);
			m || (s &= -2), a === 'html' ? (s |= 4) : (s &= -5);
			const I = Pe(p.children, t, n, s);
			return z(I, () => {
				if (m) {
					for (const A of t.headNodes) Xl(A.type, A.props, n);
					t.headNodes.length = 0;
				}
				if (i)
					return z(i(n), () => {
						n.write(`</${a}>`);
					});
				n.write(`</${a}>`);
			});
		}
		if (a === er) {
			const f = wo(111);
			return (f.$parent$ = t.hostCtx), Jl(e, f, void 0, t, n, s, i);
		}
		if (a === $l) return void n.write('<!--' + e.props.data + '-->');
		if (a === gl)
			return (async (f, p, _, g) => {
				_.write('<!--qkssr-f-->');
				const b = f.props.children;
				let m;
				if (Ie(b)) {
					const $ = b({
						write(R) {
							_.write(R), _.write('<!--qkssr-f-->');
						}
					});
					if (pe($)) return $;
					m = $;
				} else m = b;
				for await (const $ of m) await Pe($, p, _, g, void 0), _.write('<!--qkssr-f-->');
			})(e, t, n, s);
		const l = lt(t.invocationContext, a, e.props, e.key);
		return Pe(l, t, n, s, i);
	},
	Pe = (e, t, n, s, i) => {
		var a;
		if (e != null && typeof e != 'boolean')
			if (Zn(e) || typeof e == 'number') n.write(no(String(e)));
			else {
				if (ms(e)) return ec(e, t, n, s, i);
				if (ne(e)) return tc(e, t, n, s);
				if (Le(e)) {
					const l = 8 & s,
						u = (a = t.hostCtx) == null ? void 0 : a.$element$;
					let d;
					if (u) {
						if (!l) {
							d = e.value;
							const f = $s(t.rCtx);
							return tn(2, u, e, '#' + f, 'data'), void n.write(`<!--t=${f}-->${no(String(d))}<!---->`);
						}
						d = lt(t.invocationContext, () => e.value);
					}
					return void n.write(no(String(d)));
				}
				if (pe(e)) return n.write('<!--qkssr-f-->'), e.then((l) => Pe(l, t, n, s, i));
			}
	};
function tc(e, t, n, s) {
	if (e == null) return;
	if (!ne(e)) return Pe(e, t, n, s);
	if (e.length === 1) return Pe(e[0], t, n, s);
	if (e.length === 0) return;
	let i = 0;
	const a = [];
	return e.reduce((l, u, d) => {
		const f = [];
		a.push(f);
		const p = Pe(
				u,
				t,
				l
					? {
							write(g) {
								i === d ? n.write(g) : f.push(g);
							}
					  }
					: n,
				s
			),
			_ = () => {
				i++, a.length > i && a[i].forEach((g) => n.write(g));
			};
		return pe(p) && l ? Promise.all([p, l]).then(_) : pe(p) ? p.then(_) : l ? l.then(_) : void i++;
	}, void 0);
}
const nc = (e, t) => {
		if (e == null) return null;
		const n = rc(e, t),
			s = ne(n) ? n : [n];
		return s.length === 0 ? null : s;
	},
	oh = (e) => {
		if (!e) return '';
		if (typeof e == 'string') return e;
		if (Array.isArray(e)) return e.join(' ');
		const t = [];
		for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && t.push(n);
		return t.join(' ');
	},
	rc = (e, t) => {
		if (e == null) return null;
		if (ne(e)) return e.flatMap((n) => rc(n, t));
		if (ms(e) && Ie(e.type) && e.type !== $l && e.type !== gl && e.type !== er) {
			const n = lt(t.invocationContext, e.type, e.props, e.key);
			return nc(n, t);
		}
		return e;
	},
	ih = (e, t, n) => {
		var l;
		const s = Object.keys(n),
			i = { [vt]: ts };
		if (((t.$props$ = _s(i, e.$static$.$containerState$)), s.length === 0)) return;
		const a = (i[xe] = (l = n[xe]) != null ? l : it);
		for (const u of s) u !== 'children' && (Le(a[u]) ? (i['$$' + u] = a[u]) : (i[u] = n[u]));
	};
function ah(e) {
	return e === 'htmlFor' ? 'for' : e;
}
function lh(e, t) {
	return e === 'style' ? Tl(t) : t === !1 || t == null ? null : t === !0 ? '' : String(t);
}
const ch = { title: !0, style: !0, script: !0, noframes: !0, noscript: !0 },
	sc = {
		area: !0,
		base: !0,
		basefont: !0,
		bgsound: !0,
		br: !0,
		col: !0,
		embed: !0,
		frame: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	},
	uh = /[&<>]/g,
	dh = /[&"]/g,
	no = (e) =>
		e.replace(uh, (t) => {
			switch (t) {
				case '&':
					return '&amp;';
				case '<':
					return '&lt;';
				case '>':
					return '&gt;';
				default:
					return '';
			}
		}),
	fh = (e) =>
		e.replace(dh, (t) => {
			switch (t) {
				case '&':
					return '&amp;';
				case '"':
					return '&quot;';
				default:
					return '';
			}
		}),
	Mt = (e, t) => {
		var l;
		const { get: n, set: s, ctx: i } = Xt();
		if (n != null) return n;
		const a = Ie(e) ? e() : e;
		if ((t == null ? void 0 : t.reactive) === !1) return s(a), a;
		{
			const u = i.$renderCtx$.$static$.$containerState$,
				d = Jo(a, u, (l = t == null ? void 0 : t.recursive) != null && l ? 1 : 0);
			return s(d), d;
		}
	};
function oc(e, t) {
	var n;
	return (n = Po().$renderCtx$.$static$.$containerState$.$envData$[e]) != null ? n : t;
}
const xa = new Map(),
	hh = (e, t) => {
		let n = xa.get(t);
		return n || xa.set(t, (n = ph(e, t))), n;
	},
	ph = (e, t) => {
		const n = e.length,
			s = [],
			i = [];
		let a = 0,
			l = a,
			u = Ut,
			d = 0;
		for (; a < n; ) {
			let b = e.charCodeAt(a++);
			b === vh && (a++, (b = dc));
			const m = qh[u];
			for (let $ = 0; $ < m.length; $++) {
				const R = m[$],
					[y, S, T] = R;
				if (
					(y === d || y === L || (y === ns && zr(d)) || (y === _o && Da(d))) &&
					(S === b || S === L || (S === ns && zr(b)) || (S === ze && !zr(b) && b !== ri) || (S === _o && Da(b))) &&
					(R.length == 3 || _(R))
				) {
					if ((R.length > 3 && (b = e.charCodeAt(a - 1)), T === ae || T == wt)) {
						T === wt &&
							(u !== ic || g() ? La(b) || p(a - (S == ze ? 1 : S == So ? 2 : 0)) : (La(b) ? f(a - 2) : p(a - 2), l++)),
							S === ze && (a--, (b = d));
						do (u = i.pop() || Ut), u === _t && (f(a - 1), l++);
						while (mh(u));
					} else i.push(u), u === _t && T === Ut ? (f(a - 8), (l = a)) : T === ac && p(a - 2), (u = T);
					break;
				}
			}
			d = b;
		}
		return f(a), s.join('');
		function f(b) {
			s.push(e.substring(l, b)), (l = b);
		}
		function p(b) {
			u === _t || g() || (f(b), s.push('.', '\u2B50\uFE0F', t));
		}
		function _(b) {
			let m = 0;
			if (e.charCodeAt(a) === vo) {
				for (let $ = 1; $ < 10; $++)
					if (e.charCodeAt(a + $) === vo) {
						m = $ + 1;
						break;
					}
			}
			e: for (let $ = 3; $ < b.length; $++) {
				const R = b[$];
				for (let y = 0; y < R.length; y++) if ((e.charCodeAt(a + y + m) | Eh) !== R.charCodeAt(y)) continue e;
				return (a += R.length + m), !0;
			}
			return !1;
		}
		function g() {
			return i.indexOf(_t) !== -1 || i.indexOf(ni) !== -1;
		}
	},
	zr = (e) => (e >= wh && e <= _h) || (e >= dc && e <= Sh) || (e >= kh && e <= Th) || e >= 128 || e === Rh || e === vo,
	La = (e) => e === Ft || e === ri || e === fc || e === uc || zr(e),
	mh = (e) => e === lc || e === ni || e === cc || e === _t,
	Da = (e) => e === gh || e === yh || e === bh || e === $h,
	Ut = 0,
	ic = 2,
	_t = 5,
	ac = 6,
	ni = 10,
	lc = 11,
	cc = 12,
	ae = 17,
	wt = 18,
	L = 0,
	ns = 1,
	ze = 2,
	_o = 3,
	yh = 9,
	bh = 10,
	$h = 13,
	gh = 32,
	uc = 35,
	So = 41,
	vo = 45,
	ri = 46,
	wh = 48,
	_h = 57,
	Ft = 58,
	dc = 65,
	Sh = 90,
	fc = 91,
	vh = 92,
	Rh = 95,
	Eh = 32,
	kh = 97,
	Th = 122,
	yt = [
		[L, 39, 14],
		[L, 34, 15],
		[L, 47, 16, '*']
	],
	qh = [
		[
			[L, 42, ic],
			[L, fc, 7],
			[L, Ft, ac, ':'],
			[L, Ft, _t, 'global'],
			[L, Ft, 3, 'has', 'host-context', 'not', 'where', 'is', 'matches', 'any'],
			[L, Ft, 4],
			[L, ns, 1],
			[L, ri, 1],
			[L, uc, 1],
			[L, 64, ni, 'keyframe'],
			[L, 64, lc, 'media', 'supports'],
			[L, 64, cc],
			[L, 123, 13],
			[47, 42, 16],
			[L, 59, ae],
			[L, 125, ae],
			[L, So, ae],
			...yt
		],
		[[L, ze, wt]],
		[[L, ze, wt]],
		[
			[L, 40, Ut],
			[L, ze, wt]
		],
		[
			[L, 40, 8],
			[L, ze, wt]
		],
		[
			[L, 40, Ut],
			[L, ze, ae]
		],
		[[L, ze, ae]],
		[
			[L, 93, wt],
			[L, 39, 14],
			[L, 34, 15]
		],
		[[L, So, ae], ...yt],
		[[L, 125, ae], ...yt],
		[[L, 125, ae], [_o, ns, 1], [L, Ft, _t, 'global'], [L, 123, 13], ...yt],
		[[L, 123, Ut], [L, 59, ae], ...yt],
		[[L, 59, ae], [L, 123, 9], ...yt],
		[[L, 125, ae], [L, 123, 13], [L, 40, 8], ...yt],
		[[L, 39, ae]],
		[[L, 34, ae]],
		[[42, 47, ae]]
	],
	hc = (e) => {
		Ch(e, hh, !0);
	},
	Ch = (e, t, n) => {
		const { get: s, set: i, ctx: a, i: l } = Xt();
		if (s) return s;
		const u = a.$renderCtx$,
			d =
				((f = l),
				`${((m, $ = 0) => {
					if (m.length === 0) return $;
					for (let R = 0; R < m.length; R++) ($ = ($ << 5) - $ + m.charCodeAt(R)), ($ |= 0);
					return Number(Math.abs($)).toString(36);
				})(e.$hash$)}-${f}`);
		var f;
		const p = u.$static$.$containerState$,
			_ = oe(a.$hostElement$);
		if (
			(i(d),
			_.$appendStyles$ || (_.$appendStyles$ = []),
			_.$scopeIds$ || (_.$scopeIds$ = []),
			n && _.$scopeIds$.push(((m) => '\u2B50\uFE0F' + m)(d)),
			((m, $) => m.$styleIds$.has($))(p, d))
		)
			return d;
		p.$styleIds$.add(d);
		const g = e.$resolveLazy$(p.$containerEl$),
			b = (m) => {
				_.$appendStyles$, _.$appendStyles$.push({ styleId: d, content: t(m, d) });
			};
		return pe(g) ? a.$waitOn$.push(g.then(b)) : b(g), d;
	},
	Ah = () =>
		v('svg', {
			width: '100',
			height: '35',
			viewBox: '0 0 167 53',
			fill: 'none',
			xmlns: 'http://www.w3.org/2000/svg',
			children: [
				v('path', {
					d: 'M81.9545 46.5859H75.5513V35.4045C73.4363 36.8579 71.0496 37.5749 68.4884 37.5749C65.0151 37.5749 62.4344 36.6253 60.8239 34.6487C59.2134 32.6915 58.3984 29.2034 58.3984 24.2231C58.3984 19.1266 59.3492 15.5997 61.2702 13.5456C63.23 11.4721 66.3734 10.4644 70.7004 10.4644C74.7946 10.4644 78.5201 11.0264 81.9545 12.131V46.5859ZM75.5513 16.278C74.096 15.8323 72.4661 15.6191 70.7004 15.6191C68.5272 15.6191 66.9749 16.1811 66.1017 17.3244C65.2479 18.4871 64.7823 20.6962 64.7823 23.9712C64.7823 27.0524 65.1897 29.1065 66.0435 30.2304C66.8973 31.335 68.3719 31.897 70.5452 31.897C73.3781 31.897 75.5513 30.7343 75.5513 29.2809V16.278Z',
					fill: 'black'
				}),
				v('path', {
					d: 'M91.133 11.1426C93.4033 17.4406 95.3242 23.7386 96.993 30.0948C99.205 23.5836 101.087 17.2856 102.542 11.1426H108.15C110.265 17.4406 112.031 23.7386 113.447 30.0948C115.97 23.196 117.949 16.8787 119.404 11.1426H125.71C123.033 20.173 120.064 28.777 116.785 36.8966H109.256C108.402 32.3039 107.044 26.7617 105.22 20.1536C104.056 25.2889 102.445 30.8893 100.33 36.8966H92.8018C90.2793 27.5174 87.5434 18.9522 84.6328 11.1426H91.133Z',
					fill: 'black'
				}),
				v('path', {
					d: 'M132.832 7.55758C129.999 7.55758 129.203 6.85996 129.203 3.97257C129.203 1.39523 130.018 0.794495 132.832 0.794495C135.665 0.794495 136.46 1.39523 136.46 3.97257C136.46 6.85996 135.665 7.55758 132.832 7.55758ZM129.649 11.1426H136.053V36.8966H129.649V11.1426Z',
					fill: 'black'
				}),
				v('path', {
					d: 'M166.303 11.1426C161.763 17.5956 158.581 21.5295 156.815 22.9441C158.27 23.8937 162.17 28.8933 167.002 36.916H159.628C153.613 27.7887 150.742 23.8549 149.325 23.2542V36.916H142.922V0H149.325V23.2348C150.78 22.169 153.963 18.1382 158.872 11.1426H166.303Z',
					fill: 'black'
				}),
				v('path', {
					d: 'M40.973 52.5351L32.0861 43.6985L31.9503 43.7179V43.621L13.0511 24.9595L17.708 20.4637L14.9721 4.76715L1.99103 20.8513C-0.220992 23.0798 -0.628467 26.7036 0.962635 29.3778L9.07337 42.8265C10.3152 44.9 12.566 46.1402 14.9915 46.1208L19.0081 46.082L40.973 52.5351Z',
					fill: '#18B6F6'
				}),
				v('path', {
					d: 'M45.8232 20.5411L44.038 17.2468L43.1066 15.5609L42.738 14.902L42.6992 14.9408L37.8094 6.47238C36.587 4.34075 34.2974 3.02301 31.8137 3.04239L27.5255 3.15865L14.7384 3.19741C12.313 3.21679 10.101 4.49577 8.87853 6.56927L1.09766 21.9945L15.0101 4.72831L33.2496 24.7656L30.0091 28.0406L31.9495 43.7178L31.9689 43.679V43.7178H31.9301L31.9689 43.7565L33.4824 45.2293L40.8364 52.4187C41.1469 52.7094 41.6514 52.3606 41.4379 51.9924L36.8975 43.0589L44.8142 28.4282L45.0664 28.1375C45.1634 28.0212 45.2604 27.905 45.3381 27.7887C46.8904 25.6764 47.1038 22.8472 45.8232 20.5411Z',
					fill: '#AC7EF4'
				}),
				v('path', {
					d: 'M33.3076 24.6882L15.0099 4.74774L17.61 20.3668L12.9531 24.882L31.9105 43.6985L30.203 28.0794L33.3076 24.6882Z',
					fill: 'white'
				})
			]
		}),
	Ph = `header{display:flex;background:white;border-bottom:10px solid var(--qwik-dark-purple)}header .logo a{display:inline-block;padding:10px 10px 7px 20px}header ul{margin:0;padding:3px 10px 0 0;list-style:none;flex:1;text-align:right}header li{display:inline-block;margin:0;padding:0}header li a{display:inline-block;padding:15px 10px;text-decoration:none}header li a:hover{text-decoration:underline}
`,
	Ih = Be(
		te(
			() => (
				hc(te(Ph, 's_Nycp3CuLwDc')),
				v('header', {
					children: [
						v('div', {
							class: 'logo',
							children: v('a', {
								href: 'https://qwik.builder.io/',
								target: '_blank',
								children: v(Ah, {})
							})
						}),
						v('ul', {
							children: [
								v('li', {
									children: v('a', {
										href: 'https://qwik.builder.io/docs/components/overview/',
										target: '_blank',
										children: 'Docs'
									})
								}),
								v('li', {
									children: v('a', {
										href: 'https://qwik.builder.io/examples/introduction/hello-world/',
										target: '_blank',
										children: 'Examples'
									})
								}),
								v('li', {
									children: v('a', {
										href: 'https://qwik.builder.io/tutorial/welcome/overview/',
										target: '_blank',
										children: 'Tutorials'
									})
								})
							]
						})
					]
				})
			),
			's_waeqwrZa9mI'
		)
	),
	Oh = Be(
		te(
			() =>
				v(Xn, {
					children: [
						v('main', { children: [v(Ih, {}), v('section', { children: v(ti, {}) })] }),
						v('footer', {
							children: v('a', {
								href: 'https://www.builder.io/',
								target: '_blank',
								children: 'Made with \u2661 by Builder.io'
							})
						})
					]
				}),
			's_Wne0pB9yN4Y'
		)
	),
	xh = Object.freeze(Object.defineProperty({ __proto__: null, default: Oh }, Symbol.toStringTag, { value: 'Module' })),
	Lh = !0,
	Dh = !1,
	Bh = en('qc-c'),
	pc = en('qc-ic'),
	mc = en('qc-h'),
	yc = en('qc-l'),
	bc = en('qc-n'),
	Nh = Be(
		te(() => {
			const { contents: e } = bs(pc);
			if (e && e.length > 0) {
				const t = e.length;
				let n = null;
				for (let s = t - 1; s >= 0; s--) n = v(e[s].default, { children: n });
				return n;
			}
			return No;
		}, 'RouterOutlet_component_nd8yk3KO22c')
	),
	Ba = new WeakMap(),
	Wh = async (e, t, n, s) => {
		if (Array.isArray(e))
			for (const i of e) {
				const a = i[0].exec(s);
				if (a) {
					const l = i[1],
						u = zh(i[2], a),
						d = i[4],
						f = new Array(l.length),
						p = [],
						_ = jh(t, s);
					let g;
					return (
						l.forEach((b, m) => {
							Na(b, p, ($) => (f[m] = $), n);
						}),
						Na(_, p, (b) => (g = b == null ? void 0 : b.default), n),
						p.length > 0 && (await Promise.all(p)),
						[u, f, g, d]
					);
				}
			}
		return null;
	},
	Na = (e, t, n, s) => {
		if (typeof e == 'function') {
			const i = Ba.get(e);
			if (i) n(i);
			else {
				const a = e();
				typeof a.then == 'function'
					? t.push(
							a.then((l) => {
								s !== !1 && Ba.set(e, l), n(l);
							})
					  )
					: a && n(a);
			}
		}
	},
	jh = (e, t) => {
		if (e) {
			const n = e.find((s) => s[0] === t || t.startsWith(s[0] + (t.endsWith('/') ? '' : '/')));
			if (n) return n[1];
		}
	},
	zh = (e, t) => {
		const n = {};
		if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : '';
		return n;
	},
	Mh = (e, t, n) => {
		const s = $c(),
			i = { data: e ? e.body : null, head: s, ...t };
		for (let a = n.length - 1; a >= 0; a--) {
			const l = n[a] && n[a].head;
			l && (typeof l == 'function' ? Wa(s, l(i)) : typeof l == 'object' && Wa(s, l));
		}
		return i.head;
	},
	Wa = (e, t) => {
		typeof t.title == 'string' && (e.title = t.title), ro(e.meta, t.meta), ro(e.links, t.links), ro(e.styles, t.styles);
	},
	ro = (e, t) => {
		if (Array.isArray(t))
			for (const n of t) {
				if (typeof n.key == 'string') {
					const s = e.findIndex((i) => i.key === n.key);
					if (s > -1) {
						e[s] = n;
						continue;
					}
				}
				e.push(n);
			}
	},
	$c = () => ({ title: '', meta: [], links: [], styles: [] }),
	Fh = () => bs(mc),
	si = () => bs(yc),
	Hh = () => bs(bc),
	Uh = () => Ss(oc('qwikcity')),
	rs = (e) => e.pathname + e.search + e.hash,
	Yt = (e, t) => new URL(e, t.href),
	gc = (e, t) => e.origin === t.origin,
	wc = (e, t) => e.pathname + e.search === t.pathname + t.search,
	Qh = (e, t) => e.pathname === t.pathname,
	ja = (e, t) => gc(e, t) && !wc(e, t),
	Vh = (e) => e + (e.endsWith('/') ? '' : '/') + 'q-data.json',
	Yh = (e, t) => {
		const n = e.href;
		if (typeof n == 'string' && n.trim() !== '' && typeof e.target != 'string')
			try {
				const s = Yt(n, t),
					i = Yt('', t);
				if (gc(s, i)) return rs(s);
			} catch (s) {
				console.error(s);
			}
		return null;
	},
	Kh = (e, t, n) => {
		if (e.prefetch && t) {
			const s = Yt(t, n);
			if (!Qh(s, Yt('', n))) return s + '';
		}
		return null;
	},
	Gh = (e, t) => {
		const n = e.location,
			s = Yt(t.path, n);
		ja(n, s) && (za(e, n, s), e.history.pushState('', '', rs(s))),
			e[Ha] ||
				((e[Ha] = 1),
				e.addEventListener('popstate', () => {
					const i = e.location,
						a = Yt(t.path, i);
					ja(i, a) && (za(e, a, i), (t.path = rs(i)));
				}));
	},
	za = async (e, t, n) => {
		const s = e.document,
			i = n.hash;
		if (wc(t, n)) t.hash !== i && (await so(), i ? Ma(s, i) : e.scrollTo(0, 0));
		else if (i) for (let a = 0; a < 24 && (await so(), !Ma(s, i)); a++);
		else await so(), e.scrollTo(0, 0);
	},
	so = () => new Promise((e) => setTimeout(e, 12)),
	Ma = (e, t) => {
		const n = t.slice(1),
			s = e.getElementById(n);
		return s && s.scrollIntoView(), s;
	},
	Fa = (e) => dispatchEvent(new CustomEvent('qprefetch', { detail: e })),
	Ha = Symbol(),
	_c = async (e) => {
		const { cacheModules: t } = await Promise.resolve().then(() => kc),
			n = new URL(e).pathname,
			s = Vh(n),
			i = Date.now(),
			a = t ? 6e5 : 15e3,
			l = Wt.findIndex((d) => d.u === s);
		let u = Wt[l];
		if ((Fa({ links: [n] }), !u || u.t + a < i)) {
			u = {
				u: s,
				t: i,
				c: new Promise((d) => {
					fetch(s).then(
						(f) => {
							const p = f.headers.get('content-type') || '';
							f.ok && p.includes('json')
								? f.json().then(
										(_) => {
											Fa({ bundles: _.prefetch, links: [n] }), d(_);
										},
										() => d(null)
								  )
								: d(null);
						},
						() => d(null)
					);
				})
			};
			for (let d = Wt.length - 1; d >= 0; d--) Wt[d].t + a < i && Wt.splice(d, 1);
			Wt.push(u);
		}
		return u.c.catch((d) => console.error(d)), u.c;
	},
	Wt = [],
	Zh = Be(
		te(() => {
			const e = Uh();
			if (!(e != null && e.params)) throw new Error('Missing Qwik City Env Data');
			const t = oc('url');
			if (!t) throw new Error('Missing Qwik URL Env Data');
			const n = new URL(t),
				s = Mt({
					href: n.href,
					pathname: n.pathname,
					query: Object.fromEntries(n.searchParams.entries()),
					params: e.params
				}),
				i = Mt({ path: rs(n) }),
				a = Mt($c),
				l = Mt({ headings: void 0, menu: void 0 }),
				u = Mt({ contents: void 0 });
			return (
				Rn(Bh, l),
				Rn(pc, u),
				Rn(mc, a),
				Rn(yc, s),
				Rn(bc, i),
				yf(
					te(
						async ({ track: d }) => {
							const [f, p, _, g, b, m] = zn(),
								{ routes: $, menus: R, cacheModules: y } = await Promise.resolve().then(() => kc),
								S = d(m, 'path'),
								T = new URL(S, b.href),
								E = T.pathname,
								C = Wh($, R, y, E),
								I = Lh ? g.response : _c(T.href),
								A = await C;
							if (A) {
								const [x, Y, H] = A,
									K = Y,
									U = K[K.length - 1];
								(b.href = T.href),
									(b.pathname = E),
									(b.params = { ...x }),
									(b.query = Object.fromEntries(T.searchParams.entries())),
									(f.headings = U.headings),
									(f.menu = H),
									(p.contents = Ss(K));
								const ee = await I,
									re = Mh(ee, b, K);
								(_.links = re.links),
									(_.meta = re.meta),
									(_.styles = re.styles),
									(_.title = re.title),
									Dh && Gh(window, m);
							}
						},
						'QwikCity_component_useWatch_AaAlzKH0KlQ',
						[l, u, a, e, s, i]
					)
				),
				v(ti, {})
			);
		}, 'QwikCity_component_z1nvHyEppoI')
	),
	Jh = Be(
		te((e) => {
			const t = Hh(),
				n = si(),
				s = e.href,
				i = { ...e },
				a = Yh(i, n),
				l = Kh(e, a, n);
			return (
				(i['preventdefault:click'] = !!a),
				(i.href = a || s),
				v('a', {
					...i,
					onClick$: te(
						() => {
							const [u, d, f] = zn();
							u && (f.path = d.href);
						},
						'Link_component_a_onClick_hA9UPaY8sNQ',
						[a, i, t]
					),
					'data-prefetch': l,
					onMouseOver$: te((u, d) => Ua(d), 'Link_component_a_onMouseOver_skxgNVWVOT8'),
					onQVisible$: te((u, d) => Ua(d, !0), 'Link_component_a_onQVisible_uVE5iM9H73c'),
					children: v(ti, {})
				})
			);
		}, 'Link_component_mYsiJcA4IBc')
	),
	Ua = (e, t) => {
		var s;
		const n = (s = e == null ? void 0 : e.dataset) == null ? void 0 : s.prefetch;
		n && (oo || (oo = window.innerWidth), (!t || (t && oo < 520)) && _c(n));
	};
let oo = 0;
const Xh =
		'((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',
	ep = () => v('script', { dangerouslySetInnerHTML: Xh }),
	tp = Be(
		te(
			() =>
				v('div', {
					children: [
						v('h1', {
							children: ['Welcome to Qwik ', v('span', { class: 'lightning', children: '\u26A1\uFE0F' })]
						}),
						v('ul', {
							children: [
								v('li', {
									children: ['Check out the ', v('code', { children: 'src/routes' }), ' directory to get started.']
								}),
								v('li', {
									children: ['Add integrations with ', v('code', { children: 'npm run qwik add' }), '.']
								}),
								v('li', {
									children: ['More info about development in ', v('code', { children: 'README.md' })]
								})
							]
						}),
						v('h2', { children: 'Commands' }),
						v('table', {
							class: 'commands',
							children: [
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run dev' }) }),
										v('td', { children: 'Start the dev server and watch for changes.' })
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run preview' }) }),
										v('td', { children: 'Production build and start preview server.' })
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run build' }) }),
										v('td', { children: 'Production build.' })
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run qwik add' }) }),
										v('td', { children: 'Select an integration to add.' })
									]
								})
							]
						}),
						v('h2', { children: 'Add Integrations' }),
						v('table', {
							class: 'commands',
							children: [
								v('tr', {
									children: [
										v('td', {
											children: v('code', { children: 'npm run qwik add cloudflare-pages' })
										}),
										v('td', {
											children: v('a', {
												href: 'https://developers.cloudflare.com/pages',
												target: '_blank',
												children: 'Cloudflare Pages Server'
											})
										})
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run qwik add express' }) }),
										v('td', {
											children: v('a', {
												href: 'https://expressjs.com/',
												target: '_blank',
												children: 'Nodejs Express Server'
											})
										})
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run qwik add netlify-edge' }) }),
										v('td', {
											children: v('a', {
												href: 'https://docs.netlify.com/',
												target: '_blank',
												children: 'Netlify Edge Functions'
											})
										})
									]
								}),
								v('tr', {
									children: [
										v('td', { children: v('code', { children: 'npm run qwik add static-node' }) }),
										v('td', {
											children: v('a', {
												href: 'https://qwik.builder.io/qwikcity/static-site-generation/overview/',
												target: '_blank',
												children: 'Static Site Generation (SSG)'
											})
										})
									]
								})
							]
						}),
						v('h2', { children: 'Community' }),
						v('ul', {
							children: [
								v('li', {
									children: [
										v('span', { children: 'Questions or just want to say hi? ' }),
										v('a', {
											href: 'https://qwik.builder.io/chat',
											target: '_blank',
											children: 'Chat on discord!'
										})
									]
								}),
								v('li', {
									children: [
										v('span', { children: 'Follow ' }),
										v('a', {
											href: 'https://twitter.com/QwikDev',
											target: '_blank',
											children: '@QwikDev'
										}),
										v('span', { children: ' on Twitter' })
									]
								}),
								v('li', {
									children: [
										v('span', { children: 'Open issues and contribute on ' }),
										v('a', {
											href: 'https://github.com/BuilderIO/qwik',
											target: '_blank',
											children: 'Github'
										})
									]
								}),
								v('li', {
									children: [
										v('span', { children: 'Watch ' }),
										v('a', {
											href: 'https://qwik.builder.io/media/',
											target: '_blank',
											children: 'Presentations, Podcasts, Videos, etc.'
										})
									]
								})
							]
						}),
						v(Jh, {
							class: 'mindblow',
							href: '/flower',
							children: 'Blow my mind \u{1F92F}',
							[xe]: { class: !0, href: !0 }
						})
					]
				}),
			's_dTwuDWxzru4'
		)
	),
	np = { title: 'Welcome to Qwik' },
	rp = Object.freeze(
		Object.defineProperty({ __proto__: null, default: tp, head: np }, Symbol.toStringTag, {
			value: 'Module'
		})
	),
	sp = `.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,
	op = Be(
		te(() => {
			hc(te(sp, 's_l4dfO6buSG4'));
			const e = si(),
				t = Mt({ count: 0, number: 20 });
			return (
				bf(
					te(
						({ cleanup: n }) => {
							const [s] = zn(),
								i = setTimeout(() => (s.count = 1), 500);
							n(() => clearTimeout(i));
							const a = setInterval(() => s.count++, 7e3);
							n(() => clearInterval(a));
						},
						's_i1I9OIecsVA',
						[t]
					)
				),
				v(Xn, {
					children: [
						v('input', {
							type: 'range',
							get value() {
								return t.number;
							},
							max: 50,
							onInput$: te(
								(n) => {
									const [s] = zn();
									s.number = n.target.valueAsNumber;
								},
								's_RyZk4CU4DAE',
								[t]
							),
							[xe]: { value: jr(t, 'number') }
						}),
						v('div', {
							style: { '--state': `${t.count * 0.1}` },
							class: { host: !0, pride: e.query.pride === 'true' },
							children: Array.from({ length: t.number }, (n, s) =>
								v('div', { class: { square: !0, odd: s % 2 === 0 }, style: { '--index': `${s + 1}` } }, s)
							).reverse()
						})
					]
				})
			);
		}, 's_BR18vKXKQkY')
	),
	ip = { title: 'Qwik Flower' },
	ap = Object.freeze(
		Object.defineProperty({ __proto__: null, default: op, head: ip }, Symbol.toStringTag, {
			value: 'Module'
		})
	),
	Qa = () => xh,
	Sc = [
		[/^\/$/, [Qa, () => rp], void 0, '/', ['q-29035502.js', 'q-998872b3.js']],
		[/^\/flower\/?$/, [Qa, () => ap], void 0, '/flower', ['q-29035502.js', 'q-8fd64bb6.js']]
	],
	vc = [],
	Ro = !1,
	Rc = '/',
	Ec = !0,
	kc = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				routes: Sc,
				menus: vc,
				trailingSlash: Ro,
				basePathname: Rc,
				cacheModules: Ec
			},
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
function lp(e) {
	if (!/^data:/i.test(e)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
	e = e.replace(/\r?\n/g, '');
	const t = e.indexOf(',');
	if (t === -1 || t <= 4) throw new TypeError('malformed data: URI');
	const n = e.substring(5, t).split(';');
	let s = '',
		i = !1;
	const a = n[0] || 'text/plain';
	let l = a;
	for (let p = 1; p < n.length; p++)
		n[p] === 'base64' ? (i = !0) : ((l += `;${n[p]}`), n[p].indexOf('charset=') === 0 && (s = n[p].substring(8)));
	!n[0] && !s.length && ((l += ';charset=US-ASCII'), (s = 'US-ASCII'));
	const u = i ? 'base64' : 'ascii',
		d = unescape(e.substring(t + 1)),
		f = Buffer.from(d, u);
	return (f.type = a), (f.typeFull = l), (f.charset = s), f;
}
var io =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
			? window
			: typeof global < 'u'
			? global
			: typeof self < 'u'
			? self
			: {},
	Br = { exports: {} },
	Va;
function cp() {
	return (
		Va ||
			((Va = 1),
			(function (e, t) {
				(function (n, s) {
					s(t);
				})(io, function (n) {
					const s = typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ? Symbol : (r) => `Symbol(${r})`;
					function i() {}
					function a() {
						if (typeof self < 'u') return self;
						if (typeof window < 'u') return window;
						if (typeof io < 'u') return io;
					}
					const l = a();
					function u(r) {
						return (typeof r == 'object' && r !== null) || typeof r == 'function';
					}
					const d = i,
						f = Promise,
						p = Promise.prototype.then,
						_ = Promise.resolve.bind(f),
						g = Promise.reject.bind(f);
					function b(r) {
						return new f(r);
					}
					function m(r) {
						return _(r);
					}
					function $(r) {
						return g(r);
					}
					function R(r, o, c) {
						return p.call(r, o, c);
					}
					function y(r, o, c) {
						R(R(r, o, c), void 0, d);
					}
					function S(r, o) {
						y(r, o);
					}
					function T(r, o) {
						y(r, void 0, o);
					}
					function E(r, o, c) {
						return R(r, o, c);
					}
					function C(r) {
						R(r, void 0, d);
					}
					const I = (() => {
						const r = l && l.queueMicrotask;
						if (typeof r == 'function') return r;
						const o = m(void 0);
						return (c) => R(o, c);
					})();
					function A(r, o, c) {
						if (typeof r != 'function') throw new TypeError('Argument is not a function');
						return Function.prototype.apply.call(r, o, c);
					}
					function x(r, o, c) {
						try {
							return m(A(r, o, c));
						} catch (h) {
							return $(h);
						}
					}
					const Y = 16384;
					class H {
						constructor() {
							(this._cursor = 0),
								(this._size = 0),
								(this._front = { _elements: [], _next: void 0 }),
								(this._back = this._front),
								(this._cursor = 0),
								(this._size = 0);
						}
						get length() {
							return this._size;
						}
						push(o) {
							const c = this._back;
							let h = c;
							c._elements.length === Y - 1 && (h = { _elements: [], _next: void 0 }),
								c._elements.push(o),
								h !== c && ((this._back = h), (c._next = h)),
								++this._size;
						}
						shift() {
							const o = this._front;
							let c = o;
							const h = this._cursor;
							let w = h + 1;
							const k = o._elements,
								q = k[h];
							return (
								w === Y && ((c = o._next), (w = 0)),
								--this._size,
								(this._cursor = w),
								o !== c && (this._front = c),
								(k[h] = void 0),
								q
							);
						}
						forEach(o) {
							let c = this._cursor,
								h = this._front,
								w = h._elements;
							for (
								;
								(c !== w.length || h._next !== void 0) &&
								!(c === w.length && ((h = h._next), (w = h._elements), (c = 0), w.length === 0));

							)
								o(w[c]), ++c;
						}
						peek() {
							const o = this._front,
								c = this._cursor;
							return o._elements[c];
						}
					}
					function K(r, o) {
						(r._ownerReadableStream = o),
							(o._reader = r),
							o._state === 'readable' ? G(r) : o._state === 'closed' ? rn(r) : me(r, o._storedError);
					}
					function U(r, o) {
						const c = r._ownerReadableStream;
						return _e(c, o);
					}
					function ee(r) {
						r._ownerReadableStream._state === 'readable'
							? ct(r, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"))
							: ge(
									r,
									new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")
							  ),
							(r._ownerReadableStream._reader = void 0),
							(r._ownerReadableStream = void 0);
					}
					function re(r) {
						return new TypeError('Cannot ' + r + ' a stream using a released reader');
					}
					function G(r) {
						r._closedPromise = b((o, c) => {
							(r._closedPromise_resolve = o), (r._closedPromise_reject = c);
						});
					}
					function me(r, o) {
						G(r), ct(r, o);
					}
					function rn(r) {
						G(r), sn(r);
					}
					function ct(r, o) {
						r._closedPromise_reject !== void 0 &&
							(C(r._closedPromise),
							r._closedPromise_reject(o),
							(r._closedPromise_resolve = void 0),
							(r._closedPromise_reject = void 0));
					}
					function ge(r, o) {
						me(r, o);
					}
					function sn(r) {
						r._closedPromise_resolve !== void 0 &&
							(r._closedPromise_resolve(void 0),
							(r._closedPromise_resolve = void 0),
							(r._closedPromise_reject = void 0));
					}
					const on = s('[[AbortSteps]]'),
						an = s('[[ErrorSteps]]'),
						Et = s('[[CancelSteps]]'),
						kt = s('[[PullSteps]]'),
						ln =
							Number.isFinite ||
							function (r) {
								return typeof r == 'number' && isFinite(r);
							},
						nr =
							Math.trunc ||
							function (r) {
								return r < 0 ? Math.ceil(r) : Math.floor(r);
							};
					function rr(r) {
						return typeof r == 'object' || typeof r == 'function';
					}
					function Q(r, o) {
						if (r !== void 0 && !rr(r)) throw new TypeError(`${o} is not an object.`);
					}
					function le(r, o) {
						if (typeof r != 'function') throw new TypeError(`${o} is not a function.`);
					}
					function Fc(r) {
						return (typeof r == 'object' && r !== null) || typeof r == 'function';
					}
					function ii(r, o) {
						if (!Fc(r)) throw new TypeError(`${o} is not an object.`);
					}
					function Ne(r, o, c) {
						if (r === void 0) throw new TypeError(`Parameter ${o} is required in '${c}'.`);
					}
					function ks(r, o, c) {
						if (r === void 0) throw new TypeError(`${o} is required in '${c}'.`);
					}
					function Ts(r) {
						return Number(r);
					}
					function ai(r) {
						return r === 0 ? 0 : r;
					}
					function Hc(r) {
						return ai(nr(r));
					}
					function li(r, o) {
						const h = Number.MAX_SAFE_INTEGER;
						let w = Number(r);
						if (((w = ai(w)), !ln(w))) throw new TypeError(`${o} is not a finite number`);
						if (((w = Hc(w)), w < 0 || w > h))
							throw new TypeError(`${o} is outside the accepted range of ${0} to ${h}, inclusive`);
						return !ln(w) || w === 0 ? 0 : w;
					}
					function qs(r, o) {
						if (!tt(r)) throw new TypeError(`${o} is not a ReadableStream.`);
					}
					function Tt(r) {
						return new cn(r);
					}
					function ci(r, o) {
						r._reader._readRequests.push(o);
					}
					function Cs(r, o, c) {
						const w = r._reader._readRequests.shift();
						c ? w._closeSteps() : w._chunkSteps(o);
					}
					function sr(r) {
						return r._reader._readRequests.length;
					}
					function ui(r) {
						const o = r._reader;
						return !(o === void 0 || !Ze(o));
					}
					class cn {
						constructor(o) {
							if ((Ne(o, 1, 'ReadableStreamDefaultReader'), qs(o, 'First parameter'), nt(o)))
								throw new TypeError('This stream has already been locked for exclusive reading by another reader');
							K(this, o), (this._readRequests = new H());
						}
						get closed() {
							return Ze(this) ? this._closedPromise : $(or('closed'));
						}
						cancel(o = void 0) {
							return Ze(this) ? (this._ownerReadableStream === void 0 ? $(re('cancel')) : U(this, o)) : $(or('cancel'));
						}
						read() {
							if (!Ze(this)) return $(or('read'));
							if (this._ownerReadableStream === void 0) return $(re('read from'));
							let o, c;
							const h = b((k, q) => {
								(o = k), (c = q);
							});
							return (
								un(this, {
									_chunkSteps: (k) => o({ value: k, done: !1 }),
									_closeSteps: () => o({ value: void 0, done: !0 }),
									_errorSteps: (k) => c(k)
								}),
								h
							);
						}
						releaseLock() {
							if (!Ze(this)) throw or('releaseLock');
							if (this._ownerReadableStream !== void 0) {
								if (this._readRequests.length > 0)
									throw new TypeError(
										'Tried to release a reader lock when that reader has pending read() calls un-settled'
									);
								ee(this);
							}
						}
					}
					Object.defineProperties(cn.prototype, {
						cancel: { enumerable: !0 },
						read: { enumerable: !0 },
						releaseLock: { enumerable: !0 },
						closed: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(cn.prototype, s.toStringTag, {
								value: 'ReadableStreamDefaultReader',
								configurable: !0
							});
					function Ze(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_readRequests') ? !1 : r instanceof cn;
					}
					function un(r, o) {
						const c = r._ownerReadableStream;
						(c._disturbed = !0),
							c._state === 'closed'
								? o._closeSteps()
								: c._state === 'errored'
								? o._errorSteps(c._storedError)
								: c._readableStreamController[kt](o);
					}
					function or(r) {
						return new TypeError(
							`ReadableStreamDefaultReader.prototype.${r} can only be used on a ReadableStreamDefaultReader`
						);
					}
					const di = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {}).prototype);
					class fi {
						constructor(o, c) {
							(this._ongoingPromise = void 0), (this._isFinished = !1), (this._reader = o), (this._preventCancel = c);
						}
						next() {
							const o = () => this._nextSteps();
							return (
								(this._ongoingPromise = this._ongoingPromise ? E(this._ongoingPromise, o, o) : o()),
								this._ongoingPromise
							);
						}
						return(o) {
							const c = () => this._returnSteps(o);
							return this._ongoingPromise ? E(this._ongoingPromise, c, c) : c();
						}
						_nextSteps() {
							if (this._isFinished) return Promise.resolve({ value: void 0, done: !0 });
							const o = this._reader;
							if (o._ownerReadableStream === void 0) return $(re('iterate'));
							let c, h;
							const w = b((q, P) => {
								(c = q), (h = P);
							});
							return (
								un(o, {
									_chunkSteps: (q) => {
										(this._ongoingPromise = void 0), I(() => c({ value: q, done: !1 }));
									},
									_closeSteps: () => {
										(this._ongoingPromise = void 0), (this._isFinished = !0), ee(o), c({ value: void 0, done: !0 });
									},
									_errorSteps: (q) => {
										(this._ongoingPromise = void 0), (this._isFinished = !0), ee(o), h(q);
									}
								}),
								w
							);
						}
						_returnSteps(o) {
							if (this._isFinished) return Promise.resolve({ value: o, done: !0 });
							this._isFinished = !0;
							const c = this._reader;
							if (c._ownerReadableStream === void 0) return $(re('finish iterating'));
							if (!this._preventCancel) {
								const h = U(c, o);
								return ee(c), E(h, () => ({ value: o, done: !0 }));
							}
							return ee(c), m({ value: o, done: !0 });
						}
					}
					const hi = {
						next() {
							return pi(this) ? this._asyncIteratorImpl.next() : $(mi('next'));
						},
						return(r) {
							return pi(this) ? this._asyncIteratorImpl.return(r) : $(mi('return'));
						}
					};
					di !== void 0 && Object.setPrototypeOf(hi, di);
					function Uc(r, o) {
						const c = Tt(r),
							h = new fi(c, o),
							w = Object.create(hi);
						return (w._asyncIteratorImpl = h), w;
					}
					function pi(r) {
						if (!u(r) || !Object.prototype.hasOwnProperty.call(r, '_asyncIteratorImpl')) return !1;
						try {
							return r._asyncIteratorImpl instanceof fi;
						} catch {
							return !1;
						}
					}
					function mi(r) {
						return new TypeError(`ReadableStreamAsyncIterator.${r} can only be used on a ReadableSteamAsyncIterator`);
					}
					const yi =
						Number.isNaN ||
						function (r) {
							return r !== r;
						};
					function dn(r) {
						return r.slice();
					}
					function bi(r, o, c, h, w) {
						new Uint8Array(r).set(new Uint8Array(c, h, w), o);
					}
					function Jm(r) {
						return r;
					}
					function ir(r) {
						return !1;
					}
					function $i(r, o, c) {
						if (r.slice) return r.slice(o, c);
						const h = c - o,
							w = new ArrayBuffer(h);
						return bi(w, 0, r, o, h), w;
					}
					function Qc(r) {
						return !(typeof r != 'number' || yi(r) || r < 0);
					}
					function gi(r) {
						const o = $i(r.buffer, r.byteOffset, r.byteOffset + r.byteLength);
						return new Uint8Array(o);
					}
					function As(r) {
						const o = r._queue.shift();
						return (r._queueTotalSize -= o.size), r._queueTotalSize < 0 && (r._queueTotalSize = 0), o.value;
					}
					function Ps(r, o, c) {
						if (!Qc(c) || c === 1 / 0) throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
						r._queue.push({ value: o, size: c }), (r._queueTotalSize += c);
					}
					function Vc(r) {
						return r._queue.peek().value;
					}
					function Je(r) {
						(r._queue = new H()), (r._queueTotalSize = 0);
					}
					class fn {
						constructor() {
							throw new TypeError('Illegal constructor');
						}
						get view() {
							if (!Is(this)) throw Ds('view');
							return this._view;
						}
						respond(o) {
							if (!Is(this)) throw Ds('respond');
							if (
								(Ne(o, 1, 'respond'),
								(o = li(o, 'First parameter')),
								this._associatedReadableByteStreamController === void 0)
							)
								throw new TypeError('This BYOB request has been invalidated');
							ir(this._view.buffer), dr(this._associatedReadableByteStreamController, o);
						}
						respondWithNewView(o) {
							if (!Is(this)) throw Ds('respondWithNewView');
							if ((Ne(o, 1, 'respondWithNewView'), !ArrayBuffer.isView(o)))
								throw new TypeError('You can only respond with array buffer views');
							if (this._associatedReadableByteStreamController === void 0)
								throw new TypeError('This BYOB request has been invalidated');
							ir(o.buffer), fr(this._associatedReadableByteStreamController, o);
						}
					}
					Object.defineProperties(fn.prototype, {
						respond: { enumerable: !0 },
						respondWithNewView: { enumerable: !0 },
						view: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(fn.prototype, s.toStringTag, {
								value: 'ReadableStreamBYOBRequest',
								configurable: !0
							});
					class qt {
						constructor() {
							throw new TypeError('Illegal constructor');
						}
						get byobRequest() {
							if (!ut(this)) throw pn('byobRequest');
							return Ls(this);
						}
						get desiredSize() {
							if (!ut(this)) throw pn('desiredSize');
							return Ti(this);
						}
						close() {
							if (!ut(this)) throw pn('close');
							if (this._closeRequested)
								throw new TypeError('The stream has already been closed; do not close it again!');
							const o = this._controlledReadableByteStream._state;
							if (o !== 'readable')
								throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);
							hn(this);
						}
						enqueue(o) {
							if (!ut(this)) throw pn('enqueue');
							if ((Ne(o, 1, 'enqueue'), !ArrayBuffer.isView(o)))
								throw new TypeError('chunk must be an array buffer view');
							if (o.byteLength === 0) throw new TypeError('chunk must have non-zero byteLength');
							if (o.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
							if (this._closeRequested) throw new TypeError('stream is closed or draining');
							const c = this._controlledReadableByteStream._state;
							if (c !== 'readable')
								throw new TypeError(
									`The stream (in ${c} state) is not in the readable state and cannot be enqueued to`
								);
							ur(this, o);
						}
						error(o = void 0) {
							if (!ut(this)) throw pn('error');
							we(this, o);
						}
						[Et](o) {
							wi(this), Je(this);
							const c = this._cancelAlgorithm(o);
							return cr(this), c;
						}
						[kt](o) {
							const c = this._controlledReadableByteStream;
							if (this._queueTotalSize > 0) {
								const w = this._queue.shift();
								(this._queueTotalSize -= w.byteLength), Ri(this);
								const k = new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
								o._chunkSteps(k);
								return;
							}
							const h = this._autoAllocateChunkSize;
							if (h !== void 0) {
								let w;
								try {
									w = new ArrayBuffer(h);
								} catch (q) {
									o._errorSteps(q);
									return;
								}
								const k = {
									buffer: w,
									bufferByteLength: h,
									byteOffset: 0,
									byteLength: h,
									bytesFilled: 0,
									elementSize: 1,
									viewConstructor: Uint8Array,
									readerType: 'default'
								};
								this._pendingPullIntos.push(k);
							}
							ci(c, o), dt(this);
						}
					}
					Object.defineProperties(qt.prototype, {
						close: { enumerable: !0 },
						enqueue: { enumerable: !0 },
						error: { enumerable: !0 },
						byobRequest: { enumerable: !0 },
						desiredSize: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(qt.prototype, s.toStringTag, {
								value: 'ReadableByteStreamController',
								configurable: !0
							});
					function ut(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_controlledReadableByteStream')
							? !1
							: r instanceof qt;
					}
					function Is(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_associatedReadableByteStreamController')
							? !1
							: r instanceof fn;
					}
					function dt(r) {
						if (!Zc(r)) return;
						if (r._pulling) {
							r._pullAgain = !0;
							return;
						}
						r._pulling = !0;
						const c = r._pullAlgorithm();
						y(
							c,
							() => {
								(r._pulling = !1), r._pullAgain && ((r._pullAgain = !1), dt(r));
							},
							(h) => {
								we(r, h);
							}
						);
					}
					function wi(r) {
						xs(r), (r._pendingPullIntos = new H());
					}
					function Os(r, o) {
						let c = !1;
						r._state === 'closed' && (c = !0);
						const h = _i(o);
						o.readerType === 'default' ? Cs(r, h, c) : eu(r, h, c);
					}
					function _i(r) {
						const o = r.bytesFilled,
							c = r.elementSize;
						return new r.viewConstructor(r.buffer, r.byteOffset, o / c);
					}
					function ar(r, o, c, h) {
						r._queue.push({ buffer: o, byteOffset: c, byteLength: h }), (r._queueTotalSize += h);
					}
					function Si(r, o) {
						const c = o.elementSize,
							h = o.bytesFilled - (o.bytesFilled % c),
							w = Math.min(r._queueTotalSize, o.byteLength - o.bytesFilled),
							k = o.bytesFilled + w,
							q = k - (k % c);
						let P = w,
							D = !1;
						q > h && ((P = q - o.bytesFilled), (D = !0));
						const N = r._queue;
						for (; P > 0; ) {
							const W = N.peek(),
								j = Math.min(P, W.byteLength),
								V = o.byteOffset + o.bytesFilled;
							bi(o.buffer, V, W.buffer, W.byteOffset, j),
								W.byteLength === j ? N.shift() : ((W.byteOffset += j), (W.byteLength -= j)),
								(r._queueTotalSize -= j),
								vi(r, j, o),
								(P -= j);
						}
						return D;
					}
					function vi(r, o, c) {
						c.bytesFilled += o;
					}
					function Ri(r) {
						r._queueTotalSize === 0 && r._closeRequested ? (cr(r), Sn(r._controlledReadableByteStream)) : dt(r);
					}
					function xs(r) {
						r._byobRequest !== null &&
							((r._byobRequest._associatedReadableByteStreamController = void 0),
							(r._byobRequest._view = null),
							(r._byobRequest = null));
					}
					function Ei(r) {
						for (; r._pendingPullIntos.length > 0; ) {
							if (r._queueTotalSize === 0) return;
							const o = r._pendingPullIntos.peek();
							Si(r, o) && (lr(r), Os(r._controlledReadableByteStream, o));
						}
					}
					function Yc(r, o, c) {
						const h = r._controlledReadableByteStream;
						let w = 1;
						o.constructor !== DataView && (w = o.constructor.BYTES_PER_ELEMENT);
						const k = o.constructor,
							q = o.buffer,
							P = {
								buffer: q,
								bufferByteLength: q.byteLength,
								byteOffset: o.byteOffset,
								byteLength: o.byteLength,
								bytesFilled: 0,
								elementSize: w,
								viewConstructor: k,
								readerType: 'byob'
							};
						if (r._pendingPullIntos.length > 0) {
							r._pendingPullIntos.push(P), Ai(h, c);
							return;
						}
						if (h._state === 'closed') {
							const D = new k(P.buffer, P.byteOffset, 0);
							c._closeSteps(D);
							return;
						}
						if (r._queueTotalSize > 0) {
							if (Si(r, P)) {
								const D = _i(P);
								Ri(r), c._chunkSteps(D);
								return;
							}
							if (r._closeRequested) {
								const D = new TypeError('Insufficient bytes to fill elements in the given buffer');
								we(r, D), c._errorSteps(D);
								return;
							}
						}
						r._pendingPullIntos.push(P), Ai(h, c), dt(r);
					}
					function Kc(r, o) {
						const c = r._controlledReadableByteStream;
						if (Bs(c))
							for (; Pi(c) > 0; ) {
								const h = lr(r);
								Os(c, h);
							}
					}
					function Gc(r, o, c) {
						if ((vi(r, o, c), c.bytesFilled < c.elementSize)) return;
						lr(r);
						const h = c.bytesFilled % c.elementSize;
						if (h > 0) {
							const w = c.byteOffset + c.bytesFilled,
								k = $i(c.buffer, w - h, w);
							ar(r, k, 0, k.byteLength);
						}
						(c.bytesFilled -= h), Os(r._controlledReadableByteStream, c), Ei(r);
					}
					function ki(r, o) {
						const c = r._pendingPullIntos.peek();
						xs(r), r._controlledReadableByteStream._state === 'closed' ? Kc(r) : Gc(r, o, c), dt(r);
					}
					function lr(r) {
						return r._pendingPullIntos.shift();
					}
					function Zc(r) {
						const o = r._controlledReadableByteStream;
						return o._state !== 'readable' || r._closeRequested || !r._started
							? !1
							: !!((ui(o) && sr(o) > 0) || (Bs(o) && Pi(o) > 0) || Ti(r) > 0);
					}
					function cr(r) {
						(r._pullAlgorithm = void 0), (r._cancelAlgorithm = void 0);
					}
					function hn(r) {
						const o = r._controlledReadableByteStream;
						if (!(r._closeRequested || o._state !== 'readable')) {
							if (r._queueTotalSize > 0) {
								r._closeRequested = !0;
								return;
							}
							if (r._pendingPullIntos.length > 0 && r._pendingPullIntos.peek().bytesFilled > 0) {
								const h = new TypeError('Insufficient bytes to fill elements in the given buffer');
								throw (we(r, h), h);
							}
							cr(r), Sn(o);
						}
					}
					function ur(r, o) {
						const c = r._controlledReadableByteStream;
						if (r._closeRequested || c._state !== 'readable') return;
						const h = o.buffer,
							w = o.byteOffset,
							k = o.byteLength,
							q = h;
						if (r._pendingPullIntos.length > 0) {
							const P = r._pendingPullIntos.peek();
							ir(P.buffer), (P.buffer = P.buffer);
						}
						if ((xs(r), ui(c)))
							if (sr(c) === 0) ar(r, q, w, k);
							else {
								r._pendingPullIntos.length > 0 && lr(r);
								const P = new Uint8Array(q, w, k);
								Cs(c, P, !1);
							}
						else Bs(c) ? (ar(r, q, w, k), Ei(r)) : ar(r, q, w, k);
						dt(r);
					}
					function we(r, o) {
						const c = r._controlledReadableByteStream;
						c._state === 'readable' && (wi(r), Je(r), cr(r), ta(c, o));
					}
					function Ls(r) {
						if (r._byobRequest === null && r._pendingPullIntos.length > 0) {
							const o = r._pendingPullIntos.peek(),
								c = new Uint8Array(o.buffer, o.byteOffset + o.bytesFilled, o.byteLength - o.bytesFilled),
								h = Object.create(fn.prototype);
							Xc(h, r, c), (r._byobRequest = h);
						}
						return r._byobRequest;
					}
					function Ti(r) {
						const o = r._controlledReadableByteStream._state;
						return o === 'errored' ? null : o === 'closed' ? 0 : r._strategyHWM - r._queueTotalSize;
					}
					function dr(r, o) {
						const c = r._pendingPullIntos.peek();
						if (r._controlledReadableByteStream._state === 'closed') {
							if (o !== 0) throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
						} else {
							if (o === 0)
								throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
							if (c.bytesFilled + o > c.byteLength) throw new RangeError('bytesWritten out of range');
						}
						(c.buffer = c.buffer), ki(r, o);
					}
					function fr(r, o) {
						const c = r._pendingPullIntos.peek();
						if (r._controlledReadableByteStream._state === 'closed') {
							if (o.byteLength !== 0)
								throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
						} else if (o.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
						if (c.byteOffset + c.bytesFilled !== o.byteOffset)
							throw new RangeError('The region specified by view does not match byobRequest');
						if (c.bufferByteLength !== o.buffer.byteLength)
							throw new RangeError('The buffer of view has different capacity than byobRequest');
						if (c.bytesFilled + o.byteLength > c.byteLength)
							throw new RangeError('The region specified by view is larger than byobRequest');
						const w = o.byteLength;
						(c.buffer = o.buffer), ki(r, w);
					}
					function qi(r, o, c, h, w, k, q) {
						(o._controlledReadableByteStream = r),
							(o._pullAgain = !1),
							(o._pulling = !1),
							(o._byobRequest = null),
							(o._queue = o._queueTotalSize = void 0),
							Je(o),
							(o._closeRequested = !1),
							(o._started = !1),
							(o._strategyHWM = k),
							(o._pullAlgorithm = h),
							(o._cancelAlgorithm = w),
							(o._autoAllocateChunkSize = q),
							(o._pendingPullIntos = new H()),
							(r._readableStreamController = o);
						const P = c();
						y(
							m(P),
							() => {
								(o._started = !0), dt(o);
							},
							(D) => {
								we(o, D);
							}
						);
					}
					function Jc(r, o, c) {
						const h = Object.create(qt.prototype);
						let w = () => {},
							k = () => m(void 0),
							q = () => m(void 0);
						o.start !== void 0 && (w = () => o.start(h)),
							o.pull !== void 0 && (k = () => o.pull(h)),
							o.cancel !== void 0 && (q = (D) => o.cancel(D));
						const P = o.autoAllocateChunkSize;
						if (P === 0) throw new TypeError('autoAllocateChunkSize must be greater than 0');
						qi(r, h, w, k, q, c, P);
					}
					function Xc(r, o, c) {
						(r._associatedReadableByteStreamController = o), (r._view = c);
					}
					function Ds(r) {
						return new TypeError(
							`ReadableStreamBYOBRequest.prototype.${r} can only be used on a ReadableStreamBYOBRequest`
						);
					}
					function pn(r) {
						return new TypeError(
							`ReadableByteStreamController.prototype.${r} can only be used on a ReadableByteStreamController`
						);
					}
					function Ci(r) {
						return new mn(r);
					}
					function Ai(r, o) {
						r._reader._readIntoRequests.push(o);
					}
					function eu(r, o, c) {
						const w = r._reader._readIntoRequests.shift();
						c ? w._closeSteps(o) : w._chunkSteps(o);
					}
					function Pi(r) {
						return r._reader._readIntoRequests.length;
					}
					function Bs(r) {
						const o = r._reader;
						return !(o === void 0 || !ft(o));
					}
					class mn {
						constructor(o) {
							if ((Ne(o, 1, 'ReadableStreamBYOBReader'), qs(o, 'First parameter'), nt(o)))
								throw new TypeError('This stream has already been locked for exclusive reading by another reader');
							if (!ut(o._readableStreamController))
								throw new TypeError(
									'Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source'
								);
							K(this, o), (this._readIntoRequests = new H());
						}
						get closed() {
							return ft(this) ? this._closedPromise : $(hr('closed'));
						}
						cancel(o = void 0) {
							return ft(this) ? (this._ownerReadableStream === void 0 ? $(re('cancel')) : U(this, o)) : $(hr('cancel'));
						}
						read(o) {
							if (!ft(this)) return $(hr('read'));
							if (!ArrayBuffer.isView(o)) return $(new TypeError('view must be an array buffer view'));
							if (o.byteLength === 0) return $(new TypeError('view must have non-zero byteLength'));
							if (o.buffer.byteLength === 0) return $(new TypeError("view's buffer must have non-zero byteLength"));
							if ((ir(o.buffer), this._ownerReadableStream === void 0)) return $(re('read from'));
							let c, h;
							const w = b((q, P) => {
								(c = q), (h = P);
							});
							return (
								Ii(this, o, {
									_chunkSteps: (q) => c({ value: q, done: !1 }),
									_closeSteps: (q) => c({ value: q, done: !0 }),
									_errorSteps: (q) => h(q)
								}),
								w
							);
						}
						releaseLock() {
							if (!ft(this)) throw hr('releaseLock');
							if (this._ownerReadableStream !== void 0) {
								if (this._readIntoRequests.length > 0)
									throw new TypeError(
										'Tried to release a reader lock when that reader has pending read() calls un-settled'
									);
								ee(this);
							}
						}
					}
					Object.defineProperties(mn.prototype, {
						cancel: { enumerable: !0 },
						read: { enumerable: !0 },
						releaseLock: { enumerable: !0 },
						closed: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(mn.prototype, s.toStringTag, {
								value: 'ReadableStreamBYOBReader',
								configurable: !0
							});
					function ft(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_readIntoRequests') ? !1 : r instanceof mn;
					}
					function Ii(r, o, c) {
						const h = r._ownerReadableStream;
						(h._disturbed = !0),
							h._state === 'errored' ? c._errorSteps(h._storedError) : Yc(h._readableStreamController, o, c);
					}
					function hr(r) {
						return new TypeError(
							`ReadableStreamBYOBReader.prototype.${r} can only be used on a ReadableStreamBYOBReader`
						);
					}
					function yn(r, o) {
						const { highWaterMark: c } = r;
						if (c === void 0) return o;
						if (yi(c) || c < 0) throw new RangeError('Invalid highWaterMark');
						return c;
					}
					function pr(r) {
						const { size: o } = r;
						return o || (() => 1);
					}
					function mr(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.highWaterMark,
							h = r == null ? void 0 : r.size;
						return {
							highWaterMark: c === void 0 ? void 0 : Ts(c),
							size: h === void 0 ? void 0 : tu(h, `${o} has member 'size' that`)
						};
					}
					function tu(r, o) {
						return le(r, o), (c) => Ts(r(c));
					}
					function nu(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.abort,
							h = r == null ? void 0 : r.close,
							w = r == null ? void 0 : r.start,
							k = r == null ? void 0 : r.type,
							q = r == null ? void 0 : r.write;
						return {
							abort: c === void 0 ? void 0 : ru(c, r, `${o} has member 'abort' that`),
							close: h === void 0 ? void 0 : su(h, r, `${o} has member 'close' that`),
							start: w === void 0 ? void 0 : ou(w, r, `${o} has member 'start' that`),
							write: q === void 0 ? void 0 : iu(q, r, `${o} has member 'write' that`),
							type: k
						};
					}
					function ru(r, o, c) {
						return le(r, c), (h) => x(r, o, [h]);
					}
					function su(r, o, c) {
						return le(r, c), () => x(r, o, []);
					}
					function ou(r, o, c) {
						return le(r, c), (h) => A(r, o, [h]);
					}
					function iu(r, o, c) {
						return le(r, c), (h, w) => x(r, o, [h, w]);
					}
					function Oi(r, o) {
						if (!Ct(r)) throw new TypeError(`${o} is not a WritableStream.`);
					}
					function au(r) {
						if (typeof r != 'object' || r === null) return !1;
						try {
							return typeof r.aborted == 'boolean';
						} catch {
							return !1;
						}
					}
					const lu = typeof AbortController == 'function';
					function cu() {
						if (lu) return new AbortController();
					}
					class bn {
						constructor(o = {}, c = {}) {
							o === void 0 ? (o = null) : ii(o, 'First parameter');
							const h = mr(c, 'Second parameter'),
								w = nu(o, 'First parameter');
							if ((Li(this), w.type !== void 0)) throw new RangeError('Invalid type is specified');
							const q = pr(h),
								P = yn(h, 1);
							vu(this, w, P, q);
						}
						get locked() {
							if (!Ct(this)) throw wr('locked');
							return At(this);
						}
						abort(o = void 0) {
							return Ct(this)
								? At(this)
									? $(new TypeError('Cannot abort a stream that already has a writer'))
									: yr(this, o)
								: $(wr('abort'));
						}
						close() {
							return Ct(this)
								? At(this)
									? $(new TypeError('Cannot close a stream that already has a writer'))
									: ke(this)
									? $(new TypeError('Cannot close an already-closing stream'))
									: Di(this)
								: $(wr('close'));
						}
						getWriter() {
							if (!Ct(this)) throw wr('getWriter');
							return xi(this);
						}
					}
					Object.defineProperties(bn.prototype, {
						abort: { enumerable: !0 },
						close: { enumerable: !0 },
						getWriter: { enumerable: !0 },
						locked: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(bn.prototype, s.toStringTag, {
								value: 'WritableStream',
								configurable: !0
							});
					function xi(r) {
						return new $n(r);
					}
					function uu(r, o, c, h, w = 1, k = () => 1) {
						const q = Object.create(bn.prototype);
						Li(q);
						const P = Object.create(Pt.prototype);
						return Mi(q, P, r, o, c, h, w, k), q;
					}
					function Li(r) {
						(r._state = 'writable'),
							(r._storedError = void 0),
							(r._writer = void 0),
							(r._writableStreamController = void 0),
							(r._writeRequests = new H()),
							(r._inFlightWriteRequest = void 0),
							(r._closeRequest = void 0),
							(r._inFlightCloseRequest = void 0),
							(r._pendingAbortRequest = void 0),
							(r._backpressure = !1);
					}
					function Ct(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_writableStreamController')
							? !1
							: r instanceof bn;
					}
					function At(r) {
						return r._writer !== void 0;
					}
					function yr(r, o) {
						var c;
						if (r._state === 'closed' || r._state === 'errored') return m(void 0);
						(r._writableStreamController._abortReason = o),
							(c = r._writableStreamController._abortController) === null || c === void 0 || c.abort();
						const h = r._state;
						if (h === 'closed' || h === 'errored') return m(void 0);
						if (r._pendingAbortRequest !== void 0) return r._pendingAbortRequest._promise;
						let w = !1;
						h === 'erroring' && ((w = !0), (o = void 0));
						const k = b((q, P) => {
							r._pendingAbortRequest = {
								_promise: void 0,
								_resolve: q,
								_reject: P,
								_reason: o,
								_wasAlreadyErroring: w
							};
						});
						return (r._pendingAbortRequest._promise = k), w || Ws(r, o), k;
					}
					function Di(r) {
						const o = r._state;
						if (o === 'closed' || o === 'errored')
							return $(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));
						const c = b((w, k) => {
								const q = { _resolve: w, _reject: k };
								r._closeRequest = q;
							}),
							h = r._writer;
						return h !== void 0 && r._backpressure && o === 'writable' && Ys(h), Ru(r._writableStreamController), c;
					}
					function du(r) {
						return b((c, h) => {
							const w = { _resolve: c, _reject: h };
							r._writeRequests.push(w);
						});
					}
					function Ns(r, o) {
						if (r._state === 'writable') {
							Ws(r, o);
							return;
						}
						js(r);
					}
					function Ws(r, o) {
						const c = r._writableStreamController;
						(r._state = 'erroring'), (r._storedError = o);
						const h = r._writer;
						h !== void 0 && Ni(h, o), !yu(r) && c._started && js(r);
					}
					function js(r) {
						(r._state = 'errored'), r._writableStreamController[an]();
						const o = r._storedError;
						if (
							(r._writeRequests.forEach((w) => {
								w._reject(o);
							}),
							(r._writeRequests = new H()),
							r._pendingAbortRequest === void 0)
						) {
							br(r);
							return;
						}
						const c = r._pendingAbortRequest;
						if (((r._pendingAbortRequest = void 0), c._wasAlreadyErroring)) {
							c._reject(o), br(r);
							return;
						}
						const h = r._writableStreamController[on](c._reason);
						y(
							h,
							() => {
								c._resolve(), br(r);
							},
							(w) => {
								c._reject(w), br(r);
							}
						);
					}
					function fu(r) {
						r._inFlightWriteRequest._resolve(void 0), (r._inFlightWriteRequest = void 0);
					}
					function hu(r, o) {
						r._inFlightWriteRequest._reject(o), (r._inFlightWriteRequest = void 0), Ns(r, o);
					}
					function pu(r) {
						r._inFlightCloseRequest._resolve(void 0),
							(r._inFlightCloseRequest = void 0),
							r._state === 'erroring' &&
								((r._storedError = void 0),
								r._pendingAbortRequest !== void 0 &&
									(r._pendingAbortRequest._resolve(), (r._pendingAbortRequest = void 0))),
							(r._state = 'closed');
						const c = r._writer;
						c !== void 0 && Qi(c);
					}
					function mu(r, o) {
						r._inFlightCloseRequest._reject(o),
							(r._inFlightCloseRequest = void 0),
							r._pendingAbortRequest !== void 0 &&
								(r._pendingAbortRequest._reject(o), (r._pendingAbortRequest = void 0)),
							Ns(r, o);
					}
					function ke(r) {
						return !(r._closeRequest === void 0 && r._inFlightCloseRequest === void 0);
					}
					function yu(r) {
						return !(r._inFlightWriteRequest === void 0 && r._inFlightCloseRequest === void 0);
					}
					function bu(r) {
						(r._inFlightCloseRequest = r._closeRequest), (r._closeRequest = void 0);
					}
					function $u(r) {
						r._inFlightWriteRequest = r._writeRequests.shift();
					}
					function br(r) {
						r._closeRequest !== void 0 && (r._closeRequest._reject(r._storedError), (r._closeRequest = void 0));
						const o = r._writer;
						o !== void 0 && Qs(o, r._storedError);
					}
					function zs(r, o) {
						const c = r._writer;
						c !== void 0 && o !== r._backpressure && (o ? Pu(c) : Ys(c)), (r._backpressure = o);
					}
					class $n {
						constructor(o) {
							if ((Ne(o, 1, 'WritableStreamDefaultWriter'), Oi(o, 'First parameter'), At(o)))
								throw new TypeError('This stream has already been locked for exclusive writing by another writer');
							(this._ownerWritableStream = o), (o._writer = this);
							const c = o._state;
							if (c === 'writable') !ke(o) && o._backpressure ? Sr(this) : Vi(this), _r(this);
							else if (c === 'erroring') Vs(this, o._storedError), _r(this);
							else if (c === 'closed') Vi(this), Cu(this);
							else {
								const h = o._storedError;
								Vs(this, h), Ui(this, h);
							}
						}
						get closed() {
							return ht(this) ? this._closedPromise : $(pt('closed'));
						}
						get desiredSize() {
							if (!ht(this)) throw pt('desiredSize');
							if (this._ownerWritableStream === void 0) throw gn('desiredSize');
							return Su(this);
						}
						get ready() {
							return ht(this) ? this._readyPromise : $(pt('ready'));
						}
						abort(o = void 0) {
							return ht(this) ? (this._ownerWritableStream === void 0 ? $(gn('abort')) : gu(this, o)) : $(pt('abort'));
						}
						close() {
							if (!ht(this)) return $(pt('close'));
							const o = this._ownerWritableStream;
							return o === void 0
								? $(gn('close'))
								: ke(o)
								? $(new TypeError('Cannot close an already-closing stream'))
								: Bi(this);
						}
						releaseLock() {
							if (!ht(this)) throw pt('releaseLock');
							this._ownerWritableStream !== void 0 && Wi(this);
						}
						write(o = void 0) {
							return ht(this)
								? this._ownerWritableStream === void 0
									? $(gn('write to'))
									: ji(this, o)
								: $(pt('write'));
						}
					}
					Object.defineProperties($n.prototype, {
						abort: { enumerable: !0 },
						close: { enumerable: !0 },
						releaseLock: { enumerable: !0 },
						write: { enumerable: !0 },
						closed: { enumerable: !0 },
						desiredSize: { enumerable: !0 },
						ready: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty($n.prototype, s.toStringTag, {
								value: 'WritableStreamDefaultWriter',
								configurable: !0
							});
					function ht(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_ownerWritableStream') ? !1 : r instanceof $n;
					}
					function gu(r, o) {
						const c = r._ownerWritableStream;
						return yr(c, o);
					}
					function Bi(r) {
						const o = r._ownerWritableStream;
						return Di(o);
					}
					function wu(r) {
						const o = r._ownerWritableStream,
							c = o._state;
						return ke(o) || c === 'closed' ? m(void 0) : c === 'errored' ? $(o._storedError) : Bi(r);
					}
					function _u(r, o) {
						r._closedPromiseState === 'pending' ? Qs(r, o) : Au(r, o);
					}
					function Ni(r, o) {
						r._readyPromiseState === 'pending' ? Yi(r, o) : Iu(r, o);
					}
					function Su(r) {
						const o = r._ownerWritableStream,
							c = o._state;
						return c === 'errored' || c === 'erroring' ? null : c === 'closed' ? 0 : Fi(o._writableStreamController);
					}
					function Wi(r) {
						const o = r._ownerWritableStream,
							c = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
						Ni(r, c), _u(r, c), (o._writer = void 0), (r._ownerWritableStream = void 0);
					}
					function ji(r, o) {
						const c = r._ownerWritableStream,
							h = c._writableStreamController,
							w = Eu(h, o);
						if (c !== r._ownerWritableStream) return $(gn('write to'));
						const k = c._state;
						if (k === 'errored') return $(c._storedError);
						if (ke(c) || k === 'closed')
							return $(new TypeError('The stream is closing or closed and cannot be written to'));
						if (k === 'erroring') return $(c._storedError);
						const q = du(c);
						return ku(h, o, w), q;
					}
					const zi = {};
					class Pt {
						constructor() {
							throw new TypeError('Illegal constructor');
						}
						get abortReason() {
							if (!Ms(this)) throw Us('abortReason');
							return this._abortReason;
						}
						get signal() {
							if (!Ms(this)) throw Us('signal');
							if (this._abortController === void 0)
								throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
							return this._abortController.signal;
						}
						error(o = void 0) {
							if (!Ms(this)) throw Us('error');
							this._controlledWritableStream._state === 'writable' && Hi(this, o);
						}
						[on](o) {
							const c = this._abortAlgorithm(o);
							return $r(this), c;
						}
						[an]() {
							Je(this);
						}
					}
					Object.defineProperties(Pt.prototype, {
						abortReason: { enumerable: !0 },
						signal: { enumerable: !0 },
						error: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(Pt.prototype, s.toStringTag, {
								value: 'WritableStreamDefaultController',
								configurable: !0
							});
					function Ms(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_controlledWritableStream')
							? !1
							: r instanceof Pt;
					}
					function Mi(r, o, c, h, w, k, q, P) {
						(o._controlledWritableStream = r),
							(r._writableStreamController = o),
							(o._queue = void 0),
							(o._queueTotalSize = void 0),
							Je(o),
							(o._abortReason = void 0),
							(o._abortController = cu()),
							(o._started = !1),
							(o._strategySizeAlgorithm = P),
							(o._strategyHWM = q),
							(o._writeAlgorithm = h),
							(o._closeAlgorithm = w),
							(o._abortAlgorithm = k);
						const D = Hs(o);
						zs(r, D);
						const N = c(),
							W = m(N);
						y(
							W,
							() => {
								(o._started = !0), gr(o);
							},
							(j) => {
								(o._started = !0), Ns(r, j);
							}
						);
					}
					function vu(r, o, c, h) {
						const w = Object.create(Pt.prototype);
						let k = () => {},
							q = () => m(void 0),
							P = () => m(void 0),
							D = () => m(void 0);
						o.start !== void 0 && (k = () => o.start(w)),
							o.write !== void 0 && (q = (N) => o.write(N, w)),
							o.close !== void 0 && (P = () => o.close()),
							o.abort !== void 0 && (D = (N) => o.abort(N)),
							Mi(r, w, k, q, P, D, c, h);
					}
					function $r(r) {
						(r._writeAlgorithm = void 0),
							(r._closeAlgorithm = void 0),
							(r._abortAlgorithm = void 0),
							(r._strategySizeAlgorithm = void 0);
					}
					function Ru(r) {
						Ps(r, zi, 0), gr(r);
					}
					function Eu(r, o) {
						try {
							return r._strategySizeAlgorithm(o);
						} catch (c) {
							return Fs(r, c), 1;
						}
					}
					function Fi(r) {
						return r._strategyHWM - r._queueTotalSize;
					}
					function ku(r, o, c) {
						try {
							Ps(r, o, c);
						} catch (w) {
							Fs(r, w);
							return;
						}
						const h = r._controlledWritableStream;
						if (!ke(h) && h._state === 'writable') {
							const w = Hs(r);
							zs(h, w);
						}
						gr(r);
					}
					function gr(r) {
						const o = r._controlledWritableStream;
						if (!r._started || o._inFlightWriteRequest !== void 0) return;
						if (o._state === 'erroring') {
							js(o);
							return;
						}
						if (r._queue.length === 0) return;
						const h = Vc(r);
						h === zi ? Tu(r) : qu(r, h);
					}
					function Fs(r, o) {
						r._controlledWritableStream._state === 'writable' && Hi(r, o);
					}
					function Tu(r) {
						const o = r._controlledWritableStream;
						bu(o), As(r);
						const c = r._closeAlgorithm();
						$r(r),
							y(
								c,
								() => {
									pu(o);
								},
								(h) => {
									mu(o, h);
								}
							);
					}
					function qu(r, o) {
						const c = r._controlledWritableStream;
						$u(c);
						const h = r._writeAlgorithm(o);
						y(
							h,
							() => {
								fu(c);
								const w = c._state;
								if ((As(r), !ke(c) && w === 'writable')) {
									const k = Hs(r);
									zs(c, k);
								}
								gr(r);
							},
							(w) => {
								c._state === 'writable' && $r(r), hu(c, w);
							}
						);
					}
					function Hs(r) {
						return Fi(r) <= 0;
					}
					function Hi(r, o) {
						const c = r._controlledWritableStream;
						$r(r), Ws(c, o);
					}
					function wr(r) {
						return new TypeError(`WritableStream.prototype.${r} can only be used on a WritableStream`);
					}
					function Us(r) {
						return new TypeError(
							`WritableStreamDefaultController.prototype.${r} can only be used on a WritableStreamDefaultController`
						);
					}
					function pt(r) {
						return new TypeError(
							`WritableStreamDefaultWriter.prototype.${r} can only be used on a WritableStreamDefaultWriter`
						);
					}
					function gn(r) {
						return new TypeError('Cannot ' + r + ' a stream using a released writer');
					}
					function _r(r) {
						r._closedPromise = b((o, c) => {
							(r._closedPromise_resolve = o), (r._closedPromise_reject = c), (r._closedPromiseState = 'pending');
						});
					}
					function Ui(r, o) {
						_r(r), Qs(r, o);
					}
					function Cu(r) {
						_r(r), Qi(r);
					}
					function Qs(r, o) {
						r._closedPromise_reject !== void 0 &&
							(C(r._closedPromise),
							r._closedPromise_reject(o),
							(r._closedPromise_resolve = void 0),
							(r._closedPromise_reject = void 0),
							(r._closedPromiseState = 'rejected'));
					}
					function Au(r, o) {
						Ui(r, o);
					}
					function Qi(r) {
						r._closedPromise_resolve !== void 0 &&
							(r._closedPromise_resolve(void 0),
							(r._closedPromise_resolve = void 0),
							(r._closedPromise_reject = void 0),
							(r._closedPromiseState = 'resolved'));
					}
					function Sr(r) {
						(r._readyPromise = b((o, c) => {
							(r._readyPromise_resolve = o), (r._readyPromise_reject = c);
						})),
							(r._readyPromiseState = 'pending');
					}
					function Vs(r, o) {
						Sr(r), Yi(r, o);
					}
					function Vi(r) {
						Sr(r), Ys(r);
					}
					function Yi(r, o) {
						r._readyPromise_reject !== void 0 &&
							(C(r._readyPromise),
							r._readyPromise_reject(o),
							(r._readyPromise_resolve = void 0),
							(r._readyPromise_reject = void 0),
							(r._readyPromiseState = 'rejected'));
					}
					function Pu(r) {
						Sr(r);
					}
					function Iu(r, o) {
						Vs(r, o);
					}
					function Ys(r) {
						r._readyPromise_resolve !== void 0 &&
							(r._readyPromise_resolve(void 0),
							(r._readyPromise_resolve = void 0),
							(r._readyPromise_reject = void 0),
							(r._readyPromiseState = 'fulfilled'));
					}
					const Ki = typeof DOMException < 'u' ? DOMException : void 0;
					function Ou(r) {
						if (!(typeof r == 'function' || typeof r == 'object')) return !1;
						try {
							return new r(), !0;
						} catch {
							return !1;
						}
					}
					function xu() {
						const r = function (c, h) {
							(this.message = c || ''),
								(this.name = h || 'Error'),
								Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
						};
						return (
							(r.prototype = Object.create(Error.prototype)),
							Object.defineProperty(r.prototype, 'constructor', {
								value: r,
								writable: !0,
								configurable: !0
							}),
							r
						);
					}
					const Lu = Ou(Ki) ? Ki : xu();
					function Gi(r, o, c, h, w, k) {
						const q = Tt(r),
							P = xi(o);
						r._disturbed = !0;
						let D = !1,
							N = m(void 0);
						return b((W, j) => {
							let V;
							if (k !== void 0) {
								if (
									((V = () => {
										const O = new Lu('Aborted', 'AbortError'),
											B = [];
										h || B.push(() => (o._state === 'writable' ? yr(o, O) : m(void 0))),
											w || B.push(() => (r._state === 'readable' ? _e(r, O) : m(void 0))),
											ce(() => Promise.all(B.map((M) => M())), !0, O);
									}),
									k.aborted)
								) {
									V();
									return;
								}
								k.addEventListener('abort', V);
							}
							function Se() {
								return b((O, B) => {
									function M(fe) {
										fe ? O() : R(xt(), M, B);
									}
									M(!1);
								});
							}
							function xt() {
								return D
									? m(!0)
									: R(P._readyPromise, () =>
											b((O, B) => {
												un(q, {
													_chunkSteps: (M) => {
														(N = R(ji(P, M), void 0, i)), O(!1);
													},
													_closeSteps: () => O(!0),
													_errorSteps: B
												});
											})
									  );
							}
							if (
								(We(r, q._closedPromise, (O) => {
									h ? ye(!0, O) : ce(() => yr(o, O), !0, O);
								}),
								We(o, P._closedPromise, (O) => {
									w ? ye(!0, O) : ce(() => _e(r, O), !0, O);
								}),
								ie(r, q._closedPromise, () => {
									c ? ye() : ce(() => wu(P));
								}),
								ke(o) || o._state === 'closed')
							) {
								const O = new TypeError('the destination writable stream closed before all data could be piped to it');
								w ? ye(!0, O) : ce(() => _e(r, O), !0, O);
							}
							C(Se());
							function rt() {
								const O = N;
								return R(N, () => (O !== N ? rt() : void 0));
							}
							function We(O, B, M) {
								O._state === 'errored' ? M(O._storedError) : T(B, M);
							}
							function ie(O, B, M) {
								O._state === 'closed' ? M() : S(B, M);
							}
							function ce(O, B, M) {
								if (D) return;
								(D = !0), o._state === 'writable' && !ke(o) ? S(rt(), fe) : fe();
								function fe() {
									y(
										O(),
										() => je(B, M),
										(Lt) => je(!0, Lt)
									);
								}
							}
							function ye(O, B) {
								D || ((D = !0), o._state === 'writable' && !ke(o) ? S(rt(), () => je(O, B)) : je(O, B));
							}
							function je(O, B) {
								Wi(P), ee(q), k !== void 0 && k.removeEventListener('abort', V), O ? j(B) : W(void 0);
							}
						});
					}
					class It {
						constructor() {
							throw new TypeError('Illegal constructor');
						}
						get desiredSize() {
							if (!vr(this)) throw kr('desiredSize');
							return Ks(this);
						}
						close() {
							if (!vr(this)) throw kr('close');
							if (!Ot(this)) throw new TypeError('The stream is not in a state that permits close');
							_n(this);
						}
						enqueue(o = void 0) {
							if (!vr(this)) throw kr('enqueue');
							if (!Ot(this)) throw new TypeError('The stream is not in a state that permits enqueue');
							return Er(this, o);
						}
						error(o = void 0) {
							if (!vr(this)) throw kr('error');
							Xe(this, o);
						}
						[Et](o) {
							Je(this);
							const c = this._cancelAlgorithm(o);
							return Rr(this), c;
						}
						[kt](o) {
							const c = this._controlledReadableStream;
							if (this._queue.length > 0) {
								const h = As(this);
								this._closeRequested && this._queue.length === 0 ? (Rr(this), Sn(c)) : wn(this), o._chunkSteps(h);
							} else ci(c, o), wn(this);
						}
					}
					Object.defineProperties(It.prototype, {
						close: { enumerable: !0 },
						enqueue: { enumerable: !0 },
						error: { enumerable: !0 },
						desiredSize: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(It.prototype, s.toStringTag, {
								value: 'ReadableStreamDefaultController',
								configurable: !0
							});
					function vr(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_controlledReadableStream')
							? !1
							: r instanceof It;
					}
					function wn(r) {
						if (!Zi(r)) return;
						if (r._pulling) {
							r._pullAgain = !0;
							return;
						}
						r._pulling = !0;
						const c = r._pullAlgorithm();
						y(
							c,
							() => {
								(r._pulling = !1), r._pullAgain && ((r._pullAgain = !1), wn(r));
							},
							(h) => {
								Xe(r, h);
							}
						);
					}
					function Zi(r) {
						const o = r._controlledReadableStream;
						return !Ot(r) || !r._started ? !1 : !!((nt(o) && sr(o) > 0) || Ks(r) > 0);
					}
					function Rr(r) {
						(r._pullAlgorithm = void 0), (r._cancelAlgorithm = void 0), (r._strategySizeAlgorithm = void 0);
					}
					function _n(r) {
						if (!Ot(r)) return;
						const o = r._controlledReadableStream;
						(r._closeRequested = !0), r._queue.length === 0 && (Rr(r), Sn(o));
					}
					function Er(r, o) {
						if (!Ot(r)) return;
						const c = r._controlledReadableStream;
						if (nt(c) && sr(c) > 0) Cs(c, o, !1);
						else {
							let h;
							try {
								h = r._strategySizeAlgorithm(o);
							} catch (w) {
								throw (Xe(r, w), w);
							}
							try {
								Ps(r, o, h);
							} catch (w) {
								throw (Xe(r, w), w);
							}
						}
						wn(r);
					}
					function Xe(r, o) {
						const c = r._controlledReadableStream;
						c._state === 'readable' && (Je(r), Rr(r), ta(c, o));
					}
					function Ks(r) {
						const o = r._controlledReadableStream._state;
						return o === 'errored' ? null : o === 'closed' ? 0 : r._strategyHWM - r._queueTotalSize;
					}
					function Du(r) {
						return !Zi(r);
					}
					function Ot(r) {
						const o = r._controlledReadableStream._state;
						return !r._closeRequested && o === 'readable';
					}
					function Ji(r, o, c, h, w, k, q) {
						(o._controlledReadableStream = r),
							(o._queue = void 0),
							(o._queueTotalSize = void 0),
							Je(o),
							(o._started = !1),
							(o._closeRequested = !1),
							(o._pullAgain = !1),
							(o._pulling = !1),
							(o._strategySizeAlgorithm = q),
							(o._strategyHWM = k),
							(o._pullAlgorithm = h),
							(o._cancelAlgorithm = w),
							(r._readableStreamController = o);
						const P = c();
						y(
							m(P),
							() => {
								(o._started = !0), wn(o);
							},
							(D) => {
								Xe(o, D);
							}
						);
					}
					function Bu(r, o, c, h) {
						const w = Object.create(It.prototype);
						let k = () => {},
							q = () => m(void 0),
							P = () => m(void 0);
						o.start !== void 0 && (k = () => o.start(w)),
							o.pull !== void 0 && (q = () => o.pull(w)),
							o.cancel !== void 0 && (P = (D) => o.cancel(D)),
							Ji(r, w, k, q, P, c, h);
					}
					function kr(r) {
						return new TypeError(
							`ReadableStreamDefaultController.prototype.${r} can only be used on a ReadableStreamDefaultController`
						);
					}
					function Nu(r, o) {
						return ut(r._readableStreamController) ? ju(r) : Wu(r);
					}
					function Wu(r, o) {
						const c = Tt(r);
						let h = !1,
							w = !1,
							k = !1,
							q = !1,
							P,
							D,
							N,
							W,
							j;
						const V = b((ie) => {
							j = ie;
						});
						function Se() {
							return h
								? ((w = !0), m(void 0))
								: ((h = !0),
								  un(c, {
										_chunkSteps: (ce) => {
											I(() => {
												w = !1;
												const ye = ce,
													je = ce;
												k || Er(N._readableStreamController, ye),
													q || Er(W._readableStreamController, je),
													(h = !1),
													w && Se();
											});
										},
										_closeSteps: () => {
											(h = !1),
												k || _n(N._readableStreamController),
												q || _n(W._readableStreamController),
												(!k || !q) && j(void 0);
										},
										_errorSteps: () => {
											h = !1;
										}
								  }),
								  m(void 0));
						}
						function xt(ie) {
							if (((k = !0), (P = ie), q)) {
								const ce = dn([P, D]),
									ye = _e(r, ce);
								j(ye);
							}
							return V;
						}
						function rt(ie) {
							if (((q = !0), (D = ie), k)) {
								const ce = dn([P, D]),
									ye = _e(r, ce);
								j(ye);
							}
							return V;
						}
						function We() {}
						return (
							(N = Gs(We, Se, xt)),
							(W = Gs(We, Se, rt)),
							T(c._closedPromise, (ie) => {
								Xe(N._readableStreamController, ie), Xe(W._readableStreamController, ie), (!k || !q) && j(void 0);
							}),
							[N, W]
						);
					}
					function ju(r) {
						let o = Tt(r),
							c = !1,
							h = !1,
							w = !1,
							k = !1,
							q = !1,
							P,
							D,
							N,
							W,
							j;
						const V = b((O) => {
							j = O;
						});
						function Se(O) {
							T(O._closedPromise, (B) => {
								O === o &&
									(we(N._readableStreamController, B), we(W._readableStreamController, B), (!k || !q) && j(void 0));
							});
						}
						function xt() {
							ft(o) && (ee(o), (o = Tt(r)), Se(o)),
								un(o, {
									_chunkSteps: (B) => {
										I(() => {
											(h = !1), (w = !1);
											const M = B;
											let fe = B;
											if (!k && !q)
												try {
													fe = gi(B);
												} catch (Lt) {
													we(N._readableStreamController, Lt), we(W._readableStreamController, Lt), j(_e(r, Lt));
													return;
												}
											k || ur(N._readableStreamController, M),
												q || ur(W._readableStreamController, fe),
												(c = !1),
												h ? We() : w && ie();
										});
									},
									_closeSteps: () => {
										(c = !1),
											k || hn(N._readableStreamController),
											q || hn(W._readableStreamController),
											N._readableStreamController._pendingPullIntos.length > 0 && dr(N._readableStreamController, 0),
											W._readableStreamController._pendingPullIntos.length > 0 && dr(W._readableStreamController, 0),
											(!k || !q) && j(void 0);
									},
									_errorSteps: () => {
										c = !1;
									}
								});
						}
						function rt(O, B) {
							Ze(o) && (ee(o), (o = Ci(r)), Se(o));
							const M = B ? W : N,
								fe = B ? N : W;
							Ii(o, O, {
								_chunkSteps: (Dt) => {
									I(() => {
										(h = !1), (w = !1);
										const Bt = B ? q : k;
										if (B ? k : q) Bt || fr(M._readableStreamController, Dt);
										else {
											let pa;
											try {
												pa = gi(Dt);
											} catch (Js) {
												we(M._readableStreamController, Js), we(fe._readableStreamController, Js), j(_e(r, Js));
												return;
											}
											Bt || fr(M._readableStreamController, Dt), ur(fe._readableStreamController, pa);
										}
										(c = !1), h ? We() : w && ie();
									});
								},
								_closeSteps: (Dt) => {
									c = !1;
									const Bt = B ? q : k,
										Lr = B ? k : q;
									Bt || hn(M._readableStreamController),
										Lr || hn(fe._readableStreamController),
										Dt !== void 0 &&
											(Bt || fr(M._readableStreamController, Dt),
											!Lr &&
												fe._readableStreamController._pendingPullIntos.length > 0 &&
												dr(fe._readableStreamController, 0)),
										(!Bt || !Lr) && j(void 0);
								},
								_errorSteps: () => {
									c = !1;
								}
							});
						}
						function We() {
							if (c) return (h = !0), m(void 0);
							c = !0;
							const O = Ls(N._readableStreamController);
							return O === null ? xt() : rt(O._view, !1), m(void 0);
						}
						function ie() {
							if (c) return (w = !0), m(void 0);
							c = !0;
							const O = Ls(W._readableStreamController);
							return O === null ? xt() : rt(O._view, !0), m(void 0);
						}
						function ce(O) {
							if (((k = !0), (P = O), q)) {
								const B = dn([P, D]),
									M = _e(r, B);
								j(M);
							}
							return V;
						}
						function ye(O) {
							if (((q = !0), (D = O), k)) {
								const B = dn([P, D]),
									M = _e(r, B);
								j(M);
							}
							return V;
						}
						function je() {}
						return (N = ea(je, We, ce)), (W = ea(je, ie, ye)), Se(o), [N, W];
					}
					function zu(r, o) {
						Q(r, o);
						const c = r,
							h = c == null ? void 0 : c.autoAllocateChunkSize,
							w = c == null ? void 0 : c.cancel,
							k = c == null ? void 0 : c.pull,
							q = c == null ? void 0 : c.start,
							P = c == null ? void 0 : c.type;
						return {
							autoAllocateChunkSize: h === void 0 ? void 0 : li(h, `${o} has member 'autoAllocateChunkSize' that`),
							cancel: w === void 0 ? void 0 : Mu(w, c, `${o} has member 'cancel' that`),
							pull: k === void 0 ? void 0 : Fu(k, c, `${o} has member 'pull' that`),
							start: q === void 0 ? void 0 : Hu(q, c, `${o} has member 'start' that`),
							type: P === void 0 ? void 0 : Uu(P, `${o} has member 'type' that`)
						};
					}
					function Mu(r, o, c) {
						return le(r, c), (h) => x(r, o, [h]);
					}
					function Fu(r, o, c) {
						return le(r, c), (h) => x(r, o, [h]);
					}
					function Hu(r, o, c) {
						return le(r, c), (h) => A(r, o, [h]);
					}
					function Uu(r, o) {
						if (((r = `${r}`), r !== 'bytes'))
							throw new TypeError(`${o} '${r}' is not a valid enumeration value for ReadableStreamType`);
						return r;
					}
					function Qu(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.mode;
						return { mode: c === void 0 ? void 0 : Vu(c, `${o} has member 'mode' that`) };
					}
					function Vu(r, o) {
						if (((r = `${r}`), r !== 'byob'))
							throw new TypeError(`${o} '${r}' is not a valid enumeration value for ReadableStreamReaderMode`);
						return r;
					}
					function Yu(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.preventCancel;
						return { preventCancel: Boolean(c) };
					}
					function Xi(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.preventAbort,
							h = r == null ? void 0 : r.preventCancel,
							w = r == null ? void 0 : r.preventClose,
							k = r == null ? void 0 : r.signal;
						return (
							k !== void 0 && Ku(k, `${o} has member 'signal' that`),
							{
								preventAbort: Boolean(c),
								preventCancel: Boolean(h),
								preventClose: Boolean(w),
								signal: k
							}
						);
					}
					function Ku(r, o) {
						if (!au(r)) throw new TypeError(`${o} is not an AbortSignal.`);
					}
					function Gu(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.readable;
						ks(c, 'readable', 'ReadableWritablePair'), qs(c, `${o} has member 'readable' that`);
						const h = r == null ? void 0 : r.writable;
						return (
							ks(h, 'writable', 'ReadableWritablePair'),
							Oi(h, `${o} has member 'writable' that`),
							{ readable: c, writable: h }
						);
					}
					class et {
						constructor(o = {}, c = {}) {
							o === void 0 ? (o = null) : ii(o, 'First parameter');
							const h = mr(c, 'Second parameter'),
								w = zu(o, 'First parameter');
							if ((Zs(this), w.type === 'bytes')) {
								if (h.size !== void 0)
									throw new RangeError('The strategy for a byte stream cannot have a size function');
								const k = yn(h, 0);
								Jc(this, w, k);
							} else {
								const k = pr(h),
									q = yn(h, 1);
								Bu(this, w, q, k);
							}
						}
						get locked() {
							if (!tt(this)) throw mt('locked');
							return nt(this);
						}
						cancel(o = void 0) {
							return tt(this)
								? nt(this)
									? $(new TypeError('Cannot cancel a stream that already has a reader'))
									: _e(this, o)
								: $(mt('cancel'));
						}
						getReader(o = void 0) {
							if (!tt(this)) throw mt('getReader');
							return Qu(o, 'First parameter').mode === void 0 ? Tt(this) : Ci(this);
						}
						pipeThrough(o, c = {}) {
							if (!tt(this)) throw mt('pipeThrough');
							Ne(o, 1, 'pipeThrough');
							const h = Gu(o, 'First parameter'),
								w = Xi(c, 'Second parameter');
							if (nt(this))
								throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
							if (At(h.writable))
								throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
							const k = Gi(this, h.writable, w.preventClose, w.preventAbort, w.preventCancel, w.signal);
							return C(k), h.readable;
						}
						pipeTo(o, c = {}) {
							if (!tt(this)) return $(mt('pipeTo'));
							if (o === void 0) return $("Parameter 1 is required in 'pipeTo'.");
							if (!Ct(o))
								return $(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
							let h;
							try {
								h = Xi(c, 'Second parameter');
							} catch (w) {
								return $(w);
							}
							return nt(this)
								? $(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'))
								: At(o)
								? $(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'))
								: Gi(this, o, h.preventClose, h.preventAbort, h.preventCancel, h.signal);
						}
						tee() {
							if (!tt(this)) throw mt('tee');
							const o = Nu(this);
							return dn(o);
						}
						values(o = void 0) {
							if (!tt(this)) throw mt('values');
							const c = Yu(o, 'First parameter');
							return Uc(this, c.preventCancel);
						}
					}
					Object.defineProperties(et.prototype, {
						cancel: { enumerable: !0 },
						getReader: { enumerable: !0 },
						pipeThrough: { enumerable: !0 },
						pipeTo: { enumerable: !0 },
						tee: { enumerable: !0 },
						values: { enumerable: !0 },
						locked: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(et.prototype, s.toStringTag, {
								value: 'ReadableStream',
								configurable: !0
							}),
						typeof s.asyncIterator == 'symbol' &&
							Object.defineProperty(et.prototype, s.asyncIterator, {
								value: et.prototype.values,
								writable: !0,
								configurable: !0
							});
					function Gs(r, o, c, h = 1, w = () => 1) {
						const k = Object.create(et.prototype);
						Zs(k);
						const q = Object.create(It.prototype);
						return Ji(k, q, r, o, c, h, w), k;
					}
					function ea(r, o, c) {
						const h = Object.create(et.prototype);
						Zs(h);
						const w = Object.create(qt.prototype);
						return qi(h, w, r, o, c, 0, void 0), h;
					}
					function Zs(r) {
						(r._state = 'readable'), (r._reader = void 0), (r._storedError = void 0), (r._disturbed = !1);
					}
					function tt(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_readableStreamController')
							? !1
							: r instanceof et;
					}
					function nt(r) {
						return r._reader !== void 0;
					}
					function _e(r, o) {
						if (((r._disturbed = !0), r._state === 'closed')) return m(void 0);
						if (r._state === 'errored') return $(r._storedError);
						Sn(r);
						const c = r._reader;
						c !== void 0 &&
							ft(c) &&
							(c._readIntoRequests.forEach((w) => {
								w._closeSteps(void 0);
							}),
							(c._readIntoRequests = new H()));
						const h = r._readableStreamController[Et](o);
						return E(h, i);
					}
					function Sn(r) {
						r._state = 'closed';
						const o = r._reader;
						o !== void 0 &&
							(sn(o),
							Ze(o) &&
								(o._readRequests.forEach((c) => {
									c._closeSteps();
								}),
								(o._readRequests = new H())));
					}
					function ta(r, o) {
						(r._state = 'errored'), (r._storedError = o);
						const c = r._reader;
						c !== void 0 &&
							(ct(c, o),
							Ze(c)
								? (c._readRequests.forEach((h) => {
										h._errorSteps(o);
								  }),
								  (c._readRequests = new H()))
								: (c._readIntoRequests.forEach((h) => {
										h._errorSteps(o);
								  }),
								  (c._readIntoRequests = new H())));
					}
					function mt(r) {
						return new TypeError(`ReadableStream.prototype.${r} can only be used on a ReadableStream`);
					}
					function na(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.highWaterMark;
						return ks(c, 'highWaterMark', 'QueuingStrategyInit'), { highWaterMark: Ts(c) };
					}
					const ra = (r) => r.byteLength;
					try {
						Object.defineProperty(ra, 'name', { value: 'size', configurable: !0 });
					} catch {}
					class Tr {
						constructor(o) {
							Ne(o, 1, 'ByteLengthQueuingStrategy'),
								(o = na(o, 'First parameter')),
								(this._byteLengthQueuingStrategyHighWaterMark = o.highWaterMark);
						}
						get highWaterMark() {
							if (!oa(this)) throw sa('highWaterMark');
							return this._byteLengthQueuingStrategyHighWaterMark;
						}
						get size() {
							if (!oa(this)) throw sa('size');
							return ra;
						}
					}
					Object.defineProperties(Tr.prototype, {
						highWaterMark: { enumerable: !0 },
						size: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(Tr.prototype, s.toStringTag, {
								value: 'ByteLengthQueuingStrategy',
								configurable: !0
							});
					function sa(r) {
						return new TypeError(
							`ByteLengthQueuingStrategy.prototype.${r} can only be used on a ByteLengthQueuingStrategy`
						);
					}
					function oa(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_byteLengthQueuingStrategyHighWaterMark')
							? !1
							: r instanceof Tr;
					}
					const ia = () => 1;
					try {
						Object.defineProperty(ia, 'name', { value: 'size', configurable: !0 });
					} catch {}
					class qr {
						constructor(o) {
							Ne(o, 1, 'CountQueuingStrategy'),
								(o = na(o, 'First parameter')),
								(this._countQueuingStrategyHighWaterMark = o.highWaterMark);
						}
						get highWaterMark() {
							if (!la(this)) throw aa('highWaterMark');
							return this._countQueuingStrategyHighWaterMark;
						}
						get size() {
							if (!la(this)) throw aa('size');
							return ia;
						}
					}
					Object.defineProperties(qr.prototype, {
						highWaterMark: { enumerable: !0 },
						size: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(qr.prototype, s.toStringTag, {
								value: 'CountQueuingStrategy',
								configurable: !0
							});
					function aa(r) {
						return new TypeError(`CountQueuingStrategy.prototype.${r} can only be used on a CountQueuingStrategy`);
					}
					function la(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_countQueuingStrategyHighWaterMark')
							? !1
							: r instanceof qr;
					}
					function Zu(r, o) {
						Q(r, o);
						const c = r == null ? void 0 : r.flush,
							h = r == null ? void 0 : r.readableType,
							w = r == null ? void 0 : r.start,
							k = r == null ? void 0 : r.transform,
							q = r == null ? void 0 : r.writableType;
						return {
							flush: c === void 0 ? void 0 : Ju(c, r, `${o} has member 'flush' that`),
							readableType: h,
							start: w === void 0 ? void 0 : Xu(w, r, `${o} has member 'start' that`),
							transform: k === void 0 ? void 0 : ed(k, r, `${o} has member 'transform' that`),
							writableType: q
						};
					}
					function Ju(r, o, c) {
						return le(r, c), (h) => x(r, o, [h]);
					}
					function Xu(r, o, c) {
						return le(r, c), (h) => A(r, o, [h]);
					}
					function ed(r, o, c) {
						return le(r, c), (h, w) => x(r, o, [h, w]);
					}
					class Cr {
						constructor(o = {}, c = {}, h = {}) {
							o === void 0 && (o = null);
							const w = mr(c, 'Second parameter'),
								k = mr(h, 'Third parameter'),
								q = Zu(o, 'First parameter');
							if (q.readableType !== void 0) throw new RangeError('Invalid readableType specified');
							if (q.writableType !== void 0) throw new RangeError('Invalid writableType specified');
							const P = yn(k, 0),
								D = pr(k),
								N = yn(w, 1),
								W = pr(w);
							let j;
							const V = b((Se) => {
								j = Se;
							});
							td(this, V, N, W, P, D),
								rd(this, q),
								q.start !== void 0 ? j(q.start(this._transformStreamController)) : j(void 0);
						}
						get readable() {
							if (!ca(this)) throw ha('readable');
							return this._readable;
						}
						get writable() {
							if (!ca(this)) throw ha('writable');
							return this._writable;
						}
					}
					Object.defineProperties(Cr.prototype, {
						readable: { enumerable: !0 },
						writable: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(Cr.prototype, s.toStringTag, {
								value: 'TransformStream',
								configurable: !0
							});
					function td(r, o, c, h, w, k) {
						function q() {
							return o;
						}
						function P(V) {
							return id(r, V);
						}
						function D(V) {
							return ad(r, V);
						}
						function N() {
							return ld(r);
						}
						r._writable = uu(q, P, N, D, c, h);
						function W() {
							return cd(r);
						}
						function j(V) {
							return Pr(r, V), m(void 0);
						}
						(r._readable = Gs(q, W, j, w, k)),
							(r._backpressure = void 0),
							(r._backpressureChangePromise = void 0),
							(r._backpressureChangePromise_resolve = void 0),
							Ir(r, !0),
							(r._transformStreamController = void 0);
					}
					function ca(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_transformStreamController')
							? !1
							: r instanceof Cr;
					}
					function Ar(r, o) {
						Xe(r._readable._readableStreamController, o), Pr(r, o);
					}
					function Pr(r, o) {
						ua(r._transformStreamController),
							Fs(r._writable._writableStreamController, o),
							r._backpressure && Ir(r, !1);
					}
					function Ir(r, o) {
						r._backpressureChangePromise !== void 0 && r._backpressureChangePromise_resolve(),
							(r._backpressureChangePromise = b((c) => {
								r._backpressureChangePromise_resolve = c;
							})),
							(r._backpressure = o);
					}
					class vn {
						constructor() {
							throw new TypeError('Illegal constructor');
						}
						get desiredSize() {
							if (!Or(this)) throw xr('desiredSize');
							const o = this._controlledTransformStream._readable._readableStreamController;
							return Ks(o);
						}
						enqueue(o = void 0) {
							if (!Or(this)) throw xr('enqueue');
							da(this, o);
						}
						error(o = void 0) {
							if (!Or(this)) throw xr('error');
							sd(this, o);
						}
						terminate() {
							if (!Or(this)) throw xr('terminate');
							od(this);
						}
					}
					Object.defineProperties(vn.prototype, {
						enqueue: { enumerable: !0 },
						error: { enumerable: !0 },
						terminate: { enumerable: !0 },
						desiredSize: { enumerable: !0 }
					}),
						typeof s.toStringTag == 'symbol' &&
							Object.defineProperty(vn.prototype, s.toStringTag, {
								value: 'TransformStreamDefaultController',
								configurable: !0
							});
					function Or(r) {
						return !u(r) || !Object.prototype.hasOwnProperty.call(r, '_controlledTransformStream')
							? !1
							: r instanceof vn;
					}
					function nd(r, o, c, h) {
						(o._controlledTransformStream = r),
							(r._transformStreamController = o),
							(o._transformAlgorithm = c),
							(o._flushAlgorithm = h);
					}
					function rd(r, o) {
						const c = Object.create(vn.prototype);
						let h = (k) => {
								try {
									return da(c, k), m(void 0);
								} catch (q) {
									return $(q);
								}
							},
							w = () => m(void 0);
						o.transform !== void 0 && (h = (k) => o.transform(k, c)),
							o.flush !== void 0 && (w = () => o.flush(c)),
							nd(r, c, h, w);
					}
					function ua(r) {
						(r._transformAlgorithm = void 0), (r._flushAlgorithm = void 0);
					}
					function da(r, o) {
						const c = r._controlledTransformStream,
							h = c._readable._readableStreamController;
						if (!Ot(h)) throw new TypeError('Readable side is not in a state that permits enqueue');
						try {
							Er(h, o);
						} catch (k) {
							throw (Pr(c, k), c._readable._storedError);
						}
						Du(h) !== c._backpressure && Ir(c, !0);
					}
					function sd(r, o) {
						Ar(r._controlledTransformStream, o);
					}
					function fa(r, o) {
						const c = r._transformAlgorithm(o);
						return E(c, void 0, (h) => {
							throw (Ar(r._controlledTransformStream, h), h);
						});
					}
					function od(r) {
						const o = r._controlledTransformStream,
							c = o._readable._readableStreamController;
						_n(c);
						const h = new TypeError('TransformStream terminated');
						Pr(o, h);
					}
					function id(r, o) {
						const c = r._transformStreamController;
						if (r._backpressure) {
							const h = r._backpressureChangePromise;
							return E(h, () => {
								const w = r._writable;
								if (w._state === 'erroring') throw w._storedError;
								return fa(c, o);
							});
						}
						return fa(c, o);
					}
					function ad(r, o) {
						return Ar(r, o), m(void 0);
					}
					function ld(r) {
						const o = r._readable,
							c = r._transformStreamController,
							h = c._flushAlgorithm();
						return (
							ua(c),
							E(
								h,
								() => {
									if (o._state === 'errored') throw o._storedError;
									_n(o._readableStreamController);
								},
								(w) => {
									throw (Ar(r, w), o._storedError);
								}
							)
						);
					}
					function cd(r) {
						return Ir(r, !1), r._backpressureChangePromise;
					}
					function xr(r) {
						return new TypeError(
							`TransformStreamDefaultController.prototype.${r} can only be used on a TransformStreamDefaultController`
						);
					}
					function ha(r) {
						return new TypeError(`TransformStream.prototype.${r} can only be used on a TransformStream`);
					}
					(n.ByteLengthQueuingStrategy = Tr),
						(n.CountQueuingStrategy = qr),
						(n.ReadableByteStreamController = qt),
						(n.ReadableStream = et),
						(n.ReadableStreamBYOBReader = mn),
						(n.ReadableStreamBYOBRequest = fn),
						(n.ReadableStreamDefaultController = It),
						(n.ReadableStreamDefaultReader = cn),
						(n.TransformStream = Cr),
						(n.TransformStreamDefaultController = vn),
						(n.WritableStream = bn),
						(n.WritableStreamDefaultController = Pt),
						(n.WritableStreamDefaultWriter = $n),
						Object.defineProperty(n, '__esModule', { value: !0 });
				});
			})(Br, Br.exports)),
		Br.exports
	);
}
const up = 65536;
if (!globalThis.ReadableStream)
	try {
		const e = require('node:process'),
			{ emitWarning: t } = e;
		try {
			(e.emitWarning = () => {}), Object.assign(globalThis, require('node:stream/web')), (e.emitWarning = t);
		} catch (n) {
			throw ((e.emitWarning = t), n);
		}
	} catch {
		Object.assign(globalThis, cp());
	}
try {
	const { Blob: e } = require('buffer');
	e &&
		!e.prototype.stream &&
		(e.prototype.stream = function (n) {
			let s = 0;
			const i = this;
			return new ReadableStream({
				type: 'bytes',
				async pull(a) {
					const u = await i.slice(s, Math.min(i.size, s + up)).arrayBuffer();
					(s += u.byteLength), a.enqueue(new Uint8Array(u)), s === i.size && a.close();
				}
			});
		});
} catch {}
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ const Ya = 65536;
async function* ao(e, t = !0) {
	for (const n of e)
		if ('stream' in n) yield* n.stream();
		else if (ArrayBuffer.isView(n))
			if (t) {
				let s = n.byteOffset;
				const i = n.byteOffset + n.byteLength;
				for (; s !== i; ) {
					const a = Math.min(i - s, Ya),
						l = n.buffer.slice(s, s + a);
					(s += l.byteLength), yield new Uint8Array(l);
				}
			} else yield n;
		else {
			let s = 0,
				i = n;
			for (; s !== i.size; ) {
				const l = await i.slice(s, Math.min(i.size, s + Ya)).arrayBuffer();
				(s += l.byteLength), yield new Uint8Array(l);
			}
		}
}
var Me, Un, Qt, ls, Gt;
const Tc =
	((Gt = class {
		constructor(t = [], n = {}) {
			st(this, Me, []);
			st(this, Un, '');
			st(this, Qt, 0);
			st(this, ls, 'transparent');
			if (typeof t != 'object' || t === null)
				throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
			if (typeof t[Symbol.iterator] != 'function')
				throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
			if (typeof n != 'object' && typeof n != 'function')
				throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
			n === null && (n = {});
			const s = new TextEncoder();
			for (const a of t) {
				let l;
				ArrayBuffer.isView(a)
					? (l = new Uint8Array(a.buffer.slice(a.byteOffset, a.byteOffset + a.byteLength)))
					: a instanceof ArrayBuffer
					? (l = new Uint8Array(a.slice(0)))
					: a instanceof Gt
					? (l = a)
					: (l = s.encode(`${a}`)),
					Te(this, Qt, Z(this, Qt) + (ArrayBuffer.isView(l) ? l.byteLength : l.size)),
					Z(this, Me).push(l);
			}
			Te(this, ls, `${n.endings === void 0 ? 'transparent' : n.endings}`);
			const i = n.type === void 0 ? '' : String(n.type);
			Te(this, Un, /^[\x20-\x7E]*$/.test(i) ? i : '');
		}
		get size() {
			return Z(this, Qt);
		}
		get type() {
			return Z(this, Un);
		}
		async text() {
			const t = new TextDecoder();
			let n = '';
			for await (const s of ao(Z(this, Me), !1)) n += t.decode(s, { stream: !0 });
			return (n += t.decode()), n;
		}
		async arrayBuffer() {
			const t = new Uint8Array(this.size);
			let n = 0;
			for await (const s of ao(Z(this, Me), !1)) t.set(s, n), (n += s.length);
			return t.buffer;
		}
		stream() {
			const t = ao(Z(this, Me), !0);
			return new globalThis.ReadableStream({
				type: 'bytes',
				async pull(n) {
					const s = await t.next();
					s.done ? n.close() : n.enqueue(s.value);
				},
				async cancel() {
					await t.return();
				}
			});
		}
		slice(t = 0, n = this.size, s = '') {
			const { size: i } = this;
			let a = t < 0 ? Math.max(i + t, 0) : Math.min(t, i),
				l = n < 0 ? Math.max(i + n, 0) : Math.min(n, i);
			const u = Math.max(l - a, 0),
				d = Z(this, Me),
				f = [];
			let p = 0;
			for (const g of d) {
				if (p >= u) break;
				const b = ArrayBuffer.isView(g) ? g.byteLength : g.size;
				if (a && b <= a) (a -= b), (l -= b);
				else {
					let m;
					ArrayBuffer.isView(g)
						? ((m = g.subarray(a, Math.min(b, l))), (p += m.byteLength))
						: ((m = g.slice(a, Math.min(b, l))), (p += m.size)),
						(l -= b),
						f.push(m),
						(a = 0);
				}
			}
			const _ = new Gt([], { type: String(s).toLowerCase() });
			return Te(_, Qt, u), Te(_, Me, f), _;
		}
		get [Symbol.toStringTag]() {
			return 'Blob';
		}
		static [Symbol.hasInstance](t) {
			return (
				t &&
				typeof t == 'object' &&
				typeof t.constructor == 'function' &&
				(typeof t.stream == 'function' || typeof t.arrayBuffer == 'function') &&
				/^(Blob|File)$/.test(t[Symbol.toStringTag])
			);
		}
	}),
	(Me = new WeakMap()),
	(Un = new WeakMap()),
	(Qt = new WeakMap()),
	(ls = new WeakMap()),
	Gt);
Object.defineProperties(Tc.prototype, {
	size: { enumerable: !0 },
	type: { enumerable: !0 },
	slice: { enumerable: !0 }
});
const dp = Tc,
	ss = dp;
var Qn, Vn, cl;
const fp =
		((cl = class extends ss {
			constructor(n, s, i = {}) {
				if (arguments.length < 2)
					throw new TypeError(
						`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`
					);
				super(n, i);
				st(this, Qn, 0);
				st(this, Vn, '');
				i === null && (i = {});
				const a = i.lastModified === void 0 ? Date.now() : Number(i.lastModified);
				Number.isNaN(a) || Te(this, Qn, a), Te(this, Vn, String(s));
			}
			get name() {
				return Z(this, Vn);
			}
			get lastModified() {
				return Z(this, Qn);
			}
			get [Symbol.toStringTag]() {
				return 'File';
			}
			static [Symbol.hasInstance](n) {
				return !!n && n instanceof ss && /^(File)$/.test(n[Symbol.toStringTag]);
			}
		}),
		(Qn = new WeakMap()),
		(Vn = new WeakMap()),
		cl),
	qc = fp;
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ var {
		toStringTag: xn,
		iterator: hp,
		hasInstance: pp
	} = Symbol,
	Ka = Math.random,
	mp = 'append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','),
	Ga = (e, t, n) => (
		(e += ''),
		/^(Blob|File)$/.test(t && t[xn])
			? [
					((n = n !== void 0 ? n + '' : t[xn] == 'File' ? t.name : 'blob'), e),
					t.name !== n || t[xn] == 'blob' ? new qc([t], n, t) : t
			  ]
			: [e, t + '']
	),
	lo = (e, t) =>
		(t
			? e
			: e.replace(
					/\r?\n|\r/g,
					`\r
`
			  )
		)
			.replace(/\n/g, '%0A')
			.replace(/\r/g, '%0D')
			.replace(/"/g, '%22'),
	bt = (e, t, n) => {
		if (t.length < n)
			throw new TypeError(
				`Failed to execute '${e}' on 'FormData': ${n} arguments required, but only ${t.length} present.`
			);
	},
	$e,
	ul;
const os =
	((ul = class {
		constructor(...t) {
			st(this, $e, []);
			if (t.length)
				throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
		}
		get [xn]() {
			return 'FormData';
		}
		[hp]() {
			return this.entries();
		}
		static [pp](t) {
			return t && typeof t == 'object' && t[xn] === 'FormData' && !mp.some((n) => typeof t[n] != 'function');
		}
		append(...t) {
			bt('append', arguments, 2), Z(this, $e).push(Ga(...t));
		}
		delete(t) {
			bt('delete', arguments, 1),
				(t += ''),
				Te(
					this,
					$e,
					Z(this, $e).filter(([n]) => n !== t)
				);
		}
		get(t) {
			bt('get', arguments, 1), (t += '');
			for (var n = Z(this, $e), s = n.length, i = 0; i < s; i++) if (n[i][0] === t) return n[i][1];
			return null;
		}
		getAll(t, n) {
			return bt('getAll', arguments, 1), (n = []), (t += ''), Z(this, $e).forEach((s) => s[0] === t && n.push(s[1])), n;
		}
		has(t) {
			return bt('has', arguments, 1), (t += ''), Z(this, $e).some((n) => n[0] === t);
		}
		forEach(t, n) {
			bt('forEach', arguments, 1);
			for (var [s, i] of this) t.call(n, i, s, this);
		}
		set(...t) {
			bt('set', arguments, 2);
			var n = [],
				s = !0;
			(t = Ga(...t)),
				Z(this, $e).forEach((i) => {
					i[0] === t[0] ? s && (s = !n.push(t)) : n.push(i);
				}),
				s && n.push(t),
				Te(this, $e, n);
		}
		*entries() {
			yield* Z(this, $e);
		}
		*keys() {
			for (var [t] of this) yield t;
		}
		*values() {
			for (var [, t] of this) yield t;
		}
	}),
	($e = new WeakMap()),
	ul);
function yp(e, t = ss) {
	var n = `${Ka()}${Ka()}`.replace(/\./g, '').slice(-28).padStart(32, '-'),
		s = [],
		i = `--${n}\r
Content-Disposition: form-data; name="`;
	return (
		e.forEach((a, l) =>
			typeof a == 'string'
				? s.push(
						i +
							lo(l) +
							`"\r
\r
${a.replace(
	new RegExp('\\r(?!\\n)|(?<!\\r)\\n', 'g'),
	`\r
`
)}\r
`
				  )
				: s.push(
						i +
							lo(l) +
							`"; filename="${lo(a.name, 1)}"\r
Content-Type: ${a.type || 'application/octet-stream'}\r
\r
`,
						a,
						`\r
`
				  )
		),
		s.push(`--${n}--`),
		new t(s, { type: 'multipart/form-data; boundary=' + n })
	);
}
class Rs extends Error {
	constructor(t, n) {
		super(t), Error.captureStackTrace(this, this.constructor), (this.type = n);
	}
	get name() {
		return this.constructor.name;
	}
	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}
class Ce extends Rs {
	constructor(t, n, s) {
		super(t, n), s && ((this.code = this.errno = s.code), (this.erroredSysCall = s.syscall));
	}
}
const is = Symbol.toStringTag,
	Cc = (e) =>
		typeof e == 'object' &&
		typeof e.append == 'function' &&
		typeof e.delete == 'function' &&
		typeof e.get == 'function' &&
		typeof e.getAll == 'function' &&
		typeof e.has == 'function' &&
		typeof e.set == 'function' &&
		typeof e.sort == 'function' &&
		e[is] === 'URLSearchParams',
	as = (e) =>
		e &&
		typeof e == 'object' &&
		typeof e.arrayBuffer == 'function' &&
		typeof e.type == 'string' &&
		typeof e.stream == 'function' &&
		typeof e.constructor == 'function' &&
		/^(Blob|File)$/.test(e[is]),
	bp = (e) => typeof e == 'object' && (e[is] === 'AbortSignal' || e[is] === 'EventTarget'),
	$p = (e, t) => {
		const n = new URL(t).hostname,
			s = new URL(e).hostname;
		return n === s || n.endsWith(`.${s}`);
	},
	gp = (e, t) => {
		const n = new URL(t).protocol,
			s = new URL(e).protocol;
		return n === s;
	},
	wp = Qe.promisify(Ae.default.pipeline),
	ue = Symbol('Body internals');
class Hn {
	constructor(t, { size: n = 0 } = {}) {
		let s = null;
		t === null
			? (t = null)
			: Cc(t)
			? (t = se.Buffer.from(t.toString()))
			: as(t) ||
			  se.Buffer.isBuffer(t) ||
			  (Qe.types.isAnyArrayBuffer(t)
					? (t = se.Buffer.from(t))
					: ArrayBuffer.isView(t)
					? (t = se.Buffer.from(t.buffer, t.byteOffset, t.byteLength))
					: t instanceof Ae.default ||
					  (t instanceof os ? ((t = yp(t)), (s = t.type.split('=')[1])) : (t = se.Buffer.from(String(t)))));
		let i = t;
		se.Buffer.isBuffer(t) ? (i = Ae.default.Readable.from(t)) : as(t) && (i = Ae.default.Readable.from(t.stream())),
			(this[ue] = { body: t, stream: i, boundary: s, disturbed: !1, error: null }),
			(this.size = n),
			t instanceof Ae.default &&
				t.on('error', (a) => {
					const l =
						a instanceof Rs
							? a
							: new Ce(`Invalid response body while trying to fetch ${this.url}: ${a.message}`, 'system', a);
					this[ue].error = l;
				});
	}
	get body() {
		return this[ue].stream;
	}
	get bodyUsed() {
		return this[ue].disturbed;
	}
	async arrayBuffer() {
		const { buffer: t, byteOffset: n, byteLength: s } = await co(this);
		return t.slice(n, n + s);
	}
	async formData() {
		const t = this.headers.get('content-type');
		if (t.startsWith('application/x-www-form-urlencoded')) {
			const s = new os(),
				i = new URLSearchParams(await this.text());
			for (const [a, l] of i) s.append(a, l);
			return s;
		}
		const { toFormData: n } = await Promise.resolve().then(() => Zm);
		return n(this.body, t);
	}
	async blob() {
		const t = (this.headers && this.headers.get('content-type')) || (this[ue].body && this[ue].body.type) || '',
			n = await this.arrayBuffer();
		return new ss([n], { type: t });
	}
	async json() {
		const t = await this.text();
		return JSON.parse(t);
	}
	async text() {
		const t = await co(this);
		return new TextDecoder().decode(t);
	}
	buffer() {
		return co(this);
	}
}
Hn.prototype.buffer = Qe.deprecate(
	Hn.prototype.buffer,
	"Please use 'response.arrayBuffer()' instead of 'response.buffer()'",
	'node-fetch#buffer'
);
Object.defineProperties(Hn.prototype, {
	body: { enumerable: !0 },
	bodyUsed: { enumerable: !0 },
	arrayBuffer: { enumerable: !0 },
	blob: { enumerable: !0 },
	json: { enumerable: !0 },
	text: { enumerable: !0 },
	data: {
		get: Qe.deprecate(
			() => {},
			"data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
			'https://github.com/node-fetch/node-fetch/issues/1000 (response)'
		)
	}
});
async function co(e) {
	if (e[ue].disturbed) throw new TypeError(`body used already for: ${e.url}`);
	if (((e[ue].disturbed = !0), e[ue].error)) throw e[ue].error;
	const { body: t } = e;
	if (t === null || !(t instanceof Ae.default)) return se.Buffer.alloc(0);
	const n = [];
	let s = 0;
	try {
		for await (const i of t) {
			if (e.size > 0 && s + i.length > e.size) {
				const a = new Ce(`content size at ${e.url} over limit: ${e.size}`, 'max-size');
				throw (t.destroy(a), a);
			}
			(s += i.length), n.push(i);
		}
	} catch (i) {
		throw i instanceof Rs
			? i
			: new Ce(`Invalid response body while trying to fetch ${e.url}: ${i.message}`, 'system', i);
	}
	if (t.readableEnded === !0 || t._readableState.ended === !0)
		try {
			return n.every((i) => typeof i == 'string') ? se.Buffer.from(n.join('')) : se.Buffer.concat(n, s);
		} catch (i) {
			throw new Ce(`Could not create Buffer from response body for ${e.url}: ${i.message}`, 'system', i);
		}
	else throw new Ce(`Premature close of server response while trying to fetch ${e.url}`);
}
const oi = (e, t) => {
		let n,
			s,
			{ body: i } = e[ue];
		if (e.bodyUsed) throw new Error('cannot clone body after it is used');
		return (
			i instanceof Ae.default &&
				typeof i.getBoundary != 'function' &&
				((n = new Re.PassThrough({ highWaterMark: t })),
				(s = new Re.PassThrough({ highWaterMark: t })),
				i.pipe(n),
				i.pipe(s),
				(e[ue].stream = n),
				(i = s)),
			i
		);
	},
	_p = Qe.deprecate(
		(e) => e.getBoundary(),
		"form-data doesn't follow the spec and requires special treatment. Use alternative package",
		'https://github.com/node-fetch/node-fetch/issues/1167'
	),
	Ac = (e, t) =>
		e === null
			? null
			: typeof e == 'string'
			? 'text/plain;charset=UTF-8'
			: Cc(e)
			? 'application/x-www-form-urlencoded;charset=UTF-8'
			: as(e)
			? e.type || null
			: se.Buffer.isBuffer(e) || Qe.types.isAnyArrayBuffer(e) || ArrayBuffer.isView(e)
			? null
			: e instanceof os
			? `multipart/form-data; boundary=${t[ue].boundary}`
			: e && typeof e.getBoundary == 'function'
			? `multipart/form-data;boundary=${_p(e)}`
			: e instanceof Ae.default
			? null
			: 'text/plain;charset=UTF-8',
	Sp = (e) => {
		const { body: t } = e[ue];
		return t === null
			? 0
			: as(t)
			? t.size
			: se.Buffer.isBuffer(t)
			? t.length
			: t && typeof t.getLengthSync == 'function' && t.hasKnownLength && t.hasKnownLength()
			? t.getLengthSync()
			: null;
	},
	vp = async (e, { body: t }) => {
		t === null ? e.end() : await wp(t, e);
	},
	Mr =
		typeof Dn.default.validateHeaderName == 'function'
			? Dn.default.validateHeaderName
			: (e) => {
					if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)) {
						const t = new TypeError(`Header name must be a valid HTTP token [${e}]`);
						throw (Object.defineProperty(t, 'code', { value: 'ERR_INVALID_HTTP_TOKEN' }), t);
					}
			  },
	Eo =
		typeof Dn.default.validateHeaderValue == 'function'
			? Dn.default.validateHeaderValue
			: (e, t) => {
					if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)) {
						const n = new TypeError(`Invalid character in header content ["${e}"]`);
						throw (Object.defineProperty(n, 'code', { value: 'ERR_INVALID_CHAR' }), n);
					}
			  };
class Ge extends URLSearchParams {
	constructor(t) {
		let n = [];
		if (t instanceof Ge) {
			const s = t.raw();
			for (const [i, a] of Object.entries(s)) n.push(...a.map((l) => [i, l]));
		} else if (t != null)
			if (typeof t == 'object' && !Qe.types.isBoxedPrimitive(t)) {
				const s = t[Symbol.iterator];
				if (s == null) n.push(...Object.entries(t));
				else {
					if (typeof s != 'function') throw new TypeError('Header pairs must be iterable');
					n = [...t]
						.map((i) => {
							if (typeof i != 'object' || Qe.types.isBoxedPrimitive(i))
								throw new TypeError('Each header pair must be an iterable object');
							return [...i];
						})
						.map((i) => {
							if (i.length !== 2) throw new TypeError('Each header pair must be a name/value tuple');
							return [...i];
						});
				}
			} else
				throw new TypeError(
					"Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)"
				);
		return (
			(n = n.length > 0 ? n.map(([s, i]) => (Mr(s), Eo(s, String(i)), [String(s).toLowerCase(), String(i)])) : void 0),
			super(n),
			new Proxy(this, {
				get(s, i, a) {
					switch (i) {
						case 'append':
						case 'set':
							return (l, u) => (
								Mr(l), Eo(l, String(u)), URLSearchParams.prototype[i].call(s, String(l).toLowerCase(), String(u))
							);
						case 'delete':
						case 'has':
						case 'getAll':
							return (l) => (Mr(l), URLSearchParams.prototype[i].call(s, String(l).toLowerCase()));
						case 'keys':
							return () => (s.sort(), new Set(URLSearchParams.prototype.keys.call(s)).keys());
						default:
							return Reflect.get(s, i, a);
					}
				}
			})
		);
	}
	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
	toString() {
		return Object.prototype.toString.call(this);
	}
	get(t) {
		const n = this.getAll(t);
		if (n.length === 0) return null;
		let s = n.join(', ');
		return /^content-encoding$/i.test(t) && (s = s.toLowerCase()), s;
	}
	forEach(t, n = void 0) {
		for (const s of this.keys()) Reflect.apply(t, n, [this.get(s), s, this]);
	}
	*values() {
		for (const t of this.keys()) yield this.get(t);
	}
	*entries() {
		for (const t of this.keys()) yield [t, this.get(t)];
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	raw() {
		return [...this.keys()].reduce((t, n) => ((t[n] = this.getAll(n)), t), {});
	}
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((t, n) => {
			const s = this.getAll(n);
			return n === 'host' ? (t[n] = s[0]) : (t[n] = s.length > 1 ? s : s[0]), t;
		}, {});
	}
}
Object.defineProperties(
	Ge.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((e, t) => ((e[t] = { enumerable: !0 }), e), {})
);
function Rp(e = []) {
	return new Ge(
		e
			.reduce((t, n, s, i) => (s % 2 === 0 && t.push(i.slice(s, s + 2)), t), [])
			.filter(([t, n]) => {
				try {
					return Mr(t), Eo(t, String(n)), !0;
				} catch {
					return !1;
				}
			})
	);
}
const Ep = new Set([301, 302, 303, 307, 308]),
	Pc = (e) => Ep.has(e),
	ve = Symbol('Response internals');
class he extends Hn {
	constructor(t = null, n = {}) {
		super(t, n);
		const s = n.status != null ? n.status : 200,
			i = new Ge(n.headers);
		if (t !== null && !i.has('Content-Type')) {
			const a = Ac(t, this);
			a && i.append('Content-Type', a);
		}
		this[ve] = {
			type: 'default',
			url: n.url,
			status: s,
			statusText: n.statusText || '',
			headers: i,
			counter: n.counter,
			highWaterMark: n.highWaterMark
		};
	}
	get type() {
		return this[ve].type;
	}
	get url() {
		return this[ve].url || '';
	}
	get status() {
		return this[ve].status;
	}
	get ok() {
		return this[ve].status >= 200 && this[ve].status < 300;
	}
	get redirected() {
		return this[ve].counter > 0;
	}
	get statusText() {
		return this[ve].statusText;
	}
	get headers() {
		return this[ve].headers;
	}
	get highWaterMark() {
		return this[ve].highWaterMark;
	}
	clone() {
		return new he(oi(this, this.highWaterMark), {
			type: this.type,
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size,
			highWaterMark: this.highWaterMark
		});
	}
	static redirect(t, n = 302) {
		if (!Pc(n)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		return new he(null, { headers: { location: new URL(t).toString() }, status: n });
	}
	static error() {
		const t = new he(null, { status: 0, statusText: '' });
		return (t[ve].type = 'error'), t;
	}
	get [Symbol.toStringTag]() {
		return 'Response';
	}
}
Object.defineProperties(he.prototype, {
	type: { enumerable: !0 },
	url: { enumerable: !0 },
	status: { enumerable: !0 },
	ok: { enumerable: !0 },
	redirected: { enumerable: !0 },
	statusText: { enumerable: !0 },
	headers: { enumerable: !0 },
	clone: { enumerable: !0 }
});
const kp = (e) => {
	if (e.search) return e.search;
	const t = e.href.length - 1,
		n = e.hash || (e.href[t] === '#' ? '#' : '');
	return e.href[t - n.length] === '?' ? '?' : '';
};
function Za(e, t = !1) {
	return e == null || ((e = new URL(e)), /^(about|blob|data):$/.test(e.protocol))
		? 'no-referrer'
		: ((e.username = ''), (e.password = ''), (e.hash = ''), t && ((e.pathname = ''), (e.search = '')), e);
}
const Ic = new Set([
		'',
		'no-referrer',
		'no-referrer-when-downgrade',
		'same-origin',
		'origin',
		'strict-origin',
		'origin-when-cross-origin',
		'strict-origin-when-cross-origin',
		'unsafe-url'
	]),
	Tp = 'strict-origin-when-cross-origin';
function qp(e) {
	if (!Ic.has(e)) throw new TypeError(`Invalid referrerPolicy: ${e}`);
	return e;
}
function Cp(e) {
	if (/^(http|ws)s:$/.test(e.protocol)) return !0;
	const t = e.host.replace(/(^\[)|(]$)/g, ''),
		n = pd.isIP(t);
	return (n === 4 && /^127\./.test(t)) || (n === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t))
		? !0
		: e.host === 'localhost' || e.host.endsWith('.localhost')
		? !1
		: e.protocol === 'file:';
}
function jt(e) {
	return /^about:(blank|srcdoc)$/.test(e) || e.protocol === 'data:' || /^(blob|filesystem):$/.test(e.protocol)
		? !0
		: Cp(e);
}
function Ap(e, { referrerURLCallback: t, referrerOriginCallback: n } = {}) {
	if (e.referrer === 'no-referrer' || e.referrerPolicy === '') return null;
	const s = e.referrerPolicy;
	if (e.referrer === 'about:client') return 'no-referrer';
	const i = e.referrer;
	let a = Za(i),
		l = Za(i, !0);
	a.toString().length > 4096 && (a = l), t && (a = t(a)), n && (l = n(l));
	const u = new URL(e.url);
	switch (s) {
		case 'no-referrer':
			return 'no-referrer';
		case 'origin':
			return l;
		case 'unsafe-url':
			return a;
		case 'strict-origin':
			return jt(a) && !jt(u) ? 'no-referrer' : l.toString();
		case 'strict-origin-when-cross-origin':
			return a.origin === u.origin ? a : jt(a) && !jt(u) ? 'no-referrer' : l;
		case 'same-origin':
			return a.origin === u.origin ? a : 'no-referrer';
		case 'origin-when-cross-origin':
			return a.origin === u.origin ? a : l;
		case 'no-referrer-when-downgrade':
			return jt(a) && !jt(u) ? 'no-referrer' : a;
		default:
			throw new TypeError(`Invalid referrerPolicy: ${s}`);
	}
}
function Pp(e) {
	const t = (e.get('referrer-policy') || '').split(/[,\s]+/);
	let n = '';
	for (const s of t) s && Ic.has(s) && (n = s);
	return n;
}
const J = Symbol('Request internals'),
	Tn = (e) => typeof e == 'object' && typeof e[J] == 'object',
	Ip = Qe.deprecate(
		() => {},
		'.data is not a valid RequestInit property, use .body instead',
		'https://github.com/node-fetch/node-fetch/issues/1000 (request)'
	);
class Kt extends Hn {
	constructor(t, n = {}) {
		let s;
		if ((Tn(t) ? (s = new URL(t.url)) : ((s = new URL(t)), (t = {})), s.username !== '' || s.password !== ''))
			throw new TypeError(`${s} is an url with embedded credentials.`);
		let i = n.method || t.method || 'GET';
		if (
			(/^(delete|get|head|options|post|put)$/i.test(i) && (i = i.toUpperCase()),
			!Tn(n) && 'data' in n && Ip(),
			(n.body != null || (Tn(t) && t.body !== null)) && (i === 'GET' || i === 'HEAD'))
		)
			throw new TypeError('Request with GET/HEAD method cannot have body');
		const a = n.body ? n.body : Tn(t) && t.body !== null ? oi(t) : null;
		super(a, { size: n.size || t.size || 0 });
		const l = new Ge(n.headers || t.headers || {});
		if (a !== null && !l.has('Content-Type')) {
			const f = Ac(a, this);
			f && l.set('Content-Type', f);
		}
		let u = Tn(t) ? t.signal : null;
		if (('signal' in n && (u = n.signal), u != null && !bp(u)))
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		let d = n.referrer == null ? t.referrer : n.referrer;
		if (d === '') d = 'no-referrer';
		else if (d) {
			const f = new URL(d);
			d = /^about:(\/\/)?client$/.test(f) ? 'client' : f;
		} else d = void 0;
		(this[J] = {
			method: i,
			redirect: n.redirect || t.redirect || 'follow',
			headers: l,
			parsedURL: s,
			signal: u,
			referrer: d
		}),
			(this.follow = n.follow === void 0 ? (t.follow === void 0 ? 20 : t.follow) : n.follow),
			(this.compress = n.compress === void 0 ? (t.compress === void 0 ? !0 : t.compress) : n.compress),
			(this.counter = n.counter || t.counter || 0),
			(this.agent = n.agent || t.agent),
			(this.highWaterMark = n.highWaterMark || t.highWaterMark || 16384),
			(this.insecureHTTPParser = n.insecureHTTPParser || t.insecureHTTPParser || !1),
			(this.referrerPolicy = n.referrerPolicy || t.referrerPolicy || '');
	}
	get method() {
		return this[J].method;
	}
	get url() {
		return hd.format(this[J].parsedURL);
	}
	get headers() {
		return this[J].headers;
	}
	get redirect() {
		return this[J].redirect;
	}
	get signal() {
		return this[J].signal;
	}
	get referrer() {
		if (this[J].referrer === 'no-referrer') return '';
		if (this[J].referrer === 'client') return 'about:client';
		if (this[J].referrer) return this[J].referrer.toString();
	}
	get referrerPolicy() {
		return this[J].referrerPolicy;
	}
	set referrerPolicy(t) {
		this[J].referrerPolicy = qp(t);
	}
	clone() {
		return new Kt(this);
	}
	get [Symbol.toStringTag]() {
		return 'Request';
	}
}
Object.defineProperties(Kt.prototype, {
	method: { enumerable: !0 },
	url: { enumerable: !0 },
	headers: { enumerable: !0 },
	redirect: { enumerable: !0 },
	clone: { enumerable: !0 },
	signal: { enumerable: !0 },
	referrer: { enumerable: !0 },
	referrerPolicy: { enumerable: !0 }
});
const Op = (e) => {
	const { parsedURL: t } = e[J],
		n = new Ge(e[J].headers);
	n.has('Accept') || n.set('Accept', '*/*');
	let s = null;
	if ((e.body === null && /^(post|put)$/i.test(e.method) && (s = '0'), e.body !== null)) {
		const u = Sp(e);
		typeof u == 'number' && !Number.isNaN(u) && (s = String(u));
	}
	s && n.set('Content-Length', s),
		e.referrerPolicy === '' && (e.referrerPolicy = Tp),
		e.referrer && e.referrer !== 'no-referrer' ? (e[J].referrer = Ap(e)) : (e[J].referrer = 'no-referrer'),
		e[J].referrer instanceof URL && n.set('Referer', e.referrer),
		n.has('User-Agent') || n.set('User-Agent', 'node-fetch'),
		e.compress && !n.has('Accept-Encoding') && n.set('Accept-Encoding', 'gzip, deflate, br');
	let { agent: i } = e;
	typeof i == 'function' && (i = i(t)), !n.has('Connection') && !i && n.set('Connection', 'close');
	const a = kp(t),
		l = {
			path: t.pathname + a,
			method: e.method,
			headers: n[Symbol.for('nodejs.util.inspect.custom')](),
			insecureHTTPParser: e.insecureHTTPParser,
			agent: i
		};
	return { parsedURL: t, options: l };
};
class xp extends Rs {
	constructor(t, n = 'aborted') {
		super(t, n);
	}
}
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ if (!globalThis.DOMException)
	try {
		const { MessageChannel: e } = require('worker_threads'),
			t = new e().port1,
			n = new ArrayBuffer();
		t.postMessage(n, [n, n]);
	} catch (e) {
		e.constructor.name === 'DOMException' && (globalThis.DOMException = e.constructor);
	}
const Lp = new Set(['data:', 'http:', 'https:']);
async function Oc(e, t) {
	return new Promise((n, s) => {
		const i = new Kt(e, t),
			{ parsedURL: a, options: l } = Op(i);
		if (!Lp.has(a.protocol))
			throw new TypeError(
				`node-fetch cannot load ${e}. URL scheme "${a.protocol.replace(/:$/, '')}" is not supported.`
			);
		if (a.protocol === 'data:') {
			const m = lp(i.url),
				$ = new he(m, { headers: { 'Content-Type': m.typeFull } });
			n($);
			return;
		}
		const u = (a.protocol === 'https:' ? yd.default : Dn.default).request,
			{ signal: d } = i;
		let f = null;
		const p = () => {
			const m = new xp('The operation was aborted.');
			s(m),
				i.body && i.body instanceof Ae.default.Readable && i.body.destroy(m),
				!(!f || !f.body) && f.body.emit('error', m);
		};
		if (d && d.aborted) {
			p();
			return;
		}
		const _ = () => {
				p(), b();
			},
			g = u(a.toString(), l);
		d && d.addEventListener('abort', _);
		const b = () => {
			g.abort(), d && d.removeEventListener('abort', _);
		};
		g.on('error', (m) => {
			s(new Ce(`request to ${i.url} failed, reason: ${m.message}`, 'system', m)), b();
		}),
			Dp(g, (m) => {
				f && f.body && f.body.destroy(m);
			}),
			process.version < 'v14' &&
				g.on('socket', (m) => {
					let $;
					m.prependListener('end', () => {
						$ = m._eventsCount;
					}),
						m.prependListener('close', (R) => {
							if (f && $ < m._eventsCount && !R) {
								const y = new Error('Premature close');
								(y.code = 'ERR_STREAM_PREMATURE_CLOSE'), f.body.emit('error', y);
							}
						});
				}),
			g.on('response', (m) => {
				g.setTimeout(0);
				const $ = Rp(m.rawHeaders);
				if (Pc(m.statusCode)) {
					const E = $.get('Location');
					let C = null;
					try {
						C = E === null ? null : new URL(E, i.url);
					} catch {
						if (i.redirect !== 'manual') {
							s(new Ce(`uri requested responds with an invalid redirect URL: ${E}`, 'invalid-redirect')), b();
							return;
						}
					}
					switch (i.redirect) {
						case 'error':
							s(
								new Ce(`uri requested responds with a redirect, redirect mode is set to error: ${i.url}`, 'no-redirect')
							),
								b();
							return;
						case 'manual':
							break;
						case 'follow': {
							if (C === null) break;
							if (i.counter >= i.follow) {
								s(new Ce(`maximum redirect reached at: ${i.url}`, 'max-redirect')), b();
								return;
							}
							const I = {
								headers: new Ge(i.headers),
								follow: i.follow,
								counter: i.counter + 1,
								agent: i.agent,
								compress: i.compress,
								method: i.method,
								body: oi(i),
								signal: i.signal,
								size: i.size,
								referrer: i.referrer,
								referrerPolicy: i.referrerPolicy
							};
							if (!$p(i.url, C) || !gp(i.url, C))
								for (const x of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) I.headers.delete(x);
							if (m.statusCode !== 303 && i.body && t.body instanceof Ae.default.Readable) {
								s(new Ce('Cannot follow redirect with body being a readable stream', 'unsupported-redirect')), b();
								return;
							}
							(m.statusCode === 303 || ((m.statusCode === 301 || m.statusCode === 302) && i.method === 'POST')) &&
								((I.method = 'GET'), (I.body = void 0), I.headers.delete('content-length'));
							const A = Pp($);
							A && (I.referrerPolicy = A), n(Oc(new Kt(C, I))), b();
							return;
						}
						default:
							return s(new TypeError(`Redirect option '${i.redirect}' is not a valid value of RequestRedirect`));
					}
				}
				d &&
					m.once('end', () => {
						d.removeEventListener('abort', _);
					});
				let R = Re.pipeline(m, new Re.PassThrough(), (E) => {
					E && s(E);
				});
				process.version < 'v12.10' && m.on('aborted', _);
				const y = {
						url: i.url,
						status: m.statusCode,
						statusText: m.statusMessage,
						headers: $,
						size: i.size,
						counter: i.counter,
						highWaterMark: i.highWaterMark
					},
					S = $.get('Content-Encoding');
				if (!i.compress || i.method === 'HEAD' || S === null || m.statusCode === 204 || m.statusCode === 304) {
					(f = new he(R, y)), n(f);
					return;
				}
				const T = { flush: Nt.default.Z_SYNC_FLUSH, finishFlush: Nt.default.Z_SYNC_FLUSH };
				if (S === 'gzip' || S === 'x-gzip') {
					(R = Re.pipeline(R, Nt.default.createGunzip(T), (E) => {
						E && s(E);
					})),
						(f = new he(R, y)),
						n(f);
					return;
				}
				if (S === 'deflate' || S === 'x-deflate') {
					const E = Re.pipeline(m, new Re.PassThrough(), (C) => {
						C && s(C);
					});
					E.once('data', (C) => {
						(C[0] & 15) === 8
							? (R = Re.pipeline(R, Nt.default.createInflate(), (I) => {
									I && s(I);
							  }))
							: (R = Re.pipeline(R, Nt.default.createInflateRaw(), (I) => {
									I && s(I);
							  })),
							(f = new he(R, y)),
							n(f);
					}),
						E.once('end', () => {
							f || ((f = new he(R, y)), n(f));
						});
					return;
				}
				if (S === 'br') {
					(R = Re.pipeline(R, Nt.default.createBrotliDecompress(), (E) => {
						E && s(E);
					})),
						(f = new he(R, y)),
						n(f);
					return;
				}
				(f = new he(R, y)), n(f);
			}),
			vp(g, i).catch(s);
	});
}
function Dp(e, t) {
	const n = se.Buffer.from(`0\r
\r
`);
	let s = !1,
		i = !1,
		a;
	e.on('response', (l) => {
		const { headers: u } = l;
		s = u['transfer-encoding'] === 'chunked' && !u['content-length'];
	}),
		e.on('socket', (l) => {
			const u = () => {
					if (s && !i) {
						const f = new Error('Premature close');
						(f.code = 'ERR_STREAM_PREMATURE_CLOSE'), t(f);
					}
				},
				d = (f) => {
					(i = se.Buffer.compare(f.slice(-5), n) === 0),
						!i &&
							a &&
							(i =
								se.Buffer.compare(a.slice(-3), n.slice(0, 3)) === 0 &&
								se.Buffer.compare(f.slice(-2), n.slice(3)) === 0),
						(a = f);
				};
			l.prependListener('close', u),
				l.on('data', d),
				e.on('close', () => {
					l.removeListener('close', u), l.removeListener('data', d);
				});
		});
}
var be = Symbol('headers'),
	Ja,
	Bp = class {
		constructor() {
			this[Ja] = {};
		}
		[((Ja = be), Symbol.iterator)]() {
			return this.entries();
		}
		*keys() {
			for (const e of Object.keys(this[be])) yield e;
		}
		*values() {
			for (const e of Object.values(this[be])) yield e;
		}
		*entries() {
			for (const e of Object.keys(this[be])) yield [e, this.get(e)];
		}
		get(e) {
			return this[be][qn(e)] || null;
		}
		set(e, t) {
			const n = qn(e);
			this[be][n] = typeof t != 'string' ? String(t) : t;
		}
		append(e, t) {
			const n = qn(e),
				s = this.has(n) ? `${this.get(n)}, ${t}` : t;
			this.set(e, s);
		}
		delete(e) {
			if (!this.has(e)) return;
			const t = qn(e);
			delete this[be][t];
		}
		all() {
			return this[be];
		}
		has(e) {
			return this[be].hasOwnProperty(qn(e));
		}
		forEach(e, t) {
			for (const n in this[be]) this[be].hasOwnProperty(n) && e.call(t, this[be][n], n, this);
		}
	},
	Np = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function qn(e) {
	if ((typeof e != 'string' && (e = String(e)), Np.test(e) || e.trim() === ''))
		throw new TypeError('Invalid character in header field name');
	return e.toLowerCase();
}
function tr() {
	return new (typeof Headers == 'function' ? Headers : Bp)();
}
var Ln = class extends Error {
	constructor(e, t) {
		super(t), (this.status = e);
	}
};
function Wp(e) {
	return Lc(e, new Ln(404, 'Not Found'));
}
function xc(e, t) {
	let s = 'Server Error',
		i;
	t != null &&
		(typeof t == 'object'
			? (typeof t.message == 'string' && (s = t.message), t.stack != null && (i = String(t.stack)))
			: (s = String(t)));
	const a = Dc(500, s, i),
		l = tr();
	return (
		l.set('Content-Type', 'text/html; charset=utf-8'),
		e.response(
			500,
			l,
			async (u) => {
				u.write(a);
			},
			t
		)
	);
}
function Lc(e, t) {
	const n = Dc(t.status, t.message, t.stack),
		s = tr();
	return (
		s.set('Content-Type', 'text/html; charset=utf-8'),
		e.response(
			t.status,
			s,
			async (i) => {
				i.write(n);
			},
			t
		)
	);
}
function Dc(e, t, n) {
	const s = typeof t == 'string' ? '600px' : '300px',
		i = e >= 500 ? zp : jp;
	return (
		e < 500 && (n = ''),
		`<!DOCTYPE html>
<html data-qwik-city-status="${e}">
<head>
  <meta charset="utf-8">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${i}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${i}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${i}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${e}</strong>
    <span>${t}</span>
  </p>
  ${n ? `<pre><code>${n}</code></pre>` : ''}
</body>
</html>
`
	);
}
var jp = '#006ce9',
	zp = '#713fc2',
	Xa = new WeakMap(),
	Mp = async (e, t, n, s) => {
		if (Array.isArray(e))
			for (const i of e) {
				const a = i[0].exec(s);
				if (a) {
					const l = i[1],
						u = Hp(i[2], a),
						d = i[4],
						f = new Array(l.length),
						p = [],
						_ = Fp(t, s);
					let g;
					return (
						l.forEach((b, m) => {
							el(b, p, ($) => (f[m] = $), n);
						}),
						el(_, p, (b) => (g = b == null ? void 0 : b.default), n),
						p.length > 0 && (await Promise.all(p)),
						[u, f, g, d]
					);
				}
			}
		return null;
	},
	el = (e, t, n, s) => {
		if (typeof e == 'function') {
			const i = Xa.get(e);
			if (i) n(i);
			else {
				const a = e();
				typeof a.then == 'function'
					? t.push(
							a.then((l) => {
								s !== !1 && Xa.set(e, l), n(l);
							})
					  )
					: a && n(a);
			}
		}
	},
	Fp = (e, t) => {
		if (e) {
			const n = e.find((s) => s[0] === t || t.startsWith(s[0] + (t.endsWith('/') ? '' : '/')));
			if (n) return n[1];
		}
	},
	Hp = (e, t) => {
		const n = {};
		if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : '';
		return n;
	},
	Pn = class {
		constructor(e, t, n) {
			(this.url = e),
				(this.location = e),
				(this.status = Bc(t) ? t : 307),
				(this.headers = n || tr()),
				this.headers.set('Location', this.location),
				this.headers.delete('Cache-Control');
		}
	};
function Up(e, t) {
	return e.response(t.status, t.headers, async () => {});
}
function Bc(e) {
	return typeof e == 'number' && e >= 301 && e <= 308;
}
async function Qp(e, t, n, s, i, a = '/') {
	if (n.length === 0) throw new Ln(404, 'Not Found');
	const { request: l, url: u } = e,
		{ pathname: d } = u,
		f = Vp(n),
		p = f && l.headers.get('Accept') === 'application/json',
		_ = p ? 'pagedata' : f ? 'pagehtml' : 'endpoint',
		g = {
			type: _,
			url: u,
			params: t,
			status: 200,
			headers: tr(),
			resolvedBody: void 0,
			pendingBody: void 0,
			aborted: !1
		};
	let b = !1;
	if (f && d !== a) {
		if (i) {
			if (!d.endsWith('/')) throw new Pn(d + '/' + u.search, 307);
		} else if (d.endsWith('/')) throw new Pn(d.slice(0, d.length - 1) + u.search, 307);
	}
	let m = -1;
	const $ = () => {
			m = nl;
		},
		R = (T, E) => new Pn(T, E, g.headers),
		y = (T, E) => new Ln(T, E),
		S = async () => {
			for (m++; m < n.length; ) {
				const T = n[m];
				let E;
				switch (l.method) {
					case 'GET': {
						E = T.onGet;
						break;
					}
					case 'POST': {
						E = T.onPost;
						break;
					}
					case 'PUT': {
						E = T.onPut;
						break;
					}
					case 'PATCH': {
						E = T.onPatch;
						break;
					}
					case 'OPTIONS': {
						E = T.onOptions;
						break;
					}
					case 'HEAD': {
						E = T.onHead;
						break;
					}
					case 'DELETE': {
						E = T.onDelete;
						break;
					}
				}
				if (((E = E || T.onRequest), typeof E == 'function')) {
					b = !0;
					const C = {
							get status() {
								return g.status;
							},
							set status(x) {
								g.status = x;
							},
							get headers() {
								return g.headers;
							},
							redirect: R,
							error: y
						},
						I = {
							request: l,
							url: new URL(u),
							params: { ...t },
							response: C,
							platform: s,
							next: S,
							abort: $
						},
						A = E(I);
					if (typeof A == 'function') g.pendingBody = tl(A);
					else if (A !== null && typeof A == 'object' && typeof A.then == 'function') {
						const x = await A;
						typeof x == 'function' ? (g.pendingBody = tl(x)) : (g.resolvedBody = x);
					} else g.resolvedBody = A;
				}
				m++;
			}
		};
	if ((await S(), (g.aborted = m >= nl), !p && Bc(g.status) && g.headers.has('Location')))
		throw new Pn(g.headers.get('Location'), g.status, g.headers);
	if (_ === 'endpoint' && !b) throw new Ln(405, 'Method Not Allowed');
	return g;
}
function tl(e) {
	return new Promise((t, n) => {
		try {
			const s = e();
			s !== null && typeof s == 'object' && typeof s.then == 'function' ? s.then(t, n) : t(s);
		} catch (s) {
			n(s);
		}
	});
}
function Vp(e) {
	const t = e[e.length - 1];
	return t && typeof t.default == 'function';
}
function Yp(e, t) {
	let n = e.url.pathname;
	if (n.endsWith(Nc)) {
		e.request.headers.set('Accept', 'application/json');
		const s = n.length - Kp + (t ? 1 : 0);
		(n = n.slice(0, s)), n === '' && (n = '/'), (e.url.pathname = n);
	}
}
var Nc = '/q-data.json',
	Kp = Nc.length,
	nl = 999999999;
function Gp(e, t) {
	const { pendingBody: n, resolvedBody: s, status: i, headers: a } = t,
		{ response: l } = e;
	if (n === void 0 && s === void 0) return l(i, a, Zp);
	a.has('Content-Type') || a.set('Content-Type', 'application/json; charset=utf-8');
	const u = a.get('Content-Type').includes('json');
	return l(i, a, async ({ write: d }) => {
		const f = n !== void 0 ? await n : s;
		if (f !== void 0)
			if (u) d(JSON.stringify(f));
			else {
				const p = typeof f;
				d(p === 'string' ? f : p === 'number' || p === 'boolean' ? String(f) : f);
			}
	});
}
var Zp = async () => {};
function Jp(e, t, n, s, i) {
	const { status: a, headers: l } = t,
		{ response: u } = e,
		d = t.type === 'pagedata';
	return (
		d
			? l.set('Content-Type', 'application/json; charset=utf-8')
			: l.has('Content-Type') || l.set('Content-Type', 'text/html; charset=utf-8'),
		u(d ? 200 : a, l, async (f) => {
			const p = await n({ stream: d ? tm : f, envData: em(t), ...s });
			d ? f.write(JSON.stringify(await rl(t, p, i))) : (typeof p).html === 'string' && f.write(p.html),
				typeof f.clientData == 'function' && f.clientData(await rl(t, p, i));
		})
	);
}
async function rl(e, t, n) {
	const s = Xp(t, n);
	return {
		body: e.pendingBody ? await e.pendingBody : e.resolvedBody,
		status: e.status !== 200 ? e.status : void 0,
		redirect: (e.status >= 301 && e.status <= 308 && e.headers.get('location')) || void 0,
		prefetch: s.length > 0 ? s : void 0
	};
}
function Xp(e, t) {
	const n = [],
		s = (u) => {
			u && !n.includes(u) && n.push(u);
		},
		i = (u) => {
			if (Array.isArray(u))
				for (const d of u) {
					const f = d.url.split('/').pop();
					f && !n.includes(f) && (s(f), i(d.imports));
				}
		};
	i(e.prefetchResources);
	const a = e.manifest || e._manifest,
		l = e._symbols;
	if (a && l)
		for (const u of l) {
			const d = a.symbols[u];
			d && d.ctxName === 'component$' && s(a.mapping[u]);
		}
	if (t) for (const u of t) s(u);
	return n;
}
function em(e) {
	const { url: t, params: n, pendingBody: s, resolvedBody: i, status: a } = e;
	return { url: t.href, qwikcity: { params: { ...n }, response: { body: s || i, status: a } } };
}
var tm = { write: () => {} };
async function nm(e, t, n, s) {
	try {
		Yp(e, Ro);
		const i = await Mp(Sc, vc, Ec, e.url.pathname);
		if (i) {
			const [a, l, u, d] = i,
				f = await Qp(e, a, l, n, Ro, Rc);
			return f.aborted ? null : f.type === 'endpoint' ? Gp(e, f) : Jp(e, f, t, s, d);
		}
	} catch (i) {
		return i instanceof Pn ? Up(e, i) : i instanceof Ln ? Lc(e, i) : xc(e, i);
	}
	return null;
}
function sl(e) {
	const t = e.socket.encrypted || e.connection.encrypted ? 'https' : 'http';
	return new URL(e.url || '/', `${t}://${e.headers.host}`);
}
function ol(e, t, n) {
	const s = tr(),
		i = t.headers;
	for (const u in i) {
		const d = i[u];
		if (typeof d == 'string') s.set(u, d);
		else if (Array.isArray(d)) for (const f of d) s.append(u, f);
	}
	const a = async () => {
		const u = [];
		for await (const d of t) u.push(d);
		return Buffer.concat(u).toString();
	};
	return {
		request: {
			headers: s,
			formData: async () => new URLSearchParams(await a()),
			json: async () => JSON.parse(await a()),
			method: t.method || 'GET',
			text: a,
			url: e.href
		},
		response: async (u, d, f) => (
			(n.statusCode = u),
			d.forEach((p, _) => n.setHeader(_, p)),
			f({
				write: (p) => {
					n.write, n.write(p);
				}
			}).finally(() => {
				n.end();
			}),
			n
		),
		url: e
	};
}
function rm() {
	typeof global < 'u' &&
		typeof globalThis.fetch != 'function' &&
		typeof process < 'u' &&
		process.versions.node &&
		(globalThis.fetch ||
			((globalThis.fetch = Oc), (globalThis.Headers = Ge), (globalThis.Request = Kt), (globalThis.Response = he)));
}
function sm(e, t) {
	return (
		rm(),
		{
			router: async (i, a, l) => {
				try {
					const u = ol(sl(i), i, a);
					try {
						(await nm(u, e, {}, t)) || l();
					} catch (d) {
						await xc(u, d);
					}
				} catch (u) {
					l(u);
				}
			},
			notFound: async (i, a, l) => {
				try {
					const u = ol(sl(i), i, a);
					await Wp(u);
				} catch (u) {
					l(u);
				}
			}
		}
	);
}
/**
 * @license
 * @builder.io/qwik/server 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ if (typeof global > 'u') {
	const e = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof self < 'u' ? self : {};
	e.global = e;
}
var om = ((e) =>
	typeof require < 'u'
		? require
		: typeof Proxy < 'u'
		? new Proxy(e, { get: (t, n) => (typeof require < 'u' ? require : t)[n] })
		: e)(function (e) {
	if (typeof require < 'u') return require.apply(this, arguments);
	throw new Error('Dynamic require of "' + e + '" is not supported');
});
function uo() {
	if (typeof performance > 'u') return () => 0;
	const e = performance.now();
	return () => (performance.now() - e) / 1e6;
}
function Wc(e) {
	let t = e.base;
	return typeof t == 'string' ? (t.endsWith('/') || (t += '/'), t) : '/build/';
}
function im(e, t) {
	const n = t == null ? void 0 : t.mapper,
		s = e.symbolMapper
			? e.symbolMapper
			: (a) => {
					if (n) {
						const l = jc(a),
							u = n[l];
						return u || console.error('Cannot resolve symbol', a, 'in', n), u;
					}
			  };
	return {
		isServer: !0,
		async importSymbol(a, l, u) {
			let d = String(l);
			d.endsWith('.js') || (d += '.js');
			const f = om(d);
			if (!(u in f)) throw new Error(`Q-ERROR: missing symbol '${u}' in module '${d}'.`);
			return f[u];
		},
		raf: () => (console.error('server can not rerender'), Promise.resolve()),
		nextTick: (a) =>
			new Promise((l) => {
				setTimeout(() => {
					l(a());
				});
			}),
		chunkForSymbol(a) {
			return s(a, n);
		}
	};
}
async function am(e, t) {
	const n = im(e, t);
	_d(n);
}
var jc = (e) => {
		const t = e.lastIndexOf('_');
		return t > -1 ? e.slice(t + 1) : e;
	},
	lm =
		'((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
	cm = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,
	um =
		'((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
	dm = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;
function fm(e = {}) {
	return Array.isArray(e.events) && e.events.length > 0
		? (e.debug ? dm : um).replace('window.qEvents', JSON.stringify(e.events))
		: e.debug
		? cm
		: lm;
}
function hm(e, t, n) {
	if (!n) return [];
	const s = t.prefetchStrategy,
		i = Wc(t);
	if (s !== null) {
		if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === 'auto') return pm(e, n, i);
		if (typeof s.symbolsToPrefetch == 'function')
			try {
				return s.symbolsToPrefetch({ manifest: n.manifest });
			} catch (a) {
				console.error('getPrefetchUrls, symbolsToPrefetch()', a);
			}
	}
	return [];
}
function pm(e, t, n) {
	const s = [],
		i = e == null ? void 0 : e.listeners,
		a = e == null ? void 0 : e.objs,
		{ mapper: l, manifest: u } = t,
		d = new Set();
	if (Array.isArray(i)) for (const f in l) i.some((_) => _.qrl.getHash() === f) && ko(u, d, s, n, l[f][1]);
	if (Array.isArray(a)) {
		for (const f of a)
			if (mm(f)) {
				const p = f.getHash(),
					_ = l[p];
				_ && ko(u, d, s, n, _[0]);
			}
	}
	return s;
}
function ko(e, t, n, s, i) {
	const a = s + i;
	if (!t.has(a)) {
		t.add(a);
		const l = e.bundles[i];
		if (l) {
			const u = { url: a, imports: [] };
			if ((n.push(u), Array.isArray(l.imports))) for (const d of l.imports) ko(e, t, u.imports, s, d);
		}
	}
}
var mm = (e) => typeof e == 'function' && typeof e.getSymbol == 'function',
	zc = globalThis.qDev === !0,
	ym = [],
	Mc = {};
zc && (Object.freeze(ym), Object.freeze(Mc), (Error.stackTraceLimit = 9999));
[
	'click',
	'dblclick',
	'contextmenu',
	'auxclick',
	'pointerdown',
	'pointerup',
	'pointermove',
	'pointerover',
	'pointerenter',
	'pointerleave',
	'pointerout',
	'pointercancel',
	'gotpointercapture',
	'lostpointercapture',
	'touchstart',
	'touchend',
	'touchmove',
	'touchcancel',
	'mousedown',
	'mouseup',
	'mousemove',
	'mouseenter',
	'mouseleave',
	'mouseover',
	'mouseout',
	'wheel',
	'gesturestart',
	'gesturechange',
	'gestureend',
	'keydown',
	'keyup',
	'keypress',
	'input',
	'change',
	'search',
	'invalid',
	'beforeinput',
	'select',
	'focusin',
	'focusout',
	'focus',
	'blur',
	'submit',
	'reset',
	'scroll'
].map((e) => `on${e.toLowerCase()}$`);
['useWatch$', 'useClientEffect$', 'useEffect$', 'component$', 'useStyles$', 'useStylesScoped$'].map((e) =>
	e.toLowerCase()
);
function bm(e) {
	if (
		e != null &&
		e.mapping != null &&
		typeof e.mapping == 'object' &&
		e.symbols != null &&
		typeof e.symbols == 'object' &&
		e.bundles != null &&
		typeof e.bundles == 'object'
	)
		return e;
}
function To() {
	let i = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
	return (i += "w.postMessage(u.map(u=>new URL(u,origin)+''));"), (i += 'w.onmessage=()=>{w.terminate()};'), i;
}
function $m(e) {
	const t = { bundles: Es(e).map((n) => n.split('/').pop()) };
	return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`;
}
function Es(e) {
	const t = [],
		n = (s) => {
			if (Array.isArray(s)) for (const i of s) t.includes(i.url) || (t.push(i.url), n(i.imports));
		};
	return n(e), t;
}
function gm(e, t) {
	const n = Rm(e == null ? void 0 : e.implementation),
		s = [];
	return (
		n.prefetchEvent === 'always' && wm(s, t),
		n.linkInsert === 'html-append' && _m(s, t, n),
		n.linkInsert === 'js-append' ? Sm(s, t, n) : n.workerFetchInsert === 'always' && vm(s, t),
		s.length > 0 ? v(Xn, { children: s }) : null
	);
}
function wm(e, t) {
	e.push(v('script', { type: 'module', dangerouslySetInnerHTML: $m(t) }));
}
function _m(e, t, n) {
	const s = Es(t),
		i = n.linkRel || 'prefetch';
	for (const a of s) {
		const l = {};
		(l.href = a),
			(l.rel = i),
			(i === 'prefetch' || i === 'preload') && a.endsWith('.js') && (l.as = 'script'),
			e.push(v('link', l, void 0));
	}
}
function Sm(e, t, n) {
	const s = n.linkRel || 'prefetch';
	let i = '';
	n.workerFetchInsert === 'no-link-support' && (i += 'let supportsLinkRel = true;'),
		(i += `const u=${JSON.stringify(Es(t))};`),
		(i += 'u.map((u,i)=>{'),
		(i += "const l=document.createElement('link');"),
		(i += 'l.setAttribute("href",u);'),
		(i += `l.setAttribute("rel","${s}");`),
		n.workerFetchInsert === 'no-link-support' &&
			((i += 'if(i===0){'),
			(i += 'try{'),
			(i += `supportsLinkRel=l.relList.supports("${s}");`),
			(i += '}catch(e){}'),
			(i += '}')),
		(i += 'document.body.appendChild(l);'),
		(i += '});'),
		n.workerFetchInsert === 'no-link-support' && ((i += 'if(!supportsLinkRel){'), (i += To()), (i += '}')),
		n.workerFetchInsert === 'always' && (i += To()),
		e.push(v('script', { type: 'module', dangerouslySetInnerHTML: i }));
}
function vm(e, t) {
	let n = `const u=${JSON.stringify(Es(t))};`;
	(n += To()), e.push(v('script', { type: 'module', dangerouslySetInnerHTML: n }));
}
function Rm(e) {
	if (typeof e == 'string') {
		switch (e) {
			case 'link-prefetch-html':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'html-append',
						linkRel: 'prefetch',
						workerFetchInsert: null,
						prefetchEvent: null
					}
				);
			case 'link-prefetch':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'js-append',
						linkRel: 'prefetch',
						workerFetchInsert: 'no-link-support',
						prefetchEvent: null
					}
				);
			case 'link-preload-html':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'html-append',
						linkRel: 'preload',
						workerFetchInsert: null,
						prefetchEvent: null
					}
				);
			case 'link-preload':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'js-append',
						linkRel: 'preload',
						workerFetchInsert: 'no-link-support',
						prefetchEvent: null
					}
				);
			case 'link-modulepreload-html':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'html-append',
						linkRel: 'modulepreload',
						workerFetchInsert: null,
						prefetchEvent: null
					}
				);
			case 'link-modulepreload':
				return (
					$t(e, 'linkInsert'),
					{
						linkInsert: 'js-append',
						linkRel: 'modulepreload',
						workerFetchInsert: 'no-link-support',
						prefetchEvent: null
					}
				);
		}
		return (
			$t(e, 'workerFetchInsert'), { linkInsert: null, linkRel: null, workerFetchInsert: 'always', prefetchEvent: null }
		);
	}
	return e && typeof e == 'object' ? e : Em;
}
var Em = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: 'always' };
function $t(e, t) {
	console.warn(
		`The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${t}" interface.`
	);
}
var km = '<!DOCTYPE html>';
async function Tm(e, t) {
	var Y, H, K, U, ee, re;
	let n = t.stream,
		s = 0,
		i = 0,
		a = 0,
		l = 0;
	const u =
			(H = (Y = t.streaming) == null ? void 0 : Y.inOrder) != null
				? H
				: { strategy: 'auto', maximunInitialChunk: 5e4, maximunChunk: 3e4 },
		d = (K = t.containerTagName) != null ? K : 'html',
		f = (U = t.containerAttributes) != null ? U : {};
	let p = '';
	const _ = n,
		g = uo();
	function b() {
		p && (_.write(p), (p = ''), (s = 0), a++, a === 1 && (l = g()));
	}
	function m(G) {
		(s += G.length), (i += G.length), (p += G);
	}
	switch (u.strategy) {
		case 'disabled':
			n = { write: m };
			break;
		case 'direct':
			n = _;
			break;
		case 'auto':
			let G = 0,
				me = !1;
			const rn = (ee = u.maximunChunk) != null ? ee : 0,
				ct = (re = u.maximunInitialChunk) != null ? re : 0;
			n = {
				write(ge) {
					ge === '<!--qkssr-f-->'
						? me || (me = !0)
						: ge === '<!--qkssr-pu-->'
						? G++
						: ge === '<!--qkssr-po-->'
						? G--
						: m(ge),
						G === 0 && (me || s >= (a === 0 ? ct : rn)) && ((me = !1), b());
				}
			};
			break;
	}
	d === 'html'
		? n.write(km)
		: t.qwikLoader
		? (t.qwikLoader.include === void 0 && (t.qwikLoader.include = 'never'),
		  t.qwikLoader.position === void 0 && (t.qwikLoader.position = 'bottom'))
		: (t.qwikLoader = { include: 'never' }),
		t.manifest || console.warn('Missing client manifest, loading symbols in the client might 404');
	const $ = Wc(t),
		R = qm(t.manifest);
	await am(t, R);
	let y = null;
	const S = R == null ? void 0 : R.manifest.injections,
		T = S
			? S.map((G) => {
					var me;
					return v(G.tag, (me = G.attributes) != null ? me : Mc);
			  })
			: void 0,
		E = uo(),
		C = [];
	let I = 0,
		A = 0;
	return (
		await eh(e, {
			stream: n,
			containerTagName: d,
			containerAttributes: f,
			envData: t.envData,
			base: $,
			beforeContent: T,
			beforeClose: async (G, me) => {
				var ln, nr, rr;
				I = E();
				const rn = uo();
				y = await Hl(G, me);
				const ct = JSON.stringify(y.state, void 0, zc ? '  ' : void 0),
					ge = [v('script', { type: 'qwik/json', dangerouslySetInnerHTML: Cm(ct) })];
				if (t.prefetchStrategy !== null) {
					const Q = hm(y, t, R);
					if (Q.length > 0) {
						const le = gm(t.prefetchStrategy, Q);
						le && ge.push(le);
					}
				}
				const sn = !y || y.mode !== 'static',
					on = (nr = (ln = t.qwikLoader) == null ? void 0 : ln.include) != null ? nr : 'auto',
					an = on === 'always' || (on === 'auto' && sn);
				if (an) {
					const Q = fm({
						events: (rr = t.qwikLoader) == null ? void 0 : rr.events,
						debug: t.debug
					});
					ge.push(v('script', { id: 'qwikloader', dangerouslySetInnerHTML: Q }));
				}
				const Et = new Set();
				y.listeners.forEach((Q) => {
					Et.add(JSON.stringify(Q.eventName));
				});
				const kt = Array.from(Et);
				if (kt.length > 0) {
					let Q = `window.qwikevents.push(${kt.join(', ')})`;
					an || (Q = `window.qwikevents||=[];${Q}`), ge.push(v('script', { dangerouslySetInnerHTML: Q }));
				}
				return Am(C, G), (A = rn()), v(Xn, { children: ge });
			}
		}),
		b(),
		{
			prefetchResources: void 0,
			snapshotResult: y,
			flushes: a,
			manifest: R == null ? void 0 : R.manifest,
			size: i,
			timing: { render: I, snapshot: A, firstFlush: l },
			_symbols: C
		}
	);
}
function qm(e) {
	if (!!e) {
		if ('mapper' in e) return e;
		if (((e = bm(e)), e)) {
			const t = {};
			return (
				Object.entries(e.mapping).forEach(([n, s]) => {
					t[jc(n)] = [n, s];
				}),
				{ mapper: t, manifest: e }
			);
		}
	}
}
var Cm = (e) => e.replace(/<(\/?script)/g, '\\x3C$1');
function Am(e, t) {
	var n;
	for (const s of t) {
		const i = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
		i && !e.includes(i) && e.push(i);
	}
}
const Pm = {
		symbols: {
			s_hA9UPaY8sNQ: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'Link_component_a_onClick',
				canonicalFilename: 's_ha9upay8snq',
				hash: 'hA9UPaY8sNQ',
				ctxKind: 'event',
				ctxName: 'onClick$',
				captures: !0,
				parent: 's_mYsiJcA4IBc'
			},
			s_skxgNVWVOT8: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'Link_component_a_onMouseOver',
				canonicalFilename: 's_skxgnvwvot8',
				hash: 'skxgNVWVOT8',
				ctxKind: 'event',
				ctxName: 'onMouseOver$',
				captures: !1,
				parent: 's_mYsiJcA4IBc'
			},
			s_RyZk4CU4DAE: {
				origin: 'routes/flower/index.tsx',
				displayName: 'flower_component__Fragment_input_onInput',
				canonicalFilename: 's_ryzk4cu4dae',
				hash: 'RyZk4CU4DAE',
				ctxKind: 'event',
				ctxName: 'onInput$',
				captures: !0,
				parent: 's_BR18vKXKQkY'
			},
			s_uVE5iM9H73c: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'Link_component_a_onQVisible',
				canonicalFilename: 's_uve5im9h73c',
				hash: 'uVE5iM9H73c',
				ctxKind: 'event',
				ctxName: 'onQVisible$',
				captures: !1,
				parent: 's_mYsiJcA4IBc'
			},
			s_AaAlzKH0KlQ: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'QwikCity_component_useWatch',
				canonicalFilename: 's_aaalzkh0klq',
				hash: 'AaAlzKH0KlQ',
				ctxKind: 'function',
				ctxName: 'useWatch$',
				captures: !0,
				parent: 's_z1nvHyEppoI'
			},
			s_i1I9OIecsVA: {
				origin: 'routes/flower/index.tsx',
				displayName: 'flower_component_useClientEffect',
				canonicalFilename: 's_i1i9oiecsva',
				hash: 'i1I9OIecsVA',
				ctxKind: 'function',
				ctxName: 'useClientEffect$',
				captures: !0,
				parent: 's_BR18vKXKQkY'
			},
			s_BR18vKXKQkY: {
				origin: 'routes/flower/index.tsx',
				displayName: 'flower_component',
				canonicalFilename: 's_br18vkxkqky',
				hash: 'BR18vKXKQkY',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_Dgw0xC71cro: {
				origin: 'components/router-head/router-head.tsx',
				displayName: 'RouterHead_component',
				canonicalFilename: 's_dgw0xc71cro',
				hash: 'Dgw0xC71cro',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_OS0DAMpwL1Y: {
				origin: 'root.tsx',
				displayName: 'root_component',
				canonicalFilename: 's_os0dampwl1y',
				hash: 'OS0DAMpwL1Y',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_Wne0pB9yN4Y: {
				origin: 'routes/layout.tsx',
				displayName: 'layout_component',
				canonicalFilename: 's_wne0pb9yn4y',
				hash: 'Wne0pB9yN4Y',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_dTwuDWxzru4: {
				origin: 'routes/index.tsx',
				displayName: 'routes_component',
				canonicalFilename: 's_dtwudwxzru4',
				hash: 'dTwuDWxzru4',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_mYsiJcA4IBc: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'Link_component',
				canonicalFilename: 's_mysijca4ibc',
				hash: 'mYsiJcA4IBc',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_nd8yk3KO22c: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'RouterOutlet_component',
				canonicalFilename: 's_nd8yk3ko22c',
				hash: 'nd8yk3KO22c',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_waeqwrZa9mI: {
				origin: 'components/header/header.tsx',
				displayName: 'header_component',
				canonicalFilename: 's_waeqwrza9mi',
				hash: 'waeqwrZa9mI',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_z1nvHyEppoI: {
				origin: '../node_modules/@builder.io/qwik-city/index.qwik.mjs',
				displayName: 'QwikCity_component',
				canonicalFilename: 's_z1nvhyeppoi',
				hash: 'z1nvHyEppoI',
				ctxKind: 'function',
				ctxName: 'component$',
				captures: !1,
				parent: null
			},
			s_Nycp3CuLwDc: {
				origin: 'components/header/header.tsx',
				displayName: 'header_component_useStylesScoped',
				canonicalFilename: 's_nycp3culwdc',
				hash: 'Nycp3CuLwDc',
				ctxKind: 'function',
				ctxName: 'useStylesScoped$',
				captures: !1,
				parent: 's_waeqwrZa9mI'
			},
			s_l4dfO6buSG4: {
				origin: 'routes/flower/index.tsx',
				displayName: 'flower_component_useStylesScoped',
				canonicalFilename: 's_l4dfo6busg4',
				hash: 'l4dfO6buSG4',
				ctxKind: 'function',
				ctxName: 'useStylesScoped$',
				captures: !1,
				parent: 's_BR18vKXKQkY'
			}
		},
		mapping: {
			s_hA9UPaY8sNQ: 'q-f46b36cf.js',
			s_skxgNVWVOT8: 'q-f46b36cf.js',
			s_RyZk4CU4DAE: 'q-2d430a13.js',
			s_uVE5iM9H73c: 'q-f46b36cf.js',
			s_AaAlzKH0KlQ: 'q-18f41c23.js',
			s_i1I9OIecsVA: 'q-2d430a13.js',
			s_BR18vKXKQkY: 'q-2d430a13.js',
			s_Dgw0xC71cro: 'q-331c8284.js',
			s_OS0DAMpwL1Y: 'q-4f8aab9c.js',
			s_Wne0pB9yN4Y: 'q-248f1d1a.js',
			s_dTwuDWxzru4: 'q-668f20e5.js',
			s_mYsiJcA4IBc: 'q-f46b36cf.js',
			s_nd8yk3KO22c: 'q-bccd0797.js',
			s_waeqwrZa9mI: 'q-e6d48031.js',
			s_z1nvHyEppoI: 'q-18f41c23.js',
			s_Nycp3CuLwDc: 'q-e6d48031.js',
			s_l4dfO6buSG4: 'q-2d430a13.js'
		},
		bundles: {
			'q-143c7194.js': {
				size: 2180,
				origins: ['node_modules/@builder.io/qwik-city/service-worker.mjs', 'src/routes/service-worker.js']
			},
			'q-18f41c23.js': {
				size: 1489,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				dynamicImports: ['q-7b9ba28e.js'],
				origins: ['@builder.io/qwik/build', 'src/entry_QwikCity.js', 'src/s_aaalzkh0klq.js', 'src/s_z1nvhyeppoi.js'],
				symbols: ['s_AaAlzKH0KlQ', 's_z1nvHyEppoI']
			},
			'q-248f1d1a.js': {
				size: 393,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-e6d48031.js'],
				origins: ['src/components/header/header.js', 'src/entry_layout.js', 'src/s_wne0pb9yn4y.js'],
				symbols: ['s_Wne0pB9yN4Y']
			},
			'q-29035502.js': {
				size: 158,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-248f1d1a.js'],
				origins: ['src/routes/layout.js']
			},
			'q-2d430a13.js': {
				size: 2511,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				origins: [
					'src/entry_flower.js',
					'src/routes/flower/flower.css?used&inline',
					'src/s_br18vkxkqky.js',
					'src/s_i1i9oiecsva.js',
					'src/s_l4dfo6busg4.js',
					'src/s_ryzk4cu4dae.js'
				],
				symbols: ['s_BR18vKXKQkY', 's_i1I9OIecsVA', 's_l4dfO6buSG4', 's_RyZk4CU4DAE']
			},
			'q-331c8284.js': {
				size: 1022,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				origins: ['src/entry_RouterHead.js', 'src/s_dgw0xc71cro.js'],
				symbols: ['s_Dgw0xC71cro']
			},
			'q-4f8aab9c.js': {
				size: 4434,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-18f41c23.js', 'q-331c8284.js', 'q-7b9ba28e.js', 'q-bccd0797.js', 'q-f46b36cf.js'],
				origins: [
					'node_modules/@builder.io/qwik-city/index.qwik.mjs',
					'src/components/router-head/router-head.js',
					'src/entry_root.js',
					'src/s_os0dampwl1y.js'
				],
				symbols: ['s_OS0DAMpwL1Y']
			},
			'q-5ab8e430.js': {
				size: 40110,
				dynamicImports: ['q-4f8aab9c.js'],
				origins: [
					'\0vite/preload-helper',
					'node_modules/@builder.io/qwik/core.min.mjs',
					'src/global.css',
					'src/root.js'
				]
			},
			'q-668f20e5.js': {
				size: 2891,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				origins: ['src/entry_routes.js', 'src/s_dtwudwxzru4.js'],
				symbols: ['s_dTwuDWxzru4']
			},
			'q-7b9ba28e.js': {
				size: 424,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-29035502.js', 'q-8f13ccd6.js', 'q-8fd64bb6.js', 'q-998872b3.js'],
				origins: ['@qwik-city-plan']
			},
			'q-8f13ccd6.js': {
				size: 128,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-143c7194.js'],
				origins: ['@qwik-city-entries']
			},
			'q-8fd64bb6.js': {
				size: 192,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-2d430a13.js'],
				origins: ['src/routes/flower/index.js']
			},
			'q-998872b3.js': {
				size: 196,
				imports: ['q-5ab8e430.js'],
				dynamicImports: ['q-668f20e5.js'],
				origins: ['src/routes/index.js']
			},
			'q-aeed5b9d.js': { size: 58, imports: ['q-5ab8e430.js'] },
			'q-bccd0797.js': {
				size: 269,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				origins: ['src/entry_RouterOutlet.js', 'src/s_nd8yk3ko22c.js'],
				symbols: ['s_nd8yk3KO22c']
			},
			'q-e6d48031.js': {
				size: 4098,
				imports: ['q-5ab8e430.js'],
				origins: [
					'src/components/header/header.css?used&inline',
					'src/components/icons/qwik.js',
					'src/entry_header.js',
					'src/s_nycp3culwdc.js',
					'src/s_waeqwrza9mi.js'
				],
				symbols: ['s_Nycp3CuLwDc', 's_waeqwrZa9mI']
			},
			'q-f46b36cf.js': {
				size: 886,
				imports: ['q-4f8aab9c.js', 'q-5ab8e430.js'],
				origins: [
					'src/entry_Link.js',
					'src/s_ha9upay8snq.js',
					'src/s_mysijca4ibc.js',
					'src/s_skxgnvwvot8.js',
					'src/s_uve5im9h73c.js'
				],
				symbols: ['s_hA9UPaY8sNQ', 's_mYsiJcA4IBc', 's_skxgNVWVOT8', 's_uVE5iM9H73c']
			}
		},
		injections: [
			{
				tag: 'link',
				location: 'head',
				attributes: { rel: 'stylesheet', href: '/build/q-0ea8883c.css' }
			}
		],
		version: '1',
		options: {
			target: 'client',
			buildMode: 'production',
			forceFullBuild: !0,
			entryStrategy: { type: 'smart' }
		},
		platform: {
			qwik: '0.10.0',
			vite: '',
			rollup: '2.78.1',
			env: 'node',
			os: 'darwin',
			node: '16.17.1'
		}
	},
	Im = Be(
		te(() => {
			const e = Fh(),
				t = si();
			return v(Xn, {
				children: [
					v('title', { children: jr(e, 'title') }),
					v('link', {
						rel: 'canonical',
						get href() {
							return t.href;
						},
						[xe]: { href: jr(t, 'href') }
					}),
					v('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
					v('link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }),
					v('link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }),
					v('link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' }),
					v('link', {
						href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
						rel: 'stylesheet'
					}),
					v('meta', { property: 'og:site_name', content: 'Qwik' }),
					v('meta', { name: 'twitter:site', content: '@QwikDev' }),
					v('meta', { name: 'twitter:title', content: 'Qwik' }),
					e.meta.map((n) => v('meta', { ...n })),
					e.links.map((n) => v('link', { ...n })),
					e.styles.map((n) =>
						v('style', {
							...n.props,
							get dangerouslySetInnerHTML() {
								return n.style;
							},
							[xe]: { dangerouslySetInnerHTML: jr(n, 'style') }
						})
					)
				]
			});
		}, 's_Dgw0xC71cro')
	);
const Om = Be(
	te(
		() =>
			v(Zh, {
				children: [
					v('head', { children: [v('meta', { charSet: 'utf-8' }), v(Im, {})] }),
					v('body', { lang: 'en', children: [v(Nh, {}), v(ep, {})] })
				]
			}),
		's_OS0DAMpwL1Y'
	)
);
var xm = Object.defineProperty,
	Lm = Object.defineProperties,
	Dm = Object.getOwnPropertyDescriptors,
	il = Object.getOwnPropertySymbols,
	Bm = Object.prototype.hasOwnProperty,
	Nm = Object.prototype.propertyIsEnumerable,
	al = (e, t, n) => (t in e ? xm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
	Wm = (e, t) => {
		for (var n in t || (t = {})) Bm.call(t, n) && al(e, n, t[n]);
		if (il) for (var n of il(t)) Nm.call(t, n) && al(e, n, t[n]);
		return e;
	},
	jm = (e, t) => Lm(e, Dm(t));
function zm(e) {
	return Tm(
		v(Om, {}),
		jm(Wm({ manifest: Pm }, e), {
			prefetchStrategy: {
				implementation: { linkInsert: null, workerFetchInsert: null, prefetchEvent: 'always' }
			}
		})
	);
}
(function (t) {
	const n = require('node:module'),
		s = n._resolveFilename;
	n._resolveFilename = function (i, a, l, u) {
		if (i[0] !== '.' && i[0] !== '/') {
			const d = i.split('/'),
				f = d[0][0] === '@' ? d[0] + '/' + d[1] : d[0];
			t.includes(f) && (a = module);
		}
		return s(i, a, l, u);
	};
})(['@builder.io/qwik', '@builder.io/qwik/jsx-runtime', '@builder.io/qwik/jsx-dev-runtime']);
const Mm = sm(zm);
let qe = 0;
const F = {
	START_BOUNDARY: qe++,
	HEADER_FIELD_START: qe++,
	HEADER_FIELD: qe++,
	HEADER_VALUE_START: qe++,
	HEADER_VALUE: qe++,
	HEADER_VALUE_ALMOST_DONE: qe++,
	HEADERS_ALMOST_DONE: qe++,
	PART_DATA_START: qe++,
	PART_DATA: qe++,
	END: qe++
};
let ll = 1;
const ot = { PART_BOUNDARY: ll, LAST_BOUNDARY: (ll *= 2) },
	Nr = 10,
	Wr = 13,
	Fm = 32,
	Cn = 45,
	Hm = 58,
	Um = 97,
	Qm = 122,
	Vm = (e) => e | 32,
	gt = () => {};
class Ym {
	constructor(t) {
		(this.index = 0),
			(this.flags = 0),
			(this.onHeaderEnd = gt),
			(this.onHeaderField = gt),
			(this.onHeadersEnd = gt),
			(this.onHeaderValue = gt),
			(this.onPartBegin = gt),
			(this.onPartData = gt),
			(this.onPartEnd = gt),
			(this.boundaryChars = {}),
			(t =
				`\r
--` + t);
		const n = new Uint8Array(t.length);
		for (let s = 0; s < t.length; s++) (n[s] = t.charCodeAt(s)), (this.boundaryChars[n[s]] = !0);
		(this.boundary = n), (this.lookbehind = new Uint8Array(this.boundary.length + 8)), (this.state = F.START_BOUNDARY);
	}
	write(t) {
		let n = 0;
		const s = t.length;
		let i = this.index,
			{ lookbehind: a, boundary: l, boundaryChars: u, index: d, state: f, flags: p } = this;
		const _ = this.boundary.length,
			g = _ - 1,
			b = t.length;
		let m, $;
		const R = (E) => {
				this[E + 'Mark'] = n;
			},
			y = (E) => {
				delete this[E + 'Mark'];
			},
			S = (E, C, I, A) => {
				(C === void 0 || C !== I) && this[E](A && A.subarray(C, I));
			},
			T = (E, C) => {
				const I = E + 'Mark';
				I in this && (C ? (S(E, this[I], n, t), delete this[I]) : (S(E, this[I], t.length, t), (this[I] = 0)));
			};
		for (n = 0; n < s; n++)
			switch (((m = t[n]), f)) {
				case F.START_BOUNDARY:
					if (d === l.length - 2) {
						if (m === Cn) p |= ot.LAST_BOUNDARY;
						else if (m !== Wr) return;
						d++;
						break;
					} else if (d - 1 === l.length - 2) {
						if (p & ot.LAST_BOUNDARY && m === Cn) (f = F.END), (p = 0);
						else if (!(p & ot.LAST_BOUNDARY) && m === Nr) (d = 0), S('onPartBegin'), (f = F.HEADER_FIELD_START);
						else return;
						break;
					}
					m !== l[d + 2] && (d = -2), m === l[d + 2] && d++;
					break;
				case F.HEADER_FIELD_START:
					(f = F.HEADER_FIELD), R('onHeaderField'), (d = 0);
				case F.HEADER_FIELD:
					if (m === Wr) {
						y('onHeaderField'), (f = F.HEADERS_ALMOST_DONE);
						break;
					}
					if ((d++, m === Cn)) break;
					if (m === Hm) {
						if (d === 1) return;
						T('onHeaderField', !0), (f = F.HEADER_VALUE_START);
						break;
					}
					if ((($ = Vm(m)), $ < Um || $ > Qm)) return;
					break;
				case F.HEADER_VALUE_START:
					if (m === Fm) break;
					R('onHeaderValue'), (f = F.HEADER_VALUE);
				case F.HEADER_VALUE:
					m === Wr && (T('onHeaderValue', !0), S('onHeaderEnd'), (f = F.HEADER_VALUE_ALMOST_DONE));
					break;
				case F.HEADER_VALUE_ALMOST_DONE:
					if (m !== Nr) return;
					f = F.HEADER_FIELD_START;
					break;
				case F.HEADERS_ALMOST_DONE:
					if (m !== Nr) return;
					S('onHeadersEnd'), (f = F.PART_DATA_START);
					break;
				case F.PART_DATA_START:
					(f = F.PART_DATA), R('onPartData');
				case F.PART_DATA:
					if (((i = d), d === 0)) {
						for (n += g; n < b && !(t[n] in u); ) n += _;
						(n -= g), (m = t[n]);
					}
					if (d < l.length) l[d] === m ? (d === 0 && T('onPartData', !0), d++) : (d = 0);
					else if (d === l.length)
						d++, m === Wr ? (p |= ot.PART_BOUNDARY) : m === Cn ? (p |= ot.LAST_BOUNDARY) : (d = 0);
					else if (d - 1 === l.length)
						if (p & ot.PART_BOUNDARY) {
							if (((d = 0), m === Nr)) {
								(p &= ~ot.PART_BOUNDARY), S('onPartEnd'), S('onPartBegin'), (f = F.HEADER_FIELD_START);
								break;
							}
						} else p & ot.LAST_BOUNDARY && m === Cn ? (S('onPartEnd'), (f = F.END), (p = 0)) : (d = 0);
					if (d > 0) a[d - 1] = m;
					else if (i > 0) {
						const E = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
						S('onPartData', 0, i, E), (i = 0), R('onPartData'), n--;
					}
					break;
				case F.END:
					break;
				default:
					throw new Error(`Unexpected state entered: ${f}`);
			}
		T('onHeaderField'), T('onHeaderValue'), T('onPartData'), (this.index = d), (this.state = f), (this.flags = p);
	}
	end() {
		if (
			(this.state === F.HEADER_FIELD_START && this.index === 0) ||
			(this.state === F.PART_DATA && this.index === this.boundary.length)
		)
			this.onPartEnd();
		else if (this.state !== F.END) throw new Error('MultipartParser.end(): stream ended unexpectedly');
	}
}
function Km(e) {
	const t = e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
	if (!t) return;
	const n = t[2] || t[3] || '';
	let s = n.slice(n.lastIndexOf('\\') + 1);
	return (s = s.replace(/%22/g, '"')), (s = s.replace(/&#(\d{4});/g, (i, a) => String.fromCharCode(a))), s;
}
async function Gm(e, t) {
	if (!/multipart/i.test(t)) throw new TypeError('Failed to fetch');
	const n = t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
	if (!n) throw new TypeError('no or bad content-type header, no multipart boundary');
	const s = new Ym(n[1] || n[2]);
	let i, a, l, u, d, f;
	const p = [],
		_ = new os(),
		g = (y) => {
			l += R.decode(y, { stream: !0 });
		},
		b = (y) => {
			p.push(y);
		},
		m = () => {
			const y = new qc(p, f, { type: d });
			_.append(u, y);
		},
		$ = () => {
			_.append(u, l);
		},
		R = new TextDecoder('utf-8');
	R.decode(),
		(s.onPartBegin = function () {
			(s.onPartData = g),
				(s.onPartEnd = $),
				(i = ''),
				(a = ''),
				(l = ''),
				(u = ''),
				(d = ''),
				(f = null),
				(p.length = 0);
		}),
		(s.onHeaderField = function (y) {
			i += R.decode(y, { stream: !0 });
		}),
		(s.onHeaderValue = function (y) {
			a += R.decode(y, { stream: !0 });
		}),
		(s.onHeaderEnd = function () {
			if (((a += R.decode()), (i = i.toLowerCase()), i === 'content-disposition')) {
				const y = a.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
				y && (u = y[2] || y[3] || ''), (f = Km(a)), f && ((s.onPartData = b), (s.onPartEnd = m));
			} else i === 'content-type' && (d = a);
			(a = ''), (i = '');
		});
	for await (const y of e) s.write(y);
	return s.end(), _;
}
const Zm = Object.freeze(
	Object.defineProperty({ __proto__: null, toFormData: Gm }, Symbol.toStringTag, {
		value: 'Module'
	})
);
exports.default = Mm;
