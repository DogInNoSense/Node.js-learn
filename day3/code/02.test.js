const xyz= require('./xyz-tools')

const dtStr = xyz.dateFormat(new Date())
console.log(dtStr);


// 转义html
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = xyz.htmlEscape(htmlStr)
console.log(str);
const str2 = xyz.htmlUnEscape(str)
console.log(str2);