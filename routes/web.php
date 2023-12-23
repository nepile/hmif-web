<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return Inertia::render('Home/HomeMain');
});

Route::get('/news', function () {
    return Inertia::render('News/NewsMain');
});

Route::get('/events', function () {
    return Inertia::render('Events/EventMain');
});

Route::get('/about', function () {
    return Inertia::render('AboutUs/AboutUsMain');
});
