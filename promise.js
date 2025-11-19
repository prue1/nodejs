const promise = new Promise(function (success, failure) {

    const num = parseInt(Math.random() * 100)
    if (num % 2 == 0) {
        success(num)
    } else {
        failure(num)
    }

})

await promise.then(function (value) {
    console.log(`${value} (even)`)
}, function (value) {
    console.log(`${value} (odd)`)
})