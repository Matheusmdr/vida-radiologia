<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

use Illuminate\Support\Str;

class ExamController extends Controller
{
  public function index()
  {
    $exams = Exam::with('subexams')->get();

    return Inertia::render('exames/index', [
      'exams' => $exams,
    ]);
  }

  public function show($slug)
  {
    $exam = Exam::with('subexams')->where('slug', $slug)->firstOrFail();

    return Inertia::render('exames/exame/index', [
      'exam' => $exam,
    ]);
  }

  public function adminIndex()
  {
    $exams = Exam::orderBy('created_at', 'desc')->get();
    return Inertia::render('admin/exams/index', [
      'exams' => $exams,
    ]);
  }

  public function create()
  {
    return Inertia::render('admin/exams/create');
  }


  public function store(Request $request)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'body' => 'nullable|string',
      'body_2' => 'nullable|string',
      'icon' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
      'illustration_image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'illustration_image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'user_id' => 'required',
    ]);

    if (empty($validated['body'])) {
      $validated['body'] = '';
    }

    if (empty($validated['body_2'])) {
      $validated['body_2'] = '';
    }


    if ($request->hasFile('icon')) {
      $iconPath = $request->file('icon')->store('/exams/icon', 'public');
      $iconUrl = '/storage/' . $iconPath;
      $validated['icon'] = $iconUrl;
    }

    if ($request->hasFile('illustration_image_1')) {
      $illustration1Path = $request->file('illustration_image_1')->store('/exams/illustration', 'public');
      $illustration1Url = '/storage/' . $illustration1Path;
      $validated['illustration_image_1'] = $illustration1Url;
    }

    if ($request->hasFile('illustration_image_2')) {
      $illustration2Path = $request->file('illustration_image_2')->store('/exams/illustration', 'public');
      $illustration2Url = '/storage/' . $illustration2Path;
      $validated['illustration_image_2'] = $illustration2Url;
    }


    $validated['slug'] = Str::slug($validated['title']);


    Exam::create($validated);

    return redirect()->route('exam.adminIndex')
      ->with('success', 'Exam created successfully.');
  }


  public function edit($examId)
  {
    $exam = Exam::find($examId);
    return Inertia::render('admin/exams/edit', [
      'exam' => $exam,
    ]);
  }


  public function update(Request $request, $examId)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'body' => 'nullable|string',
      'body_2' => 'nullable|string',
      'icon' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'illustration_image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
      'illustration_image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    if (empty($validated['body'])) {
      $validated['body'] = '';
    }


    if (empty($validated['body_2'])) {
      $validated['body_2'] = '';
    }

    $exam = Exam::findOrFail($examId);

    if ($request->hasFile('icon')) {
      if ($exam->icon) {
        $oldIconPath = str_replace('storage/', '', $exam->icon);
        if (Storage::disk('public')->exists($oldIconPath)) {
          Storage::disk('public')->delete($oldIconPath);
        }
      }
      $iconPath = $request->file('icon')->store('/exams/icon', 'public');
      $exam->icon = '/storage/' . $iconPath;
    }

    if ($request->hasFile('illustration_image_1')) {
      if ($exam->illustration_image_1) {
        $oldIllustration1Path = str_replace('storage/', '', $exam->illustration_image_1);
        if (Storage::disk('public')->exists($oldIllustration1Path)) {
          Storage::disk('public')->delete($oldIllustration1Path);
        }
      }
      $illustration1Path = $request->file('illustration_image_1')->store('/exams/illustration', 'public');
      $exam->illustration_image_1 = '/storage/' . $illustration1Path;
    }

    if ($request->hasFile('illustration_image_2')) {
      if ($exam->illustration_image_2) {
        $oldIllustration2Path = str_replace('storage/', '', $exam->illustration_image_2);
        if (Storage::disk('public')->exists($oldIllustration2Path)) {
          Storage::disk('public')->delete($oldIllustration2Path);
        }
      }
      $illustration2Path = $request->file('illustration_image_2')->store('/exams/illustration', 'public');
      $exam->illustration_image_2 = '/storage/' . $illustration2Path;
    }

    $exam->slug = Str::slug($request->input('title'));
    $exam->title = $request->input('title');
    $exam->body = $request->input('body');
    $exam->body_2 = $request->input('body_2');
    $exam->save();

    return redirect()->back()->with('success', 'Exam updated successfully.');
  }

  public function deleteImage(Request $request, $examId)
  {
    $request->validate([
      'image_type' => 'required|in:icon,illustration_image_1,illustration_image_2',
    ]);

    $exam = Exam::findOrFail($examId);

    if ($request->input('image_type') === 'icon') {
      if ($exam->icon) {
        $iconPath = str_replace('storage/', '', $exam->icon);
        Storage::disk('public')->delete($iconPath);

        $exam->icon = null;
      }
    } elseif ($request->input('image_type') === 'illustration_image_2') {
      if ($exam->illustration_image_2) {
        $illustration1ImagePath = str_replace('storage/', '', $exam->illustration_image_2);
        Storage::disk('public')->delete($illustration1ImagePath);

        $exam->illustration_image_2 = null;
      }
    } elseif ($request->input('image_type') === 'illustration_image_1') {
      if ($exam->illustration_image_1) {
        $illustration1ImagePath = str_replace('storage/', '', $exam->illustration_image_1);
        Storage::disk('public')->delete($illustration1ImagePath);

        $exam->illustration_image_1 = null;
      }
    }

    $exam->save();

    return redirect()->back()->with('success', 'Image deleted successfully.');
  }

  public function destroy($examId)
  {
    $exam = Exam::findOrFail($examId);

    if ($exam->icon) {
      $iconPath = str_replace('storage/', '',  $exam->icon);
      Storage::disk('public')->delete($iconPath);
    }

    if ($exam->illustration_image_1) {
      $illustration1Path = str_replace('storage/', '',  $exam->illustration_image_1);
      Storage::disk('public')->delete($illustration1Path);
    }

    if ($exam->illustration_image_2) {
      $illustration2Path = str_replace('storage/', '',  $exam->illustration_image_2);
      Storage::disk('public')->delete($illustration2Path);
    }

    $exam->delete();

    return redirect()->route('exam.adminIndex')
      ->with('success', 'Exam deleted successfully.');
  }
}
