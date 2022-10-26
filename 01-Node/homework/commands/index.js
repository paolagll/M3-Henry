var fs = require('fs'); // es una biblioteca nativa de Node


module.exports = {
    date: function(arg,done){
        done(Date());
    },
    pwd: function(arg,done){
        done(process.cwd());
    },
    echo: function(arg,done){
        done(arg.join(' '));
    },
    ls: function (arg,done){

    }
}