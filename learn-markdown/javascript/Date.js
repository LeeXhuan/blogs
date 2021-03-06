/**
 * Created by xiahuan on 2018/8/28.
 */
//Date 类型使用自UTC（Coordinated Universal Time， 国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存日期。
var now = new Date();
//now UTC标准格式 当前是在nodejs内部运行node.exe Date.js
console.log(now);//2018-09-06T08:50:40.532Z
//toDateString 特定的格式显示 星期几、月、日、年
console.log(now.toDateString());//Thu Sep 06 2018
//toTimeString 特定的格式显示 星期时、分、秒和时区
console.log(now.toTimeString());//16:44:26 GMT+0800 (中国标准时间)
//toLocaleDateString 特定地区的时间格式显示 星期几、月、日、年
console.log(now.toLocaleDateString());//2018-9-6
//toLocaleTimeString 特定的格式显示 星期时、分、秒
console.log(now.toLocaleTimeString());//16:44:26
//toUTCString 特定的格式完整的UTC日期
console.log(now.toUTCString());//Thu, 06 Sep 2018 08:50:02 GMT
//getTime 获取日期的毫秒数
console.log(now.getTime());//1536224477485 13位时间戳
//setTime 以毫秒数 设置日期
now.setTime(1536224477485);
console.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());//2018-9-6 17:01:17
//getFullYear 获取4位数的年份
console.log(now.getFullYear());//2018
//toDateString 特定的格式显示 星期几、月、日、年
console.log(now.getUTCFullYear());//Thu Sep 06 2018
//toTimeString 特定的格式显示 星期时、分、秒和时区
now.setFullYear(2012, 07, 08);
console.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());//2012-8-8 17:01:17
console.log(now.getMonth());//7
now.setMonth(4);
console.log(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());//2012-5-8 17:01:17
console.log(now.getDate());//8
console.log(now.getMilliseconds());//485
