// 測試 this 的用法。

/*
一開始一直印出 undefined, 就覺得奇怪, 應該印出 global(原先想的) 才對,
後來懷疑到 package.json 的設定, 真被我猜到了, 原因如下:

因為 package.json 設定了 "type": "module"
使得所有的 .js 隱含成為 strict mode
所以, this 會變成 undefined
若將那行移除, this 就會有值

另外, google AI 回覆, 無法在程式中設為非 strict mode, 如下:
ECMAScript modules (using import/export syntax or <script type="module">)
are always in strict mode by default, and this behavior cannot be disabled.
This is a fundamental part of the ECMAScript specification for modules.

將這個檔案 copy 到別的位置再執行, 也能顯示 this 所指 global 的值.
*/

var a = 3

function p() {
    a = 5
}

function pp() {
    // 現為 strict mode 所以, this 為 undefined
    console.log(this)
    console.log(a)
}

p()
pp()