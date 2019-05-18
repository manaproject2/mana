<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->increments('id_Venta');
            $table->integer('Cliente_id')->unsigned()->nullable();
            $table->integer('Vendedor_id')->unsigned()->nullable();
            $table->integer('Valor_Neto')->nullable();
            $table->integer('Descuento');
            $table->integer('Valor_Iva');
            $table->integer('Valor_Pagar')->nullable();
            
            $table->enum('Forma_Pago' , array('efectivo','Tarjeta debito','Tarjeta credito','Siste credito'))->nullable();
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
        Schema::dropIfExists('ventas');
    }
}
