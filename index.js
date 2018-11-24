var exec = require('child_process').exec;

puts = (err, stdout, stderr) => {  
  if (err) throw console.log(err)
  if (stderr) throw console.log(stderr)
  console.log(stdout)
}

/* https: //blogs.technet.microsoft.com/askperf/2012/02/17/useful-wmic-queries/ */
exec("wmic CPU get ProcessorId", puts);
exec("wmic DISKDRIVE get SerialNumber", puts);
exec("wmic bios get serialnumber", puts);
exec("wmic baseboard get product, version, serialnumber, product", puts);
exec("wmic computersystem get Name, domain, Manufacturer, Model, NumberofProcessors, PrimaryOwnerName,Username, Roles, totalphysicalmemory /format:list", puts);
