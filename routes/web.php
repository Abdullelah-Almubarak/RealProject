<?php

// use App\Http\Controllers\Product;
use App\Http\Controllers\itemController;
use App\Http\Controllers\ProductCont;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authr;

Route::get('/', function () {
    if(session()->get("role")=="Data Entry")
    {
        return redirect("/DE");
    }

    $products= DB::table("product")->get();
    $product_images=DB::table("product_images")->get();
    return view('welcome',compact("products","product_images"));
});

Route::get("item/{product}",function(Product $product){
        // dd($products);
        // $item=DB::table("product")->get()->where("product_name","=",$product->product_name)->first();
        return view("item",compact("product"));
});

// Route::get("item/{product}",[itemController::class,"show"]);


Route::get("DE",function(){
    if(session()->get("role","Data Entry"))
    {
        return view("Market/DataEntry");
    }
    else
    {
        return view("/");

    }
})->middleware("auth");

// Route::get("AddProd",function(){
//     return view("Market/AddProd");
// });
// Route::get('home', function () {
//     return view('welcome');
// });

// Route::get('/layout', function () {
//     return view('layout');
// });

// Route::group(["middleware"=>["auth"]],function(){
//     Route::get('/', function () {
//         return view('welcome');
//     });

   
// });

Route::get("/addProd",[ProductCont::class,"addProduct"])->name("addProduct");
Route::post("/addProd",[ProductCont::class,"addProductPOST"])->name("addProduct.Post");

Route::get("/login",[Authr::class,"Login"])->name("login");
Route::post("/login",[Authr::class,"LoginPost"])->name("Login.Post");

Route::get("/register",[Authr::class,"Register"])->name("register");
Route::post("/register",[Authr::class,"RegisterPost"])->name("Register.Post");

Route::get("/logout",[Authr::class,"logout"]);