<?php

namespace App\Http\Controllers;

use App\Models\HomeBanners;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeBannerController extends Controller
{
  public function index()
  {
    return HomeBanners::all();
  }

  public function adminIndex()
  {
    $banners = HomeBanners::orderBy('created_at', 'desc')->get();
    return Inertia::render('admin/banners/index', [
      'banners' => $banners,
    ]);
  }


  public function create()
  {
    return Inertia::render('admin/banners/create');
  }


  public function store(Request $request)
  {
    $validatedData = $request->validate([
      'title' => 'nullable|string|max:255',
      'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'description' => 'nullable',
      'link' => 'nullable|string',
      'order' => 'nullable|integer',
      'active' => 'boolean'
    ]);

    if ($request->hasFile('image')) {
      $coverImagePath = $request->file('image')->store('banners', 'public');
      $coverImageUrl = '/storage/' . $coverImagePath;
      $validatedData['image'] = $coverImageUrl;
    }
    HomeBanners::create($validatedData);

    return redirect()->route('banners.adminIndex')
      ->with('success', 'Banner created successfully.');
  }


  public function edit(int $bannerId)
  {
    $banner = HomeBanners::find($bannerId);
    return Inertia::render('admin/banners/edit', [
      'banner' => $banner,
    ]);
  }


  public function update(Request $request, int $bannerId)
  {
    $validatedData = $request->validate([
      'title' => 'nullable|string|max:255',
      'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'description' => 'nullable',
      'link' => 'nullable|string',
      'order' => 'nullable|integer',
      'active' => 'boolean'
    ]);

    $homeBanner = HomeBanners::findOrFail($bannerId);

    if ($request->hasFile('image')) {
      if ($homeBanner->image) {
        $oldCoverImagePath = str_replace('storage/', '', $homeBanner->image);
        if (Storage::disk('public')->exists($oldCoverImagePath)) {
          Storage::disk('public')->delete($oldCoverImagePath);
        }
      }
      $coverImagePath = $request->file('image')->store('banners', 'public');
      $imagePath = '/storage/' . $coverImagePath;

      $validatedData['image'] = $imagePath;
    }

    $homeBanner->update($validatedData);

    return redirect()->back()->with('success', 'Banner updated successfully.');
  }


  public function deleteImage(Request $request, int $bannerId)
  {
    $banner = HomeBanners::findOrFail($bannerId);

    if ($banner->image) {
      $coverImagePath = str_replace('storage/', '', $banner->image);
      Storage::disk('public')->delete($coverImagePath);

      $banner->image = null;
    }

    $banner->save();

    return redirect()->back()->with('success', 'Image deleted successfully.');
  }

  public function destroy(int $bannerId)
  {
    $homeBanner = HomeBanners::findOrFail($bannerId);

    if ($homeBanner->image) {
      $coverImagePath = str_replace('storage/', '', $homeBanner->image);
      Storage::disk('public')->delete($coverImagePath);
    }


    $homeBanner->delete();
    return redirect()->route('banners.adminIndex')
      ->with('success', 'News deleted successfully.');
  }
}
