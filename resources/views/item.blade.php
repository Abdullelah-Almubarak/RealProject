@extends("layout")
@section("title")
@if(empty($product->product_name))
{{"title"}}
@else
{{$product->product_name}}
@endif
@endsection

@section("exCSS",asset("css/productInfo.css"))

@section("content")
    <div class="container">
        <div class="info" >
            <ul type="none" class="productDetails">
                <li class="tree"><p style="display: inline">{{Str::limit($product->product_name,22,"")}}</p><span>&#11164&#11164</span> <a href="/">المتجر</a></li>
                <li class="prodName">{{$product->product_name}}</li>
                <li class="prodPrice">{{$product->price}}</li>

                @if ($product->quantity>0 && $product->available)
                    <li class="prodQu avBoard">{{$product->quantity}} <span class="avaliable">:متوفر &#149</span></li>
                    @else
                    <li class="prodQu notAvBoard"><span class="notAvaliable">غير متوفر</span></li>
                @endif
                
                <li style="border: 1px solid white">fsgsgsgsgdsfsd</li>
                <li style="border: 1px solid white">grgergrgtrtrtrtrr</li>
            </ul>
            
        </div>

         <div class="info2">

            
            @foreach ($product_img as $img)
                
                <img src="{{asset("storage/$img->image_name")}}">
                {{-- <img src="{{asset("storage/$img->image_name")}}" alt="" class="zoom"> --}}
                @break
               
            @endforeach


            <div class="wrapper">
                <div class="slider ">
                    @foreach ($product_img as $img)
                    
                        <img src="{{asset("storage/$img->image_name")}}">                    
                    @endforeach

                    
                    
                </div>

                 <div id="arrows">
                        <p  class="next">
                            <span class="arrowImg right "></span>
                        </p>
                                
                        <p  class="prev">
                            <span class="arrowImg left"></span>
                        </p>
                </div>
              
            </div>

          
        </div>
        {{-- <div>
            @foreach ($product_img as $img)
                <img src="{{asset("storage/$img->image_name")}}" alt="img">
            @endforeach
        </div> --}}
        
        <div class="prodDesc">
            {{-- <p class="descInfo">الوصف</p> --}}
            <hr class="Descline">
            <p>{{$product->product_desc}}</p>
        </div>
    </div>

    <div class="mobZoom hide">
        <div class="mobSlider">
             @foreach ($product_img as $img)
                
                <img src="{{asset("storage/$img->image_name")}}">
                
               
            @endforeach
        </div>
    </div>

    <div class="mobIcons hide">
        <ul type="none">
            <li id="remove"><i class="fa fa-times" aria-hidden="true"></i></li>
            <li id="zoomIn"><i class="fa fa-search-plus" aria-hidden="true"></i></li>
            <li id="zoomOut"><i class="fa fa-search-minus" aria-hidden="true"></i></li>
        </ul>
    </div>

    @section("exJS",asset("js/itemInfo.js"))
@stop