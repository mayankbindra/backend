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


Route::get('configration', 'App\Http\Controllers\Api\ConfigurationController@index');
Route::get('configration/about', 'App\Http\Controllers\Api\ConfigurationController@about');
// Route::post('contact', 'App\Http\Controllers\Api\ConfigurationController@store');
Route::post('contact', 'App\Http\Controllers\Api\ContactController@store');