import legacy from '@vitejs/plugin-legacy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Report',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height',
        },
      ],
      link: [
        {
          rel: 'manifest', 
          href: '/manifest.webmanifest'
        },
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap' }
      ],
    },
  },
  dev: true,
  css: ['~/assets/_extra.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    shim: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 4004, // default: 3000
    https: false, // Lascia che sia il proxy a gestire SSL
  },
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
    '@vite-pwa/nuxt',
  ],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Report',
      short_name: 'Report',
      start_url: '/',
      display: 'standalone',
      description: '',
      icons: []
    },
    devOptions: {
      enabled: true, // utile anche in sviluppo
    }
  },
  i18n: {
    vueI18n: './../i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  vite: {
    plugins: [
      legacy({
        // target “prudente” per TV/browser datati
        targets: [
          'defaults',
          'not IE 11',
          'Android >= 5',
          'iOS >= 10',
          'Chrome >= 49',
          'Safari >= 10',
          'Samsung >= 4',
          'Opera >= 36'
        ],
        renderLegacyChunks: true,
        modernPolyfills: true,
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      })
    ],
    // assicura il polyfill per modulepreload dove serve
    modulePreload: { polyfill: true }
  },
  compatibilityDate: '2025-04-22',
})
