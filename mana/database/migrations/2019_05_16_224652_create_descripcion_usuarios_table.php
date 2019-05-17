<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDescripcionUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('descripcion_usuarios', function (Blueprint $table) {
            $table->increments('id_descriptionProducto');
            $table->integer('usuario_id',5)->unsigned()->nullable();
            $table->integer('departamento',5)->unsigned()->nullable();
            $table->integer('ciudad',5)->unsigned()->nullable();
            $table->string('Direccion',30)->nullable();
            $table->string('Telefono',10)->nullable();
            $table->string('celular',13)->nullable();
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
        Schema::dropIfExists('descripcion_usuarios');
    }
}
