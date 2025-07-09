<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="{{asset("css/style.css")}}">
        <script src="{{asset("js/register.js")}}"></script>
        <script src="https://kit.fontawesome.com/2f94c7af09.js" crossorigin="anonymous"></script>
    </head>
    <body id="RegisterBody">
        <div class="container">
            <div id="RegisterForm">
                @if (session()->has("error"))
                    <h3 class="RegisterError">{{session()->get("error")}}</h3>
                @elseif (session()->has("success"))
                    <h3 class="RegisterSuc">{{session()->get("success")}}</h3>
                @endif
                    
                <div class="formHeader">
                    <h1>تسجيل 
                    </h1>
                    <hr>
                </div>
                <form id="Register" method="POST" action="{{route("Register.Post")}}">
                    @csrf
                    <label for="Username">اسم المستخدم<label for="Username" class="textReq">*</label></label>
                    <input type="text" name="username" placeholder="اسم المستخدم" id="Username">
                    
                    <label for="Email"> الايميل<label for="Email" class="textReq">*</label></label>
                    <input type="email" name="email" placeholder="الايميل" id="Email">

                    <label for="Pass">كلمة السر<label for="Pass" class="textReq">*</label></label>
                    <input type="password" name="password" placeholder="كلمة السر" id="Pass" >
                    <span id="eye"><i class="Eye"></i></span>
                    
                    <div class="btnDiv">
                        
                        <button type="submit" id="RegisterBtn">
                            دخول
                        </button>
                    </div>
                    <hr>
                    <div class="RegisterHelp">
                        <a href="/login">تسجيل دخول</a>
                        <p> لديك حساب؟</p>
                        
                        
                    </div>
                    
                </form>
            </div>

        </div>
        
        <script src="{{asset("js/register.js")}}"></script>
    </body>
</html>