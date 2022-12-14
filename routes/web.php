<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', 'App\Http\Controllers\HomeController@index')->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/settings', 'App\Http\Controllers\ConfigurationController@index')->name('settings');
    Route::post('/settings', 'App\Http\Controllers\ConfigurationController@store')->name('saveSettings');
    Route::get('/resume', 'App\Http\Controllers\ConfigurationController@resumeIndex')->name('resume');
    Route::get('/about', 'App\Http\Controllers\ConfigurationController@aboutIndex')->name('about');
    Route::post('/portfolio/update/{id}', 'App\Http\Controllers\PortfolioController@update')->name('portfolio_update');
    Route::resource('/portfolio', 'App\Http\Controllers\PortfolioController');
    Route::post('/testimonials/update/{id}', 'App\Http\Controllers\TestimonialController@update')->name('testimonial_update');
    Route::resource('/testimonials', 'App\Http\Controllers\TestimonialController');
    Route::post('/technologies/update/{id}', 'App\Http\Controllers\TechnologyController@update')->name('technologies_update');
    Route::resource('/technologies', 'App\Http\Controllers\TechnologyController');
    Route::resource('/contacts', 'App\Http\Controllers\ContactController');
});


require __DIR__.'/auth.php';
