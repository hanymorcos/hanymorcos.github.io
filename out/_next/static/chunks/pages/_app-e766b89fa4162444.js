;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1530: function (b, h) {
      var r, c, d, s, t, e, i, j, k, l, f, m, n, o, p, q, a
      ;(d = 'undefined' != typeof window ? window : this),
        (e = '0.5.4'),
        (i = 'hasOwnProperty'),
        (j = /[\.\/]/),
        (k = /\s*,\s*/),
        (l = function (a, b) {
          return a - b
        }),
        (f = { n: {} }),
        (m = function () {
          for (var a = 0, b = this.length; a < b; a++)
            if (void 0 !== this[a]) return this[a]
        }),
        (n = function () {
          for (var a = this.length; --a; )
            if (void 0 !== this[a]) return this[a]
        }),
        (o = Object.prototype.toString),
        (p = String),
        (q =
          Array.isArray ||
          function (a) {
            return a instanceof Array || '[object Array]' == o.call(a)
          }),
        ((a = function (o, h) {
          var b,
            p = t,
            i = Array.prototype.slice.call(arguments, 2),
            e = a.listeners(o),
            j = 0,
            f = [],
            k = {},
            d = [],
            r = s
          ;(d.firstDefined = m), (d.lastDefined = n), (s = o), (t = 0)
          for (var c = 0, q = e.length; c < q; c++)
            'zIndex' in e[c] &&
              (f.push(e[c].zIndex), e[c].zIndex < 0 && (k[e[c].zIndex] = e[c]))
          for (f.sort(l); f[j] < 0; )
            if (((b = k[f[j++]]), d.push(b.apply(h, i)), t)) return (t = p), d
          for (c = 0; c < q; c++)
            if ('zIndex' in (b = e[c])) {
              if (b.zIndex == f[j]) {
                if ((d.push(b.apply(h, i)), t)) break
                do if (((b = k[f[++j]]) && d.push(b.apply(h, i)), t)) break
                while (b)
              } else k[b.zIndex] = b
            } else if ((d.push(b.apply(h, i)), t)) break
          return (t = p), (s = r), d
        })._events = f),
        (a.listeners = function (c) {
          var d,
            m,
            e,
            a,
            n,
            b,
            o,
            h,
            p = q(c) ? c : c.split(j),
            i = f,
            k = [i],
            l = []
          for (a = 0, n = p.length; a < n; a++) {
            for (b = 0, h = [], o = k.length; b < o; b++)
              for (m = [(i = k[b].n)[p[a]], i['*']], e = 2; e--; )
                (d = m[e]) && (h.push(d), (l = l.concat(d.f || [])))
            k = h
          }
          return l
        }),
        (a.separator = function (a) {
          j = a
            ? RegExp(
                (a = '[' + (a = p(a).replace(/(?=[\.\^\]\[\-])/g, '\\')) + ']')
              )
            : /[\.\/]/
        }),
        (a.on = function (a, d) {
          if ('function' != typeof d) return function () {}
          for (
            var c = q(a) ? (q(a[0]) ? a : [a]) : p(a).split(k),
              b = 0,
              e = c.length;
            b < e;
            b++
          )
            !(function (e) {
              for (
                var i, c = q(e) ? e : p(e).split(j), a = f, b = 0, h = c.length;
                b < h;
                b++
              )
                a =
                  ((a = a.n).hasOwnProperty(c[b]) && a[c[b]]) ||
                  (a[c[b]] = { n: {} })
              for (b = 0, a.f = a.f || [], h = a.f.length; b < h; b++)
                if (a.f[b] == d) {
                  i = !0
                  break
                }
              i || a.f.push(d)
            })(c[b])
          return function (a) {
            ;+a == +a && (d.zIndex = +a)
          }
        }),
        (a.f = function (b) {
          var c = [].slice.call(arguments, 1)
          return function () {
            a.apply(
              null,
              [b, null].concat(c).concat([].slice.call(arguments, 0))
            )
          }
        }),
        (a.stop = function () {
          t = 1
        }),
        (a.nt = function (a) {
          var b = q(s) ? s.join('.') : s
          return a ? RegExp('(?:\\.|\\/|^)' + a + '(?:\\.|\\/|$)').test(b) : b
        }),
        (a.nts = function () {
          return q(s) ? s : s.split(j)
        }),
        (a.off = a.unbind =
          function (h, r) {
            if (!h) {
              a._events = f = { n: {} }
              return
            }
            var l = q(h) ? (q(h[0]) ? h : [h]) : p(h).split(k)
            if (l.length > 1) {
              for (var c = 0, m = l.length; c < m; c++) a.off(l[c], r)
              return
            }
            l = q(h) ? h : p(h).split(j)
            var b,
              d,
              o,
              c,
              m,
              e,
              s,
              n = [f],
              t = []
            for (c = 0, m = l.length; c < m; c++)
              for (e = 0; e < n.length; e += o.length - 2) {
                if (((o = [e, 1]), (b = n[e].n), '*' != l[c]))
                  b[l[c]] && (o.push(b[l[c]]), t.unshift({ n: b, name: l[c] }))
                else
                  for (d in b)
                    b[i](d) && (o.push(b[d]), t.unshift({ n: b, name: d }))
                n.splice.apply(n, o)
              }
            for (c = 0, m = n.length; c < m; c++)
              for (b = n[c]; b.n; ) {
                if (r) {
                  if (b.f) {
                    for (e = 0, s = b.f.length; e < s; e++)
                      if (b.f[e] == r) {
                        b.f.splice(e, 1)
                        break
                      }
                    b.f.length || delete b.f
                  }
                  for (d in b.n)
                    if (b.n[i](d) && b.n[d].f) {
                      var u = b.n[d].f
                      for (e = 0, s = u.length; e < s; e++)
                        if (u[e] == r) {
                          u.splice(e, 1)
                          break
                        }
                      u.length || delete b.n[d].f
                    }
                } else
                  for (d in (delete b.f, b.n))
                    b.n[i](d) && b.n[d].f && delete b.n[d].f
                b = b.n
              }
            prune: for (c = 0, m = t.length; c < m; c++) {
              for (d in (b = t[c]).n[b.name].f) continue prune
              for (d in b.n[b.name].n) continue prune
              delete b.n[b.name]
            }
          }),
        (a.once = function (b, d) {
          var c = function () {
            return a.off(b, c), d.apply(this, arguments)
          }
          return a.on(b, c)
        }),
        (a.version = e),
        (a.toString = function () {
          return 'You are running Eve ' + e
        }),
        (d.eve = a),
        b.exports
          ? (b.exports = a)
          : void 0 !==
              (c = function () {
                return a
              }.apply(h, [])) && (b.exports = c)
    },
    1752: function (a, c, b) {
      a.exports = b(8027)
    },
    3454: function (d, e, a) {
      'use strict'
      var b, c
      d.exports =
        (null == (b = a.g.process) ? void 0 : b.env) &&
        'object' == typeof (null == (c = a.g.process) ? void 0 : c.env)
          ? a.g.process
          : a(7663)
    },
    6840: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return c(9511)
        },
      ])
    },
    2985: function (b, a) {
      'use strict'
      a.Z = {
        linkedin: '',
        medium: '',
        hackernoon: '',
        twitter: '',
        github: 'https://github.com/hanymorcos',
        npm: '',
        home: 'https://hanymorcos.github.io',
        heroImage:
          'https://hanymorcos.github.io/optimized/raw/social-media.png',
        description:
          'Hany Morcos is a software engineer, UX advocate, and creator who is dedicated to Web engineering. His background in Human Centered Computing has led him to work with startups and public companies across North America, Asia, and Europe. He is passionate about meeting business trajectory with user journey and utilizing engineering architecture and performance monitoring to provide optimal user experience.',
      }
    },
    4365: function (e, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return l
        },
      })
      var f = a(6042),
        h = a(9396),
        i = a(5893)
      a(7294)
      var c = a(1664),
        j = a.n(c),
        d = a(5566),
        k = a.n(d)
      function l(b) {
        var a = b.href,
          c = b.className,
          d = b.children,
          e = (function (a, d) {
            if (null == a) return {}
            var b,
              c,
              e = (function (c, f) {
                if (null == c) return {}
                var a,
                  b,
                  d = {},
                  e = Object.keys(c)
                for (b = 0; b < e.length; b++)
                  (a = e[b]), f.indexOf(a) >= 0 || (d[a] = c[a])
                return d
              })(a, d)
            if (Object.getOwnPropertySymbols) {
              var f = Object.getOwnPropertySymbols(a)
              for (c = 0; c < f.length; c++)
                (b = f[c]),
                  !(d.indexOf(b) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(a, b) &&
                    (e[b] = a[b])
            }
            return e
          })(b, ['href', 'className', 'children'])
        return a && (a.startsWith('/') || a.startsWith('#'))
          ? (0, i.jsx)(j(), {
              href: a,
              children: (0, i.jsx)(
                'a',
                (0, h.Z)(
                  (0, f.Z)(
                    { className: ''.concat(k().anchor, ' ').concat(c) },
                    e
                  ),
                  { children: d }
                )
              ),
            })
          : (0, i.jsx)(
              'a',
              (0, h.Z)(
                (0, f.Z)(
                  {
                    className: ''.concat(k().anchor, ' ').concat(c),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: a,
                  },
                  e
                ),
                { children: d }
              )
            )
      }
    },
    1210: function (b, a) {
      'use strict'
      function c(a, b, c, d) {
        return !1
      }
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.getDomainLocale = c),
        ('function' == typeof a.default ||
          ('object' == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, '__esModule', { value: !0 }),
          Object.assign(a.default, a),
          (b.exports = a.default))
    },
    8418: function (e, a, b) {
      'use strict'
      var c,
        h = b(4941).Z
      b(5753).default,
        Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = void 0)
      var d = ((c = b(7294)), c && c.__esModule ? c : { default: c }),
        i = b(6273),
        j = b(2725),
        k = b(3462),
        l = b(1018),
        m = b(7190),
        n = b(1210),
        o = b(8684),
        p = void 0 !== d.default.useTransition,
        q = {}
      function r(a, c, d, b) {
        if (a && i.isLocalURL(c)) {
          a.prefetch(c, d, b).catch(function (a) {})
          var e = b && void 0 !== b.locale ? b.locale : a && a.locale
          q[c + '%' + d + (e ? '%' + e : '')] = !0
        }
      }
      var f = d.default.forwardRef(function (a, B) {
        var c,
          e,
          C = a.href,
          D = a.as,
          E = a.children,
          F = a.prefetch,
          G = a.passHref,
          Q = a.replace,
          R = a.shallow,
          S = a.scroll,
          t = a.locale,
          T = a.onClick,
          U = a.onMouseEnter,
          x = a.legacyBehavior,
          f = void 0 === x ? !0 !== Boolean(!1) : x,
          H = (function (b, f) {
            if (null == b) return {}
            var c,
              a,
              d = {},
              e = Object.keys(b)
            for (a = 0; a < e.length; a++)
              f.indexOf((c = e[a])) >= 0 || (d[c] = b[c])
            return d
          })(a, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'legacyBehavior',
          ])
        ;(c = E),
          f &&
            ('string' == typeof c || 'number' == typeof c) &&
            (c = d.default.createElement('a', null, c))
        var I = !1 !== F,
          J = h(p ? d.default.useTransition() : [], 2),
          V = J[1],
          b = d.default.useContext(k.RouterContext),
          y = d.default.useContext(l.AppRouterContext)
        y && (b = y)
        var z = d.default.useMemo(
            function () {
              var a = h(i.resolveHref(b, C, !0), 2),
                c = a[0],
                d = a[1]
              return { href: c, as: D ? i.resolveHref(b, D) : d || c }
            },
            [b, C, D]
          ),
          u = z.href,
          s = z.as,
          W = d.default.useRef(u),
          X = d.default.useRef(s)
        f && (e = d.default.Children.only(c))
        var K = f ? e && 'object' == typeof e && e.ref : B,
          v = h(m.useIntersection({ rootMargin: '200px' }), 3),
          L = v[0],
          M = v[1],
          N = v[2],
          O = d.default.useCallback(
            function (a) {
              ;(X.current !== s || W.current !== u) &&
                (N(), (X.current = s), (W.current = u)),
                L(a),
                K &&
                  ('function' == typeof K
                    ? K(a)
                    : 'object' == typeof K && (K.current = a))
            },
            [s, K, u, N, L]
          )
        d.default.useEffect(
          function () {
            var c = M && I && i.isLocalURL(u),
              a = void 0 !== t ? t : b && b.locale,
              d = q[u + '%' + s + (a ? '%' + a : '')]
            c && !d && r(b, u, s, { locale: a })
          },
          [s, u, M, t, I, b]
        )
        var w = {
          ref: O,
          onClick: function (a) {
            f || 'function' != typeof T || T(a),
              f &&
                e.props &&
                'function' == typeof e.props.onClick &&
                e.props.onClick(a),
              a.defaultPrevented ||
                (function (a, e, d, f, h, j, k, l, b) {
                  if (
                    'A' !== a.currentTarget.nodeName.toUpperCase() ||
                    ((!(n = (m = a).currentTarget.target) || '_self' === n) &&
                      !m.metaKey &&
                      !m.ctrlKey &&
                      !m.shiftKey &&
                      !m.altKey &&
                      (!m.nativeEvent || 2 !== m.nativeEvent.which) &&
                      i.isLocalURL(d))
                  ) {
                    a.preventDefault()
                    var m,
                      n,
                      c = function () {
                        e[h ? 'replace' : 'push'](d, f, {
                          shallow: j,
                          locale: l,
                          scroll: k,
                        })
                      }
                    b ? b(c) : c()
                  }
                })(a, b, u, s, Q, R, S, t, y ? V : void 0)
          },
          onMouseEnter: function (a) {
            f || 'function' != typeof U || U(a),
              f &&
                e.props &&
                'function' == typeof e.props.onMouseEnter &&
                e.props.onMouseEnter(a),
              i.isLocalURL(u) && r(b, u, s, { priority: !0 })
          },
        }
        if (!f || G || ('a' === e.type && !('href' in e.props))) {
          var A = void 0 !== t ? t : b && b.locale,
            P =
              b &&
              b.isLocaleDomain &&
              n.getDomainLocale(s, A, b.locales, b.domainLocales)
          w.href = P || o.addBasePath(j.addLocale(s, A, b && b.defaultLocale))
        }
        return f
          ? d.default.cloneElement(e, w)
          : d.default.createElement('a', Object.assign({}, H, w), c)
      })
      ;(a.default = f),
        ('function' == typeof a.default ||
          ('object' == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, '__esModule', { value: !0 }),
          Object.assign(a.default, a),
          (e.exports = a.default))
    },
    7190: function (c, a, b) {
      'use strict'
      var d = b(4941).Z
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.useIntersection = function (a) {
          var k = a.rootRef,
            l = a.rootMargin,
            m = a.disabled || !h,
            q = e.useRef(),
            b = d(e.useState(!1), 2),
            c = b[0],
            r = b[1],
            j = d(e.useState(null), 2),
            n = j[0],
            o = j[1]
          e.useEffect(
            function () {
              if (h) {
                if (
                  (q.current && (q.current(), (q.current = void 0)), !m && !c)
                )
                  return (
                    n &&
                      n.tagName &&
                      (q.current = i(
                        n,
                        function (a) {
                          return a && r(a)
                        },
                        { root: null == k ? void 0 : k.current, rootMargin: l }
                      )),
                    function () {
                      null == q.current || q.current(), (q.current = void 0)
                    }
                  )
              } else if (!c) {
                var a = f.requestIdleCallback(function () {
                  return r(!0)
                })
                return function () {
                  return f.cancelIdleCallback(a)
                }
              }
            },
            [n, m, l, k, c]
          )
          var p = e.useCallback(function () {
            r(!1)
          }, [])
          return [o, c, p]
        })
      var e = b(7294),
        f = b(9311),
        h = 'function' == typeof IntersectionObserver
      function i(b, c, d) {
        var a = l(d),
          h = a.id,
          e = a.observer,
          f = a.elements
        return (
          f.set(b, c),
          e.observe(b),
          function () {
            if ((f.delete(b), e.unobserve(b), 0 === f.size)) {
              e.disconnect(), j.delete(h)
              var a = k.findIndex(function (a) {
                return a.root === h.root && a.margin === h.margin
              })
              a > -1 && k.splice(a, 1)
            }
          }
        )
      }
      var j = new Map(),
        k = []
      function l(b) {
        var a,
          c = { root: b.root || null, margin: b.rootMargin || '' },
          d = k.find(function (a) {
            return a.root === c.root && a.margin === c.margin
          })
        if (d && (a = j.get(d))) return a
        var e = new Map(),
          f = new IntersectionObserver(function (a) {
            a.forEach(function (a) {
              var b = e.get(a.target),
                c = a.isIntersecting || a.intersectionRatio > 0
              b && c && b(c)
            })
          }, b)
        return (
          (a = { id: c, observer: f, elements: e }), k.push(c), j.set(c, a), a
        )
      }
      ;('function' == typeof a.default ||
        ('object' == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, '__esModule', { value: !0 }),
        Object.assign(a.default, a),
        (c.exports = a.default))
    },
    1018: function (i, a, d) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.FullAppTreeContext = a.AppTreeContext = a.AppRouterContext = void 0)
      var b,
        c = ((b = d(7294)), b && b.__esModule ? b : { default: b }),
        e = c.default.createContext(null)
      a.AppRouterContext = e
      var f = c.default.createContext(null)
      a.AppTreeContext = f
      var h = c.default.createContext(null)
      a.FullAppTreeContext = h
    },
    9511: function (t, h, a) {
      'use strict'
      a.r(h),
        a.d(h, {
          default: function () {
            return aj
          },
        })
      var u = a(6042),
        v = a(5893),
        d = a(7294)
      a(5112), a(3263), a(906), a(39)
      var i = a(9008),
        w = a.n(i),
        j = a(9693),
        x = a.n(j),
        y = a(2985),
        z = {
          nextjs: 'https://nextjs.org',
          cssModule: 'https://github.com/css-modules/css-modules',
          reactIcons: 'https://react-icons.github.io/react-icons',
          mdx: 'https://mdxjs.com',
          contentlayer: 'https://github.com/contentlayerdev/contentlayer',
          unified: 'https://unifiedjs.com',
        },
        A = a(6893),
        B = a(4365)
      function C() {
        return (0, v.jsxs)('footer', {
          className: x().footer,
          children: [
            (0, v.jsxs)('div', {
              className: x().wrap,
              children: [
                (0, v.jsxs)('div', {
                  className: x().resources,
                  children: [
                    (0, v.jsxs)('p', {
                      children: [
                        (0, v.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: x().emoji,
                          children: '\uD83D\uDC9A',
                        }),
                        'This site is built with',
                      ],
                    }),
                    (0, v.jsx)(B.Z, { href: z.nextjs, children: 'Next.js' }),
                    (0, v.jsx)(B.Z, {
                      href: z.reactIcons,
                      children: 'React Icons',
                    }),
                    (0, v.jsx)(B.Z, { href: z.mdx, children: 'MDX' }),
                    (0, v.jsx)(B.Z, { href: z.unified, children: 'unified' }),
                    (0, v.jsx)(B.Z, {
                      href: z.contentlayer,
                      children: 'Contentlayer',
                    }),
                  ],
                }),
                (0, v.jsxs)('div', {
                  className: x().contact,
                  children: [
                    (0, v.jsxs)('p', {
                      children: [
                        (0, v.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: x().emoji,
                          children: '\uD83E\uDD84',
                        }),
                        'Where to find me',
                      ],
                    }),
                    (0, v.jsx)(B.Z, {
                      href: y.Z.linkedin,
                      children: 'Linkedin',
                    }),
                    (0, v.jsx)(B.Z, { href: y.Z.github, children: 'GitHub' }),
                    (0, v.jsx)(B.Z, { href: y.Z.twitter, children: 'Twitter' }),
                    (0, v.jsx)(B.Z, { href: y.Z.medium, children: 'Medium' }),
                    (0, v.jsx)(B.Z, {
                      href: y.Z.hackernoon,
                      children: 'Hacker Noon',
                    }),
                    (0, v.jsxs)(B.Z, {
                      href: '/rss.xml',
                      children: ['RSS Feed ', (0, v.jsx)(A.xaD, {})],
                    }),
                  ],
                }),
                (0, v.jsxs)('div', {
                  className: x().sitemap,
                  children: [
                    (0, v.jsxs)('p', {
                      children: [
                        (0, v.jsx)('span', {
                          role: 'img',
                          'aria-label': 'build with love',
                          className: x().emoji,
                          children: '\uD83D\uDDFA',
                        }),
                        'Sitemap',
                      ],
                    }),
                    (0, v.jsx)(B.Z, { href: '/', children: 'Home' }),
                    (0, v.jsx)(B.Z, {
                      href: '/articles',
                      children: 'Articles',
                    }),
                    (0, v.jsx)(B.Z, { href: '/work', children: 'Work' }),
                    (0, v.jsx)(B.Z, { href: '/now', children: 'Now' }),
                    (0, v.jsx)(B.Z, {
                      href: '/expertise',
                      children: 'Expertise',
                    }),
                    (0, v.jsx)(B.Z, { href: '/contact', children: 'Contact' }),
                  ],
                }),
              ],
            }),
            (0, v.jsxs)('div', {
              className: x().copyright,
              children: [
                '\xa9 ',
                new Date().getFullYear(),
                ' ',
                (0, v.jsx)(B.Z, {
                  href: y.Z.linkedin,
                  children: 'Hany Morcos',
                }),
              ],
            }),
          ],
        })
      }
      var D = a(3190),
        k = a(3577),
        E = a.n(k),
        F = a(5155)
      function G(c, f) {
        if (null == c) return {}
        var a,
          b,
          d = {},
          e = Object.keys(c)
        for (b = 0; b < e.length; b++)
          (a = e[b]), f.indexOf(a) >= 0 || (d[a] = c[a])
        return d
      }
      function H() {
        return (H =
          Object.assign ||
          function (d) {
            for (var a = 1; a < arguments.length; a++) {
              var b = arguments[a]
              for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
          }).apply(this, arguments)
      }
      function I(a, b) {
        return (I =
          Object.setPrototypeOf ||
          function (a, b) {
            return (a.__proto__ = b), a
          })(a, b)
      }
      function J(a, b) {
        ;(a.prototype = Object.create(b.prototype)),
          (a.prototype.constructor = a),
          I(a, b)
      }
      var l = d.createContext(null)
      function K(a, c) {
        var b = Object.create(null)
        return (
          a &&
            d.Children.map(a, function (a) {
              return a
            }).forEach(function (e) {
              var a
              b[e.key] = ((a = e), c && (0, d.isValidElement)(a) ? c(a) : a)
            }),
          b
        )
      }
      function L(c, a, b) {
        return null != b[a] ? b[a] : c.props[a]
      }
      var M =
          Object.values ||
          function (a) {
            return Object.keys(a).map(function (b) {
              return a[b]
            })
          },
        e = (function (c) {
          function a(b, d) {
            var a,
              e = (a = c.call(this, b, d) || this).handleExited.bind(
                (function (a) {
                  if (void 0 === a)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return a
                })(a)
              )
            return (
              (a.state = {
                contextValue: { isMounting: !0 },
                handleExited: e,
                firstRender: !0,
              }),
              a
            )
          }
          J(a, c)
          var b = a.prototype
          return (
            (b.componentDidMount = function () {
              ;(this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } })
            }),
            (b.componentWillUnmount = function () {
              this.mounted = !1
            }),
            (a.getDerivedStateFromProps = function (b, a) {
              var c,
                k,
                e,
                f,
                l,
                h,
                i,
                m = a.children,
                j = a.handleExited,
                n = a.firstRender
              return {
                children: n
                  ? ((c = b),
                    (k = j),
                    K(c.children, function (a) {
                      return (0,
                      d.cloneElement)(a, { onExited: k.bind(null, a), in: !0, appear: L(a, 'appear', c), enter: L(a, 'enter', c), exit: L(a, 'exit', c) })
                    }))
                  : ((e = b),
                    (f = m),
                    (l = j),
                    (h = K(e.children)),
                    Object.keys(
                      (i = (function (h, e) {
                        function i(a) {
                          return a in e ? e[a] : h[a]
                        }
                        ;(h = h || {}), (e = e || {})
                        var a,
                          d = Object.create(null),
                          b = []
                        for (var j in h)
                          j in e
                            ? b.length && ((d[j] = b), (b = []))
                            : b.push(j)
                        var f = {}
                        for (var c in e) {
                          if (d[c])
                            for (a = 0; a < d[c].length; a++) {
                              var k = d[c][a]
                              f[d[c][a]] = i(k)
                            }
                          f[c] = i(c)
                        }
                        for (a = 0; a < b.length; a++) f[b[a]] = i(b[a])
                        return f
                      })(f, h))
                    ).forEach(function (b) {
                      var a = i[b]
                      if ((0, d.isValidElement)(a)) {
                        var j = b in f,
                          k = b in h,
                          c = f[b],
                          m = (0, d.isValidElement)(c) && !c.props.in
                        k && (!j || m)
                          ? (i[b] = (0, d.cloneElement)(a, {
                              onExited: l.bind(null, a),
                              in: !0,
                              exit: L(a, 'exit', e),
                              enter: L(a, 'enter', e),
                            }))
                          : k || !j || m
                          ? k &&
                            j &&
                            (0, d.isValidElement)(c) &&
                            (i[b] = (0, d.cloneElement)(a, {
                              onExited: l.bind(null, a),
                              in: c.props.in,
                              exit: L(a, 'exit', e),
                              enter: L(a, 'enter', e),
                            }))
                          : (i[b] = (0, d.cloneElement)(a, { in: !1 }))
                      }
                    }),
                    i),
                firstRender: !1,
              }
            }),
            (b.handleExited = function (a, b) {
              var c = K(this.props.children)
              a.key in c ||
                (a.props.onExited && a.props.onExited(b),
                this.mounted &&
                  this.setState(function (c) {
                    var b = H({}, c.children)
                    return delete b[a.key], { children: b }
                  }))
            }),
            (b.render = function () {
              var b = this.props,
                c = b.component,
                h = b.childFactory,
                a = G(b, ['component', 'childFactory']),
                e = this.state.contextValue,
                f = M(this.state.children).map(h)
              return (delete a.appear,
              delete a.enter,
              delete a.exit,
              null === c)
                ? d.createElement(l.Provider, { value: e }, f)
                : d.createElement(
                    l.Provider,
                    { value: e },
                    d.createElement(c, a, f)
                  )
            }),
            a
          )
        })(d.Component)
      ;(e.propTypes = {}),
        (e.defaultProps = {
          component: 'div',
          childFactory: function (a) {
            return a
          },
        })
      var N = e
      function O(a, b) {
        return a
          .replace(RegExp('(^|\\s)' + b + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      var P = a(3935),
        Q = { disabled: !1 },
        m = 'unmounted',
        n = 'exited',
        o = 'entering',
        p = 'entered',
        q = 'exiting',
        b = (function (c) {
          function b(a, e) {
            b = c.call(this, a, e) || this
            var b,
              d,
              f = e,
              h = f && !f.isMounting ? a.enter : a.appear
            return (
              (b.appearStatus = null),
              a.in
                ? h
                  ? ((d = n), (b.appearStatus = o))
                  : (d = p)
                : (d = a.unmountOnExit || a.mountOnEnter ? m : n),
              (b.state = { status: d }),
              (b.nextCallback = null),
              b
            )
          }
          J(b, c),
            (b.getDerivedStateFromProps = function (a, b) {
              return a.in && b.status === m ? { status: n } : null
            })
          var a = b.prototype
          return (
            (a.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus)
            }),
            (a.componentDidUpdate = function (c) {
              var b = null
              if (c !== this.props) {
                var a = this.state.status
                this.props.in
                  ? a !== o && a !== p && (b = o)
                  : (a === o || a === p) && (b = q)
              }
              this.updateStatus(!1, b)
            }),
            (a.componentWillUnmount = function () {
              this.cancelNextCallback()
            }),
            (a.getTimeouts = function () {
              var c,
                b,
                d,
                a = this.props.timeout
              return (
                (c = b = d = a),
                null != a &&
                  'number' != typeof a &&
                  ((c = a.exit),
                  (b = a.enter),
                  (d = void 0 !== a.appear ? a.appear : b)),
                { exit: c, enter: b, appear: d }
              )
            }),
            (a.updateStatus = function (a, b) {
              void 0 === a && (a = !1),
                null !== b
                  ? (this.cancelNextCallback(),
                    b === o ? this.performEnter(a) : this.performExit())
                  : this.props.unmountOnExit &&
                    this.state.status === n &&
                    this.setState({ status: m })
            }),
            (a.performEnter = function (b) {
              var i = this,
                e = this.props.enter,
                a = this.context ? this.context.isMounting : b,
                c = this.props.nodeRef ? [a] : [P.findDOMNode(this), a],
                f = c[0],
                h = c[1],
                d = this.getTimeouts(),
                j = a ? d.appear : d.enter
              if ((!b && !e) || Q.disabled) {
                this.safeSetState({ status: p }, function () {
                  i.props.onEntered(f)
                })
                return
              }
              this.props.onEnter(f, h),
                this.safeSetState({ status: o }, function () {
                  i.props.onEntering(f, h),
                    i.onTransitionEnd(j, function () {
                      i.safeSetState({ status: p }, function () {
                        i.props.onEntered(f, h)
                      })
                    })
                })
            }),
            (a.performExit = function () {
              var c = this,
                a = this.props.exit,
                d = this.getTimeouts(),
                b = this.props.nodeRef ? void 0 : P.findDOMNode(this)
              if (!a || Q.disabled) {
                this.safeSetState({ status: n }, function () {
                  c.props.onExited(b)
                })
                return
              }
              this.props.onExit(b),
                this.safeSetState({ status: q }, function () {
                  c.props.onExiting(b),
                    c.onTransitionEnd(d.exit, function () {
                      c.safeSetState({ status: n }, function () {
                        c.props.onExited(b)
                      })
                    })
                })
            }),
            (a.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null))
            }),
            (a.safeSetState = function (b, a) {
              ;(a = this.setNextCallback(a)), this.setState(b, a)
            }),
            (a.setNextCallback = function (a) {
              var b = this,
                c = !0
              return (
                (this.nextCallback = function (d) {
                  c && ((c = !1), (b.nextCallback = null), a(d))
                }),
                (this.nextCallback.cancel = function () {
                  c = !1
                }),
                this.nextCallback
              )
            }),
            (a.onTransitionEnd = function (a, d) {
              this.setNextCallback(d)
              var b = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : P.findDOMNode(this),
                e = null == a && !this.props.addEndListener
              if (!b || e) {
                setTimeout(this.nextCallback, 0)
                return
              }
              if (this.props.addEndListener) {
                var c = this.props.nodeRef
                    ? [this.nextCallback]
                    : [b, this.nextCallback],
                  f = c[0],
                  h = c[1]
                this.props.addEndListener(f, h)
              }
              null != a && setTimeout(this.nextCallback, a)
            }),
            (a.render = function () {
              var c = this.state.status
              if (c === m) return null
              var a = this.props,
                b = a.children,
                e =
                  (a.in,
                  a.mountOnEnter,
                  a.unmountOnExit,
                  a.appear,
                  a.enter,
                  a.exit,
                  a.timeout,
                  a.addEndListener,
                  a.onEnter,
                  a.onEntering,
                  a.onEntered,
                  a.onExit,
                  a.onExiting,
                  a.onExited,
                  a.nodeRef,
                  G(a, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]))
              return d.createElement(
                l.Provider,
                { value: null },
                'function' == typeof b
                  ? b(c, e)
                  : d.cloneElement(d.Children.only(b), e)
              )
            }),
            b
          )
        })(d.Component)
      function c() {}
      ;(b.contextType = l),
        (b.propTypes = {}),
        (b.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: c,
          onEntering: c,
          onEntered: c,
          onExit: c,
          onExiting: c,
          onExited: c,
        }),
        (b.UNMOUNTED = m),
        (b.EXITED = n),
        (b.ENTERING = o),
        (b.ENTERED = p),
        (b.EXITING = q)
      var R = b,
        S = function (b, a) {
          return (
            b &&
            a &&
            a.split(' ').forEach(function (d) {
              var a, c
              return (
                (a = b),
                (c = d),
                void (a.classList
                  ? a.classList.remove(c)
                  : 'string' == typeof a.className
                  ? (a.className = O(a.className, c))
                  : a.setAttribute(
                      'class',
                      O((a.className && a.className.baseVal) || '', c)
                    ))
              )
            })
          )
        },
        f = (function (c) {
          function a() {
            for (var a, d = arguments.length, e = Array(d), b = 0; b < d; b++)
              e[b] = arguments[b]
            return (
              ((a = c.call.apply(c, [this].concat(e)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (a.onEnter = function (b, c) {
                var d = a.resolveArguments(b, c),
                  e = d[0],
                  f = d[1]
                a.removeClasses(e, 'exit'),
                  a.addClass(e, f ? 'appear' : 'enter', 'base'),
                  a.props.onEnter && a.props.onEnter(b, c)
              }),
              (a.onEntering = function (b, c) {
                var d = a.resolveArguments(b, c),
                  e = d[0],
                  f = d[1]
                a.addClass(e, f ? 'appear' : 'enter', 'active'),
                  a.props.onEntering && a.props.onEntering(b, c)
              }),
              (a.onEntered = function (b, c) {
                var d = a.resolveArguments(b, c),
                  e = d[0],
                  f = d[1] ? 'appear' : 'enter'
                a.removeClasses(e, f),
                  a.addClass(e, f, 'done'),
                  a.props.onEntered && a.props.onEntered(b, c)
              }),
              (a.onExit = function (c) {
                var b = a.resolveArguments(c)[0]
                a.removeClasses(b, 'appear'),
                  a.removeClasses(b, 'enter'),
                  a.addClass(b, 'exit', 'base'),
                  a.props.onExit && a.props.onExit(c)
              }),
              (a.onExiting = function (b) {
                var c = a.resolveArguments(b)[0]
                a.addClass(c, 'exit', 'active'),
                  a.props.onExiting && a.props.onExiting(b)
              }),
              (a.onExited = function (b) {
                var c = a.resolveArguments(b)[0]
                a.removeClasses(c, 'exit'),
                  a.addClass(c, 'exit', 'done'),
                  a.props.onExited && a.props.onExited(b)
              }),
              (a.resolveArguments = function (b, c) {
                return a.props.nodeRef ? [a.props.nodeRef.current, b] : [b, c]
              }),
              (a.getClassNames = function (c) {
                var b = a.props.classNames,
                  d = 'string' == typeof b,
                  e = d ? (d && b ? b + '-' : '') + c : b[c],
                  f = d ? e + '-active' : b[c + 'Active'],
                  h = d ? e + '-done' : b[c + 'Done']
                return {
                  baseClassName: e,
                  activeClassName: f,
                  doneClassName: h,
                }
              }),
              a
            )
          }
          J(a, c)
          var b = a.prototype
          return (
            (b.addClass = function (c, d, a) {
              var f,
                e,
                b = this.getClassNames(d)[a + 'ClassName'],
                h = this.getClassNames('enter').doneClassName
              'appear' === d && 'done' === a && h && (b += ' ' + h),
                'active' === a && c && c.scrollTop,
                b &&
                  ((this.appliedClasses[d][a] = b),
                  (f = c),
                  (e = b),
                  f &&
                    e &&
                    e.split(' ').forEach(function (a) {
                      return (function (a, c) {
                        if (a.classList) a.classList.add(c)
                        else {
                          var b, d
                          ;(b = a),
                            (d = c),
                            (b.classList
                              ? !(d && b.classList.contains(d))
                              : -1 ===
                                (
                                  ' ' +
                                  (b.className.baseVal || b.className) +
                                  ' '
                                ).indexOf(' ' + d + ' ')) &&
                              ('string' == typeof a.className
                                ? (a.className = a.className + ' ' + c)
                                : a.setAttribute(
                                    'class',
                                    ((a.className && a.className.baseVal) ||
                                      '') +
                                      ' ' +
                                      c
                                  ))
                        }
                      })(f, a)
                    }))
            }),
            (b.removeClasses = function (a, c) {
              var b = this.appliedClasses[c],
                d = b.base,
                e = b.active,
                f = b.done
              ;(this.appliedClasses[c] = {}),
                d && S(a, d),
                e && S(a, e),
                f && S(a, f)
            }),
            (b.render = function () {
              var a = this.props,
                b = (a.classNames, G(a, ['classNames']))
              return d.createElement(
                R,
                H({}, b, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              )
            }),
            a
          )
        })(d.Component)
      ;(f.defaultProps = { classNames: '' }), (f.propTypes = {})
      var T = f,
        r = a(8830),
        U = a.n(r),
        V = (0, d.createContext)(null),
        W = function (c) {
          var e = c.children
          ;(0, d.useEffect)(function () {
            var a = window.matchMedia('(prefers-color-scheme: dark)'),
              b = function () {
                var b = document.querySelector('body'),
                  c = window.localStorage.getItem('__color-scheme__'),
                  d = a.matches
                null === c &&
                  (d ? b.classList.add('dark') : b.classList.remove('dark'))
              }
            return (
              void 0 === a.addEventListener
                ? a.addListener(b)
                : a.addEventListener('change', b),
              function () {
                void 0 === a.removeEventListener
                  ? a.removeListener(b)
                  : a.removeEventListener('change', b)
              }
            )
          }, [])
          var a = (0, d.useState)(null),
            b = a[0],
            f = a[1]
          return (
            (0, d.useEffect)(
              function () {
                if (null === b) {
                  var c = window.localStorage.getItem('__color-scheme__')
                  null === c ? f('auto') : f(c)
                } else
                  'auto' === b
                    ? window.localStorage.removeItem('__color-scheme__')
                    : window.localStorage.setItem('__color-scheme__', b)
                var a = document.querySelector('body')
                'auto' === b
                  ? window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? a.classList.add('dark')
                    : a.classList.remove('dark')
                  : 'light' === b
                  ? a.classList.remove('dark')
                  : a.classList.add('dark')
              },
              [b]
            ),
            (0, v.jsx)(V.Provider, {
              value: {
                scheme: b,
                setScheme: function (a) {
                  return function () {
                    f(a)
                  }
                },
              },
              children: e,
            })
          )
        },
        X = function (c) {
          var b = c.showLabel,
            e = c.tabIndex,
            f = (0, d.useContext)(V),
            a = f.scheme,
            i = f.setScheme,
            h = function () {
              var b
              i('light' === a ? 'dark' : 'dark' === a ? 'auto' : 'light')()
            }
          return (0, v.jsxs)('div', {
            className: U().container,
            onClick: h,
            onKeyPress: function (a) {
              'Enter' === a.key && h()
            },
            tabIndex: void 0 === e ? 0 : e,
            children: [
              (0, v.jsx)('div', {
                className: U().wrap,
                children: (0, v.jsxs)(N, {
                  component: null,
                  children: [
                    'auto' === a &&
                      (0, v.jsx)(T, {
                        timeout: 250,
                        classNames: {
                          enter: U()['button-enter'],
                          enterActive: U()['button-enter-active'],
                          exit: U()['button-exit'],
                          exitActive: U()['button-exit-active'],
                        },
                        children: (0, v.jsx)(A.gU9, { className: U().button }),
                      }),
                    'light' === a &&
                      (0, v.jsx)(T, {
                        timeout: 250,
                        classNames: {
                          enter: U()['button-enter'],
                          enterActive: U()['button-enter-active'],
                          exit: U()['button-exit'],
                          exitActive: U()['button-exit-active'],
                        },
                        children: (0, v.jsx)(A.kXG, { className: U().button }),
                      }),
                    'dark' === a &&
                      (0, v.jsx)(T, {
                        timeout: 250,
                        classNames: {
                          enter: U()['button-enter'],
                          enterActive: U()['button-enter-active'],
                          exit: U()['button-exit'],
                          exitActive: U()['button-exit-active'],
                        },
                        children: (0, v.jsx)(A.wOW, { className: U().button }),
                      }),
                  ],
                }),
              }),
              b &&
                'light' === a &&
                (0, v.jsx)('span', { children: 'Light scheme' }),
              b &&
                'dark' === a &&
                (0, v.jsx)('span', { children: 'Dark scheme' }),
              b &&
                'auto' === a &&
                (0, v.jsx)('span', { children: 'Sync with OS scheme' }),
            ],
          })
        },
        Y = a(8357)
      function Z(a) {
        return (0, Y.w_)({
          tag: 'svg',
          attr: { role: 'img', viewBox: '0 0 24 24' },
          child: [
            { tag: 'title', attr: {}, child: [] },
            {
              tag: 'path',
              attr: {
                d: 'M5.701 0v6.223H8.85V4.654h1.576v7.842H12V4.654h1.574v1.569h3.15V0zm11.024 6.223v3.136h1.574V6.223zm1.574 3.136v4.705h1.576v-1.568h1.574v-1.568h-1.574V9.359zm0 4.705h-1.574v3.137h1.574zm-1.574 3.137h-3.15v1.569H8.85V17.2H5.7V24h11.024zm-11.024 0v-3.137H4.125v3.137zm-1.576-3.137V9.36H2.551v4.705zm0-4.705h1.576V6.223H4.125Z',
              },
            },
          ],
        })(a)
      }
      function $() {
        var c = (0, d.useState)(!1),
          a = c[0],
          e = c[1],
          b = function () {
            return e(!1)
          }
        return (0, v.jsx)('header', {
          className: E().header,
          children: (0, v.jsxs)(D.push, {
            pageWrapId: 'page-wrap',
            outerContainerId: 'outer-container',
            customBurgerIcon: (0, v.jsx)(A.cur, {}),
            customCrossIcon: (0, v.jsx)(A.q5L, {}),
            disableAutoFocus: !0,
            isOpen: a,
            onStateChange: function (a) {
              return e(a.isOpen)
            },
            children: [
              (0, v.jsx)(B.Z, {
                href: '/',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Home',
                }),
              }),
              (0, v.jsx)(B.Z, {
                href: '/articles',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Articles',
                }),
              }),
              (0, v.jsx)(B.Z, {
                href: '/work',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Work',
                }),
              }),
              (0, v.jsx)(B.Z, {
                href: '/now',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Now',
                }),
              }),
              (0, v.jsx)(B.Z, {
                href: '/expertise',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Expertise',
                }),
              }),
              (0, v.jsx)(B.Z, {
                href: '/contact',
                className: E().link,
                children: (0, v.jsx)('button', {
                  className: E().button,
                  onClick: b,
                  tabIndex: a ? 0 : -1,
                  children: 'Contact',
                }),
              }),
              (0, v.jsx)('span', { className: E().pusher }),
              (0, v.jsx)('span', { className: E().divider }),
              (0, v.jsxs)('div', {
                className: E().profile,
                children: [
                  (0, v.jsx)(B.Z, {
                    href: y.Z.linkedin,
                    'aria-label': "Link to Hany Morcos's Linkedin profile",
                    className: E().iconLink,
                    tabIndex: a ? 0 : -1,
                    children: (0, v.jsx)(F.juy, {}),
                  }),
                  (0, v.jsx)(B.Z, {
                    href: y.Z.github,
                    'aria-label': "Link to Hany Morcos's GitHub profile",
                    className: E().iconLink,
                    tabIndex: a ? 0 : -1,
                    children: (0, v.jsx)(F.lfl, {}),
                  }),
                  (0, v.jsx)(B.Z, {
                    href: y.Z.medium,
                    'aria-label': "Link to Hany Morcos's Medium profile",
                    className: E().iconLink,
                    tabIndex: a ? 0 : -1,
                    children: (0, v.jsx)(F.lUN, {}),
                  }),
                  (0, v.jsxs)(B.Z, {
                    href: y.Z.hackernoon,
                    'aria-label': "Link to Hany Morcos's Hackernoon profile",
                    className: E().iconLink,
                    tabIndex: a ? 0 : -1,
                    children: [
                      (0, v.jsx)(Z, { size: '1.5em' }),
                      (0, v.jsx)('span', {
                        hidden: !0,
                        children: "Link to Hany Morcos's Hacker Noon profile",
                      }),
                    ],
                  }),
                  (0, v.jsx)(B.Z, {
                    href: y.Z.twitter,
                    'aria-label': "Link to Hany Morcos's Twitter profile",
                    className: E().iconLink,
                    tabIndex: a ? 0 : -1,
                    children: (0, v.jsx)(F.Xai, {}),
                  }),
                ],
              }),
              (0, v.jsx)(X, { showLabel: !0, tabIndex: a ? 0 : -1 }),
            ],
          }),
        })
      }
      var s = a(2795),
        _ = a.n(s),
        aa = function () {
          return (0, v.jsxs)('div', {
            className: _().menubar,
            children: [
              (0, v.jsxs)(B.Z, {
                href: '/contact',
                className: _().hireMe,
                children: [(0, v.jsx)(A.EQ9, { size: '1.5em' }), 'Hire Me'],
              }),
              (0, v.jsx)(X, {}),
              (0, v.jsx)(B.Z, {
                href: y.Z.github,
                'aria-label': "See more Hany Morcos's work on GitHub",
                children: (0, v.jsx)(F.lfl, { size: '1.5em' }),
              }),
            ],
          })
        },
        ab = a(1752)
      function ac(b) {
        let c = []
        for (let a = 0; a < b.length; a++)
          c.push([b[a]]),
            a < b.length - 1 &&
              ac(b.slice(a + 1)).forEach((d) => {
                c.push([b[a], ...d])
              })
        return c
      }
      a(3454)
      let ad = (a, ...d) => {
          var b
          let c = `/js/${[
            null !== (b = a.scriptName) && void 0 !== b ? b : 'script',
            ...d.sort().filter((a) => null !== a),
          ].join('.')}.js`
          return a.subdirectory ? `/${a.subdirectory}${c}` : c
        },
        ae = 'https://plausible.io',
        af = (a, b) => (b || a === ae ? 'plausible' : 'index'),
        ag = (b) => {
          var a
          return null !== (a = b.customDomain) && void 0 !== a ? a : ae
        },
        ah = (b) => {
          var a
          return `/${
            null !== (a = b.subdirectory) && void 0 !== a ? a : 'proxy'
          }/api/event${b.trailingSlash ? '/' : ''}`
        }
      function ai(a) {
        var c, e
        let { enabled: f = !0 } = a,
          h = ag(a),
          b =
            null ===
              (e =
                null === (c = (0, ab.default)()) || void 0 === c
                  ? void 0
                  : c.publicRuntimeConfig) || void 0 === e
              ? void 0
              : e.nextPlausiblePublicProxyOptions
        return d.createElement(
          d.Fragment,
          null,
          d.createElement(
            w(),
            null,
            f &&
              d.createElement(
                'script',
                Object.assign(
                  {
                    defer: !0,
                    'data-api': b ? ah(b) : void 0,
                    'data-domain': a.domain,
                    'data-exclude': a.exclude,
                    src:
                      (b ? '' : h) +
                      ad(
                        Object.assign(Object.assign({}, b), {
                          scriptName: b ? b.scriptName : af(h, a.selfHosted),
                        }),
                        a.trackLocalhost ? 'local' : null,
                        a.manualPageviews ? 'manual' : null,
                        a.trackOutboundLinks ? 'outbound-links' : null,
                        a.exclude ? 'exclusions' : null
                      ),
                    integrity: a.integrity,
                    crossOrigin: a.integrity ? 'anonymous' : void 0,
                  },
                  a.scriptProps
                )
              ),
            f &&
              d.createElement('script', {
                dangerouslySetInnerHTML: {
                  __html:
                    'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
                },
              })
          ),
          a.children
        )
      }
      var aj = function (a) {
        var b = a.Component,
          c = a.pageProps
        return (0, v.jsx)(ai, {
          domain: 'hanymorcos.github.io',
          trackOutboundLinks: !0,
          children: (0, v.jsxs)(W, {
            children: [
              (0, v.jsxs)(w(), {
                children: [
                  (0, v.jsx)('script', {
                    async: !0,
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7095965118332792',
                    crossOrigin: 'anonymous',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'icon',
                    type: 'image/svg',
                    sizes: '32x32',
                    href: '/favicon.svg',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'icon',
                    type: 'image/svg',
                    sizes: '16x16',
                    href: '/favicon.svg',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'mask-icon',
                    href: '/favicon.svg',
                    color: '#ffffff',
                  }),
                  (0, v.jsx)('link', {
                    rel: 'manifest',
                    href: '/site.webmanifest',
                  }),
                  (0, v.jsx)('title', { children: 'Hany Morcos ' }),
                  (0, v.jsx)('meta', {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                  }),
                  (0, v.jsx)('meta', { charSet: 'utf-8' }),
                  (0, v.jsx)('meta', {
                    name: 'msapplication-TileColor',
                    content: '#007cf0',
                  }),
                  (0, v.jsx)('meta', { name: 'theme-color', content: '#ffff' }),
                  (0, v.jsx)('meta', {
                    name: 'description',
                    content: y.Z.description,
                  }),
                ],
              }),
              (0, v.jsxs)('div', {
                id: 'outer-container',
                children: [
                  (0, v.jsx)($, {}),
                  (0, v.jsx)(aa, {}),
                  (0, v.jsxs)('div', {
                    id: 'page-wrap',
                    children: [
                      (0, v.jsx)(b, (0, u.Z)({}, c)),
                      (0, v.jsx)(C, {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
    8830: function (a) {
      a.exports = {
        container: 'DarkmodeSwitch_container__uFGHQ',
        wrap: 'DarkmodeSwitch_wrap__e71_4',
        button: 'DarkmodeSwitch_button__oWDQb',
        'button-enter': 'DarkmodeSwitch_button-enter__JCJl0',
        'button-enter-active': 'DarkmodeSwitch_button-enter-active__qEvTW',
        'button-exit': 'DarkmodeSwitch_button-exit__O9uZb',
        'button-exit-active': 'DarkmodeSwitch_button-exit-active__3ir0u',
      }
    },
    9693: function (a) {
      a.exports = {
        footer: 'Footer_footer__1IwEk',
        wrap: 'Footer_wrap__FVCTX',
        contact: 'Footer_contact__9GJn6',
        resources: 'Footer_resources__fG_vu',
        sitemap: 'Footer_sitemap__92ono',
        emoji: 'Footer_emoji__u15jg',
        copyright: 'Footer_copyright__vZZRL',
      }
    },
    5566: function (a) {
      a.exports = { anchor: 'styles_anchor__g18qA' }
    },
    2795: function (a) {
      a.exports = {
        menubar: 'Menubar_menubar__gvU4b',
        hireMe: 'Menubar_hireMe__zuAig',
      }
    },
    3577: function (a) {
      a.exports = {
        link: 'Nav_link__ZgDoZ',
        button: 'Nav_button__YJwKE',
        iconLink: 'Nav_iconLink__z5y5Q',
        pusher: 'Nav_pusher__93Gc6',
        profile: 'Nav_profile__Kf2nU',
        divider: 'Nav_divider__QD8Pt',
      }
    },
    5112: function () {},
    39: function () {},
    906: function () {},
    3263: function () {},
    7663: function (a) {
      !(function () {
        var d = {
            308: function (c) {
              var e,
                f,
                h,
                a = (c.exports = {})
              function i() {
                throw Error('setTimeout has not been defined')
              }
              function j() {
                throw Error('clearTimeout has not been defined')
              }
              function k(a) {
                if (e === setTimeout) return setTimeout(a, 0)
                if ((e === i || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(a, 0)
                try {
                  return e(a, 0)
                } catch (b) {
                  try {
                    return e.call(null, a, 0)
                  } catch (c) {
                    return e.call(this, a, 0)
                  }
                }
              }
              !(function () {
                try {
                  e = 'function' == typeof setTimeout ? setTimeout : i
                } catch (a) {
                  e = i
                }
                try {
                  f = 'function' == typeof clearTimeout ? clearTimeout : j
                } catch (b) {
                  f = j
                }
              })()
              var l = [],
                m = !1,
                n = -1
              function o() {
                m &&
                  h &&
                  ((m = !1),
                  h.length ? (l = h.concat(l)) : (n = -1),
                  l.length && p())
              }
              function p() {
                if (!m) {
                  var b = k(o)
                  m = !0
                  for (var a = l.length; a; ) {
                    for (h = l, l = []; ++n < a; ) h && h[n].run()
                    ;(n = -1), (a = l.length)
                  }
                  ;(h = null),
                    (m = !1),
                    (function (a) {
                      if (f === clearTimeout) return clearTimeout(a)
                      if ((f === j || !f) && clearTimeout)
                        return (f = clearTimeout), clearTimeout(a)
                      try {
                        f(a)
                      } catch (b) {
                        try {
                          return f.call(null, a)
                        } catch (c) {
                          return f.call(this, a)
                        }
                      }
                    })(b)
                }
              }
              function d(a, b) {
                ;(this.fun = a), (this.array = b)
              }
              function b() {}
              ;(a.nextTick = function (c) {
                var b = Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var a = 1; a < arguments.length; a++)
                    b[a - 1] = arguments[a]
                l.push(new d(c, b)), 1 !== l.length || m || k(p)
              }),
                (d.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (a.title = 'browser'),
                (a.browser = !0),
                (a.env = {}),
                (a.argv = []),
                (a.version = ''),
                (a.versions = {}),
                (a.on = b),
                (a.addListener = b),
                (a.once = b),
                (a.off = b),
                (a.removeListener = b),
                (a.removeAllListeners = b),
                (a.emit = b),
                (a.prependListener = b),
                (a.prependOnceListener = b),
                (a.listeners = function (a) {
                  return []
                }),
                (a.binding = function (a) {
                  throw Error('process.binding is not supported')
                }),
                (a.cwd = function () {
                  return '/'
                }),
                (a.chdir = function (a) {
                  throw Error('process.chdir is not supported')
                }),
                (a.umask = function () {
                  return 0
                })
            },
          },
          e = {}
        function b(a) {
          var f = e[a]
          if (void 0 !== f) return f.exports
          var c = (e[a] = { exports: {} }),
            h = !0
          try {
            d[a](c, c.exports, b), (h = !1)
          } finally {
            h && delete e[a]
          }
          return c.exports
        }
        b.ab = '//'
        var c = b(308)
        a.exports = c
      })()
    },
    9008: function (a, c, b) {
      a.exports = b(5443)
    },
    1664: function (a, c, b) {
      a.exports = b(8418)
    },
    2703: function (a, e, b) {
      'use strict'
      var f = b(414)
      function c() {}
      function d() {}
      ;(d.resetWarningCache = c),
        (a.exports = function () {
          function a(c, d, e, h, i, b) {
            if (b !== f) {
              var a = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((a.name = 'Invariant Violation'), a)
            }
          }
          function b() {
            return a
          }
          a.isRequired = a
          var e = {
            array: a,
            bigint: a,
            bool: a,
            func: a,
            number: a,
            object: a,
            string: a,
            symbol: a,
            any: a,
            arrayOf: b,
            element: a,
            elementType: a,
            instanceOf: b,
            node: a,
            objectOf: b,
            oneOf: b,
            oneOfType: b,
            shape: b,
            exact: b,
            checkPropTypes: d,
            resetWarningCache: c,
          }
          return (e.PropTypes = e), e
        })
    },
    5697: function (a, c, b) {
      a.exports = b(2703)()
    },
    414: function (a) {
      'use strict'
      a.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    9050: function (h, a, d) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 })
      var j =
          Object.assign ||
          function (d) {
            for (var a = 1; a < arguments.length; a++) {
              var b = arguments[a]
              for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
          },
        k = (function () {
          function a(d, c) {
            for (var b = 0; b < c.length; b++) {
              var a = c[b]
              ;(a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(d, a.key, a)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        l = function (e, f, h) {
          var c = !0
          _function: for (; c; ) {
            var b = e,
              i = f,
              j = h
            ;(c = !1), null === b && (b = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(b, i)
            if (void 0 === a) {
              var d = Object.getPrototypeOf(b)
              if (null === d) return
              ;(e = d), (f = i), (h = j), (c = !0), (a = d = void 0)
              continue _function
            }
            if ('value' in a) return a.value
            var k = a.get
            if (void 0 === k) return
            return k.call(j)
          }
        }
      function e(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var f = d(7294),
        m = e(f),
        i = d(5697),
        b = e(i),
        c = (function (b) {
          function a(b) {
            !(function (a, b) {
              if (!(a instanceof b))
                throw TypeError('Cannot call a class as a function')
            })(this, a),
              l(Object.getPrototypeOf(a.prototype), 'constructor', this).call(
                this,
                b
              ),
              (this.state = { hover: !1 })
          }
          return (
            !(function (b, a) {
              if ('function' != typeof a && null !== a)
                throw TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof a
                )
              ;(b.prototype = Object.create(a && a.prototype, {
                constructor: {
                  value: b,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                a &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(b, a)
                    : (b.__proto__ = a))
            })(a, b),
            k(a, [
              {
                key: 'getLineStyle',
                value: function (a) {
                  return j(
                    {
                      position: 'absolute',
                      height: '20%',
                      left: 0,
                      right: 0,
                      top: 20 * (2 * a) + '%',
                      opacity: this.state.hover ? 0.6 : 1,
                    },
                    this.state.hover && this.props.styles.bmBurgerBarsHover
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var c = this,
                    a = void 0
                  if (this.props.customIcon) {
                    var b = {
                      className: (
                        'bm-icon ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: j(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmIcon
                      ),
                    }
                    a = m.default.cloneElement(this.props.customIcon, b)
                  } else
                    a = m.default.createElement(
                      'span',
                      null,
                      [0, 1, 2].map(function (a) {
                        return m.default.createElement('span', {
                          key: a,
                          className: (
                            'bm-burger-bars ' +
                            c.props.barClassName +
                            ' ' +
                            (c.state.hover ? 'bm-burger-bars-hover' : '')
                          ).trim(),
                          style: j(
                            {},
                            c.getLineStyle(a),
                            c.props.styles.bmBurgerBars
                          ),
                        })
                      })
                    )
                  return m.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-burger-button ' + this.props.className
                      ).trim(),
                      style: j(
                        { zIndex: 1e3 },
                        this.props.styles.bmBurgerButton
                      ),
                    },
                    m.default.createElement(
                      'button',
                      {
                        id: 'react-burger-menu-btn',
                        onClick: this.props.onClick,
                        onMouseOver: function () {
                          c.setState({ hover: !0 }),
                            c.props.onIconHoverChange &&
                              c.props.onIconHoverChange({ isMouseIn: !0 })
                        },
                        onMouseOut: function () {
                          c.setState({ hover: !1 }),
                            c.props.onIconHoverChange &&
                              c.props.onIconHoverChange({ isMouseIn: !1 })
                        },
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          zIndex: 1,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                      },
                      'Open Menu'
                    ),
                    a
                  )
                },
              },
            ]),
            a
          )
        })(f.Component)
      ;(a.default = c),
        (c.propTypes = {
          barClassName: b.default.string,
          customIcon: b.default.element,
          styles: b.default.object,
        }),
        (c.defaultProps = { barClassName: '', className: '', styles: {} }),
        (h.exports = a.default)
    },
    3190: function (c, b, a) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.default = {
          slide: a(6432),
          stack: a(7277),
          elastic: a(2996),
          bubble: a(3414),
          push: a(3976),
          pushRotate: a(8796),
          scaleDown: a(9070),
          scaleRotate: a(6001),
          fallDown: a(5576),
          reveal: a(6523),
        }),
        (c.exports = b.default)
    },
    7544: function (h, a, d) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 })
      var j =
          Object.assign ||
          function (d) {
            for (var a = 1; a < arguments.length; a++) {
              var b = arguments[a]
              for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
          },
        k = (function () {
          function a(d, c) {
            for (var b = 0; b < c.length; b++) {
              var a = c[b]
              ;(a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(d, a.key, a)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        l = function (e, f, h) {
          var c = !0
          _function: for (; c; ) {
            var b = e,
              i = f,
              j = h
            ;(c = !1), null === b && (b = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(b, i)
            if (void 0 === a) {
              var d = Object.getPrototypeOf(b)
              if (null === d) return
              ;(e = d), (f = i), (h = j), (c = !0), (a = d = void 0)
              continue _function
            }
            if ('value' in a) return a.value
            var k = a.get
            if (void 0 === k) return
            return k.call(j)
          }
        }
      function e(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var f = d(7294),
        m = e(f),
        i = d(5697),
        b = e(i),
        c = (function (b) {
          function a() {
            !(function (a, b) {
              if (!(a instanceof b))
                throw TypeError('Cannot call a class as a function')
            })(this, a),
              l(Object.getPrototypeOf(a.prototype), 'constructor', this).apply(
                this,
                arguments
              )
          }
          return (
            !(function (b, a) {
              if ('function' != typeof a && null !== a)
                throw TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof a
                )
              ;(b.prototype = Object.create(a && a.prototype, {
                constructor: {
                  value: b,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                a &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(b, a)
                    : (b.__proto__ = a))
            })(a, b),
            k(a, [
              {
                key: 'getCrossStyle',
                value: function (a) {
                  return {
                    position: 'absolute',
                    width: 3,
                    height: 14,
                    transform:
                      'before' === a ? 'rotate(45deg)' : 'rotate(-45deg)',
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var a,
                    c = this
                  if (this.props.customIcon) {
                    var b = {
                      className: (
                        'bm-cross ' +
                        (this.props.customIcon.props.className || '')
                      ).trim(),
                      style: j(
                        { width: '100%', height: '100%' },
                        this.props.styles.bmCross
                      ),
                    }
                    a = m.default.cloneElement(this.props.customIcon, b)
                  } else
                    a = m.default.createElement(
                      'span',
                      {
                        style: {
                          position: 'absolute',
                          top: '6px',
                          right: '14px',
                        },
                      },
                      ['before', 'after'].map(function (a, b) {
                        return m.default.createElement('span', {
                          key: b,
                          className: (
                            'bm-cross ' + c.props.crossClassName
                          ).trim(),
                          style: j(
                            {},
                            c.getCrossStyle(a),
                            c.props.styles.bmCross
                          ),
                        })
                      })
                    )
                  return m.default.createElement(
                    'div',
                    {
                      className: (
                        'bm-cross-button ' + this.props.className
                      ).trim(),
                      style: j(
                        {},
                        {
                          position: 'absolute',
                          width: 24,
                          height: 24,
                          right: 8,
                          top: 8,
                        },
                        this.props.styles.bmCrossButton
                      ),
                    },
                    m.default.createElement(
                      'button',
                      {
                        id: 'react-burger-cross-btn',
                        onClick: this.props.onClick,
                        style: {
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          zIndex: 1,
                          width: '100%',
                          height: '100%',
                          margin: 0,
                          padding: 0,
                          border: 'none',
                          fontSize: 0,
                          background: 'transparent',
                          cursor: 'pointer',
                        },
                        tabIndex: -1,
                      },
                      'Close Menu'
                    ),
                    a
                  )
                },
              },
            ]),
            a
          )
        })(f.Component)
      ;(a.default = c),
        (c.propTypes = {
          crossClassName: b.default.string,
          customIcon: b.default.element,
          styles: b.default.object,
        }),
        (c.defaultProps = { crossClassName: '', className: '', styles: {} }),
        (h.exports = a.default)
    },
    8057: function (b, a) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = {
          overlay: function (a) {
            return {
              position: 'fixed',
              zIndex: 1e3,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              opacity: a ? 1 : 0,
              MozTransform: a ? '' : 'translate3d(100%, 0, 0)',
              MsTransform: a ? '' : 'translate3d(100%, 0, 0)',
              OTransform: a ? '' : 'translate3d(100%, 0, 0)',
              WebkitTransform: a ? '' : 'translate3d(100%, 0, 0)',
              transform: a ? '' : 'translate3d(100%, 0, 0)',
              transition: a
                ? 'opacity 0.3s'
                : 'opacity 0.3s, transform 0s 0.3s',
            }
          },
          menuWrap: function (b, c, a) {
            return {
              position: 'fixed',
              right: a ? 0 : 'inherit',
              zIndex: 1100,
              width: c,
              height: '100%',
              MozTransform: b
                ? ''
                : a
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: b
                ? ''
                : a
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: b
                ? ''
                : a
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: b
                ? ''
                : a
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: b
                ? ''
                : a
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.5s',
            }
          },
          menu: function () {
            return { height: '100%', boxSizing: 'border-box', overflow: 'auto' }
          },
          itemList: function () {
            return { height: '100%' }
          },
          item: function () {
            return { display: 'block' }
          },
        }),
        (b.exports = a.default)
    },
    4126: function (d, c, a) {
      'use strict'
      Object.defineProperty(c, '__esModule', { value: !0 })
      var l =
          Object.assign ||
          function (d) {
            for (var a = 1; a < arguments.length; a++) {
              var b = arguments[a]
              for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c])
            }
            return d
          },
        m = (function () {
          function a(d, c) {
            for (var b = 0; b < c.length; b++) {
              var a = c[b]
              ;(a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                'value' in a && (a.writable = !0),
                Object.defineProperty(d, a.key, a)
            }
          }
          return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b
          }
        })(),
        n = function (e, f, h) {
          var c = !0
          _function: for (; c; ) {
            var b = e,
              i = f,
              j = h
            ;(c = !1), null === b && (b = Function.prototype)
            var a = Object.getOwnPropertyDescriptor(b, i)
            if (void 0 === a) {
              var d = Object.getPrototypeOf(b)
              if (null === d) return
              ;(e = d), (f = i), (h = j), (c = !0), (a = d = void 0)
              continue _function
            }
            if ('value' in a) return a.value
            var k = a.get
            if (void 0 === k) return
            return k.call(j)
          }
        }
      function b(a) {
        return a && a.__esModule ? a : { default: a }
      }
      var e = a(7294),
        o = b(e),
        f = a(3935),
        p = b(f),
        h = a(5697),
        q = b(h),
        i = a(8057),
        r = b(i),
        j = a(9050),
        s = b(j),
        k = a(7544),
        t = b(k)
      ;(c.default = function (a) {
        var b = (function (c) {
          function b(c) {
            if (
              ((function (a, b) {
                if (!(a instanceof b))
                  throw TypeError('Cannot call a class as a function')
              })(this, b),
              n(Object.getPrototypeOf(b.prototype), 'constructor', this).call(
                this,
                c
              ),
              (this.state = { isOpen: !1 }),
              !a)
            )
              throw Error('No styles supplied')
          }
          return (
            (function (b, a) {
              if ('function' != typeof a && null !== a)
                throw TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof a
                )
              ;(b.prototype = Object.create(a && a.prototype, {
                constructor: {
                  value: b,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                a &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(b, a)
                    : (b.__proto__ = a))
            })(b, c),
            m(b, [
              {
                key: 'focusOnFirstMenuItem',
                value: function () {
                  var a = Array.from(
                    document.getElementsByClassName('bm-item')
                  ).shift()
                  a && a.focus()
                },
              },
              {
                key: 'focusOnLastMenuItem',
                value: function () {
                  var a = Array.from(
                    document.getElementsByClassName('bm-item')
                  ).pop()
                  a && a.focus()
                },
              },
              {
                key: 'focusOnCrossButton',
                value: function () {
                  var a = document.getElementById('react-burger-cross-btn')
                  a && a.focus()
                },
              },
              {
                key: 'focusOnMenuButton',
                value: function () {
                  var a = document.getElementById('react-burger-menu-btn')
                  a && a.focus()
                },
              },
              {
                key: 'focusOnMenuItem',
                value: function (a) {
                  if (document.activeElement.className.includes('bm-item')) {
                    var b = document.activeElement[a]
                    b ? b.focus() : this.focusOnCrossButton()
                  } else
                    'previousElementSibling' === a
                      ? this.focusOnLastMenuItem()
                      : this.focusOnFirstMenuItem()
                },
              },
              {
                key: 'focusOnNextMenuItem',
                value: function () {
                  this.focusOnMenuItem('nextElementSibling')
                },
              },
              {
                key: 'focusOnPreviousMenuItem',
                value: function () {
                  this.focusOnMenuItem('previousElementSibling')
                },
              },
              {
                key: 'toggleMenu',
                value: function () {
                  var d = this,
                    a =
                      arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    b = a.isOpen,
                    e = a.noStateChange,
                    f = a.focusOnLastItem,
                    c = { isOpen: void 0 !== b ? b : !this.state.isOpen }
                  this.applyWrapperStyles(),
                    this.setState(c, function () {
                      e || d.props.onStateChange(c),
                        d.props.disableAutoFocus ||
                          (c.isOpen
                            ? f
                              ? d.focusOnLastMenuItem()
                              : d.focusOnFirstMenuItem()
                            : document.activeElement
                            ? document.activeElement.blur()
                            : document.body.blur()),
                        d.timeoutId && clearTimeout(d.timeoutId),
                        (d.timeoutId = setTimeout(function () {
                          ;(d.timeoutId = null),
                            c.isOpen || d.applyWrapperStyles(!1)
                        }, 500))
                    })
                },
              },
              {
                key: 'open',
                value: function () {
                  'function' == typeof this.props.onOpen
                    ? this.props.onOpen()
                    : this.toggleMenu()
                },
              },
              {
                key: 'close',
                value: function () {
                  'function' == typeof this.props.onClose
                    ? this.props.onClose()
                    : this.toggleMenu()
                },
              },
              {
                key: 'overlayClick',
                value: function () {
                  !(
                    !0 === this.props.disableOverlayClick ||
                    ('function' == typeof this.props.disableOverlayClick &&
                      this.props.disableOverlayClick())
                  ) && this.close()
                },
              },
              {
                key: 'applyWrapperStyles',
                value: function () {
                  var b =
                      arguments.length <= 0 ||
                      void 0 === arguments[0] ||
                      arguments[0],
                    c = function (a, c) {
                      return a.classList[b ? 'add' : 'remove'](c)
                    }
                  this.props.htmlClassName &&
                    c(document.querySelector('html'), this.props.htmlClassName),
                    this.props.bodyClassName &&
                      c(
                        document.querySelector('body'),
                        this.props.bodyClassName
                      ),
                    a.pageWrap &&
                      this.props.pageWrapId &&
                      this.handleExternalWrapper(
                        this.props.pageWrapId,
                        a.pageWrap,
                        b
                      ),
                    a.outerContainer &&
                      this.props.outerContainerId &&
                      this.handleExternalWrapper(
                        this.props.outerContainerId,
                        a.outerContainer,
                        b
                      )
                },
              },
              {
                key: 'handleExternalWrapper',
                value: function (c, f, h) {
                  var d = document.getElementById(c)
                  if (!d) {
                    console.error("Element with ID '" + c + "' not found")
                    return
                  }
                  var a = this.getStyle(f)
                  for (var b in a)
                    a.hasOwnProperty(b) && (d.style[b] = h ? a[b] : '')
                  var e = function (a) {
                    return (a.style['overflow-x'] = h ? 'hidden' : '')
                  }
                  this.props.htmlClassName || e(document.querySelector('html')),
                    this.props.bodyClassName ||
                      e(document.querySelector('body'))
                },
              },
              {
                key: 'getStyles',
                value: function (c, f, d) {
                  var e =
                      'bm' + c.replace(c.charAt(0), c.charAt(0).toUpperCase()),
                    b = r.default[c] ? this.getStyle(r.default[c]) : {}
                  return (
                    a[c] && (b = l({}, b, this.getStyle(a[c], f + 1))),
                    this.props.styles[e] &&
                      (b = l({}, b, this.props.styles[e])),
                    d && (b = l({}, b, d)),
                    this.props.noTransition && delete b.transition,
                    b
                  )
                },
              },
              {
                key: 'getStyle',
                value: function (b, c) {
                  var a = this.props.width
                  return b(
                    this.state.isOpen,
                    'string' != typeof a ? a + 'px' : a,
                    this.props.right,
                    c
                  )
                },
              },
              {
                key: 'listenForKeyDowns',
                value: function (a) {
                  a = a || window.event
                  var b = 'ArrowDown',
                    c = 'ArrowUp'
                  if (this.state.isOpen)
                    switch (a.key) {
                      case 'Escape':
                        this.props.disableCloseOnEsc ||
                          (this.close(), this.focusOnMenuButton())
                        break
                      case b:
                        this.focusOnNextMenuItem()
                        break
                      case c:
                        this.focusOnPreviousMenuItem()
                        break
                      case 'Home':
                        this.focusOnFirstMenuItem()
                        break
                      case 'End':
                        this.focusOnLastMenuItem()
                    }
                  else if (
                    a.target ===
                    document.getElementById('react-burger-menu-btn')
                  )
                    switch (a.key) {
                      case b:
                      case 'Enter':
                      case ' ':
                        this.toggleMenu()
                        break
                      case c:
                        this.toggleMenu({ focusOnLastItem: !0 })
                    }
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this.onKeyDown = this.props.customOnKeyDown
                    ? this.props.customOnKeyDown
                    : this.listenForKeyDowns.bind(this)),
                    window.addEventListener('keydown', this.onKeyDown),
                    this.props.isOpen &&
                      this.toggleMenu({ isOpen: !0, noStateChange: !0 })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.onKeyDown),
                    this.applyWrapperStyles(!1),
                    this.timeoutId && clearTimeout(this.timeoutId)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (d) {
                  var b, c
                  if (
                    void 0 !== this.props.isOpen &&
                    this.props.isOpen !== this.state.isOpen &&
                    this.props.isOpen !== d.isOpen
                  ) {
                    this.toggleMenu()
                    return
                  }
                  a.svg &&
                    ((b = p.default.findDOMNode(this, 'bm-morph-shape')),
                    (c = a.svg.lib(b).select('path')),
                    this.state.isOpen
                      ? a.svg.animate(c)
                      : setTimeout(function () {
                          c.attr('d', a.svg.pathInitial)
                        }, 300))
                },
              },
              {
                key: 'render',
                value: function () {
                  var b = this
                  return o.default.createElement(
                    'div',
                    null,
                    !this.props.noOverlay &&
                      o.default.createElement('div', {
                        className: (
                          'bm-overlay ' + this.props.overlayClassName
                        ).trim(),
                        onClick: function () {
                          return b.overlayClick()
                        },
                        style: this.getStyles('overlay'),
                      }),
                    !1 !== this.props.customBurgerIcon &&
                      o.default.createElement(
                        'div',
                        { style: this.getStyles('burgerIcon') },
                        o.default.createElement(s.default, {
                          onClick: function () {
                            return b.open()
                          },
                          styles: this.props.styles,
                          customIcon: this.props.customBurgerIcon,
                          className: this.props.burgerButtonClassName,
                          barClassName: this.props.burgerBarClassName,
                          onIconStateChange: this.props.onIconStateChange,
                        })
                      ),
                    o.default.createElement(
                      'div',
                      {
                        id: this.props.id,
                        className: (
                          'bm-menu-wrap ' + this.props.className
                        ).trim(),
                        style: this.getStyles('menuWrap'),
                        'aria-hidden': !this.state.isOpen,
                      },
                      a.svg &&
                        o.default.createElement(
                          'div',
                          {
                            className: (
                              'bm-morph-shape ' + this.props.morphShapeClassName
                            ).trim(),
                            style: this.getStyles('morphShape'),
                          },
                          o.default.createElement(
                            'svg',
                            {
                              width: '100%',
                              height: '100%',
                              viewBox: '0 0 100 800',
                              preserveAspectRatio: 'none',
                            },
                            o.default.createElement('path', {
                              d: a.svg.pathInitial,
                            })
                          )
                        ),
                      o.default.createElement(
                        'div',
                        {
                          className: (
                            'bm-menu ' + this.props.menuClassName
                          ).trim(),
                          style: this.getStyles('menu'),
                        },
                        o.default.createElement(
                          this.props.itemListElement,
                          {
                            className: (
                              'bm-item-list ' + this.props.itemListClassName
                            ).trim(),
                            style: this.getStyles('itemList'),
                          },
                          o.default.Children.map(
                            this.props.children,
                            function (a, c) {
                              if (a) {
                                var d = {
                                  key: c,
                                  className: [
                                    'bm-item',
                                    b.props.itemClassName,
                                    a.props.className,
                                  ]
                                    .filter(function (a) {
                                      return !!a
                                    })
                                    .join(' '),
                                  style: b.getStyles('item', c, a.props.style),
                                  tabIndex: -1,
                                }
                                return o.default.cloneElement(a, d)
                              }
                            }
                          )
                        )
                      ),
                      !1 !== this.props.customCrossIcon &&
                        o.default.createElement(
                          'div',
                          { style: this.getStyles('closeButton') },
                          o.default.createElement(t.default, {
                            onClick: function () {
                              return b.close()
                            },
                            styles: this.props.styles,
                            customIcon: this.props.customCrossIcon,
                            className: this.props.crossButtonClassName,
                            crossClassName: this.props.crossClassName,
                          })
                        )
                    )
                  )
                },
              },
            ]),
            b
          )
        })(e.Component)
        return (
          (b.propTypes = {
            bodyClassName: q.default.string,
            burgerBarClassName: q.default.string,
            burgerButtonClassName: q.default.string,
            className: q.default.string,
            crossButtonClassName: q.default.string,
            crossClassName: q.default.string,
            customBurgerIcon: q.default.oneOfType([
              q.default.element,
              q.default.oneOf([!1]),
            ]),
            customCrossIcon: q.default.oneOfType([
              q.default.element,
              q.default.oneOf([!1]),
            ]),
            customOnKeyDown: q.default.func,
            disableAutoFocus: q.default.bool,
            disableCloseOnEsc: q.default.bool,
            disableOverlayClick: q.default.oneOfType([
              q.default.bool,
              q.default.func,
            ]),
            htmlClassName: q.default.string,
            id: q.default.string,
            isOpen: q.default.bool,
            itemClassName: q.default.string,
            itemListClassName: q.default.string,
            itemListElement: q.default.oneOf(['div', 'nav']),
            menuClassName: q.default.string,
            morphShapeClassName: q.default.string,
            noOverlay: q.default.bool,
            noTransition: q.default.bool,
            onClose: q.default.func,
            onIconHoverChange: q.default.func,
            onOpen: q.default.func,
            onStateChange: q.default.func,
            outerContainerId:
              a && a.outerContainer
                ? q.default.string.isRequired
                : q.default.string,
            overlayClassName: q.default.string,
            pageWrapId:
              a && a.pageWrap ? q.default.string.isRequired : q.default.string,
            right: q.default.bool,
            styles: q.default.object,
            width: q.default.oneOfType([q.default.number, q.default.string]),
          }),
          (b.defaultProps = {
            bodyClassName: '',
            burgerBarClassName: '',
            burgerButtonClassName: '',
            className: '',
            crossButtonClassName: '',
            crossClassName: '',
            disableAutoFocus: !1,
            disableCloseOnEsc: !1,
            htmlClassName: '',
            id: '',
            itemClassName: '',
            itemListClassName: '',
            menuClassName: '',
            morphShapeClassName: '',
            noOverlay: !1,
            noTransition: !1,
            onStateChange: function () {},
            outerContainerId: '',
            overlayClassName: '',
            pageWrapId: '',
            styles: {},
            width: 300,
            onIconHoverChange: function () {},
            itemListElement: 'nav',
          }),
          b
        )
      }),
        (d.exports = c.default)
    },
    3414: function (d, a, b) {
      'use strict'
      function c(a) {
        return a && a.__esModule ? a : { default: a }
      }
      Object.defineProperty(a, '__esModule', { value: !0 })
      var e = b(4503),
        f = c(e),
        h = b(4126),
        i = c(h),
        k = b(8227),
        j = {
          svg: {
            lib: f.default,
            pathInitial:
              'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
            pathOpen:
              'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
            animate: function (b) {
              var c = 0,
                a = this.pathOpen.split(';'),
                d = a.length,
                e = window.mina
              !(function f() {
                !(c > d - 1) &&
                  (b.animate(
                    { path: a[c] },
                    0 === c ? 400 : 500,
                    0 === c ? e.easein : e.elastic,
                    function () {
                      f()
                    }
                  ),
                  c++)
              })()
            },
          },
          morphShape: function (b, c, a) {
            return {
              position: 'absolute',
              width: '100%',
              height: '100%',
              right: a ? 'inherit' : 0,
              left: a ? 0 : 'inherit',
              MozTransform: a ? 'rotateY(180deg)' : 'rotateY(0deg)',
              MsTransform: a ? 'rotateY(180deg)' : 'rotateY(0deg)',
              OTransform: a ? 'rotateY(180deg)' : 'rotateY(0deg)',
              WebkitTransform: a ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transform: a ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }
          },
          menuWrap: function (a, c, b) {
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: a ? 'transform 0.4s 0s' : 'transform 0.4s',
            }
          },
          menu: function (b, d, c) {
            var a = (0, k.pxToNum)(d) - 140
            return {
              position: 'fixed',
              MozTransform: b
                ? ''
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: b
                ? ''
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: b
                ? ''
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: b
                ? ''
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: b
                ? ''
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: b
                ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: b ? 1 : 0,
            }
          },
          item: function (b, d, c, e) {
            var a = (0, k.pxToNum)(d) - 140
            return {
              MozTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: b
                ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: b ? 1 : 0,
            }
          },
          closeButton: function (b, d, c) {
            var a = (0, k.pxToNum)(d) - 140
            return {
              MozTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              MsTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              OTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              WebkitTransform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transform: b
                ? 'translate3d(0, 0, 0)'
                : c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)',
              transition: b
                ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)'
                : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
              opacity: b ? 1 : 0,
            }
          },
        }
      ;(a.default = (0, i.default)(j)), (d.exports = a.default)
    },
    2996: function (d, a, b) {
      'use strict'
      function c(a) {
        return a && a.__esModule ? a : { default: a }
      }
      Object.defineProperty(a, '__esModule', { value: !0 })
      var e = b(4503),
        f = c(e),
        h = b(4126),
        i = c(h),
        k = b(8227),
        j = {
          svg: {
            lib: f.default,
            pathInitial:
              'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
            pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
            animate: function (a) {
              a.animate({ path: this.pathOpen }, 400, window.mina.easeinout)
            },
          },
          morphShape: function (b, c, a) {
            return {
              position: 'absolute',
              width: 120,
              height: '100%',
              right: a ? 'inherit' : 0,
              left: a ? 0 : 'inherit',
              MozTransform: a ? 'rotateY(180deg)' : '',
              MsTransform: a ? 'rotateY(180deg)' : '',
              OTransform: a ? 'rotateY(180deg)' : '',
              WebkitTransform: a ? 'rotateY(180deg)' : '',
              transform: a ? 'rotateY(180deg)' : '',
            }
          },
          menuWrap: function (a, c, b) {
            return {
              MozTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              MsTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              OTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              WebkitTransform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transform: a
                ? 'translate3d(0, 0, 0)'
                : b
                ? 'translate3d(100%, 0, 0)'
                : 'translate3d(-100%, 0, 0)',
              transition: 'all 0.3s',
            }
          },
          menu: function (c, a, b) {
            return {
              position: 'fixed',
              right: b ? 0 : 'inherit',
              width: (0, k.pxToNum)(a) - 120,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              overflow: 'visible',
            }
          },
          itemList: function (b, c, a) {
            if (a)
              return {
                position: 'relative',
                left: '-110px',
                width: '170%',
                overflow: 'auto',
              }
          },
          pageWrap: function (a, c, b) {
            return {
              MozTransform: a
                ? ''
                : b
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              MsTransform: a
                ? ''
                : b
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              OTransform: a
                ? ''
                : b
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              WebkitTransform: a
                ? ''
                : b
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transform: a
                ? ''
                : b
                ? 'translate3d(-100px, 0, 0)'
                : 'translate3d(100px, 0, 0)',
              transition: a ? 'all 0.3s' : 'all 0.3s 0.1s',
            }
          },
          outerContainer: function (a) {
            return { overflow: a ? '' : 'hidden' }
          },
        }
      ;(a.default = (0, i.default)(j)), (d.exports = a.default)
    },
    5576: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        menuWrap: function (a) {
          return {
            MozTransform: a ? '' : 'translate3d(0, -100%, 0)',
            MsTransform: a ? '' : 'translate3d(0, -100%, 0)',
            OTransform: a ? '' : 'translate3d(0, -100%, 0)',
            WebkitTransform: a ? '' : 'translate3d(0, -100%, 0)',
            transform: a ? '' : 'translate3d(0, -100%, 0)',
            transition: 'all 0.5s ease-in-out',
          }
        },
        pageWrap: function (b, a, c) {
          return {
            MozTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            MsTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            OTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            WebkitTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return {
            perspective: '1500px',
            perspectiveOrigin: '0% 50%',
            overflow: a ? '' : 'hidden',
          }
        },
      })),
        (c.exports = b.default)
    },
    3976: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        pageWrap: function (b, a, c) {
          return {
            MozTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            MsTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            OTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            WebkitTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return { overflow: a ? '' : 'hidden' }
        },
      })),
        (c.exports = b.default)
    },
    8796: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        pageWrap: function (c, a, b) {
          return {
            MozTransform: c
              ? ''
              : b
              ? 'translate3d(-' + a + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + a + ', 0, 0) rotateY(-15deg)',
            MsTransform: c
              ? ''
              : b
              ? 'translate3d(-' + a + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + a + ', 0, 0) rotateY(-15deg)',
            OTransform: c
              ? ''
              : b
              ? 'translate3d(-' + a + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + a + ', 0, 0) rotateY(-15deg)',
            WebkitTransform: c
              ? ''
              : b
              ? 'translate3d(-' + a + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + a + ', 0, 0) rotateY(-15deg)',
            transform: c
              ? ''
              : b
              ? 'translate3d(-' + a + ', 0, 0) rotateY(15deg)'
              : 'translate3d(' + a + ', 0, 0) rotateY(-15deg)',
            transformOrigin: b ? '100% 50%' : '0% 50%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function (a) {
          return { perspective: '1500px', overflow: a ? '' : 'hidden' }
        },
      })),
        (c.exports = b.default)
    },
    6523: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        menuWrap: function (a, b, c) {
          return {
            MozTransform: 'translate3d(0, 0, 0)',
            MsTransform: 'translate3d(0, 0, 0)',
            OTransform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            zIndex: a ? 1e3 : -1,
          }
        },
        overlay: function (b, a, c) {
          return {
            zIndex: 1400,
            MozTransform: b
              ? c
                ? 'translate3d(-' + a + ', 0, 0)'
                : 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: b
              ? c
                ? 'translate3d(-' + a + ', 0, 0)'
                : 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: b
              ? c
                ? 'translate3d(-' + a + ', 0, 0)'
                : 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: b
              ? c
                ? 'translate3d(-' + a + ', 0, 0)'
                : 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: b
              ? c
                ? 'translate3d(-' + a + ', 0, 0)'
                : 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.5s',
            visibility: b ? 'visible' : 'hidden',
          }
        },
        pageWrap: function (b, a, c) {
          return {
            MozTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            MsTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            OTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            WebkitTransform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transform: b
              ? ''
              : c
              ? 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(' + a + ', 0, 0)',
            transition: 'all 0.5s',
            zIndex: 1200,
            position: 'relative',
          }
        },
        burgerIcon: function (b, a, c) {
          return {
            MozTransform: b
              ? c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            MsTransform: b
              ? c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            OTransform: b
              ? c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            WebkitTransform: b
              ? c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transform: b
              ? c
                ? 'translate3d(' + a + ', 0, 0)'
                : 'translate3d(-' + a + ', 0, 0)'
              : 'translate3d(0, 0, 0)',
            transition: 'all 0.1s',
            position: 'relative',
            zIndex: 1300,
          }
        },
        outerContainer: function (a) {
          return { overflow: a ? '' : 'hidden' }
        },
      })),
        (c.exports = b.default)
    },
    9070: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, b) {
          return {
            MozTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            MsTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            OTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            WebkitTransform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            transform: a ? '' : 'translate3d(0, 0, -' + b + ')',
            transformOrigin: '100%',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
          }
        },
        outerContainer: function () {
          return { perspective: '1500px' }
        },
      })),
        (c.exports = b.default)
    },
    6001: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        pageWrap: function (a, c, b) {
          return {
            MozTransform: a
              ? ''
              : b
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            MsTransform: a
              ? ''
              : b
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            OTransform: a
              ? ''
              : b
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            WebkitTransform: a
              ? ''
              : b
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transform: a
              ? ''
              : b
              ? 'translate3d(-100px, 0, -600px) rotateY(20deg)'
              : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: a ? '' : 'hidden',
          }
        },
        outerContainer: function (a) {
          return { perspective: '1500px', overflow: a ? '' : 'hidden' }
        },
      })),
        (c.exports = b.default)
    },
    6432: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({})), (c.exports = b.default)
    },
    7277: function (c, b, d) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 })
      var a,
        e = (a = d(4126)) && a.__esModule ? a : { default: a }
      ;(b.default = (0, e.default)({
        menuWrap: function (b, a, c) {
          return {
            MozTransform: b
              ? ''
              : c
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
            MsTransform: b
              ? ''
              : c
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
            OTransform: b
              ? ''
              : c
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
            WebkitTransform: b
              ? ''
              : c
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
            transform: b
              ? ''
              : c
              ? 'translate3d(' + a + ', 0, 0)'
              : 'translate3d(-' + a + ', 0, 0)',
            transition: b
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
        item: function (a, c, d, b) {
          return {
            MozTransform: a ? '' : 'translate3d(0, ' + 500 * b + 'px, 0)',
            MsTransform: a ? '' : 'translate3d(0, ' + 500 * b + 'px, 0)',
            OTransform: a ? '' : 'translate3d(0, ' + 500 * b + 'px, 0)',
            WebkitTransform: a ? '' : 'translate3d(0, ' + 500 * b + 'px, 0)',
            transform: a ? '' : 'translate3d(0, ' + 500 * b + 'px, 0)',
            transition: a
              ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)'
              : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)',
          }
        },
      })),
        (c.exports = b.default)
    },
    4503: function (b, a, c) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = function () {
          var a = void 0
          try {
            a = c(1223)
          } finally {
            return a
          }
        }),
        (b.exports = a.default)
    },
    8227: function (b, a) {
      'use strict'
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.pxToNum = function (a) {
          return parseInt(a.slice(0, -2), 10)
        })
    },
    6893: function (c, b, a) {
      'use strict'
      a.d(b, {
        AlO: function () {
          return h
        },
        EQ9: function () {
          return l
        },
        HR2: function () {
          return f
        },
        NOg: function () {
          return i
        },
        QoU: function () {
          return j
        },
        Siq: function () {
          return e
        },
        cur: function () {
          return k
        },
        gU9: function () {
          return q
        },
        jMy: function () {
          return o
        },
        kXG: function () {
          return p
        },
        q5L: function () {
          return r
        },
        wOW: function () {
          return m
        },
        xaD: function () {
          return n
        },
      })
      var d = a(8357)
      function e(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '5', r: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '22', x2: '12', y2: '8' } },
            { tag: 'path', attr: { d: 'M5 12H2a10 10 0 0 0 20 0h-3' } },
          ],
        })(a)
      }
      function f(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '8', r: '7' } },
            {
              tag: 'polyline',
              attr: { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' },
            },
          ],
        })(a)
      }
      function h(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
              },
            },
            { tag: 'polyline', attr: { points: '15 3 21 3 21 9' } },
            { tag: 'line', attr: { x1: '10', y1: '14', x2: '21', y2: '3' } },
          ],
        })(a)
      }
      function i(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
              },
            },
            { tag: 'polyline', attr: { points: '14 2 14 8 20 8' } },
            { tag: 'line', attr: { x1: '16', y1: '13', x2: '8', y2: '13' } },
            { tag: 'line', attr: { x1: '16', y1: '17', x2: '8', y2: '17' } },
            { tag: 'polyline', attr: { points: '10 9 9 9 8 9' } },
          ],
        })(a)
      }
      function j(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
              },
            },
          ],
        })(a)
      }
      function k(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '3', y1: '12', x2: '21', y2: '12' } },
            { tag: 'line', attr: { x1: '3', y1: '6', x2: '21', y2: '6' } },
            { tag: 'line', attr: { x1: '3', y1: '18', x2: '21', y2: '18' } },
          ],
        })(a)
      }
      function l(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
              },
            },
          ],
        })(a)
      }
      function m(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'path',
              attr: { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' },
            },
          ],
        })(a)
      }
      function n(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'path', attr: { d: 'M4 11a9 9 0 0 1 9 9' } },
            { tag: 'path', attr: { d: 'M4 4a16 16 0 0 1 16 16' } },
            { tag: 'circle', attr: { cx: '5', cy: '19', r: '1' } },
          ],
        })(a)
      }
      function o(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '10' } },
            { tag: 'path', attr: { d: 'M8 14s1.5 2 4 2 4-2 4-2' } },
            { tag: 'line', attr: { x1: '9', y1: '9', x2: '9.01', y2: '9' } },
            { tag: 'line', attr: { x1: '15', y1: '9', x2: '15.01', y2: '9' } },
          ],
        })(a)
      }
      function p(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'circle', attr: { cx: '12', cy: '12', r: '5' } },
            { tag: 'line', attr: { x1: '12', y1: '1', x2: '12', y2: '3' } },
            { tag: 'line', attr: { x1: '12', y1: '21', x2: '12', y2: '23' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' },
            },
            { tag: 'line', attr: { x1: '1', y1: '12', x2: '3', y2: '12' } },
            { tag: 'line', attr: { x1: '21', y1: '12', x2: '23', y2: '12' } },
            {
              tag: 'line',
              attr: { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' },
            },
            {
              tag: 'line',
              attr: { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' },
            },
          ],
        })(a)
      }
      function q(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            {
              tag: 'rect',
              attr: {
                x: '1',
                y: '5',
                width: '22',
                height: '14',
                rx: '7',
                ry: '7',
              },
            },
            { tag: 'circle', attr: { cx: '8', cy: '12', r: '3' } },
          ],
        })(a)
      }
      function r(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          child: [
            { tag: 'line', attr: { x1: '18', y1: '6', x2: '6', y2: '18' } },
            { tag: 'line', attr: { x1: '6', y1: '6', x2: '18', y2: '18' } },
          ],
        })(a)
      }
    },
    5155: function (c, b, a) {
      'use strict'
      a.d(b, {
        Xai: function () {
          return i
        },
        juy: function () {
          return f
        },
        lUN: function () {
          return h
        },
        lfl: function () {
          return e
        },
      })
      var d = a(8357)
      function e(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1',
              },
            },
          ],
        })(a)
      }
      function f(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z',
              },
            },
          ],
        })(a)
      }
      function h(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M2.84593838,5.88685595 C2.87575654,5.59224254 2.76340763,5.30104995 2.54341737,5.10276397 L0.302521008,2.4032473 L0.302521008,2 L7.2605042,2 L12.6386555,13.7949836 L17.3669469,2 L24,2 L24,2.4032473 L22.0840336,4.2402628 C21.9188563,4.36617057 21.8369199,4.57310892 21.8711485,4.77792587 L21.8711485,18.2755093 C21.8369199,18.4803262 21.9188563,18.6872645 22.0840336,18.8131723 L23.9551821,20.6501878 L23.9551821,21.0534351 L14.5434174,21.0534351 L14.5434174,20.6501878 L16.4817928,18.7683671 C16.6722689,18.5779447 16.6722689,18.5219382 16.6722689,18.2307041 L16.6722689,7.32062416 L11.2829132,21.0086299 L10.5546219,21.0086299 L4.28011204,7.32062416 L4.28011204,16.4945003 C4.22779746,16.8801958 4.35589372,17.2685069 4.62745097,17.5474239 L7.14845938,20.6053826 L7.14845938,21.0086299 L0,21.0086299 L0,20.6053826 L2.5210084,17.5474239 C2.79058848,17.2680445 2.91121535,16.8771576 2.84593838,16.4945003 L2.84593838,5.88685595 Z',
              },
            },
          ],
        })(a)
      }
      function i(a) {
        return (0, d.w_)({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086',
              },
            },
          ],
        })(a)
      }
    },
    8357: function (e, c, a) {
      'use strict'
      a.d(c, {
        w_: function () {
          return k
        },
      })
      var b = a(7294),
        d = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        f = b.createContext && b.createContext(d),
        h = function () {
          return (h =
            Object.assign ||
            function (d) {
              for (var a, b = 1, e = arguments.length; b < e; b++)
                for (var c in (a = arguments[b]))
                  Object.prototype.hasOwnProperty.call(a, c) && (d[c] = a[c])
              return d
            }).apply(this, arguments)
        },
        i = function (b, e) {
          var d = {}
          for (var a in b)
            Object.prototype.hasOwnProperty.call(b, a) &&
              0 > e.indexOf(a) &&
              (d[a] = b[a])
          if (null != b && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var c = 0, a = Object.getOwnPropertySymbols(b);
              c < a.length;
              c++
            )
              0 > e.indexOf(a[c]) &&
                Object.prototype.propertyIsEnumerable.call(b, a[c]) &&
                (d[a[c]] = b[a[c]])
          return d
        }
      function j(a) {
        return (
          a &&
          a.map(function (a, c) {
            return b.createElement(a.tag, h({ key: c }, a.attr), j(a.child))
          })
        )
      }
      function k(a) {
        return function (c) {
          return b.createElement(l, h({ attr: h({}, a.attr) }, c), j(a.child))
        }
      }
      function l(c) {
        var a = function (a) {
          var d,
            j = c.attr,
            k = c.size,
            e = c.title,
            l = i(c, ['attr', 'size', 'title']),
            f = k || a.size || '1em'
          return (
            a.className && (d = a.className),
            c.className && (d = (d ? d + ' ' : '') + c.className),
            b.createElement(
              'svg',
              h(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                a.attr,
                j,
                l,
                {
                  className: d,
                  style: h(h({ color: c.color || a.color }, a.style), c.style),
                  height: f,
                  width: f,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              e && b.createElement('title', null, e),
              c.children
            )
          )
        }
        return void 0 !== f
          ? b.createElement(f.Consumer, null, function (b) {
              return a(b)
            })
          : a(d)
      }
    },
    1223: function (d, v, e) {
      window.eve = e(1530)
      var f,
        w,
        h,
        i,
        j,
        k,
        l,
        m,
        c,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        b,
        x =
          ((f = 'undefined' == typeof eve ? function () {} : eve),
          (h = {}),
          (i =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (a) {
              return setTimeout(a, 16, new Date().getTime()), !0
            }),
          (j =
            Array.isArray ||
            function (a) {
              return (
                a instanceof Array ||
                '[object Array]' == Object.prototype.toString.call(a)
              )
            }),
          (k = 0),
          (l = 'M' + (+new Date()).toString(36)),
          (m = function (b, c, d, e) {
            if (j(b)) {
              res = []
              for (var a = 0, f = b.length; a < f; a++)
                res[a] = m(b[a], c, d[a], e)
              return res
            }
            var h = (d - b) / (e - c)
            return function (a) {
              return b + h * (a - c)
            }
          }),
          (c =
            Date.now ||
            function () {
              return +new Date()
            }),
          (n = function (b) {
            var a = this
            if (null == b) return a.s
            var c = a.s - b
            ;(a.b += a.dur * c), (a.B += a.dur * c), (a.s = b)
          }),
          (o = function (a) {
            var b = this
            if (null == a) return b.spd
            b.spd = a
          }),
          (p = function (b) {
            var a = this
            if (null == b) return a.dur
            ;(a.s = (a.s * b) / a.dur), (a.dur = b)
          }),
          (q = function () {
            delete h[this.id], this.update(), f('mina.stop.' + this.id, this)
          }),
          (r = function () {
            var a = this
            !a.pdif && (delete h[a.id], a.update(), (a.pdif = a.get() - a.b))
          }),
          (s = function () {
            var a = this
            a.pdif &&
              ((a.b = a.get() - a.pdif), delete a.pdif, (h[a.id] = a), u())
          }),
          (t = function () {
            var b
            if (j(this.start)) {
              b = []
              for (var a = 0, c = this.start.length; a < c; a++)
                b[a] =
                  +this.start[a] +
                  (this.end[a] - this.start[a]) * this.easing(this.s)
            } else
              b = +this.start + (this.end - this.start) * this.easing(this.s)
            this.set(b)
          }),
          (u = function (d) {
            if (!d) {
              w || (w = i(u))
              return
            }
            var b = 0
            for (var c in h)
              if (h.hasOwnProperty(c)) {
                var a = h[c],
                  e = a.get()
                b++,
                  (a.s = (e - a.b) / (a.dur / a.spd)),
                  a.s >= 1 &&
                    (delete h[c],
                    (a.s = 1),
                    b--,
                    (function (a) {
                      setTimeout(function () {
                        f('mina.finish.' + a.id, a)
                      })
                    })(a)),
                  a.update()
              }
            w = !!b && i(u)
          }),
          ((b = function (f, i, c, j, m, v, w) {
            var a = {
              id: l + (k++).toString(36),
              start: f,
              end: i,
              b: c,
              s: 0,
              dur: j - c,
              spd: 1,
              get: m,
              set: v,
              easing: w || b.linear,
              status: n,
              speed: o,
              duration: p,
              stop: q,
              pause: r,
              resume: s,
              update: t,
            }
            h[a.id] = a
            var d,
              e = 0
            for (d in h) if (h.hasOwnProperty(d) && 2 == ++e) break
            return 1 == e && u(), a
          }).time = c),
          (b.getById = function (a) {
            return h[a] || null
          }),
          (b.linear = function (a) {
            return a
          }),
          (b.easeout = function (a) {
            return Math.pow(a, 1.7)
          }),
          (b.easein = function (a) {
            return Math.pow(a, 0.48)
          }),
          (b.easeinout = function (c) {
            if (1 == c) return 1
            if (0 == c) return 0
            var b = 0.48 - c / 1.04,
              d = Math.sqrt(0.1734 + b * b),
              e = d - b,
              f = -d - b,
              a =
                Math.pow(Math.abs(e), 1 / 3) * (e < 0 ? -1 : 1) +
                Math.pow(Math.abs(f), 1 / 3) * (f < 0 ? -1 : 1) +
                0.5
            return (1 - a) * 3 * a * a + a * a * a
          }),
          (b.backin = function (a) {
            return 1 == a ? 1 : a * a * (2.70158 * a - 1.70158)
          }),
          (b.backout = function (a) {
            return 0 == a ? 0 : (a -= 1) * a * (2.70158 * a + 1.70158) + 1
          }),
          (b.elastic = function (a) {
            return !!a == a
              ? a
              : Math.pow(2, -10 * a) *
                  Math.sin(((a - 0.075) * (2 * Math.PI)) / 0.3) +
                  1
          }),
          (b.bounce = function (a) {
            var b
            return (
              a < 0.36363636363636365
                ? (b = 7.5625 * a * a)
                : a < 0.7272727272727273
                ? ((a -= 0.5454545454545454), (b = 7.5625 * a * a + 0.75))
                : a < 0.9090909090909091
                ? ((a -= 0.8181818181818182), (b = 7.5625 * a * a + 0.9375))
                : ((a -= 0.9545454545454546), (b = 7.5625 * a * a + 0.984375)),
              b
            )
          }),
          (window.mina = b),
          b),
        a = (function (f) {
          function a(b, c) {
            if (b) {
              if (b.nodeType) return t(b)
              if (n(b, 'array') && a.set) return a.set.apply(a, b)
              if (b instanceof e) return b
              if (null == c)
                try {
                  return (b = d.doc.querySelector(String(b))), t(b)
                } catch (f) {
                  return null
                }
            }
            return (
              (b = null == b ? '100%' : b),
              (c = null == c ? '100%' : c),
              new h(b, c)
            )
          }
          ;(a.version = '0.5.1'),
            (a.toString = function () {
              return 'Snap v' + this.version
            }),
            (a._ = {})
          var i,
            j,
            k,
            d = { win: f.window, doc: f.window.document }
          a._.glob = d
          var u = 'hasOwnProperty',
            v = String,
            w = parseFloat,
            x = parseInt,
            b = Math,
            y = b.max,
            z = b.min,
            A = b.abs,
            B = (b.pow, b.PI),
            C = (b.round, Object.prototype.toString),
            D =
              /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            E = ((a._.separator = /[,\s]+/), /[\s]*,[\s]*/),
            F = { hs: 1, rg: 1 },
            G = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            H = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
            I = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
            J = 0,
            K = 'S' + (+new Date()).toString(36),
            l = function (a) {
              return (a && a.type ? a.type : '') + K + (J++).toString(36)
            },
            L = 'http://www.w3.org/1999/xlink',
            M = 'http://www.w3.org/2000/svg',
            N = {}
          function m(a, b) {
            if (b) {
              if (
                ('#text' == a &&
                  (a = d.doc.createTextNode(b.text || b['#text'] || '')),
                '#comment' == a &&
                  (a = d.doc.createComment(b.text || b['#text'] || '')),
                'string' == typeof a && (a = m(a)),
                'string' == typeof b)
              )
                return 1 == a.nodeType
                  ? 'xlink:' == b.substring(0, 6)
                    ? a.getAttributeNS(L, b.substring(6))
                    : 'xml:' == b.substring(0, 4)
                    ? a.getAttributeNS(M, b.substring(4))
                    : a.getAttribute(b)
                  : 'text' == b
                  ? a.nodeValue
                  : null
              if (1 == a.nodeType) {
                for (var c in b)
                  if (b[u](c)) {
                    var e = v(b[c])
                    e
                      ? 'xlink:' == c.substring(0, 6)
                        ? a.setAttributeNS(L, c.substring(6), e)
                        : 'xml:' == c.substring(0, 4)
                        ? a.setAttributeNS(M, c.substring(4), e)
                        : a.setAttribute(c, e)
                      : a.removeAttribute(c)
                  }
              } else 'text' in b && (a.nodeValue = b.text)
            } else a = d.doc.createElementNS(M, a)
            return a
          }
          function n(a, b) {
            return 'finite' == (b = v.prototype.toLowerCase.call(b))
              ? isFinite(a)
              : !!(
                  'array' == b &&
                  (a instanceof Array || (Array.isArray && Array.isArray(a)))
                ) ||
                  ('null' == b && null === a) ||
                  (b == typeof a && null !== a) ||
                  ('object' == b && a === Object(a)) ||
                  C.call(a).slice(8, -1).toLowerCase() == b
          }
          function o(a) {
            if ('function' == typeof a || Object(a) !== a) return a
            var c = new a.constructor()
            for (var b in a) a[u](b) && (c[b] = o(a[b]))
            return c
          }
          function c(b, c, d) {
            function a() {
              var i = Array.prototype.slice.call(arguments, 0),
                e = i.join('\u2400'),
                f = (a.cache = a.cache || {}),
                h = (a.count = a.count || [])
              return f[u](e)
                ? (!(function (a, c) {
                    for (var b = 0, d = a.length; b < d; b++)
                      if (a[b] === c) return a.push(a.splice(b, 1)[0])
                  })(h, e),
                  d ? d(f[e]) : f[e])
                : (h.length >= 1e3 && delete f[h.shift()],
                  h.push(e),
                  (f[e] = b.apply(c, i)),
                  d ? d(f[e]) : f[e])
            }
            return a
          }
          function p(c, d, e, f, a, h) {
            if (null != a) return p(c, d, a, h) - p(e, f, a, h)
            var i = c - e,
              j = d - f
            return i || j ? (180 + (180 * b.atan2(-j, -i)) / B + 360) % 360 : 0
          }
          function q(a) {
            return ((a % 360) * B) / 180
          }
          ;(a.url = function (a) {
            return "url('#" + a + "')"
          }),
            (a._.$ = m),
            (a._.id = l),
            (a.format =
              ((i = /\{([^\}]+)\}/g),
              (j = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
              (k = function (c, d, b) {
                var a = b
                return (
                  d.replace(j, function (e, b, f, c, d) {
                    ;(b = b || c),
                      a &&
                        (b in a && (a = a[b]),
                        'function' == typeof a && d && (a = a()))
                  }),
                  (a = (null == a || a == b ? c : a) + '')
                )
              }),
              function (a, b) {
                return v(a).replace(i, function (a, c) {
                  return k(a, c, b)
                })
              })),
            (a._.clone = o),
            (a._.cacher = c),
            (a.rad = q),
            (a.deg = function (a) {
              return ((180 * a) / B) % 360
            }),
            (a.sin = function (c) {
              return b.sin(a.rad(c))
            }),
            (a.tan = function (c) {
              return b.tan(a.rad(c))
            }),
            (a.cos = function (c) {
              return b.cos(a.rad(c))
            }),
            (a.asin = function (c) {
              return a.deg(b.asin(c))
            }),
            (a.acos = function (c) {
              return a.deg(b.acos(c))
            }),
            (a.atan = function (c) {
              return a.deg(b.atan(c))
            }),
            (a.atan2 = function (c) {
              return a.deg(b.atan2(c))
            }),
            (a.angle = p),
            (a.len = function (b, c, d, e) {
              return Math.sqrt(a.len2(b, c, d, e))
            }),
            (a.len2 = function (a, b, c, d) {
              return (a - c) * (a - c) + (b - d) * (b - d)
            }),
            (a.closestPoint = function (r, s, t) {
              function h(a) {
                var b = a.x - s,
                  c = a.y - t
                return b * b + c * c
              }
              for (
                var l,
                  m,
                  i,
                  j,
                  n,
                  o,
                  d,
                  b,
                  p,
                  q,
                  e = r.node,
                  k = e.getTotalLength(),
                  c = (k / e.pathSegList.numberOfItems) * 0.125,
                  a = 1 / 0,
                  f = 0;
                f <= k;
                f += c
              )
                (q = h((p = e.getPointAtLength(f)))) < a &&
                  ((d = p), (b = f), (a = q))
              for (c *= 0.5; c > 0.5; )
                (i = b - c) >= 0 && (n = h((l = e.getPointAtLength(i)))) < a
                  ? ((d = l), (b = i), (a = n))
                  : (j = b + c) <= k && (o = h((m = e.getPointAtLength(j)))) < a
                  ? ((d = m), (b = j), (a = o))
                  : (c *= 0.5)
              return { x: d.x, y: d.y, length: b, distance: Math.sqrt(a) }
            }),
            (a.is = n),
            (a.snapTo = function (a, c, b) {
              if (((b = n(b, 'finite') ? b : 10), n(a, 'array'))) {
                for (var e = a.length; e--; ) if (A(a[e] - c) <= b) return a[e]
              } else {
                var d = c % (a = +a)
                if (d < b) return c - d
                if (d > a - b) return c - d + a
              }
              return c
            }),
            (a.getRGB = c(function (j) {
              if (!j || (j = v(j)).indexOf('-') + 1)
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  error: 1,
                  toString: P,
                }
              if ('none' == j)
                return { r: -1, g: -1, b: -1, hex: 'none', toString: P }
              if (
                (F[u](j.toLowerCase().substring(0, 2)) ||
                  '#' == j.charAt() ||
                  (j = O(j)),
                !j)
              )
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  error: 1,
                  toString: P,
                }
              var e,
                f,
                h,
                i,
                k,
                c,
                d = j.match(D)
              return d
                ? (d[2] &&
                    ((h = x(d[2].substring(5), 16)),
                    (f = x(d[2].substring(3, 5), 16)),
                    (e = x(d[2].substring(1, 3), 16))),
                  d[3] &&
                    ((h = x((k = d[3].charAt(3)) + k, 16)),
                    (f = x((k = d[3].charAt(2)) + k, 16)),
                    (e = x((k = d[3].charAt(1)) + k, 16))),
                  d[4] &&
                    ((e = w((c = d[4].split(E))[0])),
                    '%' == c[0].slice(-1) && (e *= 2.55),
                    (f = w(c[1])),
                    '%' == c[1].slice(-1) && (f *= 2.55),
                    (h = w(c[2])),
                    '%' == c[2].slice(-1) && (h *= 2.55),
                    'rgba' == d[1].toLowerCase().slice(0, 4) && (i = w(c[3])),
                    c[3] && '%' == c[3].slice(-1) && (i /= 100)),
                  d[5])
                  ? ((e = w((c = d[5].split(E))[0])),
                    '%' == c[0].slice(-1) && (e /= 100),
                    (f = w(c[1])),
                    '%' == c[1].slice(-1) && (f /= 100),
                    (h = w(c[2])),
                    '%' == c[2].slice(-1) && (h /= 100),
                    ('deg' == c[0].slice(-3) || '\xb0' == c[0].slice(-1)) &&
                      (e /= 360),
                    'hsba' == d[1].toLowerCase().slice(0, 4) && (i = w(c[3])),
                    c[3] && '%' == c[3].slice(-1) && (i /= 100),
                    a.hsb2rgb(e, f, h, i))
                  : d[6]
                  ? ((e = w((c = d[6].split(E))[0])),
                    '%' == c[0].slice(-1) && (e /= 100),
                    (f = w(c[1])),
                    '%' == c[1].slice(-1) && (f /= 100),
                    (h = w(c[2])),
                    '%' == c[2].slice(-1) && (h /= 100),
                    ('deg' == c[0].slice(-3) || '\xb0' == c[0].slice(-1)) &&
                      (e /= 360),
                    'hsla' == d[1].toLowerCase().slice(0, 4) && (i = w(c[3])),
                    c[3] && '%' == c[3].slice(-1) && (i /= 100),
                    a.hsl2rgb(e, f, h, i))
                  : ((e = z(b.round(e), 255)),
                    (f = z(b.round(f), 255)),
                    (h = z(b.round(h), 255)),
                    (i = z(y(i, 0), 1)),
                    (d = { r: e, g: f, b: h, toString: P }),
                    (d.hex =
                      '#' +
                      (16777216 | h | (f << 8) | (e << 16))
                        .toString(16)
                        .slice(1)),
                    (d.opacity = n(i, 'finite') ? i : 1),
                    d)
                : { r: -1, g: -1, b: -1, hex: 'none', error: 1, toString: P }
            }, a)),
            (a.hsb = c(function (b, c, d) {
              return a.hsb2rgb(b, c, d).hex
            })),
            (a.hsl = c(function (b, c, d) {
              return a.hsl2rgb(b, c, d).hex
            })),
            (a.rgb = c(function (c, d, e, f) {
              if (n(f, 'finite')) {
                var a = b.round
                return 'rgba(' + [a(c), a(d), a(e), +f.toFixed(2)] + ')'
              }
              return (
                '#' +
                (16777216 | e | (d << 8) | (c << 16)).toString(16).slice(1)
              )
            }))
          var O = function (a) {
              var b =
                  d.doc.getElementsByTagName('head')[0] ||
                  d.doc.getElementsByTagName('svg')[0],
                e = 'rgb(255, 0, 0)'
              return (O = c(function (a) {
                if ('red' == a.toLowerCase()) return e
                ;(b.style.color = e), (b.style.color = a)
                var c = d.doc.defaultView
                  .getComputedStyle(b, '')
                  .getPropertyValue('color')
                return c == e ? null : c
              }))(a)
            },
            P = function () {
              return 1 == this.opacity || null == this.opacity
                ? this.hex
                : 'rgba(' + [this.r, this.g, this.b, this.opacity] + ')'
            },
            Q = function (b, c, d) {
              if (
                (null == c &&
                  n(b, 'object') &&
                  'r' in b &&
                  'g' in b &&
                  'b' in b &&
                  ((d = b.b), (c = b.g), (b = b.r)),
                null == c && n(b, string))
              ) {
                var e = a.getRGB(b)
                ;(b = e.r), (c = e.g), (d = e.b)
              }
              return (
                (b > 1 || c > 1 || d > 1) &&
                  ((b /= 255), (c /= 255), (d /= 255)),
                [b, c, d]
              )
            },
            R = function (c, d, f, e) {
              ;(c = b.round(255 * c)), (d = b.round(255 * d))
              var h = {
                r: c,
                g: d,
                b: (f = b.round(255 * f)),
                opacity: n(e, 'finite') ? e : 1,
                hex: a.rgb(c, d, f),
                toString: P,
              }
              return n(e, 'finite') && (h.opacity = e), h
            }
          ;(a.color = function (b) {
            var c
            return (
              n(b, 'object') && 'h' in b && 's' in b && 'b' in b
                ? ((c = a.hsb2rgb(b)),
                  (b.r = c.r),
                  (b.g = c.g),
                  (b.b = c.b),
                  (b.opacity = 1),
                  (b.hex = c.hex))
                : n(b, 'object') && 'h' in b && 's' in b && 'l' in b
                ? ((c = a.hsl2rgb(b)),
                  (b.r = c.r),
                  (b.g = c.g),
                  (b.b = c.b),
                  (b.opacity = 1),
                  (b.hex = c.hex))
                : (n(b, 'string') && (b = a.getRGB(b)),
                  n(b, 'object') &&
                  'r' in b &&
                  'g' in b &&
                  'b' in b &&
                  !('error' in b)
                    ? ((c = a.rgb2hsl(b)),
                      (b.h = c.h),
                      (b.s = c.s),
                      (b.l = c.l),
                      (c = a.rgb2hsb(b)),
                      (b.v = c.b))
                    : (((b = { hex: 'none' }).r =
                        b.g =
                        b.b =
                        b.h =
                        b.s =
                        b.v =
                        b.l =
                          -1),
                      (b.error = 1))),
              (b.toString = P),
              b
            )
          }),
            (a.hsb2rgb = function (a, i, d, j) {
              var e, f, h, c, b
              return (
                n(a, 'object') &&
                  'h' in a &&
                  's' in a &&
                  'b' in a &&
                  ((d = a.b), (i = a.s), (j = a.o), (a = a.h)),
                (a *= 360),
                (a = (a % 360) / 60),
                (c = (b = d * i) * (1 - A((a % 2) - 1))),
                (e = f = h = d - b),
                (a = ~~a),
                (e += [b, c, 0, 0, c, b][a]),
                (f += [c, b, b, c, 0, 0][a]),
                (h += [0, 0, c, b, b, c][a]),
                R(e, f, h, j)
              )
            }),
            (a.hsl2rgb = function (a, e, c, j) {
              var f, h, i, d, b
              return (
                n(a, 'object') &&
                  'h' in a &&
                  's' in a &&
                  'l' in a &&
                  ((c = a.l), (e = a.s), (a = a.h)),
                (a > 1 || e > 1 || c > 1) &&
                  ((a /= 360), (e /= 100), (c /= 100)),
                (a *= 360),
                (a = (a % 360) / 60),
                (d =
                  (b = 2 * e * (c < 0.5 ? c : 1 - c)) * (1 - A((a % 2) - 1))),
                (f = h = i = c - b / 2),
                (a = ~~a),
                (f += [b, d, 0, 0, d, b][a]),
                (h += [d, b, b, d, 0, 0][a]),
                (i += [0, 0, d, b, b, d][a]),
                R(f, h, i, j)
              )
            }),
            (a.rgb2hsb = function (b, c, a) {
              var f, h, e, d
              return (
                (b = (a = Q(b, c, a))[0]),
                (c = a[1]),
                (a = a[2]),
                (e = y(b, c, a)),
                (d = e - z(b, c, a)),
                (f =
                  0 == d
                    ? null
                    : e == b
                    ? (c - a) / d
                    : e == c
                    ? (a - b) / d + 2
                    : (b - c) / d + 4),
                (f = (((f + 360) % 6) * 60) / 360),
                (h = 0 == d ? 0 : d / e),
                {
                  h: f,
                  s: h,
                  b: e,
                  toString: function () {
                    return 'hsb(' + [this.h, this.s, this.b] + ')'
                  },
                }
              )
            }),
            (a.rgb2hsl = function (c, d, a) {
              var h, j, e, f, i, b
              return (
                (c = (a = Q(c, d, a))[0]),
                (d = a[1]),
                (a = a[2]),
                (f = y(c, d, a)),
                (i = z(c, d, a)),
                (b = f - i),
                (h =
                  0 == b
                    ? null
                    : f == c
                    ? (d - a) / b
                    : f == d
                    ? (a - c) / b + 2
                    : (c - d) / b + 4),
                (h = (((h + 360) % 6) * 60) / 360),
                (e = (f + i) / 2),
                (j = 0 == b ? 0 : e < 0.5 ? b / (2 * e) : b / (2 - 2 * e)),
                {
                  h: h,
                  s: j,
                  l: e,
                  toString: function () {
                    return 'hsl(' + [this.h, this.s, this.l] + ')'
                  },
                }
              )
            }),
            (a.parsePathString = function (b) {
              if (!b) return null
              var d = a.path(b)
              if (d.arr) return a.path.clone(d.arr)
              var e = {
                  a: 7,
                  c: 6,
                  o: 2,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  u: 3,
                  z: 0,
                },
                c = []
              return (
                n(b, 'array') && n(b[0], 'array') && (c = a.path.clone(b)),
                c.length ||
                  v(b).replace(G, function (h, a, f) {
                    var b = [],
                      d = a.toLowerCase()
                    if (
                      (f.replace(I, function (c, a) {
                        a && b.push(+a)
                      }),
                      'm' == d &&
                        b.length > 2 &&
                        (c.push([a].concat(b.splice(0, 2))),
                        (d = 'l'),
                        (a = 'm' == a ? 'l' : 'L')),
                      'o' == d && 1 == b.length && c.push([a, b[0]]),
                      'r' == d)
                    )
                      c.push([a].concat(b))
                    else
                      for (
                        ;
                        b.length >= e[d] &&
                        (c.push([a].concat(b.splice(0, e[d]))), e[d]);

                      );
                  }),
                (c.toString = a.path.toString),
                (d.arr = a.path.clone(c)),
                c
              )
            })
          var S = (a.parseTransformString = function (b) {
            if (!b) return null
            var c = []
            return (
              n(b, 'array') && n(b[0], 'array') && (c = a.path.clone(b)),
              c.length ||
                v(b).replace(H, function (e, a, b) {
                  var d = []
                  a.toLowerCase(),
                    b.replace(I, function (b, a) {
                      a && d.push(+a)
                    }),
                    c.push([a].concat(d))
                }),
              (c.toString = a.path.toString),
              c
            )
          })
          function r(b) {
            return (
              (b.node.ownerSVGElement && t(b.node.ownerSVGElement)) ||
              a.select('svg')
            )
          }
          function T(b) {
            n(b, 'array') || (b = Array.prototype.slice.call(arguments, 0))
            for (var a = 0, e = 0, c = this.node; this[a]; ) delete this[a++]
            for (a = 0; a < b.length; a++)
              'set' == b[a].type
                ? b[a].forEach(function (a) {
                    c.appendChild(a.node)
                  })
                : c.appendChild(b[a].node)
            var d = c.childNodes
            for (a = 0; a < d.length; a++) this[e++] = t(d[a])
            return this
          }
          function e(a) {
            if (a.snap in N) return N[a.snap]
            try {
              e = a.ownerSVGElement
            } catch (d) {}
            ;(this.node = a),
              e && (this.paper = new h(e)),
              (this.type = a.tagName || a.nodeName)
            var e,
              c = (this.id = l(this))
            if (
              ((this.anims = {}),
              (this._ = { transform: [] }),
              (a.snap = c),
              (N[c] = this),
              'g' == this.type && (this.add = T),
              this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
            )
              for (var b in h.prototype)
                h.prototype[u](b) && (this[b] = h.prototype[b])
          }
          function U(a) {
            this.node = a
          }
          function s(b, c) {
            var a = m(b)
            return c.appendChild(a), t(a)
          }
          function h(b, k) {
            var a,
              f,
              c,
              i = h.prototype
            if (b && b.tagName && 'svg' == b.tagName.toLowerCase()) {
              if (b.snap in N) return N[b.snap]
              var l = b.ownerDocument
              for (var j in ((a = new e(b)),
              (f = b.getElementsByTagName('desc')[0]),
              (c = b.getElementsByTagName('defs')[0]),
              f ||
                ((f = m('desc')).appendChild(
                  l.createTextNode('Created with Snap')
                ),
                a.node.appendChild(f)),
              c || ((c = m('defs')), a.node.appendChild(c)),
              (a.defs = c),
              i))
                i[u](j) && (a[j] = i[j])
              a.paper = a.root = a
            } else
              (a = s('svg', d.doc.body)),
                m(a.node, { height: k, version: 1.1, width: b, xmlns: M })
            return a
          }
          function t(a) {
            return !a || a instanceof e || a instanceof U
              ? a
              : a.tagName && 'svg' == a.tagName.toLowerCase()
              ? new h(a)
              : a.tagName &&
                'object' == a.tagName.toLowerCase() &&
                'image/svg+xml' == a.type
              ? new h(a.contentDocument.getElementsByTagName('svg')[0])
              : new e(a)
          }
          function V(b, e) {
            for (var a = 0, f = b.length; a < f; a++) {
              var c = { type: b[a].type, attr: b[a].attr() },
                d = b[a].children()
              e.push(c), d.length && V(d, (c.childNodes = []))
            }
          }
          ;(a._.svgTransform2string = function (a) {
            var c = []
            return (
              (a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (e, d, a) {
                return (
                  (a = a.split(/\s*,\s*|\s+/)),
                  'rotate' == d && 1 == a.length && a.push(0, 0),
                  'scale' == d &&
                    (a.length > 2
                      ? (a = a.slice(0, 2))
                      : 2 == a.length && a.push(0, 0),
                    1 == a.length && a.push(a[0], 0, 0)),
                  'skewX' == d
                    ? c.push(['m', 1, 0, b.tan(q(a[0])), 1, 0, 0])
                    : 'skewY' == d
                    ? c.push(['m', 1, b.tan(q(a[0])), 0, 1, 0, 0])
                    : c.push([d.charAt(0)].concat(a)),
                  e
                )
              })),
              c
            )
          }),
            (a._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
            (a._.transform2matrix = function (q, n) {
              var l = S(q),
                c = new a.Matrix()
              if (l)
                for (var m = 0, r = l.length; m < r; m++) {
                  var o,
                    p,
                    h,
                    i,
                    d,
                    b = l[m],
                    e = b.length,
                    j = v(b[0]).toLowerCase(),
                    k = b[0] != j,
                    f = k ? c.invert() : 0
                  't' == j && 2 == e
                    ? c.translate(b[1], 0)
                    : 't' == j && 3 == e
                    ? k
                      ? ((o = f.x(0, 0)),
                        (p = f.y(0, 0)),
                        (h = f.x(b[1], b[2])),
                        (i = f.y(b[1], b[2])),
                        c.translate(h - o, i - p))
                      : c.translate(b[1], b[2])
                    : 'r' == j
                    ? 2 == e
                      ? ((d = d || n),
                        c.rotate(b[1], d.x + d.width / 2, d.y + d.height / 2))
                      : 4 == e &&
                        (k
                          ? ((h = f.x(b[2], b[3])),
                            (i = f.y(b[2], b[3])),
                            c.rotate(b[1], h, i))
                          : c.rotate(b[1], b[2], b[3]))
                    : 's' == j
                    ? 2 == e || 3 == e
                      ? ((d = d || n),
                        c.scale(
                          b[1],
                          b[e - 1],
                          d.x + d.width / 2,
                          d.y + d.height / 2
                        ))
                      : 4 == e
                      ? k
                        ? ((h = f.x(b[2], b[3])),
                          (i = f.y(b[2], b[3])),
                          c.scale(b[1], b[1], h, i))
                        : c.scale(b[1], b[1], b[2], b[3])
                      : 5 == e &&
                        (k
                          ? ((h = f.x(b[3], b[4])),
                            (i = f.y(b[3], b[4])),
                            c.scale(b[1], b[2], h, i))
                          : c.scale(b[1], b[2], b[3], b[4]))
                    : 'm' == j &&
                      7 == e &&
                      c.add(b[1], b[2], b[3], b[4], b[5], b[6])
                }
              return c
            }),
            (a._unit2px = function (f, h, j) {
              var e = r(f).node,
                i = {},
                d = e.querySelector('.svg---mgr')
              function b(a) {
                if (null == a) return ''
                if (a == +a) return a
                m(d, { width: a })
                try {
                  return d.getBBox().width
                } catch (b) {
                  return 0
                }
              }
              function c(a) {
                if (null == a) return ''
                if (a == +a) return a
                m(d, { height: a })
                try {
                  return d.getBBox().height
                } catch (b) {
                  return 0
                }
              }
              function a(a, b) {
                null == h
                  ? (i[a] = b(f.attr(a) || 0))
                  : a == h && (i = b(null == j ? f.attr(a) || 0 : j))
              }
              switch (
                (d ||
                  ((d = m('rect')),
                  m(d, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    class: 'svg---mgr',
                    fill: 'none',
                  }),
                  e.appendChild(d)),
                f.type)
              ) {
                case 'rect':
                  a('rx', b), a('ry', c)
                case 'image':
                  a('width', b), a('height', c)
                case 'text':
                  a('x', b), a('y', c)
                  break
                case 'circle':
                  a('cx', b), a('cy', c), a('r', b)
                  break
                case 'ellipse':
                  a('cx', b), a('cy', c), a('rx', b), a('ry', c)
                  break
                case 'line':
                  a('x1', b), a('x2', b), a('y1', c), a('y2', c)
                  break
                case 'marker':
                  a('refX', b),
                    a('markerWidth', b),
                    a('refY', c),
                    a('markerHeight', c)
                  break
                case 'radialGradient':
                  a('fx', b), a('fy', c)
                  break
                case 'tspan':
                  a('dx', b), a('dy', c)
                  break
                default:
                  a(h, b)
              }
              return e.removeChild(d), i
            }),
            d.doc.contains || d.doc.compareDocumentPosition,
            (a._.getSomeDefs = function (b) {
              var d =
                  (b.node.ownerSVGElement && t(b.node.ownerSVGElement)) ||
                  (b.node.parentNode && t(b.node.parentNode)) ||
                  a.select('svg') ||
                  a(0, 0),
                e = d.select('defs'),
                c = null != e && e.node
              return c || (c = s('defs', d.node).node), c
            }),
            (a._.getSomeSVG = r),
            (a.select = function (a) {
              return (
                (a = v(a).replace(/([^\\]):/g, '$1\\:')),
                t(d.doc.querySelector(a))
              )
            }),
            (a.selectAll = function (f) {
              for (
                var c = d.doc.querySelectorAll(f),
                  e = (a.set || Array)(),
                  b = 0;
                b < c.length;
                b++
              )
                e.push(t(c[b]))
              return e
            }),
            setInterval(function () {
              for (var b in N)
                if (N[u](b)) {
                  var c = N[b],
                    a = c.node
                  ;(('svg' != c.type && !a.ownerSVGElement) ||
                    ('svg' == c.type &&
                      (!a.parentNode ||
                        ('ownerSVGElement' in a.parentNode &&
                          !a.ownerSVGElement)))) &&
                    delete N[b]
                }
            }, 1e4),
            (e.prototype.attr = function (a, i) {
              var c = this.node
              if (!a) {
                if (1 != c.nodeType) return { text: c.nodeValue }
                for (
                  var d = c.attributes, f = {}, b = 0, j = d.length;
                  b < j;
                  b++
                )
                  f[d[b].nodeName] = d[b].nodeValue
                return f
              }
              if (n(a, 'string')) {
                if (!(arguments.length > 1))
                  return eve('snap.util.getattr.' + a, this).firstDefined()
                var h = {}
                ;(h[a] = i), (a = h)
              }
              for (var e in a) a[u](e) && eve('snap.util.attr.' + e, this, a[e])
              return this
            }),
            (a.parse = function (a) {
              var b = d.doc.createDocumentFragment(),
                c = !0,
                e = d.doc.createElement('div')
              if (
                ((a = v(a)).match(/^\s*<\s*svg(?:\s|>)/) ||
                  ((a = '<svg>' + a + '</svg>'), (c = !1)),
                (e.innerHTML = a),
                (a = e.getElementsByTagName('svg')[0]))
              ) {
                if (c) b = a
                else for (; a.firstChild; ) b.appendChild(a.firstChild)
              }
              return new U(b)
            }),
            (a.fragment = function () {
              for (
                var f = Array.prototype.slice.call(arguments, 0),
                  c = d.doc.createDocumentFragment(),
                  e = 0,
                  h = f.length;
                e < h;
                e++
              ) {
                var b = f[e]
                b.node && b.node.nodeType && c.appendChild(b.node),
                  b.nodeType && c.appendChild(b),
                  'string' == typeof b && c.appendChild(a.parse(b).node)
              }
              return new U(c)
            }),
            (a._.make = s),
            (a._.wrap = t),
            (h.prototype.el = function (c, a) {
              var b = s(c, this.node)
              return a && b.attr(a), b
            }),
            (e.prototype.children = function () {
              for (
                var c = [], d = this.node.childNodes, b = 0, e = d.length;
                b < e;
                b++
              )
                c[b] = a(d[b])
              return c
            }),
            (e.prototype.toJSON = function () {
              var a = []
              return V([this], a), a[0]
            }),
            eve.on('snap.util.getattr', function () {
              var a = eve.nt(),
                b = (a = a.substring(a.lastIndexOf('.') + 1)).replace(
                  /[A-Z]/g,
                  function (a) {
                    return '-' + a.toLowerCase()
                  }
                )
              return W[u](b)
                ? this.node.ownerDocument.defaultView
                    .getComputedStyle(this.node, null)
                    .getPropertyValue(b)
                : m(this.node, a)
            })
          var W = {
            'alignment-baseline': 0,
            'baseline-shift': 0,
            clip: 0,
            'clip-path': 0,
            'clip-rule': 0,
            color: 0,
            'color-interpolation': 0,
            'color-interpolation-filters': 0,
            'color-profile': 0,
            'color-rendering': 0,
            cursor: 0,
            direction: 0,
            display: 0,
            'dominant-baseline': 0,
            'enable-background': 0,
            fill: 0,
            'fill-opacity': 0,
            'fill-rule': 0,
            filter: 0,
            'flood-color': 0,
            'flood-opacity': 0,
            font: 0,
            'font-family': 0,
            'font-size': 0,
            'font-size-adjust': 0,
            'font-stretch': 0,
            'font-style': 0,
            'font-variant': 0,
            'font-weight': 0,
            'glyph-orientation-horizontal': 0,
            'glyph-orientation-vertical': 0,
            'image-rendering': 0,
            kerning: 0,
            'letter-spacing': 0,
            'lighting-color': 0,
            marker: 0,
            'marker-end': 0,
            'marker-mid': 0,
            'marker-start': 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            'pointer-events': 0,
            'shape-rendering': 0,
            'stop-color': 0,
            'stop-opacity': 0,
            stroke: 0,
            'stroke-dasharray': 0,
            'stroke-dashoffset': 0,
            'stroke-linecap': 0,
            'stroke-linejoin': 0,
            'stroke-miterlimit': 0,
            'stroke-opacity': 0,
            'stroke-width': 0,
            'text-anchor': 0,
            'text-decoration': 0,
            'text-rendering': 0,
            'unicode-bidi': 0,
            visibility: 0,
            'word-spacing': 0,
            'writing-mode': 0,
          }
          eve.on('snap.util.attr', function (b) {
            var a = eve.nt(),
              c = {}
            c[(a = a.substring(a.lastIndexOf('.') + 1))] = b
            var d = a.replace(/-(\w)/gi, function (b, a) {
                return a.toUpperCase()
              }),
              e = a.replace(/[A-Z]/g, function (a) {
                return '-' + a.toLowerCase()
              })
            W[u](e)
              ? (this.node.style[d] = null == b ? '' : b)
              : m(this.node, c)
          }),
            h.prototype,
            (a.ajax = function (h, a, c, i) {
              var b = new XMLHttpRequest(),
                d = l()
              if (b) {
                if (n(a, 'function')) (i = c), (c = a), (a = null)
                else if (n(a, 'object')) {
                  var f = []
                  for (var e in a)
                    a.hasOwnProperty(e) &&
                      f.push(
                        encodeURIComponent(e) + '=' + encodeURIComponent(a[e])
                      )
                  a = f.join('&')
                }
                return (
                  b.open(a ? 'POST' : 'GET', h, !0),
                  a &&
                    (b.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                    b.setRequestHeader(
                      'Content-type',
                      'application/x-www-form-urlencoded'
                    )),
                  c &&
                    (eve.once('snap.ajax.' + d + '.0', c),
                    eve.once('snap.ajax.' + d + '.200', c),
                    eve.once('snap.ajax.' + d + '.304', c)),
                  (b.onreadystatechange = function () {
                    4 == b.readyState &&
                      eve('snap.ajax.' + d + '.' + b.status, i, b)
                  }),
                  4 == b.readyState || b.send(a),
                  b
                )
              }
            }),
            (a.load = function (b, c, d) {
              a.ajax(b, function (e) {
                var b = a.parse(e.responseText)
                d ? c.call(d, b) : c(b)
              })
            })
          var X = function (c) {
            var d = c.getBoundingClientRect(),
              e = c.ownerDocument,
              a = e.body,
              b = e.documentElement,
              f = b.clientTop || a.clientTop || 0,
              h = b.clientLeft || a.clientLeft || 0,
              i = d.top + (g.win.pageYOffset || b.scrollTop || a.scrollTop) - f,
              j =
                d.left + (g.win.pageXOffset || b.scrollLeft || a.scrollLeft) - h
            return { y: i, x: j }
          }
          return (
            (a.getElementByPoint = function (e, f) {
              this.canvas
              var a = d.doc.elementFromPoint(e, f)
              if (d.win.opera && 'svg' == a.tagName) {
                var h = X(a),
                  b = a.createSVGRect()
                ;(b.x = e - h.x), (b.y = f - h.y), (b.width = b.height = 1)
                var c = a.getIntersectionList(b, null)
                c.length && (a = c[c.length - 1])
              }
              return a ? t(a) : null
            }),
            (a.plugin = function (b) {
              b(a, e, h, d, U)
            }),
            (d.win.Snap = a),
            a
          )
        })(window || this)
      a.plugin(function (b, e, f, h, c) {
        var a = e.prototype,
          i = b.is,
          j = String,
          k = b._unit2px,
          l = b._.$,
          m = b._.make,
          n = b._.getSomeDefs,
          o = b._.wrap
        function p(c, a) {
          if (null == a) {
            var e = !0
            if (
              !(a =
                'linearGradient' == c.type || 'radialGradient' == c.type
                  ? c.node.getAttribute('gradientTransform')
                  : 'pattern' == c.type
                  ? c.node.getAttribute('patternTransform')
                  : c.node.getAttribute('transform'))
            )
              return new b.Matrix()
            a = b._.svgTransform2string(a)
          } else (a = b._.rgTransform.test(a) ? j(a).replace(/\.{3}|\u2026/g, c._.transform || '') : b._.svgTransform2string(a)), i(a, 'array') && (a = b.path ? b.path.toString.call(a) : j(a)), (c._.transform = a)
          var d = b._.transform2matrix(a, c.getBBox(1))
          if (e) return d
          c.matrix = d
        }
        ;(a.getBBox = function (f) {
          if ('tspan' == this.type)
            return b._.box(this.node.getClientRects().item(0))
          if (!b.Matrix || !b.path) return this.node.getBBox()
          var a = this,
            d = new b.Matrix()
          if (a.removed) return b._.box()
          for (; 'use' == a.type; )
            if (
              (f ||
                (d = d.add(
                  a
                    .transform()
                    .localMatrix.translate(a.attr('x') || 0, a.attr('y') || 0)
                )),
              a.original)
            )
              a = a.original
            else {
              var h = a.attr('xlink:href')
              a = a.original = a.node.ownerDocument.getElementById(
                h.substring(h.indexOf('#') + 1)
              )
            }
          var c = a._,
            e = b.path.get[a.type] || b.path.get.deflt
          try {
            if (f)
              return (
                (c.bboxwt = e
                  ? b.path.getBBox((a.realPath = e(a)))
                  : b._.box(a.node.getBBox())),
                b._.box(c.bboxwt)
              )
            return (
              (a.realPath = e(a)),
              (a.matrix = a.transform().localMatrix),
              (c.bbox = b.path.getBBox(
                b.path.map(a.realPath, d.add(a.matrix))
              )),
              b._.box(c.bbox)
            )
          } catch (i) {
            return b._.box()
          }
        }),
          (a.transform = function (a) {
            var m = this._
            if (null == a) {
              for (
                var e,
                  d = this,
                  f = new b.Matrix(this.node.getCTM()),
                  c = p(this),
                  h = [c],
                  i = new b.Matrix(),
                  k = c.toTransformString(),
                  n = j(c) == j(this.matrix) ? j(m.transform) : k;
                'svg' != d.type && (d = d.parent());

              )
                h.push(p(d))
              for (e = h.length; e--; ) i.add(h[e])
              return {
                string: n,
                globalMatrix: f,
                totalMatrix: i,
                localMatrix: c,
                diffMatrix: f.clone().add(c.invert()),
                global: f.toTransformString(),
                total: i.toTransformString(),
                local: k,
                toString: function () {
                  return this.string
                },
              }
            }
            return (
              a instanceof b.Matrix
                ? ((this.matrix = a),
                  (this._.transform = a.toTransformString()))
                : p(this, a),
              this.node &&
                ('linearGradient' == this.type || 'radialGradient' == this.type
                  ? l(this.node, { gradientTransform: this.matrix })
                  : 'pattern' == this.type
                  ? l(this.node, { patternTransform: this.matrix })
                  : l(this.node, { transform: this.matrix })),
              this
            )
          }),
          (a.parent = function () {
            return o(this.node.parentNode)
          }),
          (a.append = a.add =
            function (a) {
              if (a) {
                if ('set' == a.type) {
                  var b = this
                  return (
                    a.forEach(function (a) {
                      b.add(a)
                    }),
                    this
                  )
                }
                ;(a = o(a)),
                  this.node.appendChild(a.node),
                  (a.paper = this.paper)
              }
              return this
            }),
          (a.appendTo = function (a) {
            return a && (a = o(a)).append(this), this
          }),
          (a.prepend = function (a) {
            if (a) {
              if ('set' == a.type) {
                var c,
                  d = this
                return (
                  a.forEach(function (a) {
                    c ? c.after(a) : d.prepend(a), (c = a)
                  }),
                  this
                )
              }
              var b = (a = o(a)).parent()
              this.node.insertBefore(a.node, this.node.firstChild),
                this.add && this.add(),
                (a.paper = this.paper),
                this.parent() && this.parent().add(),
                b && b.add()
            }
            return this
          }),
          (a.prependTo = function (a) {
            return (a = o(a)).prepend(this), this
          }),
          (a.before = function (a) {
            if ('set' == a.type) {
              var c = this
              return (
                a.forEach(function (a) {
                  var b = a.parent()
                  c.node.parentNode.insertBefore(a.node, c.node), b && b.add()
                }),
                this.parent().add(),
                this
              )
            }
            var b = (a = o(a)).parent()
            return (
              this.node.parentNode.insertBefore(a.node, this.node),
              this.parent() && this.parent().add(),
              b && b.add(),
              (a.paper = this.paper),
              this
            )
          }),
          (a.after = function (a) {
            var b = (a = o(a)).parent()
            return (
              this.node.nextSibling
                ? this.node.parentNode.insertBefore(
                    a.node,
                    this.node.nextSibling
                  )
                : this.node.parentNode.appendChild(a.node),
              this.parent() && this.parent().add(),
              b && b.add(),
              (a.paper = this.paper),
              this
            )
          }),
          (a.insertBefore = function (a) {
            a = o(a)
            var b = this.parent()
            return (
              a.node.parentNode.insertBefore(this.node, a.node),
              (this.paper = a.paper),
              b && b.add(),
              a.parent() && a.parent().add(),
              this
            )
          }),
          (a.insertAfter = function (a) {
            a = o(a)
            var b = this.parent()
            return (
              a.node.parentNode.insertBefore(this.node, a.node.nextSibling),
              (this.paper = a.paper),
              b && b.add(),
              a.parent() && a.parent().add(),
              this
            )
          }),
          (a.remove = function () {
            var a = this.parent()
            return (
              this.node.parentNode &&
                this.node.parentNode.removeChild(this.node),
              delete this.paper,
              (this.removed = !0),
              a && a.add(),
              this
            )
          }),
          (a.select = function (a) {
            return o(this.node.querySelector(a))
          }),
          (a.selectAll = function (e) {
            for (
              var c = this.node.querySelectorAll(e),
                d = (b.set || Array)(),
                a = 0;
              a < c.length;
              a++
            )
              d.push(o(c[a]))
            return d
          }),
          (a.asPX = function (b, a) {
            return null == a && (a = this.attr(b)), +k(this, b, a)
          }),
          (a.use = function () {
            var a,
              b = this.node.id
            return (
              b || ((b = this.id), l(this.node, { id: b })),
              (a =
                'linearGradient' == this.type ||
                'radialGradient' == this.type ||
                'pattern' == this.type
                  ? m(this.type, this.node.parentNode)
                  : m('use', this.node.parentNode)),
              l(a.node, { 'xlink:href': '#' + b }),
              (a.original = this),
              a
            )
          }),
          (a.clone = function () {
            var a = o(this.node.cloneNode(!0))
            return (
              l(a.node, 'id') && l(a.node, { id: a.id }),
              (function (m) {
                var a,
                  j = m.selectAll('*'),
                  q = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                  e = [],
                  n = {}
                function d(c, d) {
                  var a = l(c.node, d)
                  ;(a = (a = a && a.match(q)) && a[2]) &&
                    '#' == a.charAt() &&
                    (a = a.substring(1)) &&
                    (n[a] = (n[a] || []).concat(function (e) {
                      var a = {}
                      ;(a[d] = b.url(e)), l(c.node, a)
                    }))
                }
                function o(b) {
                  var a = l(b.node, 'xlink:href')
                  a &&
                    '#' == a.charAt() &&
                    (a = a.substring(1)) &&
                    (n[a] = (n[a] || []).concat(function (a) {
                      b.attr('xlink:href', '#' + a)
                    }))
                }
                for (var c = 0, f = j.length; c < f; c++) {
                  d((a = j[c]), 'fill'),
                    d(a, 'stroke'),
                    d(a, 'filter'),
                    d(a, 'mask'),
                    d(a, 'clip-path'),
                    o(a)
                  var k = l(a.node, 'id')
                  k && (l(a.node, { id: a.id }), e.push({ old: k, id: a.id }))
                }
                for (c = 0, f = e.length; c < f; c++) {
                  var h = n[e[c].old]
                  if (h) for (var i = 0, p = h.length; i < p; i++) h[i](e[c].id)
                }
              })(a),
              a.insertAfter(this),
              a
            )
          }),
          (a.toDefs = function () {
            return n(this).appendChild(this.node), this
          }),
          (a.pattern = a.toPattern =
            function (a, c, d, e) {
              var b = m('pattern', n(this))
              return (
                null == a && (a = this.getBBox()),
                i(a, 'object') &&
                  'x' in a &&
                  ((c = a.y), (d = a.width), (e = a.height), (a = a.x)),
                l(b.node, {
                  x: a,
                  y: c,
                  width: d,
                  height: e,
                  patternUnits: 'userSpaceOnUse',
                  id: b.id,
                  viewBox: [a, c, d, e].join(' '),
                }),
                b.node.appendChild(this.node),
                b
              )
            }),
          (a.marker = function (a, e, c, d, f, h) {
            var b = m('marker', n(this))
            return (
              null == a && (a = this.getBBox()),
              i(a, 'object') &&
                'x' in a &&
                ((e = a.y),
                (c = a.width),
                (d = a.height),
                (f = a.refX || a.cx),
                (h = a.refY || a.cy),
                (a = a.x)),
              l(b.node, {
                viewBox: [a, e, c, d].join(' '),
                markerWidth: c,
                markerHeight: d,
                orient: 'auto',
                refX: f || 0,
                refY: h || 0,
                id: b.id,
              }),
              b.node.appendChild(this.node),
              b
            )
          })
        var q = {}
        function d(a) {
          return function () {
            var c = a ? '<' + this.type : '',
              e = this.node.attributes,
              d = this.node.childNodes
            if (a)
              for (var b = 0, f = e.length; b < f; b++)
                c +=
                  ' ' + e[b].name + '="' + e[b].value.replace(/"/g, '\\"') + '"'
            if (d.length) {
              for (a && (c += '>'), b = 0, f = d.length; b < f; b++)
                3 == d[b].nodeType
                  ? (c += d[b].nodeValue)
                  : 1 == d[b].nodeType && (c += o(d[b]).toString())
              a && (c += '</' + this.type + '>')
            } else a && (c += '/>')
            return c
          }
        }
        ;(a.data = function (a, e) {
          var c = (q[this.id] = q[this.id] || {})
          if (0 == arguments.length)
            return eve('snap.data.get.' + this.id, this, c, null), c
          if (1 == arguments.length) {
            if (b.is(a, 'object')) {
              for (var d in a) a.hasOwnProperty(d) && this.data(d, a[d])
              return this
            }
            return eve('snap.data.get.' + this.id, this, c[a], a), c[a]
          }
          return (c[a] = e), eve('snap.data.set.' + this.id, this, e, a), this
        }),
          (a.removeData = function (a) {
            return (
              null == a
                ? (q[this.id] = {})
                : q[this.id] && delete q[this.id][a],
              this
            )
          }),
          (a.outerSVG = a.toString = d(1)),
          (a.innerSVG = d()),
          (a.toDataURL = function () {
            if (window && window.btoa) {
              var a = this.getBBox()
              return (
                'data:image/svg+xml;base64,' +
                btoa(
                  unescape(
                    encodeURIComponent(
                      b.format(
                        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
                        {
                          x: +a.x.toFixed(3),
                          y: +a.y.toFixed(3),
                          width: +a.width.toFixed(3),
                          height: +a.height.toFixed(3),
                          contents: this.outerSVG(),
                        }
                      )
                    )
                  )
                )
              )
            }
          }),
          (c.prototype.select = a.select),
          (c.prototype.selectAll = a.selectAll)
      }),
        a.plugin(function (a, c, d, e, f) {
          var h = Object.prototype.toString,
            i = String,
            j = Math
          function b(a, b, c, d, e, f) {
            if (null == b && '[object SVGMatrix]' == h.call(a)) {
              ;(this.a = a.a),
                (this.b = a.b),
                (this.c = a.c),
                (this.d = a.d),
                (this.e = a.e),
                (this.f = a.f)
              return
            }
            null != a
              ? ((this.a = +a),
                (this.b = +b),
                (this.c = +c),
                (this.d = +d),
                (this.e = +e),
                (this.f = +f))
              : ((this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.e = 0),
                (this.f = 0))
          }
          ;(function (c) {
            function d(a) {
              return a[0] * a[0] + a[1] * a[1]
            }
            function e(a) {
              var b = j.sqrt(d(a))
              a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            ;(c.add = function (a, c, d, e, f, h) {
              if (a && a instanceof b)
                return this.add(a.a, a.b, a.c, a.d, a.e, a.f)
              var i = a * this.a + c * this.c,
                j = a * this.b + c * this.d
              return (
                (this.e += f * this.a + h * this.c),
                (this.f += f * this.b + h * this.d),
                (this.c = d * this.a + e * this.c),
                (this.d = d * this.b + e * this.d),
                (this.a = i),
                (this.b = j),
                this
              )
            }),
              (b.prototype.multLeft = function (a, c, d, e, f, h) {
                if (a && a instanceof b)
                  return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f)
                var i = a * this.a + d * this.b,
                  j = a * this.c + d * this.d,
                  k = a * this.e + d * this.f + f
                return (
                  (this.b = c * this.a + e * this.b),
                  (this.d = c * this.c + e * this.d),
                  (this.f = c * this.e + e * this.f + h),
                  (this.a = i),
                  (this.c = j),
                  (this.e = k),
                  this
                )
              }),
              (c.invert = function () {
                var a = this.a * this.d - this.b * this.c
                return new b(
                  this.d / a,
                  -this.b / a,
                  -this.c / a,
                  this.a / a,
                  (this.c * this.f - this.d * this.e) / a,
                  (this.b * this.e - this.a * this.f) / a
                )
              }),
              (c.clone = function () {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
              }),
              (c.translate = function (a, b) {
                return (
                  (this.e += a * this.a + b * this.c),
                  (this.f += a * this.b + b * this.d),
                  this
                )
              }),
              (c.scale = function (d, a, b, c) {
                return (
                  null == a && (a = d),
                  (b || c) && this.translate(b, c),
                  (this.a *= d),
                  (this.b *= d),
                  (this.c *= a),
                  (this.d *= a),
                  (b || c) && this.translate(-b, -c),
                  this
                )
              }),
              (c.rotate = function (b, c, d) {
                ;(b = a.rad(b)), (c = c || 0), (d = d || 0)
                var e = +j.cos(b).toFixed(9),
                  f = +j.sin(b).toFixed(9)
                return this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
              }),
              (c.skewX = function (a) {
                return this.skew(a, 0)
              }),
              (c.skewY = function (a) {
                return this.skew(0, a)
              }),
              (c.skew = function (b, c) {
                ;(b = b || 0), (c = c || 0), (b = a.rad(b)), (c = a.rad(c))
                var d = j.tan(b).toFixed(9),
                  e = j.tan(c).toFixed(9)
                return this.add(1, e, d, 1, 0, 0)
              }),
              (c.x = function (a, b) {
                return a * this.a + b * this.c + this.e
              }),
              (c.y = function (a, b) {
                return a * this.b + b * this.d + this.f
              }),
              (c.get = function (a) {
                return +this[i.fromCharCode(97 + a)].toFixed(4)
              }),
              (c.toString = function () {
                return (
                  'matrix(' +
                  [
                    this.get(0),
                    this.get(1),
                    this.get(2),
                    this.get(3),
                    this.get(4),
                    this.get(5),
                  ].join() +
                  ')'
                )
              }),
              (c.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
              }),
              (c.determinant = function () {
                return this.a * this.d - this.b * this.c
              }),
              (c.split = function () {
                var b = {}
                ;(b.dx = this.e), (b.dy = this.f)
                var c = [
                  [this.a, this.b],
                  [this.c, this.d],
                ]
                ;(b.scalex = j.sqrt(d(c[0]))),
                  e(c[0]),
                  (b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1]),
                  (c[1] = [
                    c[1][0] - c[0][0] * b.shear,
                    c[1][1] - c[0][1] * b.shear,
                  ]),
                  (b.scaley = j.sqrt(d(c[1]))),
                  e(c[1]),
                  (b.shear /= b.scaley),
                  0 > this.determinant() && (b.scalex = -b.scalex)
                var f = c[0][1],
                  h = c[1][1]
                return (
                  h < 0
                    ? ((b.rotate = a.deg(j.acos(h))),
                      f < 0 && (b.rotate = 360 - b.rotate))
                    : (b.rotate = a.deg(j.asin(f))),
                  (b.isSimple =
                    !+b.shear.toFixed(9) &&
                    (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate)),
                  (b.isSuperSimple =
                    !+b.shear.toFixed(9) &&
                    b.scalex.toFixed(9) == b.scaley.toFixed(9) &&
                    !b.rotate),
                  (b.noRotation = !+b.shear.toFixed(9) && !b.rotate),
                  b
                )
              }),
              (c.toTransformString = function (b) {
                var a = b || this.split()
                return +a.shear.toFixed(9)
                  ? 'm' +
                      [
                        this.get(0),
                        this.get(1),
                        this.get(2),
                        this.get(3),
                        this.get(4),
                        this.get(5),
                      ]
                  : ((a.scalex = +a.scalex.toFixed(4)),
                    (a.scaley = +a.scaley.toFixed(4)),
                    (a.rotate = +a.rotate.toFixed(4)),
                    (a.dx || a.dy
                      ? 't' + [+a.dx.toFixed(4), +a.dy.toFixed(4)]
                      : '') +
                      (a.rotate ? 'r' + [+a.rotate.toFixed(4), 0, 0] : '') +
                      (1 != a.scalex || 1 != a.scaley
                        ? 's' + [a.scalex, a.scaley, 0, 0]
                        : ''))
              })
          })(b.prototype),
            (a.Matrix = b),
            (a.matrix = function (a, c, d, e, f, h) {
              return new b(a, c, d, e, f, h)
            })
        }),
        a.plugin(function (a, h, i, j, k) {
          var l = a._.make,
            m = a._.wrap,
            n = a.is,
            o = a._.getSomeDefs,
            p = /^url\((['"]?)([^)]+)\1\)$/,
            q = a._.$,
            r = a.url,
            s = String,
            t = a._.separator
          function d(b) {
            return function (c) {
              if (
                (eve.stop(),
                c instanceof k &&
                  1 == c.node.childNodes.length &&
                  ('radialGradient' == c.node.firstChild.tagName ||
                    'linearGradient' == c.node.firstChild.tagName ||
                    'pattern' == c.node.firstChild.tagName) &&
                  ((c = c.node.firstChild), o(this).appendChild(c), (c = m(c))),
                c instanceof h)
              ) {
                if (
                  'radialGradient' == c.type ||
                  'linearGradient' == c.type ||
                  'pattern' == c.type
                ) {
                  c.node.id || q(c.node, { id: c.id })
                  var d = r(c.node.id)
                } else d = c.attr(b)
              } else if ((d = a.color(c)).error) {
                var e = a(o(this).ownerSVGElement).gradient(c)
                e
                  ? (e.node.id || q(e.node, { id: e.id }), (d = r(e.node.id)))
                  : (d = c)
              } else d = s(d)
              var f = {}
              ;(f[b] = d), q(this.node, f), (this.node.style[b] = '')
            }
          }
          ;(a.deurl = function (a) {
            var b = String(a).match(p)
            return b ? b[2] : a
          }),
            eve.on('snap.util.attr.mask', function (a) {
              if (a instanceof h || a instanceof k) {
                if (
                  (eve.stop(),
                  a instanceof k &&
                    1 == a.node.childNodes.length &&
                    ((a = a.node.firstChild),
                    o(this).appendChild(a),
                    (a = m(a))),
                  'mask' == a.type)
                )
                  var b = a
                else (b = l('mask', o(this))).node.appendChild(a.node)
                b.node.id || q(b.node, { id: b.id }),
                  q(this.node, { mask: r(b.id) })
              }
            }),
            (function (a) {
              eve.on('snap.util.attr.clip', a),
                eve.on('snap.util.attr.clip-path', a),
                eve.on('snap.util.attr.clipPath', a)
            })(function (c) {
              if (c instanceof h || c instanceof k) {
                eve.stop()
                for (var a, b = c.node; b; ) {
                  if ('clipPath' === b.nodeName) {
                    a = new h(b)
                    break
                  }
                  if ('svg' === b.nodeName) {
                    a = void 0
                    break
                  }
                  b = b.parentNode
                }
                !a &&
                  ((a = l('clipPath', o(this))).node.appendChild(c.node),
                  a.node.id || q(a.node, { id: a.id })),
                  q(this.node, { 'clip-path': r(a.node.id || a.id) })
              }
            }),
            eve.on('snap.util.attr.fill', d('fill')),
            eve.on('snap.util.attr.stroke', d('stroke'))
          var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i
          function e(a) {
            eve.stop(), a == +a && (a += 'px'), (this.node.style.fontSize = a)
          }
          function b(b) {
            return function () {
              eve.stop()
              var c = j.doc.defaultView
                .getComputedStyle(this.node, null)
                .getPropertyValue('marker-' + b)
              return 'none' == c ? c : a(j.doc.getElementById(c.match(p)[1]))
            }
          }
          function c(a) {
            return function (b) {
              eve.stop()
              var c = 'marker' + a.charAt(0).toUpperCase() + a.substring(1)
              if ('' == b || !b) {
                this.node.style[c] = 'none'
                return
              }
              if ('marker' == b.type) {
                var d = b.node.id
                d || q(b.node, { id: b.id }), (this.node.style[c] = r(d))
                return
              }
            }
          }
          function v(e) {
            for (
              var b = [], d = e.childNodes, c = 0, f = d.length;
              c < f;
              c++
            ) {
              var a = d[c]
              3 == a.nodeType && b.push(a.nodeValue),
                'tspan' == a.tagName &&
                  (1 == a.childNodes.length && 3 == a.firstChild.nodeType
                    ? b.push(a.firstChild.nodeValue)
                    : b.push(v(a)))
            }
            return b
          }
          function f() {
            return eve.stop(), this.node.style.fontSize
          }
          eve.on('snap.util.grad.parse', function (f) {
            var e = (f = s(f)).match(u)
            if (!e) return null
            var i = e[1],
              c = e[2],
              a = e[3]
            1 ==
              (c = c.split(/\s*,\s*/).map(function (a) {
                return +a == a ? +a : a
              })).length &&
              0 == c[0] &&
              (c = []),
              (a = (a = a.split('-')).map(function (a) {
                var b = { color: (a = a.split(':'))[0] }
                return a[1] && (b.offset = parseFloat(a[1])), b
              }))
            var b = a.length,
              j = 0,
              k = 0
            function h(c, d) {
              for (var e = (d - j) / (c - k), b = k; b < c; b++)
                a[b].offset = +(+j + e * (b - k)).toFixed(2)
              ;(k = c), (j = d)
            }
            b--
            for (var d = 0; d < b; d++) 'offset' in a[d] && h(d, a[d].offset)
            return (
              (a[b].offset = a[b].offset || 100),
              h(b, a[b].offset),
              { type: i, params: c, stops: a }
            )
          }),
            eve.on('snap.util.attr.d', function (b) {
              eve.stop(),
                n(b, 'array') &&
                  n(b[0], 'array') &&
                  (b = a.path.toString.call(b)),
                (b = s(b)).match(/[ruo]/i) && (b = a.path.toAbsolute(b)),
                q(this.node, { d: b })
            })(-1),
            eve.on('snap.util.attr.#text', function (a) {
              eve.stop(), (a = s(a))
              for (var b = j.doc.createTextNode(a); this.node.firstChild; )
                this.node.removeChild(this.node.firstChild)
              this.node.appendChild(b)
            })(-1),
            eve.on('snap.util.attr.path', function (a) {
              eve.stop(), this.attr({ d: a })
            })(-1),
            eve.on('snap.util.attr.class', function (a) {
              eve.stop(), (this.node.className.baseVal = a)
            })(-1),
            eve.on('snap.util.attr.viewBox', function (a) {
              var b
              ;(b =
                n(a, 'object') && 'x' in a
                  ? [a.x, a.y, a.width, a.height].join(' ')
                  : n(a, 'array')
                  ? a.join(' ')
                  : a),
                q(this.node, { viewBox: b }),
                eve.stop()
            })(-1),
            eve.on('snap.util.attr.transform', function (a) {
              this.transform(a), eve.stop()
            })(-1),
            eve.on('snap.util.attr.r', function (a) {
              'rect' == this.type &&
                (eve.stop(), q(this.node, { rx: a, ry: a }))
            })(-1),
            eve.on('snap.util.attr.textpath', function (b) {
              if ((eve.stop(), 'text' == this.type)) {
                var c, a, d
                if (!b && this.textPath) {
                  for (a = this.textPath; a.node.firstChild; )
                    this.node.appendChild(a.node.firstChild)
                  a.remove(), delete this.textPath
                  return
                }
                if (n(b, 'string')) {
                  var f = o(this),
                    e = m(f.parentNode).path(b)
                  f.appendChild(e.node), (c = e.id), e.attr({ id: c })
                } else
                  (b = m(b)) instanceof h &&
                    !(c = b.attr('id')) &&
                    ((c = b.id), b.attr({ id: c }))
                if (c) {
                  if (((a = this.textPath), (d = this.node), a))
                    a.attr({ 'xlink:href': '#' + c })
                  else {
                    for (
                      a = q('textPath', { 'xlink:href': '#' + c });
                      d.firstChild;

                    )
                      a.appendChild(d.firstChild)
                    d.appendChild(a), (this.textPath = m(a))
                  }
                }
              }
            })(-1),
            eve.on('snap.util.attr.text', function (c) {
              if ('text' == this.type) {
                for (
                  var a = this.node,
                    d = function (b) {
                      var a = q('tspan')
                      if (n(b, 'array'))
                        for (var c = 0; c < b.length; c++)
                          a.appendChild(d(b[c]))
                      else a.appendChild(j.doc.createTextNode(b))
                      return a.normalize && a.normalize(), a
                    };
                  a.firstChild;

                )
                  a.removeChild(a.firstChild)
                for (var b = d(c); b.firstChild; ) a.appendChild(b.firstChild)
              }
              eve.stop()
            })(-1),
            eve.on('snap.util.attr.fontSize', e)(-1),
            eve.on('snap.util.attr.font-size', e)(-1),
            eve.on('snap.util.getattr.transform', function () {
              return eve.stop(), this.transform()
            })(-1),
            eve.on('snap.util.getattr.textpath', function () {
              return eve.stop(), this.textPath
            })(-1),
            eve.on('snap.util.getattr.marker-end', b('end'))(-1),
            eve.on('snap.util.getattr.markerEnd', b('end'))(-1),
            eve.on('snap.util.getattr.marker-start', b('start'))(-1),
            eve.on('snap.util.getattr.markerStart', b('start'))(-1),
            eve.on('snap.util.getattr.marker-mid', b('mid'))(-1),
            eve.on('snap.util.getattr.markerMid', b('mid'))(-1),
            eve.on('snap.util.attr.marker-end', c('end'))(-1),
            eve.on('snap.util.attr.markerEnd', c('end'))(-1),
            eve.on('snap.util.attr.marker-start', c('start'))(-1),
            eve.on('snap.util.attr.markerStart', c('start'))(-1),
            eve.on('snap.util.attr.marker-mid', c('mid'))(-1),
            eve.on('snap.util.attr.markerMid', c('mid'))(-1),
            eve.on('snap.util.getattr.r', function () {
              if (
                'rect' == this.type &&
                q(this.node, 'rx') == q(this.node, 'ry')
              )
                return eve.stop(), q(this.node, 'rx')
            })(-1),
            eve.on('snap.util.getattr.text', function () {
              if ('text' == this.type || 'tspan' == this.type) {
                eve.stop()
                var a = v(this.node)
                return 1 == a.length ? a[0] : a
              }
            })(-1),
            eve.on('snap.util.getattr.#text', function () {
              return this.node.textContent
            })(-1),
            eve.on('snap.util.getattr.fill', function (c) {
              if (!c) {
                eve.stop()
                var b = eve('snap.util.getattr.fill', this, !0).firstDefined()
                return a(a.deurl(b)) || b
              }
            })(-1),
            eve.on('snap.util.getattr.stroke', function (c) {
              if (!c) {
                eve.stop()
                var b = eve('snap.util.getattr.stroke', this, !0).firstDefined()
                return a(a.deurl(b)) || b
              }
            })(-1),
            eve.on('snap.util.getattr.viewBox', function () {
              eve.stop()
              var b = q(this.node, 'viewBox')
              return b
                ? ((b = b.split(t)), a._.box(+b[0], +b[1], +b[2], +b[3]))
                : void 0
            })(-1),
            eve.on('snap.util.getattr.points', function () {
              var a = q(this.node, 'points')
              return (eve.stop(), a) ? a.split(t) : void 0
            })(-1),
            eve.on('snap.util.getattr.path', function () {
              var a = q(this.node, 'd')
              return eve.stop(), a
            })(-1),
            eve.on('snap.util.getattr.class', function () {
              return this.node.className.baseVal
            })(-1),
            eve.on('snap.util.getattr.fontSize', f)(-1),
            eve.on('snap.util.getattr.font-size', f)(-1)
        }),
        a.plugin(function (c, b, d, e, f) {
          var h = /\S+/g,
            i = String,
            a = b.prototype
          ;(a.addClass = function (k) {
            var c,
              l,
              a,
              d,
              e = i(k || '').match(h) || [],
              f = this.node,
              j = f.className.baseVal,
              b = j.match(h) || []
            if (e.length) {
              for (c = 0; (a = e[c++]); ) ~b.indexOf(a) || b.push(a)
              j != (d = b.join(' ')) && (f.className.baseVal = d)
            }
            return this
          }),
            (a.removeClass = function (k) {
              var b,
                c,
                d,
                e,
                l = i(k || '').match(h) || [],
                f = this.node,
                j = f.className.baseVal,
                a = j.match(h) || []
              if (a.length) {
                for (b = 0; (d = l[b++]); )
                  ~(c = a.indexOf(d)) && a.splice(c, 1)
                j != (e = a.join(' ')) && (f.className.baseVal = e)
              }
              return this
            }),
            (a.hasClass = function (a) {
              return !!~(this.node.className.baseVal.match(h) || []).indexOf(a)
            }),
            (a.toggleClass = function (b, d) {
              if (null != d) return d ? this.addClass(b) : this.removeClass(b)
              var e,
                f,
                c,
                i,
                l = (b || '').match(h) || [],
                j = this.node,
                k = j.className.baseVal,
                a = k.match(h) || []
              for (e = 0; (c = l[e++]); )
                ~(f = a.indexOf(c)) ? a.splice(f, 1) : a.push(c)
              return k != (i = a.join(' ')) && (j.className.baseVal = i), this
            })
        }),
        a.plugin(function (a, b, c, d, e) {
          var f = {
              '+': function (a, b) {
                return a + b
              },
              '-': function (a, b) {
                return a - b
              },
              '/': function (a, b) {
                return a / b
              },
              '*': function (a, b) {
                return a * b
              },
            },
            h = String,
            i = /[a-z]+$/i,
            j = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/
          function k(a) {
            return a
          }
          eve.on('snap.util.attr', function (a) {
            var b = h(a).match(j)
            if (b) {
              var e = eve.nt(),
                c = e.substring(e.lastIndexOf('.') + 1),
                d = this.attr(c),
                k = {}
              eve.stop()
              var l = b[3] || '',
                m = d.match(i),
                n = f[b[1]]
              if (
                (m && m == l
                  ? (a = n(parseFloat(d), +b[2]))
                  : ((d = this.asPX(c)),
                    (a = n(this.asPX(c), this.asPX(c, b[2] + l)))),
                isNaN(d) || isNaN(a))
              )
                return
              ;(k[c] = a), this.attr(k)
            }
          })(-10),
            eve.on('snap.util.equal', function (c, m) {
              var a = h(this.attr(c) || ''),
                b = h(m).match(j)
              if (b) {
                eve.stop()
                var n,
                  e = b[3] || '',
                  d = a.match(i),
                  l = f[b[1]]
                return d && d == e
                  ? {
                      from: parseFloat(a),
                      to: l(parseFloat(a), +b[2]),
                      f:
                        ((n = d),
                        function (a) {
                          return +a.toFixed(3) + n
                        }),
                    }
                  : {
                      from: (a = this.asPX(c)),
                      to: l(a, this.asPX(c, b[2] + e)),
                      f: k,
                    }
              }
            })(-10)
        }),
        a.plugin(function (b, d, c, e, f) {
          var a = c.prototype,
            h = b.is
          ;(a.rect = function (a, e, f, i, c, d) {
            var b
            return (
              null == d && (d = c),
              h(a, 'object') && '[object Object]' == a
                ? (b = a)
                : null != a &&
                  ((b = { x: a, y: e, width: f, height: i }),
                  null != c && ((b.rx = c), (b.ry = d))),
              this.el('rect', b)
            )
          }),
            (a.circle = function (a, c, d) {
              var b
              return (
                h(a, 'object') && '[object Object]' == a
                  ? (b = a)
                  : null != a && (b = { cx: a, cy: c, r: d }),
                this.el('circle', b)
              )
            })
          var i = (function () {
            function a() {
              this.parentNode.removeChild(this)
            }
            return function (c, f) {
              var b = e.doc.createElement('img'),
                d = e.doc.body
              ;(b.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
                (b.onload = function () {
                  f.call(b), (b.onload = b.onerror = null), d.removeChild(b)
                }),
                (b.onerror = a),
                d.appendChild(b),
                (b.src = c)
            }
          })()
          ;(a.image = function (a, e, f, j, k) {
            var d = this.el('image')
            if (h(a, 'object') && 'src' in a) d.attr(a)
            else if (null != a) {
              var c = { 'xlink:href': a, preserveAspectRatio: 'none' }
              null != e && null != f && ((c.x = e), (c.y = f)),
                null != j && null != k
                  ? ((c.width = j), (c.height = k))
                  : i(a, function () {
                      b._.$(d.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight,
                      })
                    }),
                b._.$(d.node, c)
            }
            return d
          }),
            (a.ellipse = function (a, c, d, e) {
              var b
              return (
                h(a, 'object') && '[object Object]' == a
                  ? (b = a)
                  : null != a && (b = { cx: a, cy: c, rx: d, ry: e }),
                this.el('ellipse', b)
              )
            }),
            (a.path = function (a) {
              var b
              return (
                h(a, 'object') && !h(a, 'array')
                  ? (b = a)
                  : a && (b = { d: a }),
                this.el('path', b)
              )
            }),
            (a.group = a.g =
              function (a) {
                var b = this.el('g')
                return (
                  1 == arguments.length && a && !a.type
                    ? b.attr(a)
                    : arguments.length &&
                      b.add(Array.prototype.slice.call(arguments, 0)),
                  b
                )
              }),
            (a.svg = function (b, c, d, e, f, i, j, k) {
              var a = {}
              return (
                h(b, 'object') && null == c
                  ? (a = b)
                  : (null != b && (a.x = b),
                    null != c && (a.y = c),
                    null != d && (a.width = d),
                    null != e && (a.height = e),
                    null != f &&
                      null != i &&
                      null != j &&
                      null != k &&
                      (a.viewBox = [f, i, j, k])),
                this.el('svg', a)
              )
            }),
            (a.mask = function (a) {
              var b = this.el('mask')
              return (
                1 == arguments.length && a && !a.type
                  ? b.attr(a)
                  : arguments.length &&
                    b.add(Array.prototype.slice.call(arguments, 0)),
                b
              )
            }),
            (a.ptrn = function (b, c, d, e, f, i, j, k) {
              if (h(b, 'object')) var a = b
              else
                (a = { patternUnits: 'userSpaceOnUse' }),
                  b && (a.x = b),
                  c && (a.y = c),
                  null != d && (a.width = d),
                  null != e && (a.height = e),
                  null != f && null != i && null != j && null != k
                    ? (a.viewBox = [f, i, j, k])
                    : (a.viewBox = [b || 0, c || 0, d || 0, e || 0])
              return this.el('pattern', a)
            }),
            (a.use = function (a) {
              return null != a
                ? (a instanceof d &&
                    (a.attr('id') || a.attr({ id: b._.id(a) }),
                    (a = a.attr('id'))),
                  '#' == String(a).charAt() && (a = a.substring(1)),
                  this.el('use', { 'xlink:href': '#' + a }))
                : d.prototype.use.call(this)
            }),
            (a.symbol = function (a, b, c, d) {
              var e = {}
              return (
                null != a &&
                  null != b &&
                  null != c &&
                  null != d &&
                  (e.viewBox = [a, b, c, d]),
                this.el('symbol', e)
              )
            }),
            (a.text = function (a, c, d) {
              var b = {}
              return (
                h(a, 'object')
                  ? (b = a)
                  : null != a && (b = { x: a, y: c, text: d || '' }),
                this.el('text', b)
              )
            }),
            (a.line = function (a, c, d, e) {
              var b = {}
              return (
                h(a, 'object')
                  ? (b = a)
                  : null != a && (b = { x1: a, x2: d, y1: c, y2: e }),
                this.el('line', b)
              )
            }),
            (a.polyline = function (a) {
              arguments.length > 1 &&
                (a = Array.prototype.slice.call(arguments, 0))
              var b = {}
              return (
                h(a, 'object') && !h(a, 'array')
                  ? (b = a)
                  : null != a && (b = { points: a }),
                this.el('polyline', b)
              )
            }),
            (a.polygon = function (a) {
              arguments.length > 1 &&
                (a = Array.prototype.slice.call(arguments, 0))
              var b = {}
              return (
                h(a, 'object') && !h(a, 'array')
                  ? (b = a)
                  : null != a && (b = { points: a }),
                this.el('polygon', b)
              )
            }),
            (function () {
              var c = b._.$
              function d() {
                return this.selectAll('stop')
              }
              function e(a, i) {
                var e = c('stop'),
                  f = { offset: +i + '%' }
                ;(a = b.color(a)),
                  (f['stop-color'] = a.hex),
                  a.opacity < 1 && (f['stop-opacity'] = a.opacity),
                  c(e, f)
                for (var j, h = this.stops(), d = 0; d < h.length; d++)
                  if (parseFloat(h[d].attr('offset')) > i) {
                    this.node.insertBefore(e, h[d].node), (j = !0)
                    break
                  }
                return j || this.node.appendChild(e), this
              }
              function f() {
                if ('linearGradient' == this.type) {
                  var d = c(this.node, 'x1') || 0,
                    f = c(this.node, 'x2') || 1,
                    e = c(this.node, 'y1') || 0,
                    h = c(this.node, 'y2') || 0
                  return b._.box(d, e, math.abs(f - d), math.abs(h - e))
                }
                var i = this.node.cx || 0.5,
                  j = this.node.cy || 0.5,
                  a = this.node.r || 0
                return b._.box(i - a, j - a, 2 * a, 2 * a)
              }
              function h(e) {
                var c = e,
                  d = this.stops()
                if (
                  ('string' == typeof e &&
                    (c = eve(
                      'snap.util.grad.parse',
                      null,
                      'l(0,0,0,1)' + e
                    ).firstDefined().stops),
                  b.is(c, 'array'))
                ) {
                  for (var a = 0; a < d.length; a++)
                    if (c[a]) {
                      var f = b.color(c[a].color),
                        h = { offset: c[a].offset + '%' }
                      ;(h['stop-color'] = f.hex),
                        f.opacity < 1 && (h['stop-opacity'] = f.opacity),
                        d[a].attr(h)
                    } else d[a].remove()
                  for (a = d.length; a < c.length; a++)
                    this.addStop(c[a].color, c[a].offset)
                  return this
                }
              }
              function i(j, i, k, l, m) {
                var a = b._.make('linearGradient', j)
                return (
                  (a.stops = d),
                  (a.addStop = e),
                  (a.getBBox = f),
                  (a.setStops = h),
                  null != i && c(a.node, { x1: i, y1: k, x2: l, y2: m }),
                  a
                )
              }
              function j(k, h, l, m, i, j) {
                var a = b._.make('radialGradient', k)
                return (
                  (a.stops = d),
                  (a.addStop = e),
                  (a.getBBox = f),
                  null != h && c(a.node, { cx: h, cy: l, r: m }),
                  null != i && null != j && c(a.node, { fx: i, fy: j }),
                  a
                )
              }
              ;(a.gradient = function (a) {
                return (function (h, k) {
                  var b,
                    a = eve('snap.util.grad.parse', null, k).firstDefined()
                  if (!a) return null
                  a.params.unshift(h),
                    (b =
                      'l' == a.type.toLowerCase()
                        ? i.apply(0, a.params)
                        : j.apply(0, a.params)),
                    a.type != a.type.toLowerCase() &&
                      c(b.node, { gradientUnits: 'userSpaceOnUse' })
                  for (var e = a.stops, l = e.length, d = 0; d < l; d++) {
                    var f = e[d]
                    b.addStop(f.color, f.offset)
                  }
                  return b
                })(this.defs, a)
              }),
                (a.gradientLinear = function (a, b, c, d) {
                  return i(this.defs, a, b, c, d)
                }),
                (a.gradientRadial = function (a, b, c, d, e) {
                  return j(this.defs, a, b, c, d, e)
                }),
                (a.toString = function () {
                  var d,
                    e = this.node.ownerDocument,
                    a = e.createDocumentFragment(),
                    c = e.createElement('div'),
                    f = this.node.cloneNode(!0)
                  return (
                    a.appendChild(c),
                    c.appendChild(f),
                    b._.$(f, { xmlns: 'http://www.w3.org/2000/svg' }),
                    (d = c.innerHTML),
                    a.removeChild(a.firstChild),
                    d
                  )
                }),
                (a.toDataURL = function () {
                  if (window && window.btoa)
                    return (
                      'data:image/svg+xml;base64,' +
                      btoa(unescape(encodeURIComponent(this)))
                    )
                }),
                (a.clear = function () {
                  for (var c, b = this.node.firstChild; b; )
                    (c = b.nextSibling),
                      'defs' != b.tagName
                        ? b.parentNode.removeChild(b)
                        : a.clear.call({ node: b }),
                      (b = c)
                })
            })()
        }),
        a.plugin(function (a, e, t, u) {
          var c = e.prototype,
            v = a.is,
            w = a._.clone,
            x = /,?([a-z]),?/gi,
            y = parseFloat,
            b = Math,
            z = b.PI,
            A = b.min,
            B = b.max,
            C = b.pow,
            D = b.abs
          function f(a) {
            var b = (f.ps = f.ps || {})
            return (
              b[a] ? (b[a].sleep = 100) : (b[a] = { sleep: 100 }),
              setTimeout(function () {
                for (var c in b)
                  b.hasOwnProperty(c) &&
                    c != a &&
                    (b[c].sleep--, b[c].sleep || delete b[c])
              }),
              b[a]
            )
          }
          function h(a, e, c, d) {
            return (
              null == a && (a = e = c = d = 0),
              null == e &&
                ((e = a.y), (c = a.width), (d = a.height), (a = a.x)),
              {
                x: a,
                y: e,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: e + d,
                cx: a + c / 2,
                cy: e + d / 2,
                r1: b.min(c, d) / 2,
                r2: b.max(c, d) / 2,
                r0: b.sqrt(c * c + d * d) / 2,
                path: M(a, e, c, d),
                vb: [a, e, c, d].join(' '),
              }
            )
          }
          function i() {
            return this.join(',').replace(x, '$1')
          }
          function j(b) {
            var a = w(b)
            return (a.toString = i), a
          }
          function E(a, b, c, d, e, f, h, i, j) {
            return null == j
              ? H(a, b, c, d, e, f, h, i)
              : m(a, b, c, d, e, f, h, i, I(a, b, c, d, e, f, h, i, j))
          }
          function d(b, c) {
            function d(a) {
              return +(+a).toFixed(3)
            }
            return a._.cacher(
              function (h, p, r) {
                h instanceof e && (h = h.attr('d')), (h = s(h))
                for (
                  var i, j, a, n, f, k = '', o = {}, l = 0, q = 0, t = h.length;
                  q < t;
                  q++
                ) {
                  if ('M' == (a = h[q])[0]) (i = +a[1]), (j = +a[2])
                  else {
                    if (
                      ((n = E(i, j, a[1], a[2], a[3], a[4], a[5], a[6])),
                      l + n > p)
                    ) {
                      if (c && !o.start) {
                        if (
                          ((f = E(
                            i,
                            j,
                            a[1],
                            a[2],
                            a[3],
                            a[4],
                            a[5],
                            a[6],
                            p - l
                          )),
                          (k += [
                            'C' + d(f.start.x),
                            d(f.start.y),
                            d(f.m.x),
                            d(f.m.y),
                            d(f.x),
                            d(f.y),
                          ]),
                          r)
                        )
                          return k
                        ;(o.start = k),
                          (k = [
                            'M' + d(f.x),
                            d(f.y) + 'C' + d(f.n.x),
                            d(f.n.y),
                            d(f.end.x),
                            d(f.end.y),
                            d(a[5]),
                            d(a[6]),
                          ].join()),
                          (l += n),
                          (i = +a[5]),
                          (j = +a[6])
                        continue
                      }
                      if (!b && !c)
                        return E(
                          i,
                          j,
                          a[1],
                          a[2],
                          a[3],
                          a[4],
                          a[5],
                          a[6],
                          p - l
                        )
                    }
                    ;(l += n), (i = +a[5]), (j = +a[6])
                  }
                  k += a.shift() + a
                }
                return (
                  (o.end = k),
                  (f = b
                    ? l
                    : c
                    ? o
                    : m(i, j, a[0], a[1], a[2], a[3], a[4], a[5], 1))
                )
              },
              null,
              a._.clone
            )
          }
          var k = d(1),
            l = d(),
            F = d(0, 1)
          function m(f, h, d, e, i, j, l, m, a) {
            var c = 1 - a,
              n = C(c, 3),
              o = C(c, 2),
              k = a * a,
              p = k * a,
              q = f + 2 * a * (d - f) + k * (i - 2 * d + f),
              r = h + 2 * a * (e - h) + k * (j - 2 * e + h),
              s = d + 2 * a * (i - d) + k * (l - 2 * i + d),
              t = e + 2 * a * (j - e) + k * (m - 2 * j + e),
              u = 90 - (180 * b.atan2(q - s, r - t)) / z
            return {
              x: n * f + 3 * o * a * d + 3 * c * a * a * i + p * l,
              y: n * h + 3 * o * a * e + 3 * c * a * a * j + p * m,
              m: { x: q, y: r },
              n: { x: s, y: t },
              start: { x: c * f + a * d, y: c * h + a * e },
              end: { x: c * i + a * l, y: c * j + a * m },
              alpha: u,
            }
          }
          function n(c, d, e, f, i, j, k, l) {
            a.is(c, 'array') || (c = [c, d, e, f, i, j, k, l])
            var b = S.apply(null, c)
            return h(b.min.x, b.min.y, b.max.x - b.min.x, b.max.y - b.min.y)
          }
          function o(a, b, c) {
            return (
              b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
            )
          }
          function p(a, b) {
            return (
              (a = h(a)),
              (b = h(b)),
              o(b, a.x, a.y) ||
                o(b, a.x2, a.y) ||
                o(b, a.x, a.y2) ||
                o(b, a.x2, a.y2) ||
                o(a, b.x, b.y) ||
                o(a, b.x2, b.y) ||
                o(a, b.x, b.y2) ||
                o(a, b.x2, b.y2) ||
                (((a.x < b.x2 && a.x > b.x) || (b.x < a.x2 && b.x > a.x)) &&
                  ((a.y < b.y2 && a.y > b.y) || (b.y < a.y2 && b.y > a.y)))
            )
          }
          function G(c, a, b, d, e) {
            return (
              c *
                (c * (-3 * a + 9 * b - 9 * d + 3 * e) +
                  6 * a -
                  12 * b +
                  6 * d) -
              3 * a +
              3 * b
            )
          }
          function H(j, k, l, m, n, o, p, q, a) {
            null == a && (a = 1)
            for (
              var d = (a = a > 1 ? 1 : a < 0 ? 0 : a) / 2,
                r = [
                  -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699,
                  0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                ],
                s = [
                  0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601,
                  0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                ],
                e = 0,
                c = 0;
              c < 12;
              c++
            ) {
              var f = d * r[c] + d,
                h = G(f, j, l, n, p),
                i = G(f, k, m, o, q),
                t = h * h + i * i
              e += s[c] * b.sqrt(t)
            }
            return d * e
          }
          function I(d, e, f, h, i, j, k, l, a) {
            if (!(a < 0 || H(d, e, f, h, i, j, k, l) < a)) {
              var b,
                m = 0.5,
                c = 1 - m
              for (b = H(d, e, f, h, i, j, k, l, c); D(b - a) > 0.01; )
                (m /= 2),
                  (c += (b < a ? 1 : -1) * m),
                  (b = H(d, e, f, h, i, j, k, l, c))
              return c
            }
          }
          function J(a, b, c, d, e, f, h, i) {
            if (
              !(
                B(a, c) < A(e, h) ||
                A(a, c) > B(e, h) ||
                B(b, d) < A(f, i) ||
                A(b, d) > B(f, i)
              )
            ) {
              var l = (a - c) * (f - i) - (b - d) * (e - h)
              if (l) {
                var m =
                    ((a * d - b * c) * (e - h) - (a - c) * (e * i - f * h)) / l,
                  n =
                    ((a * d - b * c) * (f - i) - (b - d) * (e * i - f * h)) / l,
                  j = +m.toFixed(2),
                  k = +n.toFixed(2)
                if (
                  !(
                    j < +A(a, c).toFixed(2) ||
                    j > +B(a, c).toFixed(2) ||
                    j < +A(e, h).toFixed(2) ||
                    j > +B(e, h).toFixed(2) ||
                    k < +A(b, d).toFixed(2) ||
                    k > +B(b, d).toFixed(2) ||
                    k < +A(f, i).toFixed(2) ||
                    k > +B(f, i).toFixed(2)
                  )
                )
                  return { x: m, y: n }
              }
            }
          }
          function K(q, r, s) {
            var z = n(q),
              A = n(r)
            if (!p(z, A)) return s ? 0 : []
            for (
              var B = H.apply(0, q),
                C = H.apply(0, r),
                i = ~~(B / 8),
                j = ~~(C / 8),
                t = [],
                u = [],
                y = {},
                v = s ? 0 : [],
                a = 0;
              a < i + 1;
              a++
            ) {
              var e = m.apply(0, q.concat(a / i))
              t.push({ x: e.x, y: e.y, t: a / i })
            }
            for (a = 0; a < j + 1; a++)
              (e = m.apply(0, r.concat(a / j))),
                u.push({ x: e.x, y: e.y, t: a / j })
            for (a = 0; a < i; a++)
              for (var k = 0; k < j; k++) {
                var c = t[a],
                  f = t[a + 1],
                  d = u[k],
                  h = u[k + 1],
                  l = 0.001 > D(f.x - c.x) ? 'y' : 'x',
                  o = 0.001 > D(h.x - d.x) ? 'y' : 'x',
                  b = J(c.x, c.y, f.x, f.y, d.x, d.y, h.x, h.y)
                if (b) {
                  if (y[b.x.toFixed(4)] == b.y.toFixed(4)) continue
                  y[b.x.toFixed(4)] = b.y.toFixed(4)
                  var w = c.t + D((b[l] - c[l]) / (f[l] - c[l])) * (f.t - c.t),
                    x = d.t + D((b[o] - d[o]) / (h[o] - d[o])) * (h.t - d.t)
                  w >= 0 &&
                    w <= 1 &&
                    x >= 0 &&
                    x <= 1 &&
                    (s ? v++ : v.push({ x: b.x, y: b.y, t1: w, t2: x }))
                }
              }
            return v
          }
          function L(l, m, v) {
            ;(l = s(l)), (m = s(m))
            for (
              var b,
                c,
                d,
                e,
                n,
                o,
                p,
                q,
                h,
                i,
                r = v ? 0 : [],
                t = 0,
                w = l.length;
              t < w;
              t++
            ) {
              var j = l[t]
              if ('M' == j[0]) (b = n = j[1]), (c = o = j[2])
              else {
                'C' == j[0]
                  ? ((b = (h = [b, c].concat(j.slice(1)))[6]), (c = h[7]))
                  : ((h = [b, c, b, c, n, o, n, o]), (b = n), (c = o))
                for (var u = 0, x = m.length; u < x; u++) {
                  var k = m[u]
                  if ('M' == k[0]) (d = p = k[1]), (e = q = k[2])
                  else {
                    'C' == k[0]
                      ? ((d = (i = [d, e].concat(k.slice(1)))[6]), (e = i[7]))
                      : ((i = [d, e, d, e, p, q, p, q]), (d = p), (e = q))
                    var a = K(h, i, v)
                    if (v) r += a
                    else {
                      for (var f = 0, y = a.length; f < y; f++)
                        (a[f].segment1 = t),
                          (a[f].segment2 = u),
                          (a[f].bez1 = h),
                          (a[f].bez2 = i)
                      r = r.concat(a)
                    }
                  }
                }
              }
            }
            return r
          }
          function q(b) {
            var k = f(b)
            if (k.bbox) return w(k.bbox)
            if (!b) return h()
            b = s(b)
            for (
              var a, e = 0, i = 0, c = [], d = [], l = 0, p = b.length;
              l < p;
              l++
            )
              if ('M' == (a = b[l])[0])
                (e = a[1]), (i = a[2]), c.push(e), d.push(i)
              else {
                var j = S(e, i, a[1], a[2], a[3], a[4], a[5], a[6])
                ;(c = c.concat(j.min.x, j.max.x)),
                  (d = d.concat(j.min.y, j.max.y)),
                  (e = a[5]),
                  (i = a[6])
              }
            var m = A.apply(0, c),
              n = A.apply(0, d),
              q = B.apply(0, c),
              r = B.apply(0, d),
              o = h(m, n, q - m, r - n)
            return (k.bbox = w(o)), o
          }
          function M(d, e, b, c, a) {
            if (a)
              return [
                ['M', +d + +a, e],
                ['l', b - 2 * a, 0],
                ['a', a, a, 0, 0, 1, a, a],
                ['l', 0, c - 2 * a],
                ['a', a, a, 0, 0, 1, -a, a],
                ['l', 2 * a - b, 0],
                ['a', a, a, 0, 0, 1, -a, -a],
                ['l', 0, 2 * a - c],
                ['a', a, a, 0, 0, 1, a, -a],
                ['z'],
              ]
            var f = [['M', d, e], ['l', b, 0], ['l', 0, c], ['l', -b, 0], ['z']]
            return (f.toString = i), f
          }
          function N(c, d, b, a, e) {
            if (
              (null == e && null == a && (a = b),
              (c = +c),
              (d = +d),
              (b = +b),
              (a = +a),
              null != e)
            )
              var f = Math.PI / 180,
                j = c + b * Math.cos(-a * f),
                k = c + b * Math.cos(-e * f),
                l = d + b * Math.sin(-a * f),
                m = d + b * Math.sin(-e * f),
                h = [
                  ['M', j, l],
                  ['A', b, b, 0, +(e - a > 180), 0, k, m],
                ]
            else
              h = [
                ['M', c, d],
                ['m', 0, -a],
                ['a', b, a, 0, 1, 1, 0, 2 * a],
                ['a', b, a, 0, 1, 1, 0, -2 * a],
                ['z'],
              ]
            return (h.toString = i), h
          }
          var O = a._unit2px
          function r(e) {
            var r = f(e)
            if (r.abs) return j(r.abs)
            if (
              ((v(e, 'array') && v(e && e[0], 'array')) ||
                (e = a.parsePathString(e)),
              !e || !e.length)
            )
              return [['M', 0, 0]]
            var n,
              d = [],
              h = 0,
              k = 0,
              o = 0,
              p = 0,
              u = 0
            'M' == e[0][0] &&
              ((h = +e[0][1]),
              (k = +e[0][2]),
              (o = h),
              (p = k),
              u++,
              (d[0] = ['M', h, k]))
            for (
              var c,
                b,
                w =
                  3 == e.length &&
                  'M' == e[0][0] &&
                  'R' == e[1][0].toUpperCase() &&
                  'Z' == e[2][0].toUpperCase(),
                s = u,
                x = e.length;
              s < x;
              s++
            ) {
              if ((d.push((c = [])), (n = (b = e[s])[0]) != n.toUpperCase()))
                switch (((c[0] = n.toUpperCase()), c[0])) {
                  case 'A':
                    ;(c[1] = b[1]),
                      (c[2] = b[2]),
                      (c[3] = b[3]),
                      (c[4] = b[4]),
                      (c[5] = b[5]),
                      (c[6] = +b[6] + h),
                      (c[7] = +b[7] + k)
                    break
                  case 'V':
                    c[1] = +b[1] + k
                    break
                  case 'H':
                    c[1] = +b[1] + h
                    break
                  case 'R':
                    for (
                      var l = [h, k].concat(b.slice(1)), m = 2, t = l.length;
                      m < t;
                      m++
                    )
                      (l[m] = +l[m] + h), (l[++m] = +l[m] + k)
                    d.pop(), (d = d.concat(T(l, w)))
                    break
                  case 'O':
                    d.pop(),
                      (l = N(h, k, b[1], b[2])).push(l[0]),
                      (d = d.concat(l))
                    break
                  case 'U':
                    d.pop(),
                      (c = ['U'].concat(
                        (d = d.concat(N(h, k, b[1], b[2], b[3])))[
                          d.length - 1
                        ].slice(-2)
                      ))
                    break
                  case 'M':
                    ;(o = +b[1] + h), (p = +b[2] + k)
                  default:
                    for (m = 1, t = b.length; m < t; m++)
                      c[m] = +b[m] + (m % 2 ? h : k)
                }
              else if ('R' == n)
                (l = [h, k].concat(b.slice(1))),
                  d.pop(),
                  (d = d.concat(T(l, w))),
                  (c = ['R'].concat(b.slice(-2)))
              else if ('O' == n)
                d.pop(), (l = N(h, k, b[1], b[2])).push(l[0]), (d = d.concat(l))
              else if ('U' == n)
                d.pop(),
                  (c = ['U'].concat(
                    (d = d.concat(N(h, k, b[1], b[2], b[3])))[
                      d.length - 1
                    ].slice(-2)
                  ))
              else for (var q = 0, y = b.length; q < y; q++) c[q] = b[q]
              if ('O' != (n = n.toUpperCase()))
                switch (c[0]) {
                  case 'Z':
                    ;(h = +o), (k = +p)
                    break
                  case 'H':
                    h = c[1]
                    break
                  case 'V':
                    k = c[1]
                    break
                  case 'M':
                    ;(o = c[c.length - 2]), (p = c[c.length - 1])
                  default:
                    ;(h = c[c.length - 2]), (k = c[c.length - 1])
                }
            }
            return (d.toString = i), (r.abs = j(d)), d
          }
          function P(c, d, a, b) {
            return [c, d, a, b, a, b]
          }
          function Q(h, i, c, d, e, f) {
            var a = 1 / 3,
              b = 2 / 3
            return [
              a * h + b * c,
              a * i + b * d,
              a * e + b * c,
              a * f + b * d,
              e,
              f,
            ]
          }
          function R(k, l, i, e, u, N, r, f, h, p) {
            var s,
              E = (120 * z) / 180,
              v = (z / 180) * (+u || 0),
              j = [],
              w = a._.cacher(function (c, d, a) {
                var e = c * b.cos(a) - d * b.sin(a),
                  f = c * b.sin(a) + d * b.cos(a)
                return { x: e, y: f }
              })
            if (!i || !e) return [k, l, f, h, f, h]
            if (p) (d = p[0]), (c = p[1]), (x = p[2]), (y = p[3])
            else {
              ;(k = (s = w(k, l, -v)).x),
                (l = s.y),
                (s = w(f, h, -v)),
                (f = s.x),
                (h = s.y),
                b.cos((z / 180) * u),
                b.sin((z / 180) * u)
              var n = (k - f) / 2,
                o = (l - h) / 2,
                t = (n * n) / (i * i) + (o * o) / (e * e)
              t > 1 && ((t = b.sqrt(t)), (i *= t), (e *= t))
              var A = i * i,
                B = e * e,
                F =
                  (N == r ? -1 : 1) *
                  b.sqrt(
                    D((A * B - A * o * o - B * n * n) / (A * o * o + B * n * n))
                  ),
                x = (F * i * o) / e + (k + f) / 2,
                y = (-(F * e) * n) / i + (l + h) / 2,
                d = b.asin(((l - y) / e).toFixed(9)),
                c = b.asin(((h - y) / e).toFixed(9))
              ;(d = k < x ? z - d : d),
                (c = f < x ? z - c : c),
                d < 0 && (d = 2 * z + d),
                c < 0 && (c = 2 * z + c),
                r && d > c && (d -= 2 * z),
                !r && c > d && (c -= 2 * z)
            }
            var C = c - d
            if (D(C) > E) {
              var O = c,
                P = f,
                Q = h
              ;(c = d + E * (r && c > d ? 1 : -1)),
                (f = x + i * b.cos(c)),
                (h = y + e * b.sin(c)),
                (j = R(f, h, i, e, u, 0, r, P, Q, [c, O, x, y]))
            }
            C = c - d
            var S = b.cos(d),
              T = b.sin(d),
              U = b.cos(c),
              V = b.sin(c),
              G = b.tan(C / 4),
              H = (4 / 3) * i * G,
              I = (4 / 3) * e * G,
              J = [k, l],
              q = [k + H * T, l - I * S],
              K = [f + H * V, h - I * U],
              L = [f, h]
            if (((q[0] = 2 * J[0] - q[0]), (q[1] = 2 * J[1] - q[1]), p))
              return [q, K, L].concat(j)
            j = [q, K, L].concat(j).join().split(',')
            for (var M = [], m = 0, W = j.length; m < W; m++)
              M[m] = m % 2 ? w(j[m - 1], j[m], v).y : w(j[m], j[m + 1], v).x
            return M
          }
          function S(h, i, m, n, p, q, r, s) {
            for (
              var f, e, o, a, t, u, v, w, j = [], d = [[], []], x = 0;
              x < 2;
              ++x
            ) {
              if (
                (0 == x
                  ? ((e = 6 * h - 12 * m + 6 * p),
                    (f = -3 * h + 9 * m - 9 * p + 3 * r),
                    (o = 3 * m - 3 * h))
                  : ((e = 6 * i - 12 * n + 6 * q),
                    (f = -3 * i + 9 * n - 9 * q + 3 * s),
                    (o = 3 * n - 3 * i)),
                1e-12 > D(f))
              ) {
                if (1e-12 > D(e)) continue
                0 < (a = -o / e) && a < 1 && j.push(a)
                continue
              }
              ;(v = e * e - 4 * o * f),
                (w = b.sqrt(v)),
                !(v < 0) &&
                  (0 < (t = (-e + w) / (2 * f)) && t < 1 && j.push(t),
                  0 < (u = (-e - w) / (2 * f)) && u < 1 && j.push(u))
            }
            for (var c, k = j.length, l = k; k--; )
              (c = 1 - (a = j[k])),
                (d[0][k] =
                  c * c * c * h +
                  3 * c * c * a * m +
                  3 * c * a * a * p +
                  a * a * a * r),
                (d[1][k] =
                  c * c * c * i +
                  3 * c * c * a * n +
                  3 * c * a * a * q +
                  a * a * a * s)
            return (
              (d[0][l] = h),
              (d[1][l] = i),
              (d[0][l + 1] = r),
              (d[1][l + 1] = s),
              (d[0].length = d[1].length = l + 2),
              {
                min: { x: A.apply(0, d[0]), y: A.apply(0, d[1]) },
                max: { x: B.apply(0, d[0]), y: B.apply(0, d[1]) },
              }
            )
          }
          function s(t, l) {
            var s = !l && f(t)
            if (!l && s.curve) return j(s.curve)
            for (
              var c = r(t),
                b = l && r(l),
                d = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                e = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null,
                },
                u = function (b, a, c) {
                  var d, e
                  if (!b) return ['C', a.x, a.y, a.x, a.y, a.x, a.y]
                  switch (
                    ((b[0] in { T: 1, Q: 1 }) || (a.qx = a.qy = null), b[0])
                  ) {
                    case 'M':
                      ;(a.X = b[1]), (a.Y = b[2])
                      break
                    case 'A':
                      b = ['C'].concat(
                        R.apply(0, [a.x, a.y].concat(b.slice(1)))
                      )
                      break
                    case 'S':
                      'C' == c || 'S' == c
                        ? ((d = 2 * a.x - a.bx), (e = 2 * a.y - a.by))
                        : ((d = a.x), (e = a.y)),
                        (b = ['C', d, e].concat(b.slice(1)))
                      break
                    case 'T':
                      'Q' == c || 'T' == c
                        ? ((a.qx = 2 * a.x - a.qx), (a.qy = 2 * a.y - a.qy))
                        : ((a.qx = a.x), (a.qy = a.y)),
                        (b = ['C'].concat(Q(a.x, a.y, a.qx, a.qy, b[1], b[2])))
                      break
                    case 'Q':
                      ;(a.qx = b[1]),
                        (a.qy = b[2]),
                        (b = ['C'].concat(Q(a.x, a.y, b[1], b[2], b[3], b[4])))
                      break
                    case 'L':
                      b = ['C'].concat(P(a.x, a.y, b[1], b[2]))
                      break
                    case 'H':
                      b = ['C'].concat(P(a.x, a.y, b[1], a.y))
                      break
                    case 'V':
                      b = ['C'].concat(P(a.x, a.y, a.x, b[1]))
                      break
                    case 'Z':
                      b = ['C'].concat(P(a.x, a.y, a.X, a.Y))
                  }
                  return b
                },
                v = function (d, a) {
                  if (d[a].length > 7) {
                    d[a].shift()
                    for (var e = d[a]; e.length; )
                      (m[a] = 'A'),
                        b && (n[a] = 'A'),
                        d.splice(a++, 0, ['C'].concat(e.splice(0, 6)))
                    d.splice(a, 1), (x = B(c.length, (b && b.length) || 0))
                  }
                },
                w = function (d, f, e, h, a) {
                  d &&
                    f &&
                    'M' == d[a][0] &&
                    'M' != f[a][0] &&
                    (f.splice(a, 0, ['M', h.x, h.y]),
                    (e.bx = 0),
                    (e.by = 0),
                    (e.x = d[a][1]),
                    (e.y = d[a][2]),
                    (x = B(c.length, (b && b.length) || 0)))
                },
                m = [],
                n = [],
                h = '',
                o = '',
                a = 0,
                x = B(c.length, (b && b.length) || 0);
              a < x;
              a++
            ) {
              c[a] && (h = c[a][0]),
                'C' != h && ((m[a] = h), a && (o = m[a - 1])),
                (c[a] = u(c[a], d, o)),
                'A' != m[a] && 'C' == h && (m[a] = 'C'),
                v(c, a),
                b &&
                  (b[a] && (h = b[a][0]),
                  'C' != h && ((n[a] = h), a && (o = n[a - 1])),
                  (b[a] = u(b[a], e, o)),
                  'A' != n[a] && 'C' == h && (n[a] = 'C'),
                  v(b, a)),
                w(c, b, d, e, a),
                w(b, c, e, d, a)
              var i = c[a],
                k = b && b[a],
                p = i.length,
                q = b && k.length
              ;(d.x = i[p - 2]),
                (d.y = i[p - 1]),
                (d.bx = y(i[p - 4]) || d.x),
                (d.by = y(i[p - 3]) || d.y),
                (e.bx = b && (y(k[q - 4]) || e.x)),
                (e.by = b && (y(k[q - 3]) || e.y)),
                (e.x = b && k[q - 2]),
                (e.y = b && k[q - 1])
            }
            return b || (s.curve = j(c)), b ? [c, b] : c
          }
          function T(b, e) {
            for (var f = [], c = 0, d = b.length; d - 2 * !e > c; c += 2) {
              var a = [
                { x: +b[c - 2], y: +b[c - 1] },
                { x: +b[c], y: +b[c + 1] },
                { x: +b[c + 2], y: +b[c + 3] },
                { x: +b[c + 4], y: +b[c + 5] },
              ]
              e
                ? c
                  ? d - 4 == c
                    ? (a[3] = { x: +b[0], y: +b[1] })
                    : d - 2 == c &&
                      ((a[2] = { x: +b[0], y: +b[1] }),
                      (a[3] = { x: +b[2], y: +b[3] }))
                  : (a[0] = { x: +b[d - 2], y: +b[d - 1] })
                : d - 4 == c
                ? (a[3] = a[2])
                : c || (a[0] = { x: +b[c], y: +b[c + 1] }),
                f.push([
                  'C',
                  (-a[0].x + 6 * a[1].x + a[2].x) / 6,
                  (-a[0].y + 6 * a[1].y + a[2].y) / 6,
                  (a[1].x + 6 * a[2].x - a[3].x) / 6,
                  (a[1].y + 6 * a[2].y - a[3].y) / 6,
                  a[2].x,
                  a[2].y,
                ])
            }
            return f
          }
          ;(a.path = f),
            (a.path.getTotalLength = k),
            (a.path.getPointAtLength = l),
            (a.path.getSubpath = function (a, b, c) {
              if (this.getTotalLength(a) - c < 1e-6) return F(a, b).end
              var d = F(a, c, 1)
              return b ? F(d, b).end : d
            }),
            (c.getTotalLength = function () {
              if (this.node.getTotalLength) return this.node.getTotalLength()
            }),
            (c.getPointAtLength = function (a) {
              return l(this.attr('d'), a)
            }),
            (c.getSubpath = function (b, c) {
              return a.path.getSubpath(this.attr('d'), b, c)
            }),
            (a._.box = h),
            (a.path.findDotsAtSegment = m),
            (a.path.bezierBBox = n),
            (a.path.isPointInsideBBox = o),
            (a.closest = function (e, f, m, s) {
              for (
                var b = 100,
                  n = h(e - b / 2, f - b / 2, b, b),
                  d = [],
                  r = m[0].hasOwnProperty('x')
                    ? function (a) {
                        return { x: m[a].x, y: m[a].y }
                      }
                    : function (a) {
                        return { x: m[a], y: s[a] }
                      },
                  i = 0;
                b <= 1e6 && !i;

              ) {
                for (var c = 0, j = m.length; c < j; c++) {
                  var k = r(c)
                  if (o(n, k.x, k.y)) {
                    i++, d.push(k)
                    break
                  }
                }
                i || ((b *= 2), (n = h(e - b / 2, f - b / 2, b, b)))
              }
              if (1e6 != b) {
                var p,
                  q = 1 / 0
                for (c = 0, j = d.length; c < j; c++) {
                  var l = a.len(e, f, d[c].x, d[c].y)
                  q > l && ((q = l), (d[c].len = l), (p = d[c]))
                }
                return p
              }
            }),
            (a.path.isBBoxIntersect = p),
            (a.path.intersection = function (a, b) {
              return L(a, b)
            }),
            (a.path.intersectionNumber = function (a, b) {
              return L(a, b, 1)
            }),
            (a.path.isPointInside = function (a, b, c) {
              var d = q(a)
              return (
                o(d, b, c) &&
                L(
                  a,
                  [
                    ['M', b, c],
                    ['H', d.x2 + 10],
                  ],
                  1
                ) %
                  2 ==
                  1
              )
            }),
            (a.path.getBBox = q),
            (a.path.get = {
              path: function (a) {
                return a.attr('path')
              },
              circle: function (b) {
                var a = O(b)
                return N(a.cx, a.cy, a.r)
              },
              ellipse: function (b) {
                var a = O(b)
                return N(a.cx || 0, a.cy || 0, a.rx, a.ry)
              },
              rect: function (b) {
                var a = O(b)
                return M(a.x || 0, a.y || 0, a.width, a.height, a.rx, a.ry)
              },
              image: function (b) {
                var a = O(b)
                return M(a.x || 0, a.y || 0, a.width, a.height)
              },
              line: function (a) {
                return (
                  'M' +
                  [
                    a.attr('x1') || 0,
                    a.attr('y1') || 0,
                    a.attr('x2'),
                    a.attr('y2'),
                  ]
                )
              },
              polyline: function (a) {
                return 'M' + a.attr('points')
              },
              polygon: function (a) {
                return 'M' + a.attr('points') + 'z'
              },
              deflt: function (b) {
                var a = b.node.getBBox()
                return M(a.x, a.y, a.width, a.height)
              },
            }),
            (a.path.toRelative = function (h) {
              var r = f(h),
                s = String.prototype.toLowerCase
              if (r.rel) return j(r.rel)
              ;(a.is(h, 'array') && a.is(h && h[0], 'array')) ||
                (h = a.parsePathString(h))
              var c = [],
                l = 0,
                k = 0,
                n = 0,
                o = 0,
                t = 0
              'M' == h[0][0] &&
                ((l = h[0][1]),
                (k = h[0][2]),
                (n = l),
                (o = k),
                t++,
                c.push(['M', l, k]))
              for (var d = t, u = h.length; d < u; d++) {
                var e = (c[d] = []),
                  b = h[d]
                if (b[0] != s.call(b[0]))
                  switch (((e[0] = s.call(b[0])), e[0])) {
                    case 'a':
                      ;(e[1] = b[1]),
                        (e[2] = b[2]),
                        (e[3] = b[3]),
                        (e[4] = b[4]),
                        (e[5] = b[5]),
                        (e[6] = +(b[6] - l).toFixed(3)),
                        (e[7] = +(b[7] - k).toFixed(3))
                      break
                    case 'v':
                      e[1] = +(b[1] - k).toFixed(3)
                      break
                    case 'm':
                      ;(n = b[1]), (o = b[2])
                    default:
                      for (var m = 1, v = b.length; m < v; m++)
                        e[m] = +(b[m] - (m % 2 ? l : k)).toFixed(3)
                  }
                else {
                  ;(e = c[d] = []),
                    'm' == b[0] && ((n = b[1] + l), (o = b[2] + k))
                  for (var p = 0, w = b.length; p < w; p++) c[d][p] = b[p]
                }
                var q = c[d].length
                switch (c[d][0]) {
                  case 'z':
                    ;(l = n), (k = o)
                    break
                  case 'h':
                    l += +c[d][q - 1]
                    break
                  case 'v':
                    k += +c[d][q - 1]
                    break
                  default:
                    ;(l += +c[d][q - 2]), (k += +c[d][q - 1])
                }
              }
              return (c.toString = i), (r.rel = j(c)), c
            }),
            (a.path.toAbsolute = r),
            (a.path.toCubic = s),
            (a.path.map = function (c, e) {
              var f, h, d, a, i, j, b
              if (!e) return c
              for (d = 0, i = (c = s(c)).length; d < i; d++)
                for (a = 1, j = (b = c[d]).length; a < j; a += 2)
                  (f = e.x(b[a], b[a + 1])),
                    (h = e.y(b[a], b[a + 1])),
                    (b[a] = f),
                    (b[a + 1] = h)
              return c
            }),
            (a.path.toString = i),
            (a.path.clone = j)
        }),
        a.plugin(function (b, d, e, f) {
          var h = Math.max,
            i = Math.min,
            c = function (a) {
              if (
                ((this.items = []),
                (this.bindings = {}),
                (this.length = 0),
                (this.type = 'set'),
                a)
              )
                for (var b = 0, c = a.length; b < c; b++)
                  a[b] &&
                    ((this[this.items.length] = this.items[this.items.length] =
                      a[b]),
                    this.length++)
            },
            a = c.prototype
          ;(a.push = function () {
            for (var a, c, b = 0, d = arguments.length; b < d; b++)
              (a = arguments[b]),
                a &&
                  ((this[(c = this.items.length)] = this.items[c] = a),
                  this.length++)
            return this
          }),
            (a.pop = function () {
              return this.length && delete this[this.length--], this.items.pop()
            }),
            (a.forEach = function (b, c) {
              for (
                var a = 0, d = this.items.length;
                a < d && !1 !== b.call(c, this.items[a], a);
                a++
              );
              return this
            }),
            (a.animate = function (a, f, c, d) {
              'function' != typeof c || c.length || ((d = c), (c = x.linear)),
                a instanceof b._.Animation &&
                  ((d = a.callback), (c = a.easing), (f = c.dur), (a = a.attr))
              var e = arguments
              if (b.is(a, 'array') && b.is(e[e.length - 1], 'array')) var h = !0
              var i,
                j = function () {
                  i ? (this.b = i) : (i = this.b)
                },
                k = 0,
                l = this,
                m =
                  d &&
                  function () {
                    ++k == l.length && d.call(this)
                  }
              return this.forEach(function (b, d) {
                eve.once('snap.animcreated.' + b.id, j),
                  h ? e[d] && b.animate.apply(b, e[d]) : b.animate(a, f, c, m)
              })
            }),
            (a.remove = function () {
              for (; this.length; ) this.pop().remove()
              return this
            }),
            (a.bind = function (a, b, c) {
              var d = {}
              if ('function' == typeof b) this.bindings[a] = b
              else {
                var e = c || a
                this.bindings[a] = function (a) {
                  ;(d[e] = a), b.attr(d)
                }
              }
              return this
            }),
            (a.attr = function (b) {
              var d = {}
              for (var a in b)
                this.bindings[a] ? this.bindings[a](b[a]) : (d[a] = b[a])
              for (var c = 0, e = this.items.length; c < e; c++)
                this.items[c].attr(d)
              return this
            }),
            (a.clear = function () {
              for (; this.length; ) this.pop()
            }),
            (a.splice = function (b, d, l) {
              ;(b = b < 0 ? h(this.length + b, 0) : b),
                (d = h(0, i(this.length - b, d)))
              var a,
                f = [],
                k = [],
                j = []
              for (a = 2; a < arguments.length; a++) j.push(arguments[a])
              for (a = 0; a < d; a++) k.push(this[b + a])
              for (; a < this.length - b; a++) f.push(this[b + a])
              var e = j.length
              for (a = 0; a < e + f.length; a++)
                this.items[b + a] = this[b + a] = a < e ? j[a] : f[a - e]
              for (a = this.items.length = this.length -= d - e; this[a]; )
                delete this[a++]
              return new c(k)
            }),
            (a.exclude = function (b) {
              for (var a = 0, c = this.length; a < c; a++)
                if (this[a] == b) return this.splice(a, 1), !0
              return !1
            }),
            (a.insertAfter = function (b) {
              for (var a = this.items.length; a--; )
                this.items[a].insertAfter(b)
              return this
            }),
            (a.getBBox = function () {
              for (
                var a = [], b = [], c = [], d = [], f = this.items.length;
                f--;

              )
                if (!this.items[f].removed) {
                  var e = this.items[f].getBBox()
                  a.push(e.x),
                    b.push(e.y),
                    c.push(e.x + e.width),
                    d.push(e.y + e.height)
                }
              return (
                (a = i.apply(0, a)),
                (b = i.apply(0, b)),
                (c = h.apply(0, c)),
                (d = h.apply(0, d)),
                {
                  x: a,
                  y: b,
                  x2: c,
                  y2: d,
                  width: c - a,
                  height: d - b,
                  cx: a + (c - a) / 2,
                  cy: b + (d - b) / 2,
                }
              )
            }),
            (a.clone = function (a) {
              a = new c()
              for (var b = 0, d = this.items.length; b < d; b++)
                a.push(this.items[b].clone())
              return a
            }),
            (a.toString = function () {
              return 'Snap\u2018s set'
            }),
            (a.type = 'set'),
            (b.Set = c),
            (b.set = function () {
              var a = new c()
              return (
                arguments.length &&
                  a.push.apply(a, Array.prototype.slice.call(arguments, 0)),
                a
              )
            })
        }),
        a.plugin(function (c, b, d, e) {
          var a = {},
            f = /[%a-z]+$/i,
            h = String
          function i(a) {
            var b = a[0]
            switch (b.toLowerCase()) {
              case 't':
                return [b, 0, 0]
              case 'm':
                return [b, 1, 0, 0, 1, 0, 0]
              case 'r':
                if (4 == a.length) return [b, 0, a[2], a[3]]
                return [b, 0]
              case 's':
                if (5 == a.length) return [b, 1, 1, a[3], a[4]]
                if (3 == a.length) return [b, 1, 1]
                return [b, 1]
            }
          }
          function j(a) {
            return a
          }
          function k(a) {
            return a.join(' ')
          }
          function l(a) {
            return c.rgb(a[0], a[1], a[2], a[3])
          }
          function m(c) {
            var a,
              f,
              b,
              h,
              d,
              e,
              j = 0,
              i = []
            for (a = 0, f = c.length; a < f; a++) {
              for (
                b = 1, d = '[', e = ['"' + c[a][0] + '"'], h = c[a].length;
                b < h;
                b++
              )
                e[b] = 'val[' + j++ + ']'
              ;(d += e + ']'), (i[a] = d)
            }
            return Function(
              'val',
              'return Snap.path.toString.call([' + i + '])'
            )
          }
          function n(b) {
            for (var d = [], a = 0, e = b.length; a < e; a++)
              for (var c = 1, f = b[a].length; c < f; c++) d.push(b[a][c])
            return d
          }
          function o(a) {
            return isFinite(a)
          }
          ;(a.stroke = a.fill = 'colour'),
            (b.prototype.equal = function (a, b) {
              return eve('snap.util.equal', this, a, b).firstDefined()
            }),
            eve.on('snap.util.equal', function (d, b) {
              var u,
                e,
                q,
                p = h(this.attr(d) || ''),
                w = this
              if ('colour' == a[d])
                return (
                  (e = c.color(p)),
                  (q = c.color(b)),
                  {
                    from: [e.r, e.g, e.b, e.opacity],
                    to: [q.r, q.g, q.b, q.opacity],
                    f: l,
                  }
                )
              if ('viewBox' == d)
                return {
                  from: (e = this.attr(d).vb.split(' ').map(Number)),
                  to: (q = b.split(' ').map(Number)),
                  f: k,
                }
              if (
                'transform' == d ||
                'gradientTransform' == d ||
                'patternTransform' == d
              )
                return (
                  'string' == typeof b &&
                    (b = h(b).replace(/\.{3}|\u2026/g, p)),
                  (p = this.matrix),
                  (b = c._.rgTransform.test(b)
                    ? c._.transform2matrix(b, this.getBBox())
                    : c._.transform2matrix(
                        c._.svgTransform2string(b),
                        this.getBBox()
                      )),
                  (function (b, a, l) {
                    ;(b = b || new c.Matrix()),
                      (a = a || new c.Matrix()),
                      (b = c.parseTransformString(b.toTransformString()) || []),
                      (a = c.parseTransformString(a.toTransformString()) || [])
                    for (
                      var e,
                        o,
                        d,
                        f,
                        p = Math.max(b.length, a.length),
                        j = [],
                        k = [],
                        h = 0;
                      h < p;
                      h++
                    ) {
                      if (
                        ((d = b[h] || i(a[h])),
                        (f = a[h] || i(d)),
                        d[0] != f[0] ||
                          ('r' == d[0].toLowerCase() &&
                            (d[2] != f[2] || d[3] != f[3])) ||
                          ('s' == d[0].toLowerCase() &&
                            (d[3] != f[3] || d[4] != f[4])))
                      ) {
                        ;(b = c._.transform2matrix(b, l())),
                          (a = c._.transform2matrix(a, l())),
                          (j = [['m', b.a, b.b, b.c, b.d, b.e, b.f]]),
                          (k = [['m', a.a, a.b, a.c, a.d, a.e, a.f]])
                        break
                      }
                      for (
                        e = 0,
                          j[h] = [],
                          k[h] = [],
                          o = Math.max(d.length, f.length);
                        e < o;
                        e++
                      )
                        e in d && (j[h][e] = d[e]), e in f && (k[h][e] = f[e])
                    }
                    return { from: n(j), to: n(k), f: m(j) }
                  })(p, b, function () {
                    return w.getBBox(1)
                  })
                )
              if ('d' == d || 'path' == d)
                return (
                  (e = c.path.toCubic(p, b)),
                  { from: n(e[0]), to: n(e[1]), f: m(e[0]) }
                )
              if ('points' == d)
                return (
                  (e = h(p).split(c._.separator)),
                  (q = h(b).split(c._.separator)),
                  {
                    from: e,
                    to: q,
                    f: function (a) {
                      return a
                    },
                  }
                )
              if (o(p) && o(b))
                return { from: parseFloat(p), to: parseFloat(b), f: j }
              var r,
                s,
                t = p.match(f),
                v = h(b).match(f)
              return t &&
                ((r = t),
                (s = v),
                c.is(r, 'array') &&
                  c.is(s, 'array') &&
                  r.toString() == s.toString())
                ? {
                    from: parseFloat(p),
                    to: parseFloat(b),
                    f:
                      ((u = t),
                      function (a) {
                        return +a.toFixed(3) + u
                      }),
                  }
                : { from: this.asPX(d), to: this.asPX(d, b), f: j }
            })
        }),
        a.plugin(function (f, d, h, e) {
          for (
            var a = d.prototype,
              i = ('createTouch' in e.doc),
              b = [
                'click',
                'dblclick',
                'mousedown',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'touchstart',
                'touchmove',
                'touchend',
                'touchcancel',
              ],
              j = {
                mousedown: 'touchstart',
                mousemove: 'touchmove',
                mouseup: 'touchend',
              },
              k = function (d, a) {
                var b = 'y' == d ? 'scrollTop' : 'scrollLeft',
                  c = a && a.node ? a.node.ownerDocument : e.doc
                return c[(b in c.documentElement) ? 'documentElement' : 'body'][
                  b
                ]
              },
              l = function (b, a, e, f) {
                var c = i && j[a] ? j[a] : a,
                  d = function (c) {
                    var h = k('y', f),
                      l = k('x', f)
                    if (i && j.hasOwnProperty(a)) {
                      for (
                        var d = 0,
                          m = c.targetTouches && c.targetTouches.length;
                        d < m;
                        d++
                      )
                        if (
                          c.targetTouches[d].target == b ||
                          b.contains(c.targetTouches[d].target)
                        ) {
                          var n = c
                          ;((c = c.targetTouches[d]).originalEvent = n),
                            (c.preventDefault = function () {
                              return this.originalEvent.preventDefault()
                            }),
                            (c.stopPropagation = function () {
                              return this.originalEvent.stopPropagation()
                            })
                          break
                        }
                    }
                    var o = c.clientX + l,
                      p = c.clientY + h
                    return e.call(f, c, o, p)
                  }
                return (
                  a !== c && b.addEventListener(a, d, !1),
                  b.addEventListener(c, d, !1),
                  function () {
                    return (
                      a !== c && b.removeEventListener(a, d, !1),
                      b.removeEventListener(c, d, !1),
                      !0
                    )
                  }
                )
              },
              m = [],
              n = function (a) {
                for (
                  var b,
                    c = a.clientX,
                    d = a.clientY,
                    l = k('y'),
                    n = k('x'),
                    h = m.length;
                  h--;

                ) {
                  if (((b = m[h]), i)) {
                    for (var e, j = a.touches && a.touches.length; j--; )
                      if (
                        (e = a.touches[j]).identifier == b.el._drag.id ||
                        b.el.node.contains(e.target)
                      ) {
                        ;(c = e.clientX),
                          (d = e.clientY),
                          (a.originalEvent
                            ? a.originalEvent
                            : a
                          ).preventDefault()
                        break
                      }
                  } else a.preventDefault()
                  var f = b.el.node
                  f.nextSibling,
                    f.parentNode,
                    f.style.display,
                    (c += n),
                    (d += l),
                    eve(
                      'snap.drag.move.' + b.el.id,
                      b.move_scope || b.el,
                      c - b.el._drag.x,
                      d - b.el._drag.y,
                      c,
                      d,
                      a
                    )
                }
              },
              o = function (c) {
                f.unmousemove(n).unmouseup(o)
                for (var a, b = m.length; b--; )
                  ((a = m[b]).el._drag = {}),
                    eve(
                      'snap.drag.end.' + a.el.id,
                      a.end_scope || a.start_scope || a.move_scope || a.el,
                      c
                    ),
                    eve.off('snap.drag.*.' + a.el.id)
                m = []
              },
              c = b.length;
            c--;

          )
            !(function (b) {
              ;(f[b] = a[b] =
                function (c, d) {
                  if (f.is(c, 'function'))
                    (this.events = this.events || []),
                      this.events.push({
                        name: b,
                        f: c,
                        unbind: l(this.node || document, b, c, d || this),
                      })
                  else
                    for (var a = 0, e = this.events.length; a < e; a++)
                      if (this.events[a].name == b)
                        try {
                          this.events[a].f.call(this)
                        } catch (h) {}
                  return this
                }),
                (f['un' + b] = a['un' + b] =
                  function (d) {
                    for (var a = this.events || [], c = a.length; c--; )
                      if (a[c].name == b && (a[c].f == d || !d)) {
                        a[c].unbind(),
                          a.splice(c, 1),
                          a.length || delete this.events
                        break
                      }
                    return this
                  })
            })(b[c])
          ;(a.hover = function (b, c, a, d) {
            return this.mouseover(b, a).mouseout(c, d || a)
          }),
            (a.unhover = function (a, b) {
              return this.unmouseover(a).unmouseout(b)
            })
          var p = []
          ;(a.drag = function (d, e, h, i, j, k) {
            var l,
              a = this
            if (!arguments.length)
              return a.drag(
                function (a, b) {
                  this.attr({ transform: l + (l ? 'T' : 't') + [a, b] })
                },
                function () {
                  l = this.transform().local
                }
              )
            function b(b, c, l) {
              ;(b.originalEvent || b).preventDefault(),
                (a._drag.x = c),
                (a._drag.y = l),
                (a._drag.id = b.identifier),
                m.length || f.mousemove(n).mouseup(o),
                m.push({ el: a, move_scope: i, start_scope: j, end_scope: k }),
                e && eve.on('snap.drag.start.' + a.id, e),
                d && eve.on('snap.drag.move.' + a.id, d),
                h && eve.on('snap.drag.end.' + a.id, h),
                eve('snap.drag.start.' + a.id, j || i || a, c, l, b)
            }
            function c(b, c, d) {
              eve('snap.draginit.' + a.id, a, b, c, d)
            }
            return (
              eve.on('snap.draginit.' + a.id, b),
              (a._drag = {}),
              p.push({ el: a, start: b, init: c }),
              a.mousedown(c),
              a
            )
          }),
            (a.undrag = function () {
              for (var a = p.length; a--; )
                p[a].el == this &&
                  (this.unmousedown(p[a].init),
                  p.splice(a, 1),
                  eve.unbind('snap.drag.*.' + this.id),
                  eve.unbind('snap.draginit.' + this.id))
              return p.length || f.unmousemove(n).unmouseup(o), this
            })
        }),
        a.plugin(function (a, b, c, e) {
          b.prototype
          var d = c.prototype,
            f = /^\s*url\((.+)\)/,
            h = String,
            i = a._.$
          ;(a.filter = {}),
            (d.filter = function (e) {
              var c = this
              'svg' != c.type && (c = c.paper)
              var f = a.parse(h(e)),
                j = a._.id(),
                d = (c.node.offsetWidth, c.node.offsetHeight, i('filter'))
              return (
                i(d, { id: j, filterUnits: 'userSpaceOnUse' }),
                d.appendChild(f.node),
                c.defs.appendChild(d),
                new b(d)
              )
            }),
            eve.on('snap.util.getattr.filter', function () {
              eve.stop()
              var b = i(this.node, 'filter')
              if (b) {
                var c = h(b).match(f)
                return c && a.select(c[1])
              }
            }),
            eve.on('snap.util.attr.filter', function (c) {
              if (c instanceof b && 'filter' == c.type) {
                eve.stop()
                var d = c.node.id
                d || (i(c.node, { id: c.id }), (d = c.id)),
                  i(this.node, { filter: a.url(d) })
              }
              ;(c && 'none' != c) ||
                (eve.stop(), this.node.removeAttribute('filter'))
            }),
            (a.filter.blur = function (b, c) {
              null == b && (b = 2)
              var d = null == c ? b : [b, c]
              return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d,
              })
            }),
            (a.filter.blur.toString = function () {
              return this()
            }),
            (a.filter.shadow = function (e, f, b, c, d) {
              return (
                null == d &&
                  (null == c
                    ? ((d = b), (b = 4), (c = '#000'))
                    : ((d = c), (c = b), (b = 4))),
                null == b && (b = 4),
                null == d && (d = 1),
                null == e && ((e = 0), (f = 2)),
                null == f && (f = e),
                (c = a.color(c)),
                a.format(
                  '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                  { color: c, dx: e, dy: f, blur: b, opacity: d }
                )
              )
            }),
            (a.filter.shadow.toString = function () {
              return this()
            }),
            (a.filter.grayscale = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.2126 + 0.7874 * (1 - b),
                    b: 0.7152 - 0.7152 * (1 - b),
                    c: 0.0722 - 0.0722 * (1 - b),
                    d: 0.2126 - 0.2126 * (1 - b),
                    e: 0.7152 + 0.2848 * (1 - b),
                    f: 0.0722 - 0.0722 * (1 - b),
                    g: 0.2126 - 0.2126 * (1 - b),
                    h: 0.0722 + 0.9278 * (1 - b),
                  }
                )
              )
            }),
            (a.filter.grayscale.toString = function () {
              return this()
            }),
            (a.filter.sepia = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                  {
                    a: 0.393 + 0.607 * (1 - b),
                    b: 0.769 - 0.769 * (1 - b),
                    c: 0.189 - 0.189 * (1 - b),
                    d: 0.349 - 0.349 * (1 - b),
                    e: 0.686 + 0.314 * (1 - b),
                    f: 0.168 - 0.168 * (1 - b),
                    g: 0.272 - 0.272 * (1 - b),
                    h: 0.534 - 0.534 * (1 - b),
                    i: 0.131 + 0.869 * (1 - b),
                  }
                )
              )
            }),
            (a.filter.sepia.toString = function () {
              return this()
            }),
            (a.filter.saturate = function (b) {
              return (
                null == b && (b = 1),
                a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                  amount: 1 - b,
                })
              )
            }),
            (a.filter.saturate.toString = function () {
              return this()
            }),
            (a.filter.hueRotate = function (b) {
              return (
                (b = b || 0),
                a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                  angle: b,
                })
              )
            }),
            (a.filter.hueRotate.toString = function () {
              return this()
            }),
            (a.filter.invert = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                  { amount: b, amount2: 1 - b }
                )
              )
            }),
            (a.filter.invert.toString = function () {
              return this()
            }),
            (a.filter.brightness = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                  { amount: b }
                )
              )
            }),
            (a.filter.brightness.toString = function () {
              return this()
            }),
            (a.filter.contrast = function (b) {
              return (
                null == b && (b = 1),
                a.format(
                  '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                  { amount: b, amount2: 0.5 - b / 2 }
                )
              )
            }),
            (a.filter.contrast.toString = function () {
              return this()
            })
        }),
        a.plugin(function (a, b, c, d, e) {
          var f = a._.box,
            h = a.is,
            i = /^[^a-z]*([tbmlrc])/i
          ;(b.prototype.getAlign = function (b, c) {
            null == c && h(b, 'string') && ((c = b), (b = null))
            var d = (b = b || this.paper).getBBox ? b.getBBox() : f(b),
              e = this.getBBox(),
              a = {}
            switch ((c = (c = c && c.match(i)) ? c[1].toLowerCase() : 'c')) {
              case 't':
                ;(a.dx = 0), (a.dy = d.y - e.y)
                break
              case 'b':
                ;(a.dx = 0), (a.dy = d.y2 - e.y2)
                break
              case 'm':
                ;(a.dx = 0), (a.dy = d.cy - e.cy)
                break
              case 'l':
                ;(a.dx = d.x - e.x), (a.dy = 0)
                break
              case 'r':
                ;(a.dx = d.x2 - e.x2), (a.dy = 0)
                break
              default:
                ;(a.dx = d.cx - e.cx), (a.dy = 0)
            }
            return (
              (a.toString = function () {
                return 'T' + this.dx + ',' + this.dy
              }),
              a
            )
          }),
            (b.prototype.align = function (a, b) {
              return this.transform('...' + this.getAlign(a, b))
            })
        }),
        a.plugin(function (a, c, e, f, h) {
          var b = c.prototype,
            i = a.is,
            j = String,
            k = 'hasOwnProperty'
          function l(a, b, c) {
            return function (e) {
              var d = e.slice(a, b)
              return 1 == d.length && (d = d[0]), c ? c(d) : d
            }
          }
          var d = function (c, d, a, b) {
            'function' != typeof a || a.length || ((b = a), (a = x.linear)),
              (this.attr = c),
              (this.dur = d),
              a && (this.easing = a),
              b && (this.callback = b)
          }
          ;(a._.Animation = d),
            (a.animation = function (a, b, c, e) {
              return new d(a, b, c, e)
            }),
            (b.inAnim = function () {
              var b = []
              for (var a in this.anims)
                this.anims[k](a) &&
                  (function (a) {
                    b.push({
                      anim: new d(a._attrs, a.dur, a.easing, a._callback),
                      mina: a,
                      curStatus: a.status(),
                      status: function (b) {
                        return a.status(b)
                      },
                      stop: function () {
                        a.stop()
                      },
                    })
                  })(this.anims[a])
              return b
            }),
            (a.animate = function (e, f, h, i, a, b) {
              'function' != typeof a || a.length || ((b = a), (a = x.linear))
              var c = x.time(),
                d = x(e, f, c, c + i, x.time, h, a)
              return b && eve.once('mina.finish.' + d.id, b), d
            }),
            (b.stop = function () {
              for (var b = this.inAnim(), a = 0, c = b.length; a < c; a++)
                b[a].stop()
              return this
            }),
            (b.animate = function (a, r, c, n) {
              'function' != typeof c || c.length || ((n = c), (c = x.linear)),
                a instanceof d &&
                  ((n = a.callback), (c = a.easing), (r = a.dur), (a = a.attr))
              var h,
                o,
                s,
                p,
                m = [],
                q = [],
                u = {},
                e = this
              for (var f in a)
                if (a[k](f)) {
                  e.equal
                    ? ((h = (p = e.equal(f, j(a[f]))).from),
                      (o = p.to),
                      (s = p.f))
                    : ((h = +e.attr(f)), (o = +a[f]))
                  var v = i(h, 'array') ? h.length : 1
                  ;(u[f] = l(m.length, m.length + v, s)),
                    (m = m.concat(h)),
                    (q = q.concat(o))
                }
              var t = x.time(),
                b = x(
                  m,
                  q,
                  t,
                  t + r,
                  x.time,
                  function (c) {
                    var b = {}
                    for (var a in u) u[k](a) && (b[a] = u[a](c))
                    e.attr(b)
                  },
                  c
                )
              return (
                (e.anims[b.id] = b),
                (b._attrs = a),
                (b._callback = n),
                eve('snap.animcreated.' + e.id, b),
                eve.once('mina.finish.' + b.id, function () {
                  eve.off('mina.*.' + b.id),
                    delete e.anims[b.id],
                    n && n.call(e)
                }),
                eve.once('mina.stop.' + b.id, function () {
                  eve.off('mina.*.' + b.id), delete e.anims[b.id]
                }),
                e
              )
            })
        }),
        a.plugin(function (a, c, d, e) {
          function b(a) {
            a = a.split(/(?=#)/)
            var b = new String(a[5])
            return (
              (b[50] = a[0]),
              (b[100] = a[1]),
              (b[200] = a[2]),
              (b[300] = a[3]),
              (b[400] = a[4]),
              (b[500] = a[5]),
              (b[600] = a[6]),
              (b[700] = a[7]),
              (b[800] = a[8]),
              (b[900] = a[9]),
              a[10] &&
                ((b.A100 = a[10]),
                (b.A200 = a[11]),
                (b.A400 = a[12]),
                (b.A700 = a[13])),
              b
            )
          }
          ;(a.mui = {}),
            (a.flat = {}),
            (a.mui.red = b(
              '#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000'
            )),
            (a.mui.pink = b(
              '#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162'
            )),
            (a.mui.purple = b(
              '#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF'
            )),
            (a.mui.deeppurple = b(
              '#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA'
            )),
            (a.mui.indigo = b(
              '#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE'
            )),
            (a.mui.blue = b(
              '#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF'
            )),
            (a.mui.lightblue = b(
              '#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA'
            )),
            (a.mui.cyan = b(
              '#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4'
            )),
            (a.mui.teal = b(
              '#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5'
            )),
            (a.mui.green = b(
              '#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853'
            )),
            (a.mui.lightgreen = b(
              '#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17'
            )),
            (a.mui.lime = b(
              '#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00'
            )),
            (a.mui.yellow = b(
              '#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600'
            )),
            (a.mui.amber = b(
              '#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00'
            )),
            (a.mui.orange = b(
              '#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00'
            )),
            (a.mui.deeporange = b(
              '#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00'
            )),
            (a.mui.brown = b(
              '#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723'
            )),
            (a.mui.grey = b(
              '#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121'
            )),
            (a.mui.bluegrey = b(
              '#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238'
            )),
            (a.flat.turquoise = '#1abc9c'),
            (a.flat.greensea = '#16a085'),
            (a.flat.sunflower = '#f1c40f'),
            (a.flat.orange = '#f39c12'),
            (a.flat.emerland = '#2ecc71'),
            (a.flat.nephritis = '#27ae60'),
            (a.flat.carrot = '#e67e22'),
            (a.flat.pumpkin = '#d35400'),
            (a.flat.peterriver = '#3498db'),
            (a.flat.belizehole = '#2980b9'),
            (a.flat.alizarin = '#e74c3c'),
            (a.flat.pomegranate = '#c0392b'),
            (a.flat.amethyst = '#9b59b6'),
            (a.flat.wisteria = '#8e44ad'),
            (a.flat.clouds = '#ecf0f1'),
            (a.flat.silver = '#bdc3c7'),
            (a.flat.wetasphalt = '#34495e'),
            (a.flat.midnightblue = '#2c3e50'),
            (a.flat.concrete = '#95a5a6'),
            (a.flat.asbestos = '#7f8c8d'),
            (a.importMUIColors = function () {
              for (var b in a.mui)
                a.mui.hasOwnProperty(b) && (window[b] = a.mui[b])
            })
        }),
        (d.exports = a)
    },
    4924: function (c, a, b) {
      'use strict'
      function d(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        )
      }
      b.d(a, {
        Z: function () {
          return d
        },
      })
    },
    6042: function (c, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return e
        },
      })
      var d = a(4924)
      function e(e) {
        for (var a = 1; a < arguments.length; a++) {
          var c = null != arguments[a] ? arguments[a] : {},
            b = Object.keys(c)
          'function' == typeof Object.getOwnPropertySymbols &&
            (b = b.concat(
              Object.getOwnPropertySymbols(c).filter(function (a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable
              })
            )),
            b.forEach(function (a) {
              ;(0, d.Z)(e, a, c[a])
            })
        }
        return e
      }
    },
    9396: function (c, a, b) {
      'use strict'
      function d(b, a) {
        return (
          (a = null != a ? a : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(a))
            : (function (b, d) {
                var a = Object.keys(b)
                if (Object.getOwnPropertySymbols) {
                  var c = Object.getOwnPropertySymbols(b)
                  a.push.apply(a, c)
                }
                return a
              })(Object(a)).forEach(function (c) {
                Object.defineProperty(
                  b,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                )
              }),
          b
        )
      }
      b.d(a, {
        Z: function () {
          return d
        },
      })
    },
  },
  function (a) {
    var b = function (b) {
      return a((a.s = b))
    }
    a.O(0, [774, 179], function () {
      return b(6840), b(387)
    }),
      (_N_E = a.O())
  },
])
