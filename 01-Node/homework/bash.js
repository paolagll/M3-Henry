 const commands = require('./commands');
 // coomands pasa a ser un obj con funt ejecutables {date(),pwd()} 

 //se crea done con la funcion de impresion para no repetir
const done = function(data){
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
}


// El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   if(cmd === 'date') {
//     commands.date(done);  
//   }
//   if(cmd === 'pwd') {
//     commands.pwd(done);
//   }
// });
// 
// Se resume todo lo hecho en una funcion que sirva para ejecuatr cualquier comando pasado por parametro.

process.stdin.on('data', function (data) {
    let arg = data.toString().trim().split(' ');
    let cmd = arg.shift(); 
    if(commands[cmd]) {     // verifico si lo pasado es una propiedad existente
        commands[cmd](arg,done);       // ejecuto la funcion de esa propiedad
    } else {
        done('Comando no existente');   //muestro el sig cartel
    }
  });