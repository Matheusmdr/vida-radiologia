<?php

namespace App\Http\Controllers;

use App\Mail\Contact;
use App\Mail\WorkWithUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{

  public function index()
  {
    return Inertia::render('fale-conosco');
  }


  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string',
      'email' => 'required|string',
      'phone' => 'required|string',
      'subject' => 'required|string',
      'message' => 'required|string',
    ]);


    $sent =  Mail::to('contato@irpp.com.br', 'Contato IRPP')->send(new Contact([
      'name' => $validated['name'],
      'email' => $validated['email'],
      'phone' => $validated['phone'],
      'subject' => $validated['subject'],
      'message' => $validated['message'],
    ]));


    return redirect()->back()->with('success', 'Your message has been sent successfully.');
  }
}
