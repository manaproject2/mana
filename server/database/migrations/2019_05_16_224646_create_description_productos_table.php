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
            $table->integer('Producto_id')->unsigned()->nullable();
            $table->integer('color_id')->unsigned()->nullable();
            $table->integer('talla_id')->unsigned()->nullable();
            $table->integer('Forma_id')->unsigned()->nullable();
            $table->integer('Existencia')->nullable();
            $table->integer('Valor_Venta')->nullable();
            $table->integer('ValorMin')->nullable();
            $table->integer('Iva_Porcentaje');
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
