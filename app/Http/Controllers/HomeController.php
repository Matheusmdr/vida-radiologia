<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    $units = Unit::where('active', true)->orderBy('title', 'asc')->get();

    return Inertia::render('index', [
      'units' => $units
    ]);
  }
}
