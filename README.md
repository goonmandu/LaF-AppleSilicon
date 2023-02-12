# LaF Client for Krunker

![TitleImage](./app/img/social.png)</br>
[![Latest](https://img.shields.io/github/v/release/LaFClient/LaF)](https://github.com/goonmandu/LaF-AppleSilicon/releases/latest)
[![Latest Downloads](https://img.shields.io/github/downloads/LaFClient/LaF/latest/total)](https://github.com/goonmandu/LaF-AppleSilicon/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/LaFClient/LaF/total?logo=appveyor)](https://github.com/goonmandu/LaF-AppleSilicon/releases)</br>
[![License](https://img.shields.io/github/license/LaFClient/LaF)](https://github.com/LaFClient/LaF/blob/master/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/LaFClient/LaF/master)](https://github.com/goonmandu/LaF-AppleSilicon/tree/master)
![Code Lines](https://img.shields.io/tokei/lines/github/goonmandu/LaF-AppleSilicon)
[![Build/release](https://github.com/LaFClient/LaF/actions/workflows/build.yml/badge.svg)](https://github.com/LaFClient/LaF/actions/workflows/build.yml)
[![CodeQL](https://github.com/LaFClient/LaF/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/LaFClient/LaF/actions/workflows/codeql-analysis.yml)


**Join the LaF Discord (link does not work): [![Discord](https://discord.com/api/guilds/911130667448954880/widget.png)](https://discord.gg/9M9TgDRt9G)**

言語/Language: [English](https://github.com/LaFClient/LaF/blob/master/README.md) | [日本語](https://github.com/LaFClient/LaF/blob/master/README_JA.md)

## What is LaF?
**LaF = Lite and Fast**<br>
Krunker.io isn't a very heavy game, but there are people who still struggle to get good performance due to a low-spec PC, LaF is lite and isnt like other clients with bogged down heavy features. the goal of LaF is to solve that issue! LaF is built to give low-spec PC's a chance at good performance in the game.

## What is LaF-AppleSilicon?
LaF-AppleSilicon is the Apple Silicon native build for LaF with minimal changes to the original codebase.

## Known Bugs
**IMPORTANT!** To fix the issue where the client **lags when pressing left click to shoot,** set your **frame cap** to **1200.**  
- This bug is not fixable at its core unless Krunker does it themselves. It is present in Chromium versions 87 and newer, and the oldest Electron version that works on Apple Silicon macOS (v11.0.0) uses Chromium 87.

## How to install
1. Download the [latest release](https://github.com/LaFClient/LaF/releases/latest).\
**Tip:** Download the file for your pc by referring the table, select accordingly

|   OS    | Architecture |            File Name                   |  File Type  |
| :-----: | :----------: | :------------------------------------: |  :--------: |
|  macOS  |    arm64     |    LaF_Setup_macOS_arm64.dmg (.zip)    |  Installer  |
|  macOS  |    arm64     |   LaF_Portable_macOS_arm64.dmg (.zip)  |  Standalone |

1. Run either the Installer or the Standalone file you downloaded.\
**Tip:** If your Mac tells you the client is "damaged," run the following command in Terminal:
```sh
xattr -cr /Applications/LaF.app   (when using the installer)
xattr -cr path/to/standalone/app  (when using the standalone portable client)
```

2. Follow the dialog.\
**Tip:** I don't recommend changing the set install path. But if you have to change it in for some reasons, you can change it.

## About ResourceSwapper
- Path: `%HOMEPATH%\Documents\LaFSwap`
- You can use it the same as other client's swappers. Please set the files to `MOD`.

## About HyperQuickJoin
![HyperQuickJoin](./app/img/readme/hyperquickjoin-1.png)
- You can join to your favorite gamemode with F4![^1]

## About EasyCSS
![EasyCSS](./app/img/readme/easycss-1.png)\
EasyCSS is a system that allows you to load custom css's easier.
<br>
You don't have to use resource swapper anymore. And you don't need to restart the client when swapping.

## Twitch !link command
![Twitch Login](./app/img/readme/twitch-1.png)

1. Login to Twitch in settings
2. Your viewer can use `!link` command in stream.

### Tips
- You can toggle whether `!link` command is enable with the button![Button](./app/img/readme/twitch-2.png).

## KeyBinds
|  Key  |         Function         |
| :---: | :----------------------: |
|  F4   |   Jump to new game[^1]   |
|  F5   |          Reload          |
|  F6   | Jump to new game(Random) |
|  F7   |         Copy URL         |
|  F8   |  Open URL in clipboard   |
|  F12  |      Open Dev Tools      |

[^1]: You can specify gamemode/region in the client settings.

## Requirements
|         |          Recommended          |
| :-----: | :---------------------------: |
|   OS    |        macOS 13 Ventura       |
|   CPU   |            Apple M1           |
|   GPU   |      Apple M1 7-core GPU      |
|   RAM   |              8GB              |
| Network | Broadband Internet Connection |
| Storage |             300MB             |
|  Memo   |   Base M1 MacBook Air (2020)  |

## About Developers

### Hiro527 / **Client Dev, Designer**
Web: [ぬる/Hiro](https://hiro527.github.io/)\
GitHub: [Hiro527](https://github.com/Hiro527)\
Twitch: [nulla1m](https://twitch.tv/nulla1m)\
Twitter: [ぬる / Hiro](https://twitter.com/nullA1m)\
Discord: nullA1m#7777\
Discord Server: [Hiro.js](https://discord.gg/9M9TgDRt9G)

### sh / **Client Dev, A cat**
GitHub: [shaaaaaQ](https://github.com/shaaaaaQ)

### NamekujiLSDs / **CSS Maker, Designer**
Web: [Namekuji](https://namekujilsds.github.io/)\
GitHub: [NamekujiLSDs](https://github.com/NamekujiLSDs)\
YouTube: [Namekuji Krunker / ナメクジさん](https://www.youtube.com/channel/UCH65I7YbpEK7B8-Wkr75CJQ)\
Twitter: [@NamekujiLSDs](https://twitter.com/namekujilsds)\
Discord Server: [Sluggy Lounge | Krunker ingame content](https://discord.gg/qusjZSbXQX)

### goonmandu / **LaF-AppleSilicon maintainer**
GitHub: [goonmandu](https://github.com/goonmandu)  
Discord: goonmandu#4897  
Twitte: [goonmandu_](https://twitter.com/goonmandu_)