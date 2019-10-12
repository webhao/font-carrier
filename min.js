var fontCarrier = require('font-carrier')
var transFont = fontCarrier.transfer('./demo.ttf')
// 会自动根据当前的输入的文字过滤精简字体
transFont.min('我是精简后的字体，我可以重复')
transFont.output({
  path: './minFont/min',
  types: ['ttf','eot','woff','svg'] // 默认如此
})