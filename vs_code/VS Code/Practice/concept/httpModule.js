// in node js http module handle req res .
const http = require("http")

const data = (req,res)=>{
    res.write("this is server")
    res.end()
}

http.createServer(data).listen(3000)