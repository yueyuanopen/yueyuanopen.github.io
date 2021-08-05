#!/usr/bin/env node

'use strict'


//获取控制台参数
let argv = process.argv;

//argv[2] GET参数去问号

let obj = {}

let arr = arg[2].split('&')

arr.forEach(item => {
    let temp = item.split('=')
    let bl = temp[0]
    obj[bl] = temp[1]
})
console.log(obj);