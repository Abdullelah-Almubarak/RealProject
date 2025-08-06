@extends("layout")
@section("title","Home Page")
@section("exCSS",asset("css/Home.css"))

@section("content")
    <div id="adsContainer">
        <div id="adsSlider-wraper">
            <div id="adsSlider">
                <a id="adI1">
                    <img  src="{{asset("storage/ProductImages/banner_ar_001_278_38775226.webp")}}" alt="image" title="big face" height="750">

                </a>
                <a id="adI2" >
                    <img src="{{asset("storage/ProductImages/banner_ar_001_320_89382959.webp")}}" alt="image" title="cirno" height="750">

                </a>
                <a id="adI3">
                    <img  src="{{asset("storage/ProductImages/banner_ar_001_326_56575682.JPEG")}}" alt="image" height="750">

                </a>
                <a id="adI4">
                    <img  src="{{asset("storage/ProductImages/banner_ar_001_330_88728218.webp")}}" alt="image" height="750">

                </a>
                <a id="adI5">
                    <img  src="{{asset("storage/ProductImages/banner_en_US_332_39616345.webp")}}" alt="image" height="750">

                </a>
                    


                    <div>
                        <a  class="next">
                            <span class="arrowImg right"></span>
                        </a>
                        
                        <a  class="prev">
                            <span class="arrowImg left"></span>
                        </a>
                    </div>

                    {{-- <img src="{{asset("storage/ProductImages/azmbgzj_460s.jpg")}}" alt="image" height="750"> --}}
                    {{-- <a class="arrowImg right"></a>
                    <a class="arrowImg left"></a> --}}
            </div>

            {{-- <div>
                <a  class="next">
                    <span class="arrowImg right"></span>
                </a>

                <a class="prev">
                    <span class="arrowImg left"></span>
                </a>
            </div> --}}
        </div>
      
    </div>
    
    {{-- <div class="item-container"> --}}
         <div class="items-shop" >
          {{-- <div>
            <img src="{{asset("storage\ProductImages\b4f8c7125fec5a56f171c2a8ccc25b72.jpg")}}" >
        </div> --}}


      
        {{-- <div > --}}
            {{-- <img src="{{asset("images/koishi.jpg")}}" >
        </div>

         <div>
            <img src="{{asset("storage\ProductImages\Ars.Almal.full.2782647.jpg")}}" >
        </div>

        <div>
            <img src="{{asset("storage\ProductImages\806442.png")}}" >
        </div>
 

      
        <div >
            <img src="{{asset("storage\ProductImages\Ars.Almal.full.2782647.jpg")}}" >
        </div>

         <div>
            <img src="{{asset("storage\ProductImages\806442.png")}}" >
        </div>
         --}}
        
         @foreach ($products as $product)
          <div>
             @foreach ($product_images as $images)
                 @if($images->product_id==$product->id)
                    <a href="item/{{$product->product_name}}">
                        
                        <img src="{{asset("storage/$images->image_name")}}" >
                        
                    </a>
                    
                    @break
                @endif
             @endforeach
              <ul class="bottom-border">
                    <li class="prname">
                        <a href="{{$product->product_name}}">
                            {{$product->product_name}}
                        </a>
                        </li>
                    <hr>    
                    <li class="pprice">
                        <img class="riyalSym" src="{{asset("images/Saudi_Riyal_Symbol-1.png")}}" alt="riyal_symbol" width="50">
                        {{$product->price}}
                    </li>
                    {{-- <br>
                    <hr>
                    <br> --}}
                    <hr>
                    <li class="paction">
                        {{-- <ul class="bottom-item">
                            <li><i class="fa fa-search" aria-hidden="true"></i></li>
                            <li><button>اضافة للسلة</button></li>
                            <li><i class="fa fa-heart-o" aria-hidden="true"></i></li>
                        </ul> --}}
                        
                            <ul class="bottom-item">
                                <li><i class="fa fa-search" aria-hidden="true"></i></li>
                                @if ($product->available==1)
                                    <li class="cart"><i class="fa fa-cart-plus" aria-hidden="true"></i></li>
                                @else
                                    <li class="cart"><i class="fa fa-bell-o" aria-hidden="true"></i></li>
                                @endif
                                
                                
                                <li><i class="fa fa-heart-o" aria-hidden="true"></i></li>
                            </ul>
                        
                    </li>
                    </ul>
                    
            </div>
            
         @endforeach
        {{-- <div>
            <a href="/">
                <img src="{{asset("storage\ProductImages\BG.png")}}" >
                
            </a>
            <ul>
                <li>Touhou</li>
                <li>
                    <a href="/">
                        Touhou Project
                    </a>
                </li>
                <li>ييي</li>
            </ul>
        </div>  --}}

        
    </div>
    {{-- </div> --}}

   

    @auth
    <h1 style="margin-bottom: 5000px;text-align: center">Hello {{session()->get("name")}}</h1>
    @else
    {{-- <h1 style="margin-bottom: 0px;text-align: center">You are not authorised. Now Koishi is watching now</h1> --}}
    <h1 style="margin-top: 25vh;text-align: center">أنت لست مصرح.الأن كويشي تراقبك</h1>
    {{-- <img style="margin: auto;display: block; margin-bottom: 900px;" src="{{asset("images/koishi.jpg")}}" alt="koishi" width="500"> --}}
    @endauth
    
    @section("exJS",asset("js/Home.js"))
@stop