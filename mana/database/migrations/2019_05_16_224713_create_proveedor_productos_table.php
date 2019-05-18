<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProveedorProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedor_productos', function (Blueprint $table) {
            $table->increments('id_ProveedorProducto');
            $table->integer('Proveedor_id')->unsigned()->nullable();
            $table->integer('tipoProducto_id')->unsigned()->nullable();
            $table->integer('Cantidad')->nullable();
            $table->string('material',30)->nullable();
            $table->string('Descripcion',30)->nullable();
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
        Schema::dropIfExists('proveedor_productos');
    }
}
