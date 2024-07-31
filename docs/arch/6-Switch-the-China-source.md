# 目前的Arch中国源

目前的ArchLinux中国软件源有以下这些：

*清华大学开源软件镜像站*

*中国科技大学开源软件镜像站*

和其他。

# 开始换源

以清华源为举例子，打开terminal，输入下面内容：

```bash
sudo nano /etc/pacman.d/mirrorlist
```

输入后会让你输入你的密码，输入密码后回车，添加以下内容：

```conf
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
```

然后Ctrl+X Y 回车。

接着输入以下命令：

```bash
sudo nano /etc/pacman.conf
```

然后在文件最底部添加：

```conf
[archlinuxcn]
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

Ctrl+X Y 回车。

如果你是2023 年 12 月后安装Archlinux，安装`archlinuxcn-keyring`时可能会出现错误：

``error: archlinuxcn-keyring: Signature from "Jiachen YANG (Arch Linux Packager Signing Key) " is marginal trust``

需要在本地信任 farseerfc 的 GPG key：

```bash
sudo pacman-key --lsign-key "farseerfc@archlinux.org"
```

然后安装archlinuxcn-keyring：

```bash
sudo pacman -Sy archlinuxcn-keyring
```

输入后根据提示安装
