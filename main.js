import { PI } from './my_module/aaa.js'

console.log(PI)

// 使用 import 指令, 且在目錄中有 package.json, 那麼 node 會有警告訊息(warning)。
// 只要在 package.json 中加入 "type":"module", 就能讓該訊息不再顯示。
// 或者, 移除 package.json。