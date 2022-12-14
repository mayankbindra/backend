<?php

namespace App\Http\Controllers\Api;

use App\Models\Configuration;
use Illuminate\Http\Request;
use App\Models\Testimonial;
use App\Models\Technology;
use App\Models\Portfolio;


class ConfigurationController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $config = Configuration::get()->pluck('value', 'name');

        if($config['BG_IMAGE'])
        {
            $config['BG_IMAGE'] =  url('/uploads/settings/'. $config['BG_IMAGE']);
        }
        if($config['ABOUT_SECTION_IMAGE'])
        {
            $config['ABOUT_SECTION_IMAGE'] =  url('/uploads/about/'. $config['ABOUT_SECTION_IMAGE']);
        }
        $record['config'] = $config;
        $record['path'] =  url('/uploads/');
        switch($request['page']){
            case 'about':
                $record['testimonial'] = Testimonial::orderByDesc('id')->where('status', 1)->get();
            break;
            case 'technologies':
                $record['technologies'] = Technology::orderByDesc('id')->where('status', 1)->get();
            break;
            case 'portfolio':
                $record['portfolio'] = Portfolio::getRecords();
                $record['technologies'] = Technology::getRecords();
            break;
        }
        return [
            "status" => 200,
            "data" => $record
        ];
    }
  
}
