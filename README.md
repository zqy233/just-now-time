### install

```
npm i -s just-now-time
```

### 1.nowTime

import

```
import { nowTime } from "just-now-time"
```

获取最新时间,不传参则默认返回 yyyy-mm-dd hh:mm:ss 形式时间，接收两个参数，用来替换默认间隔符号

```
nowTime() // 2021-08-08 01:42:56
nowTime(" ") // 2021 08 08 01:42:56
nowTime("/") // 2021/08/08 01:42:56
nowTime("/", "/") // 2021/08/08 01/42/56
nowTime(".", " ") // 2021.08.08 01 42 56
nowTime().slice(0, 10) // 2021-08-08
nowTime().slice(11, 19) // 01:42:56
setInterval(() => { //
  const currentTime = nowTime()
}, 1000)
```

### 2.whatDay

import

```
import { whatDay } from "just-now-time"
```

获取该日期是星期几（中文），接收一个日期参数，不传参则默认返回今天星期几

```
whatDay() // whatDay() == whatDay(new Date()) 星期二
whatDay("Tue Aug 10 2021 19:23:53 GMT+0800 (GMT+08:00)") // 星期二
whatDay("2021-08-10") // 星期二
whatDay(1628598239000) // 星期二
```

### 3.whatDayEn

import

```
import { whatDayEn } from "just-now-time"
```

获取该日期是星期几（英文），接收一个日期参数，不传参则默认返回今天星期几

```
whatDayEn() // whatDayEn()==whatDayEn(new Date()) Tuesday
whatDayEn("Tue Aug 10 2021 19:23:53 GMT+0800 (GMT+08:00)") // Tuesday
whatDayEn("2021-08-10") // Tuesday
whatDayEn(1628598239000) // Tuesday
whatDayEn("2021-08-10").toUpperCase() // TUESDAY
whatDayEn("2021-08-10").toLowerCase() // tuesday
```

### 4.formatTime

import

```
import { formatTime } from "just-now-time"
```

格式化日期为 yyyy-mm-dd hh:mm:ss 形式，接收三个参数，一参数为日期，二三参数用来替换默认间隔符号，不传参则默认返回当天日期的格式化

```
formatTime() // formatTime() == formatTime(new Date()) 2021-08-10 20:23:59
formatTime(1628598239000) // 2021-08-10 20:23:59
formatTime("Tue Aug 10 2021 20:23:59 GMT+0800 (GMT+08:00)") // 2021-08-10 20:23:59
formatTime(1628598239000, "/") // 2021/08/10 20:23:59
formatTime(1628598239000, "/", " ") // 2021/08/10 20 23 59
```

### 5.timeCn

import

```
import { timeCn } from "just-now-time"
```

默认格式化日期为 yyyy 年 m 月 d 日 h 时 m 分 s 秒形式，接受两个参数，一参数为日期，二参数为 boolean，为 false 则返回 yyyy 年 mm 月 dd 日 hh 时 mm 分 ss 秒形式

```
timeCn() // timeCn() == timeCn(new Date()) 2021年8月10日 22时1分13秒
timeCn(new Date(), false) // 2021年08月10日 22时01分52秒
timeCn("2021-8-10") // 2021年8月10日 0时0分0秒
timeCn("2021-8-10 6:6:6") // 2021年8月10日 6时6分6秒
```
