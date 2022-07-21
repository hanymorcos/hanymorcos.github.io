;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [91],
  {
    5615: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles',
        function () {
          return c(7749)
        },
      ])
    },
    3295: function (d, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return j
        },
      })
      var e = a(5893),
        f = a(7294),
        c = a(9008),
        g = a.n(c),
        h = a(1163),
        i = a(2985)
      function j(a) {
        var k = a.children,
          c = a.title,
          b = a.description,
          l = a.url,
          d = a.image,
          m = a.imageWidth,
          n = a.imageHeight,
          o = a.publishedAt,
          p = (0, h.useRouter)(),
          q = (0, f.useMemo)(
            function () {
              return o ? new Date(o).toISOString() : new Date().toISOString()
            },
            [o]
          ),
          j = (0, f.useMemo)(
            function () {
              return d.replace(/\.webp$/, '.png')
            },
            [d]
          )
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsxs)(g(), {
              children: [
                (0, e.jsx)('title', { children: c }),
                (0, e.jsx)('meta', { name: 'description', content: b }),
                (0, e.jsx)('meta', {
                  name: 'robots',
                  content: 'follow, index',
                }),
                (0, e.jsx)('link', {
                  rel: 'canonical',
                  href: ''.concat(i.Z.home).concat(p.asPath),
                }),
                (0, e.jsx)('meta', { itemProp: 'name', content: c }),
                (0, e.jsx)('meta', { itemProp: 'description', content: b }),
                (0, e.jsx)('meta', { itemProp: 'image', content: j }),
                (0, e.jsx)('meta', { property: 'og:title', content: c }),
                (0, e.jsx)('meta', { property: 'og:type', content: 'website' }),
                (0, e.jsx)('meta', { property: 'og:url', content: l }),
                (0, e.jsx)('meta', { property: 'og:description', content: b }),
                (0, e.jsx)('meta', { property: 'og:image', content: j }),
                (0, e.jsx)('meta', {
                  property: 'og:image:type',
                  content: 'image/png',
                }),
                (0, e.jsx)('meta', { property: 'og:image:width', content: m }),
                (0, e.jsx)('meta', { property: 'og:image:height', content: n }),
                (0, e.jsx)('meta', { property: 'og:image:alt', content: b }),
                (0, e.jsx)('meta', {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                }),
                (0, e.jsx)('meta', {
                  name: 'twitter:site',
                  content: '@hanymorcos',
                }),
                (0, e.jsx)('meta', {
                  name: 'twitter:creator',
                  content: '@hanymorcos',
                }),
                (0, e.jsx)('meta', { name: 'twitter:title', content: c }),
                (0, e.jsx)('meta', { name: 'twitter:description', content: b }),
                (0, e.jsx)('meta', { name: 'twitter:image', content: d }),
                (0, e.jsx)('meta', {
                  property: 'article:published_time',
                  content: q,
                }),
                (0, e.jsx)('meta', {
                  property: 'article:section',
                  content: 'Article Section',
                }),
                (0, e.jsx)('meta', {
                  property: 'article:tag',
                  content: 'Article Tag',
                }),
              ],
            }),
            k,
          ],
        })
      }
    },
    7121: function (d, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return f
        },
      })
      var e = a(2985),
        c = JSON.parse(
          '{"title":"First Article","publishedAt":"January 13, 2022","description":"test","cover":"","category":"Rust","coverWidth":"1411","coverHeight":"682","body":{"raw":"\\n\\n","code":"var Component=(()=>{var i=Object.create;var r=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var a=t=>r(t,\\"__esModule\\",{value:!0});var p=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports),g=(t,n)=>{a(t);for(var e in n)r(t,e,{get:n[e],enumerable:!0})},f=(t,n,e)=>{if(n&&typeof n==\\"object\\"||typeof n==\\"function\\")for(let s of u(n))!_.call(t,s)&&s!==\\"default\\"&&r(t,s,{get:()=>n[s],enumerable:!(e=j(n,s))||e.enumerable});return t},b=t=>f(a(r(t!=null?i(x(t)):{},\\"default\\",t&&t.__esModule&&\\"default\\"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var m=p((M,c)=>{c.exports=_jsx_runtime});var D={};g(D,{default:()=>l});var o=b(m());function d(t={}){let n=Object.assign({},t.components),{wrapper:e}=n,s=(0,o.jsx)(o.Fragment,{});return e?(0,o.jsx)(e,Object.assign({},t,{children:s})):s}var l=d;return D;})();\\n;return Component.default;"},"_id":"articles/binary-tree-insertion-in-rust.mdx","_raw":{"sourceFilePath":"articles/binary-tree-insertion-in-rust.mdx","sourceFileName":"binary-tree-insertion-in-rust.mdx","sourceFileDir":"articles","bodyType":"mdx","flattenedPath":"articles/binary-tree-insertion-in-rust"},"type":"Article","readingTime":{"text":"0 min read","minutes":0,"time":0,"words":0},"wordCount":2,"slug":"binary-tree-insertion-in-rust"}'
        )
      JSON.parse(
        '{"title":"Now","publishedAt":"December 28, 2021","description":"Now is inspired by nownownow.com. This page is all about what I am up to now.","cover":"/optimized/raw/social-media.png","category":"self","coverWidth":"1411","coverHeight":"682","body":{"raw":"\\nIt\'s all about what I\'m up to **now**.\\n\\n\u{1F468}\u200D\u{1F4BB} A Free/libre open source software developer.\\n\\n\u{1F30F} I\'m trying out eating seasonal and local produce.\\n\\n\u{1F3CB}\uFE0F\u200D\u2642\uFE0F I\'m lifting weight again! Making baby steps.\\n\\n\u270F\uFE0F I\'m learning to be a good technical writer.\\n\\n\u{1F331} I\'m learning [Rust](https://www.rust-lang.org/). It\'s been fun!\\n\\n<br />\\n*Last updated on February 18, 2022.*\\n","code":"var Component=(()=>{var c=Object.create;var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var t=n=>l(n,\\"__esModule\\",{value:!0});var m=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),u=(n,e)=>{t(n);for(var r in e)l(n,r,{get:e[r],enumerable:!0})},b=(n,e,r)=>{if(e&&typeof e==\\"object\\"||typeof e==\\"function\\")for(let i of d(e))!h.call(n,i)&&i!==\\"default\\"&&l(n,i,{get:()=>e[i],enumerable:!(r=p(e,i))||r.enumerable});return n},w=n=>b(t(l(n!=null?c(g(n)):{},\\"default\\",n&&n.__esModule&&\\"default\\"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var o=m((_,s)=>{s.exports=_jsx_runtime});var f={};u(f,{default:()=>x});var a=w(o());function j(n={}){let e=Object.assign({p:\\"p\\",strong:\\"strong\\",span:\\"span\\",a:\\"a\\",em:\\"em\\"},n.components),{wrapper:r}=e,i=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[\\"It\'s all about what I\'m up to \\",(0,a.jsx)(e.strong,{children:\\"now\\"}),\\".\\"]}),`\\n`,(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.span,{role:\\"img\\",\\"aria-label\\":\\"man technologist\\",children:\\"\\\\u{1F468}\\\\u200D\\\\u{1F4BB}\\"}),\\" A Free/libre open source software developer.\\"]}),`\\n`,(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.span,{role:\\"img\\",\\"aria-label\\":\\"globe showing Asia-Australia\\",children:\\"\\\\u{1F30F}\\"}),\\" I\'m trying out eating seasonal and local produce.\\"]}),`\\n`,(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.span,{role:\\"img\\",\\"aria-label\\":\\"\\",\\"aria-hidden\\":!0,children:\\"\\\\u{1F3CB}\\\\uFE0F\\\\u200D\\\\u2642\\\\uFE0F\\"}),\\" I\'m lifting weight again! Making baby steps.\\"]}),`\\n`,(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.span,{role:\\"img\\",\\"aria-label\\":\\"pencil\\",children:\\"\\\\u270F\\\\uFE0F\\"}),\\" I\'m learning to be a good technical writer.\\"]}),`\\n`,(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.span,{role:\\"img\\",\\"aria-label\\":\\"seedling\\",children:\\"\\\\u{1F331}\\"}),\\" I\'m learning \\",(0,a.jsx)(e.a,{href:\\"https://www.rust-lang.org/\\",children:\\"Rust\\"}),\\". It\'s been fun!\\"]}),`\\n`,(0,a.jsx)(\\"br\\",{}),`\\n`,(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:\\"Last updated on February 18, 2022.\\"})})]});return r?(0,a.jsx)(r,Object.assign({},n,{children:i})):i}var x=j;return f;})();\\n;return Component.default;"},"_id":"now.mdx","_raw":{"sourceFilePath":"now.mdx","sourceFileName":"now.mdx","sourceFileDir":".","bodyType":"mdx","flattenedPath":"now"},"type":"OtherPage","slug":"now"}'
      )
      var f = [c]
        .map(function (a) {
          return {
            date: a.publishedAt,
            publisher: '',
            title: a.title,
            description: a.description,
            url: '/articles/'.concat(a.slug),
            cover: a.cover,
            category: a.category,
            author: 'Hany Morcos',
            avatar: '/optimized/raw/portrait-sm.png',
            social: e.Z.github,
            external: !1,
            publisherUrl: '',
          }
        })
        .concat([])
        .sort(function (a, b) {
          return Number(new Date(b.date)) - Number(new Date(a.date))
        })
    },
    638: function (c, a, b) {
      'use strict'
      var d = b(6856).Z
      Object.defineProperty(a, '__esModule', { value: !0 }),
        (a.default = function (b, g) {
          var c = e.default,
            a = {
              loading: function (a) {
                return a.error, a.isLoading, a.pastDelay, null
              },
            }
          if (
            (d(b, Promise)
              ? (a.loader = function () {
                  return b
                })
              : 'function' == typeof b
              ? (a.loader = b)
              : 'object' == typeof b && (a = f({}, a, b)),
            (a = f({}, a, g)).suspense)
          )
            throw Error(
              'Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense'
            )
          if (
            (a.loadableGenerated &&
              delete (a = f({}, a, a.loadableGenerated)).loadableGenerated,
            'boolean' == typeof a.ssr && !a.suspense)
          ) {
            if (!a.ssr) return delete a.ssr, h(c, a)
            delete a.ssr
          }
          return c(a)
        }),
        (a.noSSR = h),
        g(b(7294))
      var e = g(b(4302))
      function f() {
        return (f =
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
      function g(a) {
        return a && a.__esModule ? a : { default: a }
      }
      function h(b, a) {
        return delete a.webpack, delete a.modules, b(a)
      }
      ;('function' == typeof a.default ||
        ('object' == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, '__esModule', { value: !0 }),
        Object.assign(a.default, a),
        (c.exports = a.default))
    },
    6319: function (e, b, c) {
      'use strict'
      Object.defineProperty(b, '__esModule', { value: !0 }),
        (b.LoadableContext = void 0)
      var a,
        f,
        d = ((a = c(7294)),
        a && a.__esModule ? a : { default: a }).default.createContext(null)
      b.LoadableContext = d
    },
    4302: function (e, d, a) {
      'use strict'
      var b,
        f = a(9658).Z,
        g = a(7222).Z
      Object.defineProperty(d, '__esModule', { value: !0 }),
        (d.default = void 0)
      var h = ((b = a(7294)), b && b.__esModule ? b : { default: b }),
        i = a(6319)
      function j() {
        return (j =
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
      var k = a(1688).useSyncExternalStore,
        l = [],
        m = [],
        n = !1
      function o(b) {
        var c = b(),
          a = { loading: !0, loaded: null, error: null }
        return (
          (a.promise = c
            .then(function (b) {
              return (a.loading = !1), (a.loaded = b), b
            })
            .catch(function (b) {
              throw ((a.loading = !1), (a.error = b), b)
            })),
          a
        )
      }
      var p = (function () {
        function a(b, c) {
          f(this, a),
            (this._loadFn = b),
            (this._opts = c),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        return (
          g(a, [
            {
              key: 'promise',
              value: function () {
                return this._res.promise
              },
            },
            {
              key: 'retry',
              value: function () {
                var c = this
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 })
                var b = this._res,
                  a = this._opts
                if (b.loading) {
                  if ('number' == typeof a.delay) {
                    if (0 === a.delay) this._state.pastDelay = !0
                    else {
                      var d = this
                      this._delay = setTimeout(function () {
                        d._update({ pastDelay: !0 })
                      }, a.delay)
                    }
                  }
                  if ('number' == typeof a.timeout) {
                    var e = this
                    this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 })
                    }, a.timeout)
                  }
                }
                this._res.promise
                  .then(function () {
                    c._update({}), c._clearTimeouts()
                  })
                  .catch(function (a) {
                    c._update({}), c._clearTimeouts()
                  }),
                  this._update({})
              },
            },
            {
              key: '_update',
              value: function (a) {
                ;(this._state = j(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  a
                )),
                  this._callbacks.forEach(function (a) {
                    return a()
                  })
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout)
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state
              },
            },
            {
              key: 'subscribe',
              value: function (a) {
                var b = this
                return (
                  this._callbacks.add(a),
                  function () {
                    b._callbacks.delete(a)
                  }
                )
              },
            },
          ]),
          a
        )
      })()
      function c(a) {
        return (function (e, c) {
          var f = function () {
              if (!l) {
                var b = new p(e, a)
                l = {
                  getCurrentValue: b.getCurrentValue.bind(b),
                  subscribe: b.subscribe.bind(b),
                  retry: b.retry.bind(b),
                  promise: b.promise.bind(b),
                }
              }
              return l.promise()
            },
            g = function () {
              f()
              var b = h.default.useContext(i.LoadableContext)
              b &&
                Array.isArray(a.modules) &&
                a.modules.forEach(function (a) {
                  b(a)
                })
            },
            a = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              c
            )
          a.suspense && (a.lazy = h.default.lazy(a.loader))
          var l = null
          if (!n) {
            var d = a.webpack ? a.webpack() : a.modules
            d &&
              m.push(function (h) {
                var a = !0,
                  c = !1,
                  e = void 0
                try {
                  for (
                    var g, b = d[Symbol.iterator]();
                    !(a = (g = b.next()).done);
                    a = !0
                  ) {
                    var i = g.value
                    if (-1 !== h.indexOf(i)) return f()
                  }
                } catch (j) {
                  ;(c = !0), (e = j)
                } finally {
                  try {
                    a || null == b.return || b.return()
                  } finally {
                    if (c) throw e
                  }
                }
              })
          }
          var b = a.suspense
            ? function (b, c) {
                return (
                  g(), h.default.createElement(a.lazy, j({}, b, { ref: c }))
                )
              }
            : function (b, c) {
                g()
                var d = k(l.subscribe, l.getCurrentValue, l.getCurrentValue)
                return (
                  h.default.useImperativeHandle(
                    c,
                    function () {
                      return { retry: l.retry }
                    },
                    []
                  ),
                  h.default.useMemo(
                    function () {
                      var c
                      return d.loading || d.error
                        ? h.default.createElement(a.loading, {
                            isLoading: d.loading,
                            pastDelay: d.pastDelay,
                            timedOut: d.timedOut,
                            error: d.error,
                            retry: l.retry,
                          })
                        : d.loaded
                        ? h.default.createElement(
                            (c = d.loaded) && c.__esModule ? c.default : c,
                            b
                          )
                        : null
                    },
                    [b, d]
                  )
                )
              }
          return (
            (b.preload = function () {
              return f()
            }),
            (b.displayName = 'LoadableComponent'),
            h.default.forwardRef(b)
          )
        })(o, a)
      }
      function q(a, c) {
        for (var b = []; a.length; ) {
          var d = a.pop()
          b.push(d(c))
        }
        return Promise.all(b).then(function () {
          if (a.length) return q(a, c)
        })
      }
      ;(c.preloadAll = function () {
        return new Promise(function (a, b) {
          q(l).then(a, b)
        })
      }),
        (c.preloadReady = function () {
          var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (c) {
            var b = function () {
              return (n = !0), c()
            }
            q(m, a).then(b, b)
          })
        }),
        (window.__NEXT_PRELOADREADY = c.preloadReady),
        (d.default = c)
    },
    7749: function (j, b, a) {
      'use strict'
      a.r(b),
        a.d(b, {
          default: function () {
            return x
          },
        })
      var k = a(5893),
        l = a(7294),
        m = a(7121),
        c = a(8371),
        n = a.n(c),
        o = a(4365),
        p = a(6893),
        q = a(3295),
        r = a(2985)
      function s(c, d, e, f, g, h, i) {
        try {
          var a = c[h](i),
            b = a.value
        } catch (j) {
          e(j)
          return
        }
        a.done ? d(b) : Promise.resolve(b).then(f, g)
      }
      function t(c, a) {
        ;(null == a || a > c.length) && (a = c.length)
        for (var b = 0, d = Array(a); b < a; b++) d[b] = c[b]
        return d
      }
      function u(a, b) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(a) ||
          (function (a) {
            if (
              ('undefined' != typeof Symbol && null != a[Symbol.iterator]) ||
              null != a['@@iterator']
            )
              return Array.from(a)
          })(a, b) ||
          (function (a, c) {
            if (a) {
              if ('string' == typeof a) return t(a, c)
              var b = Object.prototype.toString.call(a).slice(8, -1)
              if (
                ('Object' === b && a.constructor && (b = a.constructor.name),
                'Map' === b || 'Set' === b)
              )
                return Array.from(b)
              if (
                'Arguments' === b ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)
              )
                return t(a, c)
            }
          })(a, b) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var d,
        e = a(4051),
        f = a.n(e),
        g = a(5152),
        h = a.n(g),
        i = a(1751),
        v = a.n(i),
        w = h()(
          {
            loader:
              ((d = f().mark(function b() {
                var c
                return f().wrap(function (b) {
                  for (;;)
                    switch ((b.prev = b.next)) {
                      case 0:
                        return (b.next = 2), a.e(921).then(a.bind(a, 4921))
                      case 2:
                        return (
                          (c = b.sent),
                          b.abrupt('return', function () {
                            var b = (0, l.useState)(''),
                              a = b[0],
                              h = b[1],
                              d = (0, l.useState)([]),
                              e = d[0],
                              i = d[1],
                              f = (0, l.useCallback)(function (a) {
                                h(a.target.value)
                              }, []),
                              g = (0, l.useCallback)(function (a) {
                                return c.search(a, 5)
                              }, [])
                            return (
                              (0, l.useEffect)(
                                function () {
                                  var b = g(a)
                                  i(b)
                                },
                                [g, a]
                              ),
                              (0, k.jsxs)('div', {
                                className: v().wrapper,
                                children: [
                                  (0, k.jsx)('input', {
                                    value: a,
                                    onChange: f,
                                    placeholder:
                                      '\uD83D\uDD2D Type anything to search for articles...',
                                    className: v().search,
                                    'data-testid': 'search-input',
                                  }),
                                  (0, k.jsxs)('div', {
                                    className: v().result,
                                    children: [
                                      a &&
                                        (0, k.jsx)('p', {
                                          className: v().resultTitle,
                                          'data-testid':
                                            'search-result-message',
                                          children:
                                            0 === e.length
                                              ? 'No result yet \uD83E\uDD37'
                                              : 'Search results \u2728',
                                        }),
                                      e.map(function (c) {
                                        var d,
                                          b = u(c, 2),
                                          e = b[0],
                                          a = b[1]
                                        return (0,
                                        k.jsxs)('div', { className: v().list, children: [(d = a).startsWith('/') ? (0, k.jsx)(p.NOg, {}) : (0, k.jsx)(p.AlO, {}), (0, k.jsx)(o.Z, { href: a, className: v().link, 'data-testid': 'search-result-item', children: e })] }, a)
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            )
                          })
                        )
                      case 4:
                      case 'end':
                        return b.stop()
                    }
                }, b)
              })),
              function () {
                var a = this,
                  b = arguments
                return new Promise(function (e, f) {
                  var g = d.apply(a, b)
                  function c(a) {
                    s(g, e, f, c, h, 'next', a)
                  }
                  function h(a) {
                    s(g, e, f, c, h, 'throw', a)
                  }
                  c(void 0)
                })
              }),
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [4921]
              },
            },
          }
        )
      function x() {
        return (0, k.jsx)(q.Z, {
          title: "Hany Morcos's articles",
          description:
            'I write for engineers. Documenting web technology, coding patterns, and best practices from my learnings.',
          url: ''.concat(r.Z.home, '/articles'),
          image: r.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, k.jsx)('div', {
            className: n().container,
            children: (0, k.jsxs)('main', {
              className: n().main,
              children: [
                (0, k.jsx)('div', {
                  className: n().banner,
                  children: (0, k.jsxs)('p', {
                    children: [
                      'If you enjoy the articles, please',
                      ' ',
                      (0, k.jsxs)(o.Z, {
                        href: '/rss.xml',
                        children: [
                          'subscribe to the RSS feed ',
                          (0, k.jsx)(p.xaD, {}),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, k.jsxs)('div', {
                  className: n().description,
                  children: [
                    (0, k.jsx)('h1', {
                      children: 'I Write to Share What I Learned',
                    }),
                    (0, k.jsx)('h2', {
                      children: 'Ship. Learn. Share. Repeat.',
                    }),
                    (0, k.jsx)('p', { children: 'I will start writing.' }),
                    (0, k.jsx)(w, {}),
                  ],
                }),
                (0, k.jsx)('div', {
                  children: m.Z.map(function (a) {
                    return (0,
                    k.jsxs)('section', { className: n().grid, children: [(0, k.jsx)('div', { className: n().date, children: (0, k.jsx)('p', { children: a.date }) }), (0, k.jsxs)('article', { className: n().description, children: [(0, k.jsx)('p', { className: n().category, children: a.category }), a.external && (0, k.jsx)(o.Z, { href: a.url, children: a.title }), !a.external && (0, k.jsx)(o.Z, { href: a.url, children: a.title }), a.external && (0, k.jsxs)(o.Z, { href: a.publisherUrl, className: n().caption, children: ['Published on ', (0, k.jsx)('span', { children: a.publisher })] }), (0, k.jsx)('p', { children: a.description }), (0, k.jsxs)('div', { children: [(0, k.jsx)('img', { src: a.avatar, alt: a.author, className: n().avatar, loading: 'lazy' }), (0, k.jsx)(o.Z, { href: a.social, className: n().author, children: a.author })] })] })] }, a.url)
                  }),
                }),
              ],
            }),
          }),
        })
      }
    },
    1751: function (a) {
      a.exports = {
        wrapper: 'Search_wrapper__pW7s0',
        search: 'Search_search__YnQJu',
        result: 'Search_result__qESwf',
        list: 'Search_list__Frk21',
        link: 'Search_link__x0ip6',
        resultTitle: 'Search_resultTitle__6jW8U',
      }
    },
    8371: function (a) {
      a.exports = {
        container: 'Articles_container__aGU8w',
        main: 'Articles_main__y5G99',
        banner: 'Articles_banner__YtXtB',
        description: 'Articles_description__KQbY6',
        grid: 'Articles_grid__3sy0T',
        date: 'Articles_date__nzC2Q',
        caption: 'Articles_caption__QRnZZ',
        category: 'Articles_category__QXO5g',
        avatar: 'Articles_avatar__G4oK6',
      }
    },
    5152: function (a, c, b) {
      a.exports = b(638)
    },
    1163: function (a, c, b) {
      a.exports = b(387)
    },
    3250: function (f, b, c) {
      'use strict'
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var a = c(7294),
        g =
          'function' == typeof Object.is
            ? Object.is
            : function (a, b) {
                return (
                  (a === b && (0 !== a || 1 / a == 1 / b)) || (a != a && b != b)
                )
              },
        h = a.useState,
        i = a.useEffect,
        j = a.useLayoutEffect,
        k = a.useDebugValue
      function l(a) {
        var b = a.getSnapshot
        a = a.value
        try {
          var c = b()
          return !g(a, c)
        } catch (d) {
          return !0
        }
      }
      function d(b, a) {
        return a()
      }
      var e =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? d
          : function (c, b) {
              var a = b(),
                d = h({ inst: { value: a, getSnapshot: b } }),
                e = d[0].inst,
                f = d[1]
              return (
                j(
                  function () {
                    ;(e.value = a), (e.getSnapshot = b), l(e) && f({ inst: e })
                  },
                  [c, a, b]
                ),
                i(
                  function () {
                    return (
                      l(e) && f({ inst: e }),
                      c(function () {
                        l(e) && f({ inst: e })
                      })
                    )
                  },
                  [c]
                ),
                k(a),
                a
              )
            }
      b.useSyncExternalStore =
        void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : e
    },
    1688: function (a, c, b) {
      'use strict'
      a.exports = b(3250)
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b
      return a((a.s = 5615))
    }),
      (_N_E = a.O())
  },
])
