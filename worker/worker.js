/**
 * worker 通过单独的脚本创建
 * **/

// onmessage 定义worker接受消息的回调
onmessage = (params) => {
    console.log(params)
    // postMesage 会把消息发到index.js的worker中
    postMessage(params)
}

// 通过close() 也能够马上结束当前的worker线程
self.close()