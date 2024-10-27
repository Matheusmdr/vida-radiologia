<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class ClinicalStaff extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'crm',
        'cover',
        'description',
        'body',
        'phone',
        'email',
    ];

}