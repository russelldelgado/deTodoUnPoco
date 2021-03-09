

import 'package:repasoparseador/modelo/productoDao.dart';

abstract class ParseadorGeneralDeProductos{
  Future<List<Producto>> devolverListaDeProductos();
  Future<Producto> parsearProducto(String dato);
}