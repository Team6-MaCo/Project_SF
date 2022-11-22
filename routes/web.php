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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('scenes/dashboard/index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->prefix('board')->controller(BoardController::class)->group(function (){
//     Route::get('/', 'index')->name('board.index');
//     Route::post('/', 'store')->name('board.write_confirm');
//     Route::get('write','create')->name('board.write');
//     Route::get('{id}','show')->name('board.post');
//     Route::get('{id}/edit','edit')->name('board.edit');
//     Route::put('{id}','update')->name('board.update');
//     Route::delete('{id}','destroy')->name('board.delete');
// });

// Route::middleware('auth')->controller(UserController::class)->group(function (){
//     Route::get('/userpage', 'index')->name('userpage');
// });

// ==================================================
// Route::get('/calendar', function () {
//     return Inertia::render('/scenes/calendar/calendar.jsx');
// })->middleware(['auth', 'verified'])->name('calendar');
Route::get('/calendar', function () {
    return Inertia::render('scenes/calendar/calendar');
})->name('calendar');


// ==================================================
require __DIR__.'/auth.php';
