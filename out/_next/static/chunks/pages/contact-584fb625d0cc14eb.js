;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
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
    1382: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact',
        function () {
          return c(5210)
        },
      ])
    },
    5637: function (d, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return j
        },
      })
      var e = a(5893)
      a(7294)
      var f = a(4870),
        c = a(393),
        g = a.n(c),
        h = a(4365),
        i = a(2985)
      function j(a) {
        var b = a.heading
        return (0, e.jsxs)(f.Z, {
          heading: b,
          children: [
            (0, e.jsxs)('p', {
              children: [
                "If you are looking for help to build something to make an impact and you care about sustainability and inclusivity, Let's talk",
                ' ',
                (0, e.jsx)('span', {
                  role: 'img',
                  'aria-label': 'Raising Hands',
                  children: '\uD83D\uDE4C',
                }),
              ],
            }),
            (0, e.jsx)('p', { children: 'Send me an email at:' }),
            (0, e.jsx)('p', {
              className: g().email,
              children: 'hanymorcos@live.com',
            }),
            (0, e.jsx)('p', {
              children:
                "I'm always learning and exploring. With my experience as a Principal Software Engineer and Tech Lead in startups and public tech companies across North America, Europe, and Asia, I'm able to help you materialize your innovative ideas with well-rounded tech insight, analysis, and monitoring.",
            }),
            (0, e.jsx)('p', {
              children:
                'In general, my work is centered around consultation, innovation, and education:',
            }),
            (0, e.jsxs)('ul', {
              children: [
                (0, e.jsx)('li', { children: 'Web Tech Consultation' }),
                (0, e.jsx)('li', {}),
              ],
            }),
            (0, e.jsxs)('p', {
              children: [
                'Just want to say hi? Ping me over on',
                ' ',
                (0, e.jsx)(h.Z, { href: i.Z.twitter, children: 'Twitter' }),
                '!',
              ],
            }),
          ],
        })
      }
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
    5210: function (d, b, a) {
      'use strict'
      a.r(b),
        a.d(b, {
          default: function () {
            return k
          },
        })
      var e = a(5893)
      a(7294)
      var f = a(2985),
        g = a(3295),
        h = a(5637),
        c = a(7272),
        i = a.n(c),
        j = a(4870)
      function k() {
        return (0, e.jsx)(g.Z, {
          title: "Hany Morcos's contact",
          description:
            "If you are looking for help to build something to make an impact and you care about sustainability and inclusivity, Let's talk.",
          url: ''.concat(f.Z.home, '/contact'),
          image: f.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, e.jsxs)('main', {
            className: i().main,
            children: [
              (0, e.jsx)('h1', { children: 'Get in Touch' }),
              (0, e.jsx)('h2', { children: "Let's build something together" }),
              (0, e.jsx)(h.Z, {}),
              (0, e.jsxs)(j.Z, {
                heading: 'Transparency',
                children: [
                  (0, e.jsx)('p', {
                    children:
                      "From 2022 on, I'm donating a portion of your payment to NGOs and open source software. The distribution is approximately:",
                  }),
                  (0, e.jsxs)('ul', {
                    children: [
                      (0, e.jsx)('li', { children: '4% - NGOs in poverty' }),
                      (0, e.jsx)('li', {
                        children: '4% - NGOs in sustainability',
                      }),
                      (0, e.jsx)('li', {
                        children: '2% - Open Source Software Sponsorship',
                      }),
                    ],
                  }),
                  (0, e.jsx)('p', {
                    children:
                      "I believe in giving back. I was very lucky that my parents bought me a desktop so I could go to college to study science and engineering. I believe now it's my time to contribute for the next generation.",
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
    393: function (a) {
      a.exports = { email: 'styles_email__53maz' }
    },
    4511: function (a) {
      a.exports = {
        section: 'styles_section__dkHE8',
        fluid: 'styles_fluid__le8Of',
      }
    },
    7272: function (a) {
      a.exports = { main: 'Contact_main__GP0vA' }
    },
    1163: function (a, c, b) {
      a.exports = b(387)
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b
      return a((a.s = 1382))
    }),
      (_N_E = a.O())
  },
])
