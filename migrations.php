php artisan make:model tipoProducto --migration
php artisan make:model marcas --migration
php artisan make:model tipoIdentificacion --migration
php artisan make:model CatalogoTallas --migration
php artisan make:model CatalogoColoresProducto --migration
php artisan make:model CatalogoEstilos --migration
php artisan make:model departamento --migration
php artisan make:model ciudad --migration
php artisan make:model Producto --migration
php artisan make:model descriptionProducto --migration
php artisan make:model descripcion_usuario --migration
php artisan make:model Vendedor --migration
php artisan make:model Cliente --migration
php artisan make:model Proveedores --migration
php artisan make:model ProveedorProducto --migration
php artisan make:model Compra --migration
php artisan make:model Detalle_Compra --migration
php artisan make:model Venta --migration
php artisan make:model Detalle_Venta --migration
php artisan make:model factura --migration
php artisan make:model recibo --migration

php artisan migrate