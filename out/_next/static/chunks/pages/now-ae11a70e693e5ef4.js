;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [991],
  {
    6010: function (c, a, b) {
      'use strict'
      function d(a) {
        var b,
          e,
          c = ''
        if ('string' == typeof a || 'number' == typeof a) c += a
        else if ('object' == typeof a) {
          if (Array.isArray(a))
            for (b = 0; b < a.length; b++)
              a[b] && (e = d(a[b])) && (c && (c += ' '), (c += e))
          else for (b in a) a[b] && (c && (c += ' '), (c += b))
        }
        return c
      }
      function e() {
        for (var b, c, e = 0, a = ''; e < arguments.length; )
          (b = arguments[e++]) && (c = d(b)) && (a && (a += ' '), (a += c))
        return a
      }
      b.d(a, {
        Z: function () {
          return e
        },
      })
    },
    5998: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/now',
        function () {
          return c(9811)
        },
      ])
    },
    420: function (c, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return d
        },
      })
      var d = { a: a(4365).Z }
    },
    4870: function (d, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return i
        },
      })
      var e = a(4924),
        f = a(5893)
      a(7294)
      var c = a(4511),
        g = a.n(c),
        h = a(6010)
      function i(a) {
        var c = a.fluid,
          b = a.heading,
          d = a.children
        return (0, f.jsxs)('section', {
          className: (0, h.Z)(g().section, (0, e.Z)({}, g().fluid, c)),
          children: [b && (0, f.jsx)('h3', { children: b }), d],
        })
      }
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
    9811: function (d, b, a) {
      'use strict'
      a.r(b),
        a.d(b, {
          __N_SSG: function () {
            return m
          },
          default: function () {
            return n
          },
        })
      var e = a(5893)
      a(7294)
      var f = a(544),
        g = a(420),
        h = a(3295),
        i = a(2985),
        c = a(6944),
        j = a.n(c),
        k = a(4870),
        l = a(4365),
        m = !0
      function n(b) {
        var a = b.meta,
          c = (0, f.z)(a.body.code)
        return (0, e.jsx)(h.Z, {
          title: "Hany Morcos's ".concat(a.title),
          description: a.description,
          url: ''.concat(i.Z.home, '/').concat(a.slug),
          image: a.cover,
          imageWidth: a.coverWidth,
          imageHeight: a.coverHeight,
          children: (0, e.jsx)('main', {
            className: j().main,
            children: (0, e.jsx)(k.Z, {
              children: (0, e.jsxs)('article', {
                className: j().article,
                children: [
                  (0, e.jsx)('h1', { children: a.title }),
                  (0, e.jsxs)('h2', {
                    children: [
                      'Inspired by',
                      ' ',
                      (0, e.jsx)(l.Z, {
                        href: 'https://nownownow.com/about',
                        children: 'nownownow.com',
                      }),
                    ],
                  }),
                  (0, e.jsx)(c, { components: g.Z }),
                ],
              }),
            }),
          }),
        })
      }
    },
    4511: function (a) {
      a.exports = {
        section: 'styles_section__dkHE8',
        fluid: 'styles_fluid__le8Of',
      }
    },
    6944: function (a) {
      a.exports = { main: 'Now_main__vu_tz', article: 'Now_article__DX6t0' }
    },
    1163: function (a, c, b) {
      a.exports = b(387)
    },
    544: function (c, b, a) {
      'use strict'
      a.d(b, {
        z: function () {
          return i
        },
      })
      var d,
        e = a(7294),
        f = a(5893),
        g = a(3935)
      let h = (c, h = {}) => {
          let b = {
              React: e,
              ReactDOM: g,
              _jsx_runtime: d || (d = a.t(f, 2)),
              ...h,
            },
            i = Function(...Object.keys(b), c)
          return i(...Object.values(b))
        },
        i = (a, b = {}) => e.useMemo(() => h(a, b), [a, b])
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b
      return a((a.s = 5998))
    }),
      (_N_E = a.O())
  },
])
