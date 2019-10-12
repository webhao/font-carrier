// 待抽取的字
var text = '0123456789￥';

// 引入font-carrier.js
var fontCarrier = require('font-carrier');

// 解析本地原来的字体文件
var transFont = fontCarrier.transfer('demo.ttf');

// 创建目标字体
var font = fontCarrier.create();

// 向字体中写入抽取的字形信息
font.setGlyph(transFont.getGlyph(text));

// 导出新字体到文件夹
// 会导出svg,ttf,eot,woff,woff2
// path结尾默认为导出新字体文件的名称
font.output({
   path:'./numberFont/shn'
});