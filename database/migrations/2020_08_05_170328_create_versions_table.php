<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVersionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('versions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('designation');
            $table->integer('Annee');
            $table->double('Prix');
            $table->string('Moteur');
            $table->double('Architecture');
            $table->double('Cylindree');
            $table->integer('Puissancefiscale');
            $table->integer('Puissancemaxi');
            $table->integer('CoupleMaxi');
            $table->string('BoiteAvitesse');
            $table->boolean('PalettesAuvolant');
            $table->double('ConsVille');
            $table->double('ConsRoute');
            $table->double('ConsMixte');
            $table->double('EmissionCO2');
            $table->integer('Vitessemaxi');
            $table->string('Acceleration');
            $table->string('Categorie');
            $table->integer('NbPlace');
            $table->double('PoidsaVide');
            $table->double('Longueur');
            $table->double('Largeur');
            $table->double('Hauteur');
            $table->double('Empattement');
            $table->integer('Volumedureservoir');
            $table->integer('Volumedecoffre');
            $table->integer('Airbag');
            $table->boolean('ABS');
            $table->boolean('ESP');
            $table->boolean('Antipatinage');
            $table->boolean('AideFreinageUrgence');
            $table->boolean('AntiDemarrageElectronique');
            $table->boolean('AideDemarragEnCote');
            $table->boolean('Selecteurdemodedeconduite');
            $table->boolean('DetectionFatigue');
            $table->boolean('SystemeAlerteFranchissementLigne');
            $table->boolean('DetecteurAngleMort');
            $table->boolean('DetecteurSousGonflage');
            $table->boolean('FermeturePortesEnRoulant');
            $table->boolean('SystemeAlarme');
            $table->boolean('PharesAntibrouillard');
            $table->boolean('PreparationISOFIX');
            $table->string('Climatisation');
            $table->string('Systemeaudio');
            $table->boolean('OrdinateurBord');
            $table->boolean('StartStop');
            $table->boolean('RegulateurVitesse');
            $table->boolean('RegulateurVitesseAdaptatif');
            $table->boolean('DetecteurPluie');
            $table->boolean('AllumageAutoFeux');
            $table->boolean('FreinMainElectrique');
            $table->boolean('EcranTactile');
            $table->boolean('InstrumentationBordDigitale');
            $table->boolean('ReconnaissancePanneaux');
            $table->boolean('AffichageTêteHaute');
            $table->string('AideStationnement');
            $table->boolean('CameraRecul');
            $table->boolean('ParkAssistAuto');
            $table->boolean('CommandesVolant');
            $table->string('VolantReglable');
            $table->string('VitresElectriques');
            $table->boolean('RetroviseursElectriques');
            $table->boolean('RetroviseursRabattablesElectriquement');
            $table->boolean('OuvertureAutoCoffre');
            $table->boolean('DemarrageMainslibres');
            $table->string('SiegesElectriques');
            $table->boolean('BanquetteArriereRabattable');
            $table->boolean('GPS');
            $table->boolean('ConnexionInternet');
            $table->boolean('Bluetooth');
            $table->boolean('Followmehome');
            $table->string('Jantes');
            $table->boolean('VolantCuir');
            $table->boolean('FeuxJourLED');
            $table->boolean('PharesLED');
            $table->boolean('PharesXenon');
            $table->boolean('VitresTeintees');
            $table->string('Sellerie');
            $table->boolean('Toit');
            $table->boolean('BarresToit');

            


            $table->unsignedBigInteger('IdCarburant');
            $table->foreign('IdCarburant')->references('id')->on('carburants');

            $table->unsignedBigInteger('IdTransmission');
            $table->foreign('IdTransmission')->references('id')->on('transmissions');

            $table->unsignedBigInteger('IdTypeVoiture');
            $table->foreign('IdTypeVoiture')->references('id')->on('carousseries');

            $table->unsignedBigInteger('IdModel');
            $table->foreign('IdModel')->references('id')->on('modeles');
           



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
        Schema::dropIfExists('versions');
    }
}
