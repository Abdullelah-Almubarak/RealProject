@extends("layout")
@section("title","Add Products")
@section("exCSS",asset("css/Products.css"))


@section("content")
{{-- <h1 class="info" style="color: rgb(105, 255, 105)">تمت الاضافة</h1> --}}
@if (session()->has("success"))
        <h1 class="success">{{session()->get("success")}}</h1>
    @elseif (session()->has("error"))
        <h1 class="error">{{session()->get("error")}}</h1>        
    @endif
    {{-- <h1 class="error">ddd</h1>    --}}
<div class="addProd">
    
    
    <h1>اضافة المنتجات</h1>
        {{-- <img src="{{ asset("storage") }}/{{session()->get("image")}}" alt="kawaii" width="250"> --}}
        <form action="{{route("addProduct.Post")}}" id="addProduct" class="container" method="POST" enctype="multipart/form-data">
            @csrf
            <label for="prodName">اسم المنتج<span style="color: red">*</span></label>
            <input type="text" id="prodName" name="prodName" placeholder="مثال: مذربورد ASUS Z790" >

            <hr>

            <label for="prodQU">كمية المنتج<span style="color: red">*</span></label>
            <input type="number" id="prodQU" name="prodQU" placeholder="مثال: 25"  step="1">

            <hr>

            <label for="prodPrice">قيمة المنتج<span style="color: red">*</span></label>
            <input type="number" id="prodPrice" name="prodPrice" placeholder="مثال:35.99" >

            <hr>

            <label for="prodImage" class="dropImage">
                {{-- <i class="fa fa-upload" aria-hidden="true"></i> --}}
                صور المنتج</label>
            {{-- <p class="dropImage">drop images</p> --}}
            <input type="file" id="prodImage" name="prodImage[]" multiple >

            
          {{-- <div>
            <div id="eternalDivImg">
                <img src="{{asset("storage/ProductImages/jorWmz45cKtN7SJumxLyAZPd1e7C5HvE9Y4EjJzs.png")}}" alt="" width="304" height="304">
                <i class="fa fa-times xIcon" aria-hidden="true"></i>
            </div>

            <div id="eternalDivImg">
                <img src="{{asset("storage/ProductImages/8GRnqM4eAEGqwzfxmk6qRIS1nFu02PWv4NvLjH6a.jpg")}}" alt="" width="304" height="304">
                <i class="fa fa-times xIcon" aria-hidden="true"></i>
            </div>
            
          </div>  --}}
            
            <hr>

            <label for="prodDesc">وصف المنتج<span style="color: red">*</span></label>
            <textarea name="prodDesc" id="prodDesc" cols="20" rows="8" placeholder="مثال: نوع السوكت LGA 1151 
SATA x5
M.2 x2
RAM x4"></textarea>


            <hr>

            <label for="avButton">اتاحة المنتج<span style="color: red">*</span>
                <input type="checkbox" id="avButton" name="avButton" >
            </label>
            
            <hr>

            <button type="submit">اضافة</button>
        </form>
       
</div>
@section("exJS",asset("js/addProd.js"))
@endsection