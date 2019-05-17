<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id_Cliente');
            $table->integer('tipoIdentificacion_id',5)->unsigned()->nullable();
            $table->integer('departamento_id',5)->unsigned()->nullable();
            $table->integer('ciudad_id',5)->unsigned()->nullable();
            $table->string('ciente',30)->nullable();
            $table->string('Direccion',30)->nullable();
            $table->string('Telefono',10)->nullable();
            $table->string('celular',13)->nullable();
            $table->string('Correo',30)->nullable();
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
        Schema::dropIfExists('clientes');
    }
}
