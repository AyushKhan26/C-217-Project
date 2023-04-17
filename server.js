const express = require("express");
const app = express();
const server = require("http").Server(app);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render('index')
});

io.on("connection",(server)=>{
    socket.on("message",(message)=>{
        io.emit("createmessage",message)
    })
})

server.listen(3030);