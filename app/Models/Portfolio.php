<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;
    
    protected $table = 'portfolio';
    protected $fillable = ['id','title','image','link', 'alt', 'redirect', 'status'];


    public function technologies()
    {
        return $this->hasMany(PortfolioToTechnology::class)->join('technologies', 'id', 'technology_id');
    }
    public static function getRecords()
    {
        return Portfolio::where('status', 1)->orderBy('id', 'DESC')->with('technologies:name,technology_id,portfolio_id')->get();
    }
}

