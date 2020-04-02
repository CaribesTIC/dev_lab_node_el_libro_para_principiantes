var exec =  require('child_process').exec;

function iniciar() {
  console.log("Manipulador de peticion 'iniciar' fue llamado.");

  function sleep(milliSeconds) {  
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds); 
  }

  sleep(10000);

  exec('ls -lah', function(err, stdout, stderr) {
        console.log(stdout);//content = stdout;
  });
  return "Hola Iniciar";


}

function subir() {
  console.log("Manipulador de peticion 'subir' fue llamado.");
  return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;






