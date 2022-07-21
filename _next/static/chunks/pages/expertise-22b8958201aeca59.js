;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [78],
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
    808: function (a, b, c) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/expertise',
        function () {
          return c(8927)
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
    5245: function (e, b, a) {
      'use strict'
      a.d(b, {
        Z: function () {
          return k
        },
      })
      var f = a(5893)
      a(7294)
      var g = a(4870),
        c = a(2908),
        h = a.n(c)
      function i(a) {
        var c = a.title,
          b = a.score,
          d = a.color
        return (0, f.jsxs)('div', {
          className: h().grid,
          children: [
            (0, f.jsx)('span', {
              className: h().sm,
              'data-testid': 'barchart-label',
              children: c,
            }),
            (0, f.jsx)('span', {
              className: h().lg,
              children: (0, f.jsx)('span', {
                className: h().bar,
                style: { width: ''.concat(b, '%'), background: d },
                role: 'math',
                'aria-label': ''.concat(b, '%'),
                'data-testid': 'barchart-bar',
              }),
            }),
          ],
        })
      }
      var d = a(7942),
        j = a.n(d)
      function k() {
        return (0, f.jsx)(g.Z, {
          heading: 'My Expertise',
          children: (0, f.jsxs)('div', {
            className: j().grid,
            children: [
              (0, f.jsxs)('article', {
                children: [
                  (0, f.jsx)('h4', { children: 'Frontend' }),
                  (0, f.jsx)(i, {
                    title: 'React',
                    score: 100,
                    color:
                      'linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Performance',
                    score: 100,
                    color:
                      'linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'SEO',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Jamstack',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Accessibility',
                    score: 60,
                    color:
                      'linear-gradient(90deg, rgba(0, 112, 243, 1), rgba(0, 223, 216, 1))',
                  }),
                ],
              }),
              (0, f.jsxs)('article', {
                children: [
                  (0, f.jsx)('h4', { children: 'Backend' }),
                  (0, f.jsx)(i, {
                    title: 'GraphQL',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Microservice',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'PostgreSQL',
                    score: 60,
                    color:
                      'linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'OAuth',
                    score: 60,
                    color:
                      'linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'gRPC',
                    score: 20,
                    color:
                      'linear-gradient(90deg, rgba(121, 40, 202, 1), rgba(255, 77, 166, 1))',
                  }),
                ],
              }),
              (0, f.jsxs)('article', {
                children: [
                  (0, f.jsx)('h4', { children: 'Site Reliability' }),
                  (0, f.jsx)(i, {
                    title: 'CI/CD',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'CDN',
                    score: 80,
                    color:
                      'linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Serverless',
                    score: 60,
                    color:
                      'linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'GCP',
                    score: 40,
                    color:
                      'linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Docker',
                    score: 20,
                    color:
                      'linear-gradient(90deg, rgba(255, 77, 77, 1), rgba(249, 203, 40, 1))',
                  }),
                ],
              }),
              (0, f.jsxs)('article', {
                children: [
                  (0, f.jsx)('h4', { children: 'Programming Language' }),
                  (0, f.jsx)(i, {
                    title: 'TypeScript',
                    score: 100,
                    color: 'linear-gradient(90deg, #5665f6, #d8b4fe)',
                  }),
                  (0, f.jsx)(i, {
                    title: 'HTML',
                    score: 100,
                    color: 'linear-gradient(90deg, #5665f6, #d8b4fe)',
                  }),
                  (0, f.jsx)(i, {
                    title: 'CSS',
                    score: 80,
                    color: 'linear-gradient(90deg, #5665f6, #d8b4fe)',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Rust',
                    score: 40,
                    color: 'linear-gradient(90deg, #5665f6, #d8b4fe)',
                  }),
                  (0, f.jsx)(i, {
                    title: 'Wasm',
                    score: 20,
                    color: 'linear-gradient(90deg, #5665f6, #d8b4fe)',
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
    8927: function (e, b, a) {
      'use strict'
      a.r(b),
        a.d(b, {
          default: function () {
            return p
          },
        })
      var f = a(5893)
      a(7294)
      var c = a(8041),
        g = a.n(c),
        h = a(3295),
        i = a(2985),
        j = a(5245),
        k = a(4870),
        d = a(8702),
        l = a.n(d),
        m = a(4365)
      function n() {
        return (0, f.jsxs)(k.Z, {
          heading: 'My Human-Centered Approach',
          children: [
            (0, f.jsx)('p', {
              children:
                '"Ship. Learn. Share. Repeat." is at the core of my human-centered approach to software development. With the principle, I\'m able to help you scale fast and give you a 360 overview over your entire product cycle.',
            }),
            (0, f.jsxs)('p', {
              children: [
                'I care deeply about the users of my work so I pay detailed attention to the simplicity and usability in my system design, code structure, release pipeline automation, and documentation. Because of my design background, my engineering iteration process aligns tightly with',
                ' ',
                (0, f.jsx)(m.Z, {
                  href: 'https://mitsloan.mit.edu/ideas-made-to-matter/design-thinking-explained',
                  children: 'Design Thinking',
                }),
                '.',
              ],
            }),
            (0, f.jsxs)('div', {
              className: l().wrapper,
              children: [
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().left,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Ear',
                          children: '\uD83D\uDC42',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Empathize' }),
                        (0, f.jsx)('p', {
                          children:
                            'Observe and research to gather insights about the users and business goals.',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().fitContent,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Writing Hand',
                          children: '\u270D\uFE0F',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Define' }),
                        (0, f.jsx)('p', {
                          children:
                            "Summarize the research and pinpoint the users' needs and innovation opportunities.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().fitContent,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Light Bulb',
                          children: '\uD83D\uDCA1',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Ideate' }),
                        (0, f.jsx)('p', {
                          children:
                            "Brainstorm creative ideas to address users' needs and the business goals.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().fitContent,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Sparkles',
                          children: '\u2728',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Prototype' }),
                        (0, f.jsx)('p', {
                          children:
                            'Build lean solutions from a subset of the ideas to understand the feasibility and impact.',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().fitContent,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Scientist',
                          children: '\uD83E\uDDD1\u200D\uD83D\uDD2C',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Test' }),
                        (0, f.jsx)('p', {
                          children:
                            "Collect feedback from the users to make sure the solutions meet the users' needs.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)('article', {
                  children: [
                    (0, f.jsx)('div', {
                      className: l().fitContent,
                      children: (0, f.jsx)('span', {
                        className: l().symbol,
                        children: (0, f.jsx)('span', {
                          role: 'img',
                          'aria-label': 'Rocket',
                          children: '\uD83D\uDE80',
                        }),
                      }),
                    }),
                    (0, f.jsxs)('div', {
                      className: l().right,
                      children: [
                        (0, f.jsx)('h4', { children: 'Implement' }),
                        (0, f.jsx)('p', {
                          children:
                            'Deliver the live product incrementally based on the best suited solution prototype.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var o = a(5637)
      function p() {
        return (0, f.jsx)(h.Z, {
          title: "Hany Morcos's expertise",
          description:
            '"Ship. Learn. Share. Repeat." is at the core of my human-centered approach to help you scale fast and give you a 360 overview over your entire product cycle.',
          url: ''.concat(i.Z.home, '/work'),
          image: i.Z.heroImage,
          imageWidth: '1411',
          imageHeight: '682',
          children: (0, f.jsxs)('main', {
            className: g().main,
            children: [
              (0, f.jsx)('h1', { children: 'Build to Win' }),
              (0, f.jsx)('h2', { children: 'How I can help you stand out' }),
              (0, f.jsx)(n, {}),
              (0, f.jsx)(j.Z, {}),
              (0, f.jsx)(o.Z, { heading: "Let's build something together" }),
            ],
          }),
        })
      }
    },
    2908: function (a) {
      a.exports = {
        grid: 'styles_grid__xY_4m',
        sm: 'styles_sm__7b9_B',
        lg: 'styles_lg__gnRhV',
        bar: 'styles_bar__N3_ox',
      }
    },
    393: function (a) {
      a.exports = { email: 'styles_email__53maz' }
    },
    8702: function (a) {
      a.exports = {
        wrapper: 'styles_wrapper__YmZi4',
        right: 'styles_right__FIU04',
        symbol: 'styles_symbol__wMVUo',
      }
    },
    4511: function (a) {
      a.exports = {
        section: 'styles_section__dkHE8',
        fluid: 'styles_fluid__le8Of',
      }
    },
    7942: function (a) {
      a.exports = { grid: 'styles_grid__TljEv' }
    },
    8041: function (a) {
      a.exports = {
        main: 'Expertise_main__aDLyl',
        tags: 'Expertise_tags__QWyCn',
        tag: 'Expertise_tag__qnGGZ',
        link: 'Expertise_link__eemVV',
        project: 'Expertise_project__qG5Nv',
        projectDescription: 'Expertise_projectDescription__OduwT',
        imageContainer: 'Expertise_imageContainer__0cG1i',
        image: 'Expertise_image__mSBaj',
        imageShadow: 'Expertise_imageShadow__drzKj',
        cfa: 'Expertise_cfa__RWwKk',
        repos: 'Expertise_repos__GPmUH',
      }
    },
    1163: function (a, c, b) {
      a.exports = b(387)
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      var b
      return a((a.s = 808))
    }),
      (_N_E = a.O())
  },
])
