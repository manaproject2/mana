<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDetalleComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalle__compras', function (Blueprint $table) {
            $table->increments('id_detalleCompra');
            $table->integer('Compra_id',5)->unsigned()->nullable();
            $table->integer('Producto_id',5)->nullable();
            $table->integer('Valor_Unidad',6)->nullable();
            $table->integer('Valor_Neto',6)->nullable();
            $table->integer('Valor_Iva',6);
            $table->integer('Valor_Pagar',6)->nullable();
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
        Schema::dropIfExists('detalle__compras');
    }
}
