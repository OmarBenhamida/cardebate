<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class annonce extends Model
{
    protected $guarded = [];

    public function compte()
    {
        return $this->belongsTo('App\compte', 'id');
    }

}
