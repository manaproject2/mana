<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendedorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendedors', function (Blueprint $table) {
            $table->increments('id_Vendedor');
            $table->integer('tipoIdentificacion_id',5)->unsigned()->nullable();
            $table->string('Vendedor',30)->nullable();
            $table->string('Direccion',30)->nullable();
            $table->string('Telefono',10)->nullable();
            $table->string('celular',13)->nullable();
            $table->enum('eps' , array('Medimas','2','Sura','Comfandi'))->nullable();
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
        Schema::dropIfExists('vendedors');
    }
}
