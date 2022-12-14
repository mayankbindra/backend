<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Helper\Imageable;
use Carbon\Carbon;

class TestimonialController extends Controller
{
    use Imageable;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $records = Testimonial::orderByDesc('id')->paginate(10);
        return Inertia::render('Testimonials/Listing', compact('records'));
    } 

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        if($request->file('image')) {
            $input['image'] = $this->uploadImage($request->file('image'), '', 'testimonials');
         }
         $input['created_at'] = Carbon::now();
         Testimonial::insert($input);

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
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->except('created_at', 'updated_at');
        if($request->file('image')) {
            $input['image'] = $this->uploadImage($request->file('image'), '', 'testimonials');
         }
         
         $input['updated_at'] = Carbon::now();
         Testimonial::where('id', $id)->update($input);
       return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->back();
    }
}
