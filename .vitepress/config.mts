import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Republic Of Lunar",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //  { text: 'Home', link: '/' },
    //  { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: "Volume I",
        items: [
          {
            text: "Chapter I",
            items: [
              { text: "欢迎", link: "/docs/welcome/1-welcome.md" },
              { text: "关于", link: "/docs/welcome/2-about.md" },
            ],
          },
          {
            text: "Chapter II",
            items: [
              {
                text: "Arch Linux 是什么?",
                link: "/docs/arch/1-what_is_arch.md",
              },
              {
                text: "Arch Linux 真的适合我吗?",
                link: "/docs/arch/2-arch_yes.md",
              },
              {
                text: "安装教程",
                link: "/docs/arch/3-install_arch.md",
              },
              {
                text: "输入法",
                link: "/docs/arch/4-input.md",
              },
              {
                text: "终端",
                link: "/docs/arch/5-shell.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lunarlands" }],
  },
});
