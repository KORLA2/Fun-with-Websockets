let app=require('express')();
let {router}=require('./Router');
let http=require('http')

let server=http.createServer(app)
let io=require('socket.io')(server)

io.on('connection',(socket)=>{
socket.on('join',({name,room})=>{

console.log(name,room)
io.emit('received',"MessageReceived")


})
console.log(socket.id+'cconnected')
socket.on('disconnect',()=>{
    console.log('connection disconnected')
})
})



let port=process.env.PORT||5000

console.log('app crashed..')


app.use(router);

server.listen(port,()=>{console.log(port)})