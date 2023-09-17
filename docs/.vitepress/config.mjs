import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dw's Project",
  description: "A vitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'study', link: '../src/Day1' },
      { text: 'Server', items: [
        {
          text: 'environment',
          link: '/quies/server/env/01-vitepress'
        },
        {
          text: 'ubuntu23',
          link: '/quies/server/ubuntu23/'
        },
        {
          text: 'shell script',
          link: '/quies/server/shell/'
        }
      ]},
      { text: 'JS', items: [
        {
          text: 'vanilla',
          link: '/quies/js/vanilla/'
        },
        {
          text: 'vuejs',
          link: '/quies/js/vuejs/'
        },
        {
          text: 'react',
          link: '/quies/js/react/'
        }
      ]},
      { text: 'Mobile', items: [
        {
          text: 'android',
          link: '/quies/mobile/android/'
        },
        {
          text: 'ios',
          link: '/quies/mobile/ios/'
        },
        {
          text: 'flutter',
          link: '/quies/mobile/flutter/'
        }
      ]},
      { text: 'Java', items: [
        {
          text: 'springboot',
          link: '/quies/java/springboot/'
        },
        {
          text: 'java',
          link: '/quies/java/java/'
        }
      ]}

    ],

    sidebar: [
     { text: 'study',
        collapsed: true,
        items: [
          { text: '01 Day1', link: '../src/Day1' },
          { text: '02 Day2', link: '../src/Day2' },
          { text: '03 portainer', link: '/quies/server/env/03-portainer' },
          { text: '04 nginx', link: '/quies/server/env/04-nginx' },
          { text: '05 nginx.conf', link: '/quies/server/env/05-nginx-conf' },
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
