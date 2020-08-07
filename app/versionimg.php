<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class versionimg extends Model
{
    protected $guarded = [];

    public function version()
    {
        return $this->belongsTo('App\version', 'id');
    }

    public function imgv()
    {
        return $this->belongsTo('App\imgv', 'id');
    }

}
