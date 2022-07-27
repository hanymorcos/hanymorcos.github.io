import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const mysiteanalytic = Analytics({
  app: 'awesome-app',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-C4BR8LSDBE'],
    }),
  ],
})
