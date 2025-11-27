const promise = new Promise(function (success, failure) {

    let c = 0
    let i = 0
    while ((i = parseInt(Math.random() * 5000)) < 4990) {
        c++
    }

    console.log(`total:${c}`)

    if (i % 2 == 0) {
        success(i)
    } else {
        failure(i)
    }

})

promise.then(function (value) {
    console.log(`${value} (even)`)
}, function (value) {
    console.log(`${value} (odd)`)
})

console.log(`done`)