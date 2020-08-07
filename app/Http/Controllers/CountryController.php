<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\country;
class CountryController extends SuperController
{
    public function __construct(country $model)
    {
        parent::__construct($model);
    }

    public function getAll() // : Collection
    {
        $list = $this->_context
            ->orderBy('id', 'desc')
            // ->skip($startIndex)
            // ->take($pageSize)
            ->get()
            ;

        // $count = $this->_context->get()->count();

        return $list;
    }

}
