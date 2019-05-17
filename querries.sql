select DISTINCT 
producto.id_Producto,
Producto.NombreProducto,
tipoProducto.nombreCategoria,
marcas.nombreMarca
from producto 
inner join tipoProducto 
on tipoproducto.id_tipoProducto=producto.Tipo_de_Producto_id
inner join marcas
on  tipoproducto.id_tipoProducto=marcas.tipoProducto_id 
where id_Producto="1"
GROUP BY producto.id_Producto
;

select   
ProveedorProducto.id_ProveedorProducto,
Proveedores.nombreProveedor,
proveedorproducto.Cantidad,
Proveedores.Telefono,
proveedorproducto.material,
Producto.NombreProducto

from ProveedorProducto 
inner join Proveedores 
on Proveedores.tipoIdentificacion_id=Proveedorproducto.Proveedor_id

inner join Producto 
on Producto.Tipo_de_Producto_id=ProveedorProducto.tipoProducto_id
GROUP BY producto.id_Producto
;

SELECT
  student.firstname,
  student.lastname,
  exam.name,
  exam.date,
  grade.grade
FROM grade
 INNER JOIN student
   ON student.studentId = grade.fk_studentId
 INNER JOIN exam
   ON exam.examId = grade.fk_examId
 GROUP BY grade.gradeId
 ORDER BY exam.date

select DISTINCT 
ProveedorProducto.Proveedor_id,
producto.id_Producto,
Producto.NombreProducto,
tipoProducto.nombreCategoria,
Proveedores.nombreProveedor,
ProveedorProducto.Cantidad
from ProveedorProducto 
inner join Proveedores 
on Proveedores.id_Proveedor=ProveedorProducto.Proveedor_id 
inner join Producto
on  Producto.Tipo_de_Producto_id=ProveedorProducto.tipoProducto_id 

inner join tipoProducto
on  tipoProducto.id_tipoProducto=Producto.Tipo_de_Producto_id
GROUP BY producto.id_Producto
;

select DISTINCT 
Proveedores.id_Proveedor,
Proveedores.nombreProveedor,

tipoIdentificacion.identificacion,
Proveedores.celular,
departamento.departamento,
ciudad.ciudad,
Compra.id_compra,
Compra.Valor_Neto,
Compra.Descuento,
Compra.Fecha

from Compra 
inner join Proveedores 
on Proveedores.id_Proveedor=Compra.id_Proveedor 

inner join departamento
on  departamento.id_departamento=Proveedores.departamento_id 

inner join ciudad
on  ciudad.id_ciudad=Proveedores.ciudad_id

inner join tipoIdentificacion
on  tipoIdentificacion.id_tipoIdentificacion=Proveedores.tipoIdentificacion_id
GROUP BY Proveedores.id_Proveedor
;

select DISTINCT 
Detalle_Compra.Valor_Unidad,
Producto.NombreProducto

from Detalle_Compra 
inner join Producto 
on Producto.id_Producto=Detalle_Compra.id_Producto 

GROUP BY Detalle_Compra.Valor_Unidad
;


select DISTINCT 
Detalle_Compra.Valor_Unidad,
Producto.NombreProducto

from Detalle_Compra 
inner join Producto 
on Producto.id_Producto=Detalle_Compra.id_Producto 

GROUP BY Detalle_Compra.Valor_Unidad
;

select DISTINCT 
Cliente.Nombre,
Vendedor.Nombre,
Venta.id_Venta,
Venta.Valor_Neto

from Venta 
inner join Cliente 
on Cliente.id_Cliente=Venta.id_cliente

inner join Vendedor 
on Vendedor.id_Vendedor=Venta.id_Vendedor

GROUP BY Venta.id_Venta
;

select DISTINCT 
Detalle_Venta2.id_detalle_Venta,
Detalle_Venta2.Venta_id,
Detalle_Venta2.Cantidad,
Detalle_Venta2.Valor_Pagar,
Venta.Fecha,
marcas.nombreMarca,
Producto.NombreProducto

from Detalle_Venta2

inner join Venta 
on Venta.id_Venta=Detalle_Venta2.Venta_id

inner join Producto 
on Producto.id_Producto=Detalle_Venta2.Producto_id

inner join marcas
on  marcas.id_marcas=Producto.marca 

GROUP BY Detalle_Venta2.id_detalle_Venta

;