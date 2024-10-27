<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subexam extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'title',
        'body',
        'slug',
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }
}
