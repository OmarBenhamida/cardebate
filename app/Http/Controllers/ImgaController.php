<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\imga;
class ImgaController extends SuperController
{
    public function __construct(imga $model)
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
