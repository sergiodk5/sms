<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard')->middleware('auth', 'verified');

Route::get('dashboard/swimmers')->name('dashboard.swimmers')->uses('App\Http\Controllers\SwimmersController@index')->middleware('auth', 'verified');
Route::get('dashboard/swimmers/create')->name('dashboard.swimmers.create')->uses('App\Http\Controllers\SwimmersController@create')->middleware('auth', 'verified');
Route::post('dashboard/swimmers')->name('dashboard.swimmers.store')->uses('App\Http\Controllers\SwimmersController@store')->middleware('auth', 'verified');
Route::get('dashboard/swimmers/{swimmer}/edit')->name('dashboard.swimmers.edit')->uses('App\Http\Controllers\SwimmersController@edit')->middleware('auth', 'verified');
Route::post('dashboard/swimmers/{swimmer}')->name('dashboard.swimmers.update')->uses('App\Http\Controllers\SwimmersController@update')->middleware('auth', 'verified');
Route::delete('dashboard/swimmers/{swimmer}')->name('dashboard.swimmers.destroy')->uses('App\Http\Controllers\SwimmersController@destroy')->middleware('auth', 'verified');
Route::put('dashboard/swimmers/{swimmer}/restore')->name('dashboard.swimmers.restore')->uses('App\Http\Controllers\SwimmersController@restore')->middleware('auth', 'verified');

Route::get('dashboard/competitions')->name('dashboard.competitions')->uses('App\Http\Controllers\CompetitionsController@index')->middleware('auth', 'verified');
Route::get('dashboard/competitions/create')->name('dashboard.competitions.create')->uses('App\Http\Controllers\CompetitionsController@create')->middleware('auth', 'verified');
Route::post('dashboard/competitions')->name('dashboard.competitions.store')->uses('App\Http\Controllers\CompetitionsController@store')->middleware('auth', 'verified');
Route::get('dashboard/competitions/{competition}/edit')->name('dashboard.competitions.edit')->uses('App\Http\Controllers\CompetitionsController@edit')->middleware('auth', 'verified');
Route::put('dashboard/competitions/{competition}')->name('dashboard.competitions.update')->uses('App\Http\Controllers\CompetitionsController@update')->middleware('auth', 'verified');
Route::delete('dashboard/competitions/{competition}')->name('dashboard.competitions.destroy')->uses('App\Http\Controllers\CompetitionsController@destroy')->middleware('auth', 'verified');
Route::put('dashboard/competitions/{competition}/restore')->name('dashboard.competitions.restore')->uses('App\Http\Controllers\CompetitionsController@restore')->middleware('auth', 'verified');
Route::get('dashboard/competitions/{competition}')->name('dashboard.competitions.show')->uses('App\Http\Controllers\CompetitionsController@show')->middleware('auth', 'verified');

require __DIR__ . '/auth.php';
