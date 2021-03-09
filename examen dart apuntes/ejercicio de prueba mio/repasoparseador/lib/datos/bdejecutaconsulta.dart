import 'package:repasoparseador/modelo/productoDao.dart';
import 'package:sqlite3/sqlite3.dart';

//creamos la base de datos para ir ejecutando consultas y guardando datos dentro de la base de datos
class BdejecutarConsulta{
//atributo
Database db ;
//constructor
BdejecutarConsulta(this.db);
//ejecutar la consulta

void insetarDatos(Producto producto){
  //creamos la consulta
  var sql = '''
    insert into Productox values (?, ?, ?)
   ''';
//preparamos la insersion de datos
   final sttm = db.prepare(sql);
   //ejecutamos los datos.
   sttm.execute([
     producto.nombreProducto , producto.proveedor , producto.precioProducto]
     );
//cerramos el flujo de datos
     sttm.dispose();
}

}