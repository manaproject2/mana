<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->increments('id_compra');
            $table->integer('Proveedor_id')->unsigned()->nullable();
            $table->integer('Valor_Neto')->nullable();
            $table->integer('Descuento');
            $table->integer('Valor_Iva');
            $table->integer('Valor_a_Pagar')->nullable();
            
            $table->enum('Forma_Pago', array('efectivo','Tarjeta debito','Tarjeta credito','Siste credito'))->nullable();
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
        Schema::dropIfExists('compras');
    }
}
