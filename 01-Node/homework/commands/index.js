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
        fs.readdir('.', function(err,data){ // readdir devuelve un arreglo con los alementos que hay en el dir
            if (err) throw err;
            done(data.join('\n')); // data es el arreglo y lo junto
        })
    },
    cat: function(arg,done){
        fs.readFile(arg[0], 'utf-8', function(err, data){
            if (err) throw err;
            done (data);
        })
    }
}