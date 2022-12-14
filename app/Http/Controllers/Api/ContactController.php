<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ContactController extends Controller
{

    public function store(Request $request)
    {
        Contact::insert([
            'name' => $request['fullname'],
            'email' => $request['email'],
            'company' => $request['company'],
            'location' => $request['company_location'],
            'message' => $request['message'],
            'created_at' => Carbon::now(),
        ]);
        return [
            "status" => 200,
            "data" => ['message' => 'Your message has been sent. Thank you!']
        ];
      
    }
   
}
