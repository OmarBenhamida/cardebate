<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class commantaire extends Model
{
    protected $guarded = [];

    public function compte()
    {
        return $this->belongsTo('App\compte', 'id');
    }

}
