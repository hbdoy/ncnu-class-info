# ncnu-class-info
[![badges](https://img.shields.io/badge/vue-2.2.4-green.svg)](https://vuejs.org/)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## View
https://hbdoy.github.io/ncnu-class-info/

## 關於本系統
由於校務系統選課新制度，為了杜絕買賣行為，在滿課的狀態下若有人退選，所有釋出的名額將會被鎖 6hr 後才能重新加選。

但是想要查看自己想要的課是否有人退選可以上簡易教務系統查看，那...鎖定時間呢?

示意流程:
Ya，有人退選了耶 => 可是不知道這個名額要什麼時候釋出 => 還要開電腦用 java 登入 => 好麻煩QQ

那就自己寫一個監控鎖定時間的吧~

## 使用工具
### Frontend
- [Vue2](https://vuejs.org/) (只當 library 用XD)
- [Bootstrap4](https://getbootstrap.com/)
### DB
- [Firebase](https://firebase.google.com/)
### Backend
後端的資料由部屬好的爬蟲不斷更新(Heroku上)，就不放 repo 和文件了

## License
[MIT](http://opensource.org/licenses/MIT)
