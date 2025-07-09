<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="{{asset("css/style.css")}}">
        <script src="{{asset("js/login.js")}}"></script>
        <script src="https://kit.fontawesome.com/2f94c7af09.js" crossorigin="anonymous"></script>
    </head>
    <body id="LoginBody">
        <div class="container">
            <div id="LoginForm">
                @if (session()->has("error"))
                    <h3 class="LoginError">{{session()->get("error")}}</h3>
                @endif
                    
                <div class="formHeader">
                    <h1>تسجيل دخول 
                    </h1>
                    <hr>
                </div>
                <form id="Login" method="POST" action="{{route("Login.Post")}}">
                    @csrf
                    <label for="Username">اسم المستخدم<label for="Username" class="textReq">*</label></label>
                    <input type="text" name="username" placeholder="اسم المستخدم" id="Username">
                    

                    <label for="Pass">كلمة السر<label for="Pass" class="textReq">*</label></label>
                    <input type="password" name="password" placeholder="كلمة السر" id="Pass" >
                    <span id="eye"><i class="Eye"></i></span>
                    
                    <div class="btnDiv">
                        
                        <button type="submit" id="LoginBtn">
                            دخول
                        </button>
                    </div>
                    <hr>
                    <div class="LoginHelp">
                        <a>نسيت كلمة السر</a>
                        <a href="/register">تسجيل</a>
                        
                    </div>
                    
                </form>
            </div>

        </div>
        
        <script src="{{asset("js/login.js")}}"></script>
    </body>
</html>