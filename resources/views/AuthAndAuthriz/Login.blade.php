<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="{{asset("BootstrapCSS/css/bootstrap.css")}}">
    </head>
    <body class="bg-dark">
        <div class="container w-25">
            <div class="container-fluid " style="padding-top: 50%;">
                @if(session()->has("error"))
                    <h4 class="text-danger d-flex justify-content-center">{{session()->get("error")}}</h4>
                @endif
                <div class="card border-1 ">
                    <div class="card-body ">
                        <form id="Login" method="POST" action="{{route("Login.Post")}}">
                            @csrf
                            <label class="text-bold h3 d-flex justify-content-center d-block mb-5">LOGIN</label>
                            
                            <div class="mb-3">
                                <label for="username" class="fw-bolder">username</label>
                                <input class="bg-black w-100" name="username" required autocomplete="false">
                            </div>
                            
                            <div class="mb-3">
                                <label for="password" class="fw-bolder">password</label>
                                <input class="bg-black w-100" name="password" type="password" required>
                            </div>  

                            <div class="mb-3 d-flex justify-content-center">
                                <button type="submit" class="btn btn-outline-dark">Login</button>
                            </div>
                            
                            <div class="mb-3 d-flex justify-content-center">
                                <h6>Don't have an account? <a class="link-info" href="/register">Sign UP</a> </h6>
                            </div>    
                        </form>  
                    </div>    
                </div>
            </div>
        </div>
    </body>        
</html>