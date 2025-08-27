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
            <div class="prodType">
                <label>نوع المنتج<span style="color: red">*</span></label>
            </div >

           
            <fieldset class="parts">
            <legend>قطع الكمبيوتر</legend>

                 <label for="gpus" >
                    كرت شاشة
                    <input type="radio" name="type" id="gpus">
                </label>

                <label for="cpus">
                    معالج
                    <input type="radio" name="type" id="cpus">
                </label>

                 <label for="rams" >
                    الرام
                    <input type="radio" name="type" id="rams">
                </label>

                <label for="storage">
                    التخزين
                    <input type="radio" name="type" id="storage">
                </label>

                 <label for="motherboards" >
                    المذربورد
                    <input type="radio" name="type" id="motherboards">
                </label>

                <label for="coolers">
                    المبرد
                    <input type="radio" name="type" id="coolers">
                </label>

                 <label for="psu" >
                    باورسبلاي
                    <input type="radio" name="type" id="psu">
                </label>

                <label for="cases">
                    الكيسات
                    <input type="radio" name="type" id="cases">
                </label>

                 <label for="fans" >
                    المراوح
                    <input type="radio" name="type" id="fans">
                </label>

            </fieldset>
            

             <fieldset class="acco">
            <legend>ملحقات الكمبيوتر</legend>

                 <label for="monitors" >
                    شاشة
                    <input type="radio" name="type" id="monitors">
                </label>

                <label for="tables">
                    طاولة
                    <input type="radio" name="type" id="tables">
                </label>

                 <label for="chairs" >
                    كرسي
                    <input type="radio" name="type" id="chairs">
                </label>

                <label for="mouses">
                    ماوس
                    <input type="radio" name="type" id="mouses">
                </label>

                 <label for="keyboards" >
                    كيبورد
                    <input type="radio" name="type" id="keyboards">
                </label>

                <label for="mousepads">
                    ماوس باد
                    <input type="radio" name="type" id="mousepads">
                </label>

                 <label for="headphones" >
                    سماعة
                    <input type="radio" name="type" id="headphones">
                </label>

                <label for="microphones">
                    مايكروفون
                    <input type="radio" name="type" id="microphones">
                </label>

                 <label for="RGPLights" >
                    اضائة
                    <input type="radio" name="type" id="RGPLights">
                </label>

            </fieldset>

            <div class="sel">

                <label for="gpuSize">
                    حجم الذاكرة
                    <input type="number" id="gpuSize" min="1">
                    <span>GB</span>
                </label>
                
                <div id="gpuCompany">
                    
                        <input type="text" placeholder="-- الشركة --" id="compVal" readonly>
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                   

                    <div id="compList" class="hide">
                        <input type="text" id="companySearch">
                        <p>-- الشركة --</p>
                    </div>
                </div>

{{-- 
                <select name="" id="gpuCompany">
                    
                    <option value="">-- الشركة --</option>
                    <option value="nvidia">Nvidia</option>
                </select> --}}

                <select name="" id="gpuBrand">
                    <option value="">-- البراند --</option>
                </select>

            </div>
            

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