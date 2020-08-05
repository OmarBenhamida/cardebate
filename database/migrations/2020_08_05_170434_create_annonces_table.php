<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnoncesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annonces', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('Marque');
            $table->string('Model');
            $table->double('Prix');
            $table->integer('Km');
            $table->string('Description');
            $table->integer('anneeModel');
            $table->string('carburant');
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
        Schema::dropIfExists('annonces');
    }
}
