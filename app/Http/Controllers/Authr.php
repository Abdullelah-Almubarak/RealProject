<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Exception;
use Hash;
use Illuminate\Http\Request;
use Session;

class Authr extends Controller
{
    public function Login()
    {
        if(Auth::check())
        {
            return redirect("/");
        }
        return view("AuthAndAuthriz.Login");
    }

    public function LoginPost(Request $request)
    {
        if(Auth::check())
        {
            return redirect("/");
        }
        
        $request->validate([
            "username"=>"required",
            "password"=>"required"
        ]);

        try
        {
            $user=User::where("name","=",$request->username)->first();
            // $roleName=Role::Where
            if($user && Hash::check($request->password,$user->password))
            {
                Auth::login($user);
                if(Auth::check())
                {
                    Session::put("name",$user->name);
                    Session::put("role","Data Entry");
                    return redirect("/");

                    // return redirect("/");
                }
                
            }
            else
            {
                return redirect("/login")->with("error","اسم المستخدم و كلمة المرور غير صحيحة");
            }
        }
        catch(Exception)
        {
            return redirect("/login")->with("error","حدث خطأ حاول مرة اخرى في وقت لاحق");
        }
    }

    public function Register()
    {
        if(Auth::check())
        {
            return redirect("/");
        }
        return view("AuthAndAuthriz.Register");
    }

    public function RegisterPost(Request $request)
    {
        if(Auth::check())
        {
            return redirect("/");
        }
        

        $request->validate([
            "username"=>"required",
            "email"=>"required",
            "password"=>"required"
        ]);

        $user=new User();
        $user->name=$request->username;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->user_=Hash::make($request->password);
        try
        {
            
            $checkName=User::where('name','=',$user->name)->first();
            $checkEmail=User::where('email','=',$user->email)->first();
            if(!$checkName && !$checkEmail)
            {
                if($user->save())
                {
                    return redirect("/register")->with("success","تم تسجيلك بنجاح");
                    // return redirect(route("register"))->with("success",$checkName);
                }
                else
                {
                    return redirect("/register")->with("error","لم يتم تسجيلك بنجاح حاول مرة اخرى");
                }
            }
            else if($checkName)
            {
                return redirect("/register")->with("error","اسم المستخدم تم استخدامه");
            }
            else if($checkEmail)
            {
                return redirect("/register")->with("error","الايميل تم استخدامه");
            }

            
        }
        catch(Exception $e)
        {
            return redirect("/register")->with("error","حدث خطأ");
        }

    }

    public function Logout()
    {
        try
        {
            Auth::logout();
            Session::flush();
            return redirect("/");
        }
        catch(Exception $e)
        {
            return redirect("/")->with("error","Something Wrong Happend");
        }
        
    }
}