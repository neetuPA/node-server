const http=require('http');
const fs=require('fs');
const path=require('path');

const app=http.createServer((req,res)=>{
    
const errdata=function(error,data){
            if(error){
                //   res.setHeader('Content-Type','text/html');
                res.end('Internal Server Error');
               
            }
            else {
           
                res.end(data);
               
            }
        }

//  const css = function (error, css) {
//   if (error) {
//     res.statusCode = 500;
//     console.log('Error reading CSS file:', error);
//     res.end('Internal Server Error');
//   } else {
//     res.statusCode = 200;
//     console.log('CSS file served successfully.');
//     res.setHeader('Content-Type', 'text/css');
//     res.end(css);
//   }
// };
       
    if(req.url.toLowerCase()==='/'||req.url.toLowerCase()==='/home'){
        fs.readFile(path.join(__dirname,'html_file','home.html'),errdata)
    
    }else if(req.url.toLowerCase()==='/about'){
      fs.readFile(path.join(__dirname,'html_file','about.html'),errdata,)
     
     
   
    }else if(req.url.toLowerCase()==='/contact'){
      fs.readFile(path.join(__dirname,'html_file','contact.html'),errdata)
        res.statusCode=202;
      
    }
//     else if(req.url.toLowerCase()==='/style.css'){
// console.log("css file requested");
//         fs.cssReadStream(path.join(__dirname,'html_file','style.css'),css)
//        console.log("css file served");
//         console.log("Request:", req.url);

   
//     }
    else{
         fs.readFile(path.join(__dirname,'html_file','404.html'),errdata)
   
         res.statusCode=404;
       

    }

})

const PORT= 5002;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})