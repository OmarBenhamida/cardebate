<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class modele extends Model
{
    protected $guarded = [];

    public function marque()
    {
        return $this->belongsTo('App\marque', 'id');
    }

}
