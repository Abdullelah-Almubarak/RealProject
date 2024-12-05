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
        return view("AuthAndAuthriz.Login");
    }

    public function LoginPost(Request $request)
    {
        $request->validate([
            "username"=>"required",
            "password"=>"required"
        ]);

        try
        {
            $user=User::where("name","=",$request->username)->first();
            if($user && Hash::check($request->password,$user->password))
            {
                Auth::login($user);
                if(Auth::check())
                {
                    Session::put("name",$user->name);
                    return redirect("/");
                }
                
            }
            else
            {
                return redirect("/login")->with("error","The username or password is wrong");
            }
        }
        catch(Exception)
        {
            return redirect("/login")->with("error","Somthing wrong happend");
        }
    }

    public function Register()
    {
        return view("AuthAndAuthriz.Register");
    }

    public function RegisterPost(Request $request)
    {
        $request->validate([
            "username"=>"required",
            "email"=>"required",
            "password"=>"required"
        ]);

        $user=new User();
        $user->name=$request->username;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        
        try
        {
            
            $checkName=User::where('name','=',$user->name)->first();
            $checkEmail=User::where('email','=',$user->email)->first();
            if(!$checkName && !$checkEmail)
            {
                if($user->save())
                {
                    return redirect("/register")->with("success","The user is created successfully");
                    // return redirect(route("register"))->with("success",$checkName);
                }
                else
                {
                    return redirect("/register")->with("error","The user not created try again later");
                }
            }
            else if($checkName)
            {
                return redirect("/register")->with("error","The username is alredy used");
            }
            else if($checkEmail)
            {
                return redirect("/register")->with("error","The Email is alredy used");
            }

            
        }
        catch(Exception $e)
        {
            return redirect("/register")->with("error","Something Wrong Happend");
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
        catch(Exception)
        {
            return redirect("/")->with("error","Something Wrong Happend");
        }
        
    }
}