import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LinuxWin",
  description: "LinuxWin",
  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message: "未经过作者同意并公示, 严禁复制内容。",
      copyright: "Copyright © 2024 LinuxWin",
    },
    editLink: {
      pattern:
        "https://github.com/meodocs/meodocs.github.io/edit/main/:path",
    },
    logo: "https://gcore.jsdelivr.net/gh/LinuxWin232/cdn@main/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "博客", link: "https://meoblog.pages.dev" },
    ],

    sidebar: [
      {
        text: "Welcome",
        collapsed: false,
        items: [
          { text: "欢迎", link: "/docs/welcome/1.md" },
        ],
      },
      {
        text: "Chapter I",
        collapsed: false,
        items: [
          {
            text: "什么是WinPE",
            link: "/docs/winpe/1.md",
          },
          {
            text: "WinPE都有哪些",
            link: "/docs/winpe/2.md",
          },
        text: "Chapter II",
        collapsed: false,
        items: [
          {
            text: "什么是ubuntu",
            link: "/docs/ubuntu/1.md",
          },
          {
            text: "什么是kde gnome xfce",
            link: "/docs/ubuntu/2.md",
          },
          {
            text: "什么是Ubuntu衍生版",
            link: "/docs/ubuntu/3.md",
          },
          {
            text: "什么是基于ubuntu的发行版",
            link: "/docs/ubuntu/4.md",
          },
          {
            text: "我该怎么样美化Ubuntu的终端",
            link: "/docs/ubuntu/5.md",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/meodocs/meodocs.github.io/" }],
  },
});
