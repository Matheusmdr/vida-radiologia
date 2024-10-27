<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'body',
        'body_2',
        'illustration_image_1',
        'illustration_image_2',
        'icon',
    ];

    
    public function subexams()
    {
        return $this->hasMany(Subexam::class);
    }

}
