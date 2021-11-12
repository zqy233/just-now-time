一些日期处理函数

### install

```
npm i -s just-now-time
```

### import

```
import { nowTime,nowTimeObj,formatTime,formatTimeObj,timeCn,timeCnObj,whatDay,whatDayEn } from "just-now-time"
```

#### nowTime

获取当前时间，默认返回 yyyy-mm-dd hh:mm:ss 格式日期字符串，接收两个可选参数，用于替换默认间隔符号

```
nowTime() // 2021-08-08 01:42:56
nowTime(" ") // 2021 08 08 01:42:56
nowTime(".", " ") // 2021.08.08 01 42 56
nowTime().slice(0, 10) // 2021-08-08
nowTime().slice(11, 19) // 01:42:56
setInterval(() => { // 实时获取时间
  const currentTime = nowTime()
}, 1000)
```

### nowTimeObj

很多时候只想获取当前时间的年月日或时分秒，使用 nowTime 函数需要面临使用 slice 裁剪的问题，稍显麻烦，可以选择使用 nowTimeObj 函数，相当于 nowTime，但返回一个对象形式的值。

```
nowTimeObj()
// {
// 	    full: '2021-08-08 01:42:56',
//      date: '2021-08-08',
//      time: '01:42:56'
// }
```

### formatTime

格式化日期为 yyyy-mm-dd hh:mm:ss ，接收三个参数，一参数为日期，二三参数用来替换默认间隔符号，不传参则默认返回当天日期的格式化

```
formatTime() // 2021-08-10 20:23:59
formatTime("Tue Aug 10 2021 20:23:59 GMT+0800 (GMT+08:00)") // 2021-08-10 20:23:59
formatTime(1628598239000, "/") // 2021/08/10 20:23:59
formatTime(1628598239000, "/", " ") // 2021/08/10 20 23 59
```

### formatTimeObj

相当于 formatTime，但返回一个对象形式的值，设计该函数的原因同 nowTimeObj

```
formatTimeObj()
// {
// 	    full: '2021-08-08 01:42:56',
//      date: '2021-08-08',
//      time: '01:42:56'
// }
```

### timeCn

默认格式化日期为 yyyy 年 m 月 d 日 h 时 m 分 s 秒形式，接受两个参数，一参数为日期，二参数为 boolean，为 false 则返回 yyyy 年 mm 月 dd 日 hh 时 mm 分 ss 秒形式

```
timeCn() // 2021年8月10日 22时1分13秒
timeCn(new Date(), false) // 2021年08月10日 22时01分52秒
timeCn("2021-8-10 6:6:6") // 2021年8月10日 6时6分6秒
```

### timeCnObj

相当于 timeCn，但返回一个对象形式的值，设计该函数的原因同 nowTimeObj

```
timeCnObj()
// {
// 	    full: '2021年8月10日 22时1分13秒',
//      date: '2021年08月10日',
//      time: '22时1分13秒'
// }
```

#### whatDay

获取该日期是星期几（中文），接收一个日期参数，不传参则默认返回今天星期几

```
whatDay() // 星期二
whatDay("Tue Aug 10 2021 19:23:53 GMT+0800 (GMT+08:00)") // 星期二
whatDay("2021-08-10") // 星期二
whatDayEn(1628598239000) // 星期二
```

### whatDayEn

获取该日期是星期几（英文），接收一个日期参数，不传参则默认返回今天星期几

```
whatDayEn() // Tuesday
whatDayEn("2021-08-10").toUpperCase() // TUESDAY
whatDayEn("2021-08-10").toLowerCase() // tuesday
```

###
