<?php

use App\Http\Controllers\ClinicalStaffController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\HomeBannerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SubExamController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);

Route::get('/exames', [ExamController::class, 'index']);

Route::get('/exames/{slug}', [ExamController::class, 'show']);


Route::get('/convenios', function () {
    return Inertia::render('convenios');
});

Route::get('/unidades', [UnitController::class, 'index']);

Route::get('/corpo-clinico', [ClinicalStaffController::class, 'index']);


Route::get('/admin', function () {
    return redirect()->route('exam.adminIndex');
})->middleware(['auth', 'verified'])->name('admin');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/units', [UnitController::class, 'adminIndex'])->name('units.adminIndex');
    Route::get('/admin/units/create', [UnitController::class, 'create'])->name('units.create');
    Route::post('/admin/units', [UnitController::class, 'store'])->name('units.store');
    Route::get('/admin/units/edit/{unitId}', [UnitController::class, 'edit'])->name('units.edit');
    Route::put('/admin/units/{unitId}', [UnitController::class, 'update'])->name('units.update');
    Route::delete('/admin/units/delete/{unitId}', [UnitController::class, 'destroy'])->name('units.destroy');
    Route::post('/admin/units/{unitId}/delete-image', [UnitController::class, 'deleteImage'])
        ->name('units.deleteImage');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/clinical-staff', [ClinicalStaffController::class, 'adminIndex'])->name('clinicalStaff.adminIndex');
    Route::get('/admin/clinical-staff/create', [ClinicalStaffController::class, 'create'])->name('clinicalStaff.create');
    Route::post('/admin/clinical-staff', [ClinicalStaffController::class, 'store'])->name('clinicalStaff.store');
    Route::get('/admin/clinical-staff/edit/{clinicalStaffId}', [ClinicalStaffController::class, 'edit'])->name('clinicalStaff.edit');
    Route::put('/admin/clinical-staff/{clinicalStaffId}', [ClinicalStaffController::class, 'update'])->name('clinicalStaff.update');
    Route::delete('/admin/clinical-staff/delete/{clinicalStaffId}', [ClinicalStaffController::class, 'destroy'])->name('clinicalStaff.destroy');
    Route::post('/admin/clinical-staff/{clinicalStaffId}/delete-image', [ClinicalStaffController::class, 'deleteImage'])
        ->name('clinicalStaff.deleteImage');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/exams', [ExamController::class, 'adminIndex'])->name('exam.adminIndex');
    Route::get('/admin/exams/create', [ExamController::class, 'create'])->name('exam.create');
    Route::post('/admin/exams', [ExamController::class, 'store'])->name('exam.store');
    Route::get('/admin/exams/edit/{examId}', [ExamController::class, 'edit'])->name('exam.edit');
    Route::put('/admin/exams/{examId}', [ExamController::class, 'update'])->name('exam.update');
    Route::delete('/admin/exams/delete/{examId}', [ExamController::class, 'destroy'])->name('exam.destroy');
    Route::post('/admin/exams/{examId}/delete-image', [ExamController::class, 'deleteImage'])
        ->name('exam.deleteImage');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/exams/{examId}/subexams', [SubExamController::class, 'adminIndex'])->name('subexam.adminIndex');
    Route::get('/admin/exams/{examId}/create', [SubExamController::class, 'create'])->name('subexam.create');
    Route::post('/admin/exams/{examId}/subexams', [SubExamController::class, 'store'])->name('subexam.store');
    Route::get('/admin/exams/{examId}/subexams/edit/{subexamId}', [SubExamController::class, 'edit'])->name('subexam.edit');
    Route::put('/admin/exams/{examId}/subexams/{subexamId}', [SubExamController::class, 'update'])->name('subexam.update');
    Route::delete('/admin/exams/{examId}/subexams/delete/{subexamId}', [SubExamController::class, 'destroy'])->name('subexam.destroy');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/users', [UserController::class, 'index'])->name('user.index');
    Route::get('/admin/users/create', [UserController::class, 'create'])->name('user.create');
    Route::post('/admin/users', [UserController::class, 'store'])->name('user.store');
    Route::get('/admin/users/edit/{userId}', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/admin/users/{userId}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/admin/users/delete/{userId}', [UserController::class, 'destroy'])->name('user.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/banners', [HomeBannerController::class, 'adminIndex'])->name('banners.adminIndex');
    Route::get('/admin/banners/create', [HomeBannerController::class, 'create'])->name('banners.create');
    Route::post('/admin/banners', [HomeBannerController::class, 'store'])->name('banners.store');
    Route::get('/admin/banners/edit/{bannerId}', [HomeBannerController::class, 'edit'])->name('banners.edit');
    Route::put('/admin/banners/{bannerId}', [HomeBannerController::class, 'update'])->name('banners.update');
    Route::delete('/admin/banners/delete/{bannerId}', [HomeBannerController::class, 'destroy'])->name('banners.destroy');
    Route::post('/admin/banners/{bannerId}/delete-image', [HomeBannerController::class, 'deleteImage'])
        ->name('banners.deleteImage');
});


require __DIR__ . '/auth.php';
