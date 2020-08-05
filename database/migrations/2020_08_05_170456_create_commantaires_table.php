<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommantairesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commantaires', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('txtcomment');
            $table->unsignedBigInteger('idUser');
            $table->foreign('idUser')->references('id')->on('comptes');

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
        Schema::dropIfExists('commantaires');
    }
}
