<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    use HasFactory;

    public static function getRecords()
    {
        return Technology::select('id','name')->join('portfolio_to_technologies', 'id', 'technology_id')->where('status', 1)->groupBy('id')->get();
    }

}
