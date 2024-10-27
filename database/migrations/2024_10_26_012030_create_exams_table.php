<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique(); 
            $table->text('body')->nullable(); // Definindo o campo `body` como nullable
            $table->text('body_2')->nullable()->after('body'); // Adicionando o campo `body_2`
            $table->string('illustration_image_1')->nullable(); // Definindo `illustration_image_1` como nullable
            $table->string('illustration_image_2')->nullable(); // Definindo `illustration_image_2` como nullable
            $table->string('icon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exams');
    }
};
