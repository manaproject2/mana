<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle__ventas', function (Blueprint $table) {
            $table->increments('id_detalleVenta');
            $table->integer('Venta_id')->unsigned()->nullable();
            $table->integer('Producto_id')->unsigned()->nullable();
            $table->integer('Cantidad')->nullable();
            $table->integer('Valor_Neto')->nullable();
            $table->integer('Valor_Iva');
            $table->integer('Valor_Pagar')->nullable();
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
        Schema::dropIfExists('detalle__ventas');
    }
}
