
const WebSocket = require('ws');

//引入Server类并且实例化
const wss = new WebSocket.Server({ port: 5000 }); //定义ws服务器的端口号

//connection他是WebSocket相应事件
//在connection事件中，回调函数会传入一个WebSocket的实例，表示这个WebSocket
wss.on('connection', ws => {
  ws.on('message', message => {
    const msg = JSON.parse(message)
    console.log('服务端传过来的数据是：',msg);
        ws.send(JSON.stringify(msg));
        // setInterval(() => {
        //     ws.send(Math.round(Math.random() * 5));
        // }, 3000);
    });
});
