<?php

namespace App\Http\Controllers;

use App\Models\Configuration;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Helper\Imageable;
use File;

class ConfigurationController extends Controller
{
    use Imageable;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $config = Configuration::get()->pluck('value', 'name');
        return Inertia::render('Setting', compact('config'));
    }
   

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        foreach($input as $key => $value){
            $exist = Configuration::where('name', $key)->first();
            if($key == "IMAGE" && $request->file('IMAGE')) {
               $value = $this->uploadImage($value, $exist, 'settings');
            }
            if($key == "BG_IMAGE" && $request->file('BG_IMAGE')) {
               $value = $this->uploadImage($value, $exist, 'settings');
            }
            if($key == "RESUME" && $request->file('RESUME')) {
               $value = $this->uploadImage($value, $exist, 'settings');
            }
            if($key == "ABOUT_SECTION_IMAGE" && $request->file('ABOUT_SECTION_IMAGE')) {
               $value = $this->uploadImage($value, $exist, 'about');
            }
            if($exist){
                Configuration::where('name', $key)->update(['value' => $value]);
            }else{
                Configuration::insert(['name' => $key, 'value' => $value]);
            }
        }
       return redirect()->back();
    }

 
    private function uploadImage($image, $exist, $folder)
    {
        if($exist && !empty($exist->value)){
            $image_path = public_path('uploads/'.$folder.'/'.$exist->value);
            if(File::exists($image_path)) {
                File::delete($image_path);
            }
        }
        return $this->storeMedia($image, $folder);
        
    }
    public function resumeIndex()
    {
        $config = Configuration::whereIn('name', ['RESUME_SECTION_TITLE', 'RESUME_SECTION_CONTENT', 'RESUME_SECTION_DISABLED'])->get()->pluck('value', 'name');
        return Inertia::render('Resume', compact('config'));
    }


    public function aboutIndex()
    {
        $config = Configuration::whereIn('name', ['ABOUT_SECTION_TITLE', 'ABOUT_SECTION_CONTENT', 'ABOUT_SECTION_IMAGE', 'ABOUT_SECTION_DISABLED'])->get()->pluck('value', 'name');
        return Inertia::render('About', compact('config'));
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Configuration $configuration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Configuration  $configuration
     * @return \Illuminate\Http\Response
     */
    public function destroy(Configuration $configuration)
    {
        //
    }
}
