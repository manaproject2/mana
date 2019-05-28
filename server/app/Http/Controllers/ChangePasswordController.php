<?php

namespace app\Http\Controllers;

use Symfony\Component\HttpFoundation\Request;
use app\User;
use app\http\Requests\ChangePasswordRequest;
use app\http\Controllers\ChangePasswordController;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;




class ChangePasswordController extends Controller
{
  
   public function process(ChangePasswordRequest $request)
   {
       //return $this->getPasswordResetTableRow($request)->get();
       return $this->getPasswordResetTableRow($request)->count()> 0 ? $this->changePassword($request) : $this->tokenNotFoundResponse();
   }
   
   private function tokenNotFoundResponse()
   {
       return response()->json([
       'error' => 'Token or Email is incorrect'
    ], Response::HTTP_NOT_FOUND);

   }
   
   private function getPasswordResetTableRow($request)
   {
         
    return DB::table('password_resets')->where(['email' =>$request->email, 'token'
    =>$request->resetToken]);
   }
    
   public function changePassword($request)
   {
       $user = User::whereEmail($request->email)->first();
       //return $user;
       $user->update(['password'=>$request->password]);
       $this->getPasswordResetTableRow($request)->delete();
       return response()->json([
        'data '=> 'Password Succesfully Changed'
    ],Response::HTTP_CREATED);

    

    }
}
