<?php

namespace App\Http\Controllers;

use App\Models\ClinicalStaff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ClinicalStaffController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $clinicalStaff = ClinicalStaff::orderByRaw('cover IS NULL, name ASC')->get();

    return Inertia::render('corpo-clinico', [
      'clinicalStaff' => $clinicalStaff,
    ]);
  }


  public function adminIndex()
  {
    $clinicalStaff = ClinicalStaff::orderBy('name', 'asc')->get();

    return Inertia::render('admin/clinical-staff/index', [
      'clinicalStaff' => $clinicalStaff,
    ]);
  }


  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('admin/clinical-staff/create');
  }


  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'name' => 'required|string|max:255',
      'crm' => 'required|string|unique:clinical_staff,crm',
      'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'body' => 'nullable|string',
      'phone' => 'nullable|string',
      'email' => 'nullable|string|email',
    ]);

    if ($request->hasFile('cover')) {
      $coverImagePath = $request->file('cover')->store('clinical_staff', 'public');
      $coverImageUrl = '/storage/' . $coverImagePath;
      $validatedData['cover'] = $coverImageUrl;
    }

    ClinicalStaff::create($validatedData);

    return redirect()->route('clinicalStaff.adminIndex')
      ->with('success', 'Staff created successfully.');
  }

  /**
   * Display the specified resource.
   */
  public function show(ClinicalStaff $clinicalStaff)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(int $clinicalStaffId)
  {
    $clinicalStaff = ClinicalStaff::find($clinicalStaffId);
    return Inertia::render('admin/clinical-staff/edit', [
      'clinicalStaff' => $clinicalStaff,
    ]);
  }



  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, int $clinicalStaffId)
  {

    $clinicalStaff = ClinicalStaff::findOrFail($clinicalStaffId);

    $validatedData = $request->validate([
      'name' => 'sometimes|required|string|max:255',
      'crm' => 'sometimes|required|string|unique:clinical_staff,crm,' . $clinicalStaff->id,
      'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'body' => 'nullable|string',
      'phone' => 'nullable|string',
      'email' => 'nullable|string|email',
    ]);

    if ($request->hasFile('cover')) {
      if ($clinicalStaff->cover) {
        $oldCoverImagePath = str_replace('storage/', '', $clinicalStaff->cover);
        if (Storage::disk('public')->exists($oldCoverImagePath)) {
          Storage::disk('public')->delete($oldCoverImagePath);
        }
      }
      $coverImagePath = $request->file('cover')->store('clinical_staff', 'public');
      $cover = '/storage/' . $coverImagePath;

      $validatedData['cover'] = $cover;
    }

    $clinicalStaff->update($validatedData);


    return redirect()->back()->with('success', 'Staff updated successfully.');
  }


  public function deleteImage(Request $request, int $clinicalStaffId)
  {
    $clinicalStaff = ClinicalStaff::findOrFail($clinicalStaffId);

    if ($clinicalStaff->cover) {
      $coverImagePath = str_replace('storage/', '', $clinicalStaff->cover);
      Storage::disk('public')->delete($coverImagePath);

      $clinicalStaff->cover = null;
    }

    $clinicalStaff->save();

    return redirect()->back()->with('success', 'Image deleted successfully.');
  }


  /**
   * Remove the specified resource from storage.
   */
  public function destroy(int $clinicalStaffId)
  {
    $clinicalStaff = ClinicalStaff::findOrFail($clinicalStaffId);


    if ($clinicalStaff->cover) {
      $coverImagePath = str_replace('storage/', '', $clinicalStaff->cover);
      Storage::disk('public')->delete($coverImagePath);
    }


    $clinicalStaff->delete();
    return redirect()->route('clinicalStaff.adminIndex')
      ->with('success', 'Staff deleted successfully.');
  }
}
