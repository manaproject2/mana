<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDescriptionProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('description_productos', function (Blueprint $table) {
            $table->increments('id_descriptionProducto');
            $table->integer('Producto_id',5)->unsigned()->nullable();
            $table->integer('color_id',5)->unsigned()->nullable();
            $table->integer('talla_id',5)->unsigned()->nullable();
            $table->integer('Forma_id',5)->unsigned()->nullable();
            $table->integer('Existencia',3)->nullable();
            $table->integer('Valor_Venta',6)->nullable();
            $table->integer('ValorMin',5)->nullable();
            $table->integer('Iva_Porcentaje',3);
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('description_productos');
    }
}
