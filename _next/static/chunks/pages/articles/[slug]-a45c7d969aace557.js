;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [850],
  {
    617: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/articles/[slug]',
        function () {
          return c(2041)
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
    2041: function (e, b, a) {
      'use strict'
      a.r(b),
        a.d(b, {
          __N_SSG: function () {
            return r
          },
          default: function () {
            return s
          },
        })
      var f = a(6042),
        g = a(9396),
        h = a(5893)
      a(7294)
      var i = a(544),
        j = a(420),
        c = a(7747),
        k = a.n(c),
        l = a(2985),
        d = a(9754),
        m = a.n(d),
        n = a(4365)
      function o() {
        return (0, h.jsxs)('article', {
          className: m().wrap,
          children: [
            (0, h.jsx)('img', {
              src: '/optimized/raw/portrait-sm.webp',
              alt: 'Hany Morcos',
              className: m().avatar,
              loading: 'lazy',
            }),
            (0, h.jsxs)('div', {
              children: [
                (0, h.jsx)(n.Z, {
                  href: l.Z.home,
                  className: m().author,
                  children: 'Hany Morcos',
                }),
                (0, h.jsx)('p', { children: l.Z.description }),
              ],
            }),
          ],
        })
      }
      var p = a(3295)
      function q(a) {
        var i = a.children,
          b = a.title,
          j = a.description,
          c = a.publishedAt,
          d = a.slug,
          e = a.cover,
          f = void 0 === e ? '' : e,
          m = a.coverWidth,
          n = a.coverHeight,
          g = a.readingTime,
          q = a.hideAuthor
        return (0, h.jsx)(p.Z, {
          title: b,
          description: j,
          url: 'https://hanymorcos.github.io/articles/'.concat(
            void 0 === d ? '' : d
          ),
          image: ''.concat(l.Z.home).concat(f),
          imageWidth: m,
          imageHeight: n,
          publishedAt: c,
          children: (0, h.jsx)('article', {
            children: (0, h.jsx)('div', {
              className: k().container,
              children: (0, h.jsxs)('div', {
                className: k().wrap,
                children: [
                  (0, h.jsx)('h1', { children: b }),
                  (0, h.jsxs)('div', {
                    className: k().info,
                    children: [
                      (0, h.jsxs)('div', {
                        className: k().author,
                        children: [
                          (0, h.jsx)('img', {
                            alt: 'Hany Morcos',
                            src: '/optimized/raw/portrait-sm.webp',
                            loading: 'lazy',
                          }),
                          (0, h.jsx)('p', { children: 'Hany Morcos' }),
                        ],
                      }),
                      (0, h.jsxs)('p', {
                        children: [c, g ? ' \xb7 '.concat(g.text) : ''],
                      }),
                    ],
                  }),
                  (0, h.jsx)('img', {
                    alt: b,
                    src: f,
                    width: '100%',
                    loading: 'lazy',
                  }),
                  (0, h.jsx)('div', {
                    className: 'article-content',
                    children: i,
                  }),
                  !q && (0, h.jsx)(o, {}),
                ],
              }),
            }),
          }),
        })
      }
      var r = !0
      function s(b) {
        var a = b.post,
          c = (0, i.z)(a.body.code)
        return (0, h.jsx)(
          q,
          (0, g.Z)((0, f.Z)({}, a), {
            children: (0, h.jsx)(c, { components: j.Z }),
          })
        )
      }
    },
    7747: function (a) {
      a.exports = {
        container: 'Article_container__q__L3',
        wrap: 'Article_wrap__LZypL',
        info: 'Article_info__bOKys',
        author: 'Article_author__grS8U',
      }
    },
    9754: function (a) {
      a.exports = { wrap: 'Author_wrap__s8DeE', avatar: 'Author_avatar__j6KIn' }
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
      return a((a.s = 617))
    }),
      (_N_E = a.O())
  },
])
