<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class annonceimg extends Model
{
    protected $guarded = [];

    public function annonce()
    {
        return $this->belongsTo('App\annonce', 'id');
    }

    public function imga()
    {
        return $this->belongsTo('App\imga', 'id');
    }

}
