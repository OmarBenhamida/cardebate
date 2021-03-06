<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVersionimgsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('versionimgs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('Idversion');
            $table->foreign('Idversion')->references('id')->on('versions');

            $table->unsignedBigInteger('Idimg');
            $table->foreign('Idimg')->references('id')->on('imgvs');
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
        Schema::dropIfExists('versionimgs');
    }
}
