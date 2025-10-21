export default defineI18nConfig(() => ({
  legacy: false,
  locale: navigator.language,
  defaultLocale: 'en',
  messages: {
    'en-US': {
      router: {
        goto_error: 'Go to Home'
      },
      report: {
        serioplast: 'Serioplast',
        report: 'Report',
        link_1: 'Whistleblowing',
        link_2: 'DE&I'
      },
    },
  },
}))
