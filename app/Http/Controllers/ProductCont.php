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

class ProductCont extends Controller
{
    public function addProduct()
    {
        if(Auth::check())
        {
            if(Session::get("role")=="Data Entry")
            {
                return view("Market.AddProd");
            }
            else
            {
                return redirect("/");
            }
        }
        else
        {
            return redirect("/login");
        }
    }

    public function addProductPOST(Request $request)
    {
         if(Auth::check())
        {
            if(Session::get("role")=="Data Entry")
            {
                $request->validate([
                    "prodName"=>"required",
                    "prodQU"=>"required",
                    "prodPrice"=>"required",
                    // "prodImage"=>"required",
                    "prodDesc"=>"required",
                    "avButton"
                ]);

                // $request->session()->put("prodName",$request->prodName);
                // $data=[
                //     "prodName"=>$request->prodName,
                //     "prodQU"=>$request->prodQU,
                //     "prodPrice"=>$request->prodPrice,
                //     "prodImage"=>$request->prodImage,
                //     "prodDesc"=>$request->prodDesc
                // ];

                try
                {
                    $product=new Product();
                    $product->product_name=$request->prodName;
                    $checkProdName=Product::where("product_name","=",$request->prodName)->first();
                    $product->quantity=$request->prodQU;
                    $product->price=$request->prodPrice;
                    $product->product_desc=$request->prodDesc;
                    // $product->product_image=$request->file('prodImage')->getClientOriginalName(); //Must changed
                    $product->available=0;
                    if(isset($request->avButton))
                    {
                         $product->available=1;
                    }
                    $product->created_at=now();
                    $product->updated_at=now();
                    
                    $product->product_num=rand(1000,999999);
                    
                    while(true)
                    {
                        $checkProdNum=Product::where("product_num","=",$product->product_num)->first();
                        if($checkProdNum)
                        {
                            $product->product_num=rand(9999,999999);
                            continue;
                        }
                        else
                        {
                            break;
                        }
                    }

                    $randomG=random_bytes(32);
                    $randomHex=bin2hex($randomG);
                    $product->product_=Hash::make($randomHex);
                    while(true)
                    {
                        $checkProd_=Product::where("product_","=",$product->product_)->first();
                        if($checkProd_)
                        {
                            $randomG=random_bytes(32);
                            $randomHex=bin2hex($randomG);
                            $product->product_=Hash::make($randomHex);
                            continue;
                        }
                        else
                        {
                            break;
                        }
                    }

                    
                    

                    if($checkProdName)
                    {
                        // return redirect("/addProd")->with("error","تمت اضافة المنتج سابقا");
                        return response()->json(["error"=>"تمت اضافة المنتج سابقا"]);
                    }
                    elseif( $request->prodQU <=0)
                    {
                        // return redirect("/addProd")->with("error","كمية المنتج اصغر من او يساوي صفر");
                        return response()->json(["error"=>"كمية المنتج اصغر من او يساوي صفر"]);
                    }
                    elseif($request->prodPrice <=0)
                    {
                        
                        // return redirect("/addProd")->with("error","قيمة المنتج اصغر من او يساوي صفر");
                        return response()->json(["error"=>"قيمة المنتج اصغر من او يساوي صفر"]);
                    }

                    
                   

                    if($product->save())
                    {   
                        $files=$request->file("prodImage"); 
                        // dd($files);
                        if($request->hasFile("prodImage"))
                        {
                            // $files = $request->file("prodImage");
                            // $count=$request->file();
                            // dd($count);
                            $x=count($files);
                            $z=0;
                            foreach($files as $file)
                            {
                                $z=$z+1;
                                if($z>$x)
                                {
                                    break;
                                }
                                elseif($z<=$x)
                                {
                                     $prodImages=new Product_images();
                                    // $fileN=$request->file("prodImage",$request)->store("ProductImages","public");
                                    $fileN=$file->store("ProductImages","public");
                                    $prodImages->product_id=$product->id;
                                    $prodImages->image_name=$fileN;
                                    $prodImages->created_at=now();
                                    $prodImages->updated_at=now();
                                }
                               
                                // $prodImages->save();


                                try
                                {
                                    if($prodImages->save())
                                    {
                                        // return redirect("/addProd")->with("success","تم اضافة المنتج بنجاح");
                                        if($z!=$x)
                                        {
                                            continue;
                                        }
                                        // return redirect("/addProd")->with("success",$x);
                                        // return redirect("/addProd")->with("success","تم اضافة المنتج بنجاح");
                                        return response()->json(["success"=>"تم اضافة المنتج بنجاح"]);
                                    }
                                    else
                                    {
                                        $productDel=Product::where("id","=",$product->id)->first();
                                        if($productDel->delete())
                                        {
                                            // return redirect("/addProd")->with("error","لم يتم اضافة المنتج ");
                                            return response()->json(["error"=>"لم يتم اضافة بسبب لم يتم حفظ صور المنتج "]);
                                        }
                                    }
                                }
                                catch(Exception $e)
                                {
                                    $productDel=Product::where("id","=",$product->id)->first();
                                    if($productDel->delete())
                                    {
                                        // return redirect("/addProd")->with("error","لم يتم اضافة المنتج ");
                                        return response()->json(["error"=>"حدث خطأ"]);
                                    }
                                }

                            }
                          
                            
                            
                        }
                        else
                        {
                            $productDel=Product::where("id","=",$product->id)->first();
                            if($productDel->delete())
                            {
                                // return redirect("/addProd")->with("error","لم يتم اضافة المنتج ");
                                return response()->json(["error"=>"لم يتم اضافة بسبب لا يوجد صور للمنتج "]);
                            }
                        }
                        // return redirect("/addProd")->with("success", $fileN);
                        
                    }
                    else
                    {
                        // return redirect("/addProd")->with("error","لم يتم اضافة المنتج ");
                        return response()->json(["error"=>"لم يتم اضافة المنتج ولم يتم حظ الصور"]);
                    }
                }
                catch(Exception $e)
                {
                    // return redirect("/addProd")->with("error",$e);
                    return response()->json(["error"=>"حدث خطأ"]);
                }
            }
            else
            {
                return redirect("/");
            }
        }
        else
        {
            return redirect("/login");
        }
    }
}
