import 'package:repasoparseador/Datos/bdcreatabla.dart';
import 'package:repasoparseador/Datos/bdejecutaconsulta.dart';
import 'package:repasoparseador/modelo/productoDao.dart';
import 'package:repasoparseador/parseadores/parserEspecifico.dart';

void main(List<String> arguments) async{
   
   //importamos la clase entera para usar sus metodos luego
var parseador =  ParseadorEspecificoDeLosProductos();
  
  //devolvemos una lista de productos que vienen de la pagina
var listaDePeliculas =await parseador.devolverListaDeProductos();

if(listaDePeliculas == null){
print('LA PUTA MADRE ESTO ES NULO');
}else{
print( 'DATOS INTRODUCIDOS : ${listaDePeliculas.length}');

}


//cramos la base de datos para guardar esos datos
var creadorBD = BdCrearTabla();
creadorBD.crearBaseDeDatos();

//ejecutamos las consultas dentro de la base de datos para eso necesitamos el isntanciador
var guardarDatoDao = BdejecutarConsulta(creadorBD.db);

//ahora recorremos los datos y guardamos cada una de las peliculas

listaDePeliculas.forEach((producto) => { 
  guardarDatoDao.insetarDatos(producto)
});


}
