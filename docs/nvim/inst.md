# 安装 TR Neovim

::: danger 警告
    请务必三思而后行。安装后可能会和您想象中的样子不同。
:::

## 自动安装
::: tip 公示脚本代码
```bash
echo "TZGML & Republic Of Lunar's NVIM | Installer"
echo -e "\e[35m1) Clean & mkdir\e[0m"
sudo mv -i ~/.config/nvim ~/.config/nvim.bak
echo -e "\e[35m2) Download init.lua\e[0m"
sudo git clone https://mirror.ghproxy.com/github.com/lunarlands/NeoVim.git ~/.config/nvim
echo -e "\e[35m3) Enjoy!\e[0m"
sudo chmod 777 -R ~/.config/nvim
sudo rm -rf ~/.config/nvim/Preview ~/.config/nvim/*.sh ~/.config/nvim/.git 
sudo rm -rf ~/.config/nvim/*.MD  
sudo rm -rf ~/.config/nvim/LICENSE
sudo nvim
```
:::
```bash
bash <(curl -s https://raw.githubusercontent.com/lunarlands/NeoVim/main/install.sh)
```

## 手动安装
```bash
# 安装 Neovim
sudo apt install neovim
sudo pacman -S neovim
# 清除残留
sudo mv -i ~/.config/nvim ~/.config/nvim.bak
# Clone
sudo git clone https://mirror.ghproxy.com/github.com/lunarlands/NeoVim.git ~/.config/nvim
# 开始使用吧!
nvim
```