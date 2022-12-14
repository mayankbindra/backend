<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Technology;
use App\Models\PortfolioToTechnology;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Helper\Imageable;
use Carbon\Carbon;

class PortfolioController extends Controller
{
    use Imageable;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolio = Portfolio::with('technologies')->orderByDesc('id')->paginate(10);
        $technology = Technology::where('status', 1)->orderByDesc('id')->get();
        return Inertia::render('Portfolio/Listing', compact('portfolio','technology'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Portfolio/Form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->except('technologies');
        if($request->file('image')) {
            $input['image'] = $this->uploadImage($request->file('image'), '', 'Portfolio');
         }
        
        $input['created_at'] = Carbon::now();
        $record = Portfolio::create($input);
         foreach(explode(',',$request['technologies']) as $technologyId){
            PortfolioToTechnology::insert([
                'portfolio_id' => $record->id,
                'technology_id' => $technologyId,
            ]);
         }
        return redirect()->back();
    }

    private function uploadImage($image, $exist, $folder)
    {
        if($exist && !empty($exist->image)){
            $image_path = public_path('uploads/'.$folder.'/'.$exist->image);
            if(File::exists($image_path)) {
                File::delete($image_path);
            }
        }
        return $this->storeMedia($image, $folder);
        
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Portfolio  $Portfolio
     * @return \Illuminate\Http\Response
     */
    public function show(Portfolio $Portfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Portfolio  $Portfolio
     * @return \Illuminate\Http\Response
     */
    public function edit(Portfolio $Portfolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Portfolio  $Portfolio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $input = $request->except('created_at', 'updated_at');
        if($request->file('image')) {
            $input['image'] = $this->uploadImage($request->file('image'), '', 'Portfolio');
         }
         
         $input['updated_at'] = Carbon::now();
        Portfolio::where('id', $id)->update($input);
       return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Portfolio  $Portfolio
     * @return \Illuminate\Http\Response
     */
    public function destroy(Portfolio $Portfolio)
    {
        $Portfolio->delete();
        return redirect()->back();
    }
}
