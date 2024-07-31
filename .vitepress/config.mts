import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Republic Of Lunar",
  description: "Republic Of Lunar",
  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message: "未经过作者同意并公示, 严禁复制内容。",
      copyright: "Copyright © 2024 Republic Of Lunar",
    },
    editLink: {
      pattern:
        "https://github.com/lunarlands/lunarlands.github.io/edit/main/:path",
    },
    logo: "https://arch.icekylin.online/images/hero.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "Arch Linux", link: "/docs/arch/arch.md" },
    ],

    sidebar: [
      {
        text: "Chapter I",
        collapsed: false,
        items: [
          { text: "欢迎", link: "/docs/welcome/1-welcome.md" },
          { text: "关于", link: "/docs/welcome/2-about.md" },
        ],
      },
      {
        text: "Chapter II",
        collapsed: false,
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
          {
            text: "镜像源",
            link: "/docs/6-Switch-the-China-source.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lunarlands" }],
  },
});
