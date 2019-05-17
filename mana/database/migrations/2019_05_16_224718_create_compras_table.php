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
            $table->integer('Proveedor_id',5)->unsigned()->nullable();
            $table->integer('Valor_Neto',6)->nullable();
            $table->integer('Descuento',6);
            $table->integer('Valor_Iva',6);
            $table->integer('Valor_a_Pagar',6)->nullable();
            $table->timestamps('Fecha')->useCurrent();
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
        Schema::dropIfExists('compras');
    }
}
