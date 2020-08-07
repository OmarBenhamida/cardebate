<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\compte;
class CompteController extends SuperController
{
    public function __construct(compte $model)
    {
        parent::__construct($model);
    }

   

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'passwd' => 'required',
            //'role' => 'required'
        ]);

        // $request->email
        $email = $request->get('email');
        $passwd = $request->get('passwd');
        //$role = $request->get('role');


        $user = $this->_context
            ->where('email', $email)
            ->first()
            ;

        if ($user == null) {
            return [
                'code' => -1 ];
        } else if ($user->passwd != $passwd) {
            return ['code' => 0];
        // } else if ($user->role != 'admin') {
        //     return ['code' => 1];
         }

     
    return ['code' => 1, 'user' => $user];



    }
}
