<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        {{-- <link rel="stylesheet" type="text/css" href="{{asset("BootstrapCSS/css/bootstrap.css")}}"> --}}
        <link rel="stylesheet" type="text/css" href="{{asset("css/style.css")}}">
        <link rel="icon" href="{{asset("images/gamer-room-transparent_optimized.png")}}">
        <link rel="stylesheet" type="text/css" href=@yield("exCSS")>

        <script src="https://kit.fontawesome.com/2f94c7af09.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
       <title>@yield('title')</title>
    </head>
    {{-- <header class="nav navbar bg-dark pb-4">
        <a class="nav-link text-white d-flex justify-content-center d-block " href="/login">Login</a>
    </header>     --}}
    
    @if (session()->get("role")==null)
        <header>
    @else
        <header id="auth">
    @endif
   
        
        <ul type="none" id="navLinksLeft">
            @auth
            <li id="profile"><a class="icon"  style=""><i class="fa-solid fa-circle-user" ></i></a>
            <ul type="none" class="profMen">
                <li>{{session()->get("name")}}</li>
                <li>ss</li>
                <hr style=" width: 98%; position: relative;">
                <li><a href="/logout">تسجيل خروج <i class="fa fa-sign-out" aria-hidden="true"></i>
                </a></li></ul></li>
            @else
                <li><a href="/register">حساب جديد <i class="bi bi-person-plus-fill"></i></a></li>
                <li><a href="/login" >دخول <i class="bi bi-box-arrow-in-right"></i></a></li>
            @endauth
            
            
            @if (session()->get("role")==null)
                <li><a class="icon"><i class="fa fa-shopping-cart"></i></a></li>
                {{-- <li><a class="icon" id="searchIcon"><i class="bi bi-search"></i></a></li> --}}
            @endif
               
            
        </ul>
        
        @if (session()->get("role")==null)
            <ul id="searchHeader2">
                <li>
                    <form action="" id="searchFormHeader2">
                        <i class="fa fa-search" aria-hidden="true" id="searchIconHeader2"></i>
                        <input type="text" id="searchHeaderInput2" autocomplete="off">
                        <i class="fa fa-times" aria-hidden="true" id="clearSearchHeader2"></i>
                    </form>
                </li>
            </ul>
        @endif
        
        

        <ul type=none id="navLinksRight" >
                {{-- <li><a  class="icon" id="bars"><i class="fa fa-bars"></i></a></li> --}}
                <li><a href="/" class="imageLink"><img src="{{asset("images/gamer-room-transparent_optimized.png")}}" height="36" width="144" ></a></li>
                @if (session()->get("role")==null)
                    <li><a  class="icon">تجميعات</a></li>
                    <li><a  class="icon">لابتوب</a></li>
                    <li id="parts"><a  class="icon" ><i style="font-size: 0.6rem" class="fa fa-chevron-down  fa-2x" aria-hidden="true"></i> قطع الكمبيوتر </a>
                    <ul type="none" class="pcParts">
                        {{-- <li><span class="gpu">◄</span> كروت شاشة</li>
                        <li><span class="cpu">◄</span>المعالجات</li>
                        <li><span class="ram">◄</span>الرامات</li>
                        <li><span class="moth">◄</span>مذربورد</li>
                        <li><span class="pws">◄</span>باورسبلاي</li>
                        <li><span class="str">◄</span>التخزين</li> --}}

                        <li>كروت شاشة
                            <ul class="ex" type="none">
                                <li>Nvidia كروت شاشة</li>
                                <li>AMD كروت شاشة</li>
                            </ul>
                        </li>
                        <li>المعالجات
                            <ul class="exc" type="none">
                                <li>Intel معالجات</li>
                                <li>AMD معالجات</li>
                            </ul>
                        </li>
                        <li >الرامات
                            <ul class="exr" type="none">
                                <li>DDR4</li>
                                <li>DDR5</li>
                            </ul>
                        </li>
                        <li >التخزين
                            <ul class="exs" type="none">
                                <li>HDD</li>
                                <li>SSD</li>
                                <li>M.2</li>
                            </ul>
                        </li>
                        <li>المذربورد
                            <ul class="exm" type="none">
                                <li>Intel مذربوردات</li>
                                <li>AMD مذربوردات</li>
                            </ul>
                        </li>
                        <li class="cc">مبردات
                            <ul class="exf" type="none">
                                <li>مبرد هوائي</li>
                                <li>مبرد مائي</li>
                            </ul>
                        </li>
                        <li>باورسبلاي
                             <ul class="expo" type="none">
                                <li>Modular</li>
                                <li>Non-Modular</li>
                            </ul>
                        </li>
                    </ul></li>
                    <li><a  class="icon"><i style="font-size: 0.6rem" class="fa fa-chevron-down" aria-hidden="true"></i> ملحقات الكمبيوتر</a></li>
                    @endif
            </ul>
           
    </header>

    {{-- <div class="searchHeader" id="searchHeader">
        <div class="searchDiv">
            <input placeholder="أبحث عن ..." id="searchHeaderInput">
        </div>
        
    </div> --}}
    {{-- <div id="shadow">
        <p></p>
    </div>  --}}
    {{-- <div class="sideBar">
        <div class="searchBar">
            <input id="searchSide" placeholder="ابحث عن ...">
           <p class="p-hide" id="clearSearchSide"><i class="fa-solid fa-xmark"></i></i></p>
        </div>
        <p style="">haa</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">end</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p> 
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">mmdddddd</p>
        <p style="">END</p>
    </div> --}}
    
    <body>
         
        @yield("content")
        <script src="{{asset("js/main.js")}}"></script> 
        <script src=@yield("exJS")></script> 
    </body>

    <footer>
        <ul type="none" id="navLinks">
            <li><a href="https://www.youtube.com/watch?v=ylSwcPdDBk0" target="blank">Made By</a></li>
           
        </ul>
    </footer>
           
</html>    