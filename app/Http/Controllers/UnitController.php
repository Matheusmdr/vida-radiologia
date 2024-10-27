<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UnitController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $units = Unit::orderBy('created_at', 'asc')->get();

    return Inertia::render('unidades', [
      'units' => $units,
    ]);
  }


  public function adminIndex()
  {
    $units = Unit::where('active', true)->orderBy('created_at', 'desc')->get();

    return Inertia::render('admin/units/index', [
      'units' => $units,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */

  public function create()
  {
    return Inertia::render('admin/units/create');
  }


  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'title' => 'required|string|max:255',
      'cover' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
      'body' => 'nullable|string',
      'address' => 'required|string',
      'gmaps_link' => 'required|string',
      'phone' => 'required|string',
      'email' => 'nullable|string',
      'whatsapp' => 'nullable|string',
      'active' => 'required|boolean',
    ]);

    if (empty($validatedData['body'])) {
      $validatedData['body'] = '';
    }

    if ($request->hasFile('cover')) {
      $coverImagePath = $request->file('cover')->store('units', 'public');
      $coverImageUrl = '/storage/' . $coverImagePath;
      $validatedData['cover'] = $coverImageUrl;
    }

    $validatedData['slug'] = Str::slug($validatedData['title'], '-');

    Unit::create($validatedData);

    return redirect()->route('units.adminIndex')
      ->with('success', 'Unit created successfully.');
  }

  /**
   * Display the specified resource.
   */
  public function show(Unit $unit)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(int $unitId)
  {
    $unit = Unit::find($unitId);
    return Inertia::render('admin/units/edit', [
      'unit' => $unit,
    ]);
  }


  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, int $unitid)
  {

    $validatedData = $request->validate([
      'title' => 'sometimes|required|string|max:255',
      'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'body' => 'nullable|string',
      'address' => 'required|string',
      'gmaps_link' => 'required|string',
      'phone' => 'required|string',
      'email' => 'nullable|string',
      'whatsapp' => 'nullable|string',
      'active' => 'required|boolean',
    ]);

    if (empty($validatedData['body'])) {
      $validatedData['body'] = '';
    }

    $unit = Unit::findOrFail($unitid);

    if ($request->hasFile('cover')) {
      if ($unit->cover) {
        $oldCoverImagePath = str_replace('storage/', '', $unit->cover);
        if (Storage::disk('public')->exists($oldCoverImagePath)) {
          Storage::disk('public')->delete($oldCoverImagePath);
        }
      }
      $coverImagePath = $request->file('cover')->store('units', 'public');
      $cover = '/storage/' . $coverImagePath;
      $validatedData['cover'] = $cover;
    }

    $unit->update($validatedData);

    return redirect()->back()->with('success', 'Unit updated successfully.');
  }


  public function deleteImage(Request $request, int $unitId)
  {
    $unit = Unit::findOrFail($unitId);

    if ($unit->cover) {
      $coverImagePath = str_replace('storage/', '', $unit->cover);
      Storage::disk('public')->delete($coverImagePath);

      $unit->cover = null;
    }

    $unit->save();

    return redirect()->back()->with('success', 'Image deleted successfully.');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(int $unitid)
  {
    $unit = Unit::findOrFail($unitid);

    if ($unit->cover) {
      $coverImagePath = str_replace('storage/', '', $unit->cover);
      Storage::disk('public')->delete($coverImagePath);
    }

    $unit->delete();
    return redirect()->route('units.adminIndex')
      ->with('success', 'Unit deleted successfully.');
  }
}
