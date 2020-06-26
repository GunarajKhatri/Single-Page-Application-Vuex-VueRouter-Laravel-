<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Student;
class StudentController extends Controller
{
    public function saving(Request $request)
    {     
    	$std=new Student;
        $this->validate($request,[
            "name"=>"required|max:20",
            "email"=>"required|email|unique:students",
            "number"=>"required|unique:students|max:10"
            
        ]);
        $std->name=$request->name;
        $std->email=$request->email;
        $std->number=$request->number;
        $std->save();
        return 'done';
    }
    public function showing()
    {  
        return Student::all();
        
    }
    public function deleting($id)
    {
        Student::where('id',$id)->delete();

    }
    public function updating(Request $request,$id)
    {
        $std=Student::find($id);
        $std->name=$request->name;
        $std->email=$request->email;
        $std->number=$request->number;
        $std->save();
        return 'Updated';
    }
}
