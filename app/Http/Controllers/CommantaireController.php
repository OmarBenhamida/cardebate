<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\commantaire;

class CommantaireController extends SuperController
{
    public function __construct(commantaire $model)
    {
        parent::__construct($model);
    }

    public function getAll() // : Collection
    {
        $list = $this->_context
            ->orderBy('id', 'desc')
            // ->skip($startIndex)
            // ->take($pageSize)
            ->with(['compte'])
            ->get()
            ;

        // $count = $this->_context->get()->count();

        return $list;
    }
}
