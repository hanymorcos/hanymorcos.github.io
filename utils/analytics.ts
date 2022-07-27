import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const mysiteanalytic = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-C4BR8LSDBE'],
    }),
  ],
})

/* Track a page view */
mysiteanalytic.page()
