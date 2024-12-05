<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authr;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/layout', function () {
    return view('layout');
});

Route::get("/login",[Authr::class,"Login"])->name("login");
Route::post("/login",[Authr::class,"LoginPost"])->name("Login.Post");

Route::get("/register",[Authr::class,"Register"])->name("register");
Route::post("/register",[Authr::class,"RegisterPost"])->name("Register.Post");

Route::get("/logout",[Authr::class,"logout"]);