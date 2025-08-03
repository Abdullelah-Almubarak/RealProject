<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\product_image;
use App\Models\Product_images;
use Auth;
use Carbon\Traits\ToStringFormat;
use DB;
use Exception;
use Hash;
use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Session;
use Symfony\Component\Console\Input\Input;

class itemController extends Controller
{
    public function show($id)
    {
        // dd($product);
        $product=Product::findOrFail($id);
        return view("item",compact("product"));
    }
}