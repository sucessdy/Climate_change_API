// const http = require("http")
// const {readFileSync }  = require("fs")
 
// const homePage  = readFileSync('./index.html')
// const server = http.createServer( (req, res) => {

// const url = req.url
// //   console.log(req.method)
// if (url === '/'){
//     res.writeHead(200, { "Content-type" : "text/html"})
//     res.write(homePage)
//     res.end()
// }
// else  if(url === "about"){
//     res.writeHead(200, {'Content-type '  : "text/html"})
//     res.write('<h1> home is all about u</h1>');
//     res.end()
// }

// else {
//     res.writeHead(404, {'Content-type' : "home is akl"} )
//     res.write("<h1>home, good bye</h1> ")
//     res.end()
// }
    
// } )

// server.listen(9000, () => {
//     console.log("server is running at on port 9000")
// })