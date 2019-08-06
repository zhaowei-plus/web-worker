// worker的创建是通过一个另外的脚本来生成的，里面定义的是worker的具体执行逻辑
var worker = new Worker("worker.js")

// 传输消息给worker, tips: 当一个消息在主线程和worker之间传递时，它被复制或者转移了，而不是共享
worker.postMessag("你好")

// 接收经过worker处理过的消息
worker.onmessage = (params) => {
    console.log("params:", params)

}

// worker 会在页面关闭的时候自动关闭, 用terminate() 可以立即杀死worker的线程
worker.terminate()