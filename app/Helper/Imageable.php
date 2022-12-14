<?php 
namespace App\Helper;

Trait Imageable 
{
    public function storeMedia($request, $folderPath)
    {
        $path = public_path('uploads/'.$folderPath);

        if ( ! file_exists($path) ) {
            mkdir($path, 0777, true);
        }

        $file = $request;
        $fileName = uniqid() . '_' . trim($file->getClientOriginalName());
        $file->move($path, $fileName);
        return $fileName;
    }
}