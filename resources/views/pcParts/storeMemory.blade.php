@extends("layout")
@section("exCSS",asset("css/productsMenu.css"))
@section("title","التخزين")

@section("content")

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
             {{-- {{$product->product_id}} --}}

             @foreach ($product_images as $images)
                 @if($images->product_id==$product->product_id)
                    <a href="item/{{$product->product_name}}">

                        <img src="{{asset("storage/$images->image_name")}}" >

                    </a>

                    @break
                @endif
             @endforeach
              <ul class="bottom-border">
                    <li class="prname">
                        <a href="item/{{$product->product_name}}">
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
@stop
