import 'package:repasoparseador/modelo/productoDao.dart';
import 'package:repasoparseador/parseadores/parserGeneral.dart';
import 'package:http/http.dart';
import 'package:html/parser.dart';


class ParseadorEspecificoDeLosProductos implements ParseadorGeneralDeProductos{
 
 //antes de hacer los metodos tengo que crear el metodo que me ayudara a conectarme a la get y coger los datos que necesite.

    static const dominio = 'www.phonehouse.es';
    static const uri ='';
 
  _rutaWebProductos() => Uri.https(dominio, uri);
 
 //este metodo me vale para crear y devolver una lista de productos
  @override
  Future<List<Producto>> devolverListaDeProductos() async{
    var listaProductos = <Producto>[];
    var  url = _rutaWebProductos();
    var respuesta = await get(url);
    if(respuesta.statusCode ==200){

      var cuerpoDelDocumento = parse(respuesta.body);
      var arrayDeProductos = cuerpoDelDocumento.querySelectorAll('.item-mosaico a');
      print(arrayDeProductos);

      for (var datos in arrayDeProductos) {
        var producto = await parsearProducto(datos.attributes['href']);
        print(producto);
        listaProductos.add(producto);
        
      }

    }
    return listaProductos;

  }



//este metodo me vale para crear un porducto por un producto
  @override
  Future<Producto> parsearProducto(String dato) async {
    var ruta = Uri.https(dominio, dato);
    var respuesta = await get(ruta);
     var documento ;
    var nombreProducto , proveedorProducto; 
    var precioProducto = 0.0;  
    var precionTipoString = '';
    var precioSinString = '';
      if(respuesta.statusCode == 200){
         documento = parse(respuesta.body);
         nombreProducto = documento.querySelector('.marca-modelo-estrellas h1').text;
         proveedorProducto = documento.querySelector('.marca-modelo-estrellas p').text;
          precionTipoString = documento.querySelector('.precio').text ;
          precioSinString = precionTipoString.replaceAll('€', '').replaceAll(',', '.');
          precioProducto = double.parse(precioSinString);

      }
    return Producto(nombreProducto: nombreProducto , proveedor: proveedorProducto , precioProducto: precioProducto);

  }

}

/*
main(List<String> args) {
  
  var prueba = ParseadorEspecificoDeLosProductos();
  var respuesta = prueba.devolverListaDeProductos();
  


}*/