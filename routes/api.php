<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/employes/getCountSexeParAn/', 'EmployeController@getCountSexeParAn');
// Route::get('/employes/getbyCin/{cin}', 'EmployeController@getbyCin');
// Route::get('/employes/getbyMatricule/{Matricule}', 'EmployeController@getbyMatricule');
// Route::get('/employes/getCountSexe/', 'EmployeController@getCountSexe');
// Route::get('/employes/getList/{startIndex}/{pageSize}/{sortBy}/{sortDir}', 'EmployeController@getAll');
// Route::apiResource('employes', 'EmployeController');

// Route::get('/ordremissions/getAll', 'OrdreMissionController@getAll');
// Route::apiResource('ordremissions', 'OrdreMissionController');


Route::post('/compte', 'CompteController@compte');

Route::get('/carburants/getAll', 'CarburantController@getAll');
Route::apiResource('carburants', 'CarburantController');

Route::get('/transmissions/getAll', 'TransmissionController@getAll');
Route::apiResource('transmissions', 'TransmissionController');

Route::get('/carousseries/getAll', 'CarousserieController@getAll');
Route::apiResource('carousseries', 'CarousserieController');

Route::get('/countrys/getAll', 'CountryController@getAll');
Route::apiResource('countrys', 'CountryController');

Route::get('/imgas/getAll', 'ImgaController@getAll');
Route::apiResource('imgas', 'ImgaController');

Route::get('/imgvs/getAll', 'ImgvController@getAll');
Route::apiResource('imgvs', 'ImgvController');

Route::get('/marques/getAll', 'MarqueController@getAll');
Route::apiResource('marques', 'MarqueController');

Route::get('/modeles/getAll', 'ModeleController@getAll');
Route::apiResource('modeles', 'ModeleController');

Route::get('/versions/getAll', 'VersionController@getAll');
Route::apiResource('versions', 'VersionController');

Route::get('/versionimgs/getAll', 'VersionimgController@getAll');
Route::apiResource('versionimgs', 'VersionimgController');

Route::get('/annonceimgs/getAll', 'AnnonceimgController@getAll');
Route::apiResource('annonceimgs', 'AnnonceimgController');

Route::get('/annonces/getAll', 'AnnonceController@getAll');
Route::apiResource('annonces', 'AnnonceController');

Route::get('/commantaires/getAll', 'CommantaireController@getAll');
Route::apiResource('commantaires', 'CommantaireController');










Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



