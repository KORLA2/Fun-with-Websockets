let app=require('express')();
let {router,cors}=require('./Router');
let http=require('http')


app.use(cors({

    origin:'*'
}))

let server=http.createServer(app)

let io=require('socket.io')(server)

let port=process.env.PORT||5000

io.on('connection',(socket)=>{
console.log('New Player added')

socket.on('join',({name,room})=>{

    console.log(name,room)
})

socket.on('disconnect',()=>{
    console.log('Player Disconnected')

})

})
app.use(router);

server.listen(port,()=>{console.log(port)})