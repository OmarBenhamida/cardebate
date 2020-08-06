<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnonceimgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annonceimgs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('Idannoce');
            $table->foreign('Idannoce')->references('id')->on('annoces');

            $table->unsignedBigInteger('Idimg');
            $table->foreign('Idimg')->references('id')->on('imgas');
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
        Schema::dropIfExists('annonceimgs');
    }
}
