Create table tipoProducto 
(id_tipoProducto int(5) not null auto_increment primary key,
Categoria varchar(20) not null);

Create table marcas
(id_marcas int(5) not null auto_increment primary key,
tipoProducto_id  int(5) not null references tipoProducto(int_tipoProducto),	
Marca varchar(30) not null);

Create table tipoIdentificacion
(id_tipoIdentificacion int(5) not null auto_increment primary key,
identificacion varchar(15) not null,
numero varchar(15) not null,
);

Create table CatalogoTallas
(id_cataTallas int(5) not null auto_increment primary key,
talla varchar(15) not null);

Create table CatalogoColoresProducto
(id_CCP int(5) not null auto_increment primary key,
color varchar(15) not null);

Create table CatalogoEstilos
(id_cataEstilos int(5) not null auto_increment primary key,
forma varchar(15) not null);

Create table departamento
(id_departamento  int(5) not null auto_increment primary key,
departamento varchar(20) not null);

Create table ciudad 
(id_ciudad int(5) not null auto_increment primary key,
departamento_id int(5) not null references departamento(id_departamento),	
ciudad varchar(20) not null);

Create table Producto
(id_Producto int(5) not null auto_increment primary key,
Producto varchar(25) not null,
Tipo_de_Producto_id int(5) not null references tipoProducto(tipoProducto_id),
marca_id  int(5) not null references marcas(id_marcas),
Descripcion varchar(30) not null);



Create table descriptionProducto
(id_descriptionProducto int(5) not null auto_increment primary key,
Producto_id int(5) references Producto(id_producto),
color_id int(5) not null references CatalogoColoresProducto(id_CCP),
talla_id int(5) not null references CatalogoTallas(id_cataTallas),
Forma_id int(5) not null references CatalogoEstilos(id_cataEstilos),
Existencia int(3) not null,
Valor_Venta int(5) not null,
ValorMin int(5) not null,
Iva_Porcentaje int(5) check(Iva_Porcentaje<=100));


Create table usuario
(id_usuario  int(5) not null auto_increment primary key,
nombre varchar(30) not null,
email varchar(30) not null,
email_verificado timestamp ,
password varchar(255) not null);

Create table Vendedor
(id_Vendedor int(5) not null auto_increment primary key,
Vendedor varchar(30) not null,
tipoIdentificacion_id int(5) not null references tipoIdentificacion(id_tipoIdentificacion),
Direccion varchar(30) not null,
Telefono int(10) not null,
celular int(13) not null,
Eps varchar(30) not null check(Categoria in (‘Medimas’, ‘Sura’, ‘Comfandi’)));

Create table Cliente
(id_Cliente int(5) not null auto_increment primary key,
usuario_id int(5) not null references usuario(id_usuario),	
avatar varchar(30),
cliente varchar(30),
tipoIdentificacion_id int(5)  references tipoIdentificacion(id_tipoIdentificacion),
Direccion varchar(30) ,
Telefono int(10) ,
celular int(13) ,
Correo varchar(30) ,
departamento_id  int(20)  references departamento(id_departamento),
ciudad_id int(20)  references ciudad(id_ciudad)
);


Create table Proveedores
(id_Proveedor int(5) not null auto_increment primary key,
Proveedor varchar(30) not null,
tipoIdentificacion_id int(5) not null references tipoIdentificacion(id_tipoIdentificacion),
direccion int(30) not null,
Telefono int(10) not null,
celular int(13) not null,
Correo varchar(30) not null,
departamento_id int(20) not null references departamento(id_departamento),
ciudad_id int(20) not null references ciudad(id_ciudad));

Create table ProveedorProducto
(id_ProveedorProducto int(5) not null auto_increment primary key,
Proveedor_id int(5) not null references Proveedores(id_Proveedor),
tipoProducto_id int(5) not null references Producto(id_Producto),
Cantidad int(13) not null,
material varchar(30) not null,
Descripcion varchar(30) not null);


Create table Compra
(id_compra int(3) int(5) not null auto_increment primary key,
Proveedor_id int(3) references Proveedores(id_Proveedor),
Valor_Neto int(20) not null,
Descuento int(20) ,
Valor_Iva int(20) ,
Valor_a_Pagar int(20) not null,
Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
Forma_Pago int(30) not null check(Forma_Pago in (‘efectivo’, ‘T.C’, ‘T.P’)));

Create table Detalle_Compra
(id_detalleCompra int(5) not null auto_increment primary key,
Compra_id int(3) not null references Compra(id_compra),	
Producto_id int(3) references not null Producto(id_Producto),
Valor_Unidad int(20) not null,
Valor_Neto int(20) not null,
Valor_Iva int(20),
Valor_Pagar int(20) not null);

Create table Venta
(id_Venta int(5) not null auto_increment primary key,
Cliente_id int(3) references not null Cliente(Cod_Cliente),
Vendedor_id int(3) references not null Vendedor(id_Vendedor),
Valor_Neto int(20) not null,
Descuento int(20),
Valor_Iva int(20),
Valor_Pagar int(20) not null,
Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
Forma_Pago int(30) not null check(Forma_Pago in (‘efectivo’, ‘T.C’, ‘T.P’)));

Create table Detalle_Venta
(id_detalleVenta int(5) not null auto_increment primary key,
Venta_id int(5) references not null Venta(id_Venta),
Producto_id int(3) references not null Producto(id_Producto),
Cantidad int(20) not null,
Valor_Neto int(20) not null,
Valor_Iva int(20),
Valor_Pagar int(20) not null);

Create table factura
(id_factura int(5) not null auto_increment primary key,
Vendedor_id int(3) references not null Vendedor(id_Vendedor),
Cliente_id int(3) references  Cliente(id_Cliente),
detalleVenta_id int(3) references not null Detalle_Venta(id_detalleVenta),
nombre varchar(30) not null,
nit varchar(30) not null,
Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

Create table recibo
(id_recibo int(5) not null auto_increment primary key,
Vendedor_id int(3) references not null Vendedor(id_Vendedor),
Cliente_id int(3) references  Cliente(id_Cliente),
detalleVenta_id int(3) references not null Detalle_Venta(id_detalleVenta),
nombre varchar(30) not null,
Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
