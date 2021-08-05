module.exports.parse = function(params) {
    let obj = {}
        // 变数组 ['键=值'，。。。]
    let arr = params.split('&')
    arr.forEach(item => {
        //item 键=值
        let temp = item.split('=')
        let bl = temp[0]
        obj[bl] = temp[1]
    })
    return obj
}

module.exports.stringify = function(obj) {
    let arr = []
    for (let key in obj) {
        arr.psh(`${ket}=${obj[key]}`)
    }
    return arr.join('&')
}