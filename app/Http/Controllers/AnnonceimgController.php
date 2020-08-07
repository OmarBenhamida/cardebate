<?php

namespace App\Http\Controllers;

use App\annonce;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\annonceimg;

class AnnonceimgController extends SuperController
{
    public function __construct(annonceimg $model)
    {
        parent::__construct($model);
    }

    public function getAll() // : Collection
    {
        $list = $this->_context
            ->orderBy('id', 'desc')
            // ->skip($startIndex)
            // ->take($pageSize)
            ->with(['annonce','imga'])
            ->get()
            ;

        // $count = $this->_context->get()->count();

        return $list;
    }
}
