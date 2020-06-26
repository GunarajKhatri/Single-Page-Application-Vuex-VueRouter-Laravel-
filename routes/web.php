<?php

use Illuminate\Support\Facades\Route;

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

Route::get('{any}',function(){
	return view('test');
})->where('any','.*');

Route::post('/stds/create','StudentController@saving');
Route::post('/stds/show/data','StudentController@showing');
Route::delete('/stds/show/data/{id}','StudentController@deleting');
Route::patch('/stds/{id}/update','StudentController@updating');
