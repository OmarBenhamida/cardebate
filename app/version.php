<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class version extends Model
{
    protected $guarded = [];

    public function carburant()
    {
        return $this->belongsTo('App\carburant', 'id');
    }

    public function transmission()
    {
        return $this->belongsTo('App\transmission', 'id');
    }

    public function carousserie()
    {
        return $this->belongsTo('App\carousserie', 'id');
    }

    public function model()
    {
        return $this->belongsTo('App\model', 'id');
    }




}
