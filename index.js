const http=require('http');
const fs=require('fs');

http.createServer((request,response) => {
    if (request.url === '/write'){
    fs.writeFile('data.js','Raphael', (err)=>{
        if (err){
            console.log(err);
            response.end();
            return
        }
        response.write('File created!')
        response.end();
    });
  }
  if (request.url === '/delete'){
      fs.unlink('data.txt', (err)=>{
          if (err){
              console.log(err);
              response.end();
              return
          }
          response.write('File deleted');
          response.end();
      });
  }
  if (request.url === '/dice'){
      num=Math.floor(Math.random() * 6) + 1;
      console.log(num)
      if (num === 4){
          response.write("You won")
          response.end();
      } else {
          response.write("You lost")
          response.end();
      }
  }
}).listen(8080);

console.log("listen on: http://localhost:8080");