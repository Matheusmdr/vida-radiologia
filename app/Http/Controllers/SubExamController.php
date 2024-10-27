<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\Subexam;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SubExamController extends Controller
{
  public function adminIndex($examId)
  {
    $exam = Exam::findOrFail($examId);
    $subexams = Subexam::where('exam_id', $examId)->get();

    return Inertia::render('admin/exams/subexams/index', [
      'exam' => $exam,
      'subexams' => $subexams,
    ]);
  }

  public function create($examId)
  {
    $exam = Exam::findOrFail($examId);

    return Inertia::render('admin/exams/subexams/create', [
      'exam' => $exam,
    ]);
  }

  public function store(Request $request, $examId)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'body' => 'required',
    ]);

    $validated['exam_id'] = $examId;
    $validated['slug'] = Str::slug($validated['title']);

    Subexam::create($validated);

    return redirect()->route('subexam.adminIndex', $examId)
      ->with('success', 'Subexam created successfully.');
  }

  public function edit($examId, $subexamId)
  {
    $exam = Exam::findOrFail($examId);
    $subexam = Subexam::findOrFail($subexamId);

    return Inertia::render('admin/exams/subexams/edit', [
      'exam' => $exam,
      'subexam' => $subexam,
    ]);
  }

  public function update(Request $request, $examId, $subexamId)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'body' => 'required',
    ]);

    $subexam = Subexam::findOrFail($subexamId);

    $subexam->update([
      'title' => $validated['title'],
      'body' => $validated['body'],
      'slug' => Str::slug($validated['title']),
    ]);

    return redirect()->route('subexam.adminIndex', $examId)
      ->with('success', 'Subexam updated successfully.');
  }

  public function destroy($examId, $subexamId)
  {
    $subexam = Subexam::findOrFail($subexamId);
    $subexam->delete();

    return redirect()->route('subexam.adminIndex', $examId)
      ->with('success', 'Subexam deleted successfully.');
  }
}
