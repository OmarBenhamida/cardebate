<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class marque extends Model
{
    protected $guarded = [];

    public function country()
    {
        return $this->belongsTo('App\country', 'id');
    }

}
