import 'package:sqlite3/sqlite3.dart';
import 'dart:io';

class BdCrearTabla{

Database db;

BdCrearTabla(){
  db = sqlite3.open(Directory.current.path + '/productos.db');
}

void close(){
  db.dispose();
}

  void crearBaseDeDatos(){
    var sql = ''' 
    create table productox(
      nombreProducto varchar ,
      proveedor varchar,
      precioProducto int
    );
    ''';

  db.execute(sql);

  }


}