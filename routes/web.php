<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return View::make('index');
});

Route::fallback(function (string $route) {

    if(begnWith($route, "") || begnWith($route, "admin") || begnWith($route, "auth")) {
        return View::make('index');
    }

    // return redirect('');
    // return view("notfound");
});


function begnWith($str, $begnString) {
    $len = strlen($begnString);
    return (substr($str, 0, $len) === $begnString);
}
