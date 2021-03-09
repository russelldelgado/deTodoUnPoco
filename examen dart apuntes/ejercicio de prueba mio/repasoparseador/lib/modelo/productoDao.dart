

class Producto {

String nombreProducto ;
String proveedor;
double precioProducto ;


Producto({this.nombreProducto = 'POR DEFECTO' , this.proveedor = 'POR DEFECTO ' , this.precioProducto = 0.0});


@override
  String toString() {
    return 'NOMBRE PRODUCTO : ${this.nombreProducto} , PROVEEDOR : ${this.proveedor} , PRECIO : ${this.precioProducto}';    
  }


  String get vernombreDelProducto{
    return nombreProducto;
  }

  void  cambiarNombreDelProducto(String nuevoNombre){
    this.nombreProducto = nuevoNombre;
  }


}