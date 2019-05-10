const fs = require('fs');

fs.readdir(process.argv[2],'utf-8',function (err,data){
    if(err){
        console.log(err);
        return -1
    }
    console.log(data)
})