<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function submit(Request $request)
    {
        // rules
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:2',
            'email' => 'required|email',
            'message' => 'required|min:10|max:500'
        ]);

        // If validation fails, return errors
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

       
        return response()->json([
            'message' => 'Form submitted successfully'
        ], 200);
    }
}