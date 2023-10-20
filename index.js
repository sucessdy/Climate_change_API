// const PORT = 8000;
// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const app = express();


// const designs = [
//   {
//     name: "dribbble",
//     base: ""
//  ,   workspace: "https://dribbble.com/following",

//   },
//   {
//     name: "pixlr",
//     base : "https://pixlr.com/x/#home&id=62f686199868ed6f63e55dd7" , 
//     workspace:
//     "https://pixlr.com/x/#home&id=62f686199868ed6f63e55dd7",
//   },
// ];

// const articles = [];

// designs.forEach(design => {
//   axios.get(design.workspace)
//   .then(response => {
//     const html= response.data
//     const $ = cheerio.load(html)

//     $('a:contains("")', html).each(function ( ) {
//       const title  = $(this).text()

//       const url = $(this).attr("href"); 

//       articles.push({ 
//         title, 
//         url: design.base + url, 
//         source:  design.name,
//       })
//     })
//   })
// })
// app.get("/", (req, res) => {
//   res.json({ message: "welcome back" });
// });

// app.get("/design", (req, res) => {
//   res.json(articles)

// });

// app.get('/design/:designId',  async (req , res) =>{
// const designId = req.params.designId 

// const design = designs.filter(design => design.name === designId)[0].workspace

// console.log(design )
// axios.get(designworkspace)
// .than(html = response.data)
// })

// app.listen(PORT, () => console.log(`server running on PORT  ${PORT}`));
